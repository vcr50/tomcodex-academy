const apexModules = [
  { title: "Apex and the Salesforce Runtime", description: "Understand when Apex is needed, how it runs on the Salesforce platform, and how governor limits shape every solution.", points: ["Explain multitenancy, transactions, execution contexts, and governor limits.", "Choose between declarative automation and Apex based on requirements.", "Use Developer Console, VS Code, Salesforce CLI, and anonymous Apex."], resources: [["Apex Basics & Database Trailhead", "https://trailhead.salesforce.com/content/learn/modules/apex_database"], ["Apex Developer Guide", "https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/"], ["Salesforce CLI", "https://developer.salesforce.com/tools/salesforcecli"]], practice: ["Set up a Salesforce DX project and connect a scratch or Developer Edition org.", "Run anonymous Apex that creates and queries sample records.", "Document governor limits encountered in a transaction."], questions: ["Why does Salesforce enforce governor limits?", "When should Flow be preferred over Apex?", "What is an Apex transaction?"] },
  { title: "Apex Language Fundamentals", description: "Write readable Apex using variables, collections, control flow, methods, classes, and object-oriented principles.", points: ["Use primitives, sObjects, List, Set, Map, enums, and control statements.", "Design methods with clear parameters, return types, and access modifiers.", "Apply classes, interfaces, inheritance, and exception handling appropriately."], resources: [["Apex Basics Trailhead", "https://trailhead.salesforce.com/content/learn/modules/apex_database/apex_database_intro"], ["Apex Reference Guide", "https://developer.salesforce.com/docs/atlas.en-us.apexref.meta/apexref/"], ["Apex Recipes", "https://github.com/trailheadapps/apex-recipes"]], practice: ["Create an IncidentPriorityService class.", "Use a Map to group incidents by account.", "Add custom exceptions for invalid service inputs."], questions: ["When should you use a Set instead of a List?", "What does the static keyword mean in Apex?", "How should exceptions be handled?"] },
  { title: "SOQL, SOSL, and Data Access", description: "Retrieve Salesforce data efficiently with selective queries, relationships, aggregates, and search.", points: ["Write SOQL filters, ordering, limits, aggregates, and relationship queries.", "Use SOSL for text search across multiple objects.", "Avoid queries in loops and understand query selectivity."], resources: [["SOQL Trailhead", "https://trailhead.salesforce.com/content/learn/modules/apex_database/apex_database_soql"], ["SOQL and SOSL Reference", "https://developer.salesforce.com/docs/atlas.en-us.soql_sosl.meta/soql_sosl/"], ["Query Plan Tool", "https://help.salesforce.com/s/articleView?id=sf.perfQuery.htm&type=5"]], practice: ["Query Accounts with related Contacts.", "Build an aggregate query for incidents by status.", "Use SOSL to search Accounts, Contacts, and Leads."], questions: ["SOQL versus SOSL?", "Why are selective queries important?", "How do relationship queries work?"] },
  { title: "DML and Transaction Control", description: "Create, update, delete, restore, and safely coordinate Salesforce records in Apex.", points: ["Use DML statements and Database methods.", "Handle partial success with SaveResult.", "Use savepoints, rollback, and transaction boundaries."], resources: [["DML Trailhead", "https://trailhead.salesforce.com/content/learn/modules/apex_database/apex_database_dml"], ["Apex DML Guide", "https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_dml.htm"], ["Database Class Reference", "https://developer.salesforce.com/docs/atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm"]], practice: ["Insert and update incidents using Database methods.", "Capture and report partial DML failures.", "Rollback a multi-record operation when a critical validation fails."], questions: ["DML statements versus Database methods?", "When should partial success be allowed?", "What does rollback restore?"] },
  { title: "Triggers and Order of Execution", description: "Build reliable trigger automation that behaves correctly across Salesforce execution contexts.", points: ["Use before and after trigger events and context variables.", "Understand Salesforce order of execution and recursion risks.", "Keep triggers thin by delegating logic to handler classes."], resources: [["Apex Triggers Trailhead", "https://trailhead.salesforce.com/content/learn/modules/apex_triggers"], ["Order of Execution", "https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_triggers_order_of_execution.htm"], ["Apex Trigger Guide", "https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_triggers.htm"]], practice: ["Create an Incident trigger and handler.", "Prevent invalid status transitions in a before-update context.", "Trace an update through the order of execution."], questions: ["Before trigger versus after trigger?", "Why use a trigger handler?", "How can trigger recursion occur?"] },
  { title: "Bulkification and Governor Limits", description: "Make Apex safe for large data volumes and shared platform limits.", points: ["Process record collections instead of single records.", "Move SOQL and DML outside loops.", "Measure CPU, heap, query, DML, and row consumption."], resources: [["Bulk Apex Triggers Trailhead", "https://trailhead.salesforce.com/content/learn/modules/apex_triggers/apex_triggers_bulk"], ["Governor Limits", "https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_gov_limits.htm"], ["Apex Best Practices", "https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_triggers_bestpract.htm"]], practice: ["Refactor a non-bulkified trigger.", "Process 200 records in one transaction.", "Create a limit-monitoring debug checklist."], questions: ["Why must triggers support 200 records?", "What causes Too many SOQL queries?", "How do Maps improve bulk processing?"] },
  { title: "Apex Testing and Test Data", description: "Write maintainable tests that prove behavior, protect deployments, and cover positive and negative scenarios.", points: ["Use @isTest, test setup, assertions, and test data factories.", "Test bulk, negative, permission, and asynchronous scenarios.", "Use Test.startTest, Test.stopTest, mocks, and dependency isolation."], resources: [["Apex Testing Trailhead", "https://trailhead.salesforce.com/content/learn/modules/apex_testing"], ["Apex Testing Guide", "https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_testing.htm"], ["ApexMocks", "https://github.com/apex-enterprise-patterns/fflib-apex-mocks"]], practice: ["Create a reusable test data factory.", "Write tests for an Incident trigger handler.", "Test a failed DML path and an asynchronous job."], questions: ["Why is code coverage not enough?", "What belongs in Test.startTest and stopTest?", "How do tests avoid org data dependency?"] },
  { title: "Asynchronous Apex", description: "Process work outside the request transaction using future, queueable, batch, and scheduled Apex.", points: ["Choose the correct asynchronous Apex pattern.", "Chain Queueable jobs and monitor AsyncApexJob.", "Design Batch Apex for large data volumes and retries."], resources: [["Asynchronous Apex Trailhead", "https://trailhead.salesforce.com/content/learn/modules/asynchronous_apex"], ["Async Apex Guide", "https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_async_overview.htm"], ["Queueable Apex", "https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_queueing_jobs.htm"]], practice: ["Create a Queueable incident enrichment job.", "Build a Batch Apex archival process.", "Schedule and monitor a nightly maintenance job."], questions: ["Future versus Queueable?", "When should Batch Apex be used?", "How do you monitor asynchronous failures?"] },
  { title: "Integrations and HTTP Callouts", description: "Connect Salesforce securely to external REST services and handle resilient integration workflows.", points: ["Use Named Credentials, HttpRequest, HttpResponse, and JSON serialization.", "Design callout error handling, retries, and observability.", "Test integrations with HttpCalloutMock."], resources: [["Apex Integration Services Trailhead", "https://trailhead.salesforce.com/content/learn/modules/apex_integration_services"], ["Apex Callouts Guide", "https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_callouts.htm"], ["Named Credentials", "https://help.salesforce.com/s/articleView?id=sf.named_credentials_about.htm&type=5"]], practice: ["Call a REST endpoint through a Named Credential.", "Deserialize a JSON response into Apex classes.", "Test success, timeout, and error responses with mocks."], questions: ["Why use Named Credentials?", "How are callouts tested?", "What makes an integration resilient?"] },
  { title: "Secure Apex and Sharing", description: "Enforce object, field, record, and user-mode security in custom code.", points: ["Apply with sharing, without sharing, and inherited sharing correctly.", "Enforce CRUD/FLS with user-mode operations and stripInaccessible.", "Prevent injection and protect sensitive data."], resources: [["Secure Server-Side Development Trailhead", "https://trailhead.salesforce.com/content/learn/modules/secure-serverside-development"], ["Apex Security Guide", "https://developer.salesforce.com/docs/platform/lwc/guide/apex-security"], ["Salesforce Security", "https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_security.htm"]], practice: ["Audit an Apex service for CRUD, FLS, and sharing.", "Refactor dynamic SOQL to prevent injection.", "Test the service with users having different permissions."], questions: ["What does with sharing enforce?", "How do user-mode operations improve security?", "How is SOQL injection prevented?"] },
  { title: "Apex Architecture and Patterns", description: "Structure larger codebases using service, selector, domain, dependency, and error-handling patterns.", points: ["Separate trigger, domain, service, selector, and integration responsibilities.", "Use dependency injection and interfaces for testability.", "Design logging, error handling, and maintainable public APIs."], resources: [["Apex Enterprise Patterns", "https://trailhead.salesforce.com/content/learn/modules/apex_patterns_sl"], ["Apex Enterprise Patterns Library", "https://github.com/apex-enterprise-patterns/fflib-apex-common"], ["Apex Recipes", "https://github.com/trailheadapps/apex-recipes"]], practice: ["Refactor Incident logic into service and selector classes.", "Inject an integration dependency for isolated testing.", "Create a centralized application logger."], questions: ["Why separate selectors from services?", "What does dependency injection solve?", "How do patterns improve team delivery?"] },
  { title: "Deployment and Apex Capstone", description: "Deliver a production-ready Apex solution through source control, validation, testing, and operational review.", points: ["Use Salesforce DX source format, Git, validation deployments, and CI concepts.", "Review code quality, security, performance, tests, and documentation.", "Operate and improve Apex after release.", "Build a production-ready Apex capstone."], resources: [["Application Lifecycle Management", "https://trailhead.salesforce.com/content/learn/modules/application-lifecycle-and-development-models"], ["Salesforce CLI Docs", "https://developer.salesforce.com/tools/salesforcecli"], ["Code Analyzer", "https://developer.salesforce.com/docs/platform/salesforce-code-analyzer/overview"]], practice: ["Build an Incident Management Apex capstone with trigger, service, async job, integration, and tests.", "Run code analysis and fix high-priority findings.", "Create a deployment, rollback, and production-support plan."], questions: ["What makes Apex production-ready?", "What belongs in deployment validation?", "How should Apex be monitored after release?"] }
];

const APEX_PROJECT_NAME = "TomCodeX Incident Response Platform";
const APEX_PROJECT_ARTIFACTS = [
  "IncidentRuntimeProbe anonymous Apex script",
  "IncidentPriorityService class",
  "IncidentQueryService class",
  "IncidentDmlService class",
  "IncidentTrigger and IncidentTriggerHandler",
  "IncidentBulkProcessor service",
  "IncidentTestDataFactory and test suite",
  "IncidentEnrichmentQueueable and IncidentArchiveBatch",
  "IncidentExternalStatusClient callout service",
  "IncidentSecurityService",
  "IncidentApplicationService architecture layer",
  "Incident Response Apex Capstone release"
];

const APEX_DEVELOPMENT_STAGES = [
  { id: "foundation", title: "Stage 1: Apex Foundations", range: "Modules 1-3", outcome: "Set up the runtime, language fundamentals, SOQL, SOSL, and safe data access." },
  { id: "automation", title: "Stage 2: Apex Automation", range: "Modules 4-6", outcome: "Build DML, trigger, bulkification, and governor-limit safe automation." },
  { id: "production", title: "Stage 3: Production Apex", range: "Modules 7-9", outcome: "Prove behavior with tests, async processing, and secure integrations." },
  { id: "architecture", title: "Stage 4: Apex Architecture and Release", range: "Modules 10-12", outcome: "Apply secure Apex, architecture patterns, deployment, and capstone release practices." }
];

function apexStageFor(index) {
  return APEX_DEVELOPMENT_STAGES[Math.floor(index / 3)];
}

function apexTopicCard(topic, index) {
  return `<article class="roadmap-topic-card"><span>${String(index + 1).padStart(2, "0")}</span><div><h6>${topic}</h6><p><strong>Implementation focus:</strong> Apply this topic in Apex code for the continuous incident-response project.</p><p><strong>Required proof:</strong> Submit code, tests, command output, and a short explanation of security, limits, and behavior.</p></div></article>`;
}

function apexMasteryTest(module, projectTask) {
  const correct = [...module.points, ...module.practice, projectTask.expected].slice(0, 10);
  while (correct.length < 10) correct.push(`Apply ${module.title} using secure, bulkified, tested Apex practices.`);
  const mcqs = correct.map((answer, index) => ({
    type: "mcq",
    question: `Which statement best proves job-ready Apex understanding for topic ${index + 1}?`,
    options: [answer, "Deploy directly to production without tests.", "Ignore CRUD, FLS, sharing, and governor limits.", "Write code that only works for one record."],
    answer
  }));
  const scenarios = module.questions.slice(0, 3).map((question) => ({ type: "scenario", question: `Apex scenario: ${question} Explain the implementation choice, risk, test plan, and production support approach.` }));
  return [...mcqs, ...scenarios, { type: "practical", question: `Explain how you built and tested ${projectTask.title}.` }, { type: "practical", question: `Describe the evidence proving this expected result: ${projectTask.expected}` }];
}

function apexLabCriteria(module, projectTask, index) {
  const artifactId = projectTask.artifact.toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_|_$/g, "");
  const criteria = (() => {
    if (index === 0) {
      return [
        { id: "runtime_multitenancy", question: "Explain how Salesforce's multitenant architecture and execution contexts necessitate governor limits.", type: "text", minLength: 90 },
        { id: "automation_choice", question: "Describe your criteria for choosing between Flow and Apex for a business requirement.", type: "text", minLength: 80 },
        { id: "script_name", question: "Provide the exact name of the anonymous Apex script you created to probe the runtime.", type: "text", expectedKeywords: ["IncidentRuntimeProbe"], minLength: 50 },
        { id: "limit_measurement", question: "Describe the specific governor limits (e.g. CPU time, Heap size) you monitored and measured during execution.", type: "text", minLength: 100 },
        { id: "developer_tools", question: "Share the Developer Console or VS Code command output proving you ran the anonymous script.", type: "text", minLength: 90 },
        { id: "project_impact", question: "Explain how probing the runtime prepares you for building the Incident Response Platform.", type: "text", minLength: 100 },
        { id: "leitr_review", question: "Provide your LEITR proof: what you learned, explained from memory, implemented, and your 1-day, 3-day, and 7-day review dates.", type: "text", expectedKeywords: ["1 day", "3 days", "7 days"], minLength: 120 }
      ];
    }
    if (index === 1) {
      return [
        { id: "collection_choices", question: "Explain when to use a Set or a Map instead of a List in Apex, citing one incident example.", type: "text", minLength: 90 },
        { id: "service_class", question: "Provide the exact name of the priority service class and any helper classes you created.", type: "text", expectedKeywords: ["IncidentPriorityService"], minLength: 50 },
        { id: "static_concept", question: "Explain the meaning and use of the static keyword for variables and methods in your service class.", type: "text", minLength: 90 },
        { id: "custom_exceptions", question: "How did you design and throw custom exceptions to handle invalid inputs or state transitions in the service?", type: "text", minLength: 90 },
        { id: "unit_execution", question: "Share the execute anonymous script or debug log output that verifies your class methods work correctly.", type: "text", minLength: 90 },
        { id: "project_integration", question: "Describe how IncidentPriorityService determines priority and groups incidents by Account.", type: "text", minLength: 100 },
        { id: "leitr_review", question: "Provide your LEITR proof: what you learned, explained from memory, implemented, and your 1-day, 3-day, and 7-day review dates.", type: "text", expectedKeywords: ["1 day", "3 days", "7 days"], minLength: 120 }
      ];
    }
    if (index === 2) {
      return [
        { id: "query_selectivity", question: "Explain why selective queries are critical in SOQL and how they prevent query limit errors.", type: "text", minLength: 90 },
        { id: "query_class", question: "Provide the exact name of the query service class you created to handle data access.", type: "text", expectedKeywords: ["IncidentQueryService"], minLength: 50 },
        { id: "soql_vs_sosl", question: "Describe when to use SOSL instead of SOQL, citing how your class implements both.", type: "text", minLength: 90 },
        { id: "relationship_queries", question: "Explain the syntax and behavior of parent-to-child and child-to-parent relationship queries in your service.", type: "text", minLength: 100 },
        { id: "aggregate_analysis", question: "Describe the aggregate query you configured to summarize incidents by status.", type: "text", minLength: 80 },
        { id: "project_value", question: "Explain how centralizing queries in IncidentQueryService improves the maintenance of the Incident Response Platform.", type: "text", minLength: 100 },
        { id: "leitr_review", question: "Provide your LEITR proof: what you learned, explained from memory, implemented, and your 1-day, 3-day, and 7-day review dates.", type: "text", expectedKeywords: ["1 day", "3 days", "7 days"], minLength: 120 }
      ];
    }
    if (index === 3) {
      return [
        { id: "dml_options", question: "Compare using standard DML statements (e.g. insert) with Database methods (e.g. Database.insert), highlighting error handling differences.", type: "text", minLength: 100 },
        { id: "dml_class", question: "Provide the exact name of the DML service class you built to manage record modifications.", type: "text", expectedKeywords: ["IncidentDmlService"], minLength: 50 },
        { id: "partial_success", question: "Explain how you processed Database.SaveResult to handle partial successes and log specific failures.", type: "text", minLength: 90 },
        { id: "transaction_control", question: "Describe how you used Savepoints and rollbacks to maintain database integrity across multi-record operations.", type: "text", minLength: 100 },
        { id: "limits_monitoring", question: "Explain the governor limits associated with DML operations and how your code monitors them.", type: "text", minLength: 80 },
        { id: "platform_business", question: "Describe the business scenario where IncidentDmlService rolls back changes if a critical validation fails.", type: "text", minLength: 100 },
        { id: "leitr_review", question: "Provide your LEITR proof: what you learned, explained from memory, implemented, and your 1-day, 3-day, and 7-day review dates.", type: "text", expectedKeywords: ["1 day", "3 days", "7 days"], minLength: 120 }
      ];
    }
    if (index === 4) {
      return [
        { id: "execution_order", question: "Explain where Apex triggers run in the Salesforce Order of Execution and how that affects field updates.", type: "text", minLength: 100 },
        { id: "trigger_names", question: "Provide the exact names of the trigger and the trigger handler class you implemented.", type: "text", expectedKeywords: ["IncidentTrigger", "IncidentTriggerHandler"], minLength: 50 },
        { id: "recursion_handling", question: "Describe the static variable pattern or framework you used to prevent trigger recursion during updates.", type: "text", minLength: 90 },
        { id: "context_variables", question: "List the trigger context variables (e.g. Trigger.new, Trigger.oldMap) you utilized and explain their purpose.", type: "text", minLength: 80 },
        { id: "handler_benefits", question: "Why is it an architectural best practice to keep triggers logic-less and delegate to handler classes?", type: "text", minLength: 80 },
        { id: "business_rules", question: "Describe the validation or status transition rules enforced in your before-update trigger context.", type: "text", minLength: 100 },
        { id: "leitr_review", question: "Provide your LEITR proof: what you learned, explained from memory, implemented, and your 1-day, 3-day, and 7-day review dates.", type: "text", expectedKeywords: ["1 day", "3 days", "7 days"], minLength: 120 }
      ];
    }
    if (index === 5) {
      return [
        { id: "bulkification_rules", question: "State the core rules of Apex bulkification regarding SOQL queries, DML statements, and loops.", type: "text", minLength: 100 },
        { id: "processor_class", question: "Provide the exact name of the bulk processing service class you developed.", type: "text", expectedKeywords: ["IncidentBulkProcessor"], minLength: 50 },
        { id: "collection_efficiency", question: "Describe how your code uses Maps and Sets to perform efficient bulk matching without nested loops.", type: "text", minLength: 90 },
        { id: "limit_analysis", question: "List the specific governor limits (queries, DML rows, heap) consumed during a 200-record test transaction.", type: "text", minLength: 90 },
        { id: "profiling_output", question: "Share the debug log details or limit monitoring statement proving that your class runs safely under bulk conditions.", type: "text", minLength: 90 },
        { id: "business_scalability", question: "Explain how IncidentBulkProcessor scales the platform's ability to handle high-frequency incoming incidents.", type: "text", minLength: 100 },
        { id: "leitr_review", question: "Provide your LEITR proof: what you learned, explained from memory, implemented, and your 1-day, 3-day, and 7-day review dates.", type: "text", expectedKeywords: ["1 day", "3 days", "7 days"], minLength: 120 }
      ];
    }
    if (index === 6) {
      return [
        { id: "testing_standards", question: "Explain why high code coverage is not sufficient, and what makes a high-quality unit test assertion.", type: "text", minLength: 100 },
        { id: "factory_class", question: "Provide the exact names of your test data factory class and the trigger handler test class.", type: "text", expectedKeywords: ["IncidentTestDataFactory"], minLength: 50 },
        { id: "data_isolation", question: "Describe how you used @testSetup to isolate test data creation and speed up test execution.", type: "text", minLength: 80 },
        { id: "transaction_isolation", question: "Explain the purpose of Test.startTest() and Test.stopTest() in resetting governor limits and testing async operations.", type: "text", expectedKeywords: ["Test.startTest"], minLength: 90 },
        { id: "negative_testing", question: "Describe at least one negative test case and one bulk test case in your test suite.", type: "text", minLength: 100 },
        { id: "test_results", question: "Provide the CLI command or developer console output showing all tests passed with code coverage details.", type: "text", minLength: 90 },
        { id: "leitr_review", question: "Provide your LEITR proof: what you learned, explained from memory, implemented, and your 1-day, 3-day, and 7-day review dates.", type: "text", expectedKeywords: ["1 day", "3 days", "7 days"], minLength: 120 }
      ];
    }
    if (index === 7) {
      return [
        { id: "async_patterns", question: "Compare Future methods, Queueable Apex, and Batch Apex, outlining when to use each.", type: "text", minLength: 100 },
        { id: "async_classes", question: "Provide the exact names of the Queueable and Batch Apex classes you configured.", type: "text", expectedKeywords: ["IncidentEnrichmentQueueable", "IncidentArchiveBatch"], minLength: 50 },
        { id: "queueable_chaining", question: "Describe how you chained Queueable jobs or passed state between transaction contexts.", type: "text", minLength: 80 },
        { id: "batch_execution", question: "Explain the start, execute, and finish lifecycle of your Batch archival class, including its batch size.", type: "text", minLength: 90 },
        { id: "monitoring_jobs", question: "Describe how you monitored execution or caught errors using the AsyncApexJob table.", type: "text", minLength: 80 },
        { id: "async_business", question: "Describe the business benefits of running incident enrichment asynchronously compared to in the trigger transaction.", type: "text", minLength: 100 },
        { id: "leitr_review", question: "Provide your LEITR proof: what you learned, explained from memory, implemented, and your 1-day, 3-day, and 7-day review dates.", type: "text", expectedKeywords: ["1 day", "3 days", "7 days"], minLength: 120 }
      ];
    }
    if (index === 8) {
      return [
        { id: "named_credentials", question: "Explain the security and maintenance benefits of Named Credentials over hardcoded API endpoints and headers.", type: "text", expectedKeywords: ["Named Credentials"], minLength: 90 },
        { id: "callout_class", question: "Provide the exact name of the integration client class and the test mock class you created.", type: "text", expectedKeywords: ["IncidentExternalStatusClient"], minLength: 50 },
        { id: "json_handling", question: "Describe how your code serializes request payloads and deserializes JSON response structures.", type: "text", minLength: 80 },
        { id: "mock_testing", question: "Explain how your unit tests verify integration success, timeout, and error states using HttpCalloutMock.", type: "text", expectedKeywords: ["HttpCalloutMock"], minLength: 90 },
        { id: "resiliency_observability", question: "Describe how your integration handles connection retries and logs failure states in the database.", type: "text", minLength: 90 },
        { id: "business_flow", question: "Explain the business flow of syncing incident status with the external tracking system.", type: "text", minLength: 100 },
        { id: "leitr_review", question: "Provide your LEITR proof: what you learned, explained from memory, implemented, and your 1-day, 3-day, and 7-day review dates.", type: "text", expectedKeywords: ["1 day", "3 days", "7 days"], minLength: 120 }
      ];
    }
    if (index === 9) {
      return [
        { id: "sharing_keywords", question: "Explain the security behaviors of with sharing, without sharing, and inherited sharing in custom classes.", type: "text", minLength: 100 },
        { id: "security_class", question: "Provide the exact name of the security service or helper class you built to audit/enforce permissions.", type: "text", expectedKeywords: ["IncidentSecurityService"], minLength: 50 },
        { id: "field_security", question: "Describe how your code enforces CRUD/FLS checks dynamically using Security.stripInaccessible or user-mode SOQL.", type: "text", expectedKeywords: ["stripInaccessible"], minLength: 100 },
        { id: "injection_mitigation", question: "Explain the risk of SOQL injection in dynamic queries and how you protected your code against it.", type: "text", minLength: 90 },
        { id: "permission_tests", question: "Describe how you tested the security service as a restricted user to verify that unauthorized access is blocked.", type: "text", minLength: 90 },
        { id: "business_protection", question: "Explain how enforcing field-level security prevents sensitive incident fields from leaking to unauthorized staff.", type: "text", minLength: 100 },
        { id: "leitr_review", question: "Provide your LEITR proof: what you learned, explained from memory, implemented, and your 1-day, 3-day, and 7-day review dates.", type: "text", expectedKeywords: ["1 day", "3 days", "7 days"], minLength: 120 }
      ];
    }
    if (index === 10) {
      return [
        { id: "pattern_benefits", question: "Explain the benefits of separating code into trigger, domain, selector, and service layers (Apex Enterprise Patterns).", type: "text", minLength: 100 },
        { id: "architecture_classes", question: "Provide the exact names of the service and selector classes you created or refactored.", type: "text", expectedKeywords: ["IncidentApplicationService"], minLength: 50 },
        { id: "selector_design", question: "Describe the design of your selector class and how it ensures query consistency and bulk safety.", type: "text", minLength: 90 },
        { id: "logging_design", question: "Explain how your architecture handles logging and error aggregation via a centralized application logger.", type: "text", minLength: 90 },
        { id: "dependency_injection", question: "Explain how dependency injection or interface mocking improves unit testing isolation for your service layer.", type: "text", minLength: 90 },
        { id: "platform_robustness", question: "Describe how implementing architectural patterns makes the Incident Response Platform easier to maintain.", type: "text", minLength: 100 },
        { id: "leitr_review", question: "Provide your LEITR proof: what you learned, explained from memory, implemented, and your 1-day, 3-day, and 7-day review dates.", type: "text", expectedKeywords: ["1 day", "3 days", "7 days"], minLength: 120 }
      ];
    }
    if (index === 11) {
      return [
        { id: "deployment_lifecycle", question: "Describe the deployment lifecycle of Apex code from a scratch org through Git/CI pipelines to production.", type: "text", minLength: 100 },
        { id: "release_packages", question: "Provide the package name or validation deployment job details for your capstone project release.", type: "text", expectedKeywords: ["Incident"], minLength: 50 },
        { id: "code_analyzer", question: "Describe the results of running Salesforce Code Analyzer on your codebase and what issues you corrected.", type: "text", minLength: 90 },
        { id: "rollback_strategy", question: "Explain your rollback plan, backup verify steps, and production monitoring strategy post-release.", type: "text", minLength: 90 },
        { id: "verification_check", question: "What post-activation checks did you perform to verify that the integrated triggers, queues, and callouts work correctly in production?", type: "text", minLength: 90 },
        { id: "capstone_business", question: "Describe the overall business value that the completed Incident Response capstone delivers to the enterprise.", type: "text", minLength: 100 },
        { id: "leitr_review", question: "Provide your LEITR proof: what you learned, explained from memory, implemented, and your 1-day, 3-day, and 7-day review dates.", type: "text", expectedKeywords: ["1 day", "3 days", "7 days"], minLength: 120 }
      ];
    }
    return [];
  })();
  return criteria.map((criterion) => ({ ...criterion, artifactId, moduleNumber: index + 1 }));
}

apexModules.forEach((module, index) => {
  const stage = apexStageFor(index);
  const artifact = APEX_PROJECT_ARTIFACTS[index];
  const previous = apexModules[index - 1]?.title || "Salesforce Administrator foundation";
  const next = apexModules[index + 1]?.title || "Developer capstone presentation and continuous improvement";
  const projectTask = {
    title: `Build ${artifact}`,
    purpose: `Apply ${module.title} to the continuous ${APEX_PROJECT_NAME}.`,
    artifact,
    objects: ["Incident__c", "Account", "Contact", "Task", "Integration_Log__c"],
    steps: [
      `Define the business requirement and acceptance criteria for ${artifact}.`,
      "Create or update the Apex code in a safe practice org or Salesforce DX project.",
      "Use clear names, small methods, meaningful comments only where helpful, and consistent error handling.",
      "Apply bulk-safe SOQL and DML patterns and avoid single-record assumptions.",
      "Review CRUD, FLS, sharing, secrets, and data exposure risks.",
      "Write or update automated tests with meaningful assertions.",
      "Run the code, tests, or validation command and capture the output.",
      "Commit the focused change and document deployment, rollback, monitoring, and support notes.",
      "Complete the LEITR review with 1:2 implementation time and 1-day, 3-day, and 7-day review dates."
    ],
    expected: `${artifact} works as part of ${APEX_PROJECT_NAME} with secure behavior, passing tests, bulk-safe execution, and clear operational evidence.`,
    evidence: [
      `Source code for ${artifact}.`,
      "Automated test class or test method names with assertion summary.",
      "Anonymous Apex, CLI, debug log, test result, or validation output.",
      "Security and governor-limit review notes.",
      "Git commit or change summary with deployment and rollback notes.",
      "LEITR proof with Learn, Explain, Implement, Test, and Review evidence."
    ]
  };
  const syllabusContent = `<section class="roadmap-phase-lesson"><div class="roadmap-phase-summary"><span>${stage.title}</span><h5>Module ${index + 1} of 12: ${module.title}</h5><p>${stage.outcome} ${module.description}</p></div><div class="roadmap-topic-grid">${module.points.map(apexTopicCard).join("")}</div><div class="roadmap-phase-lab"><div><span>Developer build lab</span><h6>${projectTask.title}</h6><p>${projectTask.steps.join(" ")}</p></div><div><span>Required evidence</span><h6>Production-style proof</h6><p>${projectTask.evidence.join(" ")}</p></div></div><div class="roadmap-trailhead"><h6>Supporting Salesforce developer resources</h6><div>${module.resources.map(([name, url]) => `<a class="trailhead-badge-card" href="${url}" target="_blank" rel="noopener noreferrer"><span>Official or trusted resource</span><strong>${name}</strong><small>Open resource</small></a>`).join("")}</div></div></section>`;
  module.subCourse = { id: stage.id, title: stage.title, moduleRange: stage.range, description: stage.outcome };
  module.masteryStage = stage;
  module.richContent = {
    projectConnection: { buildsOn: previous, buildsNow: artifact, preparesNext: next },
    mainSyllabus: { title: "Apex Development Practical Build Syllabus", introduction: "This is the dedicated Salesforce developer path. Build production-style Apex, prove behavior with tests, and use LEITR: Learn, Explain, Implement, Test, and Review.", content: syllabusContent },
    moduleGoal: module.description,
    learningOutcomes: module.points,
    simpleExplanation: `<p><strong>${module.title}</strong> teaches implementation depth for Salesforce developers. Build the concept in code, prove it with tests, and document the operational behavior a production team would need.</p>`,
    detailedLessonSections: module.points.map((point) => ({ title: point, content: `<p>${point}</p><p>Apply this topic in ${APEX_PROJECT_NAME}. Explain the code path, limits, security behavior, tests, deployment impact, and support notes.</p>` })),
    keyNotes: [...module.points, "Write Apex for bulk data, security, tests, deployment, and support from the beginning.", "Do not duplicate Admin awareness lessons; this course owns implementation depth."],
    flashcards: module.questions.map((question, questionIndex) => ({ front: question, back: module.points[questionIndex % module.points.length] })),
    realBusinessExample: `<p>TomCodeX uses ${APEX_PROJECT_NAME} to triage incidents, enrich records, call external services, apply secure automation, and release changes through a controlled developer workflow.</p>`,
    whereUsed: `<p>Use this skill in Apex classes, triggers, tests, async jobs, integrations, Salesforce DX projects, pull requests, and production support.</p>`,
    stepByStepImplementation: projectTask.steps,
    trailheadPractice: { title: `Official practice for ${module.title}`, purpose: "Complete the resource, then implement the same capability in the TomCodeX Apex project.", resources: module.resources, tasks: module.practice },
    projectName: APEX_PROJECT_NAME,
    projectTask,
    projectEvidence: projectTask.evidence,
    bestPractices: ["Bulkify every data path.", "Write meaningful assertions, not coverage-only tests.", "Enforce security intentionally.", "Use small services and clear boundaries.", "Capture deployment and rollback notes."],
    commonMistakes: ["Writing code for only one record.", "Putting SOQL or DML inside loops.", "Skipping negative and bulk tests.", "Ignoring CRUD, FLS, sharing, secrets, and logs.", "Deploying without rollback and monitoring plans."],
    whyMattersInJob: `<p>Salesforce developers are expected to deliver secure, tested, maintainable code that survives bulk data, integrations, deployment gates, and production support.</p>`,
    interviewQuestions: module.questions,
    practicalAssignment: [...module.practice, ...projectTask.steps],
    knowledgeCheckQuestions: module.questions,
    completionChecklist: [`I completed ${projectTask.title}.`, "I completed the official developer resources.", "I captured source, tests, command output, security review, and deployment evidence.", "I followed LEITR with at least 2 hours implementing for every 1 hour learning."],
    finalSummary: `You completed ${module.title} and added ${artifact} to ${APEX_PROJECT_NAME}.`,
    masteryPreparationQuestions: module.questions,
    handsOnLab: { title: projectTask.title, instructions: `<p>${projectTask.purpose}</p><ol>${projectTask.steps.map((step) => `<li>${step}</li>`).join("")}</ol>` },
    labCriteria: apexLabCriteria(module, projectTask, index),
    masteryEvaluationCriteria: ["Correct Apex concept usage", "Bulk-safe and governor-limit aware design", "Security enforcement", "Meaningful tests and assertions", "Production deployment and support readiness"],
    masteryTest: apexMasteryTest(module, projectTask)
  };
});

window.TomCodexCourseConfig = {
  modules: apexModules,
  subCourses: APEX_DEVELOPMENT_STAGES,
  masteryKey: "tomcodex.apexMasteryScores.v1",
  courseName: "Apex Development",
  recordLabel: "Apex",
  moduleHours: 3
};
