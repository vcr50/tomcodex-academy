(function () {
  const input = document.getElementById("courseDoubtInput");
  const speed = document.getElementById("courseDoubtSpeed");
  const answerBox = document.getElementById("courseDoubtAnswer");
  const askButton = document.getElementById("askCourseGuideBtn");

  const LEITR_TRAINING_CONTEXT = [
    "TomCodeX LEITR study system: Learn > Explain > Implement > Test > Review.",
    "Learn one concept for 25 minutes. Explain it for 10 minutes in simple English by answering what, why, when, and one example.",
    "Implement for 30-60 minutes in Salesforce. Test yourself for 10 minutes by explaining without notes, rebuilding from scratch, and answering one interview question.",
    "Review weak parts after 1 day, 3 days, and 7 days. Rule: for every 1 hour learning, spend at least 2 hours implementing."
  ].join(" ");

  function cleanText(value) {
    const container = document.createElement("div");
    container.innerHTML = String(value || "");
    return container.textContent.replace(/\s+/g, " ").trim();
  }

  function activeModuleTitle() {
    return cleanText(document.getElementById("moduleTitle")?.textContent || "Current module");
  }

  function activeModuleConfig() {
    const title = activeModuleTitle();
    const modules = window.TomCodexCourseConfig?.modules || [];
    return modules.find((module) => module.title === title) || null;
  }

  function listText(items = [], limit = 8) {
    return items.slice(0, limit).map(cleanText).filter(Boolean).join(" | ");
  }

  function buildCourseGuideContext() {
    const config = window.TomCodexCourseConfig || {};
    const module = activeModuleConfig();
    const rich = module?.richContent || {};
    const projectTask = rich.projectTask || {};
    const stage = module?.masteryStage || module?.subCourse || {};
    const labCriteria = Array.isArray(rich.labCriteria) ? rich.labCriteria.map((criterion) => criterion.question) : [];
    const lines = [
      `Course: ${config.courseName || "TomCodeX Salesforce course"}`,
      `Current module: ${module?.title || activeModuleTitle()}`,
      stage.title ? `Learning stage: ${stage.title}` : "",
      stage.outcome ? `Stage outcome: ${stage.outcome}` : "",
      rich.mainSyllabus?.title ? `Main syllabus: ${rich.mainSyllabus.title}. ${rich.mainSyllabus.introduction || ""}` : "",
      projectTask.title ? `Practical build task: ${projectTask.title}` : "",
      projectTask.purpose ? `Task purpose: ${projectTask.purpose}` : "",
      projectTask.expected ? `Expected result: ${projectTask.expected}` : "",
      projectTask.flows?.length ? `Flow/build artifacts: ${listText(projectTask.flows)}` : "",
      projectTask.steps?.length ? `Implementation steps: ${listText(projectTask.steps, 12)}` : "",
      rich.projectEvidence?.length ? `Required evidence: ${listText(rich.projectEvidence, 10)}` : "",
      labCriteria.length ? `Check My Work criteria: ${listText(labCriteria, 8)}` : "",
      LEITR_TRAINING_CONTEXT,
      "Zentom must answer from this curriculum context, keep the answer practical, include what to build or verify, and end with a LEITR review action."
    ];
    return lines.map(cleanText).filter(Boolean).join("\n");
  }

  askButton.addEventListener("click", async () => {
    const doubt = input.value.trim();
    if (!doubt) {
      answerBox.className = "course-doubt-answer error";
      answerBox.textContent = "Type your doubt first so Zentom can guide you.";
      return;
    }

    askButton.disabled = true;
    askButton.textContent = "Zentom is applying Salesforce knowledge...";
    answerBox.className = "course-doubt-answer";
    answerBox.textContent = "Preparing a Salesforce-specialized guided answer...";

    const moduleTitle = activeModuleTitle();
    const result = await window.TomCodexAI.askTrainer({
      topic: moduleTitle,
      answerMode: "Course Guide Mode",
      speedMode: speed.value,
      doubt,
      context: buildCourseGuideContext()
    });

    if (!result.connected) {
      answerBox.className = "course-doubt-answer error";
      answerBox.textContent = `${result.error}\n\nZentom AI is temporarily unavailable. Please try again after the service is connected.`;
      askButton.disabled = false;
      askButton.textContent = "Ask Salesforce-specialized Zentom";
      return;
    }

    answerBox.className = "course-doubt-answer";
    const heading = Object.assign(document.createElement("strong"), { textContent: `${speed.options[speed.selectedIndex].text} Salesforce-specialized answer` });
    const bodyContainer = document.createElement("div");
    bodyContainer.className = "rich-text-content";
    answerBox.replaceChildren(heading, bodyContainer);
    window.TomCodexAI.typeWriterEffect(bodyContainer, result.answer, () => {
      askButton.disabled = false;
      askButton.textContent = "Ask Salesforce-specialized Zentom";
    });
    window.TomCodexLearning?.record("tutor", 2, `${moduleTitle}: ${doubt}`);
  });

  const floatingButton = document.getElementById("floatingGuideBtn");
  if (!floatingButton) return;
  const floatingPanel = document.getElementById("floatingGuidePanel");
  const floatingContext = document.getElementById("floatingGuideContext");
  const floatingInput = document.getElementById("floatingGuideInput");
  const floatingSpeed = document.getElementById("floatingGuideSpeed");
  const floatingAnswer = document.getElementById("floatingGuideAnswer");
  const floatingAskButton = document.getElementById("askFloatingGuideBtn");

  function toggleFloatingGuide(open) {
    floatingPanel.classList.toggle("hidden", !open);
    floatingButton.setAttribute("aria-expanded", String(open));
    if (open) {
      floatingContext.textContent = `Guiding you on: ${activeModuleTitle()}`;
      floatingInput.focus();
    }
  }

  floatingButton.addEventListener("click", () => toggleFloatingGuide(floatingPanel.classList.contains("hidden")));
  document.getElementById("closeFloatingGuideBtn").addEventListener("click", () => toggleFloatingGuide(false));
  floatingAskButton.addEventListener("click", async () => {
    const doubt = floatingInput.value.trim();
    if (!doubt) {
      floatingAnswer.className = "course-doubt-answer error";
      floatingAnswer.textContent = "Type your doubt first.";
      return;
    }
    const moduleTitle = activeModuleTitle();
    floatingAskButton.disabled = true;
    floatingAskButton.textContent = "AI guide is thinking...";
    floatingAnswer.className = "course-doubt-answer";
    floatingAnswer.textContent = "Preparing your guided answer...";
    const result = await window.TomCodexAI.askTrainer({
      topic: moduleTitle,
      answerMode: "Floating Course Guide",
      speedMode: floatingSpeed.value,
      doubt,
      context: buildCourseGuideContext()
    });
    const heading = Object.assign(document.createElement("strong"), { textContent: `${floatingSpeed.options[floatingSpeed.selectedIndex].text} guide answer` });
    const bodyContainer = document.createElement("div");
    bodyContainer.className = "rich-text-content";
    floatingAnswer.replaceChildren(heading, bodyContainer);
    window.TomCodexAI.typeWriterEffect(bodyContainer, result.answer, () => {
      floatingAskButton.disabled = false;
      floatingAskButton.textContent = "Ask AI guide";
    });
    window.TomCodexLearning?.record("tutor", 2, `${moduleTitle}: ${doubt}`);
  });
})();
