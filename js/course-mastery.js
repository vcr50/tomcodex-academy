(function () {
  const config = window.TomCodexCourseConfig || {
    modules: window.TomCodexAdminModules,
    masteryKey: "tomcodex.adminMasteryScores.v1",
    courseName: "Salesforce Administrator",
    recordLabel: "Admin",
    moduleHours: 6
  };
  const modules = config.modules;
  const MASTERY_KEY = config.masteryKey;
  const courseName = config.courseName;
  const recordLabel = config.recordLabel;
  const moduleHours = config.moduleHours;
  const COURSE_KEY_MAP = {
    "Salesforce Administrator": "admin",
    "Apex Development": "apex",
    "Salesforce Flow": "flow",
    "Lightning Web Components": "lwc",
    "Salesforce Integration": "integration",
    "Salesforce Agentforce": "agentforce",
    "Final POC Project": "poc"
  };
  const courseKey = COURSE_KEY_MAP[courseName] || "admin";
  const currentPage = window.location.pathname.split("/").pop();
  if (currentPage && currentPage.startsWith("course-") && currentPage.endsWith(".html")) {
    localStorage.setItem("tomcodex.recentCourse.v1", currentPage);
  }
  const AUTH_SESSION_KEY = "tomcodex.authSession.v1";
  const FINAL_EXAM_KEY = `${MASTERY_KEY}.finalExam`;
  const FINAL_EXAM_QUESTION_COUNT = 60;
  const FINAL_EXAM_SECONDS = 60 * 60;
  const FINAL_EXAM_PASS_SCORE = 65;
  const MODULE_SELECTION_KEY = `${MASTERY_KEY}.selectedModule`;
  const requestedModuleParam = new URLSearchParams(window.location.search).get("module");
  const requestedModuleNumber = requestedModuleParam === null ? NaN : Number(requestedModuleParam);
  const requestedModule = Number.isInteger(requestedModuleNumber)
    ? requestedModuleNumber > 0
      ? requestedModuleNumber - 1
      : requestedModuleNumber
    : NaN;
  let masteryScores = loadScores();
  let currentModule = resolveInitialModule();
  let activeTestQuestions = [];
  let flashcardIndex = 0;
  let flashcardShowingAnswer = false;
  let finalExamQuestions = [];
  let finalExamTimer;
  let finalExamSecondsLeft = FINAL_EXAM_SECONDS;
  const el = (id) => document.getElementById(id);
  const isLocalDevelopment = ["localhost", "127.0.0.1", "::1"].includes(window.location.hostname);
  const isAdmin = isLocalDevelopment || loadRole() === "admin";

  function loadScores() {
    try { return JSON.parse(localStorage.getItem(MASTERY_KEY)) || {}; } catch { return {}; }
  }
  function loadRole() {
    try {
      const session = JSON.parse(localStorage.getItem(AUTH_SESSION_KEY));
      return session?.role === "admin" ? "admin" : "user";
    } catch {
      return "user";
    }
  }
  function saveScores() { localStorage.setItem(MASTERY_KEY, JSON.stringify(masteryScores)); }
  function scoreFor(index) { return Number(masteryScores[index]?.score) || 0; }
  function isValidModuleIndex(index) { return Number.isInteger(index) && index >= 0 && index < modules.length; }
  function labAttemptSummaryFor(index) {
    const moduleId = `${courseKey}-${index + 1}`;
    const legacyId = `${courseKey}-module-${index + 1}`;
    const attempts = loadJson(`tomcodex.${courseKey}LabAttempts.v1`, {});
    const legacyAttempts = loadJson("tomcodex.adminLabAttempts.v1", {});
    return attempts[`${moduleId}:summary`] || legacyAttempts[`${moduleId}:summary`] || attempts[`${legacyId}:summary`] || legacyAttempts[`${legacyId}:summary`] || null;
  }
  function labResultFor(index) {
    const labResults = loadJson(`${MASTERY_KEY}.labResults`, {});
    return labResults[index] || labResults[String(index)] || null;
  }
  function bestStudyScore(index) {
    return Math.max(
      scoreFor(index),
      Number(labAttemptSummaryFor(index)?.bestScore) || 0,
      Number(labResultFor(index)?.score) || 0
    );
  }
  function hasStudyHistory(index) {
    if (scoreFor(index) > 0 || labResultFor(index)) return true;
    const moduleId = `${courseKey}-${index + 1}`;
    const legacyId = `${courseKey}-module-${index + 1}`;
    const attempts = loadJson(`tomcodex.${courseKey}LabAttempts.v1`, {});
    const legacyAttempts = loadJson("tomcodex.adminLabAttempts.v1", {});
    return Boolean(
      labAttemptSummaryFor(index)
      || (Array.isArray(attempts[moduleId]) && attempts[moduleId].length)
      || (Array.isArray(attempts[legacyId]) && attempts[legacyId].length)
      || (Array.isArray(legacyAttempts[moduleId]) && legacyAttempts[moduleId].length)
      || (Array.isArray(legacyAttempts[legacyId]) && legacyAttempts[legacyId].length)
    );
  }
  function nextModuleFromStudyHistory() {
    let hasAnyHistory = false;
    for (let index = 0; index < modules.length; index += 1) {
      if (hasStudyHistory(index)) hasAnyHistory = true;
      if (hasAnyHistory && bestStudyScore(index) < 80) return index;
    }
    return hasAnyHistory ? modules.length - 1 : 0;
  }
  function resolveInitialModule() {
    if (isValidModuleIndex(requestedModule)) return requestedModule;
    return nextModuleFromStudyHistory();
  }
  function passed(index) { return bestStudyScore(index) >= 80; }
  function getModuleState(index) {
    if (isAdmin) {
      return { state: "unlocked", label: "Admin access", canOpen: true };
    }

    const moduleId = `${courseKey}-${index + 1}`;
    
    // Check if verified - use course-specific attempts key
    const attemptsKey = `tomcodex.${courseKey}LabAttempts.v1`;
    const attempts = loadJson(attemptsKey, {});
    // Also check legacy admin key for backward compat
    const legacyAttempts = loadJson("tomcodex.adminLabAttempts.v1", {});
    const legacyId = `${courseKey}-module-${index + 1}`;
    const bestScore = attempts[`${moduleId}:summary`]?.bestScore || legacyAttempts[`${moduleId}:summary`]?.bestScore || attempts[`${legacyId}:summary`]?.bestScore || 0;
    const isModuleVerified = bestScore >= 80;

    if (isModuleVerified) {
      return {
        state: "verified",
        label: `Verified · Score: ${bestScore}%`,
        canOpen: true
      };
    }

    // Check prerequisite (previous module must be verified)
    if (index > 0) {
    const prevModuleId = `${courseKey}-${index}`;
    const prevModuleIdLegacy = `${courseKey}-module-${index}`;
    const prevAttemptsKey = `tomcodex.${courseKey}LabAttempts.v1`;
    const prevAttempts = loadJson(prevAttemptsKey, {});
    const prevLegacyAttempts = loadJson("tomcodex.adminLabAttempts.v1", {});
    const prevBestScore = prevAttempts[`${prevModuleId}:summary`]?.bestScore || prevLegacyAttempts[`${prevModuleId}:summary`]?.bestScore || prevAttempts[`${prevModuleIdLegacy}:summary`]?.bestScore || 0;
      const isPrevVerified = prevBestScore >= 80;

      if (!isPrevVerified) {
        const prevModule = modules[index - 1];
        return {
          state: "gated",
          label: `Locked - Complete ${prevModule.title} first`,
          canOpen: false
        };
      }
    }

    // Check tier eligibility
    let authUser = {};
    try {
      authUser = JSON.parse(localStorage.getItem("tomcodex.auth.user.v1")) || JSON.parse(localStorage.getItem("tomcodex.authIdentity.v1")) || {};
    } catch {}
    const currentTier = authUser.tier || "free";
    const requiredTier = index === 0 ? "free" : "founder";

    if (requiredTier === "founder" && currentTier !== "founder") {
      return {
        state: "paywall",
        label: "Locked - Founder Access required",
        canOpen: true
      };
    }

    return {
      state: "unlocked",
      label: "Available",
      canOpen: true
    };
  }

  function unlocked(index) {
    const modState = getModuleState(index);
    return modState.canOpen;
  }

  function lockReason(index) {
    const modState = getModuleState(index);
    if (modState.state === "paywall") return "paywall";
    if (modState.state === "gated") return "gated";
    return null;
  }
  function allModulesPassed() { return modules.every((_, index) => passed(index)); }
  function finalExamUnlocked() { return isAdmin || allModulesPassed(); }

  function loadFinalExamResult() {
    try { return JSON.parse(localStorage.getItem(FINAL_EXAM_KEY)); } catch { return null; }
  }

  function saveFinalExamResult(result) {
    const previous = loadFinalExamResult();
    if (!previous || result.score >= previous.score) localStorage.setItem(FINAL_EXAM_KEY, JSON.stringify(result));
  }

  function showPaywall(index) {
    const module = modules[index];
    el("moduleContent").innerHTML = `
      <div class="paywall-container p-8 text-center bg-brand-950 text-white rounded-2xl border border-brand-500 shadow-2xl relative overflow-hidden my-6">
        <div class="absolute inset-0 opacity-15" style="background-image:radial-gradient(circle at 50% 50%,#24b5ff 0,transparent 60%)"></div>
        <div class="relative z-10 max-w-xl mx-auto py-10">
          <span class="text-xs bg-lime/20 text-lime px-3 py-1 rounded-full font-bold uppercase tracking-wider">Founder Access Required</span>
          <h2 class="mt-6 text-3xl font-extrabold text-white">Unlock all modules in the program</h2>
          <p class="mt-4 text-slate-300 text-sm leading-6">
            You are currently on the <strong>Free Starter Access</strong> tier. Complete all ${modules.length} ${courseName} modules, get unlimited Check My Work AI reviews, certification simulators, and verified completion credentials.
          </p>
          
          <div class="mt-8 p-4 bg-white/5 rounded-xl border border-white/10 text-left text-xs space-y-2">
            <h4 class="font-bold text-cyan-200 uppercase tracking-widest text-slate-200">Locked Module Info</h4>
            <div class="flex justify-between">
              <span>Module ${index + 1}: ${module.title}</span>
              <span class="text-slate-400">Duration: ~${moduleHours} hours</span>
            </div>
            <p class="text-slate-400 font-medium">${module.description}</p>
          </div>

          <div class="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="pricing.html" class="rounded-lg bg-lime px-6 py-3 font-extrabold text-brand-950 text-center hover:bg-white transition" style="box-shadow: 0 4px 14px rgba(216,255,95,.4);">
              View Pricing plans
            </a>
            <button id="quickUpgradeBtn" class="rounded-lg border border-white/30 bg-white/5 px-6 py-3 font-bold text-white hover:bg-white/10 transition">
              Quick Upgrade (Simulated)
            </button>
          </div>
        </div>
      </div>
    `;
    
    document.getElementById("quickUpgradeBtn").addEventListener("click", async () => {
      const btn = document.getElementById("quickUpgradeBtn");
      btn.disabled = true;
      btn.textContent = "Upgrading...";
      try {
        const res = await fetch("/api/student-upgrade", { method: "POST" });
        const data = await res.json();
        if (res.ok && data.success) {
          const cachedUser = JSON.parse(localStorage.getItem("tomcodex.auth.user.v1") || "{}");
          cachedUser.tier = "founder";
          cachedUser.upgradedAt = data.upgradedAt || new Date().toISOString();
          localStorage.setItem("tomcodex.auth.user.v1", JSON.stringify(cachedUser));

          const cachedIdentity = JSON.parse(localStorage.getItem("tomcodex.authIdentity.v1") || "{}");
          cachedIdentity.tier = "founder";
          localStorage.setItem("tomcodex.authIdentity.v1", JSON.stringify(cachedIdentity));
          
          currentModule = index;
          render();
        }
      } catch {
        btn.textContent = "Error upgrading";
        btn.disabled = false;
      }
    });
  }

  function renderNav() {
    el("moduleNav").innerHTML = modules.map((module, index) => {
      const moduleState = getModuleState(index);
      
      let icon = "";
      let disabledAttr = "";
      let buttonClass = "";
      
      if (moduleState.state === "verified") {
        icon = "\u2713";
        buttonClass = "done";
      } else if (moduleState.state === "paywall") {
        icon = "★";
        buttonClass = "paywall-locked";
      } else if (moduleState.state === "gated") {
        icon = "\uD83D\uDD12";
        disabledAttr = "disabled";
        buttonClass = "locked";
      } else {
        icon = index + 1;
        buttonClass = "";
      }
      
      if (index === currentModule) buttonClass += " active";
      
      const trackLabel = module.subCourse?.title ? `${module.subCourse.title} · ` : "";
      return `<button type="button" data-module="${index}" ${disabledAttr} class="${buttonClass}"><span class="module-number">${icon}</span><span><strong>${module.title}</strong><span>${trackLabel}${moduleState.label}</span></span></button>`;
    }).join("");

    const moduleSelect = el("moduleSelect");
    if (moduleSelect) {
      moduleSelect.innerHTML = modules.map((module, index) => {
        const moduleState = getModuleState(index);
        const unavailable = moduleState.state === "gated" ? " disabled" : "";
        const track = module.subCourse?.title || courseName;
        return `<option value="${index}"${index === currentModule ? " selected" : ""}${unavailable}>Module ${index + 1}: ${module.title} - ${track}</option>`;
      }).join("");
      moduleSelect.onchange = () => selectModuleAndShowContent(Number(moduleSelect.value));
    }

    el("moduleNav").onclick = (event) => {
      const button = event.target.closest("[data-module]");
      if (!button || !el("moduleNav").contains(button)) return;
      selectModuleAndShowContent(Number(button.dataset.module));
    };
  }

  function selectModuleAndShowContent(index) {
    if (!Number.isInteger(index) || index < 0 || index >= modules.length) return;
    const moduleState = getModuleState(index);
    if (moduleState.state === "paywall") {
      showPaywall(index);
      return;
    }
    if (moduleState.state === "gated") return;
    currentModule = index;
    localStorage.setItem(MODULE_SELECTION_KEY, String(index));
    const selectedUrl = new URL(window.location.href);
    selectedUrl.searchParams.set("module", String(index + 1));
    window.history.replaceState({}, "", selectedUrl);
    render();
    el("moduleContent")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function navigateToAdjacentModule(direction) {
    const targetIndex = currentModule + direction;
    if (targetIndex < 0 || targetIndex >= modules.length) {
      if (direction > 0 && currentModule === modules.length - 1 && (isAdmin || passed(currentModule))) {
        el("finalExamSection")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      return;
    }
    if (direction > 0 && !isAdmin && !passed(currentModule)) return;
    selectModuleAndShowContent(targetIndex);
  }

  function updateModuleNavigationButtons(isPassed) {
    const previousTitle = modules[currentModule - 1]?.title;
    const nextTitle = modules[currentModule + 1]?.title;
    const previousButtons = [el("previousModuleTopBtn"), el("previousModuleBtn")].filter(Boolean);
    const nextButtons = [el("nextModuleTopBtn"), el("nextModuleBtn")].filter(Boolean);

    previousButtons.forEach((button) => {
      button.disabled = currentModule === 0;
      button.textContent = previousTitle ? `Previous: ${previousTitle}` : "Previous module";
    });
    nextButtons.forEach((button) => {
      button.disabled = !isAdmin && !isPassed;
      button.textContent = nextTitle
        ? `Next: ${nextTitle}`
        : isAdmin || isPassed
          ? "Go to final exam"
          : "Pass 80% to unlock final exam";
    });
  }

  function renderProgress() {
    const count = modules.filter((_, index) => passed(index)).length;
    const progress = Math.round(count / modules.length * 100);
    el("courseProgressText").textContent = `${progress}%`;
    el("completedModulesText").textContent = `${count} / ${modules.length}`;
    el("courseProgressBar").style.width = `${progress}%`;
  }

  function injectFinalExam() {
    if (el("finalExamSection")) return;
    el("moduleContent").insertAdjacentHTML("beforeend", `
      <section id="finalExamSection" class="final-exam-section hidden">
        <div class="final-exam-intro">
          <div><span class="course-tag">Course certification test</span><h3>${courseName} final exam</h3><p>Complete a Salesforce certification-style exam after finishing the full course.</p></div>
          <div class="final-exam-facts"><span><strong>60</strong>MCQs</span><span><strong>60</strong>Minutes</span><span><strong>${FINAL_EXAM_PASS_SCORE}%</strong>Pass</span></div>
        </div>
        <div id="finalExamStatus" class="final-exam-status"></div>
        <button id="startFinalExamBtn" class="course-primary" type="button">Start final 60-question exam</button>
        <div id="finalExamPanel" class="final-exam-panel hidden">
          <div class="final-exam-toolbar"><div><span class="course-tag">Certification simulation</span><h3>${courseName} final exam</h3></div><div><span>Answered <strong id="finalExamAnswered">0 / 60</strong></span><span>Time left <strong id="finalExamTimer">60:00</strong></span></div></div>
          <div id="finalExamQuestions" class="final-exam-questions"></div>
          <button id="submitFinalExamBtn" class="course-primary" type="button">Submit final exam</button>
          <div id="finalExamResult" class="mastery-result hidden" aria-live="polite"></div>
        </div>
      </section>
    `);
    el("startFinalExamBtn").addEventListener("click", startFinalExam);
    el("submitFinalExamBtn").addEventListener("click", () => submitFinalExam(false));
    renderFinalExamStatus();
  }

  function renderFinalExamVisibility() {
    const section = el("finalExamSection");
    if (!section) return;
    const isFinalModule = currentModule === modules.length - 1;
    section.classList.toggle("hidden", !isFinalModule);
    if (!isFinalModule) {
      clearInterval(finalExamTimer);
      el("finalExamPanel")?.classList.add("hidden");
    }
  }

  function renderFinalExamStatus() {
    const unlocked = finalExamUnlocked();
    const result = loadFinalExamResult();
    const status = el("finalExamStatus");
    el("startFinalExamBtn").disabled = !unlocked;
    el("startFinalExamBtn").textContent = result ? "Retake final 60-question exam" : "Start final 60-question exam";
    if (!unlocked) {
      const passedCount = modules.filter((_, index) => passed(index)).length;
      status.className = "final-exam-status locked";
      status.textContent = `Locked: pass all modules first. Current progress: ${passedCount} of ${modules.length} modules passed.`;
      return;
    }
    if (result) {
      status.className = `final-exam-status ${result.passed ? "passed" : "ready"}`;
      status.textContent = `${result.passed ? "Certification exam passed" : "Best attempt"}: ${result.score}% (${result.correctAnswers}/${FINAL_EXAM_QUESTION_COUNT} correct).`;
      return;
    }
    status.className = "final-exam-status ready";
    status.textContent = isAdmin && !allModulesPassed() ? "Admin preview access: final exam is ready." : "All modules passed. Your final exam is ready.";
  }

  function seededShuffle(items, seed) {
    const output = [...items];
    let value = seed;
    for (let index = output.length - 1; index > 0; index -= 1) {
      value = (value * 9301 + 49297) % 233280;
      const swapIndex = Math.floor(value / 233280 * (index + 1));
      [output[index], output[swapIndex]] = [output[swapIndex], output[index]];
    }
    return output;
  }

  function examDistractors() {
    if (courseName === "Apex Development") return [
      "Process each record separately and place SOQL or DML inside loops.",
      "Run all logic without sharing or CRUD/FLS checks because Apex executes on the server.",
      "Deploy after reaching code coverage without asserting business behavior.",
      "Catch every exception silently so users never see an error.",
      "Put all trigger logic directly in one trigger without handler classes.",
      "Ignore governor limits until a production transaction fails.",
      "Hard-code record IDs and endpoints to finish the implementation faster.",
      "Use synchronous processing for every workload regardless of volume."
    ];
    if (courseName === "Salesforce Flow") return [
      "Perform Get Records and Update Records operations inside every loop iteration.",
      "Run in system context without reviewing user access or sensitive data exposure.",
      "Activate the Flow directly in production without tests or rollback planning.",
      "Build one large Flow with duplicated logic instead of reusable subflows.",
      "Omit fault paths and rely on users to report failures.",
      "Use Flow for every requirement even when Apex is the safer scalable choice.",
      "Allow record-triggered automation to update the same record without recursion controls.",
      "Test only the successful path as an administrator."
    ];
    if (courseName === "Lightning Web Components") return [
      "Manipulate the DOM directly and insert untrusted content with innerHTML.",
      "Call Apex repeatedly for data already available through Lightning Data Service.",
      "Keep all interface behavior in one large component with no clear responsibilities.",
      "Assume server-side Apex automatically enforces sharing, CRUD, and field access.",
      "Deploy the component without Jest tests, accessibility checks, or error states.",
      "Hard-code record IDs and navigation URLs in the component.",
      "Mutate component state during rendering and ignore lifecycle behavior.",
      "Hide server errors and leave users without loading or failure feedback."
    ];
    return [
      "Configure directly in production before confirming requirements or acceptance criteria.",
      "Grant broad administrator access instead of applying least privilege.",
      "Test only as a system administrator and assume every user has the same experience.",
      "Deploy without documentation, rollback planning, or post-release verification.",
      "Create custom configuration before evaluating standard Salesforce capabilities.",
      "Ignore data quality, reporting, and adoption impacts during design.",
      "Allow one urgent request to bypass governance and change review.",
      "Use manual workarounds instead of investigating the underlying process requirement."
    ];
  }

  function buildFinalExamQuestions() {
    const wrongApproaches = examDistractors();
    const prompts = [
      (item) => `A team is completing this task: ${item.practice} Which approach best supports a reliable solution?`,
      (item) => `During a ${item.module} implementation, which action follows recommended Salesforce practice?`,
      (item) => `Which option best demonstrates this ${item.module} objective: ${topicTitle(item.point)}?`
    ];
    const topics = modules.flatMap((module) => module.points.map((point, index) => ({ module: module.title, point, practice: module.practice[index] || module.practice[0] })));
    const candidates = topics.flatMap((item, pointIndex) => prompts.map((prompt, promptIndex) => {
      const distractors = seededShuffle(wrongApproaches, pointIndex * 19 + promptIndex * 31 + modules.length).slice(0, 3);
      const options = seededShuffle([item.point, ...distractors], pointIndex * 41 + promptIndex * 17 + courseName.length);
      return { prompt: prompt(item), module: item.module, options, correctIndex: options.indexOf(item.point) };
    }));
    return seededShuffle(candidates, courseName.length * 97 + modules.length).slice(0, FINAL_EXAM_QUESTION_COUNT);
  }

  function formatExamTime(seconds) {
    const minutes = Math.floor(seconds / 60).toString().padStart(2, "0");
    const remainder = (seconds % 60).toString().padStart(2, "0");
    return `${minutes}:${remainder}`;
  }

  function updateExamAnswered() {
    const answered = document.querySelectorAll("[data-final-answer]:checked").length;
    el("finalExamAnswered").textContent = `${answered} / ${FINAL_EXAM_QUESTION_COUNT}`;
  }

  function startFinalExam() {
    if (!finalExamUnlocked()) return;
    clearInterval(finalExamTimer);
    finalExamQuestions = buildFinalExamQuestions();
    finalExamSecondsLeft = FINAL_EXAM_SECONDS;
    el("finalExamResult").className = "mastery-result hidden";
    el("finalExamPanel").classList.remove("hidden");
    el("finalExamQuestions").innerHTML = finalExamQuestions.map((question, index) => `
      <fieldset class="final-exam-question">
        <legend><span>${index + 1}</span>${question.prompt}<small>${question.module}</small></legend>
        <div>${question.options.map((option, optionIndex) => `<label><input type="radio" name="finalQuestion${index}" value="${optionIndex}" data-final-answer><span><strong>${String.fromCharCode(65 + optionIndex)}.</strong> ${option}</span></label>`).join("")}</div>
      </fieldset>
    `).join("");
    document.querySelectorAll("[data-final-answer]").forEach((input) => input.addEventListener("change", updateExamAnswered));
    updateExamAnswered();
    el("finalExamTimer").textContent = formatExamTime(finalExamSecondsLeft);
    finalExamTimer = setInterval(() => {
      finalExamSecondsLeft -= 1;
      el("finalExamTimer").textContent = formatExamTime(finalExamSecondsLeft);
      if (finalExamSecondsLeft <= 0) submitFinalExam(true);
    }, 1000);
    el("finalExamPanel").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function submitFinalExam(timeExpired) {
    if (!finalExamQuestions.length) return;
    clearInterval(finalExamTimer);
    const answers = finalExamQuestions.map((_, index) => {
      const selected = document.querySelector(`input[name="finalQuestion${index}"]:checked`);
      return selected ? Number(selected.value) : -1;
    });
    const correctAnswers = answers.filter((answer, index) => answer === finalExamQuestions[index].correctIndex).length;
    const score = Math.round(correctAnswers / FINAL_EXAM_QUESTION_COUNT * 100);
    const passedExam = score >= FINAL_EXAM_PASS_SCORE;
    const result = { score, passed: passedExam, correctAnswers, completedAt: new Date().toISOString(), timeExpired };
    saveFinalExamResult(result);
    const box = el("finalExamResult");
    box.className = `mastery-result ${passedExam ? "passed" : "failed"}`;
    box.innerHTML = `<strong>${passedExam ? "Final exam passed" : "Final exam not passed"}: ${score}%</strong><p>${correctAnswers} of ${FINAL_EXAM_QUESTION_COUNT} answers were correct.${timeExpired ? " Time expired and the exam was submitted automatically." : ""} ${passedExam ? "You completed the certification simulation." : `Review the curriculum and score at least ${FINAL_EXAM_PASS_SCORE}% to pass.`}</p>`;
    if (passedExam) window.TomCodexLearning?.record("task", 100, `Passed ${recordLabel} final exam (${score}%)`);
    renderFinalExamStatus();
    box.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  function topicTitle(point) {
    return point.replace(/[.!?]+$/, "");
  }

  function topicCoverage(module, index) {
    const title = topicTitle(module.points[index]);
    const practice = module.practice[index] || module.practice[0] || `Build and verify ${title} in a practice org.`;
    const question = module.questions[index] || module.questions[0] || `How would you explain ${title}?`;
    const relatedConcepts = [
      module.points[index],
      module.points[(index + 1) % module.points.length],
      module.points[(index + 2) % module.points.length]
    ].map(topicTitle);
    const isApex = courseName === "Apex Development";
    const isAdmin = courseName === "Salesforce Administrator";
    const isFlow = courseName === "Salesforce Flow";
    const platformAction = isApex
      ? `Implement ${title} in a small Apex solution and execute it with representative Salesforce records.`
      : isFlow
        ? `Build a focused Flow that demonstrates ${title}, then debug each important path.`
        : `Configure ${title} in a Developer Edition org or Trailhead Playground using representative business records.`;
    const implementation = isApex
      ? [
          `Define the transaction, inputs, outputs, and expected behavior for ${title}.`,
          platformAction,
          `Test ${title} with positive, negative, bulk, permission, and failure scenarios.`,
          `Compare the result with this module requirement: ${practice}`
        ]
      : [
          `Write the business requirement and acceptance criteria for ${title}.`,
          platformAction,
          `Test ${title} as an administrator and as a restricted business user.`,
          `Complete this module activity and record the result: ${practice}`
        ];
    const bestPractices = isApex
      ? [`Keep the ${title} implementation focused and clearly named.`, `Design ${title} for collections, security, governor limits, and failure handling.`, `Use meaningful assertions and operational logging to verify ${title}.`]
      : [`Use the least-privilege access required for ${title}.`, `Give every ${title} configuration item a clear name and description.`, `Test ${title} with expected, restricted-user, and failure scenarios.`];
    const mistakes = isApex
      ? [`Implementing ${title} without considering bulk transactions.`, `Testing ${title} only for code coverage instead of business behavior.`, `Ignoring sharing, CRUD/FLS, limits, or error handling while using ${title}.`]
      : [`Configuring ${title} before defining the expected business result.`, `Testing ${title} only as a System Administrator.`, `Releasing ${title} without evidence, documentation, or a recovery plan.`];
    const interviewQuestions = Array.from({ length: 5 }, (_, questionIndex) => {
      const sourceQuestion = module.questions[(index + questionIndex) % module.questions.length] || question;
      const answers = [
        `${title} supports the ${module.title} business capability by applying this requirement: ${module.points[index]}`,
        `A practical implementation is: ${practice}`,
        `I would verify ${title} with expected, negative, permission, bulk, and failure scenarios.`,
        `A strong design uses clear naming, least privilege, documented decisions, and measurable acceptance criteria.`,
        `Mastery is proven when the learner can explain ${title}, build it from scratch, test it, and show evidence of the result.`
      ];
      return { question: sourceQuestion, answer: answers[questionIndex] };
    });
    return {
      title,
      concept: `${title} is part of ${module.title}. ${module.description} Businesses use ${title} to deliver a repeatable Salesforce outcome instead of relying on undocumented manual work.`,
      keyConcepts: relatedConcepts,
      implementation,
      expectedOutcome: `The learner can demonstrate ${title} in Salesforce, explain the business result, and show test evidence from the practice activity.`,
      example: `In the ${module.title} scenario, the team must use ${title} to complete this business activity: ${practice}`,
      bestPractices,
      mistakes,
      interviewQuestions,
      leitr: [
        `Learn: Study ${title} and identify how it behaves in ${module.title}.`,
        `Explain: Describe ${title} in simple English, including why the business needs it and one Salesforce example.`,
        `Implement: ${practice}`,
        `Test: Rebuild or demonstrate ${title} without notes and answer: ${question}`,
        `Review: Revisit the ${title} explanation and implementation after 1 day, 3 days, and 7 days.`
      ],
      certificationFocus: isAdmin
        ? `For the Salesforce Administrator certification, focus on selecting the correct declarative use of ${title}, recognizing its effect on users and data, and choosing the safest configuration for a scenario.`
        : `For Salesforce Administrator certification, understand how an admin configures, governs, tests, or hands off ${title}. For developer readiness, explain the implementation, limits, security, and testing implications.`,
      proof: `Demonstrate ${title} by completing "${practice}", showing the resulting Salesforce configuration or behavior, presenting positive and negative test evidence, and answering "${question}" without notes.`
    };
  }

  function renderTopicCoverage(module) {
    const topics = module.points.map((_, index) => topicCoverage(module, index));
    el("topicCoverageCount").textContent = `${topics.length} subcategories`;
    el("topicCoverage").innerHTML = topics.map((topic, index) => `
      <details class="topic-category" ${index === 0 ? "open" : ""}>
        <summary><span class="topic-number">${index + 1}</span><span><strong>${topic.title}</strong><small>Concept, implementation, interview preparation, LEITR, certification, and proof</small></span><span class="topic-toggle" aria-hidden="true">+</span></summary>
        <div class="topic-category-body">
          <div class="topic-detail topic-concept topic-wide"><span>1. Concept</span><p>${topic.concept}</p></div>
          <div class="topic-detail topic-wide"><span>2. Key Concepts</span><ul>${topic.keyConcepts.map((item) => `<li>${item}</li>`).join("")}</ul></div>
          <div class="topic-detail topic-example topic-wide"><span>3. Real Business Example</span><p>${topic.example}</p></div>
          <div class="topic-detail topic-wide"><span>4. Salesforce Implementation</span><ol>${topic.implementation.map((item) => `<li>${item}</li>`).join("")}</ol><p><strong>Expected outcome:</strong> ${topic.expectedOutcome}</p></div>
          <div class="topic-detail"><span>5. Best Practices</span><ul>${topic.bestPractices.map((item) => `<li>${item}</li>`).join("")}</ul></div>
          <div class="topic-detail topic-warning"><span>6. Common Mistakes</span><ul>${topic.mistakes.map((item) => `<li>${item}</li>`).join("")}</ul></div>
          <div class="topic-detail topic-wide"><span>7. Interview Questions and Answers</span><ol>${topic.interviewQuestions.map((item) => `<li><strong>${item.question}</strong><p>${item.answer}</p></li>`).join("")}</ol></div>
          <div class="topic-detail topic-wide"><span>8. LEITR Learning Tasks</span><ul>${topic.leitr.map((item) => `<li>${item}</li>`).join("")}</ul></div>
          <div class="topic-detail topic-wide"><span>9. Certification Focus</span><p>${topic.certificationFocus}</p></div>
          <div class="topic-detail topic-proof topic-wide"><span>10. Practical Proof</span><p>${topic.proof}</p></div>
        </div>
      </details>
    `).join("");
  }

  // ── Check My Work: Lab Criteria Verification ─────────────────────────────


  function loadLabResults() {
    try { return JSON.parse(localStorage.getItem(MASTERY_KEY + ".labResults")) || {}; } catch { return {}; }
  }
  function loadJson(key, fallback) {
    try { return JSON.parse(localStorage.getItem(key)) || fallback; } catch { return fallback; }
  }
  function saveJson(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  function saveLabResult(index, result) {
    const all = loadLabResults();
    if (!all[index] || result.score > (all[index].score || 0)) {
      all[index] = {
        score: result.score,
        passed: result.passed,
        timestamp: new Date().toISOString(),
        summary: result.summary,
        criteriaResults: result.criteriaResults || [],
        skillPassportUpdate: result.skillPassportUpdate || null,
        unlock: result.unlock || null
      };
      localStorage.setItem(MASTERY_KEY + ".labResults", JSON.stringify(all));
    }
  }
  function saveLabAttempt(index, result) {
    const key = "tomcodex.adminLabAttempts.v1";
    const all = loadJson(key, {});
    const formats = [`admin-module-${index + 1}`, `admin-${index + 1}`];
    formats.forEach(moduleId => {
      const attempts = Array.isArray(all[moduleId]) ? all[moduleId] : [];
      const attempt = {
        attempt: attempts.length + 1,
        score: result.score,
        status: result.passed ? "Verified" : "Try Again",
        feedback: result.summary,
        createdAt: new Date().toISOString()
      };
      all[moduleId] = attempts.concat(attempt);
      all[`${moduleId}:summary`] = {
        bestScore: all[moduleId].reduce((best, item) => Math.max(best, Number(item.score) || 0), 0),
        status: result.passed ? "Verified" : "Try Again",
        attempts: all[moduleId].length,
        updatedAt: attempt.createdAt
      };
    });
    saveJson(key, all);
  }
  function saveModuleUnlock(index, result) {
    const key = "tomcodex.moduleUnlocks.v1";
    const all = loadJson(key, {});
    const formats = [`admin-module-${index + 1}`, `admin-${index + 1}`];
    let authUser = {};
    try {
      authUser = JSON.parse(localStorage.getItem("tomcodex.auth.user.v1")) || JSON.parse(localStorage.getItem("tomcodex.authIdentity.v1")) || {};
    } catch {}
    
    const isUnlocked = result.unlockDecision ? result.unlockDecision.eligibleToUnlock : (authUser.tier === "founder" && result.passed);

    formats.forEach(moduleId => {
      all[moduleId] = {
        labVerified: Boolean(result.passed),
        modulePracticeCompleted: Boolean(result.passed),
        skillPassportUpdated: Boolean(result.skillPassportUpdate),
        nextModuleUnlockCandidate: Boolean(result.passed),
        nextModuleAccess: isUnlocked ? "unlocked" : "upgrade_required",
        updatedAt: new Date().toISOString()
      };
    });
    saveJson(key, all);
  }

  function renderLabCriteriaForm(criteria) {
    const form = el("labCriteriaForm");
    if (!form || !criteria?.length) return;
    form.innerHTML = criteria.map((c, i) => `
      <div class="rounded-xl border border-slate-200 bg-slate-50 p-4">
        <label class="block text-xs font-bold text-slate-700 mb-2" for="labAnswer_${c.id}">
          <span class="inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand-600 text-white text-xs font-extrabold mr-2">${i + 1}</span>
          ${c.question}
        </label>
        <input
          id="labAnswer_${c.id}"
          data-lab-criterion="${c.id}"
          type="${c.type === 'number' ? 'number' : 'text'}"
          placeholder="${c.placeholder || 'Your answer...'}"
          class="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none"
        />
      </div>
    `).join("");
  }

  async function runCheckMyWork() {
    const courseKey = COURSE_KEY_MAP[courseName] || "admin";
    const criteriaKey = `${courseKey}-${currentModule}`;

    // Gather answers from the form
    const answerInputs = document.querySelectorAll("[data-lab-criterion]");
    if (!answerInputs.length) {
      alert("Criteria questions not loaded yet. Please wait.");
      return;
    }
    const studentAnswers = {};
    let anyEmpty = false;
    answerInputs.forEach(input => {
      const val = input.value.trim();
      studentAnswers[input.dataset.labCriterion] = val;
      if (!val) anyEmpty = true;
    });
    if (anyEmpty) {
      alert("Please answer all questions before checking your work.");
      return;
    }

    const btn = el("checkMyWorkBtn");
    btn.disabled = true;
    btn.innerHTML = `<svg class="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg> Verifying with AI...`;

    let authUser = {};
    try {
      authUser = JSON.parse(localStorage.getItem("tomcodex.auth.user.v1")) || JSON.parse(localStorage.getItem("tomcodex.authIdentity.v1")) || {};
    } catch {}

    const module = modules[currentModule];
    const moduleId = `${courseKey}-${currentModule + 1}`;
    const labId = `${courseKey}-${currentModule + 1}-lab-1`;
    const labCriteria = module.richContent?.labCriteria || module.labCriteria || window.TomCodexLabCriteria?.[`${courseKey}-${currentModule}`]?.criteria || [];

    try {
      const res = await fetch("/api/academy/verify-lab", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          task: "verify-lab",
          userId: authUser.userId || authUser.id || "student-demo-001",
          tier: authUser.tier || "free",
          params: {
            moduleId,
            labId,
            courseKey,
            moduleName: module.title,
            courseName,
            criteria: labCriteria,
            studentAnswers
          }
        })
      });
      if (!res.ok) throw new Error("Verification failed");
      const payload = await res.json();
      const result = normalizeAiRunLabResult(payload);
      renderLabVerifyResult(result);
      saveLabResult(currentModule, result);
      saveLabAttempt(currentModule, result);
      saveModuleUnlock(currentModule, result);
      if (result.passed) {
        window.TomCodexLearning?.record("task", 20, `Passed ${recordLabel} lab check: ${module.title} (${result.score}%)`);
        // Update Skill Passport
        try {
          const passport = JSON.parse(localStorage.getItem("tomcodex.skillPassport.v1") || "{}");
          const skillId = result.skillPassportUpdate?.skillId || "salesforce-platform-foundations";
          const skillName = skillId.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
          passport[skillId] = {
            module: module.title,
            skill: skillName,
            status: "Verified",
            pocStage: "Foundation Started",
            score: result.bestScore,
            verifiedAt: result.passportSummary?.verifiedAt || new Date().toISOString(),
            moduleName: module.title,
            ...(result.skillPassportUpdate || {})
          };
          localStorage.setItem("tomcodex.skillPassport.v1", JSON.stringify(passport));
        } catch {}
      }
    } catch (err) {
      alert("Could not connect to the verifier. Please try again.");
    } finally {
      btn.disabled = false;
      btn.innerHTML = `<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg> Check My Work`;
    }
  }

  function normalizeAiRunLabResult(payload) {
    const data = payload?.data || {};
    const criteriaResults = (data.criteriaResults || []).map((item) => ({
      ...item,
      feedback: item.passed ? "Correct." : item.hint || "Review the lab instructions and try again."
    }));
    return {
      passed: Boolean(data.passed),
      score: Number(data.score) || 0,
      passedCount: criteriaResults.filter(r => r.passed).length,
      totalCount: criteriaResults.length,
      criteriaResults,
      summary: data.feedback || (data.passed ? "Lab verified." : "Review the hints and try again."),
      skillPassportUpdate: payload?.skillPassportUpdate || null,
      unlockDecision: payload?.unlockDecision || null,
      passportSummary: payload?.passportSummary || null,
      bestScore: payload?.passportSummary?.bestScore || Number(data.score) || 0
    };
  }

  function renderLabVerifyResult(result) {
    const box = el("labVerifyResult");
    if (!box) return;
    box.classList.remove("hidden");
    box.className = `mt-5 rounded-2xl border-2 p-5 ${ result.passed ? "border-emerald-300 bg-emerald-50" : "border-rose-200 bg-rose-50" }`;
    
    const badge = el("labScoreBadge");
    badge.textContent = `${result.score}%`;
    badge.style.background = result.passed ? "#10b981" : "#ef4444";
    
    el("labVerifySummary").textContent = result.passed ? "Status: Verified" : "Status: Try Again";
    
    let nextModuleText = "";
    if (result.unlockDecision) {
      if (result.unlockDecision.eligibleToUnlock) {
        nextModuleText = `Admin Module ${currentModule + 2} unlocked`;
      } else {
        if (result.unlockDecision.reason && result.unlockDecision.reason.includes("Founder")) {
          nextModuleText = "Locked - Founder Access required";
        } else {
          nextModuleText = `Locked - ${result.unlockDecision.reason}`;
        }
      }
    } else {
      nextModuleText = result.passed ? `Admin Module ${currentModule + 2} unlocked` : "Locked";
    }

    const skillId = result.skillPassportUpdate?.skillId || "salesforce-platform-foundations";
    const skillName = skillId.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
    const attemptsCount = result.passportSummary?.attemptsCount || 1;
    const bestScore = result.bestScore || result.score;

    el("labVerifySubtitle").innerHTML = `
      <div class="mt-2 space-y-1 text-xs text-slate-700">
        <div><strong>Skill:</strong> ${skillName}</div>
        <div><strong>Attempts:</strong> ${attemptsCount}</div>
        <div><strong>Best Score:</strong> ${bestScore}%</div>
        <div><strong>Next Module:</strong> <span class="${result.unlockDecision?.eligibleToUnlock ? 'text-emerald-700 font-bold' : 'text-rose-700 font-bold'}">${nextModuleText}</span></div>
      </div>
    `;

    el("labCriteriaResults").innerHTML = (result.criteriaResults || []).map(r => `
      <div class="flex items-start gap-3 rounded-lg p-3 ${ r.passed ? "bg-emerald-100" : "bg-rose-100" }">
        <span class="text-base shrink-0">${r.passed ? "✅" : "❌"}</span>
        <div class="flex-1">
          <p class="text-xs font-bold text-slate-700">${r.question}</p>
          <p class="text-xs text-slate-600 mt-0.5">${r.feedback}</p>
        </div>
      </div>
    `).join("");
    
    if (!result.passed) {
      el("retryCheckBtn").classList.remove("hidden");
    } else {
      el("retryCheckBtn").classList.add("hidden");
    }
    box.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  function renderNamedItems(label, items = []) {
    return `<div class="project-task-group"><strong>${label}</strong><ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul></div>`;
  }

  function renderTrailheadPractice(practice) {
    if (!practice) return "";
    return `
      <div class="practice-track-card">
        <span class="practice-track-label">Track A: Official Salesforce Trailhead</span>
        <h4>${practice.title}</h4>
        <p>${practice.purpose}</p>
        <div class="trailhead-resource-grid">
          ${(practice.resources || []).map(([name, url]) => `<a href="${url}" target="_blank" rel="noopener noreferrer"><strong>${name}</strong><span>Open official Trailhead resource &#8599;</span></a>`).join("")}
        </div>
        ${renderNamedItems("Hands-on challenges", practice.tasks)}
      </div>
    `;
  }

  function renderProjectTask(projectName, task) {
    if (!task) return "";
    return `
      <div class="practice-track-card project-track-card">
        <span class="practice-track-label">Track B: Continuous TomCodeX Project</span>
        <p class="project-name">${projectName}</p>
        <h4>${task.title}</h4>
        <div class="project-purpose"><strong>Business purpose</strong><p>${task.purpose}</p></div>
        <div class="project-task-grid">
          ${renderNamedItems("Object names", task.objects)}
          ${renderNamedItems("Field names", task.fields)}
          ${renderNamedItems("Flow names", task.flows)}
          ${renderNamedItems("Report and dashboard names", task.reportsDashboards)}
          ${renderNamedItems("Apex and LWC names", task.apexLwc)}
        </div>
        <div class="project-build-steps"><strong>Step-by-step build instructions</strong><ol>${task.steps.map((step) => `<li>${step}</li>`).join("")}</ol></div>
        <div class="project-expected"><strong>Expected output</strong><p>${task.expected}</p></div>
        ${renderNamedItems("AI validation criteria", task.validation)}
      </div>
    `;
  }

  function initLeitrRemindersUI() {
    const toggleBtn = el("leitrScheduleToggleBtn");
    const confirmBtn = el("leitrConfirmBtn");
    const controlPanel = el("leitrSchedulerControl");
    const statusText = el("leitrSchedulerStatus");
    const reviewStep = el("leitrReviewStep");

    if (!confirmBtn || !controlPanel || !statusText) return;

    const module = modules[currentModule];
    const courseKey = COURSE_KEY_MAP[courseName] || "admin";

    // Toggle configure panel when clicking the rule button or review step
    const togglePanel = () => {
      controlPanel.classList.toggle("hidden");
    };
    if (toggleBtn) toggleBtn.onclick = togglePanel;
    if (reviewStep) reviewStep.onclick = togglePanel;

    // Load active reminders from localStorage
    function updateStatus() {
      let reminders = [];
      try {
        reminders = JSON.parse(localStorage.getItem("tomcodex.leitrReminders.v1")) || [];
      } catch (e) {}

      // Filter reminders for this course and module
      const active = reminders.filter(r => r.courseName === courseName && r.moduleTitle === module.title);

      const days1 = el("leitrDays1");
      const days3 = el("leitrDays3");
      const days7 = el("leitrDays7");

      if (days1) days1.checked = active.some(r => r.days === 1);
      if (days3) days3.checked = active.some(r => r.days === 3);
      if (days7) days7.checked = active.some(r => r.days === 7);

      if (active.length === 0) {
        statusText.textContent = "No active review reminders.";
      } else {
        const parts = active.map(r => {
          const dateStr = new Date(r.dueDate).toLocaleDateString(undefined, { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" });
          return `${r.days}-day (${r.notified ? "completed" : `due ${dateStr}`})`;
        });
        statusText.textContent = "Active: " + parts.join(", ");
      }
    }

    updateStatus();

    // Confirm schedule
    confirmBtn.onclick = async () => {
      if (!("Notification" in window)) {
        alert("This browser does not support desktop notifications.");
        return;
      }

      if (Notification.permission !== "granted") {
        const permission = await Notification.requestPermission();
        if (permission !== "granted") {
          alert("Notification permission denied. Cannot schedule reminders.");
          return;
        }
      }

      const days1 = el("leitrDays1")?.checked;
      const days3 = el("leitrDays3")?.checked;
      const days7 = el("leitrDays7")?.checked;

      let reminders = [];
      try {
        reminders = JSON.parse(localStorage.getItem("tomcodex.leitrReminders.v1")) || [];
      } catch (e) {}

      // Remove any existing reminders for this specific course & module
      reminders = reminders.filter(r => !(r.courseName === courseName && r.moduleTitle === module.title));

      const now = Date.now();
      const intervals = [];
      if (days1) intervals.push(1);
      if (days3) intervals.push(3);
      if (days7) intervals.push(7);

      intervals.forEach(d => {
        const dueDate = now + d * 24 * 60 * 60 * 1000;
        reminders.push({
          id: `${courseKey}-mod${currentModule}-day${d}-${now}`,
          courseName: courseName,
          moduleTitle: module.title,
          days: d,
          dueDate: dueDate,
          notified: false
        });
      });

      localStorage.setItem("tomcodex.leitrReminders.v1", JSON.stringify(reminders));
      updateStatus();
      alert("Spaced review reminders confirmed!");
      controlPanel.classList.add("hidden");
    };
  }

  function render() {
    const moduleState = getModuleState(currentModule);
    if (moduleState.state === "paywall") {
      showPaywall(currentModule);
      renderNav();
      renderProgress();
      return;
    }
    if (moduleState.state === "gated") {
      el("moduleContent").innerHTML = `
        <div class="p-8 text-center bg-slate-100 rounded-2xl border border-slate-200 my-6">
          <h2 class="text-xl font-bold text-slate-700">This module is locked</h2>
          <p class="mt-2 text-slate-500 text-sm">${moduleState.label}</p>
          <button id="backToAvailableBtn" class="mt-4 rounded-lg bg-brand-600 px-5 py-2 text-sm font-bold text-white hover:bg-brand-700 transition">
            Go back
          </button>
        </div>
      `;
      document.getElementById("backToAvailableBtn").addEventListener("click", () => {
        currentModule = 0;
        render();
      });
      renderNav();
      renderProgress();
      return;
    }

    const module = modules[currentModule];
    const isPassed = passed(currentModule);
    const subCourseLabel = module.subCourse?.title ? `${module.subCourse.title} · ` : "";
    el("moduleLabel").textContent = `Module ${currentModule + 1} of ${modules.length} · ${subCourseLabel}${isAdmin ? "Admin access" : `About ${moduleHours} hours`}`;
    el("moduleTitle").textContent = module.title;
    el("moduleDescription").textContent = module.description;

    const hasRich = Boolean(module.richContent);
    const richPanel = el("richModuleContent");
    const defaultPanel = el("defaultModuleContent");

    if (richPanel && defaultPanel) {
      richPanel.classList.toggle("hidden", !hasRich);
      defaultPanel.classList.toggle("hidden", hasRich);
    }

    if (hasRich) {
      const preModuleSetup = module.richContent.preModuleSetup;
      el("preModuleSetupSection")?.classList.toggle("hidden", !preModuleSetup);
      if (preModuleSetup) {
        el("preModuleSetupTitle").textContent = preModuleSetup.title;
        el("preModuleSetupIntroduction").textContent = preModuleSetup.introduction;
        el("preModuleSetupOptions").innerHTML = preModuleSetup.options.map((item) => `<li>${item}</li>`).join("");
        el("preModuleSetupSteps").innerHTML = preModuleSetup.steps.map((item) => `<li>${item}</li>`).join("");
        el("preModuleSafetyNotes").innerHTML = preModuleSetup.safetyNotes.map((item) => `<li>${item}</li>`).join("");
        el("preModuleReadinessChecklist").innerHTML = preModuleSetup.readinessChecklist.map((item) => `<li class="flex items-start gap-2"><span class="font-bold text-emerald-700">✓</span><span>${item}</span></li>`).join("");
      }
      const projectConnection = module.richContent.projectConnection;
      el("projectConnectionSection")?.classList.toggle("hidden", !projectConnection);
      if (projectConnection) {
        el("projectBuildsOn").textContent = projectConnection.buildsOn;
        el("projectBuildsNow").textContent = projectConnection.buildsNow;
        el("projectPreparesNext").textContent = projectConnection.preparesNext;
      }
      el("richGoal").textContent = module.richContent.moduleGoal;
      el("richOutcomes").innerHTML = module.richContent.learningOutcomes.map((out) => `<li>${out}</li>`).join("");
      el("richExplanation").innerHTML = module.richContent.simpleExplanation;
      const mainSyllabus = module.richContent.mainSyllabus;
      el("richMainSyllabusSection")?.classList.toggle("hidden", !mainSyllabus?.content);
      if (mainSyllabus?.content) {
        el("richMainSyllabusTitle").textContent = mainSyllabus.title;
        el("richMainSyllabusIntroduction").textContent = mainSyllabus.introduction;
        el("richMainSyllabusContent").innerHTML = mainSyllabus.content;
      }
      const detailedLesson = module.richContent.detailedLessonSections || [];
      el("richDetailedLessonSection")?.classList.toggle("hidden", detailedLesson.length === 0);
      if (el("detailedLessonCount")) {
        el("detailedLessonCount").textContent = `${detailedLesson.length} deep lessons`;
      }
      if (el("richDetailedLesson")) {
        el("richDetailedLesson").innerHTML = detailedLesson.map((section, sectionIndex) => `
          <details class="module-lesson-card" ${sectionIndex < 2 ? "open" : ""}>
            <summary>
              <span class="module-lesson-index">${String(sectionIndex + 1).padStart(2, "0")}</span>
              <strong>${section.title}</strong>
              <span class="module-lesson-toggle" aria-hidden="true"></span>
            </summary>
            <div class="module-lesson-body space-y-2">${section.content}</div>
          </details>
        `).join("");
      }
      const keyNotes = module.richContent.keyNotes || [];
      el("richKeyNotesSection")?.classList.toggle("hidden", keyNotes.length === 0);
      if (el("richKeyNotes")) el("richKeyNotes").innerHTML = keyNotes.map((item) => `<div class="module-key-note">${item}</div>`).join("");
      const flashcards = module.richContent.flashcards || [];
      el("richFlashcardsSection")?.classList.toggle("hidden", flashcards.length === 0);
      flashcardIndex = Math.min(flashcardIndex, Math.max(0, flashcards.length - 1));
      flashcardShowingAnswer = false;
      renderFlashcard(flashcards);
      el("richBusiness").innerHTML = module.richContent.realBusinessExample;
      el("richWhereUsed").innerHTML = module.richContent.whereUsed;
      el("richStepByStep").innerHTML = module.richContent.stepByStepImplementation.map((step) => `<li>${step}</li>`).join("");
      const trailheadPractice = module.richContent.trailheadPractice;
      el("richTrailheadPracticeSection")?.classList.toggle("hidden", !trailheadPractice);
      if (el("richTrailheadPractice")) el("richTrailheadPractice").innerHTML = renderTrailheadPractice(trailheadPractice);
      const projectTask = module.richContent.projectTask;
      el("richProjectTaskSection")?.classList.toggle("hidden", !projectTask);
      if (el("richProjectTask")) el("richProjectTask").innerHTML = renderProjectTask(module.richContent.projectName, projectTask);
      const projectEvidence = module.richContent.projectEvidence || [];
      el("richProjectEvidenceSection")?.classList.toggle("hidden", projectEvidence.length === 0);
      if (el("richProjectEvidence")) el("richProjectEvidence").innerHTML = projectEvidence.map((item) => `<li>${item}</li>`).join("");
      el("richBestPractices").innerHTML = module.richContent.bestPractices.map((bp) => `<li>${bp}</li>`).join("");
      el("richCommonMistakes").innerHTML = module.richContent.commonMistakes.map((cm) => `<li>${cm}</li>`).join("");
      el("richWhyMatters").innerHTML = module.richContent.whyMattersInJob;
      el("richInterview").innerHTML = module.richContent.interviewQuestions.map((q) => `<li>${q}</li>`).join("");
      const assignment = module.richContent.practicalAssignment || [];
      el("richAssignmentSection")?.classList.toggle("hidden", assignment.length === 0);
      if (el("richAssignment")) el("richAssignment").innerHTML = assignment.map((item) => `<li>${item}</li>`).join("");
      const knowledgeCheck = module.richContent.knowledgeCheckQuestions || [];
      el("richKnowledgeCheckSection")?.classList.toggle("hidden", knowledgeCheck.length === 0);
      if (el("richKnowledgeCheck")) el("richKnowledgeCheck").innerHTML = knowledgeCheck.map((item) => `<li>${item}</li>`).join("");
      const checklist = module.richContent.completionChecklist || [];
      el("richChecklistSection")?.classList.toggle("hidden", checklist.length === 0);
      if (el("richChecklist")) el("richChecklist").innerHTML = checklist.map((item) => `<li class="flex items-start gap-2"><span class="font-bold text-brand-600">✓</span><span>${item}</span></li>`).join("");
      const finalSummary = module.richContent.finalSummary || "";
      el("richSummarySection")?.classList.toggle("hidden", !finalSummary);
      if (el("richSummary")) el("richSummary").textContent = finalSummary;
      const masteryPrep = module.richContent.masteryPreparationQuestions || [];
      el("richMasteryPrepSection")?.classList.toggle("hidden", masteryPrep.length === 0);
      if (el("richMasteryPrep")) el("richMasteryPrep").innerHTML = masteryPrep.map((item) => `<li>${item}</li>`).join("");
      el("richLabDescription").innerHTML = module.richContent.handsOnLab?.instructions || "";

      // Render Check My Work criteria form
      const courseKey = COURSE_KEY_MAP[courseName] || "admin";
      const labCriteria = module.richContent?.labCriteria || module.labCriteria || window.TomCodexLabCriteria?.[`${courseKey}-${currentModule}`]?.criteria || [];
      renderLabCriteriaForm(labCriteria);

      // Restore previous result if exists
      const labResults = loadLabResults();
      if (labResults[currentModule]) {
        renderLabVerifyResult(labResults[currentModule]);
      } else {
        const box = el("labVerifyResult");
        if (box) box.classList.add("hidden");
      }
    } else {
      el("lessonPoints").innerHTML = module.points.map((item) => `<div>${item}</div>`).join("");
      renderTopicCoverage(module);
      el("resourceList").innerHTML = module.resources.map(([name, url]) => `<a href="${url}" target="_blank" rel="noopener noreferrer">${name}<span>\u2197</span></a>`).join("");
      el("practiceList").innerHTML = module.practice.map((item) => `<div>${item}</div>`).join("");
      el("questionList").innerHTML = module.questions.map((item) => `<div>${item}</div>`).join("");
    }

    el("completeModuleBtn").textContent = isPassed ? `Mastery passed: ${scoreFor(currentModule)}%` : "AI mastery test required";
    el("completeModuleBtn").classList.toggle("done", isPassed);
    el("startMasteryTestBtn").textContent = isPassed ? "Retake AI mastery test" : "Start AI mastery test";
    updateModuleNavigationButtons(isPassed);
    el("masteryTestPanel").classList.add("hidden");
    el("masteryResult").className = "mastery-result hidden";
    renderNav();
    renderProgress();
    renderFinalExamVisibility();
    renderFinalExamStatus();
    initLeitrRemindersUI();
  }

  function renderFlashcard(cards = modules[currentModule]?.richContent?.flashcards || []) {
    if (!cards.length || !el("flashcardCard")) return;
    const card = cards[flashcardIndex];
    el("flashcardProgress").textContent = `Card ${flashcardIndex + 1} of ${cards.length}`;
    el("flashcardSideLabel").textContent = flashcardShowingAnswer ? "Answer" : "Question";
    el("flashcardText").textContent = flashcardShowingAnswer ? card.back : card.front;
    el("flashcardCard").classList.toggle("answer", flashcardShowingAnswer);
    el("flipFlashcardBtn").textContent = flashcardShowingAnswer ? "Show question" : "Reveal answer";
    el("previousFlashcardBtn").disabled = flashcardIndex === 0;
    el("nextFlashcardBtn").disabled = flashcardIndex === cards.length - 1;
  }

  function setDetailedLessonsExpanded(expanded) {
    document.querySelectorAll("#richDetailedLesson details").forEach((lesson) => {
      lesson.open = expanded;
    });
  }

  function flipFlashcard() {
    flashcardShowingAnswer = !flashcardShowingAnswer;
    renderFlashcard();
  }

  function moveFlashcard(direction) {
    const cards = modules[currentModule]?.richContent?.flashcards || [];
    flashcardIndex = Math.max(0, Math.min(cards.length - 1, flashcardIndex + direction));
    flashcardShowingAnswer = false;
    renderFlashcard(cards);
  }

  function masteryQuestionText(question) {
    return typeof question === "string" ? question.replace(/^\d+\.\s*/, "") : question.question;
  }

  function renderMasteryQuestion(question, index) {
    const type = typeof question === "string" ? "written" : question.type;
    const label = type === "mcq" ? "Multiple choice" : type === "scenario" ? "Scenario-based" : type === "practical" ? "Practical verification" : "Written response";
    const input = type === "mcq"
      ? `<select id="masteryAnswer${index}" data-mastery-answer data-question-type="mcq"><option value="">Select the best answer</option>${question.options.map((option, optionIndex) => `<option value="${optionIndex}">${option}</option>`).join("")}</select>`
      : `<textarea id="masteryAnswer${index}" data-mastery-answer data-question-type="${type}" placeholder="Explain clearly using Salesforce names, business reasoning, testing, and evidence."></textarea>`;
    return `<div class="mastery-question-card"><span class="mastery-question-type">${label}</span><label for="masteryAnswer${index}">Question ${index + 1} of 15: ${masteryQuestionText(question)}</label>${input}</div>`;
  }

  async function startTest() {
    const module = modules[currentModule];
    el("masteryTestPanel").classList.remove("hidden");
    el("masteryResult").className = "mastery-result hidden";
    const structuredTest = module.richContent?.masteryTest;
    if (Array.isArray(structuredTest) && structuredTest.length === 15) {
      activeTestQuestions = structuredTest;
    } else {
      el("masteryAnswerList").innerHTML = '<div class="mastery-loading">Zentom is generating 15 Salesforce-specialized mastery questions...</div>';
      activeTestQuestions = await window.TomCodexAI.generateMasteryQuestions({
        course: courseName,
        module: module.title,
        lessonPoints: module.points,
        recallQuestions: module.questions,
        practice: module.practice,
        questionCount: 15
      });
    }
    el("masteryAnswerList").innerHTML = activeTestQuestions.map(renderMasteryQuestion).join("");
    el("masteryTestPanel").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function showResult(result) {
    const box = el("masteryResult");
    box.className = `mastery-result ${result.passed ? "passed" : "failed"}`;
    box.innerHTML = `<strong>${result.passed ? "Passed" : "Not passed"}: ${result.score}%</strong><p>${result.summary}</p>${result.feedback?.length ? `<ul>${result.feedback.map((item) => `<li>${item.feedback}</li>`).join("")}</ul>` : ""}`;
  }

  async function submitTest() {
    const module = modules[currentModule];
    const answerInputs = [...document.querySelectorAll("[data-mastery-answer]")];
    const answers = answerInputs.map((input, index) => {
      const value = input.value.trim();
      if (input.dataset.questionType !== "mcq" || !value) return value;
      return activeTestQuestions[index].options[Number(value)];
    });
    if (activeTestQuestions.length < 15 || answers.length < 15) {
      showResult({ score: 0, passed: false, summary: "The mastery test must contain and answer at least 15 questions.", feedback: [] });
      return;
    }
    const incomplete = answers.some((answer, index) => answerInputs[index].dataset.questionType === "mcq" ? !answer : answer.length < 20);
    if (incomplete) {
      showResult({ score: 0, passed: false, summary: "Answer all 15 questions. Written scenario and practical answers must contain at least 20 characters.", feedback: [] });
      return;
    }
    const button = el("submitMasteryTestBtn");
    button.disabled = true;
    button.textContent = "AI is evaluating...";
    const questionsForEvaluation = activeTestQuestions.map((question) => {
      if (typeof question === "string") return question;
      return question.type === "mcq" ? `${question.question}\nCorrect answer: ${question.answer}` : question.question;
    });
    const result = await window.TomCodexAI.evaluateMastery({
      course: courseName,
      module: module.title,
      questions: questionsForEvaluation,
      answers,
      lessonPoints: module.points,
      passScore: 80,
      minimumQuestionCount: 15,
      evaluationCriteria: module.richContent?.masteryEvaluationCriteria || [],
      projectEvidence: module.richContent?.projectEvidence || []
    });
    button.disabled = false;
    button.textContent = "Submit answers to AI";
    const best = scoreFor(currentModule);
    if (result.score > best) {
      masteryScores[currentModule] = { score: result.score, passed: result.score >= 80, timestamp: new Date().toISOString() };
      saveScores();
    }
    if (result.score >= 80 && best < 80) window.TomCodexLearning?.record("task", 15, `Passed ${recordLabel} mastery: ${module.title} (${result.score}%)`);
    showResult(result);
    renderNav();
    renderProgress();
    renderFinalExamStatus();
    el("completeModuleBtn").textContent = passed(currentModule) ? `Mastery passed: ${scoreFor(currentModule)}%` : "AI mastery test required";
    el("completeModuleBtn").classList.toggle("done", passed(currentModule));
    updateModuleNavigationButtons(passed(currentModule));
  }

  el("completeModuleBtn").addEventListener("click", startTest);
  el("startMasteryTestBtn").addEventListener("click", startTest);
  el("startMasteryTestBtnRich")?.addEventListener("click", startTest);
  el("flashcardCard")?.addEventListener("click", flipFlashcard);
  el("flipFlashcardBtn")?.addEventListener("click", flipFlashcard);
  el("previousFlashcardBtn")?.addEventListener("click", () => moveFlashcard(-1));
  el("nextFlashcardBtn")?.addEventListener("click", () => moveFlashcard(1));
  el("checkMyWorkBtn")?.addEventListener("click", runCheckMyWork);
  el("retryCheckBtn")?.addEventListener("click", () => {
    el("labVerifyResult")?.classList.add("hidden");
    el("retryCheckBtn").classList.add("hidden");
    document.querySelectorAll("[data-lab-criterion]").forEach(i => i.value = "");
    el("labCriteriaForm")?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });
  el("expandAllLessonsBtn")?.addEventListener("click", () => setDetailedLessonsExpanded(true));
  el("collapseAllLessonsBtn")?.addEventListener("click", () => setDetailedLessonsExpanded(false));
  el("submitMasteryTestBtn").addEventListener("click", submitTest);
  el("previousModuleTopBtn")?.addEventListener("click", () => navigateToAdjacentModule(-1));
  el("nextModuleTopBtn")?.addEventListener("click", () => navigateToAdjacentModule(1));
  el("previousModuleBtn").addEventListener("click", () => navigateToAdjacentModule(-1));
  el("nextModuleBtn").addEventListener("click", () => navigateToAdjacentModule(1));
  el("continueCourseBtn").addEventListener("click", () => {
    const nextCourseModule = modules.findIndex((_, index) => unlocked(index) && !passed(index));
    selectModuleAndShowContent(nextCourseModule < 0 ? modules.length - 1 : nextCourseModule);
  });
  function initFloatingLeitrTimer() {
    if (el("leitrFloatingTimer")) return;

    const container = document.createElement("div");
    container.id = "leitrFloatingTimer";
    container.className = "fixed top-24 right-6 z-50 font-sans text-slate-800 pointer-events-auto";
    container.innerHTML = `
      <!-- Collapsed Mini Pill -->
      <button id="leitrTimerMini" class="flex items-center gap-2 bg-slate-900 text-white text-xs font-bold px-3 py-2 rounded-full shadow-lg border border-slate-700 hover:bg-slate-800 transition focus:outline-none" type="button">
        <svg class="h-4 w-4 text-lime fill-none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
        <span id="leitrTimerMiniLabel">LEITR Timer</span>
        <span id="leitrTimerMiniClock" class="bg-slate-800 text-lime px-2 py-0.5 rounded-full font-mono text-[11px]">25:00</span>
      </button>

      <!-- Expanded Figma Panel -->
      <div id="leitrTimerPanel" class="hidden w-80 bg-white rounded-xl border border-slate-200 shadow-xl p-4 flex flex-col gap-3.5 text-slate-800 animate-in fade-in zoom-in-95 duration-150">
        <!-- Header -->
        <div class="flex items-center justify-between border-b border-slate-100 pb-2">
          <div class="flex items-center gap-1.5">
            <span class="text-[10px] font-black uppercase tracking-wider text-slate-400">LEITR STUDY TIMER</span>
            <span id="leitrTimerStatusPill" class="bg-brand-50 text-brand-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">LEARN</span>
          </div>
          <button id="leitrTimerClose" class="text-slate-400 hover:text-slate-600 focus:outline-none" type="button">
            <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
        </div>

        <!-- Timer Digits -->
        <div class="flex flex-col items-center py-2">
          <div id="leitrTimerClock" class="text-4xl font-black font-mono tracking-widest text-slate-800 select-none">25:00</div>
          <!-- Progress Bar -->
          <div class="w-full h-1.5 bg-slate-100 rounded-full mt-3 overflow-hidden">
            <div id="leitrTimerProgress" class="h-full bg-brand-600 rounded-full transition-all duration-300 ease-linear" style="width: 100%;"></div>
          </div>
        </div>

        <!-- Preset Figma Tabs -->
        <div class="grid grid-cols-4 gap-1 bg-slate-100 p-1 rounded-lg border border-slate-200">
          <button data-preset="learn" class="preset-btn py-1.5 text-[10px] font-extrabold uppercase rounded-md text-slate-700 bg-white shadow-sm border border-slate-200/50 hover:bg-slate-50 transition focus:outline-none" type="button">Learn</button>
          <button data-preset="explain" class="preset-btn py-1.5 text-[10px] font-extrabold uppercase rounded-md text-slate-600 hover:bg-slate-50 transition focus:outline-none" type="button">Explain</button>
          <button data-preset="implement" class="preset-btn py-1.5 text-[10px] font-extrabold uppercase rounded-md text-slate-600 hover:bg-slate-50 transition focus:outline-none" type="button">Impl</button>
          <button data-preset="test" class="preset-btn py-1.5 text-[10px] font-extrabold uppercase rounded-md text-slate-600 hover:bg-slate-50 transition focus:outline-none" type="button">Test</button>
        </div>

        <!-- Controls -->
        <div class="flex items-center justify-between pt-1">
          <div class="flex items-center gap-1.5">
            <button id="leitrTimerPlay" class="bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-[11px] px-3.5 py-2 rounded-lg transition focus:outline-none flex items-center gap-1" type="button">
              <svg class="h-3 w-3 fill-current" viewBox="0 0 24 24" id="leitrTimerPlayIcon"><path d="M8 5v14l11-7z"/></svg>
              <span id="leitrTimerPlayText">Start</span>
            </button>
            <button id="leitrTimerReset" class="border border-slate-200 hover:bg-slate-50 text-slate-600 font-extrabold text-[11px] px-3.5 py-2 rounded-lg transition focus:outline-none" type="button">
              Reset
            </button>
          </div>
          <label class="inline-flex items-center gap-1.5 text-[10px] font-bold text-slate-500 cursor-pointer select-none">
            <input type="checkbox" id="leitrTimerSound" checked class="rounded border-slate-300 text-brand-600 focus:ring-brand-500">
            <span>Sound</span>
          </label>
        </div>
      </div>
    `;
    document.body.appendChild(container);

    const miniBtn = el("leitrTimerMini");
    const panel = el("leitrTimerPanel");
    const closeBtn = el("leitrTimerClose");
    const playBtn = el("leitrTimerPlay");
    const playText = el("leitrTimerPlayText");
    const playIcon = el("leitrTimerPlayIcon");
    const resetBtn = el("leitrTimerReset");
    const soundToggle = el("leitrTimerSound");
    const clockDisplay = el("leitrTimerClock");
    const miniClockDisplay = el("leitrTimerMiniClock");
    const progressBar = el("leitrTimerProgress");
    const statusPill = el("leitrTimerStatusPill");
    const miniLabel = el("leitrTimerMiniLabel");

    const DURATIONS = {
      learn: 25 * 60,
      explain: 10 * 60,
      implement: 30 * 60,
      test: 10 * 60
    };

    let activePreset = "learn";
    let secondsLeft = DURATIONS[activePreset];
    let intervalId = null;
    let lastTickTime = null;

    miniBtn.onclick = () => {
      miniBtn.classList.add("hidden");
      panel.classList.remove("hidden");
    };
    closeBtn.onclick = () => {
      panel.classList.add("hidden");
      miniBtn.classList.remove("hidden");
    };

    function renderTime() {
      const mins = Math.floor(secondsLeft / 60);
      const secs = secondsLeft % 60;
      const formatted = `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
      clockDisplay.textContent = formatted;
      miniClockDisplay.textContent = formatted;

      const total = DURATIONS[activePreset];
      const pct = (secondsLeft / total) * 100;
      progressBar.style.width = `${pct}%`;
      
      if (pct < 15) {
        progressBar.className = "h-full bg-rose-600 rounded-full transition-all duration-300 ease-linear";
      } else if (pct < 40) {
        progressBar.className = "h-full bg-amber-500 rounded-full transition-all duration-300 ease-linear";
      } else {
        progressBar.className = "h-full bg-brand-600 rounded-full transition-all duration-300 ease-linear";
      }
    }

    function selectPreset(presetName) {
      activePreset = presetName;
      secondsLeft = DURATIONS[presetName];
      statusPill.textContent = presetName === "implement" ? "IMPL" : presetName.toUpperCase();
      miniLabel.textContent = presetName === "implement" ? "LEITR Impl" : `LEITR ${presetName.charAt(0).toUpperCase() + presetName.slice(1)}`;

      document.querySelectorAll("#leitrFloatingTimer .preset-btn").forEach(btn => {
        const isCurrent = btn.getAttribute("data-preset") === presetName;
        btn.className = isCurrent 
          ? "preset-btn py-1.5 text-[10px] font-extrabold uppercase rounded-md text-slate-700 bg-white shadow-sm border border-slate-200/50 transition focus:outline-none" 
          : "preset-btn py-1.5 text-[10px] font-extrabold uppercase rounded-md text-slate-600 hover:bg-slate-50 transition focus:outline-none";
      });

      stopTimer();
      renderTime();
    }

    document.querySelectorAll("#leitrFloatingTimer .preset-btn").forEach(btn => {
      btn.onclick = () => {
        selectPreset(btn.getAttribute("data-preset"));
      };
    });

    function startTimer() {
      if (intervalId) return;
      lastTickTime = Date.now();
      playText.textContent = "Pause";
      playIcon.innerHTML = `<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>`;

      intervalId = setInterval(() => {
        const now = Date.now();
        const delta = Math.floor((now - lastTickTime) / 1000);
        if (delta >= 1) {
          secondsLeft = Math.max(0, secondsLeft - delta);
          lastTickTime = now;
          renderTime();

          if (secondsLeft <= 0) {
            triggerAlarm();
          }
        }
      }, 1000);
    }

    function stopTimer() {
      if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
      }
      playText.textContent = "Start";
      playIcon.innerHTML = `<path d="M8 5v14l11-7z"/>`;
    }

    function triggerAlarm() {
      stopTimer();
      playAlarmSound();

      if (Notification.permission === "granted") {
        new Notification("TomCodex Timer Alert", {
          body: `LEITR Phase "${activePreset.toUpperCase()}" is complete! Time to explain, implement, or test.`,
          icon: "assets/tomcodex-logo.svg"
        });
      }

      alert(`LEITR ${activePreset.toUpperCase()} completed!`);
      
      const sequence = ["learn", "explain", "implement", "test"];
      const nextIdx = (sequence.indexOf(activePreset) + 1) % sequence.length;
      selectPreset(sequence[nextIdx]);
    }

    function playAlarmSound() {
      if (!soundToggle.checked) return;
      try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (!AudioCtx) return;
        const ctx = new AudioCtx();
        const playBeep = (delay, freq, duration) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.connect(gain);
          gain.connect(ctx.destination);
          
          osc.frequency.setValueAtTime(freq, ctx.currentTime + delay);
          gain.gain.setValueAtTime(0, ctx.currentTime + delay);
          gain.gain.linearRampToValueAtTime(0.3, ctx.currentTime + delay + 0.05);
          gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + delay + duration - 0.05);
          
          osc.start(ctx.currentTime + delay);
          osc.stop(ctx.currentTime + delay + duration);
        };
        playBeep(0, 880, 0.25);
        playBeep(0.3, 880, 0.25);
        playBeep(0.6, 1100, 0.45);
      } catch (e) {
        console.warn(e);
      }
    }

    playBtn.onclick = () => {
      if (intervalId) {
        stopTimer();
      } else {
        startTimer();
      }
    };

    resetBtn.onclick = () => {
      stopTimer();
      secondsLeft = DURATIONS[activePreset];
      renderTime();
    };

    document.addEventListener("visibilitychange", () => {
      if (!document.hidden && intervalId) {
        const now = Date.now();
        const delta = Math.floor((now - lastTickTime) / 1000);
        if (delta >= 1) {
          secondsLeft = Math.max(0, secondsLeft - delta);
          lastTickTime = now;
          renderTime();
          if (secondsLeft <= 0) {
            triggerAlarm();
          }
        }
      }
    });

    document.querySelectorAll(".leitr-cycle-grid article").forEach((article, idx) => {
      if (idx < 4) {
        article.classList.add("cursor-pointer", "transition", "hover:bg-brand-50/50");
        article.onclick = () => {
          miniBtn.classList.add("hidden");
          panel.classList.remove("hidden");
          const presets = ["learn", "explain", "implement", "test"];
          selectPreset(presets[idx]);
          panel.scrollIntoView({ behavior: "smooth", block: "nearest" });
        };
      }
    });

    selectPreset("learn");
  }

  injectFinalExam();
  render();
  initFloatingLeitrTimer();
})();
