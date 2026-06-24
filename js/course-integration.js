const integrationModules = [
  {
    title: "Salesforce REST API Basics & Workbench",
    description: "Understand REST API principles, Salesforce standard endpoints, HTTP verbs, and execute queries using Salesforce Workbench.",
    points: [
      "Explain REST principles (statelessness, resources, URIs, HTTP methods).",
      "Use Salesforce standard REST endpoints to query and modify records.",
      "Execute REST requests securely via Salesforce Workbench developer tools."
    ],
    resources: [
      ["REST API Developer Guide", "https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_what_is_api.htm"],
      ["Salesforce Workbench", "https://workbench.developerforce.com/"]
    ],
    practice: [
      "Log into Workbench and execute a GET query on standard Account metadata.",
      "Create a new custom record in your org using a POST request in Workbench.",
      "Update a field using a PATCH request and verify in Salesforce."
    ],
    questions: [
      "What is the difference between standard and custom REST endpoints?",
      "Why is REST preferred over SOAP for lightweight client-side applications?",
      "What is the purpose of the HTTP PATCH method in Salesforce REST API?"
    ]
  },
  {
    title: "SOAP API & Bulk API at Scale",
    description: "Compare SOAP and REST protocols, read WSDL schemas, and handle large data volumes using the asynchronous Bulk API 2.0.",
    points: [
      "Differentiate between REST (JSON/HTTP) and SOAP (XML/WSDL) protocols.",
      "Understand enterprise vs partner WSDL schemas for system integrations.",
      "Configure and monitor bulk data upload jobs using Bulk API 2.0."
    ],
    resources: [
      ["SOAP API Guide", "https://developer.salesforce.com/docs/atlas.en-us.api.meta/api/"],
      ["Bulk API 2.0 Guide", "https://developer.salesforce.com/docs/atlas.en-us.api_asynch.meta/api_asynch/"]
    ],
    practice: [
      "Download your Developer Org's Partner WSDL from Setup.",
      "Set up a bulk upload job for 1,000 mock Student records.",
      "Monitor the bulk job execution and troubleshoot processing failures."
    ],
    questions: [
      "When would you use the SOAP API instead of the REST API?",
      "How does Bulk API 2.0 bypass standard synchronous governor limits?",
      "What is the limit of records supported in a single Bulk API 2.0 load?"
    ]
  },
  {
    title: "Named Credentials & Authentication",
    description: "Configure secure outbound calls using Named Credentials, External Credentials, and mock auth providers without exposing secrets.",
    points: [
      "Understand why hardcoded authentication secrets are a security risk.",
      "Create External Credentials defining authentication protocols (OAuth, Custom).",
      "Configure Named Credentials referencing External Credentials for secure calls."
    ],
    resources: [
      ["Named Credentials Help", "https://help.salesforce.com/s/articleView?id=sf.named_credentials_about.htm&type=5"]
    ],
    practice: [
      "Define an External Credential using Custom authentication.",
      "Set up a Named Credential pointing to an external mock service endpoint.",
      "Grant permission set access to the External Credential principal."
    ],
    questions: [
      "What is the main benefit of separating External and Named Credentials?",
      "How do permission sets grant users access to Named Credentials?",
      "Why should you avoid hardcoding API keys in Apex code?"
    ]
  },
  {
    title: "JSON Serialization & Parsing in Apex",
    description: "Serialize Apex objects to JSON strings and parse complex JSON responses into typed Apex classes and untyped maps.",
    points: [
      "Use JSON.serialize and JSON.serializePretty to generate string payloads.",
      "Parse JSON strings using JSON.deserialize and typed inner classes.",
      "Read dynamic or unstructured payloads using untyped JSON parsing."
    ],
    resources: [
      ["JSON Class Reference", "https://developer.salesforce.com/docs/atlas.en-us.apexref.meta/apexref/apex_class_System_Json.htm"]
    ],
    practice: [
      "Write an Apex script that serializes a list of Student records.",
      "Create an inner parser class using JSON2Apex tools to deserialize a response.",
      "Write an untyped parsing script using Map<String, Object>."
    ],
    questions: [
      "Typed vs Untyped JSON parsing: when to use which?",
      "What is the role of the JSONGenerator class in Apex?",
      "How does JSON.deserializeStrict enforce schema compliance?"
    ]
  },
  {
    title: "Apex Outbound HTTP Callouts",
    description: "Build robust Apex services executing outbound GET, POST, and PUT HTTP requests, and handle response codes and callout mocks.",
    points: [
      "Instantiate HttpRequest, Http, and HttpResponse classes in Apex.",
      "Execute outbound callouts using Named Credentials.",
      "Write unit tests with HttpCalloutMock to achieve 100% test coverage."
    ],
    resources: [
      ["Apex Callouts Guide", "https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_callouts.htm"]
    ],
    practice: [
      "Write a service class making a GET request to retrieve student attendance.",
      "Create an Apex HTTP callout class that sends student exam scores.",
      "Write a test class implementing HttpCalloutMock to verify success/error flows."
    ],
    questions: [
      "Why are HTTP callouts blocked in Apex triggers directly?",
      "How do you implement a mock callout for unit tests?",
      "What governor limit regulates callouts in a single Apex transaction?"
    ]
  },
  {
    title: "Apex REST Services (Inbound)",
    description: "Expose custom endpoints in Salesforce using Apex REST annotations (@RestResource, @HttpGet, @HttpPost) for external system consumption.",
    points: [
      "Use @RestResource to expose custom endpoints with global URIs.",
      "Implement @HttpGet and @HttpPost methods consuming and returning data.",
      "Access request context variables using RestContext.request."
    ],
    resources: [
      ["Apex REST Guide", "https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_rest_intro.htm"]
    ],
    practice: [
      "Create an Apex REST class mapping to /StudentService/*.",
      "Implement a GET method returning Student data for a given parameter ID.",
      "Implement a POST method that creates a new course enrollment record."
    ],
    questions: [
      "What sharing setting is respected by custom Apex REST classes?",
      "How do you access URL parameters in an @HttpGet service?",
      "How are exceptions handled and returned to external REST clients?"
    ]
  },
  {
    title: "Event-Driven Integration (Platform Events)",
    description: "Design real-time asynchronous integrations using Platform Events, Event Bus publishing, and triggers or Flow subscribers.",
    points: [
      "Explain the difference between point-to-point and event-driven architectures.",
      "Publish Platform Events using Apex EventBus.publish and flows.",
      "Subscribe to Platform Events using Apex triggers, Flow, or CometD clients."
    ],
    resources: [
      ["Platform Events Developer Guide", "https://developer.salesforce.com/docs/atlas.en-us.platform_events.meta/platform_events/"]
    ],
    practice: [
      "Create a custom Platform Event object: Student_Status_Change__e.",
      "Write an Apex trigger that publishes an event when a Student status is updated.",
      "Create a subscriber Flow that listens to the event and creates an task."
    ],
    questions: [
      "What is the difference between a standard sObject and a Platform Event?",
      "What does publish after commit vs publish immediately control?",
      "How does event replay work in Salesforce Event Bus?"
    ]
  },
  {
    title: "Integration Governance & Error Handling",
    description: "Design resilient integration frameworks managing timeouts, error retry queues, logging, and performance governor limits.",
    points: [
      "Handle HTTP callout timeouts and system exceptions gracefully.",
      "Build custom logging tables to record inbound and outbound integration history.",
      "Design retry strategies for failed integration calls using Queueable Apex."
    ],
    resources: [
      ["Integration Patterns Guide", "https://developer.salesforce.com/docs/atlas.en-us.integration_patterns_and_practices.meta/integration_patterns_and_practices/"]
    ],
    practice: [
      "Create an Integration_Log__c custom object to track call history.",
      "Write a utility Apex class that wraps callouts in try-catch-log blocks.",
      "Implement a Queueable retry handler that requeues failed callouts."
    ],
    questions: [
      "What are the best practices for handling a 503 Service Unavailable error?",
      "How do integrations affect Salesforce API request limit allocations?",
      "What is the standard timeout limit for Apex HTTP callouts?"
    ]
  }
];

const INTEGRATION_PROJECT_NAME = "TomCodeX Student Integration Engine";
const INTEGRATION_PROJECT_ARTIFACTS = [
  "workbenchRestQuery and POST payload",
  "bulkApiLoader mock data setup",
  "studentExternalStatus Named Credentials and access policies",
  "studentPayloadParser Apex serializer class",
  "studentExamScoresClient outbound HTTP service",
  "StudentService inbound Apex REST API",
  "StudentStatusChange Platform Event automation",
  "StudentIntegrationLog logging and retry utility"
];

const INTEGRATION_DEVELOPMENT_STAGES = [
  { id: "apis-scale", title: "Stage 1: APIs and Large Data Volumes", range: "Modules 1-2", outcome: "Build REST queries, SOAP schema maps, and execute high-volume async Bulk API 2.0 loads." },
  { id: "auth-payloads", title: "Stage 2: Authentication and Serialization", range: "Modules 3-4", outcome: "Build Named Credentials, External Credentials, and serialize/deserialize complex JSON payloads in Apex." },
  { id: "apex-integrations", title: "Stage 3: Apex Outbound & Inbound Integrations", range: "Modules 5-6", outcome: "Build outbound HTTP callouts with mock tests, and custom inbound @RestResource web services." },
  { id: "events-governance", title: "Stage 4: Asynchronous Messaging & Governance", range: "Modules 7-8", outcome: "Build Platform Event publishing/subscribing, and design resilient integration logging & retry frameworks." }
];

function integrationStageFor(index) {
  return INTEGRATION_DEVELOPMENT_STAGES[Math.floor(index / 2)];
}

function integrationTopicCard(topic, index) {
  return `<article class="roadmap-topic-card"><span>${String(index + 1).padStart(2, "0")}</span><div><h6>${topic}</h6><p><strong>Implementation focus:</strong> Build this integration behavior for the continuous student engine project.</p><p><strong>Required proof:</strong> Submit source code, REST responses, mock tests, and logs.</p></div></article>`;
}

function integrationMasteryTest(module, projectTask) {
  const correct = [...module.points, ...module.practice, projectTask.expected].slice(0, 10);
  while (correct.length < 10) correct.push(`Apply ${module.title} using secure, tested Salesforce integration practices.`);
  const mcqs = correct.map((answer, index) => ({
    type: "mcq",
    question: `Which statement best proves job-ready Integration understanding for topic ${index + 1}?`,
    options: [answer, "Hardcode credentials and skip callout mocks.", "Publish platform events immediately without checking transaction commit status.", "Disable CRUD and FLS checks in Apex REST services."],
    answer
  }));
  const scenarios = module.questions.slice(0, 3).map((question) => ({ type: "scenario", question: `Integration scenario: ${question} Explain the integration design, auth protocol, payload structure, and error handling plan.` }));
  return [...mcqs, ...scenarios, { type: "practical", question: `Explain how you built and tested ${projectTask.title}.` }, { type: "practical", question: `Describe the evidence proving this expected result: ${projectTask.expected}` }];
}

function integrationLabCriteria(module, projectTask, index) {
  const artifactId = projectTask.artifact.toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_|_$/g, "");
  const criteria = (() => {
    if (index === 0) {
      return [
        { id: "rest_principles", question: "Explain how Salesforce REST API adheres to statelessness and resource-based URI mapping.", type: "text", minLength: 90 },
        { id: "api_selection", question: "Describe your criteria for using a standard REST endpoint versus creating a custom Apex REST class.", type: "text", minLength: 80 },
        { id: "workbench_query", question: "Provide the exact REST endpoint URI and HTTP request method you executed inside Salesforce Workbench.", type: "text", expectedKeywords: ["workbenchRestQuery"], minLength: 50 },
        { id: "payload_structure", question: "Describe the JSON request body structure you used to POST a new record via the Workbench REST console.", type: "text", minLength: 100 },
        { id: "response_headers", question: "Identify the key HTTP response headers (e.g. status code, content-type) you verified from the REST response.", type: "text", minLength: 90 },
        { id: "project_impact", question: "Explain how query execution in Workbench prepares you for building the Student Integration Engine.", type: "text", minLength: 100 },
        { id: "leitr_review", question: "Provide your LEITR proof: what you learned, explained from memory, implemented, and your 1-day, 3-day, and 7-day review dates.", type: "text", expectedKeywords: ["1 day", "3 days", "7 days"], minLength: 120 }
      ];
    }
    if (index === 1) {
      return [
        { id: "soap_vs_rest", question: "Compare SOAP and REST APIs in Salesforce, highlighting their protocols, schemas, and transport formats.", type: "text", minLength: 90 },
        { id: "wsdl_differences", question: "Explain the difference between the Enterprise WSDL and the Partner WSDL, and when to use each.", type: "text", minLength: 90 },
        { id: "bulk_loader_setup", question: "Provide the exact name of the bulk job description or upload file you configured for high-volume loading.", type: "text", expectedKeywords: ["bulkApiLoader"], minLength: 50 },
        { id: "limits_bypass", question: "Explain how Bulk API 2.0 bypasses standard synchronous governor limits and batch-processes records asynchronously.", type: "text", minLength: 90 },
        { id: "job_monitoring", question: "Describe how you checked the status, progress, and processing errors of your bulk job in the Salesforce Setup console.", type: "text", minLength: 90 },
        { id: "project_scalability", question: "Explain how Bulk API 2.0 scales the import of student lists compared to standard REST insertions.", type: "text", minLength: 100 },
        { id: "leitr_review", question: "Provide your LEITR proof: what you learned, explained from memory, implemented, and your 1-day, 3-day, and 7-day review dates.", type: "text", expectedKeywords: ["1 day", "3 days", "7 days"], minLength: 120 }
      ];
    }
    if (index === 2) {
      return [
        { id: "hardcoding_risks", question: "Explain the security vulnerabilities associated with hardcoding endpoints, headers, and API keys in Apex code.", type: "text", minLength: 90 },
        { id: "credentials_setup", question: "Provide the exact names of the Named Credential and the External Credential you created for the endpoint.", type: "text", expectedKeywords: ["studentExternalStatus"], minLength: 50 },
        { id: "auth_protocols", question: "Describe the authentication protocol (e.g. OAuth 2.0, Custom Header) you configured in your External Credential.", type: "text", minLength: 90 },
        { id: "access_policies", question: "Explain how user access is managed using Permission Sets mapped to External Credential Principal profiles.", type: "text", minLength: 90 },
        { id: "named_credential_syntax", question: "Provide the callout URL syntax (e.g. callout:Name/Path) used in Apex to reference your Named Credential.", type: "text", minLength: 90 },
        { id: "project_security", question: "Explain how using Named Credentials protects authorization secrets in the Student Integration Engine.", type: "text", minLength: 100 },
        { id: "leitr_review", question: "Provide your LEITR proof: what you learned, explained from memory, implemented, and your 1-day, 3-day, and 7-day review dates.", type: "text", expectedKeywords: ["1 day", "3 days", "7 days"], minLength: 120 }
      ];
    }
    if (index === 3) {
      return [
        { id: "parsing_choices", question: "Contrast typed parsing using JSON.deserialize with untyped parsing using JSON.deserializeUntyped in Apex.", type: "text", minLength: 90 },
        { id: "parser_class", question: "Provide the exact name of the serialization utility class and any inner classes you created for payload parsing.", type: "text", expectedKeywords: ["studentPayloadParser"], minLength: 50 },
        { id: "serialization_methods", question: "Describe how your code uses JSON.serialize and JSON.serializePretty to generate request payloads.", type: "text", minLength: 90 },
        { id: "schema_validation", question: "Explain how to handle schema mismatches or missing properties when parsing JSON into strongly-typed Apex classes.", type: "text", minLength: 90 },
        { id: "parsing_evidence", question: "Provide the debug log or execute anonymous output proving that your parser correctly resolves nested JSON objects.", type: "text", minLength: 90 },
        { id: "project_value", question: "Explain how centralizing JSON parsing in studentPayloadParser simplifies record mapping in the Integration Engine.", type: "text", minLength: 100 },
        { id: "leitr_review", question: "Provide your LEITR proof: what you learned, explained from memory, implemented, and your 1-day, 3-day, and 7-day review dates.", type: "text", expectedKeywords: ["1 day", "3 days", "7 days"], minLength: 120 }
      ];
    }
    if (index === 4) {
      return [
        { id: "trigger_callout_restrictions", question: "Explain why HTTP callouts are prohibited inside synchronous Apex triggers and how to bypass this rule.", type: "text", minLength: 100 },
        { id: "client_class", question: "Provide the exact name of the outbound client class and the unit test mock class you implemented.", type: "text", expectedKeywords: ["studentExamScoresClient"], minLength: 50 },
        { id: "mock_implementation", question: "Explain how HttpCalloutMock is used in unit tests to simulate external HTTP responses without making actual web calls.", type: "text", minLength: 90 },
        { id: "response_handling", question: "Describe how your client class handles different HTTP status codes (e.g. 200 Success, 400 Bad Request, 500 Server Error).", type: "text", minLength: 90 },
        { id: "transaction_limits", question: "State the governor limits governing outbound callouts and explain how your code monitors consumption.", type: "text", minLength: 80 },
        { id: "project_business_flow", question: "Explain the business flow of sending exam scores to the external tracking system and updating the local status.", type: "text", minLength: 100 },
        { id: "leitr_review", question: "Provide your LEITR proof: what you learned, explained from memory, implemented, and your 1-day, 3-day, and 7-day review dates.", type: "text", expectedKeywords: ["1 day", "3 days", "7 days"], minLength: 120 }
      ];
    }
    if (index === 5) {
      return [
        { id: "inbound_security", question: "Explain the default security and sharing context under which custom @RestResource inbound web service classes execute.", type: "text", minLength: 100 },
        { id: "rest_service_class", question: "Provide the exact name of the inbound REST class and the URL mapping namespace annotation.", type: "text", expectedKeywords: ["StudentService"], minLength: 50 },
        { id: "context_variables", question: "Describe how you accessed request payloads, parameters, and headers using the RestContext.request object.", type: "text", minLength: 90 },
        { id: "inbound_routing", question: "Explain how to handle GET, POST, and PUT HTTP actions within the same Apex REST service class.", type: "text", minLength: 90 },
        { id: "exception_mapping", question: "Describe how you trap Apex exceptions and translate them into standard HTTP status codes (e.g. 400, 404, 500) for clients.", type: "text", minLength: 90 },
        { id: "project_integration", question: "Explain how StudentService allows external enrollment systems to update student metrics inside Salesforce.", type: "text", minLength: 100 },
        { id: "leitr_review", question: "Provide your LEITR proof: what you learned, explained from memory, implemented, and your 1-day, 3-day, and 7-day review dates.", type: "text", expectedKeywords: ["1 day", "3 days", "7 days"], minLength: 120 }
      ];
    }
    if (index === 6) {
      return [
        { id: "event_architecture", question: "Explain the architecture of event-driven messaging in Salesforce and how it differs from point-to-point APIs.", type: "text", minLength: 100 },
        { id: "platform_event_name", question: "Provide the exact name of the Platform Event object and any subscription Flow or trigger you created.", type: "text", expectedKeywords: ["StudentStatusChange"], minLength: 50 },
        { id: "publishing_context", question: "Explain the difference between 'Publish Immediately' and 'Publish After Commit' behavior for Platform Events.", type: "text", minLength: 90 },
        { id: "event_subscription", question: "Describe how your subscriber trigger or Flow listens to events and executes downstream business logic asynchronously.", type: "text", minLength: 90 },
        { id: "event_replay", question: "Explain how the Event Bus replay ID enables subscribers to catch up on missed event payloads within 72 hours.", type: "text", minLength: 90 },
        { id: "business_scalability", question: "Explain how StudentStatusChange decouples student profile updates from heavier notification and sync tasks.", type: "text", minLength: 100 },
        { id: "leitr_review", question: "Provide your LEITR proof: what you learned, explained from memory, implemented, and your 1-day, 3-day, and 7-day review dates.", type: "text", expectedKeywords: ["1 day", "3 days", "7 days"], minLength: 120 }
      ];
    }
    if (index === 7) {
      return [
        { id: "governance_framework", question: "Describe the key components of an integration governance framework, focusing on timeouts, logging, and retry logic.", type: "text", minLength: 100 },
        { id: "logging_utility_name", question: "Provide the exact name of your logging service class and the custom integration log sObject.", type: "text", expectedKeywords: ["StudentIntegrationLog"], minLength: 50 },
        { id: "exception_logging", question: "Explain how your code intercepts callout errors and records them in your custom integration log table.", type: "text", minLength: 90 },
        { id: "retry_strategies", question: "Describe how you implemented a retry mechanism (e.g. Queueable Apex or scheduled jobs) to handle transient 503 errors.", type: "text", minLength: 90 },
        { id: "api_limit_monitoring", question: "Explain how outbound and inbound integration calls affect your daily API transaction allocations and how you monitor them.", type: "text", minLength: 90 },
        { id: "platform_robustness", question: "Explain how implementing StudentIntegrationLog improves troubleshooting and uptime for the Integration Engine.", type: "text", minLength: 100 },
        { id: "leitr_review", question: "Provide your LEITR proof: what you learned, explained from memory, implemented, and your 1-day, 3-day, and 7-day review dates.", type: "text", expectedKeywords: ["1 day", "3 days", "7 days"], minLength: 120 }
      ];
    }
    return [];
  })();
  return criteria.map((criterion) => ({ ...criterion, artifactId, moduleNumber: index + 1 }));
}

integrationModules.forEach((module, index) => {
  const stage = integrationStageFor(index);
  const artifact = INTEGRATION_PROJECT_ARTIFACTS[index];
  const previous = integrationModules[index - 1]?.title || "Lightning Web Components integration readiness";
  const next = integrationModules[index + 1]?.title || "Enterprise architecture presentation and system support walkthrough";
  const projectTask = {
    title: `Build ${artifact}`,
    purpose: `Apply ${module.title} to the continuous ${INTEGRATION_PROJECT_NAME}.`,
    artifact,
    objects: ["Student__c", "Course_Enrollment__c", "Integration_Log__c"],
    steps: [
      `Define the integration flow, error scenarios, and authentication for ${artifact}.`,
      "Create or update the Integration metadata or Apex class in your Salesforce DX project.",
      "Write safe, bulkified callout or listener patterns and handle exceptions gracefully.",
      "Verify that permissions, Named Credentials, and remote site settings are securely configured.",
      "Test serialization, parsing, or payload formats with both success and failure cases.",
      "Write unit tests with callout mocks or event assertions to verify behavior.",
      "Execute the integration, monitor event logs, or capture JSON messages in debug console.",
      "Commit your changes with clear deployment, roll-back, and monitoring documentation.",
      "Complete the LEITR review with 1:2 implementation time and 1-day, 3-day, and 7-day review dates."
    ],
    expected: `${artifact} works securely as part of ${INTEGRATION_PROJECT_NAME} with robust error handling, mock test evidence, and clear runtime logs.`,
    evidence: [
      `Source files or payload JSON for ${artifact}.`,
      "HTTP response codes, mock tests, or Platform Event subscription triggers.",
      "Apex debug logs or event bus logs proving transmission.",
      "Security credentials and access permission review notes.",
      "Git commit log with release notes and roll-back strategy.",
      "LEITR proof with Learn, Explain, Implement, Test, and Review evidence."
    ]
  };
  const syllabusContent = `<section class="roadmap-phase-lesson"><div class="roadmap-phase-summary"><span>${stage.title}</span><h5>Module ${index + 1} of 8: ${module.title}</h5><p>${stage.outcome} ${module.description}</p></div><div class="roadmap-topic-grid">${module.points.map(integrationTopicCard).join("")}</div><div class="roadmap-phase-lab"><div><span>Guided Integration lab</span><h6>${projectTask.title}</h6><p>${projectTask.steps.join(" ")}</p></div><div><span>Required evidence</span><h6>Production-ready proof</h6><p>${projectTask.evidence.join(" ")}</p></div></div><div class="roadmap-trailhead"><h6>Supporting Salesforce Integration resources</h6><div>${module.resources.map(([name, url]) => `<a class="trailhead-badge-card" href="${url}" target="_blank" rel="noopener noreferrer"><span>Official resource</span><strong>${name}</strong><small>Open documentation</small></a>`).join("")}</div></div></section>`;
  
  module.subCourse = { id: stage.id, title: stage.title, moduleRange: stage.range, description: stage.outcome };
  module.masteryStage = stage;
  module.richContent = {
    projectConnection: { buildsOn: previous, buildsNow: artifact, preparesNext: next },
    mainSyllabus: { title: "Salesforce Integration Practical Build Syllabus", introduction: "Build production-grade integrations, secure connection endpoints, parse complex payloads, and use LEITR: Learn, Explain, Implement, Test, and Review.", content: syllabusContent },
    moduleGoal: module.description,
    learningOutcomes: module.points,
    simpleExplanation: `<p><strong>${module.title}</strong> teaches backend connectivity depth for Salesforce developers. Build the endpoint connection, format the data payload, mock the service, and handle failures cleanly.</p>`,
    detailedLessonSections: module.points.map((point) => ({ title: point, content: `<p>${point}</p><p>Apply this topic in ${INTEGRATION_PROJECT_NAME}. Explain endpoints, credentials, payloads, retry rules, testing, and support notes.</p>` })),
    keyNotes: [...module.points, "Always use Named Credentials.", "Never put HTTP callouts directly inside triggers.", "Enforce CRUD/FLS/sharing on inbound APIs.", "Provide mock tests for all outbound integrations."],
    flashcards: module.questions.map((question, questionIndex) => ({ front: question, back: module.points[questionIndex % module.points.length] })),
    realBusinessExample: `<p>TomCodeX uses ${INTEGRATION_PROJECT_NAME} to import student enrollment bulk files, query external attendance REST endpoints, publish status events, and trace errors in a central logger.</p>`,
    whereUsed: `<p>Use this skill in Apex REST services, outbound HTTP callout classes, Platform Event triggers, Named Credentials configs, Change Sets, and CI/CD pipelines.</p>`,
    stepByStepImplementation: projectTask.steps,
    trailheadPractice: { title: `Official practice for ${module.title}`, purpose: "Complete the resource, then implement the same capability in the TomCodeX Integration project.", resources: module.resources, tasks: module.practice },
    projectName: INTEGRATION_PROJECT_NAME,
    projectTask,
    projectEvidence: projectTask.evidence,
    bestPractices: ["Avoid hardcoding credentials.", "Utilize callout mocks for unit tests.", "Handle transient network timeouts gracefully.", "Decouple heavy integrations via events.", "Keep robust debug logs for auditability."],
    commonMistakes: ["Putting callouts in loops.", "Hardcoding client secrets.", "Neglecting inbound REST authentication.", "Skipping retry handler setups.", "Ignoring HTTP response status code validation."],
    whyMattersInJob: `<p>Salesforce developers must connect the CRM securely with third-party databases, billing engines, and external portals, requiring standard-compliant integration architectures.</p>`,
    interviewQuestions: module.questions,
    practicalAssignment: [...module.practice, ...projectTask.steps],
    knowledgeCheckQuestions: module.questions,
    completionChecklist: [`I completed ${projectTask.title}.`, "I completed the official integration resources.", "I captured source files, REST responses, mock tests, and logs.", "I followed LEITR with at least 2 hours implementing for every 1 hour learning."],
    finalSummary: `You completed ${module.title} and added ${artifact} to ${INTEGRATION_PROJECT_NAME}.`,
    masteryPreparationQuestions: module.questions,
    handsOnLab: { title: projectTask.title, instructions: `<p>${projectTask.purpose}</p><ol>${projectTask.steps.map((step) => `<li>${step}</li>`).join("")}</ol>` },
    labCriteria: integrationLabCriteria(module, projectTask, index),
    masteryEvaluationCriteria: ["Correct REST/SOAP endpoint configuration", "Secure authentication via Named Credentials", "Accurate JSON serialization and parsing", "Reliable mock test implementations", "Proper governance and retry structures"],
    masteryTest: integrationMasteryTest(module, projectTask)
  };
});

window.TomCodexCourseConfig = {
  modules: integrationModules,
  subCourses: INTEGRATION_DEVELOPMENT_STAGES,
  masteryKey: "tomcodex.integrationMasteryScores.v1",
  courseName: "Salesforce Integration",
  recordLabel: "Integration",
  moduleHours: 3
};
