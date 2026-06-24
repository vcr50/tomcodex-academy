const agentforceModules = [
  {
    title: "Agentforce Foundations & Setup",
    description: "Understand agentic AI, the Agentforce architecture, Agent Studio, and provision your first Salesforce AI Agent.",
    points: [
      "Explain the difference between generative copilots, chatbots, and autonomous agents.",
      "Explore the Agent Studio interface, including Agent Builder and Prompt Builder.",
      "Provision and enable a standard Agent in a Salesforce Developer Org."
    ],
    resources: [
      ["Agentforce Basics", "https://trailhead.salesforce.com/content/learn/modules/agentforce-basics"],
      ["Agent Studio Help", "https://help.salesforce.com/s/articleView?id=sf.copilot_studio_overview.htm&type=5"]
    ],
    practice: [
      "Enable Einstein and Agentforce in your org Setup menu.",
      "Navigate to the Agent Builder and open the default Copilot Agent.",
      "Activate the Agent and run a basic conversation query in the test console."
    ],
    questions: [
      "What is an autonomous AI agent in the context of Salesforce?",
      "How does Agent Studio separate instructions, topics, and actions?",
      "What permission sets are required to configure Agentforce agents?"
    ]
  },
  {
    title: "Topics, Instructions & Routing",
    description: "Design conversational topics, write grounding instructions, and understand how the Agent routes user intents.",
    points: [
      "Create custom Topics that group related business scopes together.",
      "Write clear, bounded Instructions that guide the agent on what to do.",
      "Understand the orchestrator routing engine and intent classification."
    ],
    resources: [
      ["Agentforce Topics", "https://help.salesforce.com/s/articleView?id=sf.copilot_topics_about.htm&type=5"]
    ],
    practice: [
      "Create a custom 'Student Support' Topic inside your Agent.",
      "Write instructions directing the agent to only answer questions about courses.",
      "Test intent classification in the Agent Studio conversation debugger."
    ],
    questions: [
      "What is a Topic in Agentforce, and how is it triggered?",
      "How do instructions prevent the agent from discussing off-topic content?",
      "How does the Agent Studio debugger visualize topic classification?"
    ]
  },
  {
    title: "Agent Actions (Flow & Apex Integration)",
    description: "Equip your agent with capabilities by linking custom Flows and Apex invocable actions to Topics for backend record updates.",
    points: [
      "Expose standard and custom Flows as Agent Actions to execute business logic.",
      "Write @InvocableMethod Apex classes that allow the agent to run complex queries.",
      "Define input and output parameters that the agent automatically maps."
    ],
    resources: [
      ["Agent Actions Guide", "https://help.salesforce.com/s/articleView?id=sf.copilot_actions_about.htm&type=5"]
    ],
    practice: [
      "Expose a custom screen-flow as an Action to register new students.",
      "Write an invocable Apex class that retrieves student enrollment metrics.",
      "Attach both Actions to the 'Student Support' Topic and run verification tests."
    ],
    questions: [
      "How does the Agent map user chat parameters to Flow input variables?",
      "What annotation makes an Apex method accessible to Agentforce?",
      "How are DML updates executed securely when run via an Agent action?"
    ]
  },
  {
    title: "Prompt Templates & Prompt Builder",
    description: "Design prompt templates, ground prompts with Salesforce records, and merge merge-fields dynamically for Einstein LLM calls.",
    points: [
      "Understand the role of the Prompt Builder in grounding generative models.",
      "Create custom Prompt Templates and define target sObject contexts.",
      "Ground prompts dynamically using merge fields and record relationships."
    ],
    resources: [
      ["Prompt Builder Guide", "https://help.salesforce.com/s/articleView?id=sf.prompt_builder_overview.htm&type=5"]
    ],
    practice: [
      "Create a custom 'Course Summary' Sales Prompt Template.",
      "Insert record merge fields to display active course details dynamically.",
      "Preview the resolved prompt and test generative model output in Einstein console."
    ],
    questions: [
      "What is grounding in generative AI, and why is it important?",
      "How does Prompt Builder protect sensitive data before sending it to LLMs?",
      "What is the difference between a system prompt and a user prompt template?"
    ]
  },
  {
    title: "Channels & Copilot Deployments",
    description: "Deploy your Agent to multiple channels, including Lightning Experience utility bars, Experience Cloud portals, and web widgets.",
    points: [
      "Deploy your Einstein Copilot to the internal Salesforce utility bar for employees.",
      "Configure web chat deployments to expose agents on public community portals.",
      "Configure CORS, CSP, and security settings for web widget hosting."
    ],
    resources: [
      ["Einstein Copilot Deployment", "https://help.salesforce.com/s/articleView?id=sf.copilot_deploy.htm&type=5"]
    ],
    practice: [
      "Add the Einstein Copilot component to your Sales App Utility Bar.",
      "Set up a web chat deployment for your Experience Cloud portal.",
      "Test the chat widget inside a mock website and verify connection parameters."
    ],
    questions: [
      "How do internal deployments differ from public-facing web widgets?",
      "What is CORS, and why is it configured for integration channels?",
      "How do you control user access permissions on external community channels?"
    ]
  },
  {
    title: "Conversational Analytics & Auditing",
    description: "Track agent performance, audit conversational histories, verify trust settings, and monitor system execution logs.",
    points: [
      "Monitor agent performance dashboards and identify failed classification runs.",
      "Audit raw conversational transcripts and trace action execution logs.",
      "Understand the Einstein Trust Layer and verify toxicity masking settings."
    ],
    resources: [
      ["Einstein Trust Layer", "https://www.salesforce.com/products/einstein/trust-layer/"]
    ],
    practice: [
      "Open Setup → Einstein Copilot Event Logs and inspect a recent transaction.",
      "Verify toxicity masking configurations inside the Einstein Trust console.",
      "Audit a conversation history transcript to locate an action routing failure."
    ],
    questions: [
      "What does the Einstein Trust Layer do to prevent data leakage?",
      "How do you trace why an Agent failed to classify and route a prompt?",
      "What metrics help admins measure adoption success of external agents?"
    ]
  }
];

const AGENTFORCE_PROJECT_NAME = "TomCodeX Support Agentforce Engine";
const AGENTFORCE_PROJECT_ARTIFACTS = [
  "defaultCopilotAgent activation profile",
  "studentSupportTopic custom topic configuration",
  "studentRegistrationAction custom flow action",
  "courseSummaryPromptTemplate custom prompt template",
  "experienceCloudChatWidget deployment channel",
  "toxicityMaskingAudit logs review"
];

const AGENTFORCE_DEVELOPMENT_STAGES = [
  { id: "agent-foundations", title: "Stage 1: Agent Foundations and Actions", range: "Modules 1-3", outcome: "Set up Einstein agents, design custom topics with routing instructions, and link Flow & Apex invocable actions." },
  { id: "prompts-governance", title: "Stage 2: Prompts, Deployments and Auditing", range: "Modules 4-6", outcome: "Design prompt templates with Einstein Trust Layer, deploy to Experience Cloud portals, and audit event logs." }
];

function agentforceStageFor(index) {
  return AGENTFORCE_DEVELOPMENT_STAGES[Math.floor(index / 3)];
}

function agentforceTopicCard(topic, index) {
  return `<article class="roadmap-topic-card"><span>${String(index + 1).padStart(2, "0")}</span><div><h6>${topic}</h6><p><strong>Implementation focus:</strong> Configure this AI behavior in your custom Agent Studio console.</p><p><strong>Required proof:</strong> Submit agent logs, activation state, and conversation transcripts.</p></div></article>`;
}

function agentforceMasteryTest(module, projectTask) {
  const correct = [...module.points, ...module.practice, projectTask.expected].slice(0, 10);
  while (correct.length < 10) correct.push(`Apply ${module.title} using secure, grounded Salesforce Agentforce practices.`);
  const mcqs = correct.map((answer, index) => ({
    type: "mcq",
    question: `Which statement best proves job-ready Agentforce understanding for topic ${index + 1}?`,
    options: [answer, "Expose screen flows without input variables.", "Hardcode LLM system prompts without Einstein Trust configurations.", "Grant public guest users unrestricted Apex execution via Agent actions."],
    answer
  }));
  const scenarios = module.questions.slice(0, 3).map((question) => ({ type: "scenario", question: `Agentforce scenario: ${question} Explain the agent configuration, grounding context, trust settings, and security plan.` }));
  return [...mcqs, ...scenarios, { type: "practical", question: `Explain how you built and tested ${projectTask.title}.` }, { type: "practical", question: `Describe the evidence proving this expected result: ${projectTask.expected}` }];
}

function agentforceLabCriteria(module, projectTask, index) {
  const artifactId = projectTask.artifact.toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_|_$/g, "");
  const criteria = (() => {
    if (index === 0) {
      return [
        { id: "agentforce_architecture", question: "Explain how autonomous AI agents in Agentforce differ from traditional decision-tree chatbots and generative copilots.", type: "text", minLength: 90 },
        { id: "agentforce_permissions", question: "Identify the specific Salesforce permission sets required to access Agent Studio and Prompt Builder.", type: "text", minLength: 80 },
        { id: "copilot_agent_name", question: "Provide the exact name of the default copilot agent you activated in your developer org.", type: "text", expectedKeywords: ["defaultCopilotAgent"], minLength: 50 },
        { id: "provisioning_steps", question: "Describe the steps you took in the Setup menu to enable Einstein and activate the agent.", type: "text", minLength: 90 },
        { id: "activation_evidence", question: "Provide the console debug message proving the default copilot agent successfully responded to a basic query.", type: "text", minLength: 90 },
        { id: "project_impact", question: "Explain how provisioning this agent prepares you for configuring the Student Support Agent.", type: "text", minLength: 100 },
        { id: "leitr_review", question: "Provide your LEITR proof: what you learned, explained from memory, implemented, and your 1-day, 3-day, and 7-day review dates.", type: "text", expectedKeywords: ["1 day", "3 days", "7 days"], minLength: 120 }
      ];
    }
    if (index === 1) {
      return [
        { id: "topics_purpose", question: "Explain what a Topic is in Agentforce and how instructions define the agent's boundary of knowledge.", type: "text", minLength: 90 },
        { id: "intent_routing", question: "Describe the orchestrator routing engine and how intent classification matches user queries to Topics.", type: "text", minLength: 90 },
        { id: "student_support_topic", question: "Provide the exact name of the custom Topic you added to your agent in Agent Studio.", type: "text", expectedKeywords: ["studentSupportTopic"], minLength: 50 },
        { id: "instruction_boundary", question: "Detail the instructions you wrote to prevent the agent from answering off-topic or sensitive questions.", type: "text", minLength: 90 },
        { id: "debugger_evidence", question: "Share the Agent Studio debugger classification log proving that a student query was correctly routed to your Topic.", type: "text", minLength: 90 },
        { id: "project_integration", question: "Explain how studentSupportTopic routes student inquiries and resolves scheduling questions.", type: "text", minLength: 100 },
        { id: "leitr_review", question: "Provide your LEITR proof: what you learned, explained from memory, implemented, and your 1-day, 3-day, and 7-day review dates.", type: "text", expectedKeywords: ["1 day", "3 days", "7 days"], minLength: 120 }
      ];
    }
    if (index === 2) {
      return [
        { id: "action_mapping", question: "Explain how the Agentforce orchestrator matches user input parameters to input variables in Flow and Apex.", type: "text", minLength: 100 },
        { id: "invocable_annotations", question: "Identify the specific Apex annotation and descriptions required to expose a method as an Agent Action.", type: "text", minLength: 80 },
        { id: "registration_action", question: "Provide the exact name of the Flow or invocable Apex class you exposed as an Agent Action.", type: "text", expectedKeywords: ["studentRegistrationAction"], minLength: 50 },
        { id: "parameter_definitions", question: "Describe the input parameters (e.g. email, course name) and output parameters returned by your action.", type: "text", minLength: 90 },
        { id: "execution_security", question: "Explain how user permissions, CRUD, FLS, and sharing settings are checked when an Agent Action executes database updates.", type: "text", minLength: 90 },
        { id: "project_triage", question: "Describe the test scenario where the agent successfully registered a student by running studentRegistrationAction.", type: "text", minLength: 100 },
        { id: "leitr_review", question: "Provide your LEITR proof: what you learned, explained from memory, implemented, and your 1-day, 3-day, and 7-day review dates.", type: "text", expectedKeywords: ["1 day", "3 days", "7 days"], minLength: 120 }
      ];
    }
    if (index === 3) {
      return [
        { id: "prompt_grounding", question: "Explain the concept of grounding in generative AI and how Prompt Builder implements it using Salesforce records.", type: "text", minLength: 90 },
        { id: "trust_masking", question: "Describe how the Einstein Trust Layer protects sensitive personal data (PII) before queries reach LLMs.", type: "text", minLength: 90 },
        { id: "summary_template", question: "Provide the exact name of the custom Prompt Template you configured to summarize course enrollment data.", type: "text", expectedKeywords: ["courseSummaryPromptTemplate"], minLength: 50 },
        { id: "merge_fields", question: "Describe the record merge fields and relationship queries you configured in the template payload.", type: "text", minLength: 90 },
        { id: "preview_evidence", question: "Share the preview console log showing a grounded prompt containing dynamic record values successfully parsed.", type: "text", minLength: 90 },
        { id: "project_value", question: "Explain how courseSummaryPromptTemplate delivers a personalized, secure course summary to the student.", type: "text", minLength: 100 },
        { id: "leitr_review", question: "Provide your LEITR proof: what you learned, explained from memory, implemented, and your 1-day, 3-day, and 7-day review dates.", type: "text", expectedKeywords: ["1 day", "3 days", "7 days"], minLength: 120 }
      ];
    }
    if (index === 4) {
      return [
        { id: "channel_differences", question: "Compare deploying Einstein Copilot to the internal Salesforce utility bar versus external Web Chat channels.", type: "text", minLength: 100 },
        { id: "cors_csp_settings", question: "Explain why Cross-Origin Resource Sharing (CORS) and Content Security Policy (CSP) must be configured for web chat widgets.", type: "text", minLength: 90 },
        { id: "experience_cloud_widget", question: "Provide the exact name of the web chat deployment or component you added to your portal page.", type: "text", expectedKeywords: ["experienceCloudChatWidget"], minLength: 50 },
        { id: "access_control", question: "Describe how you authenticate external users and control their access to Agent Actions on public pages.", type: "text", minLength: 90 },
        { id: "deployment_evidence", question: "Provide the initialization script or embed code snippet proving that the widget is loaded securely on the site.", type: "text", minLength: 90 },
        { id: "project_accessibility", question: "Explain how experienceCloudChatWidget makes agentic support easily accessible to students on the community portal.", type: "text", minLength: 100 },
        { id: "leitr_review", question: "Provide your LEITR proof: what you learned, explained from memory, implemented, and your 1-day, 3-day, and 7-day review dates.", type: "text", expectedKeywords: ["1 day", "3 days", "7 days"], minLength: 120 }
      ];
    }
    if (index === 5) {
      return [
        { id: "audit_logs", question: "Describe the steps you took to locate and audit agent transaction event logs in Salesforce Setup.", type: "text", minLength: 100 },
        { id: "toxicity_settings", question: "Explain how you verified the Einstein Trust Layer toxicity and profanity filter settings in the Trust console.", type: "text", minLength: 90 },
        { id: "toxicity_masking_log", question: "Provide the exact name of the event log category or search query you ran to review blocked statements.", type: "text", expectedKeywords: ["toxicityMaskingAudit"], minLength: 50 },
        { id: "routing_failures", question: "Explain how to diagnose and troubleshoot a scenario where the orchestrator fails to classify and route a prompt.", type: "text", minLength: 90 },
        { id: "adoption_metrics", question: "State the key metrics (e.g. classification rate, action completion) used to measure the success of your agent.", type: "text", minLength: 90 },
        { id: "project_robustness", question: "Explain how reviewing toxicityMaskingAudit reports ensures that your Student Support Agent remains secure and compliant.", type: "text", minLength: 100 },
        { id: "leitr_review", question: "Provide your LEITR proof: what you learned, explained from memory, implemented, and your 1-day, 3-day, and 7-day review dates.", type: "text", expectedKeywords: ["1 day", "3 days", "7 days"], minLength: 120 }
      ];
    }
    return [];
  })();
  return criteria.map((criterion) => ({ ...criterion, artifactId, moduleNumber: index + 1 }));
}

agentforceModules.forEach((module, index) => {
  const stage = agentforceStageFor(index);
  const artifact = AGENTFORCE_PROJECT_ARTIFACTS[index];
  const previous = agentforceModules[index - 1]?.title || "Salesforce Admin and Integration foundations";
  const next = agentforceModules[index + 1]?.title || "AI support capstone presentation and continuous learning review";
  const projectTask = {
    title: `Build ${artifact}`,
    purpose: `Apply ${module.title} to the continuous ${AGENTFORCE_PROJECT_NAME}.`,
    artifact,
    objects: ["Student__c", "Course_Enrollment__c", "Integration_Log__c"],
    steps: [
      `Define the conversational context, routing rules, and security checks for ${artifact}.`,
      "Create or configure the Agent Topic, Instruction, or Template in Agent Studio.",
      "Link Flow or Apex Actions to enable backend capabilities for the agent.",
      "Verify that permissions, CORS, and web channel settings are securely configured.",
      "Test intent classification, prompt grounding, or log output using the conversation debugger.",
      "Write invocable test methods or verify Trust Layer toxicity settings in Setup.",
      "Review the agent's event logs, audit transcripts, or check the embed chat client.",
      "Commit your configuration with deployment checklists, roll-back plans, and support logs.",
      "Complete the LEITR review with 1:2 implementation time and 1-day, 3-day, and 7-day review dates."
    ],
    expected: `${artifact} works securely as part of ${AGENTFORCE_PROJECT_NAME} with accurate classification, grounded responses, and verified trust layer logs.`,
    evidence: [
      `Configuration metadata or prompt templates for ${artifact}.`,
      "Action triggers, event logs, or conversation debugger logs.",
      "Toxicity masking settings or CORS/CSP verification notes.",
      "Security parameters and user access permission checklists.",
      "Git commit history with release notes and roll-back strategy.",
      "LEITR proof with Learn, Explain, Implement, Test, and Review evidence."
    ]
  };
  const syllabusContent = `<section class="roadmap-phase-lesson"><div class="roadmap-phase-summary"><span>${stage.title}</span><h5>Module ${index + 1} of 6: ${module.title}</h5><p>${stage.outcome} ${module.description}</p></div><div class="roadmap-topic-grid">${module.points.map(agentforceTopicCard).join("")}</div><div class="roadmap-phase-lab"><div><span>Guided Agentforce lab</span><h6>${projectTask.title}</h6><p>${projectTask.steps.join(" ")}</p></div><div><span>Required evidence</span><h6>Production-style AI proof</h6><p>${projectTask.evidence.join(" ")}</p></div></div><div class="roadmap-trailhead"><h6>Supporting Salesforce Agentforce resources</h6><div>${module.resources.map(([name, url]) => `<a class="trailhead-badge-card" href="${url}" target="_blank" rel="noopener noreferrer"><span>Official resource</span><strong>${name}</strong><small>Open documentation</small></a>`).join("")}</div></div></section>`;
  
  module.subCourse = { id: stage.id, title: stage.title, moduleRange: stage.range, description: stage.outcome };
  module.masteryStage = stage;
  module.richContent = {
    projectConnection: { buildsOn: previous, buildsNow: artifact, preparesNext: next },
    mainSyllabus: { title: "Salesforce Agentforce Practical Build Syllabus", introduction: "Build production-ready autonomous agents, write intent routing instructions, Ground prompts securely, and use LEITR: Learn, Explain, Implement, Test, and Review.", content: syllabusContent },
    moduleGoal: module.description,
    learningOutcomes: module.points,
    simpleExplanation: `<p><strong>${module.title}</strong> teaches agentic AI implementation depth for Salesforce developers. Build the agent topic, link the flow action, ground the prompt template, and audit the trust layer logs.</p>`,
    detailedLessonSections: module.points.map((point) => ({ title: point, content: `<p>${point}</p><p>Apply this topic in ${AGENTFORCE_PROJECT_NAME}. Explain topics, instructions, actions, prompts, channels, and auditing notes.</p>` })),
    keyNotes: [...module.points, "Always define clear boundaries in topic instructions.", "Ensure all @InvocableMethod actions check CRUD and FLS.", "Audit toxicity settings inside the Einstein Trust Layer.", "Use the conversation debugger to test routing intent."],
    flashcards: module.questions.map((question, questionIndex) => ({ front: question, back: module.points[questionIndex % module.points.length] })),
    realBusinessExample: `<p>TomCodeX uses ${AGENTFORCE_PROJECT_NAME} to classify user queries, invoke student enrollment flows, compile course summary prompts, and review event logs.</p>`,
    whereUsed: `<p>Use this skill in Agent Studio, Prompt Builder, invocable Apex classes, Experience Cloud web pages, utility bars, and Einstein Event logs.</p>`,
    stepByStepImplementation: projectTask.steps,
    trailheadPractice: { title: `Official practice for ${module.title}`, purpose: "Complete the resource, then implement the same capability in the TomCodeX Agentforce project.", resources: module.resources, tasks: module.practice },
    projectName: AGENTFORCE_PROJECT_NAME,
    projectTask,
    projectEvidence: projectTask.evidence,
    bestPractices: ["Write concise topic instructions.", "Use invocable actions for external integrations.", "Implement custom permission sets for agents.", "Configure CORS and CSP for public widgets.", "Monitor toxicity and event logs regularly."],
    commonMistakes: ["Failing to write clear boundaries.", "Skipping security audits on invocable actions.", "Hardcoding LLM prompts.", "Ignoring CORS setup errors.", "Neglecting event log review checks."],
    whyMattersInJob: `<p>Salesforce AI developers must build custom agents, Prompt templates, and event-driven actions that comply with corporate security standards, requiring standard-compliant Agentforce configurations.</p>`,
    interviewQuestions: module.questions,
    practicalAssignment: [...module.practice, ...projectTask.steps],
    knowledgeCheckQuestions: module.questions,
    completionChecklist: [`I completed ${projectTask.title}.`, "I completed the official Agentforce resources.", "I captured source logs, templates, and trust audits.", "I followed LEITR with at least 2 hours implementing for every 1 hour learning."],
    finalSummary: `You completed ${module.title} and added ${artifact} to ${AGENTFORCE_PROJECT_NAME}.`,
    masteryPreparationQuestions: module.questions,
    handsOnLab: { title: projectTask.title, instructions: `<p>${projectTask.purpose}</p><ol>${projectTask.steps.map((step) => `<li>${step}</li>`).join("")}</ol>` },
    labCriteria: agentforceLabCriteria(module, projectTask, index),
    masteryEvaluationCriteria: ["Correct agent and setup configuration", "Secure action and invocable execution", "Accurate prompt template grounding", "Reliable web channel deployments", "Proper event logging and auditing checks"],
    masteryTest: agentforceMasteryTest(module, projectTask)
  };
});

window.TomCodexCourseConfig = {
  modules: agentforceModules,
  subCourses: AGENTFORCE_DEVELOPMENT_STAGES,
  masteryKey: "tomcodex.agentforceMasteryScores.v1",
  courseName: "Salesforce Agentforce",
  recordLabel: "Agentforce",
  moduleHours: 3
};
