const flowModules = [
  { title: "Flow Builder Foundations", description: "Understand Salesforce Flow, automation types, Flow Builder, variables, resources, and when to use Flow.", points: ["Choose the correct Flow type for a business requirement.", "Navigate Flow Builder and use elements, connectors, resources, and variables.", "Compare Flow with validation rules, approvals, and Apex."], resources: [["Flow Builder Basics", "https://trailhead.salesforce.com/content/learn/modules/flow-basics"], ["Flow Builder Guide", "https://help.salesforce.com/s/articleView?id=sf.flow.htm&type=5"]], practice: ["Create a simple autolaunched Flow.", "Build variables and formula resources.", "Document an automation decision matrix."], questions: ["What Flow types are available?", "What is a Flow resource?", "When should Apex be preferred over Flow?"] },
  { title: "Record-Triggered Flow Fundamentals", description: "Automate record changes efficiently using before-save, after-save, create, update, and delete triggers.", points: ["Configure entry conditions and trigger timing.", "Use before-save Flow for fast field updates.", "Use after-save Flow for related records and actions."], resources: [["Record-Triggered Flows", "https://trailhead.salesforce.com/content/learn/modules/record-triggered-flows"], ["Flow Best Practices", "https://help.salesforce.com/s/articleView?id=sf.flow_concepts_bestpractices.htm&type=5"]], practice: ["Build a before-save Case priority Flow.", "Create an after-save follow-up task.", "Test create and update conditions."], questions: ["Before-save versus after-save?", "Why use entry conditions?", "How can a Flow retrigger itself?"] },
  { title: "Screen Flows and User Experience", description: "Build guided user experiences with screens, inputs, validation, navigation, and conditional visibility.", points: ["Design clear screens with appropriate input components.", "Use conditional visibility and input validation.", "Launch Screen Flows from pages, actions, and utility bars."], resources: [["Screen Flow Distribution", "https://trailhead.salesforce.com/content/learn/modules/screen-flow-distribution"], ["Flow Screen Components", "https://help.salesforce.com/s/articleView?id=sf.flow_ref_elements_screencmp.htm&type=5"]], practice: ["Build a guided customer onboarding Flow.", "Add conditional questions and validation.", "Place the Flow on a Lightning page."], questions: ["What makes a Screen Flow usable?", "How does conditional visibility work?", "Where can Screen Flows be launched?"] },
  { title: "Decisions, Formulas, and Business Logic", description: "Model complex business rules using decisions, assignments, formulas, and collection logic.", points: ["Build readable Decision outcomes and default paths.", "Use formulas and assignments to transform data.", "Design logic that is easy to maintain and test."], resources: [["Flow Logic Trailhead", "https://trailhead.salesforce.com/content/learn/modules/flow-build-logic"], ["Flow Formula Reference", "https://help.salesforce.com/s/articleView?id=sf.flow_ref_resources_formula.htm&type=5"]], practice: ["Route opportunities by value and region.", "Calculate a service due date.", "Refactor repeated conditions into formulas."], questions: ["Why use a default Decision outcome?", "Assignment versus Update Records?", "How do formulas improve maintainability?"] },
  { title: "Data Operations and Collections", description: "Query, create, update, delete, and process Salesforce records safely and efficiently.", points: ["Use Get, Create, Update, and Delete Records elements.", "Process record collections with loops and assignments.", "Avoid database operations inside loops."], resources: [["Flow Data Elements", "https://trailhead.salesforce.com/content/learn/modules/flow-build-data"], ["Flow Limits", "https://help.salesforce.com/s/articleView?id=sf.flow_considerations_limit.htm&type=5"]], practice: ["Update related Contacts in one operation.", "Build and process a record collection.", "Refactor an inefficient loop."], questions: ["Why avoid updates inside loops?", "What does Get Records return?", "How do collection variables work?"] },
  { title: "Subflows and Reusable Automation", description: "Create modular automation using autolaunched subflows, inputs, outputs, and shared services.", points: ["Identify reusable business logic.", "Design clear input and output variables.", "Build a maintainable library of subflows."], resources: [["Autolaunched Flows", "https://trailhead.salesforce.com/content/learn/modules/autolaunched-scheduled-flows"], ["Flow Best Practices", "https://help.salesforce.com/s/articleView?id=sf.flow_concepts_bestpractices.htm&type=5"]], practice: ["Create a reusable notification subflow.", "Call it from two parent Flows.", "Document its contract and error behavior."], questions: ["When should a subflow be used?", "What makes a good subflow contract?", "How do subflows reduce duplication?"] },
  { title: "Fault Handling and Observability", description: "Make automation supportable with fault paths, logging, notifications, and recovery guidance.", points: ["Add fault connectors to risky elements.", "Capture useful error context without exposing sensitive data.", "Design support notifications and operational logging."], resources: [["Flow Troubleshooting", "https://help.salesforce.com/s/articleView?id=sf.flow_troubleshoot.htm&type=5"], ["Flow Best Practices", "https://help.salesforce.com/s/articleView?id=sf.flow_concepts_bestpractices.htm&type=5"]], practice: ["Add centralized fault handling.", "Log failed record details safely.", "Create an admin error notification."], questions: ["Why are fault paths required?", "What should an error log contain?", "How should failed automation be monitored?"] },
  { title: "Scheduled and Asynchronous Automation", description: "Run work later or at scale using scheduled-triggered flows, scheduled paths, and asynchronous paths.", points: ["Choose scheduled-triggered, scheduled path, or asynchronous path.", "Understand timing, limits, and transaction behavior.", "Design safe batch-style processing."], resources: [["Scheduled Flows", "https://trailhead.salesforce.com/content/learn/modules/autolaunched-scheduled-flows"], ["Asynchronous Flow Paths", "https://help.salesforce.com/s/articleView?id=sf.flow_concepts_trigger_async_path.htm&type=5"]], practice: ["Build a nightly stale-case reminder.", "Add a scheduled follow-up path.", "Move noncritical work to an async path."], questions: ["Scheduled Flow versus scheduled path?", "Why use an asynchronous path?", "How do limits affect scheduled processing?"] },
  { title: "Flow Security and Governance", description: "Protect data and govern automation with permissions, contexts, naming, ownership, and documentation.", points: ["Understand user context and system context.", "Respect object, field, and record access.", "Apply naming, ownership, documentation, and review standards."], resources: [["Flow Security", "https://help.salesforce.com/s/articleView?id=sf.flow_distribute_security.htm&type=5"], ["Well-Architected", "https://architect.salesforce.com/well-architected/overview"]], practice: ["Test a Flow with restricted users.", "Create Flow naming and ownership standards.", "Complete a security review checklist."], questions: ["What is Flow running context?", "How can a Flow expose data?", "What belongs in Flow governance?"] },
  { title: "Testing, Debugging, and Performance", description: "Prove Flow behavior and improve reliability using debug tools, Flow tests, limits, and performance analysis.", points: ["Debug with representative paths and rollback mode.", "Create positive, negative, and bulk Flow tests.", "Find recursion, limit, and performance risks."], resources: [["Test a Flow", "https://help.salesforce.com/s/articleView?id=sf.flow_test.htm&type=5"], ["Flow Troubleshooting", "https://help.salesforce.com/s/articleView?id=sf.flow_troubleshoot.htm&type=5"]], practice: ["Create tests for a record-triggered Flow.", "Debug a failed scenario.", "Review a Flow for performance risks."], questions: ["Why is one happy-path test insufficient?", "How does rollback mode help?", "What causes Flow performance problems?"] },
  { title: "Integrations and Advanced Flow", description: "Extend Flow with invocable Apex, HTTP callouts, platform events, approvals, and orchestration concepts.", points: ["Use actions and invocable Apex appropriately.", "Design secure Flow HTTP callouts and event-driven automation.", "Recognize when orchestration or Apex is the better solution."], resources: [["Flow Integration Trailhead", "https://trailhead.salesforce.com/content/learn/modules/flow-integration"], ["Architect Decision Guides", "https://architect.salesforce.com/decision-guides"]], practice: ["Call an external service from Flow.", "Use an invocable Apex action.", "Design an event-driven approval process."], questions: ["When should Flow call Apex?", "How are Flow callouts secured?", "What problem does orchestration solve?"] },
  { title: "Deployment and Flow Capstone", description: "Deliver production-ready automation through source control, testing, deployment, monitoring, and continuous improvement.", points: ["Plan dependencies, activation, rollback, and post-deployment checks.", "Review automation architecture and avoid conflicting tools.", "Operate and improve Flows after release."], resources: [["Application Lifecycle Management", "https://trailhead.salesforce.com/content/learn/modules/application-lifecycle-and-development-models"], ["DevOps Center", "https://trailhead.salesforce.com/content/learn/modules/devops-center-basics"]], practice: ["Build an end-to-end service request capstone.", "Create a deployment and rollback plan.", "Perform a post-release health review."], questions: ["What makes a Flow production-ready?", "What belongs in a Flow deployment plan?", "How should Flow health be monitored?"] }
];

const FLOW_PROJECT_NAME = "TomCodeX Service Request Automation";
const FLOW_TYPES = [
  "Autolaunched Flow: Service_Request_Foundation",
  "Record-Triggered Flow: Service_Request_Triage",
  "Screen Flow: Submit_Service_Request",
  "Decision and Formula Logic: Service_Request_Routing",
  "Collection Processing Flow: Update_Related_Request_Tasks",
  "Subflow: Create_Service_Request_Notification",
  "Fault Handler Subflow: Log_Flow_Failure",
  "Scheduled-Triggered Flow: Stale_Request_Reminder",
  "Security Review: Service_Request_Flow_Access",
  "Flow Tests: Service_Request_Automation_Tests",
  "Advanced Flow: Service_Request_External_Escalation",
  "Capstone Release: Service_Request_Automation_v1"
];

const FLOW_MASTERY_STAGES = [
  { id: "foundation", title: "Stage 1: Flow Foundations", range: "Modules 1-3", outcome: "Build basic autolaunched, record-triggered, and Screen Flows." },
  { id: "intermediate", title: "Stage 2: Intermediate Flow Builder", range: "Modules 4-6", outcome: "Build maintainable logic, data operations, collections, and reusable subflows." },
  { id: "advanced", title: "Stage 3: Advanced Flow Automation", range: "Modules 7-9", outcome: "Build observable, scheduled, secure, and governed automation." },
  { id: "mastery", title: "Stage 4: Flow Mastery and Capstone", range: "Modules 10-12", outcome: "Prove quality through testing, advanced integrations, deployment, and production support." }
];

function flowStageFor(index) {
  return FLOW_MASTERY_STAGES[Math.floor(index / 3)];
}

function flowTopicCard(topic, index) {
  return `<article class="roadmap-topic-card"><span>${String(index + 1).padStart(2, "0")}</span><div><h6>${topic}</h6><p><strong>Build requirement:</strong> Configure and demonstrate ${topic.toLowerCase()} inside the module's working Flow.</p><p><strong>Required test:</strong> Run successful, negative, bulk, restricted-user, and fault scenarios, then capture the observed result.</p></div></article>`;
}

function flowMasteryTest(module, projectTask) {
  const correct = [...module.points, ...module.practice, projectTask.expected].slice(0, 10);
  while (correct.length < 10) correct.push(`Apply ${module.title} using secure, testable, and maintainable Flow practices.`);
  const mcqs = correct.map((answer, index) => ({
    type: "mcq",
    question: `Which statement best demonstrates job-ready Flow understanding for topic ${index + 1}?`,
    options: [answer, "Activate directly in production without testing.", "Put database operations inside every loop.", "Ignore faults, permissions, and documentation."],
    answer
  }));
  const scenarios = module.questions.slice(0, 3).map((question) => ({ type: "scenario", question: `Flow scenario: ${question} Explain the design choice, risk, and test plan.` }));
  return [...mcqs, ...scenarios, { type: "practical", question: `Explain how you built and tested ${projectTask.title}.` }, { type: "practical", question: `Describe the evidence proving this expected result: ${projectTask.expected}` }];
}

flowModules.forEach((module, index) => {
  const previous = flowModules[index - 1]?.title || "Salesforce Admin automation foundations";
  const next = flowModules[index + 1]?.title || "Production operation and continuous improvement";
  const flowName = FLOW_TYPES[index];
  const stage = flowStageFor(index);
  const projectTask = {
    title: flowName,
    purpose: `Apply ${module.title} to the continuous TomCodeX Service Request Automation project.`,
    objects: ["Service_Request__c", "Task", "User"],
    fields: ["Service_Request__c.Status__c", "Service_Request__c.Priority__c", "Service_Request__c.OwnerId", "Service_Request__c.Due_Date__c"],
    flows: [flowName],
    reportsDashboards: ["Service Request Automation Health report"],
    apexLwc: index === 10 ? ["Optional invocable Apex or External Service after declarative evaluation"] : ["Not required; use Flow-first design"],
    steps: [
      `Define the requirement and success criteria for ${flowName}.`,
      "Create the Flow in a safe practice org using clear element and resource names.",
      "Configure entry conditions, data access, logic, and outputs appropriate to the module.",
      "Add fault handling, descriptions, and operational ownership.",
      "Debug positive, negative, permission, and bulk scenarios.",
      "Create sample records and prove the expected business result.",
      "Activate only after tests pass and capture project evidence.",
      "Document monitoring, recovery, and the next improvement.",
      "Complete the LEITR review: explain the Flow without notes, rebuild the core path from memory, answer one interview question, and schedule 1-day, 3-day, and 7-day review."
    ],
    expected: `${flowName} produces the intended Service Request business outcome without duplicate work, unhandled faults, or unauthorized data access.`,
    evidence: [`Screenshot of ${flowName} canvas and configuration.`, "Screenshots of important elements, resources, and entry conditions.", "Debug results for positive, negative, bulk, restricted-user, and fault paths.", "Before-and-after record evidence proving the business outcome.", "Short explanation of security, limits, monitoring, recovery, and support plan.", "Required LEITR note: Learn topic, Explain answer, Implement time log proving the 1:2 rule, Test-yourself result, and Review dates for 1 day, 3 days, and 7 days."],
    validation: ["Verify the exact Flow name, type, and active version.", "Confirm entry conditions and execution timing match the requirement.", "Confirm sample records prove the expected business outcome.", "Confirm positive, negative, bulk, restricted-user, and fault tests are complete.", "Confirm fault handling, permissions, monitoring, recovery, and evidence are complete.", "Confirm the learner submitted a LEITR proof note with the 1:2 implementation rule and 1-day, 3-day, 7-day review schedule."]
  };
  const syllabusContent = `<section class="roadmap-phase-lesson"><div class="roadmap-phase-summary"><span>${stage.title}</span><h5>Step ${index + 1} of 12: ${module.title}</h5><p>${stage.outcome} ${module.description}</p></div><div class="roadmap-topic-grid">${module.points.map(flowTopicCard).join("")}</div><div class="roadmap-phase-lab"><div><span>Guided module lab</span><h6>${projectTask.title}</h6><p>${projectTask.steps.join(" ")}</p></div><div><span>Required proof</span><h6>Evidence to submit</h6><p>${projectTask.evidence.join(" ")}</p></div></div><div class="roadmap-trailhead"><h6>Supporting Salesforce Trailhead resources</h6><div>${module.resources.map(([name, url]) => `<a class="trailhead-badge-card" href="${url}" target="_blank" rel="noopener noreferrer"><span>Official learning resource</span><strong>${name}</strong><small>Open resource</small></a>`).join("")}</div></div></section>`;
  module.subCourse = { id: stage.id, title: stage.title, moduleRange: stage.range, description: stage.outcome };
  module.masteryStage = stage;
  module.richContent = {
    projectConnection: { buildsOn: previous, buildsNow: flowName, preparesNext: next },
    mainSyllabus: { title: "Salesforce Flow Practical Build Syllabus", introduction: "This is a fully practical course. Start by building the required Flow, then use LEITR: Learn one concept, Explain it, Implement heavily, Test yourself, and Review after 1 day, 3 days, and 7 days.", content: syllabusContent },
    moduleGoal: module.description,
    learningOutcomes: module.points,
    simpleExplanation: `<p>In this module, you learn <strong>${module.title}</strong> through a production-style Flow requirement. Focus on why the automation exists, how Salesforce executes it, how to test it, and how an administrator supports it after activation.</p>`,
    detailedLessonSections: module.points.map((point) => ({ title: point, content: `<p>${point}</p><p>Apply this capability to ${FLOW_PROJECT_NAME}. Document design choices, limits, security context, tests, failure behavior, and the expected business result.</p>` })),
    keyNotes: [...module.points, "Use clear Flow, element, resource, and version descriptions.", "Never activate automation before testing permissions, bulk behavior, and fault paths."],
    flashcards: module.questions.map((question, questionIndex) => ({ front: question, back: module.points[questionIndex % module.points.length] })),
    realBusinessExample: `<p>TomCodeX support teams use ${FLOW_PROJECT_NAME} to capture, route, update, escalate, and monitor learner service requests consistently.</p>`,
    whereUsed: `<p>Use this module in Flow Builder, Object Manager, Lightning pages, Setup monitoring, deployment workflows, and production support.</p>`,
    stepByStepImplementation: projectTask.steps,
    trailheadPractice: { title: `Official practice for ${module.title}`, purpose: "Complete official learning, then apply it in the TomCodeX Flow project.", resources: module.resources, tasks: module.practice },
    projectName: FLOW_PROJECT_NAME,
    projectTask,
    projectEvidence: projectTask.evidence,
    bestPractices: ["Use one clear business purpose per Flow.", "Use entry conditions and descriptions.", "Avoid database operations inside loops.", "Add fault handling and test as restricted users."],
    commonMistakes: ["Activating before testing.", "Using unclear names.", "Creating recursion or duplicate actions.", "Ignoring security context, limits, and recovery."],
    whyMattersInJob: `<p>Flow builders are responsible for reliable automation, safe data changes, maintainable design, testing, deployment, monitoring, and incident recovery.</p>`,
    interviewQuestions: module.questions,
    practicalAssignment: [...module.practice, ...projectTask.steps],
    knowledgeCheckQuestions: module.questions,
    completionChecklist: [`I completed ${projectTask.title}.`, "I completed Trailhead practice.", "I captured evidence and tested positive, negative, permission, bulk, and fault scenarios.", "I followed LEITR and spent at least 2 hours implementing for every 1 hour learning."],
    finalSummary: `You completed ${module.title} and extended ${FLOW_PROJECT_NAME}.`,
    masteryPreparationQuestions: module.questions,
    handsOnLab: { title: projectTask.title, instructions: `<p>${projectTask.purpose}</p><ol>${projectTask.steps.map((step) => `<li>${step}</li>`).join("")}</ol>` },
    labCriteria: (() => {
      if (index === 0) {
        return [
          { id: "flow_purpose", question: "Explain when to use an Autolaunched Flow compared to a Screen Flow or Record-Triggered Flow.", type: "text", minLength: 80 },
          { id: "flow_variables", question: "List the key input and output variables you defined in your foundation Flow and explain their data types.", type: "text", minLength: 80 },
          { id: "formula_resources", question: "What formula resources did you create, and how do they calculate values dynamically?", type: "text", minLength: 60 },
          { id: "decision_matrix", question: "Explain the criteria in your automation decision matrix for choosing between Flow, validation rules, approvals, and Apex.", type: "text", minLength: 100 },
          { id: "flow_identity", question: "What exact Flow name, Flow type, and active version did you build for the Service Request Foundation?", type: "text", expectedKeywords: ["Service_Request_Foundation"], minLength: 60 },
          { id: "project_evidence", question: "Describe the screenshots, debug logs, and output variables of your Autolaunched Flow execution.", type: "text", minLength: 100 },
          { id: "leitr_review", question: "Detail your LEITR schedule: what you explained from memory, the 1:2 implementation time logged, and your 1-day, 3-day, and 7-day review dates.", type: "text", minLength: 120 }
        ];
      }
      if (index === 1) {
        return [
          { id: "trigger_timing", question: "Explain the difference in execution and database updates between before-save (fast field updates) and after-save triggers.", type: "text", minLength: 100 },
          { id: "entry_conditions", question: "What exact entry conditions did you configure to prevent your triage Flow from executing unnecessarily on unrelated changes?", type: "text", minLength: 80 },
          { id: "priority_triage", question: "Describe the fields and priority logic used to automatically route and triage the incoming service request.", type: "text", minLength: 80 },
          { id: "task_creation", question: "Explain why Task creation must run in an after-save context instead of a before-save context.", type: "text", expectedKeywords: ["after-save"], minLength: 80 },
          { id: "flow_identity", question: "Provide the exact Flow name, trigger object, and active version of your triage automation.", type: "text", expectedKeywords: ["Service_Request_Triage"], minLength: 60 },
          { id: "project_evidence", question: "Describe the before-and-after record changes and the created Task record showing it was linked to the request.", type: "text", minLength: 100 },
          { id: "leitr_review", question: "Provide your LEITR proof note showing your study reflection, 1:2 rule compliance, and 1-day, 3-day, and 7-day review dates.", type: "text", minLength: 120 }
        ];
      }
      if (index === 2) {
        return [
          { id: "screen_design", question: "Describe the layout and input fields you placed on your service request creation screen.", type: "text", minLength: 80 },
          { id: "input_validation", question: "Provide the formula or configurations you used to validate user input on the screen (e.g. email or phone format).", type: "text", minLength: 60 },
          { id: "conditional_visibility", question: "Explain how and where you configured conditional visibility to show or hide fields based on other selections.", type: "text", minLength: 80 },
          { id: "page_placement", question: "Describe how and where you distributed this Screen Flow (e.g. Utility Bar, Quick Action, Lightning Record Page).", type: "text", minLength: 80 },
          { id: "flow_identity", question: "What is the exact API name and label of the Screen Flow you built for submitting service requests?", type: "text", expectedKeywords: ["Submit_Service_Request"], minLength: 60 },
          { id: "project_evidence", question: "Describe the user experience test you performed and the screenshots of the screen layout and final record creation.", type: "text", minLength: 100 },
          { id: "leitr_review", question: "Share your LEITR verification details: 1:2 rule implementation time, self-test results, and 1-day, 3-day, and 7-day review dates.", type: "text", minLength: 120 }
        ];
      }
      if (index === 3) {
        return [
          { id: "decision_outcomes", question: "Describe the decision outcomes you configured for routing service requests by priority, type, or region.", type: "text", minLength: 80 },
          { id: "assignment_vs_update", question: "Explain the difference between using an Assignment element to update variables and using an Update Records element.", type: "text", minLength: 100 },
          { id: "routing_formulas", question: "Detail any formula resources you built to calculate routing parameters or due dates dynamically.", type: "text", minLength: 80 },
          { id: "default_outcome", question: "Why is it a best practice to configure a default outcome path in every Decision element?", type: "text", minLength: 60 },
          { id: "flow_identity", question: "What is the exact name of the routing Flow you configured to automate owner and priority assignment?", type: "text", expectedKeywords: ["Service_Request_Routing"], minLength: 60 },
          { id: "project_evidence", question: "Describe your routing test cases (e.g., high priority vs low priority) and how the record was updated in each case.", type: "text", minLength: 100 },
          { id: "leitr_review", question: "Provide your LEITR proof: 1:2 rule implementation log, self-test questions, and 1-day, 3-day, and 7-day review dates.", type: "text", minLength: 120 }
        ];
      }
      if (index === 4) {
        return [
          { id: "collection_variables", question: "Explain what a collection variable is in Flow and how you populate it from a Get Records element.", type: "text", minLength: 80 },
          { id: "loop_processing", question: "Describe the loop logic you configured to iterate through related records and prepare changes.", type: "text", minLength: 80 },
          { id: "loop_limits", question: "Why is it critical to avoid putting Get Records or Update Records elements inside a loop? Refer to governor limits.", type: "text", expectedKeywords: ["limits"], minLength: 100 },
          { id: "batch_update", question: "Explain how you used assignments to add records to a collection and update them in a single database operation.", type: "text", minLength: 80 },
          { id: "flow_identity", question: "What is the exact name and object trigger for the collection processing Flow you built?", type: "text", expectedKeywords: ["Update_Related_Request_Tasks"], minLength: 60 },
          { id: "project_evidence", question: "Describe the test you performed to verify bulk record updates and provide the debug logs showing database limits were respected.", type: "text", minLength: 100 },
          { id: "leitr_review", question: "Provide your LEITR proof: simple explanation of collection loops, 1:2 rule time log, and 1-day, 3-day, and 7-day review dates.", type: "text", minLength: 120 }
        ];
      }
      if (index === 5) {
        return [
          { id: "subflow_benefits", question: "Explain how subflows promote automation reusability, consistency, and clean canvas designs.", type: "text", minLength: 80 },
          { id: "input_outputs", question: "Describe the exact input and output variables you defined in your notification subflow.", type: "text", minLength: 80 },
          { id: "parent_invocation", question: "Explain how you call the subflow from your parent Flow, including mapping variables.", type: "text", minLength: 80 },
          { id: "subflow_limits", question: "Are subflow executions counted towards separate governor limits, or do they share the parent transaction's limits?", type: "text", minLength: 80 },
          { id: "flow_identity", question: "What is the exact API name of the notification subflow you created?", type: "text", expectedKeywords: ["Create_Service_Request_Notification"], minLength: 60 },
          { id: "project_evidence", question: "Describe how you tested the subflow invocation from the parent Flow and show screenshots of the configuration.", type: "text", minLength: 100 },
          { id: "leitr_review", question: "Provide your LEITR validation details: 1:2 rule compliance, self-test results, and 1-day, 3-day, and 7-day review dates.", type: "text", minLength: 120 }
        ];
      }
      if (index === 6) {
        return [
          { id: "fault_purpose", question: "Why should fault paths be configured on data-performing elements (like Update or Delete Records)?", type: "text", minLength: 80 },
          { id: "error_context", question: "What system variables (e.g. `$Flow.FaultMessage`) did you capture to diagnose errors?", type: "text", expectedKeywords: ["$Flow.FaultMessage"], minLength: 80 },
          { id: "logging_design", question: "Describe the design of your fault handler subflow and where it stores or posts error messages.", type: "text", minLength: 80 },
          { id: "notification_channel", question: "How are system administrators notified when a Flow failure occurs (e.g., Email, Custom Notification, Slack)?", type: "text", minLength: 60 },
          { id: "flow_identity", question: "Provide the exact name of the fault handler Flow you built to centralize error logging.", type: "text", expectedKeywords: ["Log_Flow_Failure"], minLength: 60 },
          { id: "project_evidence", question: "Describe how you forced a transaction failure to test your fault path, and provide the resulting log entry or notification.", type: "text", minLength: 100 },
          { id: "leitr_review", question: "Provide your LEITR log: error handling explanation, 1:2 rule time tracked, and 1-day, 3-day, and 7-day review dates.", type: "text", minLength: 120 }
        ];
      }
      if (index === 7) {
        return [
          { id: "scheduled_vs_path", question: "Explain when to use a Scheduled-Triggered Flow compared to an after-save Flow with a Scheduled Path.", type: "text", minLength: 100 },
          { id: "asynchronous_benefits", question: "What is the benefit of moving heavy operations (like external callouts or email notifications) to an Asynchronous Path?", type: "text", expectedKeywords: ["Asynchronous"], minLength: 100 },
          { id: "stale_reminder_logic", question: "Describe the query criteria and timing offset configured for the Stale Request Reminder Flow.", type: "text", minLength: 80 },
          { id: "scheduled_limits", question: "Explain how Salesforce handles batching and governor limits for Scheduled-Triggered Flows.", type: "text", minLength: 80 },
          { id: "flow_identity", question: "What is the exact name and schedule configuration of your nightly stale-case reminder automation?", type: "text", expectedKeywords: ["Stale_Request_Reminder"], minLength: 60 },
          { id: "project_evidence", question: "Provide screenshots of the scheduled configuration and the debug log showing records picked up for processing.", type: "text", minLength: 100 },
          { id: "leitr_review", question: "Provide your LEITR proof: async timing explanation, 1:2 rule time log, and 1-day, 3-day, and 7-day review dates.", type: "text", minLength: 120 }
        ];
      }
      if (index === 8) {
        return [
          { id: "running_context", question: "Explain the difference between running a Flow in User Context versus running it in System Context (with or without sharing).", type: "text", minLength: 100 },
          { id: "security_risks", question: "Describe how a System Context Flow can pose a data exposure risk and how to mitigate it.", type: "text", minLength: 80 },
          { id: "flow_governance", question: "What naming conventions, label standards, and documentation requirements did you implement for this project?", type: "text", minLength: 80 },
          { id: "access_testing", question: "Describe how you tested your Flow's execution using a test user with restricted object permissions.", type: "text", minLength: 80 },
          { id: "flow_identity", question: "What is the exact name of the Flow or checklist profile you used to audit access security?", type: "text", expectedKeywords: ["Service_Request_Flow_Access"], minLength: 60 },
          { id: "project_evidence", question: "Describe your security review findings, user permission restrictions tested, and the access matrix evidence.", type: "text", minLength: 100 },
          { id: "leitr_review", question: "Provide your LEITR summary: security context description, 1:2 rule implementation logs, and 1-day, 3-day, and 7-day review dates.", type: "text", minLength: 120 }
        ];
      }
      if (index === 9) {
        return [
          { id: "debug_rollback", question: "Explain how Flow Builder's Debug mode and rollback feature prevent test changes from updating database data permanently.", type: "text", minLength: 80 },
          { id: "test_coverage", question: "Describe the positive, negative, and empty-field test scenarios you designed for your Flow.", type: "text", minLength: 100 },
          { id: "recursion_prevention", question: "Explain what causes Flow recursion and how you configured elements to prevent infinite loops.", type: "text", minLength: 80 },
          { id: "limit_analysis", question: "How do you identify transaction limit consumption (such as SOQL queries or DML operations) in Flow debug logs?", type: "text", minLength: 80 },
          { id: "flow_identity", question: "What is the name of the Flow test cases or configuration you set up for testing request triage?", type: "text", expectedKeywords: ["Service_Request_Automation_Tests"], minLength: 60 },
          { id: "project_evidence", question: "Provide the exact debug log and rollback proof of a successful test execution from your practice org.", type: "text", minLength: 100 },
          { id: "leitr_review", question: "Detail your LEITR progress: testing explanation, 1:2 rule implementation time, and 1-day, 3-day, and 7-day review dates.", type: "text", minLength: 120 }
        ];
      }
      if (index === 10) {
        return [
          { id: "invocable_apex", question: "Explain how and when to use Invocable Apex in a Flow compared to declarative actions.", type: "text", expectedKeywords: ["Invocable"], minLength: 80 },
          { id: "http_callout", question: "Describe how you configured a declarative HTTP Callout in Flow, including Named Credentials.", type: "text", expectedKeywords: ["Named Credentials"], minLength: 100 },
          { id: "platform_events", question: "How does a Platform Event-triggered Flow help decouple external service responses from standard records?", type: "text", minLength: 80 },
          { id: "orchestration_use", question: "When should Flow Orchestration be used instead of a standard Flow or Approval Process?", type: "text", minLength: 80 },
          { id: "flow_identity", question: "What is the exact API name of the external integration Flow you configured?", type: "text", expectedKeywords: ["Service_Request_External_Escalation"], minLength: 60 },
          { id: "project_evidence", question: "Describe the external callout or invocable test, showing the request payload and response data captured in logs.", type: "text", minLength: 100 },
          { id: "leitr_review", question: "Provide your LEITR proof: integration explanation, 1:2 rule implementation log, and 1-day, 3-day, and 7-day review dates.", type: "text", minLength: 120 }
        ];
      }
      if (index === 11) {
        return [
          { id: "dependency_planning", question: "List the dependencies (custom fields, objects, permission sets) that must be deployed alongside your Flow.", type: "text", minLength: 80 },
          { id: "deployment_tools", question: "Compare using Change Sets, DevOps Center, and Salesforce CLI for deploying Flow metadata.", type: "text", minLength: 100 },
          { id: "rollback_plan", question: "Describe your rollback strategy if the Flow fails or behaves unexpectedly after deployment to production.", type: "text", minLength: 80 },
          { id: "post_deployment", question: "What verification tests and user validations should be performed immediately after activating the Flow in production?", type: "text", minLength: 80 },
          { id: "flow_identity", question: "What is the exact package or version name of the deployed Service Request automation capstone?", type: "text", expectedKeywords: ["Service_Request_Automation_v1"], minLength: 60 },
          { id: "project_evidence", question: "Describe your deployment checklist, release notes, post-activation tests, and final capstone outcome.", type: "text", minLength: 100 },
          { id: "leitr_review", question: "Provide your final LEITR proof: deployment review, 1:2 rule implementation compliance, and 1-day, 3-day, and 7-day review dates.", type: "text", minLength: 120 }
        ];
      }
    })(),
    masteryTest: flowMasteryTest(module, projectTask)
  };
});

window.TomCodexCourseConfig = { modules: flowModules, subCourses: FLOW_MASTERY_STAGES, masteryKey: "tomcodex.flowMasteryScores.v1", courseName: "Salesforce Flow", recordLabel: "Flow", moduleHours: 4 };
