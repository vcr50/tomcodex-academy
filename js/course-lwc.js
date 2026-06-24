const lwcModules = [
  { title: "LWC and Web Platform Foundations", description: "Understand Lightning Web Components, modern web standards, Salesforce UI architecture, and the development toolchain.", points: ["Explain how LWC uses HTML, CSS, JavaScript, and Web Components.", "Compare LWC with Aura and standard Lightning components.", "Set up VS Code, Salesforce CLI, an org, and an LWC project."], resources: [["LWC Basics Trailhead", "https://trailhead.salesforce.com/content/learn/modules/lightning-web-components-basics"], ["LWC Developer Guide", "https://developer.salesforce.com/docs/platform/lwc/guide"], ["Salesforce CLI", "https://developer.salesforce.com/tools/salesforcecli"]], practice: ["Create and deploy a hello-world LWC.", "Inspect the component bundle.", "Document when to configure versus build."], questions: ["Why does LWC use web standards?", "LWC versus Aura?", "What files belong in an LWC bundle?"] },
  { title: "Components, Templates, and Styling", description: "Build reusable components with templates, directives, SLDS, scoped CSS, and accessible markup.", points: ["Use template expressions, conditional rendering, and list rendering.", "Apply SLDS and component-scoped CSS.", "Design accessible semantic interfaces."], resources: [["Create Lightning Web Components", "https://trailhead.salesforce.com/content/learn/modules/lightning-web-components-basics/lightning-web-components-basics-create"], ["SLDS", "https://www.lightningdesignsystem.com/"], ["Accessibility", "https://developer.salesforce.com/docs/platform/lwc/guide/create-components-accessibility.html"]], practice: ["Build a responsive record summary card.", "Render a conditional empty state.", "Audit keyboard and screen-reader behavior."], questions: ["How is LWC CSS scoped?", "Why use SLDS?", "How are lists rendered safely?"] },
  { title: "JavaScript, Reactivity, and Lifecycle", description: "Manage component state and behavior with JavaScript classes, reactive properties, getters, and lifecycle hooks.", points: ["Use properties, getters, methods, and reactive state.", "Choose lifecycle hooks correctly.", "Avoid state mutation and rendering side effects."], resources: [["Reactivity", "https://developer.salesforce.com/docs/platform/lwc/guide/reactivity"], ["Lifecycle Hooks", "https://developer.salesforce.com/docs/platform/lwc/guide/create-lifecycle-hooks"]], practice: ["Build a reactive filtering component.", "Use connected and rendered lifecycle hooks.", "Refactor a component with unsafe state changes."], questions: ["What makes a property reactive?", "When does renderedCallback run?", "Why avoid side effects during rendering?"] },
  { title: "Events and Component Communication", description: "Connect components using public APIs, custom events, composition, and Lightning Message Service.", points: ["Expose public properties and methods with @api.", "Send data upward with custom events.", "Use Lightning Message Service for unrelated components."], resources: [["Component Communication", "https://developer.salesforce.com/docs/platform/lwc/guide/events"], ["Lightning Message Service", "https://developer.salesforce.com/docs/platform/lwc/guide/use-message-channel"]], practice: ["Build parent-child filter communication.", "Create a reusable custom event.", "Synchronize two components with LMS."], questions: ["Properties down and events up means what?", "When should LMS be used?", "How should event contracts be designed?"] },
  { title: "Salesforce Data with Lightning Data Service", description: "Read and edit Salesforce records efficiently using base components, wire adapters, and UI API.", points: ["Use lightning-record forms and Lightning Data Service.", "Read metadata and records with UI API wire adapters.", "Handle loading, errors, refresh, and permissions."], resources: [["Work with Salesforce Data", "https://trailhead.salesforce.com/content/learn/modules/lightning-web-components-and-salesforce-data"], ["UI API", "https://developer.salesforce.com/docs/platform/lwc/guide/reference-lightning-ui-api-record"]], practice: ["Build a record viewer and editor.", "Display object metadata dynamically.", "Refresh data after an update."], questions: ["Why prefer LDS?", "What does the wire service provide?", "How does UI API respect security?"] },
  { title: "Calling Apex from LWC", description: "Use Apex for custom queries, transactions, and business logic while maintaining security and performance.", points: ["Call cacheable Apex with @wire.", "Call Apex imperatively for controlled actions.", "Handle parameters, errors, refresh, and security."], resources: [["Call Apex Methods", "https://developer.salesforce.com/docs/platform/lwc/guide/apex"], ["Apex Security", "https://developer.salesforce.com/docs/platform/lwc/guide/apex-security"]], practice: ["Build a searchable Account list.", "Call an imperative save action.", "Display meaningful server errors."], questions: ["Wired versus imperative Apex?", "Why use cacheable=true?", "How must Apex security be enforced?"] },
  { title: "Forms, Validation, and User Feedback", description: "Create reliable data-entry experiences with validation, errors, toasts, spinners, and clear interaction states.", points: ["Build forms with base input components.", "Apply client and server validation.", "Communicate success, loading, empty, and error states."], resources: [["LWC Input Components", "https://developer.salesforce.com/docs/platform/lightning-component-reference/guide/lightning-input.html"], ["Toast Notifications", "https://developer.salesforce.com/docs/platform/lwc/guide/use-toast"]], practice: ["Build a validated service-request form.", "Add loading and disabled states.", "Show field and page-level errors."], questions: ["Client versus server validation?", "What makes an error actionable?", "Why prevent duplicate submissions?"] },
  { title: "Navigation, Actions, and Salesforce Context", description: "Place components throughout Salesforce and navigate safely between records, lists, apps, and custom destinations.", points: ["Configure component targets and design properties.", "Use NavigationMixin and page references.", "Build record actions, app pages, and utility components."], resources: [["Configure Components", "https://developer.salesforce.com/docs/platform/lwc/guide/use-config-for-app-builder"], ["Navigation", "https://developer.salesforce.com/docs/platform/lwc/guide/use-navigate"]], practice: ["Expose a configurable App Builder component.", "Create a record quick action.", "Navigate to a record and filtered list."], questions: ["What controls where an LWC can be used?", "Why use page references?", "How are design properties configured?"] },
  { title: "Security and Trusted UI Development", description: "Protect users and data using Lightning security, safe DOM practices, permissions, and secure server contracts.", points: ["Understand Lightning Web Security and component isolation.", "Avoid unsafe DOM manipulation and injection.", "Enforce CRUD, FLS, sharing, and secure Apex boundaries."], resources: [["Lightning Web Security", "https://developer.salesforce.com/docs/platform/lightning-components-security/guide/lws-intro.html"], ["Secure Apex", "https://developer.salesforce.com/docs/platform/lwc/guide/apex-security"]], practice: ["Audit a component for injection risks.", "Test with restricted user permissions.", "Refactor an insecure Apex-backed component."], questions: ["What does Lightning Web Security protect?", "Why is innerHTML risky?", "Where must data access security be enforced?"] },
  { title: "Jest Testing and Debugging", description: "Prove component behavior with Jest tests, mocks, DOM assertions, browser tools, and structured debugging.", points: ["Write Jest tests for rendering and interaction.", "Mock wire adapters, Apex, navigation, and events.", "Debug browser, deployment, and runtime failures."], resources: [["Test LWC", "https://developer.salesforce.com/docs/platform/lwc/guide/unit-testing-using-jest"], ["LWC Recipes", "https://github.com/trailheadapps/lwc-recipes"]], practice: ["Test conditional rendering and clicks.", "Mock an Apex response and error.", "Debug a broken component with browser tools."], questions: ["What should an LWC unit test prove?", "Why mock dependencies?", "How do DOM assertions protect behavior?"] },
  { title: "Performance and Component Architecture", description: "Design maintainable, responsive component systems using composition, caching, lazy work, and clear responsibilities.", points: ["Split components by responsibility and reuse.", "Reduce server calls, rerenders, and unnecessary data.", "Design loading, caching, pagination, and large-list strategies."], resources: [["LWC Performance", "https://developer.salesforce.com/blogs/2020/06/lightning-web-components-performance-best-practices"], ["LWC Recipes", "https://github.com/trailheadapps/lwc-recipes"]], practice: ["Refactor a large component into smaller parts.", "Add pagination and caching.", "Measure and reduce unnecessary rendering."], questions: ["What causes excessive rerendering?", "How does composition improve maintainability?", "How can server calls be reduced?"] },
  { title: "Deployment and LWC Capstone", description: "Deliver a production-ready Lightning application through source control, testing, review, deployment, and support.", points: ["Use Salesforce DX, Git, validation, and deployment practices.", "Review accessibility, security, performance, tests, and documentation.", "Operate and improve components after release."], resources: [["Application Lifecycle Management", "https://trailhead.salesforce.com/content/learn/modules/application-lifecycle-and-development-models"], ["Code Analyzer", "https://developer.salesforce.com/docs/platform/salesforce-code-analyzer/overview"]], practice: ["Build a service-console LWC capstone.", "Run tests and code analysis.", "Create deployment, rollback, and support documentation."], questions: ["What makes an LWC production-ready?", "What belongs in a component review?", "How should frontend failures be monitored?"] }
];

const LWC_PROJECT_NAME = "TomCodeX Learner Command Center";
const LWC_PROJECT_ARTIFACTS = [
  "learnerHelloWorld component bundle",
  "learnerSummaryCard component",
  "learnerProgressFilter component",
  "learnerDashboardShell parent-child component system",
  "learnerRecordPanel LDS component",
  "learnerSearchResults Apex-backed component",
  "learnerServiceRequestForm component",
  "learnerNavigationActions component",
  "learnerSecureDashboard component",
  "learnerDashboard Jest test suite",
  "learnerCommandCenter component architecture",
  "Learner Command Center LWC Capstone release"
];

const LWC_DEVELOPMENT_STAGES = [
  { id: "foundation-ui", title: "Stage 1: LWC Foundations and UI", range: "Modules 1-3", outcome: "Build component bundles, templates, scoped styling, JavaScript state, and lifecycle-aware UI." },
  { id: "communication-data", title: "Stage 2: Communication and Salesforce Data", range: "Modules 4-6", outcome: "Build component communication, Lightning Data Service, UI API, and Apex-backed data access." },
  { id: "experience-security", title: "Stage 3: User Experience and Security", range: "Modules 7-9", outcome: "Build forms, validation, navigation, actions, secure UI, and trusted server contracts." },
  { id: "quality-release", title: "Stage 4: Quality, Performance, and Release", range: "Modules 10-12", outcome: "Prove behavior with Jest, improve architecture and performance, then release a capstone." }
];

function lwcStageFor(index) {
  return LWC_DEVELOPMENT_STAGES[Math.floor(index / 3)];
}

function lwcTopicCard(topic, index) {
  return `<article class="roadmap-topic-card"><span>${String(index + 1).padStart(2, "0")}</span><div><h6>${topic}</h6><p><strong>Implementation focus:</strong> Build this behavior in a Lightning Web Component for the continuous command-center project.</p><p><strong>Required proof:</strong> Submit component source, screenshots, tests, accessibility/security notes, and deployment evidence.</p></div></article>`;
}

function lwcMasteryTest(module, projectTask) {
  const correct = [...module.points, ...module.practice, projectTask.expected].slice(0, 10);
  while (correct.length < 10) correct.push(`Apply ${module.title} using accessible, secure, tested LWC practices.`);
  const mcqs = correct.map((answer, index) => ({
    type: "mcq",
    question: `Which statement best proves job-ready LWC understanding for topic ${index + 1}?`,
    options: [answer, "Manipulate the DOM directly and skip accessibility.", "Ignore permissions and call Apex without tests.", "Deploy a component without validating user states."],
    answer
  }));
  const scenarios = module.questions.slice(0, 3).map((question) => ({ type: "scenario", question: `LWC scenario: ${question} Explain the component design, user state, security risk, and test plan.` }));
  return [...mcqs, ...scenarios, { type: "practical", question: `Explain how you built and tested ${projectTask.title}.` }, { type: "practical", question: `Describe the evidence proving this expected result: ${projectTask.expected}` }];
}

function lwcLabCriteria(module, projectTask, index) {
  const artifactId = projectTask.artifact.toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_|_$/g, "");
  const criteria = (() => {
    if (index === 0) {
      return [
        { id: "bundle_standards", question: "Explain how LWC leverages modern web standards and native Web Components compared to Aura's framework model.", type: "text", minLength: 90 },
        { id: "configuration_choices", question: "Explain when to use declarative configuration (like Lightning App Builder) versus custom LWC development for a feature.", type: "text", minLength: 80 },
        { id: "component_name", question: "Provide the exact name of the component folder and files you created to initialize the hello-world component.", type: "text", expectedKeywords: ["learnerHelloWorld"], minLength: 50 },
        { id: "toolchain_setup", question: "Describe the Salesforce CLI commands you executed to create the component and deploy it to your practice org.", type: "text", minLength: 90 },
        { id: "deployment_output", question: "Share the deployment status output from the CLI or VS Code proving a successful deployment.", type: "text", minLength: 90 },
        { id: "project_impact", question: "Explain how establishing this foundation prepares you for building the Learner Command Center.", type: "text", minLength: 100 },
        { id: "leitr_review", question: "Provide your LEITR proof: what you learned, explained from memory, implemented, and your 1-day, 3-day, and 7-day review dates.", type: "text", expectedKeywords: ["1 day", "3 days", "7 days"], minLength: 120 }
      ];
    }
    if (index === 1) {
      return [
        { id: "scoped_css", question: "Explain how LWC scopes CSS to the component using Shadow DOM concepts and how to apply SLDS utility classes.", type: "text", minLength: 90 },
        { id: "summary_card_files", question: "Provide the exact names of the template, script, and stylesheet files for your record summary card.", type: "text", expectedKeywords: ["learnerSummaryCard"], minLength: 50 },
        { id: "list_rendering", question: "Describe how you rendered lists or conditional states in the template using lwc:for-each or lwc:if.", type: "text", minLength: 90 },
        { id: "accessibility_design", question: "Explain the semantic HTML, ARIA attributes, and keyboard navigation considerations you designed into the component.", type: "text", minLength: 90 },
        { id: "accessibility_evidence", question: "Provide the screenshots or audit log output from checking the component's keyboard accessibility and screen-reader friendliness.", type: "text", minLength: 90 },
        { id: "project_integration", question: "Describe how the learnerSummaryCard layout adapts to different form factors within the dashboard.", type: "text", minLength: 100 },
        { id: "leitr_review", question: "Provide your LEITR proof: what you learned, explained from memory, implemented, and your 1-day, 3-day, and 7-day review dates.", type: "text", expectedKeywords: ["1 day", "3 days", "7 days"], minLength: 120 }
      ];
    }
    if (index === 2) {
      return [
        { id: "reactivity_rules", question: "Explain how reactivity works in LWC, contrasting standard fields, decorated fields, and getters.", type: "text", minLength: 90 },
        { id: "progress_filter_files", question: "Provide the exact name of the JavaScript controller and getter files for your progress filter.", type: "text", expectedKeywords: ["learnerProgressFilter"], minLength: 50 },
        { id: "lifecycle_hooks", question: "Describe the execution order of constructor, connectedCallback, and renderedCallback in this component.", type: "text", minLength: 90 },
        { id: "rendering_side_effects", question: "Explain why mutating state within a getter or renderedCallback causes infinite loops and how you avoided this.", type: "text", minLength: 90 },
        { id: "lifecycle_evidence", question: "Provide the browser console debug logs showing the lifecycle hooks running in sequence during filter interactions.", type: "text", minLength: 90 },
        { id: "project_value", question: "Explain how learnerProgressFilter manages user-selected values and filters learner progress records dynamically.", type: "text", minLength: 100 },
        { id: "leitr_review", question: "Provide your LEITR proof: what you learned, explained from memory, implemented, and your 1-day, 3-day, and 7-day review dates.", type: "text", expectedKeywords: ["1 day", "3 days", "7 days"], minLength: 120 }
      ];
    }
    if (index === 3) {
      return [
        { id: "communication_patterns", question: "Explain the 'properties down, events up' pattern and when to use custom events versus Lightning Message Service (LMS).", type: "text", minLength: 100 },
        { id: "dashboard_shell_files", question: "Provide the exact names of the parent and child component folders and files in your shell system.", type: "text", expectedKeywords: ["learnerDashboardShell"], minLength: 50 },
        { id: "custom_events", question: "Describe how you configured and dispatched custom events, including bubbles and composed properties.", type: "text", minLength: 90 },
        { id: "message_channels", question: "Explain how you set up the XML and JS reference files to publish or subscribe to a Lightning Message Channel.", type: "text", minLength: 100 },
        { id: "communication_evidence", question: "Share the console log or debug output proving that events propagate successfully from the progress filter to the shell.", type: "text", minLength: 80 },
        { id: "business_context", question: "Explain how learnerDashboardShell coordinates state changes across unrelated dashboard components.", type: "text", minLength: 100 },
        { id: "leitr_review", question: "Provide your LEITR proof: what you learned, explained from memory, implemented, and your 1-day, 3-day, and 7-day review dates.", type: "text", expectedKeywords: ["1 day", "3 days", "7 days"], minLength: 120 }
      ];
    }
    if (index === 4) {
      return [
        { id: "lds_benefits", question: "Compare the benefits of using base components (e.g. lightning-record-edit-form) with LDS wire adapters (e.g. getRecord).", type: "text", minLength: 100 },
        { id: "record_panel_files", question: "Provide the exact name of the component using Lightning Data Service for viewing and editing records.", type: "text", expectedKeywords: ["learnerRecordPanel"], minLength: 50 },
        { id: "wire_adapters", question: "Describe how you used getRecord, getFieldValue, or updateRecord wire adapters in your JavaScript controller.", type: "text", minLength: 90 },
        { id: "cache_refresh", question: "Explain how you used refreshApex or notifyRecordUpdateAvailable to update the client cache after record modifications.", type: "text", minLength: 80 },
        { id: "security_handling", question: "Explain how Lightning Data Service automatically respects object-level, field-level, and sharing security rules.", type: "text", minLength: 80 },
        { id: "business_rules", question: "Describe the user experience when a learner updates their profile using learnerRecordPanel and is met with a validation error.", type: "text", minLength: 100 },
        { id: "leitr_review", question: "Provide your LEITR proof: what you learned, explained from memory, implemented, and your 1-day, 3-day, and 7-day review dates.", type: "text", expectedKeywords: ["1 day", "3 days", "7 days"], minLength: 120 }
      ];
    }
    if (index === 5) {
      return [
        { id: "apex_invocation", question: "Compare using wired Apex methods (cacheable=true) with imperative Apex calls, detailing when to choose each.", type: "text", minLength: 100 },
        { id: "search_results_files", question: "Provide the exact names of the LWC component files and the Apex controller class they invoke.", type: "text", expectedKeywords: ["learnerSearchResults"], minLength: 50 },
        { id: "wire_parameters", question: "Describe how you passed reactive parameters to a wired Apex method and how parameter changes trigger new queries.", type: "text", minLength: 90 },
        { id: "apex_error_handling", question: "Explain how your JavaScript code extracts and parses user-friendly error messages from server exception objects.", type: "text", minLength: 90 },
        { id: "apex_security_enforcement", question: "Explain how your Apex controller enforces CRUD, FLS, and sharing controls dynamically when queried by LWC.", type: "text", minLength: 90 },
        { id: "business_scalability", question: "Explain how learnerSearchResults scales the retrieval of matching student enrollments efficiently.", type: "text", minLength: 100 },
        { id: "leitr_review", question: "Provide your LEITR proof: what you learned, explained from memory, implemented, and your 1-day, 3-day, and 7-day review dates.", type: "text", expectedKeywords: ["1 day", "3 days", "7 days"], minLength: 120 }
      ];
    }
    if (index === 6) {
      return [
        { id: "form_validation", question: "Explain how you perform custom client-side validation using checkValidity() and reportValidity() on inputs.", type: "text", minLength: 100 },
        { id: "service_request_files", question: "Provide the exact name of the service request form component bundle and its files.", type: "text", expectedKeywords: ["learnerServiceRequestForm"], minLength: 50 },
        { id: "interaction_states", question: "Describe how you implemented spinners, disabled buttons, and toast notifications to indicate transaction progress.", type: "text", minLength: 80 },
        { id: "error_presentation", question: "Explain how field-level errors and page-level errors are presented visually to the user to make them actionable.", type: "text", minLength: 90 },
        { id: "submission_throttling", question: "Describe how you prevent duplicate form submissions when a user double-clicks the submit action.", type: "text", minLength: 100 },
        { id: "user_feedback", question: "Provide the console or toast output proving a successful service request submission and record creation.", type: "text", minLength: 90 },
        { id: "leitr_review", question: "Provide your LEITR proof: what you learned, explained from memory, implemented, and your 1-day, 3-day, and 7-day review dates.", type: "text", expectedKeywords: ["1 day", "3 days", "7 days"], minLength: 120 }
      ];
    }
    if (index === 7) {
      return [
        { id: "navigation_mixin", question: "Explain how to import and use NavigationMixin to redirect users to records, list views, or custom pages.", type: "text", minLength: 100 },
        { id: "navigation_action_files", question: "Provide the exact name of the component that redirects users and handles record quick actions.", type: "text", expectedKeywords: ["learnerNavigationActions"], minLength: 50 },
        { id: "component_targets", question: "Describe the target configurations in your js-meta.xml file that expose the component to App Builder and quick actions.", type: "text", minLength: 80 },
        { id: "design_properties", question: "Explain how to define design properties in targetConfigs to allow admins to customize the component dynamically.", type: "text", minLength: 90 },
        { id: "navigation_evidence", question: "Provide the page reference configuration object used in your JavaScript code to navigate to a filtered course list.", type: "text", minLength: 80 },
        { id: "context_integration", question: "Describe the business scenario where learnerNavigationActions routes the learner to their newly created enrollment page.", type: "text", minLength: 100 },
        { id: "leitr_review", question: "Provide your LEITR proof: what you learned, explained from memory, implemented, and your 1-day, 3-day, and 7-day review dates.", type: "text", expectedKeywords: ["1 day", "3 days", "7 days"], minLength: 120 }
      ];
    }
    if (index === 8) {
      return [
        { id: "lws_architecture", question: "Explain Lightning Web Security (LWS) architecture, component sandboxing, and secure wrappers for global objects.", type: "text", minLength: 90 },
        { id: "secure_dashboard_files", question: "Provide the exact name of the security-focused dashboard component you developed.", type: "text", expectedKeywords: ["learnerSecureDashboard"], minLength: 50 },
        { id: "dom_injection_risks", question: "Explain the risks associated with raw innerHTML usage, dynamic script execution, and third-party libraries in LWC.", type: "text", minLength: 80 },
        { id: "xss_mitigation", question: "Describe how you mitigated cross-site scripting (XSS) risks by avoiding unsafe DOM methods and sanitizing inputs.", type: "text", minLength: 90 },
        { id: "permission_audits", question: "Explain how the component dynamically renders elements based on user permissions using custom permission checks.", type: "text", minLength: 90 },
        { id: "business_protection", question: "Explain how learnerSecureDashboard protects sensitive enrollment scores and grades from being tampered with client-side.", type: "text", minLength: 100 },
        { id: "leitr_review", question: "Provide your LEITR proof: what you learned, explained from memory, implemented, and your 1-day, 3-day, and 7-day review dates.", type: "text", expectedKeywords: ["1 day", "3 days", "7 days"], minLength: 120 }
      ];
    }
    if (index === 9) {
      return [
        { id: "jest_testing_standards", question: "Explain the lifecycle of a Jest unit test, including why flushing microtasks with Promise.resolve() is required.", type: "text", minLength: 100 },
        { id: "dashboard_test_files", question: "Provide the exact name and path of the Jest test files you created to assert dashboard behavior.", type: "text", expectedKeywords: ["learnerDashboard"], minLength: 50 },
        { id: "wire_mocking", question: "Describe how you mocked wire adapters, Apex controllers, and NavigationMixin in your Jest test suite.", type: "text", minLength: 80 },
        { id: "interaction_testing", question: "Explain how your tests simulate user clicks, input entries, and verify resulting DOM updates.", type: "text", minLength: 90 },
        { id: "debugging_techniques", question: "Describe the browser developer tools or Jest commands you used to isolate and debug a component rendering issue.", type: "text", minLength: 100 },
        { id: "test_coverage_output", question: "Provide the Jest coverage report summary or terminal output showing that your test suite ran successfully.", type: "text", minLength: 90 },
        { id: "leitr_review", question: "Provide your LEITR proof: what you learned, explained from memory, implemented, and your 1-day, 3-day, and 7-day review dates.", type: "text", expectedKeywords: ["1 day", "3 days", "7 days"], minLength: 120 }
      ];
    }
    if (index === 10) {
      return [
        { id: "rerendering_causes", question: "Identify the main causes of excessive rerendering in component trees and how composition limits updates.", type: "text", minLength: 100 },
        { id: "command_center_files", question: "Provide the exact name of the component architecture shell or modular sub-components you created.", type: "text", expectedKeywords: ["learnerCommandCenter"], minLength: 50 },
        { id: "composition_patterns", question: "Explain the benefits of breaking large components into smaller, focused children with slots and public APIs.", type: "text", minLength: 90 },
        { id: "performance_strategies", question: "Describe how you optimized server round-trips using paginated queries, client caching, and debounced event handlers.", type: "text", minLength: 90 },
        { id: "measurement_evidence", question: "Provide the rendering duration metrics or browser performance trace evidence showing the optimized component load times.", type: "text", minLength: 90 },
        { id: "platform_robustness", question: "Explain how this modular, performant architecture ensures a responsive user experience under high data volume.", type: "text", minLength: 100 },
        { id: "leitr_review", question: "Provide your LEITR proof: what you learned, explained from memory, implemented, and your 1-day, 3-day, and 7-day review dates.", type: "text", expectedKeywords: ["1 day", "3 days", "7 days"], minLength: 120 }
      ];
    }
    if (index === 11) {
      return [
        { id: "deployment_lifecycle", question: "Describe the release pipeline for Lightning Web Components, including metadata deployment configurations and target XML validations.", type: "text", minLength: 100 },
        { id: "capstone_release_details", question: "Provide the exact package name, directory path, or deployment log ID for your capstone project release.", type: "text", expectedKeywords: ["Learner"], minLength: 50 },
        { id: "code_analyzer_audit", question: "Describe the findings from running Salesforce Code Analyzer on your LWC code and what styling or security issues you corrected.", type: "text", minLength: 90 },
        { id: "rollback_plan", question: "Explain your rollout, validation, rollback, and browser-compatibility verification plan for this release.", type: "text", minLength: 90 },
        { id: "verification_checklist", question: "Detail the manual verification steps you performed on the production-style page to confirm that the LWC components load and interact correctly.", type: "text", minLength: 90 },
        { id: "capstone_business_value", question: "Describe how the completed Learner Command Center delivers business value by unifying learner profiles, progress, and requests.", type: "text", minLength: 100 },
        { id: "leitr_review", question: "Provide your LEITR proof: what you learned, explained from memory, implemented, and your 1-day, 3-day, and 7-day review dates.", type: "text", expectedKeywords: ["1 day", "3 days", "7 days"], minLength: 120 }
      ];
    }
    return [];
  })();
  return criteria.map((criterion) => ({ ...criterion, artifactId, moduleNumber: index + 1 }));
}

lwcModules.forEach((module, index) => {
  const stage = lwcStageFor(index);
  const artifact = LWC_PROJECT_ARTIFACTS[index];
  const previous = lwcModules[index - 1]?.title || "Apex and Salesforce Admin foundation";
  const next = lwcModules[index + 1]?.title || "Developer portfolio demo and continuous improvement";
  const projectTask = {
    title: `Build ${artifact}`,
    purpose: `Apply ${module.title} to the continuous ${LWC_PROJECT_NAME}.`,
    artifact,
    objects: ["Student__c", "Course__c", "Course_Enrollment__c", "Skill_Passport__c", "Service_Request__c"],
    fields: ["Student__c.Name", "Course_Enrollment__c.Progress__c", "Course_Enrollment__c.Status__c", "Skill_Passport__c.Score__c"],
    flows: ["Optional Flow launch or quick action when the module requires Salesforce context"],
    reportsDashboards: ["Learner Command Center QA report"],
    apexLwc: [artifact],
    steps: [
      `Define the user story, acceptance criteria, and UI states for ${artifact}.`,
      "Create or update the LWC bundle in a Salesforce DX project.",
      "Build semantic HTML, scoped CSS, SLDS styling, and responsive layout.",
      "Implement JavaScript state, events, data access, Apex calls, navigation, or security behavior required by the module.",
      "Handle loading, empty, success, error, and restricted-permission states.",
      "Test keyboard behavior, screen-reader labels, and responsive layout.",
      "Write or update Jest tests, mocks, and DOM assertions where relevant.",
      "Deploy or preview the component and capture screenshots or command output.",
      "Complete the LEITR review with 1:2 implementation time and 1-day, 3-day, and 7-day review dates."
    ],
    expected: `${artifact} works as part of ${LWC_PROJECT_NAME} with accessible UI states, secure data behavior, test evidence, and deployment-ready component metadata.`,
    validation: [
      "Verify component bundle names and targets.",
      "Verify user states: loading, empty, success, error, and restricted access.",
      "Verify accessibility and responsive behavior.",
      "Verify data, Apex, and security handling.",
      "Verify tests, screenshots, deployment output, and LEITR evidence."
    ],
    evidence: [
      `Source files for ${artifact}.`,
      "Screenshots or preview evidence for important UI states.",
      "Jest tests, mocks, DOM assertions, or manual test matrix.",
      "Accessibility, responsive, and security review notes.",
      "Deployment, App Builder, target XML, or Salesforce CLI evidence.",
      "LEITR proof with Learn, Explain, Implement, Test, and Review evidence."
    ]
  };
  const syllabusContent = `<section class="roadmap-phase-lesson"><div class="roadmap-phase-summary"><span>${stage.title}</span><h5>Module ${index + 1} of 12: ${module.title}</h5><p>${stage.outcome} ${module.description}</p></div><div class="roadmap-topic-grid">${module.points.map(lwcTopicCard).join("")}</div><div class="roadmap-phase-lab"><div><span>Frontend build lab</span><h6>${projectTask.title}</h6><p>${projectTask.steps.join(" ")}</p></div><div><span>Required evidence</span><h6>Production-style UI proof</h6><p>${projectTask.evidence.join(" ")}</p></div></div><div class="roadmap-trailhead"><h6>Supporting Salesforce LWC resources</h6><div>${module.resources.map(([name, url]) => `<a class="trailhead-badge-card" href="${url}" target="_blank" rel="noopener noreferrer"><span>Official or trusted resource</span><strong>${name}</strong><small>Open resource</small></a>`).join("")}</div></div></section>`;
  module.subCourse = { id: stage.id, title: stage.title, moduleRange: stage.range, description: stage.outcome };
  module.masteryStage = stage;
  module.richContent = {
    projectConnection: { buildsOn: previous, buildsNow: artifact, preparesNext: next },
    mainSyllabus: { title: "Lightning Web Components Practical Build Syllabus", introduction: "This is the dedicated Salesforce custom UI path. Build production-style components, prove behavior with tests and accessibility checks, and use LEITR: Learn, Explain, Implement, Test, and Review.", content: syllabusContent },
    moduleGoal: module.description,
    learningOutcomes: module.points,
    simpleExplanation: `<p><strong>${module.title}</strong> teaches custom Salesforce UI implementation depth. Build the concept in a component, prove it across user states, and document accessibility, security, and test evidence.</p>`,
    detailedLessonSections: module.points.map((point) => ({ title: point, content: `<p>${point}</p><p>Apply this topic in ${LWC_PROJECT_NAME}. Explain the component responsibility, user state, accessibility behavior, data boundary, tests, deployment impact, and support notes.</p>` })),
    keyNotes: [...module.points, "Use semantic HTML, SLDS, accessible labels, and clear component contracts.", "Never skip restricted-user, empty-state, error-state, and responsive checks."],
    flashcards: module.questions.map((question, questionIndex) => ({ front: question, back: module.points[questionIndex % module.points.length] })),
    realBusinessExample: `<p>TomCodeX uses ${LWC_PROJECT_NAME} to show learner progress, course status, skill evidence, service requests, and actions in a responsive Salesforce workspace.</p>`,
    whereUsed: `<p>Use this skill in Lightning App Builder pages, record pages, quick actions, utility bars, Experience Cloud, Salesforce mobile, Jest tests, and deployment reviews.</p>`,
    stepByStepImplementation: projectTask.steps,
    trailheadPractice: { title: `Official practice for ${module.title}`, purpose: "Complete the resource, then implement the same capability in the TomCodeX LWC project.", resources: module.resources, tasks: module.practice },
    projectName: LWC_PROJECT_NAME,
    projectTask,
    projectEvidence: projectTask.evidence,
    bestPractices: ["Use small, composable components.", "Design every user state explicitly.", "Respect Salesforce security boundaries.", "Write Jest tests for behavior.", "Audit accessibility and responsiveness before release."],
    commonMistakes: ["Building only the happy path.", "Skipping keyboard and screen-reader behavior.", "Calling Apex without secure contracts.", "Using unsafe DOM manipulation.", "Deploying without tests and App Builder target review."],
    whyMattersInJob: `<p>Salesforce LWC developers are expected to deliver secure, accessible, responsive, tested interfaces that work with Salesforce data and production deployment workflows.</p>`,
    interviewQuestions: module.questions,
    practicalAssignment: [...module.practice, ...projectTask.steps],
    knowledgeCheckQuestions: module.questions,
    completionChecklist: [`I completed ${projectTask.title}.`, "I completed the official LWC resources.", "I captured source, screenshots, tests, accessibility, security, and deployment evidence.", "I followed LEITR with at least 2 hours implementing for every 1 hour learning."],
    finalSummary: `You completed ${module.title} and added ${artifact} to ${LWC_PROJECT_NAME}.`,
    masteryPreparationQuestions: module.questions,
    handsOnLab: { title: projectTask.title, instructions: `<p>${projectTask.purpose}</p><ol>${projectTask.steps.map((step) => `<li>${step}</li>`).join("")}</ol>` },
    labCriteria: lwcLabCriteria(module, projectTask, index),
    masteryEvaluationCriteria: ["Correct LWC concept usage", "Accessible and responsive UI states", "Secure Salesforce data behavior", "Meaningful Jest or manual tests", "Production deployment and support readiness"],
    masteryTest: lwcMasteryTest(module, projectTask)
  };
});

window.TomCodexCourseConfig = { modules: lwcModules, subCourses: LWC_DEVELOPMENT_STAGES, masteryKey: "tomcodex.lwcMasteryScores.v1", courseName: "Lightning Web Components", recordLabel: "LWC", moduleHours: 3 };
