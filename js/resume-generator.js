/**
 * Resume Project Generator Client Logic
 */
(function () {
  const ENDPOINT = "/api/ai/resume";
  const HISTORY_KEY = "tomcodex.resumeGenerations.v1";

  const el = (id) => document.getElementById(id);

  let isHtmlView = false;

  // Pre-populated achievements data
  const PROJECT_ACHIEVEMENTS = {
    capstone: [
      "Designed custom relational schema with Student, Application, Financial, and Cohort custom objects.",
      "Configured Master-Detail relationships to enforce data integrity and cascade deletions across cohort records.",
      "Created record-triggered Flows to automate admissions notification routing and automated email alerts.",
      "Implemented Apex triggers with trigger handler pattern for custom student validation rules.",
      "Enforced security access controls using Profiles, Permission Sets, and custom Role Hierarchy policies.",
      "Loaded legacy database files (1,000+ rows) using Salesforce Data Loader, implementing Duplication Rules.",
      "Constructed REST integration interfaces using Named Credentials and JSON deserialization to sync payment data."
    ],
    apex: [
      "Created outbound REST Callout helper services using Named Credentials to secure legacy api tokens.",
      "Configured Salesforce Named Credentials to separate credentials and secrets from codebase configs.",
      "Built asynchronous Batchable Apex class executing nightly to synchronize external student payments.",
      "Implemented a centralized exception logging framework in Apex to capture integration stack traces.",
      "Wrote unit tests achieving 85%+ coverage covering success, network failure, and callout mock states."
    ],
    lwc: [
      "Designed responsive UI component views inside Salesforce utilizing Lightning Design System (SLDS).",
      "Utilized Salesforce wire service and cacheable Apex adapters to display real-time student collections.",
      "Implemented event propagation and custom bubbles dispatch listeners to coordinate sibling components.",
      "Built interactive search datatables supporting client-side filtering, sorting, and inline edits.",
      "Optimized rendering lifecycle to prevent UI lag by lazy loading complex component child containers."
    ],
    agentforce: [
      "Configured autonomous Agentforce agents with topic classifiers, instructions, and prompt safety classifications.",
      "Exposed record-triggered Flows as Agent actions to fetch and edit CRM record values on user request.",
      "Designed dynamic Prompt Templates merging record attributes with system context instructions.",
      "Conducted extensive agent sandbox testing and instruction tuning to establish reliable safety guardrails."
    ]
  };

  // Local Offline Fallback Templates
  const TEMPLATE_OUTLINE = {
    capstone: {
      developer: {
        summary: "Developed a comprehensive Student Success CRM on the Salesforce platform to manage cohort assignments, application pipelines, and financial records.",
        bulletPoints: [
          "Designed and implemented a custom relational data model utilizing Custom Objects, Master-Detail relationships, and Page Layouts to track students, cohorts, and applications.",
          "Built record-triggered Salesforce Flows to automate Lead assignment and student notification routing, increasing admissions operational efficiency.",
          "Implemented Apex Triggers and Helper classes with trigger-handler patterns for bulkified record processing, maintaining governor-limit safety.",
          "Developed external REST API integrations using Named Credentials and JSON parsers to synchronize student payment records with mock endpoints."
        ],
        skills: ["Data Modeling", "Salesforce Flows", "Apex Development", "REST Integrations", "Security Sharing Rules", "Data Loaders"]
      },
      admin: {
        summary: "Configured and administered the Student Success CRM system to optimize student lifecycle management and admissions operations.",
        bulletPoints: [
          "Administered custom objects, page layouts, and search configurations to support dynamic tracking of 5,000+ student applications.",
          "Configured Lead and Case assignment rules along with complex validation rules to ensure data cleanliness and automated routing.",
          "Established organizational security protocols, implementing custom Profiles, Permission Sets, and Role Hierarchy structures.",
          "Designed custom Analytics Dashboards and Salesforce Reports to track cohort enrollment velocity and financial progress indicators."
        ],
        skills: ["User Administration", "Security Sharing Model", "Reports & Dashboards", "Validation Rules", "Data Loaders", "Flow Automation"]
      },
      consultant: {
        summary: "Conducted business analysis and designed process improvements for the Student Success CRM admissions workflow.",
        bulletPoints: [
          "Gathered requirements from admissions stakeholders to map out Student Application business processes and translate them into technical specs.",
          "Designed functional flowcharts and led validation sessions to establish the target automation architecture.",
          "Formulated user acceptance criteria (UAT) and created training materials to ensure seamless rollout to admissions staff."
        ],
        skills: ["Business Analysis", "Requirements Gathering", "UAT Testing", "Flow Diagramming", "Salesforce CRM", "Process Automation"]
      },
      agentforce: {
        summary: "Integrated autonomous AI capabilities into the Student Success CRM to assist admissions coordinators and students.",
        bulletPoints: [
          "Coordinated with development teams to identify CRM actions suitable for automation via autonomous AI agents.",
          "Configured security profiles and least-privilege permission models to govern AI agent access boundaries within the CRM.",
          "Monitored pilot user testing metrics and compiled recommendations to optimize agent actions and reduce human intervention rate."
        ],
        skills: ["Agentforce Integration", "Admissions CRM", "Security Boundaries", "AI Governance", "UAT Pilot Feedback"]
      }
    },
    apex: {
      developer: {
        summary: "Engineered high-performance backend Apex services and outbound REST API integrations on the Salesforce platform.",
        bulletPoints: [
          "Developed robust outbound REST integration services utilizing Salesforce Named Credentials and OAuth 2.0 to secure external api access.",
          "Parsed complex nested JSON payment data payloads asynchronously using Batchable Apex classes to update CRM data nightly.",
          "Created generic error handling utilities and custom debug loggers in Apex to track integration failures and reduce debug cycle time.",
          "Authored comprehensive Apex unit tests with callout mocks to achieve 85%+ coverage across bulk record testing scenarios."
        ],
        skills: ["Outbound REST APIs", "Named Credentials", "Asynchronous Apex", "Apex Triggers", "JSON Deserialization", "Exception Handling"]
      },
      admin: {
        summary: "Administered integration credentials, endpoints, and asynchronous scheduled jobs for payment synchronization.",
        bulletPoints: [
          "Configured Named Credentials and External Credentials to store callout keys securely without developer code updates.",
          "Monitored system integration logs, Scheduled Jobs, and Apex Apex Flex queues to identify and resolve synchronization delays.",
          "Maintained org boundaries by configuring remote site settings and checking system governance limit metrics."
        ],
        skills: ["Named Credentials", "Scheduled Jobs", "System Log Auditing", "Remote Site Settings", "Governor Limits Monitoring"]
      },
      consultant: {
        summary: "Designed payment system synchronization workflows and credential access policies for external API connections.",
        bulletPoints: [
          "Analyzed third-party payment gateway documentation to align data payloads with Salesforce CRM field architectures.",
          "Drafted data-mapping documents and error handling escalation matrices to safeguard payment synchronization workflows.",
          "Recommended Named Credentials security architectures to clients to satisfy compliance audits."
        ],
        skills: ["API Data Mapping", "System Architecture", "Security Compliance", "Payment Gateway Sync", "Functional Specs"]
      },
      agentforce: {
        summary: "Configured Apex integration methods to serve as actionable tools for AI agents.",
        bulletPoints: [
          "Refactored programmatic Apex classes with Invocable Method annotations, making them accessible to autonomous agent planners.",
          "Designed payload parameters in Apex to allow agents to dynamically trigger payments queries and record updates.",
          "Optimized Apex callout performance boundaries to ensure agent tool executions completed within conversational latency parameters."
        ],
        skills: ["Invocable Apex", "Agent Tools", "API Optimization", "Conversational AI", "JSON Parameters"]
      }
    },
    lwc: {
      developer: {
        summary: "Constructed dynamic, responsive user experiences using Lightning Web Components (LWC) to enhance internal operations.",
        bulletPoints: [
          "Developed responsive user interface layouts with LWC, utilizing Lightning Design System (SLDS) styling to align with Salesforce branding guidelines.",
          "Implemented Salesforce wire service and dynamic Apex controller adapters to query and display filterable record datatables.",
          "Optimized front-end components using custom events and DOM parent-child communications, improving page load performance.",
          "Configured custom Lightning Record Pages with component filters to render modular LWC blocks based on record status attributes."
        ],
        skills: ["Lightning Web Components", "Salesforce Lightning Design System", "Wire Service", "Apex Adapters", "Event Propagation", "JavaScript ES6+"]
      },
      admin: {
        summary: "Deployed, configured, and localized custom Lightning Web Components across Lightning App Pages.",
        bulletPoints: [
          "Configured LWC component targets inside Lightning App Builder, adjusting layouts, permissions, and responsive form factors.",
          "Set up Component Visibility criteria using record fields to display advanced LWC panels only to authorized user profiles.",
          "Maintained Custom Labels and translations to support localization configurations across custom component user fields."
        ],
        skills: ["Lightning App Builder", "Component Visibility", "Custom Labels", "User Experience Settings", "Profile Access"]
      },
      consultant: {
        summary: "Analyzed user experience requirements and designed custom page layouts for sales and operations workflows.",
        bulletPoints: [
          "Facilitated usability workshops to capture operations staff pain points and designed mockups for Lightning Page layouts.",
          "Prepared functional specs for front-end LWC engineers, detailing sorting criteria, search filter logic, and inline edits behaviors.",
          "Validated front-end builds against user stories to verify layout speed and accessibility goals."
        ],
        skills: ["UX Mockups", "Lightning Layouts Design", "Functional Requirements", "UAT Testing", "Agile User Stories"]
      },
      agentforce: {
        summary: "Exposed and styled custom LWC panels to display active AI agent statuses and recommendation flows.",
        bulletPoints: [
          "Configured agent status dashboard widgets in Lightning Experience, linking custom LWC components to track agent interaction analytics.",
          "Embedded LWC cards inside utility bars to allow users to trigger conversational agent help sidebars in context.",
          "Designed dynamic buttons inside components triggering CRM record processes that synchronize immediately with agent memory maps."
        ],
        skills: ["Utility Bar Config", "Dashboard Widgets", "Agent Context Sync", "Salesforce LWC", "Interactive Dashboards"]
      }
    },
    agentforce: {
      developer: {
        summary: "Programmed custom prompt extensions, flow actions, and autonomous routing classifications for conversational agents.",
        bulletPoints: [
          "Authored invocable Flow routing modules and Apex helper actions to allow agents to interact with third-party billing databases.",
          "Designed dynamic prompt configurations and system instructions, handling contextual variables and CRM merge fields.",
          "Engineered agent validation scripts to run automated test scripts comparing agent conversational responses with expected outputs."
        ],
        skills: ["Apex Invocable Actions", "Flow Planners", "Prompt Engineering", "Testing Sandbox", "Agent Validation", "Conversational Logic"]
      },
      admin: {
        summary: "Configured and monitored autonomous Agentforce support agents to handle user queries and record automations.",
        bulletPoints: [
          "Configured Agentforce agent parameters, setting up topic scopes, system prompts, and classification instructions.",
          "Mapped existing Salesforce Flows as agent actions, enabling automated record retrieval and email notifications.",
          "Monitored agent conversation transcripts and accuracy metrics in Agentforce console to tune and correct instructions.",
          "Set up secure agent user profiles and permissions to restrict agent record access to public CRM objects."
        ],
        skills: ["Agentforce Config", "Flow Tools Mapping", "Transcript Auditing", "AI Profiles & Permissions", "Classification Prompts"]
      },
      consultant: {
        summary: "Designed AI conversational roadmaps and agent classification rules to automate support service workflows.",
        bulletPoints: [
          "Analyzed support queue case types to identify cases suitable for routing to autonomous Agentforce agents.",
          "Drafted agent conversational guidelines and topic routing diagrams to model customer queries escalation paths.",
          "Assessed agent interaction metrics to compile ROI reports on automation accuracy and human staff time saved."
        ],
        skills: ["AI Roadmap Design", "Case Deflection Strategy", "Topic Routing Mapping", "Performance Analytics", "Stakeholder Alignment"]
      },
      agentforce: {
        summary: "Built and specialized autonomous Agentforce conversational agents to manage admissions query queues.",
        bulletPoints: [
          "Designed Agentforce Agent topics, configuring natural language prompts and instruction guidelines, reaching 90% accuracy.",
          "Linked Salesforce admissions Flows as agent actions, enabling AI agents to search cohorts and schedule interviews.",
          "Conducted testing runs and prompt tuning iterations to establish safety guardrails against prompt injection risks."
        ],
        skills: ["Agentforce Specialist", "Topic Classifiers", "Flow Actions Integration", "Prompt Engineering", "Conversational Safety"]
      }
    }
  };

  // Initialize
  function init() {
    setupProjectListener();
    renderAchievements();
    renderHistory();
    setupTabListeners();
    setupTemplatesView();
    setupATSTab();

    if (el("resumeForm")) el("resumeForm").addEventListener("submit", handleGenerate);
    if (el("clearHistoryBtn")) el("clearHistoryBtn").addEventListener("click", clearHistory);
    if (el("copyAllBtn")) el("copyAllBtn").addEventListener("click", copyAllOutput);
    if (el("copySummaryBtn")) el("copySummaryBtn").addEventListener("click", () => copyText(el("outputSummary").textContent, el("copySummaryBtn")));
  }

  // Update achievements checklist on project dropdown change
  function setupProjectListener() {
    const projectSelect = el("projectSelect");
    if (projectSelect) {
      projectSelect.addEventListener("change", renderAchievements);
    }
  }

  // Render checkboxes corresponding to the selected project
  function renderAchievements() {
    const projectSelect = el("projectSelect");
    const container = el("achievementsContainer");
    if (!projectSelect || !container) return;

    const projectVal = projectSelect.value;
    const achievements = PROJECT_ACHIEVEMENTS[projectVal] || [];

    container.innerHTML = achievements
      .map(
        (ach, idx) => `
        <label class="flex items-start gap-3 p-2.5 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-slate-50 cursor-pointer transition">
          <input type="checkbox" name="achievements" value="${ach}" class="custom-checkbox mt-0.5 shrink-0" ${idx < 3 ? "checked" : ""}>
          <span class="text-xs text-slate-700 font-medium leading-relaxed">${ach}</span>
        </label>
      `
      )
      .join("");
  }

  // Load History from LocalStorage
  function loadHistory() {
    try {
      const history = JSON.parse(localStorage.getItem(HISTORY_KEY));
      return Array.isArray(history) ? history : [];
    } catch {
      return [];
    }
  }

  // Save item to history
  function saveHistoryItem(item) {
    const history = loadHistory();
    history.unshift(item);
    localStorage.setItem(HISTORY_KEY, JSON.stringify(history.slice(0, 9)));
  }

  // Render History List
  function renderHistory() {
    const list = el("historyList");
    if (!list) return;

    const history = loadHistory();
    if (history.length === 0) {
      list.innerHTML = `<p class="text-xs text-slate-400 text-center py-6 col-span-full">No previous generations saved. Create one above to get started.</p>`;
      return;
    }

    list.innerHTML = history
      .map(
        (item, idx) => {
          const dateStr = new Date(item.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" });
          const roleClass = item.role.toLowerCase();
          return `
          <article class="history-card" data-idx="${idx}">
            <div class="flex items-center justify-between gap-2 mb-2">
              <span class="tag-badge ${roleClass}">${item.role}</span>
              <span class="text-[10px] text-slate-400 font-bold">${dateStr}</span>
            </div>
            <strong class="block text-xs font-bold text-slate-800 line-clamp-1">${item.projectName}</strong>
            <p class="text-[11px] text-slate-500 mt-1 line-clamp-2">${item.summary}</p>
            <div class="mt-3 flex items-center justify-between text-[10px] font-extrabold text-brand-600">
              <span>Click to view details</span>
              <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="3" class="shrink-0"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </div>
          </article>
        `;
        }
      )
      .join("");

    // Attach click listeners to cards
    list.querySelectorAll(".history-card").forEach((card) => {
      card.addEventListener("click", () => {
        const idx = card.dataset.idx;
        const item = history[idx];
        if (item) loadGenResult(item);
      });
    });
  }

  // Clear History
  function clearHistory() {
    if (confirm("Are you sure you want to clear all history?")) {
      localStorage.removeItem(HISTORY_KEY);
      renderHistory();
    }
  }

  // Load generation result into view
  function loadGenResult(data) {
    el("outputEmptyState").classList.add("hidden");
    el("outputResultState").classList.remove("hidden");

    el("outputEngineLabel").textContent = data.source === "centralized-ai-engine" ? "Centralized AI generator" : "Local template generator";
    el("outputSummary").textContent = data.summary;

    const bulletList = el("outputBulletList");
    if (bulletList) {
      bulletList.innerHTML = data.bulletPoints
        .map(
          (bp) => `
          <div class="bullet-card group">
            <p class="text-xs text-slate-700 leading-relaxed pr-8 font-medium">${bp}</p>
            <button class="copy-btn absolute top-2 right-2 p-1.5 rounded-lg bg-white hover:bg-slate-50 text-slate-400 hover:text-slate-700 shadow-sm border border-slate-100" data-copy-value="${bp.replace(/"/g, '&quot;')}">
              <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            </button>
          </div>
        `
        )
        .join("");

      // Add click copy listeners to individual bullets
      bulletList.querySelectorAll(".copy-btn").forEach((btn) => {
        btn.addEventListener("click", (e) => {
          e.stopPropagation();
          const val = btn.dataset.copyValue;
          copyText(val, btn);
        });
      });
    }

    const skillsList = el("outputSkillsList");
    if (skillsList) {
      skillsList.innerHTML = data.skills
        .map((s) => `<span class="px-2 py-1 bg-slate-100 text-slate-600 rounded text-[10px] font-bold border border-slate-200/50">${s}</span>`)
        .join("");
    }

    // Scroll output card into view on mobile
    el("outputResultState").scrollIntoView({ behavior: "smooth" });
  }

  // Copy helper
  function copyText(text, button) {
    if (!navigator.clipboard) return;
    navigator.clipboard.writeText(text).then(() => {
      const originalHtml = button.innerHTML;
      button.innerHTML = `
        <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="3" class="text-emerald-600"><polyline points="20 6 9 17 4 12"></polyline></svg>
      `;
      button.classList.add("bg-emerald-50", "border-emerald-200");
      setTimeout(() => {
        button.innerHTML = originalHtml;
        button.classList.remove("bg-emerald-50", "border-emerald-200");
      }, 1500);
    });
  }

  // Copy All functionality
  function copyAllOutput() {
    const summary = el("outputSummary").textContent;
    const bullets = Array.from(el("outputBulletList").querySelectorAll("p")).map((p) => `- ${p.textContent}`).join("\n");
    const skills = Array.from(el("outputSkillsList").querySelectorAll("span")).map((s) => s.textContent).join(", ");

    const fullText = `Project Description:\n${summary}\n\nKey Achievements:\n${bullets}\n\nCore Technologies:\n${skills}`;
    const btn = el("copyAllBtn");

    if (!navigator.clipboard) return;
    navigator.clipboard.writeText(fullText).then(() => {
      const originalText = btn.innerHTML;
      btn.innerHTML = `
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="3" class="text-emerald-600"><polyline points="20 6 9 17 4 12"></polyline></svg>
        <span class="text-emerald-600 font-extrabold">Copied!</span>
      `;
      setTimeout(() => {
        btn.innerHTML = originalText;
      }, 1500);
    });
  }

  // Local Offline Generator Fallback
  function localResume({ project, role, achievements }) {
    const group = TEMPLATE_OUTLINE[project] || TEMPLATE_OUTLINE.capstone;
    const template = group[role] || group.developer;

    // Filter template bullets to prioritize selected checklist points (matching keywords)
    let selectedBullets = [];
    if (achievements.length > 0) {
      // Find template bullets matching keywords from achievements
      selectedBullets = template.bulletPoints.filter((bp) => {
        return achievements.some((ach) => {
          const words = ach.toLowerCase().split(/\W+/).filter(w => w.length > 4);
          return words.some(w => bp.toLowerCase().includes(w));
        });
      });
    }

    // Fallback if no matching bullets or too few
    if (selectedBullets.length < 3) {
      selectedBullets = [...template.bulletPoints];
    }

    return {
      summary: template.summary,
      bulletPoints: selectedBullets.slice(0, 5),
      skills: template.skills,
      source: "local-rules"
    };
  }

  // Handle Form Submit and call backend endpoint
  async function handleGenerate(e) {
    e.preventDefault();

    const projectSelect = el("projectSelect");
    const roleSelect = el("roleSelect");
    const toneSelect = el("toneSelect");
    const customNotes = el("customNotes");

    const projectVal = projectSelect.value;
    const roleVal = roleSelect.value;
    const toneVal = toneSelect.value;
    const notesVal = customNotes.value.trim();

    const checkedBoxes = document.querySelectorAll('input[name="achievements"]:checked');
    const achievements = Array.from(checkedBoxes).map((cb) => cb.value);

    const projectName = projectSelect.options[projectSelect.selectedIndex].text.split(" (")[0];
    const roleName = roleSelect.options[roleSelect.selectedIndex].text;

    const btn = el("generateBtn");
    btn.disabled = true;
    btn.textContent = "Generating...";

    const payload = {
      project: projectName,
      role: roleName,
      achievements,
      tone: toneVal,
      customNotes: notesVal
    };

    let result = null;

    try {
      const response = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const data = await response.json();
      if (!response.ok || !data.bulletPoints) throw new Error(data.error || "AI Generation failed");
      result = data;
    } catch {
      // Fallback offline template generator
      result = localResume({ project: projectVal, role: roleVal, achievements });
    }

    btn.disabled = false;
    btn.textContent = "Generate Resume Points";

    const savedItem = {
      projectName,
      role: roleName,
      summary: result.summary,
      bulletPoints: result.bulletPoints,
      skills: result.skills,
      source: result.source,
      createdAt: new Date().toISOString()
    };

    saveHistoryItem(savedItem);
    loadGenResult(savedItem);
    renderHistory();

    // Record learning activity
    window.TomCodexLearning?.record("task", 10, `Generated Salesforce ${roleName} resume points for ${projectName}`);
  }

  // Default mock projects for templates
  const DEFAULT_MOCK_PROJECTS = {
    developer: [
      {
        title: "Student Success CRM (Capstone Project)",
        role: "Salesforce Developer",
        summary: "Designed and implemented a custom relational data model utilizing Custom Objects, Master-Detail relationships, and Page Layouts to track students, cohorts, and applications.",
        bulletPoints: [
          "Built record-triggered Salesforce Flows to automate Lead assignment and student notification routing, increasing admissions operational efficiency.",
          "Implemented Apex Triggers and Helper classes with trigger-handler patterns for bulkified record processing, maintaining governor-limit safety.",
          "Developed external REST API integrations using Named Credentials and JSON parsers to synchronize student payment records with endpoints."
        ],
        skills: ["Data Modeling", "Salesforce Flows", "Apex Development", "REST Integrations", "Security Sharing Rules"]
      },
      {
        title: "Apex & Integration Services (Programmatic)",
        role: "Salesforce Developer",
        summary: "Engineered high-performance backend Apex services and outbound REST API integrations on the Salesforce platform.",
        bulletPoints: [
          "Developed outbound REST integration services utilizing Salesforce Named Credentials and OAuth 2.0 to secure external API access.",
          "Parsed complex nested JSON payment data payloads asynchronously using Batchable Apex classes to update CRM data nightly.",
          "Created generic error handling utilities and custom debug loggers in Apex to track integration failures and reduce debug cycle time."
        ],
        skills: ["Outbound REST APIs", "Named Credentials", "Asynchronous Apex", "Apex Triggers", "JSON Deserialization"]
      },
      {
        title: "LWC Portal Development (UI Component)",
        role: "Salesforce Developer",
        summary: "Constructed dynamic, responsive user experiences using Lightning Web Components (LWC) to enhance internal operations.",
        bulletPoints: [
          "Developed responsive user interface layouts with LWC, utilizing Lightning Design System (SLDS) styling to align with Salesforce branding guidelines.",
          "Implemented Salesforce wire service and dynamic Apex controller adapters to query and display filterable record datatables.",
          "Optimized front-end components using custom events and DOM parent-child communications, improving page load performance."
        ],
        skills: ["Lightning Web Components", "Salesforce Lightning Design System", "Wire Service", "Apex Adapters", "Event Propagation"]
      }
    ],
    admin: [
      {
        title: "Student Success CRM (Capstone Project)",
        role: "Salesforce Administrator",
        summary: "Configured and administered the Student Success CRM system to optimize student lifecycle management and admissions operations.",
        bulletPoints: [
          "Administered custom objects, page layouts, and search configurations to support dynamic tracking of 5,000+ student applications.",
          "Configured Lead and Case assignment rules along with complex validation rules to ensure data cleanliness and automated routing.",
          "Established organizational security protocols, implementing custom Profiles, Permission Sets, and Role Hierarchy structures.",
          "Designed custom Analytics Dashboards and Salesforce Reports to track cohort enrollment velocity and financial progress indicators."
        ],
        skills: ["User Administration", "Security Sharing Model", "Reports & Dashboards", "Validation Rules", "Data Loaders", "Flow Automation"]
      },
      {
        title: "Agentforce Service Agent (AI Autonomous)",
        role: "Salesforce Administrator",
        summary: "Configured and monitored autonomous Agentforce support agents to handle user queries and record automations.",
        bulletPoints: [
          "Configured Agentforce agent parameters, setting up topic scopes, system prompts, and classification instructions.",
          "Mapped existing Salesforce Flows as agent actions, enabling automated record retrieval and email notifications.",
          "Monitored agent conversation transcripts and accuracy metrics in Agentforce console to tune and correct instructions."
        ],
        skills: ["Agentforce Config", "Flow Tools Mapping", "Transcript Auditing", "AI Profiles & Permissions"]
      }
    ],
    agentforce: [
      {
        title: "Agentforce Service Agent (AI Autonomous)",
        role: "Salesforce Agentforce Specialist",
        summary: "Built and specialized autonomous Agentforce conversational agents to manage admissions query queues.",
        bulletPoints: [
          "Designed Agentforce Agent topics, configuring natural language prompts and instruction guidelines, reaching 90% accuracy.",
          "Linked Salesforce admissions Flows as agent actions, enabling AI agents to search cohorts and schedule interviews.",
          "Conducted testing runs and prompt tuning iterations to establish safety guardrails against prompt injection risks."
        ],
        skills: ["Agentforce Specialist", "Topic Classifiers", "Flow Actions Integration", "Prompt Engineering", "Conversational Safety"]
      },
      {
        title: "Student Success CRM (Capstone Project)",
        role: "Salesforce AI Integrator",
        summary: "Integrated autonomous AI capabilities into the Student Success CRM to assist admissions coordinators and students.",
        bulletPoints: [
          "Coordinated with development teams to identify CRM actions suitable for automation via autonomous AI agents.",
          "Configured security profiles and least-privilege permission models to govern AI agent access boundaries within the CRM.",
          "Monitored pilot user testing metrics and compiled recommendations to optimize agent actions and reduce human intervention rate."
        ],
        skills: ["Agentforce Integration", "Admissions CRM", "Security Boundaries", "AI Governance", "UAT Pilot Feedback"]
      }
    ]
  };

  let activeTemplate = "developer";

  // Get professional summary text based on active template
  function getSummaryForTemplate(template) {
    if (template === "admin") {
      return "Detail-oriented Salesforce Administrator with extensive experience configuring platform security sharing rules, custom layouts, and reports. Proficient in designing advanced low-code Salesforce Flow automations to streamline CRM workflows and ensure clean data integrity.";
    } else if (template === "agentforce") {
      return "Innovative Salesforce professional specializing in autonomous AI integrations, prompt engineering, and conversational design. Expert at configuring Agentforce agents to automate CRM record updates and customer support workflows using natural language prompts.";
    }
    return "Hands-on Salesforce Developer with experience designing custom relational database schemas, bulkified Apex triggers, integrations, and responsive Lightning Web Components (LWC). Skilled in implementing both declarative flow automation and programmatic solutions while adhering to platform governor limits.";
  }

  // Get certifications list based on active template
  function getCertificationsForTemplate(template) {
    if (template === "admin") {
      return "Salesforce Certified Administrator, Salesforce Certified Advanced Administrator, Salesforce Certified AI Associate";
    } else if (template === "agentforce") {
      return "Salesforce Certified AI Associate, Salesforce Certified Agentforce Specialist, Salesforce Certified Administrator";
    }
    return "Salesforce Certified Platform Developer I, Salesforce Certified Administrator, Salesforce Certified AI Associate";
  }

  // Get skills list based on active template
  function getSkillsForTemplate(template) {
    if (template === "admin") {
      return "Salesforce Flow, User Administration, Security (Profiles/Permission Sets/Roles), Reports & Dashboards, Validation Rules, Data Loader, Case Management";
    } else if (template === "agentforce") {
      return "Agentforce Service Agent, Topic Classifications, Prompt Templates, Invocable Apex Actions, Salesforce Flow, AI Governance, Conversational Guardrails";
    }
    return "Apex (Triggers, Batch, Integration), Lightning Web Components (LWC), JavaScript, Salesforce Flow, Data Loader, Named Credentials, Security Sharing Rules";
  }

  // Setup tabs logic
  function setupTabListeners() {
    const tabPointsBtn = el("tabPointsBtn");
    const tabTemplatesBtn = el("tabTemplatesBtn");
    const tabGuidanceBtn = el("tabGuidanceBtn");
    const pointsTabContent = el("pointsTabContent");
    const templatesTabContent = el("templatesTabContent");
    const guidanceTabContent = el("guidanceTabContent");

    if (!tabPointsBtn || !tabTemplatesBtn) return;

    const ALL_TABS = [tabPointsBtn, tabTemplatesBtn, tabGuidanceBtn].filter(Boolean);
    const ALL_CONTENTS = [pointsTabContent, templatesTabContent, guidanceTabContent].filter(Boolean);

    function deactivateAll() {
      ALL_TABS.forEach(btn => {
        btn.classList.remove("border-brand-500", "text-brand-600");
        btn.classList.add("border-transparent", "text-slate-500", "hover:text-slate-800");
      });
      ALL_CONTENTS.forEach(c => c?.classList.add("hidden"));
    }

    function activateTab(btn, content) {
      deactivateAll();
      btn.classList.remove("border-transparent", "text-slate-500", "hover:text-slate-800");
      btn.classList.add("border-brand-500", "text-brand-600");
      content?.classList.remove("hidden");
    }

    tabPointsBtn.addEventListener("click", () => activateTab(tabPointsBtn, pointsTabContent));

    tabTemplatesBtn.addEventListener("click", () => {
      activateTab(tabTemplatesBtn, templatesTabContent);
      updateTplHistoryDropdown();
      renderLiveResume();
    });

    if (tabGuidanceBtn) {
      tabGuidanceBtn.addEventListener("click", () => {
        activateTab(tabGuidanceBtn, guidanceTabContent);
        setupPlacementGuidanceTab();
      });
    }

    // Check query params on load
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get("tab") === "templates") {
      activateTab(tabTemplatesBtn, templatesTabContent);
      updateTplHistoryDropdown();
      renderLiveResume();
    } else if (urlParams.get("tab") === "guidance") {
      if (tabGuidanceBtn) {
        activateTab(tabGuidanceBtn, guidanceTabContent);
        setupPlacementGuidanceTab();
      }
    } else if (urlParams.get("tab") === "ats") {
      activateTab(tabTemplatesBtn, templatesTabContent);
      updateTplHistoryDropdown();
      renderLiveResume();
      setTimeout(() => {
        el("atsAnalyseBtn")?.scrollIntoView({ behavior: "smooth" });
      }, 500);
    }
  }

  // Populate history in templates tab dropdown
  function updateTplHistoryDropdown() {
    const dropdown = el("tplProjectHistory");
    if (!dropdown) return;

    const history = loadHistory();
    dropdown.innerHTML = '<option value="default_mock">Load Sample Mock Data</option>';

    history.forEach((item, idx) => {
      const dateStr = new Date(item.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric" });
      dropdown.innerHTML += `
        <option value="${idx}">Saved run: ${item.projectName} (${item.role}) - ${dateStr}</option>
      `;
    });
  }

  // Setup template select buttons, inputs, and copy buttons
  function setupTemplatesView() {
    const devBtn = el("selectTplDevBtn");
    const adminBtn = el("selectTplAdminBtn");
    const aiBtn = el("selectTplAiBtn");

    function updateTemplateButtons() {
      [devBtn, adminBtn, aiBtn].forEach(btn => {
        if (!btn) return;
        btn.classList.remove("border-brand-500");
        btn.classList.add("border-slate-200");
      });

      let activeBtn = devBtn;
      if (activeTemplate === "admin") activeBtn = adminBtn;
      else if (activeTemplate === "agentforce") activeBtn = aiBtn;

      if (activeBtn) {
        activeBtn.classList.remove("border-slate-200");
        activeBtn.classList.add("border-brand-500");
      }
    }

    if (devBtn) devBtn.addEventListener("click", () => {
      activeTemplate = "developer";
      updateTemplateButtons();
      const tplTitle = el("tplTitle");
      if (tplTitle && (tplTitle.value === "Salesforce Administrator" || tplTitle.value === "Salesforce Agentforce & AI Specialist")) {
        tplTitle.value = "Salesforce Developer";
      }
      renderLiveResume();
    });

    if (adminBtn) adminBtn.addEventListener("click", () => {
      activeTemplate = "admin";
      updateTemplateButtons();
      const tplTitle = el("tplTitle");
      if (tplTitle && (tplTitle.value === "Salesforce Developer" || tplTitle.value === "Salesforce Agentforce & AI Specialist")) {
        tplTitle.value = "Salesforce Administrator";
      }
      renderLiveResume();
    });

    if (aiBtn) aiBtn.addEventListener("click", () => {
      activeTemplate = "agentforce";
      updateTemplateButtons();
      const tplTitle = el("tplTitle");
      if (tplTitle && (tplTitle.value === "Salesforce Developer" || tplTitle.value === "Salesforce Administrator")) {
        tplTitle.value = "Salesforce Agentforce & AI Specialist";
      }
      renderLiveResume();
    });

    // Input changes
    const inputs = ["tplName", "tplTitle", "tplEmail", "tplPhone", "tplLocation", "tplLinkedIn"];
    inputs.forEach(id => {
      const input = el(id);
      if (input) {
        input.addEventListener("input", renderLiveResume);
      }
    });

    // Dropdown change
    const historyDropdown = el("tplProjectHistory");
    if (historyDropdown) {
      historyDropdown.addEventListener("change", renderLiveResume);
    }

    // Copy actions
    const copyTextBtn = el("copyTplTextBtn");
    if (copyTextBtn) {
      copyTextBtn.addEventListener("click", () => {
        const name = el("tplName")?.value || "";
        const title = el("tplTitle")?.value || "";
        const email = el("tplEmail")?.value || "";
        const phone = el("tplPhone")?.value || "";
        const locationVal = el("tplLocation")?.value || "";
        const linkedin = el("tplLinkedIn")?.value || "";
        const projects = getCompiledProjects();
        const text = compileResumeToText(name, title, email, phone, locationVal, linkedin, projects, activeTemplate);
        copyText(text, copyTextBtn);
      });
    }

    const copyHtmlBtn = el("copyTplHtmlBtn");
    if (copyHtmlBtn) {
      copyHtmlBtn.addEventListener("click", () => {
        isHtmlView = !isHtmlView;
        
        if (isHtmlView) {
          copyHtmlBtn.innerHTML = `
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
            <span>Preview Mode</span>
          `;
          copyHtmlBtn.classList.remove("text-cyan-600", "hover:text-cyan-700");
          copyHtmlBtn.classList.add("text-brand-600", "hover:text-brand-700");
          
          // Copy code to clipboard automatically when entering HTML view
          const htmlContent = getHtmlRepresentation();
          navigator.clipboard.writeText(htmlContent.trim());
          
          // Briefly flash green icon
          const origContent = copyHtmlBtn.innerHTML;
          copyHtmlBtn.innerHTML = `
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="3" class="text-emerald-600"><polyline points="20 6 9 17 4 12"></polyline></svg>
            <span class="text-emerald-600">Copied HTML!</span>
          `;
          setTimeout(() => {
            copyHtmlBtn.innerHTML = origContent;
          }, 1200);
        } else {
          copyHtmlBtn.innerHTML = `
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
            <span>Copy HTML</span>
          `;
          copyHtmlBtn.classList.remove("text-brand-600", "hover:text-brand-700");
          copyHtmlBtn.classList.add("text-cyan-600", "hover:text-cyan-700");
        }
        
        renderLiveResume();
      });
    }

    const downloadPdfBtn = el("downloadPdfBtn");
    if (downloadPdfBtn) {
      downloadPdfBtn.addEventListener("click", downloadPDF);
    }

    const downloadWordBtn = el("downloadWordBtn");
    if (downloadWordBtn) {
      downloadWordBtn.addEventListener("click", downloadWord);
    }
  }

  // Get list of projects based on active template and selected history project
  function getCompiledProjects() {
    let projects = JSON.parse(JSON.stringify(DEFAULT_MOCK_PROJECTS[activeTemplate]));
    const historyVal = el("tplProjectHistory")?.value;
    
    if (historyVal && historyVal !== "default_mock") {
      const historyIndex = parseInt(historyVal, 10);
      const history = loadHistory();
      const historyItem = history[historyIndex];

      if (historyItem) {
        let matched = false;
        projects.forEach(p => {
          const cleanHistoryName = historyItem.projectName.toLowerCase();
          const cleanProjTitle = p.title.toLowerCase();
          if (cleanProjTitle.includes(cleanHistoryName) || cleanHistoryName.includes(cleanProjTitle.split(" (")[0].toLowerCase())) {
            p.role = historyItem.role;
            p.summary = historyItem.summary;
            p.bulletPoints = historyItem.bulletPoints;
            p.skills = historyItem.skills;
            matched = true;
          }
        });

        if (!matched) {
          projects.unshift({
            title: historyItem.projectName,
            role: historyItem.role,
            summary: historyItem.summary,
            bulletPoints: historyItem.bulletPoints,
            skills: historyItem.skills
          });
        }
      }
    }
    return projects;
  }

  // Compile text representation of resume
  function compileResumeToText(name, title, email, phone, locationVal, linkedin, projects, activeTemplate) {
    const summary = getSummaryForTemplate(activeTemplate);
    const certs = getCertificationsForTemplate(activeTemplate);
    const skills = getSkillsForTemplate(activeTemplate);

    let text = `${name.toUpperCase()}\n${title.toUpperCase()}\n`;
    text += `${email} | ${phone} | ${locationVal} | ${linkedin}\n\n`;
    
    text += `PROFESSIONAL SUMMARY\n`;
    text += `${summary}\n\n`;
    
    text += `CERTIFICATIONS\n`;
    text += `${certs}\n\n`;
    
    text += `TECHNICAL SKILLS\n`;
    text += `Skills: ${skills}\n\n`;
    
    text += `PROJECTS & EXPERIENCE\n`;
    projects.forEach(p => {
      text += `* ${p.title} (${p.role})\n`;
      text += `  ${p.summary}\n`;
      p.bulletPoints.forEach(bp => {
        text += `  - ${bp}\n`;
      });
      text += `\n`;
    });

    return text.trim();
  }

  // Compile HTML representation of resume
  function getHtmlRepresentation() {
    const name = el("tplName")?.value || "Vijay Kumar";
    const title = el("tplTitle")?.value || "Salesforce Developer";
    const email = el("tplEmail")?.value || "vijay@example.com";
    const phone = el("tplPhone")?.value || "+1 (555) 019-2834";
    const locationVal = el("tplLocation")?.value || "San Francisco, CA";
    const linkedin = el("tplLinkedIn")?.value || "linkedin.com/in/vijay-salesforce";

    const projects = getCompiledProjects();

    return `
      <div style="text-align: center; border-bottom: 1.5px solid #475569; padding-bottom: 8px; margin-bottom: 12px; font-family: serif;">
        <h1 style="font-size: 20px; font-weight: 700; color: #0f172a; margin: 0; line-height: 1.2;">${name}</h1>
        <div style="font-size: 11px; font-weight: 700; color: #475569; text-transform: uppercase; letter-spacing: 0.05em; margin-top: 2px;">${title}</div>
        <div style="font-size: 10px; color: #64748b; margin-top: 4px; display: flex; justify-content: center; gap: 8px; flex-wrap: wrap;">
          <span>${email}</span> &bull; 
          <span>${phone}</span> &bull; 
          <span>${locationVal}</span> &bull; 
          <span><a href="https://${linkedin}" target="_blank" style="color: #0f172a; text-decoration: underline;">${linkedin}</a></span>
        </div>
      </div>

      <div style="display: flex; flex-direction: column; gap: 12px; font-family: serif;">
        <!-- Professional Summary -->
        <div>
          <h2 style="font-size: 11px; font-weight: 700; color: #0f172a; border-bottom: 1px solid #94a3b8; padding-bottom: 2px; margin-bottom: 6px; text-transform: uppercase; letter-spacing: 0.05em;">Professional Summary</h2>
          <p style="font-size: 10px; color: #334155; margin: 0; line-height: 1.5;">${getSummaryForTemplate(activeTemplate)}</p>
        </div>

        <!-- Certifications -->
        <div>
          <h2 style="font-size: 11px; font-weight: 700; color: #0f172a; border-bottom: 1px solid #94a3b8; padding-bottom: 2px; margin-bottom: 6px; text-transform: uppercase; letter-spacing: 0.05em;">Certifications</h2>
          <p style="font-size: 10px; color: #334155; margin: 0; line-height: 1.5;">${getCertificationsForTemplate(activeTemplate)}</p>
        </div>

        <!-- Technical Skills -->
        <div>
          <h2 style="font-size: 11px; font-weight: 700; color: #0f172a; border-bottom: 1px solid #94a3b8; padding-bottom: 2px; margin-bottom: 6px; text-transform: uppercase; letter-spacing: 0.05em;">Technical Skills</h2>
          <p style="font-size: 10px; color: #334155; margin: 0; line-height: 1.5;"><strong>Skills:</strong> ${getSkillsForTemplate(activeTemplate)}</p>
        </div>

        <!-- Projects / Experience -->
        <div>
          <h2 style="font-size: 11px; font-weight: 700; color: #0f172a; border-bottom: 1px solid #94a3b8; padding-bottom: 2px; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.05em;">Projects &amp; Experience</h2>
          <div style="display: flex; flex-direction: column; gap: 10px;">
            ${projects.map(p => `
              <div>
                <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 2px;">
                  <strong style="font-size: 10.5px; color: #0f172a;">${p.title}</strong>
                  <span style="font-size: 9.5px; color: #64748b; font-style: italic;">${p.role}</span>
                </div>
                <p style="font-size: 9.5px; color: #475569; margin: 0 0 4px 0; line-height: 1.4; font-style: italic;">${p.summary}</p>
                <ul style="list-style-type: disc; padding-left: 14px; margin: 0; display: flex; flex-direction: column; gap: 2px;">
                  ${p.bulletPoints.map(bp => `<li style="font-size: 9.5px; color: #334155; line-height: 1.4;">${bp}</li>`).join("")}
                </ul>
              </div>
            `).join("")}
          </div>
        </div>
      </div>
    `;
  }

  // HTML escaping helper
  function escapeHtml(html) {
    return html
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  // Render live preview
  function renderLiveResume() {
    const preview = el("liveResumePreview");
    if (!preview) return;

    const compiledHtml = getHtmlRepresentation();

    if (isHtmlView) {
      preview.innerHTML = `
        <div style="font-family: monospace; font-size: 10px; color: #334155; white-space: pre-wrap; word-break: break-all; line-height: 1.4; background-color: #f8fafc; padding: 12px; border-radius: 8px; border: 1px solid #e2e8f0;">
          ${escapeHtml(compiledHtml.trim())}
        </div>
      `;
    } else {
      preview.innerHTML = compiledHtml;
    }
  }

  // Download Resume as PDF using html2pdf.js
  function downloadPDF() {
    const element = el("liveResumePreview");
    if (!element) return;

    // Temporarily switch off HTML view so PDF prints the actual resume sheet, not raw code
    const wasHtmlView = isHtmlView;
    if (wasHtmlView) {
      isHtmlView = false;
      renderLiveResume();
    }

    const name = el("tplName")?.value || "Vijay Kumar";
    const title = el("tplTitle")?.value || "Resume";
    const opt = {
      margin:       [0.3, 0.4, 0.3, 0.4],
      filename:     `${name.replace(/\s+/g, '_')}_${title.replace(/\s+/g, '_')}_Resume.pdf`,
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2.5, useCORS: true, letterRendering: true },
      jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    
    html2pdf().set(opt).from(element).save().then(() => {
      if (wasHtmlView) {
        isHtmlView = true;
        renderLiveResume();
      }
    });

    window.TomCodexLearning?.record("task", 5, "Downloaded Resume as PDF");
  }

  // Download Resume as Word Document (.doc)
  function downloadWord() {
    const name = el("tplName")?.value || "Vijay Kumar";
    const title = el("tplTitle")?.value || "Resume";
    const filename = `${name.replace(/\s+/g, '_')}_${title.replace(/\s+/g, '_')}_Resume.doc`;

    const header = `<html xmlns:o='urn:schemas-microsoft-com:office:office' 
          xmlns:w='urn:schemas-microsoft-com:office:word' 
          xmlns='http://www.w3.org/TR/REC-html40'>
          <head>
            <title>Resume - ${name}</title>
            <style>
              @page {
                size: 8.5in 11.0in;
                margin: 0.5in 0.5in 0.5in 0.5in;
              }
              body {
                font-family: 'Times New Roman', Times, serif;
                font-size: 10.5pt;
                color: #333333;
                line-height: 1.4;
              }
              a {
                color: #0f172a;
                text-decoration: underline;
              }
            </style>
          </head>
          <body>`;
    const footer = "</body></html>";
    
    const resumeHtml = getHtmlRepresentation();
    const sourceHTML = header + resumeHtml + footer;

    const blob = new Blob(['\ufeff' + sourceHTML], {
      type: 'application/msword'
    });

    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    window.TomCodexLearning?.record("task", 5, "Downloaded Resume as Word File");
  }

  // On DOM Load
  document.addEventListener("DOMContentLoaded", init);

  // ── ATS Checker ────────────────────────────────────────────────────────────

  const ATS_ENDPOINT = "/api/ai/ats-check";

  // Salesforce-focused keyword list for offline fallback
  const SF_KEYWORDS = [
    "apex", "lwc", "lightning web components", "flow", "salesforce flow",
    "soql", "sosl", "triggers", "batch apex", "scheduled apex",
    "named credentials", "rest api", "integration", "oauth",
    "agentforce", "einstein", "slds", "lightning design system",
    "data loader", "reports", "dashboards", "profiles", "permission sets",
    "role hierarchy", "validation rules", "process builder",
    "experience cloud", "community", "visualforce", "aura"
  ];

  const IMPACT_VERBS = [
    "designed", "implemented", "developed", "built", "created", "engineered",
    "configured", "optimised", "automated", "reduced", "increased", "improved",
    "achieved", "deployed", "established", "streamlined", "integrated", "migrated",
    "coordinated", "maintained", "monitored", "authored", "refactored"
  ];

  const REQUIRED_SECTIONS = ["summary", "skills", "experience", "project", "certification", "education"];

  function setupATSTab() {
    const analyseBtn = el("atsAnalyseBtn");
    if (analyseBtn) {
      analyseBtn.addEventListener("click", handleATSAnalyse);
    }
  }

  async function handleATSAnalyse() {
    const name = el("tplName")?.value || "";
    const title = el("tplTitle")?.value || "";
    const email = el("tplEmail")?.value || "";
    const phone = el("tplPhone")?.value || "";
    const locationVal = el("tplLocation")?.value || "";
    const linkedin = el("tplLinkedIn")?.value || "";
    const projects = getCompiledProjects();
    const resumeText = compileResumeToText(name, title, email, phone, locationVal, linkedin, projects, activeTemplate);

    const jobDescription = (el("atsJobInput")?.value || "").trim();

    if (resumeText.length < 50) {
      alert("Please ensure your resume preview is populated before running the ATS analysis.");
      return;
    }

    const btn = el("atsAnalyseBtn");
    if (btn) { btn.disabled = true; btn.textContent = "Analysing…"; }

    el("atsEmptyState")?.classList.add("hidden");
    el("atsResultState")?.classList.add("hidden");
    el("atsLoadingState")?.classList.remove("hidden");

    let result = null;

    try {
      const response = await fetch(ATS_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ resumeText, jobDescription })
      });
      const data = await response.json();
      if (!response.ok || typeof data.score !== "number") throw new Error(data.error || "ATS check failed");
      result = data;
    } catch {
      result = localATSCheck(resumeText, jobDescription);
    }

    el("atsLoadingState")?.classList.add("hidden");
    renderATSResults(result);

    if (btn) {
      btn.disabled = false;
      btn.innerHTML = `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg> Analyse Resume Compatibility`;
    }

    window.TomCodexLearning?.record("task", 5, "Used ATS Resume Checker");
  }

  // Offline fallback — client-side rule-based ATS scoring
  function localATSCheck(text, jobDescription) {
    const lower = text.toLowerCase();

    // Keywords
    const foundKw = SF_KEYWORDS.filter(kw => lower.includes(kw));
    const missingKw = SF_KEYWORDS.filter(kw => !lower.includes(kw)).slice(0, 8);
    const kwScore = Math.min(100, Math.round((foundKw.length / Math.max(SF_KEYWORDS.length * 0.5, 1)) * 100));

    // Formatting — check for bullet points, headers
    const hasBullets = /[-•*]\s+\w/.test(text);
    const hasHeaders = /\n[A-Z][A-Z\s]{3,}\n/.test(text);
    const hasSpecialChars = /[|}{<>@#$]{3,}/.test(text);
    let fmtScore = 70;
    if (hasBullets) fmtScore += 15;
    if (hasHeaders) fmtScore += 10;
    if (hasSpecialChars) fmtScore -= 15;
    fmtScore = Math.min(100, Math.max(0, fmtScore));
    const fmtIssues = [];
    if (!hasBullets) fmtIssues.push("No bullet points detected — use dashes or bullets for ATS readability.");
    if (!hasHeaders) fmtIssues.push("No clear section headers detected — add uppercase section titles.");
    if (hasSpecialChars) fmtIssues.push("Special characters detected — remove tables or symbols ATS cannot parse.");

    // Impact — action verbs + metrics
    const verbsFound = IMPACT_VERBS.filter(v => lower.includes(v));
    const hasMetrics = /\d+\s*(%|percent|users|records|hours|days|reduction|improvement)/i.test(text);
    let impScore = Math.min(100, Math.round((verbsFound.length / 6) * 70) + (hasMetrics ? 30 : 0));
    const impSuggestions = [];
    if (verbsFound.length < 4) impSuggestions.push("Add more action verbs (Designed, Implemented, Automated, etc.).");
    if (!hasMetrics) impSuggestions.push("Quantify impact with metrics (e.g. 'reduced processing time by 40%').");

    // Completeness
    const missingSections = REQUIRED_SECTIONS.filter(s => !lower.includes(s));
    const cmpScore = Math.min(100, Math.round(((REQUIRED_SECTIONS.length - missingSections.length) / REQUIRED_SECTIONS.length) * 100));

    const score = Math.round((kwScore + fmtScore + impScore + cmpScore) / 4);
    const grade = score >= 80 ? "Good" : score >= 65 ? "Fair" : "Needs Work";

    return {
      score,
      grade,
      sections: {
        keywords: { score: kwScore, found: foundKw.slice(0, 12), missing: missingKw },
        formatting: { score: fmtScore, issues: fmtIssues },
        impact: { score: impScore, suggestions: impSuggestions },
        completeness: { score: cmpScore, missingSections: missingSections.map(s => s.charAt(0).toUpperCase() + s.slice(1)) }
      },
      topRecommendations: [
        ...missingKw.slice(0, 2).map(kw => `Add missing keyword: "${kw.charAt(0).toUpperCase() + kw.slice(1)}"`),
        ...fmtIssues.slice(0, 1),
        ...impSuggestions.slice(0, 1),
        ...missingSections.slice(0, 1).map(s => `Add a dedicated "${s.charAt(0).toUpperCase() + s.slice(1)}" section.`)
      ].filter(Boolean).slice(0, 5),
      strengths: [
        foundKw.length > 5 ? `Strong Salesforce keyword coverage (${foundKw.length} matched)` : null,
        hasBullets ? "Good use of bullet points for readability" : null,
        verbsFound.length >= 4 ? `Action verbs well-used (${verbsFound.length} found)` : null,
        hasMetrics ? "Quantified achievements detected" : null
      ].filter(Boolean).slice(0, 4),
      source: "local-rules"
    };
  }

  function getBarClass(score) {
    if (score >= 80) return "bar-green";
    if (score >= 65) return "bar-blue";
    if (score >= 50) return "bar-amber";
    return "bar-red";
  }

  function setBar(barId, scoreId, score) {
    const bar = el(barId);
    const scoreEl = el(scoreId);
    if (bar) {
      bar.className = `ats-bar-fill ${getBarClass(score)}`;
      requestAnimationFrame(() => { bar.style.width = `${score}%`; });
    }
    if (scoreEl) scoreEl.textContent = `${score}/100`;
  }

  function renderATSResults(data) {
    el("atsResultState")?.classList.remove("hidden");

    // Score ring animation
    const score = data.score || 0;
    const ring = el("atsRingFill");
    const scoreNum = el("atsScoreNum");
    const gradeBadge = el("atsGradeBadge");
    const engineLabel = el("atsEngineLabel");

    if (ring) {
      const circumference = 2 * Math.PI * 55; // r=55
      const offset = circumference - (score / 100) * circumference;
      ring.style.strokeDasharray = circumference;

      // Grade-based ring colour
      const gradeClass = score >= 80 ? "score-excellent" : score >= 65 ? "score-good" : score >= 50 ? "score-fair" : "score-poor";
      ring.className = `ring-fill ${gradeClass}`;
      requestAnimationFrame(() => { ring.style.strokeDashoffset = offset; });
    }

    if (scoreNum) scoreNum.textContent = score;

    if (gradeBadge) {
      const gradeMap = { "Excellent": "excellent", "Good": "good", "Fair": "fair", "Needs Work": "needs-work" };
      const g = data.grade || "Fair";
      gradeBadge.textContent = g;
      gradeBadge.className = `ats-grade-badge ${gradeMap[g] || "fair"}`;
    }

    if (engineLabel) {
      engineLabel.textContent = data.source === "centralized-ai-engine" ? "AI-Powered Analysis" : "Offline Rule-Based Analysis";
    }

    // Category bars
    const s = data.sections || {};
    setBar("atsKwBar", "atsKwScore", s.keywords?.score ?? 0);
    setBar("atsFmtBar", "atsFmtScore", s.formatting?.score ?? 0);
    setBar("atsImpBar", "atsImpScore", s.impact?.score ?? 0);
    setBar("atsCmpBar", "atsCmpScore", s.completeness?.score ?? 0);

    // Keyword chips
    const kwChips = el("atsKwChips");
    if (kwChips) {
      const foundChips = (s.keywords?.found || []).map(k => `<span class="ats-chip found">✓ ${k}</span>`).join("");
      const missingChips = (s.keywords?.missing || []).map(k => `<span class="ats-chip missing">✗ ${k}</span>`).join("");
      kwChips.innerHTML = foundChips + missingChips;
    }

    // Formatting chips
    const fmtChips = el("atsFmtChips");
    if (fmtChips) {
      fmtChips.innerHTML = (s.formatting?.issues || []).map(i => `<span class="ats-chip issue">⚠ ${i}</span>`).join("") || "<span class=\"ats-chip found\">✓ No major formatting issues</span>";
    }

    // Impact chips
    const impChips = el("atsImpChips");
    if (impChips) {
      impChips.innerHTML = (s.impact?.suggestions || []).map(sg => `<span class="ats-chip tip">💡 ${sg}</span>`).join("");
    }

    // Completeness chips
    const cmpChips = el("atsCmpChips");
    if (cmpChips) {
      const missingSec = s.completeness?.missingSections || [];
      cmpChips.innerHTML = missingSec.length
        ? missingSec.map(sec => `<span class="ats-chip missing">✗ Missing: ${sec}</span>`).join("")
        : "<span class=\"ats-chip found\">✓ All key sections present</span>";
    }

    // Recommendations
    const recList = el("atsRecList");
    if (recList) {
      recList.innerHTML = (data.topRecommendations || []).map(r => `
        <div class="ats-rec-card">
          <div class="ats-rec-icon">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          </div>
          <span class="ats-rec-text">${r}</span>
        </div>
      `).join("");
    }

    // Strengths
    const strengthList = el("atsStrengthList");
    if (strengthList) {
      strengthList.innerHTML = (data.strengths || []).map(s => `
        <div class="ats-strength-card">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#16a34a" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="shrink-0 mt-0.5"><polyline points="20 6 9 17 4 12"/></svg>
          <span class="ats-strength-text">${s}</span>
        </div>
      `).join("");
    }

    el("atsResultState")?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  // ── Placement Guidance Tab ──────────────────────────────────────────────────

  const SALESFORCE_COMPANIES = [
    {
      name: "Salesforce India",
      tier: "office",
      tierLabel: "Corporate Office",
      cities: ["hyderabad", "bangalore"],
      careerPage: "https://www.salesforce.com/in/company/careers/",
      description: "Official India headquarters managing product engineering, support, and professional services."
    },
    {
      name: "Cognizant",
      tier: "global",
      tierLabel: "Global Strategic Partner",
      cities: ["chennai", "bangalore", "hyderabad"],
      careerPage: "https://careers.cognizant.com/global/en",
      description: "Leading Salesforce service provider with a massive global delivery network and specialized CRM consulting."
    },
    {
      name: "Wipro",
      tier: "global",
      tierLabel: "Global Strategic Partner",
      cities: ["chennai", "bangalore", "hyderabad", "kochi"],
      careerPage: "https://careers.wipro.com/global-rinse",
      description: "End-to-end Salesforce digital transformation services spanning multi-cloud consulting and custom development."
    },
    {
      name: "TCS (Tata Consultancy Services)",
      tier: "global",
      tierLabel: "Global Strategic Partner",
      cities: ["chennai", "bangalore", "hyderabad", "kochi"],
      careerPage: "https://www.tcs.com/careers",
      description: "Largest Indian IT consultant with extensive enterprise Salesforce migrations and industry-specific cloud solutions."
    },
    {
      name: "Accenture",
      tier: "global",
      tierLabel: "Global Strategic Partner",
      cities: ["bangalore", "chennai", "hyderabad"],
      careerPage: "https://www.accenture.com/in-en/careers",
      description: "Recognized leader in global Salesforce consulting, programmatic integrations, and complex business deployments."
    },
    {
      name: "Deloitte",
      tier: "global",
      tierLabel: "Global Strategic Partner",
      cities: ["bangalore", "hyderabad", "chennai"],
      careerPage: "https://www2.deloitte.com/in/en/careers/careers.html",
      description: "Deloitte Digital provides business advisory, UI design, and cloud strategy integration on Salesforce platforms."
    },
    {
      name: "PwC India",
      tier: "global",
      tierLabel: "Global Strategic Partner",
      cities: ["bangalore", "hyderabad", "chennai"],
      careerPage: "https://www.pwc.in/careers.html",
      description: "Focuses on strategic CRM deployments, analytics insights, and regulatory cloud integrations."
    },
    {
      name: "IBM India",
      tier: "global",
      tierLabel: "Global Strategic Partner",
      cities: ["bangalore", "hyderabad", "chennai"],
      careerPage: "https://www.ibm.com/in-en/employment",
      description: "Combines Salesforce solutions with IBM watsonx AI systems for autonomous customer service solutions."
    },
    {
      name: "HCL Technologies",
      tier: "global",
      tierLabel: "Global Strategic Partner",
      cities: ["chennai", "bangalore", "hyderabad"],
      careerPage: "https://www.hcltech.com/careers",
      description: "Broad Salesforce engineering division focused on programmatic customizations, APIs, and cloud services."
    },
    {
      name: "Capgemini",
      tier: "global",
      tierLabel: "Global Strategic Partner",
      cities: ["bangalore", "chennai", "hyderabad"],
      careerPage: "https://www.capgemini.com/in-en/careers/",
      description: "Global consulting and digital delivery specializing in Lightning components (LWC) and multi-cloud systems."
    },
    {
      name: "Tech Mahindra",
      tier: "crest",
      tierLabel: "Crest Partner",
      cities: ["hyderabad", "chennai", "bangalore"],
      careerPage: "https://www.techmahindra.com/en-in/careers/",
      description: "Crest-tier partner delivering specialized telecom and enterprise CRM solution engineering."
    },
    {
      name: "Birlasoft",
      tier: "crest",
      tierLabel: "Crest Partner",
      cities: ["chennai", "bangalore", "hyderabad"],
      careerPage: "https://www.birlasoft.com/careers",
      description: "Delivers mid-market and enterprise Salesforce optimizations with rapid time-to-value."
    },
    {
      name: "LTIMindtree",
      tier: "crest",
      tierLabel: "Crest Partner",
      cities: ["bangalore", "chennai", "hyderabad"],
      careerPage: "https://www.ltimindtree.com/careers/",
      description: "Aggressive CRM division providing customized programmatic migrations and Lightning transformations."
    },
    {
      name: "Virtusa",
      tier: "crest",
      tierLabel: "Crest Partner",
      cities: ["hyderabad", "chennai", "bangalore"],
      careerPage: "https://www.virtusa.com/careers",
      description: "Engineering-centric partner specialized in Salesforce financial services cloud and programmatic triggers."
    },
    {
      name: "EPAM Systems",
      tier: "crest",
      tierLabel: "Crest Partner",
      cities: ["hyderabad", "bangalore"],
      careerPage: "https://www.epam.com/careers",
      description: "Highly programmatic team of engineers specialized in custom Apex developments and complex integrations."
    },
    {
      name: "Genpact",
      tier: "crest",
      tierLabel: "Crest Partner",
      cities: ["hyderabad", "bangalore"],
      careerPage: "https://www.genpact.com/careers",
      description: "Integrates Salesforce CRM with operations databases to streamline customer engagement cycles."
    },
    {
      name: "Persistent Systems",
      tier: "crest",
      tierLabel: "Crest Partner",
      cities: ["hyderabad", "bangalore"],
      careerPage: "https://www.persistent.com/careers/",
      description: "Product engineering partner offering Salesforce health cloud implementations and programmatic APIs."
    },
    {
      name: "UST Global",
      tier: "crest",
      tierLabel: "Crest Partner",
      cities: ["kochi", "bangalore", "chennai", "hyderabad"],
      careerPage: "https://www.ust.com/en/careers",
      description: "Crest-tier partner with a massive delivery center in Kochi InfoPark. Specialized in LWC and Flows."
    },
    {
      name: "IBS Software",
      tier: "ridge",
      tierLabel: "Ridge Partner",
      cities: ["kochi", "bangalore"],
      careerPage: "https://www.ibssoftware.com/careers",
      description: "Ridge-tier partner headquartered in Kochi focusing on travel/hospitality logistics cloud integrations."
    },
    {
      name: "Experion Technologies",
      tier: "base",
      tierLabel: "Base Partner",
      cities: ["kochi", "bangalore"],
      careerPage: "https://www.experionglobal.com/careers/",
      description: "Boutique Salesforce consultancy delivering custom Lightning configurations and data loader services."
    },
    {
      name: "KeyValue Software Systems",
      tier: "base",
      tierLabel: "Base Partner",
      cities: ["kochi"],
      careerPage: "https://keyvalue.systems/careers",
      description: "High-growth software engineering house in Kochi providing custom web applications integrated with Salesforce."
    }
  ];

  let isGuidanceInitialized = false;

  function setupPlacementGuidanceTab() {
    if (isGuidanceInitialized) return;
    isGuidanceInitialized = true;

    const citySelect = el("guidanceCitySelect");
    if (citySelect) {
      citySelect.addEventListener("change", renderCompanyGrid);
    }

    const outreachName = el("outreachName");
    const outreachCompany = el("outreachCompany");
    const outreachType = el("outreachType");
    const copyOutreachBtn = el("copyOutreachBtn");

    if (outreachName) outreachName.addEventListener("input", updateOutreachMessage);
    if (outreachCompany) outreachCompany.addEventListener("input", updateOutreachMessage);
    if (outreachType) outreachType.addEventListener("change", updateOutreachMessage);

    if (copyOutreachBtn) {
      copyOutreachBtn.addEventListener("click", () => {
        const txt = el("outreachMessageText")?.value || "";
        if (txt) {
          navigator.clipboard.writeText(txt).then(() => {
            const origText = copyOutreachBtn.innerHTML;
            copyOutreachBtn.innerHTML = `
              <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="3" class="text-emerald-400"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span class="text-[10px] font-bold text-emerald-400">Copied!</span>
            `;
            setTimeout(() => {
              copyOutreachBtn.innerHTML = origText;
            }, 1500);
          });
        }
      });
    }

    renderCompanyGrid();
    updateOutreachMessage();
  }

  function renderCompanyGrid() {
    const citySelect = el("guidanceCitySelect");
    const companyGrid = el("companyDirectoryGrid");
    if (!companyGrid) return;

    const selectedCity = citySelect ? citySelect.value : "all";

    const filtered = SALESFORCE_COMPANIES.filter(c => {
      if (selectedCity === "all") return true;
      return c.cities.includes(selectedCity);
    });

    companyGrid.innerHTML = filtered.map(c => {
      const cityLabels = c.cities.map(ct => ct.charAt(0).toUpperCase() + ct.slice(1)).join(", ");
      
      const searchCity = selectedCity === "all" ? c.cities[0] : selectedCity;
      const linkedinSearchUrl = `https://www.linkedin.com/search/results/people/?keywords=Salesforce%20${encodeURIComponent(c.name)}%20${encodeURIComponent(searchCity)}`;

      return `
        <article class="company-card">
          <div>
            <div class="company-header">
              <strong class="text-sm font-bold text-slate-800">${c.name}</strong>
              <span class="partner-badge ${c.tier}">${c.tierLabel}</span>
            </div>
            <p class="text-[11px] text-slate-500 leading-relaxed mb-4">${c.description}</p>
          </div>
          
          <div class="flex flex-col gap-2 pt-3 border-t border-slate-100 mt-2">
            <div class="flex items-center justify-between text-[9px] font-bold text-slate-400">
              <span class="city-tag">
                <svg viewBox="0 0 24 24" width="8" height="8" fill="none" stroke="currentColor" stroke-width="3" class="shrink-0"><path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                ${cityLabels}
              </span>
            </div>
            
            <div class="grid grid-cols-2 gap-2 mt-2">
              <a href="${c.careerPage}" target="_blank" class="text-center bg-slate-50 hover:bg-slate-100 border border-slate-200/60 rounded-lg py-2 text-[10px] font-bold text-slate-700 transition flex items-center justify-center gap-1">
                Careers Site
                <svg viewBox="0 0 24 24" width="10" height="10" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              </a>
              <a href="${linkedinSearchUrl}" target="_blank" class="text-center bg-blue-50 hover:bg-blue-100 border border-blue-100 rounded-lg py-2 text-[10px] font-bold text-blue-700 transition flex items-center justify-center gap-1">
                LinkedIn Contacts
                <svg viewBox="0 0 24 24" width="10" height="10" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>
        </article>
      `;
    }).join("");
  }

  function updateOutreachMessage() {
    const contactName = el("outreachName")?.value.trim() || "[Name]";
    const company = el("outreachCompany")?.value.trim() || "[Company]";
    const outreachType = el("outreachType")?.value || "referral";
    const messageTextarea = el("outreachMessageText");

    if (!messageTextarea) return;

    // Pull student details dynamically from Templates tab inputs
    const name = el("tplName")?.value || "Vijay Kumar";
    const linkedin = el("tplLinkedIn")?.value || "linkedin.com/in/vijay-salesforce";
    const email = el("tplEmail")?.value || "vijay@example.com";
    const phone = el("tplPhone")?.value || "+1 (555) 019-2834";

    const roleSelect = el("roleSelect");
    const roleName = roleSelect ? roleSelect.options[roleSelect.selectedIndex].text : "Salesforce Developer";

    let msg = "";

    if (outreachType === "referral") {
      msg = `Hi ${contactName},

I hope you are doing well! 

I noticed you work at ${company} as a Salesforce professional. I'm a Salesforce developer specializing in programmatic Apex, LWC development, and declarative Flows. I have been building a Student Success CRM portfolio project and was hoping to connect.

If you have a moment, I would love to learn more about the Salesforce engineering culture at ${company} and see if you would be open to referring me for any open ${roleName} roles.

Thanks so much,
${name}
https://${linkedin}`;
    } else {
      msg = `Hi ${contactName},

I hope you're having a great week.

I saw that ${company} is growing its Salesforce team. I am an active Salesforce professional with practical experience building complex automation schemes (Apex handlers, Lightning Web Components, and Agentforce classifiers).

I've attached my portfolio details and was wondering if you are currently hiring for junior/mid-level ${roleName} positions? I would love to share my resume if you have an active opening.

Best regards,
${name}
${email} | ${phone}`;
    }

    messageTextarea.value = msg;
  }

})();
