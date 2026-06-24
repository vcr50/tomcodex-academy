const selectedPoc = localStorage.getItem("tomcodex.selectedPocProject.v1") || "student";

const studentModules = [
  {
    title: "Project Inception & Schema Design",
    description: "Initialize your capstone project, map database relationships, and construct the Student Success CRM schema.",
    points: [
      "Gather project requirements and outline objects, fields, and access profiles.",
      "Design master-detail and lookup schema structures for tracking enrollments.",
      "Use Schema Builder to review and confirm database relationship paths."
    ],
    resources: [
      ["Salesforce Well-Architected", "https://architect.salesforce.com/well-architected/overview"]
    ],
    practice: [
      "Create custom objects: Student__c, Course__c, and Enrollment__c.",
      "Configure master-detail links relating Enrollments to Courses and Students.",
      "Add custom fields to track percentage progress and audit stamps."
    ],
    questions: [
      "How does a junction object solve the many-to-many link between students and courses?",
      "Why is master-detail preferred for Enrollment records in this scenario?",
      "How does the schema design impact automated dashboard metrics?"
    ]
  },
  {
    title: "Custom Business Logic & Security Controls",
    description: "Write validation rules, configure profiles, design sharing metrics, and lock sensitive records behind security protocols.",
    points: [
      "Enforce data quality and inputs with complex multi-field Validation Rules.",
      "Restrict object and field-level visibility using Profiles and Permission Sets.",
      "Implement a private Organization-Wide Default and share records via Sharing Rules."
    ],
    resources: [
      ["Data Security Guide", "https://help.salesforce.com/s/articleView?id=sf.security_data_access.htm&type=5"]
    ],
    practice: [
      "Write a validation rule preventing enrollments on inactive courses.",
      "Lock Student contact details from other standard profile users.",
      "Create a Sharing Rule giving read-only access to specific department leads."
    ],
    questions: [
      "What is the difference between object-level security and field-level security?",
      "Why is OWD set to Private when implementing custom sharing rules?",
      "When does a validation rule run in the Salesforce order of execution?"
    ]
  },
  {
    title: "Automated Workflows & Reactive LWC UI",
    description: "Build Flow automations to coordinate status updates and design a custom LWC to display reactive student metrics.",
    points: [
      "Coordinate multi-object updates using Record-Triggered Flows.",
      "Build a Screen Flow guide to walk tutors through new student intake.",
      "Create a Lightning Web Component querying Apex to show student metrics."
    ],
    resources: [
      ["LWC Developer Guide", "https://developer.salesforce.com/docs/platform/lwc/guide"]
    ],
    practice: [
      "Create a record-triggered flow updating student active count on accounts.",
      "Design a responsive LWC named 'studentSkillPassport' displaying stats.",
      "Embed the component on the Account Lightning Page layout."
    ],
    questions: [
      "How do record-triggered flows compare with Apex triggers for simple updates?",
      "What wire adapter is used to fetch Salesforce record data in LWC?",
      "How does LWC state reactivity handle dynamic list updates?"
    ]
  },
  {
    title: "System Verification, Governance & Deployment",
    description: "Write Apex tests to verify transaction bounds, audit performance, and design a deployment release plan.",
    points: [
      "Verify triggers and validation bounds using Apex Unit Tests and factories.",
      "Perform performance scans and verify governor limits under bulk conditions.",
      "Create change sets or Salesforce CLI deployment plans for release."
    ],
    resources: [
      ["Application Lifecycle Management", "https://trailhead.salesforce.com/content/learn/modules/application-lifecycle-and-development-models"]
    ],
    practice: [
      "Write an Apex unit test class verifying student enrollment logic.",
      "Run the Salesforce Code Analyzer tool on your project folder.",
      "Draft a release validation checklist and rollout schedule documentation."
    ],
    questions: [
      "Why is testing with bulk records (200+) a requirement for deployment?",
      "What is the difference between sandbox validation and production deployment?",
      "How do custom metadata types assist in environment configuration?"
    ]
  }
];

const realEstateModules = [
  {
    title: "Property Listing & Schema Design",
    description: "Initialize your property sales project, map database relationships, and construct the Real Estate CRM schema.",
    points: [
      "Gather project requirements and outline properties, offers, and agent profiles.",
      "Design master-detail and lookup schema structures for tracking listings and bids.",
      "Use Schema Builder to review and confirm database relationship paths."
    ],
    resources: [
      ["Salesforce Well-Architected", "https://architect.salesforce.com/well-architected/overview"]
    ],
    practice: [
      "Create custom objects: Property_Listing__c, Property_Offer__c, and Bid__c.",
      "Configure master-detail links relating Offers to Listings and Bidders.",
      "Add custom fields to track offer status and purchase pricing stats."
    ],
    questions: [
      "How does a junction object solve the relationship between buyers and properties?",
      "Why is master-detail preferred for Bid records in this scenario?",
      "How does the schema design impact automated listing dashboard metrics?"
    ]
  },
  {
    title: "Custom Business Logic & Security Controls",
    description: "Write validation rules, configure profiles, design sharing metrics, and lock sensitive client financial details.",
    points: [
      "Enforce offer validation bounds with complex validation rules.",
      "Restrict client contact and financial visibility using Profiles and Permission Sets.",
      "Implement a private Organization-Wide Default and share records via Sharing Rules."
    ],
    resources: [
      ["Data Security Guide", "https://help.salesforce.com/s/articleView?id=sf.security_data_access.htm&type=5"]
    ],
    practice: [
      "Write a validation rule preventing offers on inactive or archived property listings.",
      "Lock seller and buyer financial details from non-assigned agent profiles.",
      "Create a Sharing Rule giving read-only access to branch managers."
    ],
    questions: [
      "What does OWD control vs Sharing Rules?",
      "Why are client bank details protected behind Field-Level Security?",
      "How are validations executed when submitting a new offer?"
    ]
  },
  {
    title: "Automated Workflows & Reactive LWC UI",
    description: "Build Flow automations to coordinate listing updates and design a custom LWC to display active property trends.",
    points: [
      "Coordinate multi-object updates using Record-Triggered Flows.",
      "Build a Screen Flow guide to walk agents through new property intakes.",
      "Create a Lightning Web Component querying Apex to show property metrics."
    ],
    resources: [
      ["LWC Developer Guide", "https://developer.salesforce.com/docs/platform/lwc/guide"]
    ],
    practice: [
      "Create a record-triggered flow updating property active listing counts on agent accounts.",
      "Design a responsive LWC named 'propertyPriceTrends' displaying active bids.",
      "Embed the component on the Property Lightning Page layout."
    ],
    questions: [
      "How do record-triggered flows compare with Apex triggers for offer approvals?",
      "What wire adapter is used to fetch Salesforce record data in LWC?",
      "How does LWC state reactivity handle dynamic bid updates?"
    ]
  },
  {
    title: "System Verification, Governance & Deployment",
    description: "Write Apex tests to verify transaction bounds, audit performance, and design a deployment release plan.",
    points: [
      "Verify triggers and validation bounds using Apex Unit Tests and factories.",
      "Perform performance scans and verify governor limits under bulk conditions.",
      "Create change sets or Salesforce CLI deployment plans for release."
    ],
    resources: [
      ["Application Lifecycle Management", "https://trailhead.salesforce.com/content/learn/modules/application-lifecycle-and-development-models"]
    ],
    practice: [
      "Write an Apex unit test class verifying property offer logic.",
      "Run the Salesforce Code Analyzer tool on your project folder.",
      "Draft a release validation checklist and rollout schedule documentation."
    ],
    questions: [
      "Why is testing with bulk records (200+) a requirement for deployment?",
      "What is the difference between sandbox validation and production deployment?",
      "How do custom metadata types assist in environment configuration?"
    ]
  }
];

const healthcareModules = [
  {
    title: "Patient Intake & Schema Design",
    description: "Initialize your patient portal project, map database relationships, and construct the Clinic CRM schema.",
    points: [
      "Gather project requirements and outline patients, appointments, and practitioner profiles.",
      "Design master-detail and lookup schema structures for tracking intake bookings.",
      "Use Schema Builder to review and confirm database relationship paths."
    ],
    resources: [
      ["Salesforce Well-Architected", "https://architect.salesforce.com/well-architected/overview"]
    ],
    practice: [
      "Create custom objects: Patient_Intake__c, Medical_Appointment__c, and Treatment_Plan__c.",
      "Configure master-detail links relating Appointments to Patients and Doctors.",
      "Add custom fields to track vital signs and diagnostic categories."
    ],
    questions: [
      "How does a junction object solve the relationship between doctors and patients?",
      "Why is master-detail preferred for Appointment records in this scenario?",
      "How does the schema design impact automated clinical metrics?"
    ]
  },
  {
    title: "Custom Business Logic & Security Controls",
    description: "Write validation rules, configure profiles, design sharing metrics, and lock sensitive records (HIPAA compliance).",
    points: [
      "Enforce medical intake data bounds with complex validation rules.",
      "Restrict patient health information visibility using Profiles and Permission Sets.",
      "Implement a private Organization-Wide Default and share records via Sharing Rules."
    ],
    resources: [
      ["Data Security Guide", "https://help.salesforce.com/s/articleView?id=sf.security_data_access.htm&type=5"]
    ],
    practice: [
      "Write a validation rule preventing appointments on inactive practitioner schedules.",
      "Lock sensitive patient medical history details behind HIPAA security controls.",
      "Create a Sharing Rule giving read-only access to specific clinic coordinators."
    ],
    questions: [
      "How does OWD Private protect HIPAA-regulated data?",
      "Why are medical records protected behind Field-Level Security?",
      "How are validations executed when submitting a new medical intake?"
    ]
  },
  {
    title: "Automated Workflows & Reactive LWC UI",
    description: "Build Flow automations to coordinate patient check-ins and design a custom LWC to display reactive doctor metrics.",
    points: [
      "Coordinate multi-object updates using Record-Triggered Flows.",
      "Build a Screen Flow guide to walk nurses through new patient check-ins.",
      "Create a Lightning Web Component querying Apex to show patient metrics."
    ],
    resources: [
      ["LWC Developer Guide", "https://developer.salesforce.com/docs/platform/lwc/guide"]
    ],
    practice: [
      "Create a record-triggered flow updating patient visit count on clinic records.",
      "Design a responsive LWC named 'doctorPatientPortal' displaying vital signs.",
      "Embed the component on the Patient Lightning Page layout."
    ],
    questions: [
      "How do record-triggered flows compare with Apex triggers for patient bookings?",
      "What wire adapter is used to fetch Salesforce record data in LWC?",
      "How does LWC state reactivity handle dynamic patient list updates?"
    ]
  },
  {
    title: "System Verification, Governance & Deployment",
    description: "Write Apex tests to verify transaction bounds, audit performance, and design a deployment release plan.",
    points: [
      "Verify triggers and validation bounds using Apex Unit Tests and factories.",
      "Perform performance scans and verify governor limits under bulk conditions.",
      "Create change sets or Salesforce CLI deployment plans for release."
    ],
    resources: [
      ["Application Lifecycle Management", "https://trailhead.salesforce.com/content/learn/modules/application-lifecycle-and-development-models"]
    ],
    practice: [
      "Write an Apex unit test class verifying patient treatment plan logic.",
      "Run the Salesforce Code Analyzer tool on your project folder.",
      "Draft a release validation checklist and rollout schedule documentation."
    ],
    questions: [
      "Why is testing with bulk records (200+) a requirement for deployment?",
      "What is the difference between sandbox validation and production deployment?",
      "How do custom metadata types assist in environment configuration?"
    ]
  }
];

const customModules = [
  {
    title: "Custom Project Inception & Schema Design",
    description: "Initialize your custom project, map database relationships, and construct your custom schema.",
    points: [
      "Gather project requirements and outline primary and secondary custom objects.",
      "Design master-detail and lookup schema structures for tracking your custom records.",
      "Use Schema Builder to review and confirm database relationship paths."
    ],
    resources: [
      ["Salesforce Well-Architected", "https://architect.salesforce.com/well-architected/overview"]
    ],
    practice: [
      "Create your custom primary and secondary objects.",
      "Configure master-detail or lookup links relating the custom objects.",
      "Add custom fields to track status, metrics, and audit timestamps."
    ],
    questions: [
      "How do custom objects and relationships support your business requirements?",
      "Why did you choose lookup or master-detail for your relationships?",
      "How does the schema design impact automated dashboard metrics?"
    ]
  },
  {
    title: "Custom Business Logic & Security Controls",
    description: "Write validation rules, configure profiles, design sharing metrics, and lock sensitive custom records.",
    points: [
      "Enforce data quality and inputs with complex multi-field Validation Rules.",
      "Restrict visibility to sensitive custom fields using Profiles and Permission Sets.",
      "Implement a private Organization-Wide Default and share records via Sharing Rules."
    ],
    resources: [
      ["Data Security Guide", "https://help.salesforce.com/s/articleView?id=sf.security_data_access.htm&type=5"]
    ],
    practice: [
      "Write a validation rule preventing custom records from being created in invalid states.",
      "Lock sensitive custom fields from standard user profiles.",
      "Create a Sharing Rule giving read-only access to managers or supervisors."
    ],
    questions: [
      "What does OWD control vs Sharing Rules?",
      "Why are sensitive custom fields protected behind Field-Level Security?",
      "How are validations executed when submitting a new custom record?"
    ]
  },
  {
    title: "Automated Workflows & Reactive LWC UI",
    description: "Build Flow automations to coordinate custom status updates and design a custom LWC to display reactive metrics.",
    points: [
      "Coordinate multi-object updates using Record-Triggered Flows.",
      "Build a Screen Flow guide to walk users through new record entries.",
      "Create a Lightning Web Component querying Apex to show custom metrics."
    ],
    resources: [
      ["LWC Developer Guide", "https://developer.salesforce.com/docs/platform/lwc/guide"]
    ],
    practice: [
      "Create a record-triggered flow updating custom counts on parent accounts.",
      "Design a responsive LWC named 'customDashboard' displaying records.",
      "Embed the component on the Custom Record Lightning Page layout."
    ],
    questions: [
      "How do record-triggered flows compare with Apex triggers for your custom logic?",
      "What wire adapter is used to fetch Salesforce record data in LWC?",
      "How does LWC state reactivity handle dynamic custom list updates?"
    ]
  },
  {
    title: "System Verification, Governance & Deployment",
    description: "Write Apex tests to verify transaction bounds, audit performance, and design a deployment release plan.",
    points: [
      "Verify triggers and validation bounds using Apex Unit Tests and factories.",
      "Perform performance scans and verify governor limits under bulk conditions.",
      "Create change sets or Salesforce CLI deployment plans for release."
    ],
    resources: [
      ["Application Lifecycle Management", "https://trailhead.salesforce.com/content/learn/modules/application-lifecycle-and-development-models"]
    ],
    practice: [
      "Write an Apex unit test class verifying custom logic operations.",
      "Run the Salesforce Code Analyzer tool on your project folder.",
      "Draft a release validation checklist and rollout schedule documentation."
    ],
    questions: [
      "Why is testing with bulk records (200+) a requirement for deployment?",
      "What is the difference between sandbox validation and production deployment?",
      "How do custom metadata types assist in environment configuration?"
    ]
  }
];

const pocProjectLabels = {
  student: "Student Success CRM",
  realestate: "Real Estate CRM",
  healthcare: "Healthcare Patient CRM",
  custom: "Custom Salesforce CRM"
};

const pocStages = [
  { title: "Stage 1: Capstone Discovery and Foundation", moduleRange: "Modules 1-2" },
  { title: "Stage 2: Capstone Automation, UI and Release", moduleRange: "Modules 3-4" }
];

function toHtmlList(items) {
  return `<ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
}

function buildPocMasteryTest(module, projectLabel) {
  const baseQuestions = [
    [`Which artifact proves the ${projectLabel} schema is ready?`, ["Object model with relationships and field decisions", "Only a homepage screenshot", "A blank unmanaged package", "A user profile list"], 0],
    ["What should be verified before moving a capstone build toward release?", ["Security, automation, tests, data quality, and deployment plan", "Only the app name", "Only dashboard colors", "Only Trailhead completion"], 0],
    ["Why should capstone work include LEITR review evidence?", ["It proves learning, explanation, implementation, testing, and spaced review", "It replaces configuration", "It removes testing", "It hides project gaps"], 0],
    [`What is the best way to document a ${projectLabel} business rule?`, ["Requirement, configuration, expected result, test evidence, and owner", "A single object label", "A package version only", "A random screenshot"], 0],
    ["Which release habit protects production data?", ["Validate in sandbox and deploy through a reviewed plan", "Edit directly in production first", "Disable all validations permanently", "Skip user acceptance testing"], 0]
  ];
  return Array.from({ length: 15 }, (_, questionIndex) => {
    const source = baseQuestions[questionIndex % baseQuestions.length];
    const type = questionIndex < 10 ? "mcq" : questionIndex < 13 ? "scenario" : "practical";
    return {
      type,
      question: questionIndex < 5 ? source[0] : `${module.title}: ${source[0]}`,
      options: type === "mcq" ? source[1] : undefined,
      correctAnswer: type === "mcq" ? source[2] : undefined,
      expectedKeywords: type !== "mcq" ? ["requirement", "build", "test", "evidence"] : undefined
    };
  });
}

function enrichPocModules(modules, projectKey) {
  const projectLabel = pocProjectLabels[projectKey] || pocProjectLabels.student;
  return modules.map((module, index) => {
    const stage = index < 2 ? pocStages[0] : pocStages[1];
    const projectName = `TomCodeX ${projectLabel} Capstone`;
    return {
      ...module,
      subCourse: stage,
      masteryStage: stage,
      richContent: {
        moduleGoal: `Complete the ${module.title.toLowerCase()} milestone for the ${projectName}.`,
        learningOutcomes: module.points,
        simpleExplanation: `<p>This capstone module turns earlier Admin, Flow, Apex, LWC, Integration, and Agentforce skills into one working Salesforce project. Every decision must produce a build artifact and verification evidence.</p>`,
        mainSyllabus: {
          title: "Salesforce Final POC Capstone Build Syllabus",
          introduction: `Use this as the primary build plan for the ${projectName}.`,
          content: `<div class="roadmap-phase-summary"><strong>${stage.title}</strong><span>${stage.moduleRange}</span><p>${module.description}</p></div><h4>Required capstone work</h4>${toHtmlList(module.practice)}<h4>Supporting Salesforce project resources</h4>${toHtmlList(module.resources.map(([name]) => name))}`
        },
        detailedLessonSections: module.points.map((point, lessonIndex) => ({
          title: `${lessonIndex + 1}. ${point}`,
          content: `<p>Explain the requirement, configure it in Salesforce, test it with realistic data, and capture evidence for your final portfolio walkthrough.</p>`
        })),
        projectName,
        projectConnection: {
          buildsOn: index === 0 ? "Admin, data model, and security fundamentals" : modules[index - 1].title,
          buildsNow: module.title,
          preparesNext: modules[index + 1]?.title || "Final portfolio demo and interview walkthrough"
        },
        realBusinessExample: `<p>A delivery team uses this ${projectLabel} project to prove it can gather requirements, build safely, automate real work, and release with evidence.</p>`,
        whereUsed: `<p>Used in Salesforce implementation projects, portfolio demos, client discovery sessions, release reviews, and developer interviews.</p>`,
        stepByStepImplementation: module.practice,
        trailheadPractice: {
          title: "Official Capstone Practice",
          links: module.resources.map(([name, url]) => ({ label: name, url })),
          instructions: "Study the official resource, then apply it directly inside your capstone org before marking the module complete."
        },
        projectTask: {
          artifact: `${module.title} evidence pack`,
          summary: `Build and document this milestone inside the ${projectName}.`,
          steps: module.practice.concat(["Record LEITR notes for what you learned, explained, implemented, tested, and reviewed."])
        },
        projectEvidence: [
          "Requirement notes and acceptance criteria",
          "Salesforce configuration or code artifact names",
          "Test records or test class evidence",
          "Before and after screenshots or written verification notes",
          "Risk, security, and release notes",
          "LEITR review dates for 1 day, 3 days, and 7 days"
        ],
        bestPractices: [
          "Keep object, field, automation, and code names consistent.",
          "Test happy path, negative path, and bulk or multi-record behavior.",
          "Document why each design choice exists, not only what was clicked."
        ],
        commonMistakes: [
          "Building features without written acceptance criteria.",
          "Skipping security and sharing review until the end.",
          "Showing screenshots without explaining test evidence."
        ],
        whyMattersInJob: `<p>Capstone delivery mirrors real Salesforce work: understand a business need, design a maintainable solution, test it, and explain tradeoffs clearly.</p>`,
        interviewQuestions: module.questions,
        handsOnLab: { instructions: `<p>Complete the module practice tasks in your Salesforce org and submit clear evidence for each item.</p>` },
        labCriteria: [
          { id: "requirements", question: "List the requirements completed in this module.", expectedKeywords: ["requirement", "acceptance"] },
          { id: "artifact", question: "Name the Salesforce artifacts you created or changed.", expectedKeywords: ["object", "flow", "lwc", "apex", "rule"] },
          { id: "testing", question: "Describe how you tested the module outcome.", expectedKeywords: ["test", "record", "expected"] },
          { id: "security", question: "Explain the security or governance review performed.", expectedKeywords: ["security", "sharing", "profile", "permission"] },
          { id: "release", question: "Write the deployment or release note for this milestone.", expectedKeywords: ["deploy", "release", "validate"] },
          { id: "leitr_review", question: "Add your 1-day, 3-day, and 7-day LEITR review dates.", expectedKeywords: ["1 day", "3 days", "7 days"] }
        ],
        masteryTest: buildPocMasteryTest(module, projectLabel),
        masteryEvaluationCriteria: ["Capstone requirement clarity", "Correct Salesforce implementation", "Testing evidence", "Release readiness", "LEITR reflection"]
      }
    };
  });
}
const moduleMapping = {
  student: studentModules,
  realestate: realEstateModules,
  healthcare: healthcareModules,
  custom: customModules
};

const activeModules = enrichPocModules(moduleMapping[selectedPoc] || studentModules, selectedPoc);

window.TomCodexCourseConfig = {
  modules: activeModules,
  subCourses: pocStages,
  masteryKey: "tomcodex.pocMasteryScores.v1",
  courseName: "Final POC Project",
  recordLabel: "POC",
  moduleHours: 3
};

document.addEventListener("DOMContentLoaded", () => {
  const selector = document.getElementById("pocProjectSelector");
  if (selector) {
    selector.value = selectedPoc;
    selector.addEventListener("change", (event) => {
      localStorage.setItem("tomcodex.selectedPocProject.v1", event.target.value);
      location.reload();
    });
  }
  
  // Update header text based on selected project
  const projectTitles = {
    student: { title: "Final Capstone POC Project", desc: "Design, build, and deploy a complete Salesforce Student Success CRM project. Integrate data modeling, sharing rules, validation rules, screen & record-triggered flows, custom LWC dashboards, and Zentom AI agents." },
    realestate: { title: "Real Estate CRM Capstone", desc: "Design, build, and deploy a complete Salesforce Real Estate CRM project. Integrate listings, offers, OWD security, record-triggered flows, custom LWC dashboards, and Zentom AI listing agents." },
    healthcare: { title: "Healthcare Patient CRM Capstone", desc: "Design, build, and deploy a complete Salesforce Patient CRM project. Integrate medical records, HIPAA access controls, appointment record-triggered flows, custom LWC dashboards, and Zentom scheduling agents." },
    custom: { title: "Custom Capstone Project", desc: "Design, build, and deploy your own custom Salesforce project in your org. Integrate custom schemas, OWD security locks, custom record flows, custom LWC dashboards, and Zentom copilot assistants." }
  };
  const config = projectTitles[selectedPoc] || projectTitles.student;
  const titleEl = document.getElementById("pocHeaderTitle");
  const descEl = document.getElementById("pocHeaderDesc");
  if (titleEl) titleEl.textContent = config.title;
  if (descEl) descEl.textContent = config.desc;
});
