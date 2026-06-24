const ADMIN_PROGRESS_KEY = "tomcodex.adminCourseProgress.v1";
const modules = [
  {
    title: "Cloud & Salesforce Platform Foundations",
    description: "Learn how Salesforce CRM stores business data, navigate its core administration areas, and understand the platform concepts every beginner administrator needs.",
    points: [
      "Understand what Salesforce CRM is.",
      "Explain the difference between an Org, App, Object, Field, and Record.",
      "Create or access a free Salesforce Developer Edition Org.",
      "Navigate the Setup menu confidently.",
      "Use the App Launcher to switch between apps.",
      "Understand the difference between Standard Objects and Custom Objects.",
      "Explain what Salesforce metadata means.",
      "Find Company Information, masked Organization ID, timezone, and currency settings.",
      "Identify your own Salesforce user and profile.",
      "Understand the basic role of a Salesforce Administrator."
    ],
    resources: [
      ["Salesforce CRM Trailhead", "https://trailhead.salesforce.com/content/learn/modules/lex_implementation_basics"],
      ["Salesforce Help Docs", "https://help.salesforce.com/"],
      ["What Is Salesforce? Video", "https://www.salesforce.com/products/what-is-salesforce/video/"]
    ],
    practice: [
      "Create or access a Salesforce Developer Edition org or Trailhead Playground, then log in.",
      "Click the App Launcher, count the available apps, and write down any three app names.",
      "Click the gear icon and select Setup.",
      "Use Quick Find to open Company Information. Record the edition, masked Organization ID only, timezone, currency, language, and locale.",
      "Open Object Manager. Explore standard objects and record the first standard object shown in your org.",
      "Use Quick Find to open Users, find your user record, and note your username, email, profile, and active status.",
      "Record the Salesforce subdomain shown in the browser address bar."
    ],
    questions: [
      "What is Salesforce?",
      "What is CRM?",
      "What is an Org in Salesforce?",
      "What is an App in Salesforce?",
      "What is an Object?",
      "What is a Field?",
      "What is a Record?",
      "What is the difference between Standard Object and Custom Object?",
      "What is metadata in Salesforce?",
      "What is the difference between declarative and programmatic development?",
      "Where do you find Organization ID, and why must submitted proof show only a masked Organization ID?",
      "What is Object Manager used for?",
      "What is App Launcher used for?",
      "What is the role of a Salesforce Administrator?",
      "Why should we not test directly in production?"
    ],
    richContent: {
      preModuleSetup: {
        title: "Before Module 1: Create and Prepare Your Salesforce Practice Org",
        introduction: "Complete this setup lesson before starting Module 1. You need a safe Salesforce practice environment where you can explore Setup and complete hands-on activities without affecting real business data.",
        options: [
          "<strong>Trailhead Playground (recommended for new learners):</strong> Create one from Trailhead and use it for guided learning and challenges.",
          "<strong>Salesforce Developer Edition:</strong> Create a free standalone practice org when you want a permanent environment for Academy projects.",
          "<strong>Existing Sandbox or practice org:</strong> Use it only when your administrator has approved it for learning."
        ],
        steps: [
          "Choose a practice environment. Do not use a production org for Academy exercises.",
          "For a Trailhead Playground, sign in to <a href='https://trailhead.salesforce.com/' target='_blank' rel='noopener noreferrer' class='text-brand-600 font-bold underline'>Trailhead</a>, open your profile menu, select <strong>Hands-on Orgs</strong>, and create or launch a playground.",
          "For Developer Edition, open the <a href='https://developer.salesforce.com/signup' target='_blank' rel='noopener noreferrer' class='text-brand-600 font-bold underline'>Developer Edition signup page</a>, enter your details, choose a unique username in email format, and submit the form.",
          "Open the activation email, verify the account, create a strong password, and store the username and login URL securely.",
          "Log in and confirm that Salesforce Lightning Experience opens successfully.",
          "Click the gear icon, open <strong>Setup</strong>, and use Quick Find to open <strong>Company Information</strong>.",
          "Review the org edition, masked Organization ID only, default locale, language, timezone, and currency. Change settings only when needed for your learning location.",
          "Open <strong>Users</strong>, find your user, and confirm that it is active and uses the expected email, locale, timezone, and System Administrator profile.",
          "Open the <strong>App Launcher</strong> and confirm that you can access at least one standard app such as Sales or Service.",
          "Bookmark the login page and record the org details in your learning notes. Your practice org is now ready for Module 1."
        ],
        safetyNotes: [
          "Never share your password, verification code, security token, or Organization ID publicly.",
          "Use a unique username. Salesforce usernames look like email addresses but do not need to be working email inboxes.",
          "Use the timezone and locale that match your learning or business scenario.",
          "Do not create or modify configuration in a production org while learning."
        ],
        readinessChecklist: [
          "I can log in to my Salesforce practice org.",
          "I can open Lightning Experience and Setup.",
          "I verified my user, profile, timezone, and locale.",
          "I can open App Launcher and a standard Salesforce app.",
          "I saved my username and login URL securely."
        ]
      },
      moduleGoal: "Build the basic foundation needed to work inside Salesforce by creating/accessing a practice org, understanding CRM, data storage, Setup navigation, and core areas like Company Info and Users.",
      learningOutcomes: [
        "Understand what Salesforce CRM is.",
        "Explain the difference between an Org, App, Object, Field, and Record.",
        "Create or access a free Salesforce Developer Edition Org.",
        "Navigate the Setup menu confidently.",
        "Use the App Launcher to switch between apps.",
        "Understand the difference between Standard Objects and Custom Objects.",
        "Explain what Salesforce metadata means.",
        "Find Company Information, masked Organization ID, timezone, and currency settings.",
        "Identify your own Salesforce user and profile.",
        "Understand the basic role of a Salesforce Administrator."
      ],
      simpleExplanation: `
        <h4 class="font-bold text-slate-800 text-sm">What is Salesforce?</h4>
        <p class="text-slate-600 text-xs mt-1 leading-relaxed">
          Salesforce is a cloud-based CRM (Customer Relationship Management) platform. It helps businesses manage their customers, leads, sales, service requests, employees, students, partners, and many other business processes in one place. In simple words: Salesforce helps companies store, manage, automate, and analyze business data.
        </p>
        <h4 class="font-bold text-slate-800 text-sm mt-3">Salesforce as a Platform</h4>
        <p class="text-slate-600 text-xs mt-1 leading-relaxed">
          Salesforce is not just a database. It is a complete business application platform where you can build apps without writing code. Building with clicks and configuration is called <strong>declarative development</strong>. When configuration alone is not enough, developers use code like Apex, Lightning Web Components, SOQL, and APIs (called <strong>programmatic development</strong>).
        </p>
      `,
      detailedLessonSections: [
        {
          title: "Salesforce as a Business Application Platform",
          content: `<p>Salesforce is more than a database. It combines CRM, automation, security, reporting, analytics, and application-building tools in one cloud platform.</p><p>Administrators can create objects, fields, page layouts, validation rules, flows, reports, dashboards, user permissions, and automation with clicks (declarative development). Developers extend the platform with Apex, Lightning Web Components, SOQL, and APIs when configuration is not enough (programmatic development).</p>`
        },
        {
          title: "Org, App, Object, Field, and Record",
          content: `<p>These are the core foundation terms in Salesforce:</p><ul class="list-disc space-y-1 pl-5 mt-2"><li><strong>Org:</strong> The complete Salesforce environment containing apps, users, data, settings, security, and automation (e.g. TomCodeX Academy Salesforce Org).</li><li><strong>App:</strong> A workspace inside Salesforce containing related tabs like Students, Courses, Enrollments, Tasks, and Reports (e.g. Student Success CRM App).</li><li><strong>Object:</strong> Similar to a database table that stores business data (e.g. Student object).</li><li><strong>Field:</strong> Similar to a column in a table (e.g. Student Name, Email, Phone).</li><li><strong>Record:</strong> A single row of data inside an object (e.g. Student Name: Vijay, Course: Salesforce Admin, Status: Active).</li></ul>`
        },
        {
          title: "Standard Objects and Custom Objects",
          content: `<p><strong>Standard objects</strong> are provided by Salesforce for common business processes. Examples include Account, Contact, Lead, Opportunity, Case, and User.</p><p><strong>Custom objects</strong> are created by admins or developers to support specific business needs. TomCodeX Academy examples include Student, Course, Course Enrollment, Tutor Review, and Certificate. Custom objects usually have <code>__c</code> in their API name (e.g. <code>Student__c</code>, <code>Course_Enrollment__c</code>).</p>`
        },
        {
          title: "Metadata-Driven Architecture",
          content: `<p>Salesforce operates using a metadata-driven architecture. Metadata means <strong>data about data</strong>. When you create an object, field, layout, or rule, you are creating metadata instead of directly changing Salesforce's database engine. Salesforce reads this metadata and dynamically shows the correct screens, fields, and layouts to users. This makes the platform flexible, secure, and upgrade-friendly.</p>`
        },
        {
          title: "Declarative and Programmatic Development",
          content: `<p><strong>Declarative development</strong> means building with clicks, not code. Examples include creating objects, fields, page layouts, validation rules, flows, reports, and dashboards. This is mainly done by Salesforce Administrators.</p><p><strong>Programmatic development</strong> means building with code. Examples include Apex classes, triggers, Lightning Web Components, SOQL queries, and API integrations. This is mainly done by Salesforce Developers.</p>`
        }
      ],
      keyNotes: [
        "Salesforce is a Customer Relationship Management (CRM) and business application platform, not just a database.",
        "An Org is the complete Salesforce environment; an App is a workspace grouping related tabs.",
        "Objects represent tables, fields represent columns, and records represent rows of data.",
        "Standard objects are pre-built by Salesforce. Custom object API names end with __c.",
        "Metadata describes the configuration and structure of the Salesforce environment.",
        "Declarative development uses configuration/clicks. Programmatic development uses code.",
        "Manage key administrative areas in Setup, Object Manager, App Launcher, Company Information, and Users.",
        "Practice configuration only in sandboxes or Developer Edition/Playground orgs, never in production."
      ],
      flashcards: [
        { front: "What does CRM stand for?", back: "Customer Relationship Management." },
        { front: "What is a Salesforce org?", back: "The complete Salesforce environment containing apps, users, data, settings, security, and automation." },
        { front: "What is a Salesforce app?", back: "A workspace that groups related tabs and tools for a business process or user role." },
        { front: "How are object, field, and record related?", back: "An object is like a table, a field is like a column, and a record is one row of data." },
        { front: "Name three standard objects.", back: "Examples include Account, Contact, Lead, Opportunity, Case, and User." },
        { front: "How can you identify most custom object API names?", back: "They commonly end with __c, such as Student__c." },
        { front: "What is Salesforce metadata?", back: "Configuration and structure definitions, such as objects, fields, page layouts, validation rules, and flows." },
        { front: "Declarative versus programmatic development?", back: "Declarative development uses clicks and configuration. Programmatic development uses code such as Apex, LWC, SOQL, and APIs." },
        { front: "Where do you find the Organization ID?", back: "Setup, then Quick Find, then Company Information." },
        { front: "What is Object Manager used for?", back: "Managing objects, fields, page layouts, record types, buttons, actions, and related settings." },
        { front: "What is App Launcher used for?", back: "Switching between standard and custom Salesforce apps." },
        { front: "Why should you avoid practicing in production?", back: "Changes can affect real users, live data, security, automation, and business operations." }
      ],
      realBusinessExample: `
        <p class="text-slate-600 text-xs leading-relaxed">
          At <strong>TomCodeX Academy</strong>, we need a CRM system to manage student lifecycles. Instead of spreadsheet chaos, we are building a <strong>Student Success CRM</strong> inside Salesforce to track:
        </p>
        <ul class="list-disc pl-5 mt-2 space-y-1 text-slate-600 text-xs">
          <li><strong>Students</strong>: Contact details, registration dates, interests, and learning status.</li>
          <li><strong>Course Enrollments</strong>: Joined courses, start dates, progress, and completion status.</li>
          <li><strong>Tutor Activities</strong>: Lab reviews, doubt-clearing sessions, mock interviews, and certificates.</li>
          <li><strong>Admin Work</strong>: User access, reports, dashboards, automation, and follow-up tasks.</li>
        </ul>
      `,
      whereUsed: `
        <div class="space-y-3">
          <div>
            <strong class="text-brand-700 text-xs block">Setup Menu</strong>
            <span class="text-slate-500 text-xs">The central administration hub where profiles, security, users, and backend configuration are managed.</span>
          </div>
          <div>
            <strong class="text-brand-700 text-xs block">Object Manager</strong>
            <span class="text-slate-500 text-xs">Manage standard and custom objects, fields, layouts, record types, buttons, and actions.</span>
          </div>
          <div>
            <strong class="text-brand-700 text-xs block">App Launcher</strong>
            <span class="text-slate-500 text-xs">Switch between standard and custom Salesforce apps.</span>
          </div>
          <div>
            <strong class="text-brand-700 text-xs block">Company Information</strong>
            <span class="text-slate-500 text-xs">Find the Organization ID, edition, locale, timezone, currency, storage, and licenses.</span>
          </div>
          <div>
            <strong class="text-brand-700 text-xs block">Users</strong>
            <span class="text-slate-500 text-xs">Review usernames, emails, roles, profiles, active status, and login access.</span>
          </div>
        </div>
      `,
      stepByStepImplementation: [
        "Create or access a Salesforce Developer Edition org or Trailhead Playground, then log in.",
        "Click the <strong>App Launcher</strong>, count the available apps, and write down any three app names.",
        "Click the gear icon and select <strong>Setup</strong>.",
        "Use Quick Find to open <strong>Company Information</strong>. Record the edition, masked Organization ID only, timezone, currency, language, and locale.",
        "Open <strong>Object Manager</strong>. Explore standard objects and record the first standard object shown in your org.",
        "Use Quick Find to open <strong>Users</strong>, find your user record, and note your username, email, profile, and active status.",
        "Record the Salesforce subdomain shown in the browser address bar."
      ],
      bestPractices: [
        "Use clear, business-friendly labels such as Student, Course Enrollment, Tutor Review, and Certificate. Avoid names such as Data1, TestObject, NewTable, or StudentInfoFinal.",
        "Add descriptions to objects and fields. Example: Enrollment Date - Stores the date when a student joined a course.",
        "Practice configuration in a Developer Org, Sandbox, or Trailhead Playground rather than production.",
        "Review generated API names before saving. Example: Course Enrollment becomes Course_Enrollment__c.",
        "Keep navigation notes for frequently used paths such as Company Information, Users, and Object Manager."
      ],
      commonMistakes: [
        "Confusing an app workspace with an object that stores data. Student Success CRM is an app; Student is an object.",
        "Repurposing a standard object for unrelated data. Do not use Account to store courses; create a Course custom object.",
        "Ignoring organization and user timezone settings, which can affect dates, reports, and audit history.",
        "Leaving object and field descriptions blank, making future maintenance harder.",
        "Thinking Salesforce is only a database instead of a CRM, automation, security, reporting, and application platform."
      ],
      whyMattersInJob: `
        <p class="text-slate-600 text-xs leading-relaxed">
          Setup navigation is one of the most important skills for a Salesforce Admin or Developer. In a real company, users may ask: Why can't I see this record? Why is my timezone wrong? Where is my profile? Why is this field missing? Where do I create a new field? How do I check the company org ID? What app should I use? A junior admin or developer must know where to check these settings quickly.
        </p>
      `,
      interviewQuestions: [
        "What is Salesforce?",
        "What is CRM?",
        "What is an Org in Salesforce?",
        "What is an App in Salesforce?",
        "What is an Object?",
        "What is a Field?",
        "What is a Record?",
        "What is the difference between Standard Object and Custom Object?",
        "What is metadata in Salesforce?",
        "What is the difference between declarative and programmatic development?",
        "Where do you find Organization ID, and how should it be masked in submitted proof?",
        "What is Object Manager used for?",
        "What is App Launcher used for?",
        "What is the role of a Salesforce Administrator?",
        "Why should we not test directly in production?"
      ],
      practicalAssignment: [
        "Org Edition",
        "Masked Organization ID only (example: 00Dxx000000XXXX)",
        "Timezone",
        "Currency",
        "First Standard Object",
        "Your Profile Name",
        "Salesforce Subdomain",
        "Three Apps from App Launcher",
        "Two Standard Objects",
        "One Custom Object idea for TomCodeX Academy"
      ],
      knowledgeCheckQuestions: [
        "What is your Salesforce edition?",
        "What is your masked Organization ID?",
        "What is your default timezone?",
        "What is the first standard object listed in Object Manager?",
        "What is your Profile name?",
        "How many apps did you see in App Launcher?",
        "What is your Salesforce subdomain?",
        "Name two standard objects.",
        "What is one example of a custom object for TomCodeX Academy?",
        "What is the difference between an object and a record?"
      ],
      completionChecklist: [
        "I understand what Salesforce CRM is.",
        "I know the difference between Org, App, Object, Field, and Record.",
        "I know the difference between Standard Object and Custom Object.",
        "I can open Setup.",
        "I can use App Launcher.",
        "I can open Object Manager.",
        "I can find Company Information.",
        "I can find Organization ID and submit only a masked value.",
        "I can find my own user profile.",
        "I completed the hands-on lab.",
        "I scored 80% or higher in the AI Mastery Test."
      ],
      finalSummary: "By the end of Module 1, the learner has created or opened a safe Salesforce practice org, verified Company Information, identified org edition, timezone, currency, and masked Org ID, explored App Launcher, Setup, Object Manager, and Users, created the TomCodeX Student Success CRM custom app, reviewed one AppExchange package safely, submitted project evidence, and passed the Zentom AI Mastery Test with 80% or higher.",
      masteryTest: [
        {
          type: "mcq",
          question: "What is Salesforce mainly used for?",
          options: [
            "Video editing",
            "Customer relationship management and business application building",
            "Gaming",
            "Operating system installation"
          ],
          answer: "Customer relationship management and business application building"
        },
        {
          type: "mcq",
          question: "What does CRM stand for?",
          options: [
            "Customer Record Machine",
            "Customer Relationship Management",
            "Cloud Reporting Method",
            "Code Runtime Manager"
          ],
          answer: "Customer Relationship Management"
        },
        {
          type: "mcq",
          question: "What is an Org in Salesforce?",
          options: [
            "A single field",
            "A complete Salesforce environment",
            "A report only",
            "A user password"
          ],
          answer: "A complete Salesforce environment"
        },
        {
          type: "mcq",
          question: "What is an Object in Salesforce?",
          options: [
            "A database-like table used to store business data",
            "A login screen",
            "A password setting",
            "A dashboard chart"
          ],
          answer: "A database-like table used to store business data"
        },
        {
          type: "mcq",
          question: "What is a Record?",
          options: [
            "A row of data inside an object",
            "A Salesforce password",
            "A page layout",
            "A company logo"
          ],
          answer: "A row of data inside an object"
        },
        {
          type: "mcq",
          question: "Which one is a Standard Object?",
          options: [
            "Student__c",
            "Course__c",
            "Account",
            "Tutor_Review__c"
          ],
          answer: "Account"
        },
        {
          type: "mcq",
          question: "Which API name usually represents a Custom Object?",
          options: [
            "Account",
            "Contact",
            "Student__c",
            "User"
          ],
          answer: "Student__c"
        },
        {
          type: "mcq",
          question: "What is metadata in Salesforce?",
          options: [
            "Data about configuration and structure",
            "Only customer phone numbers",
            "Only deleted records",
            "Only password data"
          ],
          answer: "Data about configuration and structure"
        },
        {
          type: "mcq",
          question: "Where can you find Organization ID?",
          options: [
            "App Launcher",
            "Company Information",
            "Recycle Bin",
            "Reports tab"
          ],
          answer: "Company Information"
        },
        {
          type: "mcq",
          question: "What is Object Manager used for?",
          options: [
            "Managing objects, fields, layouts, and related settings",
            "Sending emails only",
            "Changing laptop settings",
            "Watching videos"
          ],
          answer: "Managing objects, fields, layouts, and related settings"
        },
        {
          type: "scenario",
          question: "Scenario: A TomCodeX Academy stakeholder asks for help during Cloud & Salesforce Platform Foundations. What is the difference between an org, app, object, field, and record? Explain the best Admin response, the risk to avoid, and how you would test it."
        },
        {
          type: "scenario",
          question: "Scenario: A TomCodeX Academy stakeholder asks for help during Cloud & Salesforce Platform Foundations. What is metadata, and how does it support declarative development? Explain the best Admin response, the risk to avoid, and how you would test it."
        },
        {
          type: "scenario",
          question: "Scenario: A TomCodeX Academy stakeholder asks for help during Cloud & Salesforce Platform Foundations. Where can an administrator find the Organization ID and user profile, and how should sensitive proof be masked? Explain the best Admin response, the risk to avoid, and how you would test it."
        },
        {
          type: "practical",
          question: "Practical verification: Explain how your completed task \"Prepare the TomCodeX Student Success CRM Practice Org\" produced this expected output: A safe practice org is ready, its core settings are documented, and the learner can navigate Setup, Users, Object Manager, and App Launcher."
        },
        {
          type: "practical",
          question: "Practical verification: Describe the evidence you created and how Zentom can verify correct Salesforce naming and hands-on completion. Required evidence includes a Company Information screenshot with masked Organization ID only, custom app proof, and an AppExchange risk review."
        }
      ],
      handsOnLab: {
        title: "Org Navigation Checklist",
        instructions: `
          <p class="text-slate-600 text-xs leading-relaxed mb-3">
            Complete every item in your <strong>Salesforce Developer Org or Trailhead Playground</strong>, then answer the <strong>Check My Work</strong> questions below.
          </p>
          <ol class="list-decimal pl-5 space-y-1.5 text-slate-600 text-xs">
            <li>Log in and open the <strong>App Launcher</strong>; count the apps and note three app names.</li>
            <li>Go to <strong>Setup → Company Information</strong> — note your org edition</li>
            <li>Go to <strong>Setup → Object Manager</strong> — note the first standard object listed</li>
            <li>Open <strong>Users</strong>, find your user record, and note your Profile name and active status.</li>
            <li>Record the Salesforce subdomain from the browser address bar.</li>
          </ol>
          <div class="mt-4 overflow-x-auto">
            <table class="w-full border-collapse text-left text-xs text-slate-600">
              <thead><tr class="bg-slate-100"><th class="border border-slate-200 p-2">Org Navigation Task</th><th class="border border-slate-200 p-2">Status</th></tr></thead>
              <tbody>
                <tr><td class="border border-slate-200 p-2">Logged in to Salesforce org</td><td class="border border-slate-200 p-2">Pending / Done</td></tr>
                <tr><td class="border border-slate-200 p-2">Opened App Launcher</td><td class="border border-slate-200 p-2">Pending / Done</td></tr>
                <tr><td class="border border-slate-200 p-2">Counted available apps</td><td class="border border-slate-200 p-2">Pending / Done</td></tr>
                <tr><td class="border border-slate-200 p-2">Opened Setup and checked Company Information</td><td class="border border-slate-200 p-2">Pending / Done</td></tr>
                <tr><td class="border border-slate-200 p-2">Found Organization ID</td><td class="border border-slate-200 p-2">Pending / Done</td></tr>
                <tr><td class="border border-slate-200 p-2">Opened Object Manager and found standard objects</td><td class="border border-slate-200 p-2">Pending / Done</td></tr>
                <tr><td class="border border-slate-200 p-2">Opened Users and found own Profile name</td><td class="border border-slate-200 p-2">Pending / Done</td></tr>
                <tr><td class="border border-slate-200 p-2">Noted Salesforce subdomain</td><td class="border border-slate-200 p-2">Pending / Done</td></tr>
              </tbody>
            </table>
          </div>
        `
      },
      labCriteria: [
        {
          id: "q1",
          question: "What is your Salesforce edition?",
          type: "text",
          placeholder: "Example: Developer Edition",
          acceptedValues: ["developer edition", "developer", "trailhead playground", "playground", "enterprise edition", "enterprise", "professional edition", "professional", "sandbox"],
          hint: "Open Setup, search for Company Information, and find Organization Edition."
        },
        {
          id: "q2",
          question: "What is your masked Organization ID only?",
          type: "text",
          placeholder: "Example: 00Dxx000000XXXX",
          minLength: 15,
          hint: "Open Company Information, but submit only a masked Organization ID such as 00Dxx000000XXXX."
        },
        {
          id: "q3",
          question: "What is your default timezone?",
          type: "text",
          placeholder: "Enter the timezone shown in Company Information",
          minLength: 3,
          hint: "Open Setup, search for Company Information, and find Default Time Zone."
        },
        {
          id: "q4",
          question: "What is the first standard object shown in Object Manager?",
          type: "text",
          placeholder: "Enter the object label or API name",
          minLength: 2,
          hint: "Open Setup, select Object Manager, and inspect the first standard object shown in your org."
        },
        {
          id: "q5",
          question: "What is your Salesforce Profile name?",
          type: "text",
          placeholder: "Example: System Administrator",
          minLength: 3,
          hint: "Open Setup, search for Users, and find your user record."
        },
        {
          id: "q6",
          question: "How many apps did you see in App Launcher?",
          type: "number",
          placeholder: "Enter the number of apps",
          minValue: 1,
          maxValue: 100,
          hint: "Open App Launcher and count the available apps."
        },
        {
          id: "q7",
          question: "What is your Salesforce subdomain?",
          type: "text",
          placeholder: "Enter the part before .lightning.force.com",
          minLength: 3,
          hint: "Look at the browser address bar while logged in to Salesforce."
        },
        {
          id: "q8",
          question: "Confirm your LEITR spaced review schedule (in days) to reinforce learning.",
          type: "text",
          placeholder: "Example: 1 day, 3 days, 7 days",
          acceptedValues: [
            "1 day, 3 days, 7 days",
            "1, 3, 7",
            "1, 3, 7 days",
            "1 day, 3 day, 7 day",
            "1,3,7",
            "1,3,7 days",
            "1 day, 3 days, 7 days spaced review",
            "1 day,3 days,7 days",
            "1, 3, and 7 days",
            "1, 3, and 7"
          ],
          hint: "According to the LEITR study system, what are the three spaced intervals for reviewing your notes and automation?"
        }
      ]
    }
  },
  {
    title: "Data Modeling & Object Configuration",
    description: "Design the TomCodeX Academy Student Success CRM data model using custom objects, suitable field types, relationships, Schema Builder, and data-modeling best practices.",
    points: [
      "Translate business requirements into Salesforce objects, fields, and relationships.",
      "Choose suitable field types and understand their impact on data quality and reporting.",
      "Create Formula fields that calculate values from other fields.",
      "Compare Lookup and Master-Detail relationships.",
      "Use a junction object to model many-to-many relationships.",
      "Review and communicate a data model using Schema Builder."
    ],
    resources: [
      ["Trailhead Data Modeling", "https://trailhead.salesforce.com/content/learn/modules/data_modeling"],
      ["Object Reference Guide", "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/"]
    ],
    practice: [
      "Create Student, Course, and Course Enrollment custom objects.",
      "Add business fields using suitable Salesforce field types.",
      "Create a Formula field that displays each enrollment's calculated progress status.",
      "Connect students and courses through the Course Enrollment junction object.",
      "Review the completed model in Schema Builder."
    ],
    questions: [
      "How do business requirements become objects, fields, and relationships?",
      "How do you choose an appropriate Salesforce field type?",
      "How does a Formula field differ from a stored field?",
      "What is the difference between Lookup and Master-Detail relationships?",
      "When should you use Master-Detail?",
      "What does a junction object solve?",
      "How can a poor data model affect security, automation, and reporting?"
    ],
    richContent: {
      moduleGoal: "Design and build the core data model for the TomCodeX Academy Student Success CRM so Salesforce can store students, courses, and enrollments accurately.",
      learningOutcomes: [
        "Convert a business requirement into objects, fields, and relationships.",
        "Create custom objects with clean labels, API names, descriptions, and record names.",
        "Choose suitable text, email, phone, date, picklist, checkbox, number, and percentage fields.",
        "Create Formula fields and explain when Salesforce recalculates their values.",
        "Explain and select Lookup or Master-Detail relationships.",
        "Use Course Enrollment as a junction object between Student and Course.",
        "Understand relationship behavior, ownership, deletion, required fields, and roll-up summaries.",
        "Use Schema Builder to review and communicate the data model."
      ],
      simpleExplanation: `
        <h4 class="font-bold text-slate-800 text-sm">What is Data Modeling?</h4>
        <p class="text-slate-600 text-xs mt-1 leading-relaxed">Data modeling is the process of deciding what business information Salesforce must store and how that information connects. A strong model makes data easier to enter, secure, automate, report on, and maintain.</p>
        <h4 class="font-bold text-slate-800 text-sm mt-3">The TomCodeX Academy Model</h4>
        <ul class="list-disc pl-5 mt-2 space-y-1 text-slate-600 text-xs">
          <li><strong>Student</strong> stores each learner's details.</li>
          <li><strong>Course</strong> stores each available Academy course.</li>
          <li><strong>Course Enrollment</strong> connects a student to a course and stores progress, dates, and enrollment status.</li>
        </ul>
        <p class="text-slate-600 text-xs mt-2 leading-relaxed">One student can join many courses, and one course can contain many students. Course Enrollment resolves this many-to-many relationship.</p>
      `,
      detailedLessonSections: [
        { title: "Objects and Records", content: `<p>An object represents a business entity or process. A record is one instance of that object. Use standard objects when they fit the requirement and create custom objects when the business concept is unique.</p>` },
        { title: "Choosing Field Types", content: `<p>Choose field types based on the data and expected behavior: Email for validation, Phone for phone formatting, Date for calendar values, Picklist for controlled choices, Checkbox for true/false, Number for quantities, and Percent for progress.</p>` },
        { title: "Formula Fields", content: `<p>A Formula field calculates its value from other fields and displays the latest result whenever a record is viewed. The result is not stored as a separately entered value. Choose a return type such as Text, Number, Currency, Date, Checkbox, or Percent, then build the expression using fields, operators, and functions.</p><p class="mt-2">For Course Enrollment, create a Text Formula field named <code>Progress_Status__c</code> using <code>IF(Progress_Percentage__c &gt;= 1, "Completed", IF(Progress_Percentage__c &gt; 0, "In Progress", "Not Started"))</code>. In Salesforce formulas, a Percent value of <code>1</code> represents 100%.</p>` },
        { title: "Lookup Relationship", content: `<p>A Lookup relationship loosely connects two records. The child can usually exist independently, ownership remains separate, and deleting the parent does not automatically delete the child unless configured.</p>` },
        { title: "Master-Detail Relationship", content: `<p>A Master-Detail relationship tightly connects child records to a parent. The detail record requires a master, inherits ownership and sharing, can be deleted with its master, and supports roll-up summary fields on the master.</p>` },
        { title: "Junction Objects", content: `<p>A junction object contains two relationships and resolves a many-to-many requirement. Course Enrollment connects Student and Course while storing information specific to that enrollment.</p>` },
        { title: "Schema Builder", content: `<p>Schema Builder provides a visual view of objects, fields, and relationships. Use it to review a model, explain it to stakeholders, and identify missing or incorrect connections.</p>` }
      ],
      keyNotes: [
        "Start with the business process before creating objects or fields.",
        "Use standard Salesforce capabilities when they correctly fit the requirement.",
        "Choose field types carefully because changing them later can affect existing data and automation.",
        "Formula fields calculate at read time and cannot be manually edited by users.",
        "A Formula field returns a calculated value; a validation-rule formula returns True or False to decide whether Salesforce should block a save.",
        "Lookup is a loose relationship; Master-Detail is a tightly controlled relationship.",
        "Master-Detail supports roll-up summary fields and inherited ownership and sharing.",
        "A junction object resolves a many-to-many relationship.",
        "Course Enrollment stores information about one Student joining one Course.",
        "Add descriptions and review API names before saving metadata."
      ],
      flashcards: [
        { front: "What is data modeling?", back: "Designing what business data Salesforce stores and how that data connects." },
        { front: "What should become an object?", back: "A distinct business entity or process that needs its own records, fields, security, automation, and reporting." },
        { front: "Lookup versus Master-Detail?", back: "Lookup is a loose connection. Master-Detail requires the master and inherits ownership and sharing." },
        { front: "What feature is available with Master-Detail?", back: "Roll-up summary fields on the master object." },
        { front: "What is a junction object?", back: "An object with two relationships used to resolve a many-to-many relationship." },
        { front: "Why is Course Enrollment a junction object?", back: "It connects many Students to many Courses and stores enrollment-specific details." },
        { front: "Which field type should store controlled statuses?", back: "A Picklist field." },
        { front: "Which field type should store progress percentage?", back: "A Percent field." },
        { front: "What is a Formula field?", back: "A read-only field that calculates and displays a value from other fields, operators, and functions." },
        { front: "What is a cross-object formula?", back: "A Formula field that references fields on a related parent record." },
        { front: "What is Schema Builder used for?", back: "Visually reviewing and communicating Salesforce objects, fields, and relationships." },
        { front: "Why add metadata descriptions?", back: "They explain the business purpose and make future maintenance safer." }
      ],
      realBusinessExample: `
        <p class="text-slate-600 text-xs leading-relaxed">TomCodeX Academy needs to answer questions such as: Which courses has Vijay joined? Which students are enrolled in Salesforce Admin? What is each student's progress and status?</p>
        <p class="text-slate-600 text-xs mt-2 leading-relaxed">The Student and Course objects cannot store this many-to-many information reliably by themselves. Course Enrollment connects them and stores Start Date, Progress Percentage, and Enrollment Status for each enrollment.</p>
      `,
      whereUsed: `
        <div class="space-y-3">
          <div><strong class="text-brand-700 text-xs block">Object Manager</strong><span class="text-slate-500 text-xs">Create and configure objects, fields, relationships, record names, descriptions, and deployment status.</span></div>
          <div><strong class="text-brand-700 text-xs block">Fields & Relationships</strong><span class="text-slate-500 text-xs">Add suitable business fields and connect records.</span></div>
          <div><strong class="text-brand-700 text-xs block">Schema Builder</strong><span class="text-slate-500 text-xs">Review the complete data model visually.</span></div>
          <div><strong class="text-brand-700 text-xs block">Reports, Security, and Automation</strong><span class="text-slate-500 text-xs">All rely on a clear and reliable data model.</span></div>
        </div>
      `,
      stepByStepImplementation: [
        "Go to <strong>Setup → Object Manager → Create → Custom Object</strong> and create <strong>Student</strong> with API name <code>Student__c</code>. Use Student Name as the record name and add a clear description.",
        "Create Student fields: Email (Email), Phone (Phone), Registration Date (Date), Course Interest (Picklist), and Learning Status (Picklist).",
        "Create <strong>Course</strong> with API name <code>Course__c</code>. Add Course Code (Text), Duration Hours (Number), Level (Picklist), and Active (Checkbox).",
        "Create <strong>Course Enrollment</strong> with API name <code>Course_Enrollment__c</code>. Use Auto Number for the record name, such as ENR-{0000}.",
        "Add relationships from Course Enrollment to Student and Course. Use Master-Detail when the enrollment must depend on both parents; use Lookup when independent ownership or optional relationships are required.",
        "Add Start Date (Date), Progress Percentage (Percent), and Enrollment Status (Picklist) to Course Enrollment.",
        "Create a Text Formula field on Course Enrollment named <strong>Progress Status</strong> with API name <code>Progress_Status__c</code>. Use <code>IF(Progress_Percentage__c &gt;= 1, \"Completed\", IF(Progress_Percentage__c &gt; 0, \"In Progress\", \"Not Started\"))</code>.",
        "Test the Formula field with Progress Percentage values of 0%, 50%, and 100%, and confirm that it displays Not Started, In Progress, and Completed.",
        "Open <strong>Setup → Schema Builder</strong>, select Student, Course, and Course Enrollment, and confirm the relationships are correct.",
        "Create sample Student, Course, and Course Enrollment records to confirm the model supports the business process."
      ],
      bestPractices: [
        "Model the business process on paper before creating Salesforce metadata.",
        "Use clear singular object labels, meaningful field labels, descriptions, and clean API names.",
        "Use controlled Picklist values when reporting and automation depend on consistent choices.",
        "Keep Formula fields focused and document complex calculations so future administrators can maintain them.",
        "Choose Master-Detail only after reviewing ownership, sharing, deletion, and required-parent behavior.",
        "Avoid duplicate fields that store the same information in multiple objects.",
        "Test the model with realistic sample records and reports."
      ],
      commonMistakes: [
        "Creating one large object for unrelated business concepts.",
        "Using Text fields for dates, percentages, email addresses, or controlled statuses.",
        "Expecting users to type into a Formula field or assuming its calculated result is stored separately.",
        "Choosing Master-Detail without understanding inherited security and cascade deletion.",
        "Creating relationships in the wrong direction.",
        "Storing course details repeatedly on Student instead of using Course Enrollment.",
        "Leaving descriptions blank and accepting unclear API names."
      ],
      whyMattersInJob: `<p class="text-slate-600 text-xs leading-relaxed">Data modeling decisions affect almost every Salesforce feature. Poor models create duplicate data, confusing security, difficult automation, inaccurate reports, and expensive rework. Administrators must understand the business process and explain why each object, field, and relationship exists.</p>`,
      interviewQuestions: [
        "What is data modeling in Salesforce?",
        "How do you decide whether to use a standard or custom object?",
        "How do you choose the correct field type?",
        "What is a Formula field, and when is its value calculated?",
        "What is a cross-object formula?",
        "How is a Formula field different from a validation rule?",
        "What is the difference between Lookup and Master-Detail?",
        "What happens to ownership and sharing in Master-Detail?",
        "What is cascade deletion?",
        "What is a roll-up summary field?",
        "What is a junction object?",
        "How do you model a many-to-many relationship?",
        "What is Schema Builder used for?",
        "Can a detail record exist without its master?",
        "Why are Picklists useful for data quality?",
        "How can poor data modeling affect reports and automation?"
      ],
      practicalAssignment: [
        "Draw the Student, Course, and Course Enrollment data model.",
        "List each object's purpose and API name.",
        "List at least four fields and their field types for each object.",
        "Create and document the Progress Status Formula field on Course Enrollment.",
        "Document the relationship type used between Course Enrollment and each parent.",
        "Explain why Course Enrollment is a junction object.",
        "Capture the completed model details from Schema Builder."
      ],
      knowledgeCheckQuestions: [
        "What are the three core objects in the Student Success CRM?",
        "Which object resolves the many-to-many relationship?",
        "What field type should store Enrollment Status?",
        "What field type should store Progress Percentage?",
        "Does a Formula field store a separately entered value?",
        "What return type is used by the Progress Status Formula field?",
        "What is the difference between Lookup and Master-Detail?",
        "Which relationship supports roll-up summaries?",
        "What behavior should be reviewed before choosing Master-Detail?",
        "What is Schema Builder used for?"
      ],
      completionChecklist: [
        "I understand how business requirements become objects, fields, and relationships.",
        "I created Student, Course, and Course Enrollment custom objects.",
        "I added suitable fields and descriptions.",
        "I created and tested the Progress Status Formula field.",
        "I understand Lookup and Master-Detail relationships.",
        "I understand why Course Enrollment is a junction object.",
        "I reviewed the model in Schema Builder.",
        "I created sample records and completed Check My Work.",
        "I scored 80% or higher in the AI Mastery Test."
      ],
      finalSummary: "A reliable Salesforce solution begins with a reliable data model. In this module, you designed the Student Success CRM using Student, Course, and Course Enrollment, chose suitable fields, connected records with relationships, and reviewed the model in Schema Builder.",
      masteryPreparationQuestions: [
        "What is data modeling and why does it matter?",
        "When should a business concept become a custom object?",
        "How do field types improve data quality?",
        "How do Formula fields work, and what return types can they use?",
        "What is the difference between a Formula field and a validation-rule formula?",
        "Compare Lookup and Master-Detail relationships.",
        "How do ownership and sharing behave in Master-Detail?",
        "What is cascade deletion?",
        "What are roll-up summary fields?",
        "What is a junction object?",
        "How does Course Enrollment resolve a many-to-many relationship?",
        "How can Schema Builder help an administrator?",
        "How can poor data modeling affect reports?",
        "Why should API names and descriptions be reviewed?"
      ],
      handsOnLab: {
        title: "Build the Student Success CRM Data Model",
        instructions: `
          <p class="text-slate-600 text-xs leading-relaxed mb-3">Create and verify the core TomCodeX Academy data model in your Salesforce practice org.</p>
          <ol class="list-decimal pl-5 space-y-1.5 text-slate-600 text-xs">
            <li>Create <strong>Student</strong>, <strong>Course</strong>, and <strong>Course Enrollment</strong> custom objects.</li>
            <li>Add suitable business fields to each object.</li>
            <li>Create and test the <strong>Progress Status</strong> Formula field on Course Enrollment.</li>
            <li>Connect Course Enrollment to Student and Course.</li>
            <li>Review all three objects and their relationships in Schema Builder.</li>
            <li>Create sample records to prove the model works.</li>
          </ol>
        `
      },
      labCriteria: [
        { id: "q1", question: "What is the API name of your Student custom object?", type: "text", placeholder: "Example: Student__c", acceptedValues: ["student__c"], hint: "Open Object Manager and confirm the Student object's API Name." },
        { id: "q2", question: "What is the API name of your Course custom object?", type: "text", placeholder: "Example: Course__c", acceptedValues: ["course__c"], hint: "Open Object Manager and confirm the Course object's API Name." },
        { id: "q3", question: "What is the API name of your Course Enrollment custom object?", type: "text", placeholder: "Example: Course_Enrollment__c", acceptedValues: ["course_enrollment__c"], hint: "Open Object Manager and confirm the Course Enrollment object's API Name." },
        { id: "q4", question: "What relationship type connects Course Enrollment to Student?", type: "text", placeholder: "Lookup or Master-Detail", acceptedValues: ["lookup", "master-detail", "master detail"], hint: "Open Course Enrollment → Fields & Relationships and inspect the Student relationship." },
        { id: "q5", question: "What relationship type connects Course Enrollment to Course?", type: "text", placeholder: "Lookup or Master-Detail", acceptedValues: ["lookup", "master-detail", "master detail"], hint: "Open Course Enrollment → Fields & Relationships and inspect the Course relationship." },
        { id: "q6", question: "What field type did you use for Progress Percentage?", type: "text", placeholder: "Enter the field type", acceptedValues: ["percent", "percentage"], hint: "Open the Progress Percentage field and confirm its Data Type." },
        { id: "q7", question: "Name the three custom objects you reviewed in Schema Builder.", type: "text", placeholder: "Student, Course, Course Enrollment", minLength: 25, hint: "Open Schema Builder and confirm all three objects are visible." },
        { id: "q8", question: "What is the API name of the Formula field that calculates enrollment progress status?", type: "text", placeholder: "Example: Progress_Status__c", acceptedValues: ["progress_status__c"], hint: "Open Course Enrollment Fields & Relationships and confirm the Progress Status field's API Name." }
      ]
    }
  },
  {
    title: "User Access and Security",
    description: "Secure the Student Success CRM using users, profiles, permission sets, field-level security, organization-wide defaults, roles, and sharing rules.",
    points: [
      "Understand how object, field, and record access work together.",
      "Use profiles and permission sets to provide least-privilege access.",
      "Protect Student and Course Enrollment records with field-level security and sharing.",
      "Test access using Tutor and Program Manager personas."
    ],
    resources: [
      ["Trailhead Data Security", "https://trailhead.salesforce.com/content/learn/modules/data_security"],
      ["Salesforce Security Guide", "https://help.salesforce.com/s/articleView?id=sf.security_data_access.htm&type=5"]
    ],
    practice: [
      "Create Tutor and Program Manager user-access personas.",
      "Create a Student Success Tutor permission set.",
      "Protect sensitive Student fields with field-level security.",
      "Configure and test record sharing for Student and Course Enrollment records."
    ],
    questions: [
      "Profile versus Permission Set?",
      "Why start with restrictive OWD?",
      "How do object, field, and record access combine?"
    ],
    richContent: {
      moduleGoal: "Secure the Student Success CRM data model from Module 2 so tutors and program managers receive only the access required for their jobs.",
      learningOutcomes: [
        "Explain object-level, field-level, and record-level access.",
        "Compare profiles, permission sets, permission set groups, roles, and sharing rules.",
        "Apply least-privilege access to Student, Course, and Course Enrollment.",
        "Protect sensitive Student fields with field-level security.",
        "Configure private record access and controlled sharing.",
        "Test the effective access of Tutor and Program Manager personas."
      ],
      simpleExplanation: `<h4 class="font-bold text-slate-800 text-sm">Salesforce Security Layers</h4><p class="text-slate-600 text-xs mt-1 leading-relaxed">Salesforce access is layered. A user must first have object permission, then field permission, and finally record access. The most restrictive missing layer prevents access.</p><h4 class="font-bold text-slate-800 text-sm mt-3">Least Privilege</h4><p class="text-slate-600 text-xs mt-1 leading-relaxed">Give users only the access needed for their responsibilities. Add access with permission sets instead of creating many highly customized profiles.</p>`,
      detailedLessonSections: [
        { title: "Profiles and Permission Sets", content: `<p>Profiles provide each user's baseline access. Permission sets add specific access without changing the profile. Permission set groups combine related permission sets for a job persona.</p>` },
        { title: "Object and Field Access", content: `<p>Object permissions control Create, Read, Edit, and Delete. Field-level security controls whether individual fields are visible or editable, including through reports and APIs.</p>` },
        { title: "Record-Level Access", content: `<p>Organization-Wide Defaults establish baseline record access. Roles, sharing rules, teams, and manual sharing can open access when the business requires it.</p>` },
        { title: "Roles versus Profiles", content: `<p>Profiles and permission sets control what a user can do. Roles primarily influence which records a user can access through the role hierarchy.</p>` },
        { title: "Testing Effective Access", content: `<p>Security is not complete until it is tested with realistic personas. Confirm both expected access and restricted access.</p>` }
      ],
      keyNotes: [
        "Object, field, and record access must all permit an action.",
        "Profiles provide baseline access; permission sets add access.",
        "Roles primarily affect record visibility, not object permissions.",
        "Start with restrictive Organization-Wide Defaults and open access intentionally.",
        "Field-level security protects fields across pages, reports, and APIs.",
        "Always test security with realistic user personas."
      ],
      flashcards: [
        { front: "Profile versus permission set?", back: "A profile provides baseline access; a permission set adds access without replacing the profile." },
        { front: "What does field-level security control?", back: "Whether a user can view or edit an individual field across Salesforce." },
        { front: "What do Organization-Wide Defaults define?", back: "The baseline record access for an object." },
        { front: "What does the role hierarchy mainly affect?", back: "Record visibility for users above others in the hierarchy." },
        { front: "What is least privilege?", back: "Giving users only the minimum access required to perform their jobs." },
        { front: "How do object, field, and record access combine?", back: "All required security layers must allow the user action." }
      ],
      realBusinessExample: `<p class="text-slate-600 text-xs leading-relaxed">Tutors need to view assigned students and update learning status, but should not edit sensitive contact or administrative fields. Program Managers need broader access to students, courses, enrollments, reports, and dashboards.</p>`,
      whereUsed: `<div class="space-y-3"><div><strong class="text-brand-700 text-xs block">Profiles and Permission Sets</strong><span class="text-slate-500 text-xs">Control object, field, app, and system permissions.</span></div><div><strong class="text-brand-700 text-xs block">Sharing Settings</strong><span class="text-slate-500 text-xs">Configure Organization-Wide Defaults and sharing rules.</span></div><div><strong class="text-brand-700 text-xs block">Roles</strong><span class="text-slate-500 text-xs">Support record visibility through the hierarchy.</span></div></div>`,
      stepByStepImplementation: [
        "Review the Student, Course, and Course Enrollment objects created in Module 2.",
        "Define Tutor and Program Manager responsibilities and required access.",
        "Create a permission set named <strong>Student Success Tutor</strong> with Read/Edit access to Student and Course Enrollment and Read access to Course.",
        "Use field-level security to restrict sensitive Student fields from the Tutor persona.",
        "Review Organization-Wide Defaults for Student and Course Enrollment and select an appropriately restrictive baseline.",
        "Create a sharing rule or role-based access path that gives Program Managers the records they need.",
        "Test both allowed and restricted actions for each persona."
      ],
      bestPractices: [
        "Use least privilege and add access with permission sets.",
        "Document why every elevated permission is required.",
        "Test expected access and denied access.",
        "Avoid assigning powerful permissions such as Modify All Data without a clear requirement."
      ],
      commonMistakes: [
        "Using profiles for every small access variation.",
        "Confusing roles with profiles.",
        "Making Organization-Wide Defaults too open.",
        "Testing only with a System Administrator user.",
        "Forgetting that field-level security also affects reports and APIs."
      ],
      whyMattersInJob: `<p class="text-slate-600 text-xs leading-relaxed">Security mistakes can expose sensitive data or prevent users from working. Administrators must translate business responsibilities into maintainable access and prove that restrictions work.</p>`,
      interviewQuestions: [
        "What is the difference between a profile and a permission set?",
        "What is field-level security?",
        "What are Organization-Wide Defaults?",
        "What is the role hierarchy?",
        "How do object, field, and record access combine?",
        "Why should administrators follow least privilege?",
        "How would you troubleshoot a user who cannot see a record?"
      ],
      practicalAssignment: [
        "Document Tutor and Program Manager access requirements.",
        "List object permissions for Student, Course, and Course Enrollment.",
        "List sensitive Student fields and their required visibility.",
        "Document the record-sharing approach.",
        "Record positive and negative access-test results."
      ],
      knowledgeCheckQuestions: [
        "Which security layer controls Create, Read, Edit, and Delete?",
        "Which security layer controls an individual field?",
        "Which setting establishes baseline record access?",
        "What is the difference between a role and a profile?",
        "Why use permission sets?",
        "Why must restricted access be tested?"
      ],
      completionChecklist: [
        "I defined Tutor and Program Manager personas.",
        "I created the Student Success Tutor permission set.",
        "I protected sensitive fields.",
        "I reviewed Organization-Wide Defaults.",
        "I configured controlled record sharing.",
        "I tested expected and restricted access.",
        "I scored 80% or higher in the AI Mastery Test."
      ],
      finalSummary: "You secured the Student Success CRM data model using layered Salesforce access controls. These personas and permissions prepare the app experience built in Module 4.",
      handsOnLab: {
        title: "Secure the Student Success CRM",
        instructions: `<p class="text-slate-600 text-xs leading-relaxed mb-3">Configure and test Tutor access to the objects created in Module 2.</p><ol class="list-decimal pl-5 space-y-1.5 text-slate-600 text-xs"><li>Create a Student Success Tutor permission set.</li><li>Assign object permissions for Student, Course, and Course Enrollment.</li><li>Restrict at least one sensitive Student field.</li><li>Review record-level access and configure controlled sharing.</li><li>Test both permitted and restricted actions.</li></ol>`
      },
      labCriteria: [
        { id: "q1", question: "What is the exact name of the Tutor permission set?", type: "text", placeholder: "Enter permission set name", acceptedValues: ["student success tutor"], hint: "Open Setup → Permission Sets." },
        { id: "q2", question: "Which three custom objects did you configure access for?", type: "text", placeholder: "Student, Course, Course Enrollment", minLength: 25, hint: "Review Object Settings in the permission set." },
        { id: "q3", question: "Name one sensitive Student field restricted from Tutors.", type: "text", placeholder: "Enter restricted field", minLength: 3, hint: "Review Student field-level security." },
        { id: "q4", question: "What Organization-Wide Default did you review for Student records?", type: "text", placeholder: "Example: Private", acceptedValues: ["private", "public read only", "public read/write", "controlled by parent"], hint: "Open Setup → Sharing Settings." },
        { id: "q5", question: "Describe one restricted action you tested.", type: "text", placeholder: "Explain the denied action", minLength: 15, hint: "Document a negative security test." }
      ]
    }
  },
  {
    title: "Page Layouts, Lightning App, and User Experience",
    description: "Customize user interfaces with page layouts, list views, tabs, and create a custom Lightning app.",
    points: [
      "Create custom tabs for Student, Course, and Enrollment custom objects.",
      "Design a custom Lightning CRM App to group Student Success tabs together.",
      "Customize page layouts and assign compact views for optimal layout."
    ],
    resources: [
      ["App Customization Trailhead", "https://trailhead.salesforce.com/content/learn/modules/lex_migration_customization"],
      ["Lightning App Builder Guide", "https://help.salesforce.com/s/articleView?id=sf.app_builder_overview.htm&type=5"]
    ],
    practice: [
      "Create the Student Success CRM Lightning App.",
      "Create custom object tabs for Student, Course, and Enrollment.",
      "Customize and assign the Student Layout page layout."
    ],
    questions: [
      "What is the difference between a page layout and a Lightning record page?",
      "How do compact layouts improve user experience on mobile devices?",
      "What features can be customized inside the Lightning App Setup?"
    ],
    richContent: {
      moduleGoal: "Group custom objects into a dedicated student CRM application and customize page layouts for ease of data entry.",
      learningOutcomes: [
        "Create custom tabs for custom objects (Student, Course, Enrollment).",
        "Build a custom Lightning App called 'Student Success CRM'.",
        "Configure fields and sections on the Student custom page layout.",
        "Create a custom List View to filter active student records."
      ],
      simpleExplanation: `
        <h4 class="font-bold text-slate-800 text-sm">Lightning Apps</h4>
        <p class="text-slate-600 text-xs mt-1 leading-relaxed">
          A Lightning App is a curated collection of tabs, utilities, and items grouped together to serve a specific business user persona. It gives your users a single workspace where they can find everything they need.
        </p>
        <h4 class="font-bold text-slate-800 text-sm mt-3">Page Layouts and List Views</h4>
        <p class="text-slate-600 text-xs mt-1 leading-relaxed">
          Page Layouts control which fields, buttons, and related lists are visible on detail pages, and in what order. List Views allow users to filter and view lists of records that match certain criteria (e.g., Active Students).
        </p>
      `,
      realBusinessExample: `
        <p class="text-slate-600 text-xs leading-relaxed">
          At <strong>TomCodeX Academy</strong>, program managers need a unified workspace to manage the CRM. We build a custom app called <strong>Student Success CRM</strong> containing:
        </p>
        <ul class="list-disc pl-5 mt-2 space-y-1 text-slate-600 text-xs">
          <li><strong>Student Tab</strong>: A custom tab linking to Student__c records.</li>
          <li><strong>Course Tab</strong>: A custom tab linking to Course__c records.</li>
          <li><strong>Course Enrollment Tab</strong>: A custom tab linking to Course_Enrollment__c records.</li>
        </ul>
      `,
      whereUsed: `
        <div class="space-y-3">
          <div>
            <strong class="text-brand-700 text-xs block">App Manager</strong>
            <span class="text-slate-500 text-xs">The Setup tool used to create, customize, and assign Lightning Apps.</span>
          </div>
          <div>
            <strong class="text-brand-700 text-xs block">Page Layout Editor</strong>
            <span class="text-slate-500 text-xs">The drag-and-drop editor used to organize field sections, buttons, and related lists.</span>
          </div>
        </div>
      `,
      stepByStepImplementation: [
        "Go to <strong>Setup → Custom Code → Tabs</strong> and create custom Custom Object Tabs for Student, Course, and Enrollment.",
        "Go to <strong>Setup → App Manager</strong> and click New Lightning App. Name it <strong>Student Success CRM</strong>.",
        "Add Student, Course, and Enrollment tabs to the navigation items and assign the app to your profile.",
        "Go to <strong>Setup → Object Manager → Student__c → Page Layouts</strong> and edit the default layout. Group custom fields into a section called 'Contact Info'.",
        "Create a custom List View on the Student tab named 'Active Students' to filter records by Status."
      ],
      bestPractices: [
        "Only display necessary fields on page layouts to reduce user cognitive load and avoid clutter.",
        "Name custom list views clearly so users understand the filter criteria immediately."
      ],
      commonMistakes: [
        "Forgetting to assign the custom Lightning App to profiles, causing it to be invisible to users.",
        "Putting too many fields in a single page layout section instead of grouping them logically."
      ],
      whyMattersInJob: `
        <p class="text-slate-600 text-xs leading-relaxed">
          Creating apps and customizing page layouts is one of the most common everyday requests for Salesforce Administrators. Making fields easy to find improves user adoption and data quality.
        </p>
      `,
      interviewQuestions: [
        "What is a Lightning App and how does it help users?",
        "Explain how page layouts differ from compact layouts.",
        "How do you configure list view visibility for different user groups?"
      ],
      handsOnLab: {
        title: "Lab 1: Configure App Experience & Custom Layouts",
        instructions: `
          <p class="text-slate-600 text-xs leading-relaxed mb-3">
            Perform these steps in your <strong>Salesforce Developer Org</strong>, then answer the <strong>Check My Work</strong> questions below to verify your work.
          </p>
          <ol class="list-decimal pl-5 space-y-1.5 text-slate-600 text-xs">
            <li>Create Custom Object Tabs for your custom objects (Student, Course, Enrollment).</li>
            <li>Build a new Lightning App named <strong>Student Success CRM</strong>, add the custom tabs, and assign it to System Administrator.</li>
            <li>In Object Manager, customize the Student Page Layout to organize your fields.</li>
            <li>On the Students tab, create a new List View named <strong>Active Students</strong>.</li>
          </ol>
        `
      },
      labCriteria: [
        {
          id: "q1",
          question: "What is the exact name of the Lightning App you created?",
          type: "text",
          placeholder: "Enter the Lightning App Name",
          hint: "Verify the exact app name you created in Setup App Manager."
        },
        {
          id: "q2",
          question: "What is the API name of the Student tab you created?",
          type: "text",
          placeholder: "Enter the Student Tab API name",
          hint: "Verify the custom tab API name (usually Student__c)."
        },
        {
          id: "q3",
          question: "What is the API name of the Course tab you created?",
          type: "text",
          placeholder: "Enter the Course Tab API name",
          hint: "Verify the Course tab API name (usually Course__c)."
        },
        {
          id: "q4",
          question: "What is the API name of the Enrollment tab you created?",
          type: "text",
          placeholder: "Enter the Enrollment Tab API name",
          hint: "Verify the Course Enrollment tab API name (usually Course_Enrollment__c)."
        },
        {
          id: "q5",
          question: "Name the customized Student Page Layout you configured.",
          type: "text",
          placeholder: "Enter the customized Page Layout name",
          hint: "Verify the name of the page layout under Student Object Manager Page Layouts."
        },
        {
          id: "q6",
          question: "What is the name of the customized List View you created for Students?",
          type: "text",
          placeholder: "Enter the custom List View name",
          hint: "Verify the name of the list view you configured on the Student record list page."
        }
      ]
    }
  },
  {
    title: "Validation Rules and Data Quality",
    description: "Create efficient record experiences and enforce business rules without code using Salesforce validation rules.",
    points: [
      "Explain the purpose of validation rules and data quality in Salesforce.",
      "Distinguish Formula fields from validation-rule formulas.",
      "Create validation rules to enforce email and phone fields.",
      "Configure enrollment status rules to restrict status transitions."
    ],
    resources: [
      ["Formulas and Validations Trailhead", "https://trailhead.salesforce.com/content/learn/modules/point_click_business_logic"],
      ["Salesforce Validation Rules Help", "https://help.salesforce.com/s/articleView?id=sf.validation_rules_overview.htm&type=5"]
    ],
    practice: [
      "Create a validation rule requiring Student Email on Student__c.",
      "Create a validation rule for Enrollment Status on Course_Enrollment__c.",
      "Compare a calculated Formula field with a Boolean validation-rule formula.",
      "Test validation rules with positive and negative records."
    ],
    questions: [
      "What is the difference between a required field and a validation rule?",
      "What is the difference between a Formula field and a validation-rule formula?",
      "How do validation rules improve data quality?",
      "Can validation rules bypass system administrators?"
    ],
    richContent: {
      moduleGoal: "Build data quality controls for your Student Success CRM using validation rules to prevent incorrect data entry.",
      learningOutcomes: [
        "Enforce required fields (like Email) conditionally using formulas.",
        "Restrict invalid status changes on core CRM objects.",
        "Understand formula functions like ISBLANK, ISPICKVAL, and AND/OR logic.",
        "Explain the difference between calculated Formula fields and Boolean validation-rule formulas.",
        "Differentiate between UI-level requirements and system-level validation."
      ],
      simpleExplanation: `
        <h4 class="font-bold text-slate-800 text-sm">What is a Validation Rule?</h4>
        <p class="text-slate-600 text-xs mt-1 leading-relaxed">
          A Validation Rule is a business rule defined by a formula that evaluates to <strong>True</strong> or <strong>False</strong>. If the formula evaluates to True, it means the record contains invalid data. Salesforce blocks the save operation and displays a custom error message to the user.
        </p>
        <h4 class="font-bold text-slate-800 text-sm mt-3">Data Quality at the Core</h4>
        <p class="text-slate-600 text-xs mt-1 leading-relaxed">
          While making a field required on a Page Layout makes it mandatory on the UI, it doesn't prevent API uploads (like Data Loader) from inserting blank values. Validation Rules run at the database level, ensuring data quality across all entry channels.
        </p>
      `,
      detailedLessonSections: [
        { title: "Formula Field vs Validation Rule", content: `<p>A Formula field returns and displays a calculated value, such as the Progress Status created in Module 2. A validation-rule formula must return <strong>True</strong> or <strong>False</strong>. When it returns True, Salesforce considers the entered data invalid and blocks the save.</p>` },
        { title: "Common Formula Functions", content: `<p>Use <code>ISBLANK()</code> to find missing values, <code>ISPICKVAL()</code> to compare picklists, <code>AND()</code> and <code>OR()</code> to combine conditions, <code>TEXT()</code> to convert values to text, <code>IF()</code> to return different calculated results, and <code>TODAY()</code> for the current date.</p>` },
        { title: "Reading Validation Logic", content: `<p>Write the formula to describe the invalid condition. For example, <code>AND(ISPICKVAL(Enrollment_Status__c, "Completed"), Progress_Percentage__c &lt; 1)</code> returns True and blocks an enrollment from being completed before progress reaches 100%.</p>` }
      ],
      keyNotes: [
        "Formula fields calculate and display values; validation rules prevent invalid records from being saved.",
        "A validation rule blocks the save when its formula evaluates to True.",
        "Write validation logic to describe the invalid condition.",
        "Use clear error messages that tell users how to correct the record.",
        "Test both records that should pass and records that should be blocked."
      ],
      flashcards: [
        { front: "What does a Formula field return?", back: "A calculated value displayed on the record." },
        { front: "What must a validation-rule formula return?", back: "True or False." },
        { front: "What happens when a validation rule returns True?", back: "Salesforce blocks the save and displays the configured error message." },
        { front: "Which function checks whether a field is empty?", back: "ISBLANK()." },
        { front: "Which function compares a Picklist value?", back: "ISPICKVAL()." }
      ],
      realBusinessExample: `
        <p class="text-slate-600 text-xs leading-relaxed">
          At <strong>TomCodeX Academy</strong>, program managers must have a valid email for every student to send notifications. We build validation rules on <strong>Student Success CRM</strong>:
        </p>
        <ul class="list-disc pl-5 mt-2 space-y-1 text-slate-600 text-xs">
          <li><strong>Student Email Required</strong>: Blocks saving a student if the Email field is blank.</li>
          <li><strong>Enrollment Status Check</strong>: Blocks setting enrollment status to completed if grade criteria aren't met.</li>
        </ul>
      `,
      whereUsed: `
        <div class="space-y-3">
          <div>
            <strong class="text-brand-700 text-xs block">Validation Rules Section</strong>
            <span class="text-slate-500 text-xs">Located in Object Manager under each object's side menu. Used to create and manage rules.</span>
          </div>
          <div>
            <strong class="text-brand-700 text-xs block">Formula Editor</strong>
            <span class="text-slate-500 text-xs">The logic canvas where you construct expressions using merge fields, operators, and functions.</span>
          </div>
        </div>
      `,
      stepByStepImplementation: [
        "Go to <strong>Object Manager → Student__c → Validation Rules</strong> and click New.",
        "Name the rule <strong>Student_Email_Required</strong>. Set the formula to <code>ISBLANK(Email__c)</code> (or standard Email field if custom).",
        "Set the error message: 'Student Email is required.' and position it next to the Email field.",
        "Go to <strong>Object Manager → Course_Enrollment__c → Validation Rules</strong> and create a rule named <strong>Enrollment_Status_Required</strong>.",
        "Create <strong>Completion_Requires_100_Percent</strong> on Course Enrollment using <code>AND(ISPICKVAL(Enrollment_Status__c, \"Completed\"), Progress_Percentage__c &lt; 1)</code>. Display an error explaining that progress must be 100% before completion.",
        "Compare this Boolean validation formula with the <code>Progress_Status__c</code> Formula field from Module 2: one blocks invalid saves, while the other displays a calculated result.",
        "Test all rules by trying to save records that violate the criteria in your app."
      ],
      bestPractices: [
        "Always write clear, helpful error messages that explain exactly how to fix the problem.",
        "Use Formula fields for calculated display values and validation rules only when invalid input must be blocked.",
        "Test validation rules as non-admin users to ensure they don't block normal user operations."
      ],
      commonMistakes: [
        "Writing validation formulas that evaluate to True for valid records, which completely blocks users from saving.",
        "Confusing a Formula field with a validation rule and expecting a calculated field to block a record save.",
        "Forgetting to handle blank values in compound logic, leading to unexpected record saves."
      ],
      whyMattersInJob: `
        <p class="text-slate-600 text-xs leading-relaxed">
          Clean data is essential for accurate reports and automation. As an administrator, you will regularly write validation rules to guard data entry, preventing downstream errors in flows, emails, and integrations.
        </p>
      `,
      interviewQuestions: [
        "Explain the difference between a validation rule and making a field required on a layout.",
        "What is the difference between a Formula field and a validation-rule formula?",
        "What happens when a validation rule formula evaluates to True?",
        "How do you bypass a validation rule for integration users?"
      ],
      handsOnLab: {
        title: "Lab 1: Configure Validation Rules",
        instructions: `
          <p class="text-slate-600 text-xs leading-relaxed mb-3">
            Implement these rules in your <strong>Salesforce Developer Org</strong>, then answer the <strong>Check My Work</strong> questions below.
          </p>
          <ol class="list-decimal pl-5 space-y-1.5 text-slate-600 text-xs">
            <li>Create a validation rule on <strong>Student__c</strong> to require email.</li>
            <li>Create a validation rule on <strong>Course_Enrollment__c</strong> to require status.</li>
            <li>Create a rule that prevents Completed status when Progress Percentage is below 100%.</li>
            <li>Test both rules in your custom app to verify they display custom error messages correctly.</li>
          </ol>
        `
      },
      labCriteria: [
        {
          id: "q1",
          question: "What validation rule did you create to require Student Email?",
          type: "text",
          placeholder: "Enter validation rule name",
          hint: "Confirm the validation rule name you created on Student__c."
        },
        {
          id: "q2",
          question: "Which object contains your Student Email validation rule?",
          type: "text",
          placeholder: "Enter object API name",
          hint: "API name of the object containing the rule (e.g. Student__c)."
        },
        {
          id: "q3",
          question: "What validation rule did you create for Enrollment Status?",
          type: "text",
          placeholder: "Enter status validation rule name",
          hint: "Confirm the validation rule name you created on Course_Enrollment__c."
        },
        {
          id: "q4",
          question: "Why are validation rules important in Salesforce?",
          type: "text",
          placeholder: "Explain validation rules importance",
          hint: "Explain what validation rules enforce (e.g. data quality)."
        },
        {
          id: "q5",
          question: "Name any two fields you protected using validation rules.",
          type: "text",
          placeholder: "Enter two fields (e.g. Email, Status)",
          hint: "Specify fields like Email, Status, etc."
        },
        {
          id: "q6",
          question: "What is the difference between a Formula field and a validation-rule formula?",
          type: "text",
          placeholder: "Explain calculated output versus blocking invalid saves",
          minLength: 35,
          hint: "Explain what each formula returns and whether it can block a record save."
        }
      ]
    }
  },
  {
    title: "Sales, Service, Reports, and Dashboards",
    description: "Manage standard Sales Cloud and Service Cloud processes, then turn Salesforce data into useful reports and dashboard insights.",
    points: [
      "Explain the purpose of Reports and Dashboards in Salesforce.",
      "Understand standard vs custom Report Types.",
      "Differentiate between Tabular, Summary, and Matrix reports.",
      "Design Dashboards with visual components to track business KPIs."
    ],
    resources: [
      ["Reports and Dashboards Trailhead", "https://trailhead.salesforce.com/content/learn/modules/lex_implementation_reports_dashboards"],
      ["Reports and Dashboards Help Docs", "https://help.salesforce.com/s/articleView?id=sf.reports_and_dashboards_overview.htm&type=5"]
    ],
    practice: [
      "Build custom reports grouping Students by Status and Enrollments by Course.",
      "Build a report tracking Pending Fee Payments.",
      "Create a Student Success CRM Dashboard with at least 3 components."
    ],
    questions: [
      "What is the difference between a Summary and a Matrix report?",
      "How do report types control the fields available for reports?",
      "What determines the access a user has to report data?"
    ],
    richContent: {
      moduleGoal: "Track and visualize your CRM metrics by building real reports and dashboard charts in your Developer Org.",
      learningOutcomes: [
        "Create custom reports with groupings and summary formulas.",
        "Design a custom Dashboard with multiple components (charts, metrics, tables).",
        "Understand folder sharing and how security controls record visibility in reports.",
        "Implement report filters and conditional formatting."
      ],
      simpleExplanation: `
        <h4 class="font-bold text-slate-800 text-sm">Reports and Dashboards Overview</h4>
        <p class="text-slate-600 text-xs mt-1 leading-relaxed">
          A report is a list of records that meet standard filtering criteria (e.g. active students). A dashboard is a graphical representation of report data, utilizing visual components such as bar charts, line charts, gauges, metrics, and tables.
        </p>
        <h4 class="font-bold text-slate-800 text-sm mt-3">Visualizing CRM KPIs</h4>
        <p class="text-slate-600 text-xs mt-1 leading-relaxed">
          Data is only as good as the insights it provides. Reports organize raw database records into rows and columns, while Dashboards aggregate those reports into a single, comprehensive command center view for business leaders.
        </p>
      `,
      realBusinessExample: `
        <p class="text-slate-600 text-xs leading-relaxed">
          At <strong>TomCodeX Academy</strong>, program managers need to track student signups, enrollment trends, and financial collections. We create the following items:
        </p>
        <ul class="list-disc pl-5 mt-2 space-y-1 text-slate-600 text-xs">
          <li><strong>Students by Status Report</strong>: Groups student records by active, inactive, or graduated.</li>
          <li><strong>Enrollments by Course Report</strong>: Tracks how many students are enrolled in Admin vs Developer courses.</li>
          <li><strong>Student Success CRM Dashboard</strong>: Consolidates these reports into pie charts, gauges, and total collections metrics.</li>
        </ul>
      `,
      whereUsed: `
        <div class="space-y-3">
          <div>
            <strong class="text-brand-700 text-xs block">Reports Tab</strong>
            <span class="text-slate-500 text-xs">The application tab where users can run, customize, and schedule reports.</span>
          </div>
          <div>
            <strong class="text-brand-700 text-xs block">Dashboard Builder</strong>
            <span class="text-slate-500 text-xs">The drag-and-drop grid canvas where you add dashboard components linked to source reports.</span>
          </div>
        </div>
      `,
      stepByStepImplementation: [
        "Go to the <strong>Reports</strong> tab, click New Report, choose the custom report type for Students, and group by Status. Save as <strong>Students by Status</strong>.",
        "Create another report for Enrollments, group by Course, and save as <strong>Enrollments by Course</strong>.",
        "Create a report filtering fee payments where Status is Pending, and save as <strong>Pending Fee Payments</strong>.",
        "Go to the <strong>Dashboards</strong> tab, click New Dashboard, and name it <strong>Student Success CRM Dashboard</strong>.",
        "Add at least 3 components (e.g., Donut Chart for Students by Status, Bar Chart for Course Enrollments, Metric component for Pending Fees)."
      ],
      bestPractices: [
        "Always store reports and dashboards in shared folders with appropriate view permissions so colleagues can access them.",
        "Keep dashboards clean by limiting them to 5-9 highly relevant components representing core business metrics."
      ],
      commonMistakes: [
        "Linking dashboard components to reports stored in 'Private Reports' folder, which prevents other users from seeing them.",
        "Not setting the 'Dashboard Viewer' property correctly, causing data security leakages."
      ],
      whyMattersInJob: `
        <p class="text-slate-600 text-xs leading-relaxed">
          Operational reporting is one of the top requests for admins. Managers want to see their business metrics in real-time, and you will be responsible for translating raw request requirements into clean charts.
        </p>
      `,
      interviewQuestions: [
        "What is the difference between a custom report type and standard report type?",
        "Explain the differences between Tabular, Summary, and Matrix reports.",
        "Why would a user see a dashboard component but no data when clicking into the report?"
      ],
      handsOnLab: {
        title: "Lab 1: Create Custom Reports & Dashboard",
        instructions: `
          <p class="text-slate-600 text-xs leading-relaxed mb-3">
            Build these reports and dashboards in your <strong>Salesforce Developer Org</strong>, then verify your work below.
          </p>
          <ol class="list-decimal pl-5 space-y-1.5 text-slate-600 text-xs">
            <li>Create the <strong>Students by Status</strong> summary report.</li>
            <li>Create the <strong>Enrollments by Course</strong> summary report.</li>
            <li>Create the <strong>Pending Fee Payments</strong> report.</li>
            <li>Create the <strong>Student Success CRM Dashboard</strong>.</li>
            <li>Add at least 3 dashboard components linked to the reports you created.</li>
          </ol>
        `
      },
      labCriteria: [
        {
          id: "q1",
          question: "What report did you create to group Students by Status?",
          type: "text",
          placeholder: "Enter Students by Status report name",
          hint: "Verify the exact name of the Student Status report."
        },
        {
          id: "q2",
          question: "What report did you create to track Enrollments by Course?",
          type: "text",
          placeholder: "Enter Enrollments by Course report name",
          hint: "Verify the exact name of the Course Enrollments report."
        },
        {
          id: "q3",
          question: "What report did you create to track Pending Fee Payments?",
          type: "text",
          placeholder: "Enter Pending Fee Payments report name",
          hint: "Verify the exact name of the Pending Fee Payments report."
        },
        {
          id: "q4",
          question: "What dashboard did you create for Student Success CRM?",
          type: "text",
          placeholder: "Enter Student Success CRM Dashboard name",
          hint: "Verify the exact name of the Dashboard."
        },
        {
          id: "q5",
          question: "Name any three dashboard components you added.",
          type: "text",
          placeholder: "Enter three component types (e.g. chart, metric, table)",
          hint: "Name component types like bar chart, pie chart, metric, table."
        }
      ]
    }
  },
  {
    title: "Flow Automation Foundations",
    description: "Automate business processes safely using Salesforce Flow.",
    points: [
      "Choose Screen, Record-Triggered, Schedule-Triggered, Autolaunched, or Platform Event-Triggered Flow.",
      "Compare before-save, after-save, asynchronous, and scheduled-path record-triggered automation.",
      "Understand subflows, login-flow use cases, and when Flow Orchestration is appropriate.",
      "Use decisions, loops, assignments, and fault paths.",
      "Design maintainable automation and avoid recursion."
    ],
    resources: [
      ["Flow Builder Basics", "https://trailhead.salesforce.com/content/learn/modules/flow-basics"],
      ["Flow Builder Guide", "https://help.salesforce.com/s/articleView?id=sf.flow.htm&type=5"]
    ],
    practice: [
      "Build a student welcome Screen Flow.",
      "Create a Flow type decision matrix for common administrator requirements.",
      "Build an Autolaunched Flow and invoke it as a Subflow.",
      "Configure a Schedule-Triggered Flow for inactive Student follow-up.",
      "Notify managers when a student registers.",
      "Add a fault path to handle database update exceptions."
    ],
    questions: [
      "When should a flow run before save?",
      "What are the main Salesforce Flow types and when should each be used?",
      "What is the difference between a Schedule-Triggered Flow and a scheduled path?",
      "What is the difference between an Autolaunched Flow and a Subflow?",
      "When should a Platform Event-Triggered Flow be used?",
      "Why are fault paths important in Flow Builder?",
      "How do you prevent conflicting automation recursion?"
    ],
    richContent: {
      moduleGoal: "Learn the fundamentals of Salesforce Flow Builder, select appropriate triggers, evaluate branching logic with Decisions, and create automatic actions safely.",
      learningOutcomes: [
        "Select the correct Flow type: Screen, Record-Triggered, Schedule-Triggered, Autolaunched, or Platform Event-Triggered.",
        "Compare before-save, after-save, asynchronous, and scheduled-path record-triggered automation.",
        "Explain how reusable Autolaunched Flows can be invoked as Subflows.",
        "Recognize login-flow and Flow Orchestration use cases.",
        "Configure trigger events and object targets for automated backend changes.",
        "Implement Decisions and Outcomes to branch automation paths dynamically.",
        "Utilize global variables like $Record to read and modify context records."
      ],
      simpleExplanation: `
        <h4 class="font-bold text-slate-800 text-sm">What is Salesforce Flow?</h4>
        <p class="text-slate-600 text-xs mt-1 leading-relaxed">
          Flow is Salesforce's most powerful declarative automation tool. It allows you to build complex logic, execute actions, and perform operations on records using a visual designer. It functions similarly to coding but uses a drag-and-drop flowchart builder.
        </p>
        <h4 class="font-bold text-slate-800 text-sm mt-3">Triggering Automations</h4>
        <p class="text-slate-600 text-xs mt-1 leading-relaxed">
          A Record-Triggered Flow is fired automatically when a record is created, updated, or deleted. Think of it as a database trigger in traditional SQL databases. It runs in the background and can update fields, send emails, or create related records.
        </p>
      `,
      detailedLessonSections: [
        { title: "Screen Flow", content: `<p>Use a <strong>Screen Flow</strong> when a user must interact with the automation. It collects input, guides users through steps, displays information, and creates or updates records. Launch it from a Lightning page, action, utility bar, or Experience Cloud page.</p><p class="mt-2"><strong>Academy example:</strong> guide an advisor through enrolling a Student in a Course.</p>` },
        { title: "Record-Triggered Flow", content: `<p>Use a <strong>Record-Triggered Flow</strong> when automation must run because a record is created, updated, or deleted. A before-save flow efficiently updates fields on the triggering record. An after-save flow performs actions such as creating related records, sending notifications, or updating other records.</p><p class="mt-2">After-save flows can also use asynchronous paths and scheduled paths when work should happen later.</p>` },
        { title: "Schedule-Triggered Flow", content: `<p>Use a <strong>Schedule-Triggered Flow</strong> to run at a defined time and frequency against a set of records. It is independent of one specific record-change event.</p><p class="mt-2"><strong>Academy example:</strong> run every morning and create follow-up tasks for Students who have been inactive for 30 days.</p>` },
        { title: "Autolaunched Flow", content: `<p>Use an <strong>Autolaunched Flow with no trigger</strong> for background logic that another process invokes. It has no screens and can accept input variables and return output variables. It is commonly reused as a <strong>Subflow</strong> from another Flow.</p><p class="mt-2"><strong>Academy example:</strong> reusable logic that calculates and updates a Student engagement category.</p>` },
        { title: "Platform Event-Triggered Flow", content: `<p>Use a <strong>Platform Event-Triggered Flow</strong> when automation must respond to a published platform event. This supports event-driven and integration scenarios without waiting for a standard record change.</p><p class="mt-2"><strong>Academy example:</strong> respond when an external learning platform publishes a Course Completion event.</p>` },
        { title: "Related Flow Patterns", content: `<p>A <strong>Subflow</strong> is a reusable flow called by another flow, not a separate trigger type. A <strong>Login Flow</strong> runs an assigned flow when a user logs in. <strong>Flow Orchestration</strong> coordinates multi-user, multi-stage work and is appropriate when a normal Flow or approval process is not sufficient.</p>` },
        { title: "Flow Type Decision Guide", content: `<ul class="list-disc pl-5 space-y-1"><li>User must enter information or follow guided screens: <strong>Screen Flow</strong>.</li><li>A record change starts automation: <strong>Record-Triggered Flow</strong>.</li><li>Records must be processed on a recurring schedule: <strong>Schedule-Triggered Flow</strong>.</li><li>Reusable background logic is called by another automation: <strong>Autolaunched Flow</strong>.</li><li>A published event starts automation: <strong>Platform Event-Triggered Flow</strong>.</li></ul>` }
      ],
      realBusinessExample: `
        <p class="text-slate-600 text-xs leading-relaxed">
          At <strong>TomCodeX Academy</strong>, program managers need automated operations on registration. When a student is created:
        </p>
        <ul class="list-disc pl-5 mt-2 space-y-1 text-slate-600 text-xs">
          <li><strong>Trigger Flow</strong>: A Record-Triggered Flow triggers on Student__c creation.</li>
          <li><strong>Decision Element</strong>: Checks if the student's status is 'Active'.</li>
          <li><strong>Action</strong>: Automatically creates a welcome task or sends an automated welcome email.</li>
        </ul>
      `,
      whereUsed: `
        <div class="space-y-3">
          <div>
            <strong class="text-brand-700 text-xs block">Flow Builder</strong>
            <span class="text-slate-500 text-xs">The visual development environment where you draw boxes, decisions, and actions to create automation flows.</span>
          </div>
          <div>
            <strong class="text-brand-700 text-xs block">Flow Trigger Explorer</strong>
            <span class="text-slate-500 text-xs">The dashboard tool to view and order all record-triggered flows operating on a specific object and database event.</span>
          </div>
        </div>
      `,
      stepByStepImplementation: [
        "Go to <strong>Setup → Process Automation → Flows</strong> and click New Flow.",
        "Before building, write the business trigger and choose the correct Flow type using the Flow Type Decision Guide.",
        "Select <strong>Record-Triggered Flow</strong> and click Create.",
        "Set the object to <strong>Student__c</strong>, trigger when <strong>A record is created</strong>, and set the condition requirements to None.",
        "Drag a <strong>Decision</strong> element onto the canvas. Label it 'Check Status' and configure an outcome where status is 'Active'.",
        "Add a welcome task action or update field action, save the Flow as <strong>Student Registration Automation</strong> (API name: <code>Student_Registration_Automation</code>), and click <strong>Activate</strong>.",
        "Create a <strong>Schedule-Triggered Flow</strong> that runs daily and finds Students requiring follow-up.",
        "Create a reusable <strong>Autolaunched Flow</strong> with input variables, then call it from another Flow using a Subflow element."
      ],
      bestPractices: [
        "Always define fault paths on update/delete elements to handle exceptions gracefully without throwing raw system errors to users.",
        "Limit the number of flows per object and event, and use the Flow Trigger Explorer to manage execution order."
      ],
      commonMistakes: [
        "Building conflicting validation rules and flows that block each other, causing save loops.",
        "Not utilizing the $Record global variable to retrieve details from the record that triggered the flow."
      ],
      whyMattersInJob: `
        <p class="text-slate-600 text-xs leading-relaxed">
          Flow is the primary automation tool in modern Salesforce environments. Companies rely on flows to replace legacy Workflow Rules and Process Builders. Knowing how to construct efficient, bug-free flows is highly sought after by employers.
        </p>
      `,
      interviewQuestions: [
        "Name the main Salesforce Flow types and give one use case for each.",
        "What is the difference between a before-save and after-save Record-Triggered Flow?",
        "What is the difference between a Schedule-Triggered Flow and a scheduled path?",
        "What is an Autolaunched Flow, and how is it used as a Subflow?",
        "When should you use a Platform Event-Triggered Flow?",
        "Is a Subflow a separate Flow trigger type?",
        "Explain when you would use a Screen Flow versus a Record-Triggered Flow.",
        "What is a fault path and why is it important in Flow Builder?"
      ],
      handsOnLab: {
        title: "Lab 1: Create Student Welcome Flow",
        instructions: `
          <p class="text-slate-600 text-xs leading-relaxed mb-3">
            Build this record-triggered flow in your <strong>Salesforce Developer Org</strong>, then verify your work below.
          </p>
          <ol class="list-decimal pl-5 space-y-1.5 text-slate-600 text-xs">
            <li>Create a <strong>Record-Triggered Flow</strong> on the <strong>Student__c</strong> object.</li>
            <li>Document which Flow type fits an interactive enrollment wizard, nightly inactive-student review, reusable engagement logic, and an external completion event.</li>
            <li>Configure the flow to trigger when a record is created.</li>
            <li>Name your flow <strong>Student Registration Automation</strong> (API name: <code>Student_Registration_Automation</code>).</li>
            <li>Add a <strong>Decision</strong> element to evaluate the Student status.</li>
            <li>Ensure the flow operates on the <code>$Record</code> global variable and activate the flow.</li>
          </ol>
        `
      },
      labCriteria: [
        {
          id: "q1",
          question: "What type of Flow did you create to automate Student registration?",
          type: "text",
          placeholder: "Enter Flow Type (e.g. Record-Triggered Flow)",
          hint: "Identify the starting template type you chose for the Flow."
        },
        {
          id: "q2",
          question: "Which object triggers your record-triggered flow?",
          type: "text",
          placeholder: "Enter object API name (e.g. Student__c)",
          hint: "The API name of the starting object you selected in the Flow trigger setup."
        },
        {
          id: "q3",
          question: "What is the API name of the Flow you created?",
          type: "text",
          placeholder: "Enter Flow API name",
          hint: "Verify the Flow API name (e.g. Student_Registration_Automation)."
        },
        {
          id: "q4",
          question: "What element in your flow evaluates conditions to branch logic?",
          type: "text",
          placeholder: "Enter element name (e.g. Decision)",
          hint: "The element type used to branch outcomes (Decision, Loop, etc)."
        },
        {
          id: "q5",
          question: "What global variable refers to the record that triggered the flow?",
          type: "text",
          placeholder: "Enter global variable (e.g. $Record)",
          hint: "Salesforce flow's default global resource referring to the source record."
        },
        {
          id: "q6",
          question: "Name the five main Flow types taught in this module.",
          type: "text",
          placeholder: "Screen, Record-Triggered, Schedule-Triggered, Autolaunched, Platform Event-Triggered",
          minLength: 65,
          hint: "Review the Flow Type Decision Guide."
        }
      ]
    }
  },
  {
    title: "Flow Automation Intermediate",
    description: "Automate complex business processes with record-triggered conditions, decision branching, creating/updating related records, and error handling.",
    points: [
      "Define record-triggered flows with criteria/conditions.",
      "Select before-save, after-save, asynchronous, or scheduled-path execution.",
      "Build reusable Autolaunched Flows and invoke them through Subflow elements.",
      "Understand Platform Event-Triggered Flow and event-driven automation.",
      "Branch logic using complex Decision outcomes.",
      "Insert or modify related records using Create Records and Update Records elements.",
      "Enforce safety in automations with fault path error handling."
    ],
    resources: [
      ["Intermediate Salesforce Flow", "https://trailhead.salesforce.com/content/learn/modules/record-triggered-flows"],
      ["Flow Error Handling", "https://help.salesforce.com/s/articleView?id=sf.flow_troubleshoot.htm&type=5"]
    ],
    practice: [
      "Build a flow to automatically update Student Status when enrollments change.",
      "Build and call a reusable Autolaunched Subflow.",
      "Configure a scheduled path and compare it with a Schedule-Triggered Flow.",
      "Design a Platform Event-Triggered Flow for an external completion event.",
      "Create follow-up tasks for program managers when fees are pending.",
      "Add fault paths to capture database issues during updates."
    ],
    questions: [
      "How do entry criteria optimize flow performance?",
      "When should a record-triggered flow use before-save, after-save, asynchronous, or scheduled paths?",
      "How does a Platform Event-Triggered Flow support integrations?",
      "How do input and output variables support reusable Subflows?",
      "What is the difference between update record options in Flow?",
      "Why should you always write error details to the screen or logs in a fault path?"
    ],
    richContent: {
      moduleGoal: "Create efficient multi-object automations that react to record changes, create or update related records, and handle errors using fault paths.",
      learningOutcomes: [
        "Configure entry criteria to prevent unnecessary flow executions.",
        "Choose before-save, after-save, asynchronous, and scheduled paths correctly.",
        "Build reusable Autolaunched Flows with input and output variables.",
        "Explain event-driven automation using Platform Event-Triggered Flow.",
        "Use Decision outcomes to evaluate complex business logic.",
        "Create related Task records automatically on record creation.",
        "Implement Fault Paths to intercept and handle database exceptions safely."
      ],
      simpleExplanation: `
        <h4 class="font-bold text-slate-800 text-sm">Intermediate Automation Patterns</h4>
        <p class="text-slate-600 text-xs mt-1 leading-relaxed">
          Basic flows trigger actions, but real business logic requires conditions (e.g. only trigger if status changes) and multi-step changes. For instance, creating a record might fail if a validation rule blocks it. To prevent this from crashing the user's interface, you add a <strong>Fault Path</strong> to handle the error.
        </p>
        <h4 class="font-bold text-slate-800 text-sm mt-3">Create and Update Records Elements</h4>
        <p class="text-slate-600 text-xs mt-1 leading-relaxed">
          Flows can write changes directly to the database. The <strong>Create Records</strong> element lets you insert new records (like Tasks or Logs) automatically. The <strong>Update Records</strong> element updates other records in the system that are linked to the triggering record.
        </p>
      `,
      detailedLessonSections: [
        { title: "Record-Triggered Execution Timing", content: `<ul class="list-disc pl-5 space-y-1"><li><strong>Before save:</strong> update fields on the triggering record quickly without a separate database update.</li><li><strong>After save:</strong> create or update related records, send notifications, submit for approval, or call actions.</li><li><strong>Asynchronous path:</strong> perform eligible work after the original transaction completes.</li><li><strong>Scheduled path:</strong> run work at a time relative to a date or time on the triggering record.</li></ul>` },
        { title: "Schedule-Triggered Flow vs Scheduled Path", content: `<p>A <strong>Schedule-Triggered Flow</strong> starts on its own recurring schedule and queries records that match its criteria. A <strong>scheduled path</strong> belongs to an after-save Record-Triggered Flow and schedules work relative to the record that caused the flow interview.</p>` },
        { title: "Reusable Autolaunched Subflows", content: `<p>Place shared background logic in an Autolaunched Flow with clearly named input and output variables. Call it from parent flows using the Subflow element. Avoid hidden dependencies and document what the Subflow expects and returns.</p>` },
        { title: "Platform Event-Triggered Flow", content: `<p>A Platform Event-Triggered Flow subscribes to a platform event and runs when that event is published. Use it to decouple systems and react to integration or business events such as an external learning platform announcing course completion.</p>` },
        { title: "Flow Orchestration", content: `<p>Flow Orchestration coordinates multi-stage work across users and teams using stages, steps, and work items. Use it for long-running coordinated processes; use a normal Flow for simpler automation and an approval process when the primary requirement is a formal approve-or-reject decision.</p>` }
      ],
      realBusinessExample: `
        <p class="text-slate-600 text-xs leading-relaxed">
          At <strong>TomCodeX Academy</strong>, when a student is created and has a pending fee payment, we want to automate follow-up:
        </p>
        <ul class="list-disc pl-5 mt-2 space-y-1 text-slate-600 text-xs">
          <li><strong>Condition Trigger</strong>: Triggers on Course_Enrollment__c when Status is 'Pending'.</li>
          <li><strong>Create Record Action</strong>: Automatically creates a follow-up Task for the administrator.</li>
          <li><strong>Fault Path</strong>: If task creation fails, writes to a debug log instead of blocking the student record.</li>
        </ul>
      `,
      whereUsed: `
        <div class="space-y-3">
          <div>
            <strong class="text-brand-700 text-xs block">Create Records Element</strong>
            <span class="text-slate-500 text-xs">The Flow element used to define field values and insert a new record into any Salesforce object.</span>
          </div>
          <div>
            <strong class="text-brand-700 text-xs block">Fault Path Connector</strong>
            <span class="text-slate-500 text-xs">The error-handling branch added to data elements (Create, Update, Delete) to route execution when an error occurs.</span>
          </div>
        </div>
      `,
      stepByStepImplementation: [
        "Create a new <strong>Record-Triggered Flow</strong> on the <strong>Course_Enrollment__c</strong> object.",
        "Set the trigger to run when a record is created or updated, and set the entry criteria to: <code>Status__c Equals 'Pending'</code>.",
        "Add a <strong>Decision</strong> element to confirm if a follow-up is already required.",
        "Drag a <strong>Create Records</strong> element to create a Task. Map Subject to 'Follow Up on Fee Payment', and set the Related ID to the Enrollment's ID.",
        "Right-click the Create Records element, select <strong>Add Fault Path</strong>, and connect it to a Post to Chatter or email action to notify the admin of the error.",
        "Save the Flow as <strong>Enrollment_Follow_Up_Flow</strong> and activate it."
      ],
      bestPractices: [
        "Use tight entry criteria to make sure your flows only run when absolutely necessary, saving system resources.",
        "Never leave a fault path empty; always post to Chatter, send an email, or write a log record so failures are visible."
      ],
      commonMistakes: [
        "Building conflicting validation rules and flows that block each other, causing save loops.",
        "Triggering recursive update loops by updating the same record that triggered the flow in an after-save update."
      ],
      whyMattersInJob: `
        <p class="text-slate-600 text-xs leading-relaxed">
          Every production Salesforce org has complex automation. An administrator is expected to build flows that update related tables (like updating student enrollment totals) and prevent raw red-screen errors from reaching end-users.
        </p>
      `,
      interviewQuestions: [
        "Compare before-save, after-save, asynchronous, and scheduled paths.",
        "What is the difference between a Schedule-Triggered Flow and a scheduled path?",
        "How do you design a reusable Autolaunched Flow for use as a Subflow?",
        "When is a Platform Event-Triggered Flow appropriate?",
        "When should Flow Orchestration be considered?",
        "Explain what a Fault Path is and why you should use it in data elements.",
        "How do you update related records in a flow without writing Apex code?",
        "Why is it better to use entry criteria instead of a Decision element immediately after the Start element?"
      ],
      handsOnLab: {
        title: "Lab 1: Build Related Record Automation with Error Handling",
        instructions: `
          <p class="text-slate-600 text-xs leading-relaxed mb-3">
            Build this intermediate flow in your <strong>Salesforce Developer Org</strong>, then verify your work below.
          </p>
          <ol class="list-decimal pl-5 space-y-1.5 text-slate-600 text-xs">
            <li>Create a new <strong>Record-Triggered Flow</strong> on <strong>Course_Enrollment__c</strong> or <strong>Student__c</strong>.</li>
            <li>Configure the flow to trigger on creation or update with specific conditions.</li>
            <li>Add either a scheduled path or a reusable Autolaunched Subflow and document why you selected it.</li>
            <li>Use a <strong>Decision</strong> element to evaluate branching outcomes.</li>
            <li>Add a <strong>Create Records</strong> or <strong>Update Records</strong> element to automatically create/update a related Task or record.</li>
            <li>Configure a <strong>Fault Path</strong> on the data element to handle errors and activate the flow.</li>
          </ol>
        `
      },
      labCriteria: [
        {
          id: "q1",
          question: "What is the API name of your intermediate flow?",
          type: "text",
          placeholder: "Enter Flow API name (e.g. Student_Status_Update_Automation)",
          hint: "Confirm the API name of the Flow you configured."
        },
        {
          id: "q2",
          question: "Which object triggers your flow?",
          type: "text",
          placeholder: "Enter object API name (e.g. Course_Enrollment__c)",
          hint: "The API name of the object setting off the trigger."
        },
        {
          id: "q3",
          question: "Which Flow element did you use to branch logic?",
          type: "text",
          placeholder: "Enter branching element name (e.g. Decision)",
          hint: "The Flow element used to evaluate multiple pathways."
        },
        {
          id: "q4",
          question: "Which Flow element did you use to create a follow-up task or record?",
          type: "text",
          placeholder: "Enter creation element name (e.g. Create Records)",
          hint: "The data element used to insert a record into the database."
        },
        {
          id: "q5",
          question: "Why is a fault path important in Salesforce Flow?",
          type: "text",
          placeholder: "Explain fault path importance",
          hint: "Explain what it handles when a database step fails."
        },
        {
          id: "q6",
          question: "What is the difference between a Schedule-Triggered Flow and a scheduled path?",
          type: "text",
          placeholder: "Explain independent recurring schedule versus record-relative timing",
          minLength: 45,
          hint: "Identify what starts each automation and how its time is determined."
        }
      ]
    }
  },
  {
    title: "Approvals, AI, and Change Management",
    description: "Govern human approvals, Salesforce AI capabilities, and controlled configuration changes using secure administration practices.",
    points: [
      "Configure single-step and multi-step Approval Processes for Student records.",
      "Understand approval steps, entry criteria, initial submission actions, and final actions.",
      "Compare approval processes vs flows vs validation rules — and choose the right tool."
    ],
    resources: [
      ["Approval Processes Help Docs", "https://help.salesforce.com/s/articleView?id=sf.approvals.htm&type=5"],
      ["Trailhead: Build an Approval Process", "https://trailhead.salesforce.com/content/learn/modules/business_process_automation/approvals"],
      ["Approval Process Best Practices", "https://developer.salesforce.com/blogs/2019/04/approval-processes-best-practices"]
    ],
    practice: [
      "Create a Student Graduation Approval Process on the Student__c object.",
      "Add an approval step requiring your manager profile to approve.",
      "Configure final approval actions: update Student Status to Graduated.",
      "Configure rejection actions: send an email alert to the student.",
      "Test the approval by submitting a Student record for approval."
    ],
    questions: [
      "When should you use an Approval Process instead of a Record-Triggered Flow?",
      "What is the difference between an Approval Step and an Approval Action?",
      "How does the Approval History related list help track approval status?"
    ],
    richContent: {
      moduleGoal: "Add executive-level governance to your Student Success CRM: build a formal approval workflow that requires manager sign-off before a student can be marked as Graduated.",
      learningOutcomes: [
        "Explain what an Approval Process is and how it differs from Flow automation.",
        "Configure entry criteria, approval steps, approver assignments, and approval/rejection actions.",
        "Test an approval process by submitting a student record and approving/rejecting it.",
        "Choose the right automation tool (Flow vs Approval vs Validation Rule) for a given requirement."
      ],
      simpleExplanation: `
        <h4 class="font-bold text-slate-800 text-sm">What is an Approval Process?</h4>
        <p class="text-slate-600 text-xs mt-1 leading-relaxed">
          An <strong>Approval Process</strong> is a Salesforce automation that sends a record to a designated person for review before a status change is committed. Unlike Flow (which runs automatically), approvals require a <strong>human decision</strong> — approve or reject.
        </p>
        <h4 class="font-bold text-slate-800 text-sm mt-3">Why Approvals Beat Manual Processes</h4>
        <p class="text-slate-600 text-xs mt-1 leading-relaxed">
          Without an approval process, anyone with edit access can set a student's status to <em>Graduated</em>. With an approval process, the record is <strong>locked</strong> after submission and can only change state once a qualified reviewer acts. This creates an auditable, consistent process.
        </p>
        <h4 class="font-bold text-slate-800 text-sm mt-3">Approval Process vs Flow</h4>
        <p class="text-slate-600 text-xs mt-1 leading-relaxed">
          Use <strong>Flow</strong> when: an action should happen automatically without human review (e.g., auto-create a task).<br/>
          Use <strong>Approval Process</strong> when: a human must consciously approve or reject a business decision.
        </p>
      `,
      realBusinessExample: `
        <p class="text-slate-600 text-xs leading-relaxed">
          At <strong>TomCodeX Academy</strong>, before a student is marked <em>Graduated</em>, the Head Tutor must review their lab completion score and interview performance.
        </p>
        <ul class="list-disc pl-5 mt-2 space-y-1 text-slate-600 text-xs">
          <li><strong>Submission Trigger:</strong> Student clicks "Submit for Graduation Approval".</li>
          <li><strong>Record Lock:</strong> Student record is locked so no one can edit it during review.</li>
          <li><strong>Approver Notified:</strong> Head Tutor receives an email with Approve / Reject buttons.</li>
          <li><strong>On Approval:</strong> Student__c.Status__c automatically set to <em>Graduated</em>.</li>
          <li><strong>On Rejection:</strong> An email alert is sent to the student with feedback notes.</li>
        </ul>
      `,
      whereUsed: `
        <div class="space-y-3">
          <div>
            <strong class="text-brand-700 text-xs block">Setup → Process Automation → Approval Processes</strong>
            <span class="text-slate-500 text-xs">Where you create and manage all approval process configurations.</span>
          </div>
          <div>
            <strong class="text-brand-700 text-xs block">Record Detail Page → Submit for Approval button</strong>
            <span class="text-slate-500 text-xs">The button that appears when a record meets the entry criteria for an active approval process.</span>
          </div>
          <div>
            <strong class="text-brand-700 text-xs block">Approval History Related List</strong>
            <span class="text-slate-500 text-xs">Tracks every approval step, approver decision, and timestamp on the record.</span>
          </div>
          <div>
            <strong class="text-brand-700 text-xs block">Home → Items to Approve</strong>
            <span class="text-slate-500 text-xs">The approver's inbox where pending approval requests are listed for action.</span>
          </div>
        </div>
      `,
      stepByStepImplementation: [
        "Navigate to Setup → Process Automation → Approval Processes.",
        "Click <strong>Create New Approval Process</strong> → Use Standard Setup Wizard.",
        "Select <strong>Student__c</strong> as the Object. Name it <strong>Student Graduation Approval</strong> (API name: <code>Student_Graduation_Approval</code>).",
        "Set Entry Criteria: <code>Student__c.Status__c EQUALS Pending Graduation</code> (only records in this status can be submitted).",
        "Approval Assignment: select your Manager or Queue (for now, use your own user as approver).",
        "Enable <strong>Record Lock</strong> during the approval process.",
        "Add Final Approval Action: Field Update → <code>Status__c = Graduated</code>.",
        "Add Rejection Action: Email Alert → notify the student with rejection reason.",
        "Click <strong>Activate</strong>. Then open a Student record, set Status to Pending Graduation, and click Submit for Approval."
      ],
      bestPractices: [
        "Always lock the record during approval to prevent concurrent edits that could conflict with the approval outcome.",
        "Use approval process <strong>entry criteria</strong> to limit which records trigger the process — don't rely only on the Submit button.",
        "For multi-step approvals (e.g., Manager → Director → VP), define clear step order and escalation timeouts.",
        "Use email templates for approval/rejection notifications so communications are branded and consistent."
      ],
      labTask: {
        title: "Admin Module 9 Lab — Student Graduation Approval Process",
        description: "Build a complete Approval Process to govern student graduation in your Student Success CRM.",
        steps: [
          "In Setup, go to Process Automation → Approval Processes → select Student__c.",
          "Create a new process named: <strong>Student Graduation Approval</strong>.",
          "Set entry criteria: Status__c = Pending Graduation.",
          "Add one approval step — assign to your manager or yourself.",
          "Add final approval action: Field Update Status__c → Graduated.",
          "Add rejection action: Email Alert to the student.",
          "Activate the process. Submit a student record and approve it yourself.",
          "Take a screenshot of the Approval History related list showing the completed approval."
        ],
        labQuestions: [
          {
            id: "q1",
            question: "What is the API name of the Approval Process you created?",
            type: "text",
            placeholder: "Enter API name (e.g. Student_Graduation_Approval)",
            hint: "Check Setup → Approval Processes → the API Name column."
          },
          {
            id: "q2",
            question: "What object is the Approval Process built on?",
            type: "text",
            placeholder: "Enter object API name (e.g. Student__c)",
            hint: "The custom object for students in your CRM."
          },
          {
            id: "q3",
            question: "What field and value did you set as Entry Criteria?",
            type: "text",
            placeholder: "Describe field and value (e.g. Status__c = Pending Graduation)",
            hint: "Only records matching this criteria can be submitted for approval."
          },
          {
            id: "q4",
            question: "What Final Approval Action did you configure?",
            type: "text",
            placeholder: "Describe the action (e.g. Field Update Status__c to Graduated)",
            hint: "The action that runs automatically when the approver clicks Approve."
          },
          {
            id: "q5",
            question: "What is the key difference between an Approval Process and a Record-Triggered Flow?",
            type: "text",
            placeholder: "Explain the difference",
            hint: "Think about human decision vs. automatic execution."
          }
        ]
      }
    }
  },
  {
    title: "Data Management, Deployment, and Maintenance",
    description: "Manage the complete Salesforce data lifecycle, production deployments, release readiness, backups, and ongoing org maintenance.",
    points: [
      "Use Data Import Wizard to load Student and Course records in bulk.",
      "Understand when to use Data Import Wizard vs. Data Loader.",
      "Configure Duplicate Rules and Matching Rules to protect data quality."
    ],
    resources: [
      ["Data Import Wizard Help", "https://help.salesforce.com/s/articleView?id=sf.data_import_wizard.htm&type=5"],
      ["Trailhead: Data Management", "https://trailhead.salesforce.com/content/learn/modules/lex_implementation_data_management"],
      ["Duplicate Management", "https://help.salesforce.com/s/articleView?id=sf.duplicate_prevention_overview.htm&type=5"]
    ],
    practice: [
      "Prepare a CSV file with 10 Student records and import using Data Import Wizard.",
      "Export existing Student records using Data Export (Setup).",
      "Create a Duplicate Rule on Student__c using Email as the matching field.",
      "Test the duplicate rule by trying to create a student with an existing email."
    ],
    questions: [
      "What is the maximum record limit for Data Import Wizard?",
      "When would you choose Data Loader over Data Import Wizard?",
      "What is the difference between a Matching Rule and a Duplicate Rule?"
    ],
    richContent: {
      moduleGoal: "Move your Student Success CRM from empty org to production-ready: bulk-load real data, protect against duplicates, and establish data governance practices used by every Salesforce Administrator.",
      learningOutcomes: [
        "Prepare a properly formatted CSV file for Salesforce import.",
        "Use Data Import Wizard to load Student records with field mapping.",
        "Export records using Data Export Service for backup purposes.",
        "Configure Duplicate Rules and Matching Rules to prevent duplicate students."
      ],
      simpleExplanation: `
        <h4 class="font-bold text-slate-800 text-sm">Why Data Management Matters</h4>
        <p class="text-slate-600 text-xs mt-1 leading-relaxed">
          A Salesforce org is only as good as its data. When you first go live, you need to bring in existing records — students, courses, enrollments — from spreadsheets or old systems. This is called <strong>data migration</strong>.
        </p>
        <h4 class="font-bold text-slate-800 text-sm mt-3">Data Import Wizard vs Data Loader</h4>
        <p class="text-slate-600 text-xs mt-1 leading-relaxed">
          <strong>Data Import Wizard</strong>: Browser-based, supports Standard + Custom Objects, max 50,000 records, no install needed. Perfect for admins.<br/>
          <strong>Data Loader</strong>: Desktop app (Windows/Mac), supports all objects, handles millions of records, great for developers and large migrations.
        </p>
        <h4 class="font-bold text-slate-800 text-sm mt-3">Duplicate Rules</h4>
        <p class="text-slate-600 text-xs mt-1 leading-relaxed">
          Duplicate Rules work with Matching Rules. The <strong>Matching Rule</strong> defines <em>how</em> to compare records (e.g., fuzzy match on Name, exact match on Email). The <strong>Duplicate Rule</strong> defines <em>what to do</em> when a match is found — Block, Allow with alert, or Report.
        </p>
      `,
      realBusinessExample: `
        <p class="text-slate-600 text-xs leading-relaxed">
          TomCodeX Academy is launching and needs to migrate 200 students from a Google Sheet into the Student Success CRM.
        </p>
        <ul class="list-disc pl-5 mt-2 space-y-1 text-slate-600 text-xs">
          <li><strong>Step 1:</strong> Export student data from Google Sheets as a CSV file.</li>
          <li><strong>Step 2:</strong> Clean data — standardize email format, remove blanks, fix status values to match picklist.</li>
          <li><strong>Step 3:</strong> Import using Data Import Wizard, mapping CSV columns to Salesforce fields.</li>
          <li><strong>Step 4:</strong> Enable Duplicate Rule on Email so no student appears twice.</li>
          <li><strong>Step 5:</strong> Schedule weekly Data Export to back up the org.</li>
        </ul>
      `,
      whereUsed: `
        <div class="space-y-3">
          <div>
            <strong class="text-brand-700 text-xs block">Setup → Data → Data Import Wizard</strong>
            <span class="text-slate-500 text-xs">Upload CSV files to create or update records in bulk across standard and custom objects.</span>
          </div>
          <div>
            <strong class="text-brand-700 text-xs block">Setup → Data → Data Export</strong>
            <span class="text-slate-500 text-xs">Export all org data as ZIP/CSV files for backup, analysis, or migration to another system.</span>
          </div>
          <div>
            <strong class="text-brand-700 text-xs block">Setup → Duplicate Management → Matching Rules</strong>
            <span class="text-slate-500 text-xs">Define field-level logic for comparing records to detect potential duplicates.</span>
          </div>
          <div>
            <strong class="text-brand-700 text-xs block">Setup → Duplicate Management → Duplicate Rules</strong>
            <span class="text-slate-500 text-xs">Configure what action Salesforce takes when a match is found — block, warn, or log.</span>
          </div>
        </div>
      `,
      stepByStepImplementation: [
        "Create a CSV file with columns: First_Name, Last_Name, Email__c, Status__c, Enrollment_Date__c. Add 10 rows of test student data.",
        "In Setup, search for <strong>Data Import Wizard</strong>. Click <strong>Launch Wizard</strong>.",
        "Select <strong>Custom Objects</strong> → <strong>Students</strong>. Choose <strong>Add new records</strong>.",
        "Upload your CSV. On the field mapping screen, match each CSV column to the corresponding Salesforce field.",
        "Review the import summary and click <strong>Start Import</strong>. Monitor progress in Setup → Bulk Data Load Jobs.",
        "For Duplicate Rules: go to Setup → Duplicate Management → Matching Rules → New Rule on Student__c.",
        "Add a match criterion: <strong>Email__c</strong> → Exact match. Activate the Matching Rule.",
        "Go to Duplicate Rules → New Rule on Student__c. Set Action: <strong>Block</strong> if a duplicate is found. Activate.",
        "Test by creating a student with the same email as an imported record — Salesforce should block it."
      ],
      bestPractices: [
        "Always run a small test import (5-10 records) before loading your full dataset to catch field mapping errors early.",
        "Back up your org with Data Export before any major import or configuration change.",
        "Use <strong>Upsert</strong> (instead of Insert) in Data Loader when re-importing to avoid creating duplicates of existing records.",
        "Set Duplicate Rules to <strong>Report</strong> first, review the duplicate report, then switch to <strong>Block</strong> once you're confident."
      ],
      labTask: {
        title: "Admin Module 10 Lab — Bulk Import and Duplicate Management",
        description: "Import Student records in bulk and configure Duplicate Rules to protect data quality in your Student Success CRM.",
        steps: [
          "Prepare a CSV with 10 Student records (First Name, Last Name, Email, Status).",
          "Use Data Import Wizard to import them into your Student__c object.",
          "Verify all 10 records appear in the Students list view.",
          "Go to Setup → Duplicate Management → create a Matching Rule on Email__c (Exact).",
          "Create a Duplicate Rule on Student__c — set action to Block.",
          "Activate both rules. Attempt to create a student with a duplicate email and confirm it is blocked.",
          "Take a screenshot of the error message showing the duplicate block."
        ],
        labQuestions: [
          {
            id: "q1",
            question: "How many Student records did you import using Data Import Wizard?",
            type: "text",
            placeholder: "Enter number (e.g. 10)",
            hint: "Count how many rows were in your CSV file."
          },
          {
            id: "q2",
            question: "What tool did you use to import the Student records?",
            type: "text",
            placeholder: "Enter tool name (e.g. Data Import Wizard)",
            hint: "The browser-based bulk import tool in Salesforce Setup."
          },
          {
            id: "q3",
            question: "What field did you use in your Matching Rule to detect duplicate students?",
            type: "text",
            placeholder: "Enter field name (e.g. Email__c)",
            hint: "The unique identifier used to identify the same student across records."
          },
          {
            id: "q4",
            question: "What action did you set in your Duplicate Rule when a match is found?",
            type: "text",
            placeholder: "Enter action (e.g. Block)",
            hint: "The Duplicate Rule can Block, Allow with alert, or Report."
          },
          {
            id: "q5",
            question: "What is the key difference between Data Import Wizard and Data Loader?",
            type: "text",
            placeholder: "Explain the difference",
            hint: "Think about record limits, objects supported, and who typically uses each tool."
          }
        ]
      }
    }
  }
];

const ADMIN_PROJECT_PATH = [
  {
    buildsOn: "A prepared Salesforce practice org.",
    buildsNow: "Platform vocabulary, Setup navigation, and org readiness.",
    preparesNext: "Use the prepared org to build the Student Success CRM data model."
  },
  {
    buildsOn: "Module 1 org access and platform foundations.",
    buildsNow: "Student, Course, and Course Enrollment objects, fields, and relationships.",
    preparesNext: "Protect the new data model with persona-based security."
  },
  {
    buildsOn: "Module 2 Student Success CRM objects and relationships.",
    buildsNow: "Tutor and Program Manager access, field security, and record sharing.",
    preparesNext: "Expose the secured objects through a usable Lightning app."
  },
  {
    buildsOn: "Modules 2 and 3 data model and access personas.",
    buildsNow: "Student Success CRM Lightning app, tabs, layouts, and list views.",
    preparesNext: "Enforce data quality on the fields users now enter."
  },
  {
    buildsOn: "Module 4 user experience and Module 2 fields.",
    buildsNow: "Validation rules protecting Student and Course Enrollment data.",
    preparesNext: "Report confidently on cleaner, consistently entered data."
  },
  {
    buildsOn: "Clean Student, Course, and Course Enrollment records from Modules 2-5.",
    buildsNow: "Operational reports and the Student Success dashboard.",
    preparesNext: "Automate the business actions revealed by reports and KPIs."
  },
  {
    buildsOn: "Module 5 quality rules and Module 6 reporting requirements.",
    buildsNow: "A foundational record-triggered flow for Student records.",
    preparesNext: "Extend automation across Course Enrollment and related Tasks."
  },
  {
    buildsOn: "Module 7 Flow fundamentals.",
    buildsNow: "Conditional multi-object automation, related records, and fault handling.",
    preparesNext: "Add human governance for graduation decisions."
  },
  {
    buildsOn: "Student status, automation, and security from previous modules.",
    buildsNow: "Student Graduation Approval with approval and rejection actions.",
    preparesNext: "Load and govern realistic production-style Student data."
  },
  {
    buildsOn: "The completed Student Success CRM application.",
    buildsNow: "Bulk imports, duplicate protection, export, and data governance.",
    preparesNext: "A portfolio-ready Admin project and final certification assessment."
  }
];

const ADMIN_STANDARD_COVERAGE = [
  {
    title: "Salesforce Standard Coverage: Org Configuration and Administration",
    topics: [
      "Understand editions, licenses, feature availability, company settings, fiscal year, business hours, holidays, currencies, locales, languages, and timezones.",
      "Manage users through activation, deactivation, freezing, password resets, login history, and trusted network settings.",
      "Use Setup Audit Trail, Optimizer, Health Check, release updates, and Salesforce Trust resources to maintain an org."
    ],
    outcomes: [
      "Explain how org-level settings and licenses affect available Salesforce capabilities.",
      "Perform routine user and org administration safely.",
      "Describe the shared-responsibility model and prepare for Salesforce releases."
    ],
    practice: [
      "Review Company Information, licenses, business hours, fiscal year, Setup Audit Trail, Health Check, and pending release updates."
    ],
    questions: [
      "What is the difference between freezing, deactivating, and deleting a Salesforce user?",
      "Which Setup tools help an administrator monitor configuration changes and org health?"
    ],
    html: `<p>Administrators own more than navigation. They maintain company settings, licenses, users, login controls, business hours, fiscal periods, currencies, and release readiness. Review <strong>Setup Audit Trail</strong> for configuration changes, <strong>Health Check</strong> for security posture, and Salesforce release resources before enabling major updates.</p>`
  },
  {
    title: "Salesforce Standard Coverage: Standard Data Model and Record Configuration",
    topics: [
      "Understand the purpose and relationships of Account, Contact, Lead, Opportunity, Campaign, Case, Activity, Product, Price Book, Quote, and User.",
      "Configure record types, business processes, picklist values, dependent picklists, field dependencies, and page-layout assignments.",
      "Use formula fields, cross-object formulas, roll-up summaries, external IDs, unique fields, and relationship fields appropriately."
    ],
    outcomes: [
      "Explain the core Salesforce standard-object data model.",
      "Use record types and business processes to support different user experiences.",
      "Choose between formulas, roll-up summaries, relationships, and stored fields."
    ],
    practice: [
      "Map the Student Success CRM objects to comparable standard Salesforce objects and create a record type with controlled picklist values."
    ],
    questions: [
      "What do record types control, and what do they not control?",
      "When can a roll-up summary field be used?"
    ],
    html: `<p>A complete administrator understands both custom solutions and Salesforce's standard data model. <strong>Record types</strong> select business processes, picklist values, and page-layout assignments. They do not grant record access. Use formulas for calculated values, roll-up summaries for supported Master-Detail aggregation, and external IDs for integration or upsert matching.</p>`
  },
  {
    title: "Salesforce Standard Coverage: Complete Access and Security Model",
    topics: [
      "Understand user licenses, permission set licenses, profiles, permission sets, permission set groups, and muting permissions.",
      "Control record access with organization-wide defaults, role hierarchy, sharing rules, teams, queues, public groups, manual sharing, and territories.",
      "Configure login hours, IP ranges, session settings, delegated administration, and field accessibility."
    ],
    outcomes: [
      "Troubleshoot access from login and license level through object, field, and record access.",
      "Choose the correct record-sharing mechanism for a business requirement.",
      "Apply least privilege using permission sets and permission set groups."
    ],
    practice: [
      "Build an access-troubleshooting checklist and test a queue, public group, sharing rule, and permission set group."
    ],
    questions: [
      "How do organization-wide defaults, role hierarchy, and sharing rules work together?",
      "What is the difference between a queue, public group, role, and territory?"
    ],
    html: `<p>Access troubleshooting should follow a consistent order: confirm the user can log in and has the correct license, then check object permissions, field-level security, and record access. Record access begins with <strong>organization-wide defaults</strong> and can be opened through roles, sharing rules, teams, territories, queues, or manual sharing.</p>`
  },
  {
    title: "Salesforce Standard Coverage: Lightning Experience and Productivity",
    topics: [
      "Configure Lightning apps, navigation items, Lightning record pages, Dynamic Forms, Dynamic Actions, tabs, layouts, compact layouts, and list views.",
      "Understand buttons, links, quick actions, global actions, related lists, search layouts, and mobile navigation.",
      "Use activities, tasks, events, calendars, email templates, Chatter, and collaboration features."
    ],
    outcomes: [
      "Choose between a page layout, compact layout, and Lightning record page.",
      "Configure desktop and mobile experiences for different users.",
      "Improve user productivity with actions, activities, list views, and collaboration."
    ],
    practice: [
      "Create a role-focused Lightning record page, quick action, list view, and mobile-friendly compact layout."
    ],
    questions: [
      "What is the difference between a page layout and a Lightning record page?",
      "When should an administrator use a quick action or global action?"
    ],
    html: `<p>The user experience is controlled by several layers. <strong>Page layouts</strong> control fields, buttons, and related lists; <strong>Lightning record pages</strong> control component placement and visibility; <strong>compact layouts</strong> control highlights and mobile summaries. Actions, activities, list views, calendars, email templates, and Chatter help users complete daily work efficiently.</p>`
  },
  {
    title: "Salesforce Standard Coverage: Data Quality and Business Processes",
    topics: [
      "Use required fields, validation rules, formula functions, dependent picklists, record types, matching rules, duplicate rules, and automation to protect data.",
      "Understand business processes for Leads, Opportunities, Cases, and Solutions where available.",
      "Design validation rules that work with imports, integrations, automation, and user exceptions."
    ],
    outcomes: [
      "Choose the correct data-quality control for each requirement.",
      "Explain how business processes and record types control status and stage values.",
      "Test validation behavior across UI, imports, and automation."
    ],
    practice: [
      "Create a record type, business-process-specific picklist, dependent picklist, and validation test matrix."
    ],
    questions: [
      "When should you use a required field, validation rule, dependent picklist, or duplicate rule?",
      "How do record types and business processes work together?"
    ],
    html: `<p>Data quality is layered. Use required fields for universal requirements, validation rules for conditional logic, dependent picklists for guided choices, and matching plus duplicate rules for duplicate prevention. Standard-object <strong>business processes</strong> control available Lead Status, Opportunity Stage, and Case Status values and are selected through record types.</p>`
  },
  {
    title: "Salesforce Standard Coverage: Sales, Service, and Analytics",
    topics: [
      "Manage the sales lifecycle using Campaigns, Leads, lead assignment, lead conversion, Accounts, Contacts, Opportunities, stages, products, price books, quotes, forecasts, and teams.",
      "Manage service using Cases, queues, assignment rules, escalation rules, auto-response rules, Email-to-Case, Web-to-Case, Knowledge, and entitlements.",
      "Build report types, reports, buckets, summary formulas, cross filters, dashboards, subscriptions, and folder sharing."
    ],
    outcomes: [
      "Explain a standard Sales Cloud lifecycle from campaign and lead through opportunity.",
      "Explain a standard Service Cloud case lifecycle and routing options.",
      "Select the correct report format, filter, formula, dashboard, and sharing model."
    ],
    practice: [
      "Create a sample Lead and convert it, create and route a Case, then report on both sales and service metrics."
    ],
    questions: [
      "What records can Salesforce create during lead conversion?",
      "What is the difference between case assignment, escalation, and auto-response rules?",
      "How do report folder access and record access affect report results?"
    ],
    html: `<p>Administrators must understand Salesforce's standard business applications. In Sales Cloud, work typically moves from Campaign and Lead to Account, Contact, and Opportunity. In Service Cloud, Cases are captured, routed to users or queues, escalated, resolved with Knowledge, and measured against service goals. Reports and dashboards surface results but never bypass the viewer's underlying record access.</p>`
  },
  {
    title: "Salesforce Standard Coverage: Automation Selection and Foundations",
    topics: [
      "Choose between validation rules, Flow, approval processes, and Apex based on the requirement.",
      "Understand Flow triggers, entry conditions, before-save and after-save behavior, scheduled paths, actions, email alerts, and order-of-execution basics.",
      "Use Flow debugging, fault paths, descriptions, naming standards, and version management."
    ],
    outcomes: [
      "Select the correct declarative automation tool.",
      "Explain when to use before-save versus after-save record-triggered Flow.",
      "Build testable automation with visible fault handling."
    ],
    practice: [
      "Document an automation decision matrix and build one before-save and one after-save record-triggered Flow."
    ],
    questions: [
      "When should a record-triggered Flow run before save versus after save?",
      "Why must administrators consider order of execution?"
    ],
    html: `<p>Use the simplest tool that satisfies the requirement. A before-save Flow efficiently updates the triggering record; an after-save Flow can create related records and perform actions. Administrators should understand order-of-execution effects, prevent recursion, use fault paths, test expected and unexpected inputs, and keep only the intended Flow version active.</p>`
  },
  {
    title: "Salesforce Standard Coverage: Scalable Automation and Troubleshooting",
    topics: [
      "Build reusable subflows, scheduled flows, screen flows, record-triggered flows, and autolaunched flows.",
      "Avoid limits by processing collections, minimizing database operations, and preventing recursive updates.",
      "Monitor failed and paused Flow interviews, debug as another user, and design recovery paths."
    ],
    outcomes: [
      "Design maintainable multi-object automation.",
      "Explain common Flow limit and recursion risks.",
      "Troubleshoot and monitor Flow failures."
    ],
    practice: [
      "Refactor repeated logic into a subflow and document monitoring and recovery steps for a failed Flow interview."
    ],
    questions: [
      "Why should Flow loops avoid Get, Create, Update, or Delete Records elements?",
      "How can an administrator investigate a failed Flow interview?"
    ],
    html: `<p>Scalable Flow design works with collections, limits database operations, avoids recursion, and reuses subflows where appropriate. Production automation also needs monitoring: administrators should know how to inspect failed and paused interviews, read error details, reproduce failures, and provide a controlled recovery path.</p>`
  },
  {
    title: "Salesforce Standard Coverage: Approvals, AI, and Change Management",
    topics: [
      "Configure approval submission, approvers, record locking, recall, delegated approvers, and approval/rejection actions.",
      "Understand Salesforce AI and Agentforce administration basics: permissions, trusted grounding, data security, testing, monitoring, and responsible use.",
      "Plan configuration changes using sandboxes, change sets or DevOps tools, dependency checks, testing, and rollback planning."
    ],
    outcomes: [
      "Choose an approval process when a human decision and audit history are required.",
      "Explain the administrator's responsibility when enabling Salesforce AI capabilities.",
      "Prepare and validate a controlled deployment plan."
    ],
    practice: [
      "Create a deployment checklist and an AI-governance checklist alongside the graduation approval process."
    ],
    questions: [
      "What should be tested before deploying Salesforce configuration?",
      "What security and governance checks should an administrator perform before enabling an AI capability?"
    ],
    html: `<p>Advanced administration includes governance. Approval processes provide human decisions, locking, and audit history. AI and Agentforce capabilities require permission control, trusted data grounding, careful testing, monitoring, and responsible-use policies. Configuration changes should move through controlled environments with dependency review, testing evidence, deployment validation, communication, and rollback planning.</p>`
  },
  {
    title: "Salesforce Standard Coverage: Data Lifecycle, Deployment, and Maintenance",
    topics: [
      "Plan imports, exports, inserts, updates, upserts, deletes, undeletes, transfers, backups, archiving, and retention.",
      "Understand Data Import Wizard, Data Loader, export services, external IDs, Bulk API concepts, Recycle Bin, mass transfer, and storage monitoring.",
      "Maintain production through sandbox strategy, deployment validation, release readiness, documentation, adoption measurement, and operational support."
    ],
    outcomes: [
      "Choose the correct data tool and operation for a migration or maintenance task.",
      "Create backup, rollback, reconciliation, and data-retention plans.",
      "Describe the ongoing responsibilities of a production Salesforce Administrator."
    ],
    practice: [
      "Complete a capstone runbook covering import, reconciliation, backup, deployment, rollback, release review, and user support."
    ],
    questions: [
      "What is the difference between insert, update, and upsert?",
      "What should a complete Salesforce deployment and rollback runbook contain?"
    ],
    html: `<p>Data management is a lifecycle, not only an import. Administrators plan backups, clean and map source data, select insert/update/upsert operations, test in a safe environment, reconcile results, and document rollback steps. After launch, they monitor storage, adoption, security, automation failures, releases, support requests, and configuration changes.</p>`
  }
];

const ADMIN_DEEP_DIVE_COVERAGE = [
  {
    sections: [
      { title: "User Lifecycle and License Administration", content: `<p>Administrators create users, assign the correct user license and profile, grant additional access with permission sets, reset passwords, unlock accounts, freeze access immediately when needed, and deactivate users without losing ownership history. Before deactivation, review ownership, scheduled jobs, integrations, dashboards, and approval assignments.</p>` },
      { title: "Org Settings and Business Calendar", content: `<p>Company Information, fiscal year, business hours, holidays, currencies, locale, language, timezone, and storage settings affect reporting, automation, support processes, and user experience. Document every org-level change because its impact can be broad.</p>` },
      { title: "Release Readiness and Admin Monitoring", content: `<p>Use Setup Audit Trail, Login History, Health Check, Optimizer, Release Updates, Salesforce Trust, and sandbox preview environments to understand change, risk, availability, and upcoming platform behavior. Test release updates before production activation.</p>` },
      { title: "Salesforce Ecosystem and Installed Solutions", content: `<p>AppExchange provides installable apps, components, consultants, and solutions. AgentExchange provides trusted AI agent actions, topics, and templates where available. Before installing anything, review publisher trust, permissions, data access, licensing, dependencies, support, upgrade path, and uninstall impact.</p>` }
    ],
    outcomes: [
      "Administer the complete user lifecycle without losing record ownership or business continuity.",
      "Assess installed packages and ecosystem solutions before introducing them into an org."
    ],
    practice: [
      "Create a user-offboarding checklist covering freeze, ownership transfer, automation, integrations, and deactivation.",
      "Review one AppExchange solution and document its permissions, dependencies, licensing, and uninstall risks."
    ],
    questions: [
      "What must be reviewed before deactivating a user?",
      "How should an administrator assess an AppExchange or AgentExchange solution before installation?"
    ],
    flashcards: [
      { front: "Freeze versus deactivate?", back: "Freeze immediately blocks login. Deactivation also frees the user license but requires dependency and ownership review." },
      { front: "What does Setup Audit Trail show?", back: "Recent configuration changes made in Setup, including who changed them and when." },
      { front: "Why use a sandbox preview for a release?", back: "To test upcoming Salesforce behavior and release updates before production is upgraded." }
    ]
  },
  {
    sections: [
      { title: "Standard Object Business Model", content: `<p>Understand how Campaigns generate Leads, converted Leads create or connect Accounts and Contacts, Opportunities track potential revenue, Products and Price Books define what can be sold, Quotes communicate proposed pricing, Activities track work, and Cases track customer support. Use custom objects only when the standard model does not fit the requirement.</p>` },
      { title: "Record Types, Business Processes, and Picklists", content: `<p>Record types select page-layout assignments, available picklist values, and supported standard-object business processes. Business processes control Lead Status, Opportunity Stage, Case Status, and Solution Status values. Use global value sets for reusable custom picklist values and field dependencies to guide valid selections.</p>` },
      { title: "Advanced Field Selection", content: `<p>Choose Auto Number for generated identifiers, External ID and Unique fields for matching and integration, Geolocation for coordinates, Encrypted Text for protected values where appropriate, Formula for calculated output, and Roll-Up Summary for supported Master-Detail aggregation. Review reporting, indexing, integration, and change implications before choosing a type.</p>` },
      { title: "Relationship and Ownership Design", content: `<p>Lookup, Master-Detail, hierarchical User relationships, self-relationships, and junction objects have different ownership, sharing, deletion, and reporting behavior. Design for the real business lifecycle, including what happens when parent records are deleted, merged, transferred, or made private.</p>` }
    ],
    outcomes: [
      "Explain the connected standard-object business model from marketing through sales and service.",
      "Configure record types, business processes, global value sets, and field dependencies.",
      "Select advanced field types based on reporting, security, integration, and lifecycle requirements."
    ],
    practice: [
      "Create two Student record types with different Learning Status picklist values and page-layout assignments.",
      "Create a global value set and a dependent picklist, then document the controlling-field matrix."
    ],
    questions: [
      "How do record types, business processes, page layouts, and picklist values work together?",
      "When should an administrator use an External ID, Unique field, Formula, or Roll-Up Summary?"
    ],
    flashcards: [
      { front: "Do record types grant access?", back: "No. They influence business processes, picklist values, and page-layout assignments, but security controls access." },
      { front: "When is Roll-Up Summary available?", back: "On the master side of supported Master-Detail relationships." },
      { front: "Why use an External ID?", back: "To match records with an external system and support operations such as upsert." }
    ]
  },
  {
    sections: [
      { title: "Authentication, Sessions, and Identity", content: `<p>Protect login access with MFA, password policies, login hours, profile IP ranges, trusted IP ranges, session settings, login history, and identity features such as SSO where licensed and configured. Connected Apps control OAuth access for external clients and must be reviewed carefully.</p>` },
      { title: "Permission Architecture", content: `<p>User licenses define the maximum available capability. Profiles provide baseline settings and access. Permission sets grant additional access, permission set groups bundle assignments, and muting permission sets remove selected permissions from a group. Permission set licenses unlock access to licensed features.</p>` },
      { title: "Record Sharing Architecture", content: `<p>Begin with organization-wide defaults, then open access through role hierarchy, sharing rules, teams, territories, queues, public groups, manual sharing, and programmatic sharing. Restriction rules can further limit visible records for supported scenarios. Object permission never guarantees record visibility, and record sharing never grants missing object permission.</p>` },
      { title: "Security Troubleshooting and Monitoring", content: `<p>Troubleshoot from login and license through profile, permission sets, object access, field-level security, record sharing, and app/page visibility. Use User Access Summary, Object Access, Field Accessibility, Login History, Setup Audit Trail, and test users to prove effective access.</p>` }
    ],
    outcomes: [
      "Explain authentication, authorization, and record sharing as separate security layers.",
      "Use a repeatable process to troubleshoot why a user can or cannot perform an action."
    ],
    practice: [
      "Create a security troubleshooting worksheet for a Tutor who cannot view or edit a Student record.",
      "Review MFA, session settings, login history, and one Connected App policy in the practice org."
    ],
    questions: [
      "What is the difference between authentication and authorization?",
      "In what order should an administrator troubleshoot a record-access problem?"
    ],
    flashcards: [
      { front: "License versus profile?", back: "The license defines maximum available capabilities; the profile supplies baseline permissions and settings." },
      { front: "Does sharing grant object permission?", back: "No. Sharing opens record access only after required object permission exists." },
      { front: "What does MFA protect?", back: "User authentication by requiring an additional verification factor beyond the password." }
    ]
  },
  {
    sections: [
      { title: "Lightning Experience Control Layers", content: `<p>Lightning apps control navigation and workspace context. Lightning record pages control components and visibility. Page layouts control fields, buttons, actions, and related lists. Compact layouts control highlights. Record types connect users to appropriate business processes, picklist values, and layouts.</p>` },
      { title: "Dynamic Forms, Actions, and Visibility", content: `<p>Dynamic Forms can place supported fields and sections as Lightning components and control visibility with rules. Dynamic Actions control which actions appear based on criteria. Component visibility personalizes pages without creating unnecessary duplicate pages.</p>` },
      { title: "Productivity and Collaboration", content: `<p>Configure list views, Kanban where supported, tasks, events, calendars, email templates, quick actions, global actions, Chatter, feeds, quick text, and utility items to reduce clicks and keep work visible. Search layouts and related lists affect how users find and understand records.</p>` },
      { title: "Mobile Rollout and User Engagement", content: `<p>Plan mobile navigation, compact layouts, actions, offline expectations, and device testing for Salesforce mobile users. Drive adoption with in-app guidance, prompts, walkthroughs, help text, onboarding materials, training, feedback, and adoption metrics.</p>` }
    ],
    outcomes: [
      "Configure the correct Lightning layer for a user-experience requirement.",
      "Plan a mobile rollout and adoption strategy instead of only building pages."
    ],
    practice: [
      "Create a Dynamic Form visibility rule and a Dynamic Action for Program Managers.",
      "Write a mobile rollout and user-adoption plan including training, feedback, and success metrics."
    ],
    questions: [
      "Which Lightning configuration layer should be changed for fields, components, actions, highlights, or navigation?",
      "How can an administrator measure and improve feature adoption?"
    ],
    flashcards: [
      { front: "Page layout versus Lightning record page?", back: "Page layout controls fields, actions, buttons, and related lists; Lightning record page controls components and their placement or visibility." },
      { front: "What do compact layouts control?", back: "Key fields shown in highlights and mobile record summaries." },
      { front: "What is in-app guidance used for?", back: "Providing contextual prompts and walkthroughs that improve onboarding and adoption." }
    ]
  },
  {
    sections: [
      { title: "Layered Data Quality Controls", content: `<p>Use field types and picklists to structure input, required fields for universal requirements, field dependencies for valid choices, validation rules for conditional invalid states, duplicate management for matching records, and automation for guided correction or enrichment. Select the least complex control that reliably protects the data.</p>` },
      { title: "Formula Function Toolkit", content: `<p>Administrators should read and build formulas using logical functions such as IF, AND, OR, NOT, and CASE; blank handling such as ISBLANK and BLANKVALUE; picklist functions such as ISPICKVAL and TEXT; date functions such as TODAY and DATE; and prior-value functions such as ISCHANGED and PRIORVALUE.</p>` },
      { title: "Validation Design and Exceptions", content: `<p>A validation rule describes the invalid condition and blocks the transaction when True. Design for imports, integrations, automation, user exceptions, and existing data. Use custom permissions for controlled bypass scenarios instead of hard-coding usernames or profiles.</p>` },
      { title: "Auditability and Duplicate Management", content: `<p>Matching rules define how records are compared. Duplicate rules decide whether to allow, alert, report, or block. Field History Tracking, Feed Tracking, Setup Audit Trail, and reporting provide different kinds of change visibility. Choose the audit feature that matches the business requirement.</p>` }
    ],
    outcomes: [
      "Design layered data-quality controls and choose the correct formula functions.",
      "Create maintainable validation-rule bypass and audit strategies."
    ],
    practice: [
      "Create a validation-rule test matrix covering UI, import, integration, automation, bypass, and boundary cases.",
      "Configure Field History Tracking for one important Student field and report on its changes."
    ],
    questions: [
      "How should an administrator design a controlled validation-rule bypass?",
      "What is the difference between Field History Tracking, Feed Tracking, and Setup Audit Trail?"
    ],
    flashcards: [
      { front: "What should a validation formula describe?", back: "The invalid condition. When the formula returns True, Salesforce blocks the save." },
      { front: "Why use a custom permission for bypass?", back: "It provides maintainable, assignable exception control without hard-coded users or profiles." },
      { front: "Matching rule versus duplicate rule?", back: "Matching defines how records compare; duplicate rules define the action when a match is found." }
    ]
  },
  {
    sections: [
      { title: "Sales Cloud Lifecycle", content: `<p>Campaigns organize marketing efforts and members. Leads represent unqualified prospects and can be routed with queues and assignment rules or captured with Web-to-Lead. Lead conversion can create or connect an Account and Contact and optionally create an Opportunity. Opportunities move through sales stages and can use teams, products, price books, quotes, forecasts, and Path guidance.</p>` },
      { title: "Service Cloud Lifecycle", content: `<p>Cases can enter through manual creation, Web-to-Case, Email-to-Case, or integrations. Assignment rules route cases to users or queues, auto-response rules acknowledge customers, escalation rules act on unresolved cases, and Omni-Channel routes supported work. Service Console, Knowledge, quick text, macros, entitlements, and milestones improve agent productivity and service governance.</p>` },
      { title: "Advanced Reports", content: `<p>Choose the correct report type and format. Use groupings, bucket fields, summary formulas, row-level formulas, cross filters, filter logic, joined reports, historical reporting where available, and subscriptions. Custom report types control the object relationships and fields available to report builders.</p>` },
      { title: "Dashboard Design and Analytics Security", content: `<p>Dashboards visualize source reports through charts, tables, metrics, gauges, and other components. Running-user behavior, dynamic dashboards, folder sharing, subscriptions, and underlying record access determine what viewers can see. Design dashboards around decisions and actionable KPIs, not decoration.</p>` }
    ],
    outcomes: [
      "Administer standard Sales Cloud and Service Cloud lifecycles.",
      "Build advanced reports and dashboards while respecting analytics security."
    ],
    practice: [
      "Capture a Lead, apply routing, convert it, and document the resulting Account, Contact, and Opportunity records.",
      "Create and route a Case using a queue and assignment rule, then document escalation and auto-response behavior.",
      "Build a joined or cross-filter report and explain its business purpose."
    ],
    questions: [
      "How do lead assignment, conversion, opportunities, products, price books, quotes, and forecasts connect?",
      "How do case assignment, auto-response, escalation, Omni-Channel, entitlements, and milestones differ?",
      "When should an administrator use a joined report, cross filter, bucket field, or summary formula?"
    ],
    flashcards: [
      { front: "What can lead conversion create?", back: "An Account, a Contact, and optionally an Opportunity, while preserving relevant mapped data." },
      { front: "Case assignment versus escalation?", back: "Assignment routes a case to an owner; escalation changes ownership or notifies others when conditions and time thresholds are met." },
      { front: "What does a custom report type control?", back: "The object relationships and fields available when users build reports." }
    ]
  },
  {
    sections: [
      { title: "Flow Resources and Elements", content: `<p>Build with variables, record variables, collections, constants, formulas, choices, text templates, global variables, and actions. Understand Assignment, Decision, Loop, Get Records, Create Records, Update Records, Delete Records, Subflow, and Screen elements before selecting a design.</p>` },
      { title: "Transaction Timing and Order of Execution", content: `<p>Before-save record-triggered flows efficiently update the triggering record. After-save flows can perform related-record work and actions. Asynchronous and scheduled paths move eligible work outside the immediate transaction or to a later time. Consider validation rules, duplicate rules, other automation, commits, and recursion when designing behavior.</p>` },
      { title: "Flow Security and Run Context", content: `<p>Flow behavior depends on how it is launched and the selected context. Screen flows and background flows can have different access implications. Never assume Flow should bypass user security; document the required context and protect sensitive inputs, outputs, and actions.</p>` },
      { title: "Flow Testing and Version Control", content: `<p>Use Debug, rollback mode where available, test records, Flow tests where supported, fault paths, descriptive labels, version descriptions, and Flow Trigger Explorer. Activate only the intended version and document test evidence before deployment.</p>` }
    ],
    outcomes: [
      "Use core Flow resources and elements correctly.",
      "Explain transaction timing, execution context, and testing requirements."
    ],
    practice: [
      "Create a Flow design document listing trigger, context, resources, elements, fault handling, and test cases.",
      "Debug one Flow with both successful and fault scenarios and record the evidence."
    ],
    questions: [
      "What resources and elements are commonly used in Flow Builder?",
      "How can Flow execution context affect security and behavior?"
    ],
    flashcards: [
      { front: "Before-save Flow strength?", back: "Efficiently updating fields on the triggering record before it is saved." },
      { front: "What does Flow Trigger Explorer help manage?", back: "Record-triggered flows by object, event, and execution order." },
      { front: "Why keep fault paths?", back: "To make failures visible and provide controlled error handling or recovery." }
    ]
  },
  {
    sections: [
      { title: "Collection-Based and Limit-Aware Design", content: `<p>Use Get Records before loops, store changes in collections, and perform Create, Update, or Delete operations after loops. Avoid database operations inside loops, unnecessary queries, repeated updates, and recursive designs. Tight entry criteria and change detection reduce wasted interviews.</p>` },
      { title: "Reusable and Integration Automation", content: `<p>Build Autolaunched Flows with clear input and output variables for reuse as Subflows. Use invocable actions, External Services, HTTP callouts where supported, platform events, and Apex only when the requirement exceeds declarative capability. Document contracts and failure behavior.</p>` },
      { title: "Troubleshooting and Recovery", content: `<p>Investigate failed or paused interviews, error emails, debug details, permissions, validation conflicts, missing records, and limit problems. Reproduce safely, correct the root cause, and define whether failed work should be retried, compensated, or manually completed.</p>` },
      { title: "Orchestration and Long-Running Work", content: `<p>Use Flow Orchestration for coordinated stages, steps, work items, and multiple participants. Compare it with standard Flow and approval processes before choosing it. Long-running work requires clear ownership, due dates, exception paths, and monitoring.</p>` }
    ],
    outcomes: [
      "Build limit-aware, reusable, integration-ready Flow automation.",
      "Diagnose failures and design controlled recovery."
    ],
    practice: [
      "Refactor a loop-based Flow to collect changes and update records once after the loop.",
      "Create a Flow failure runbook covering detection, diagnosis, correction, retry, and communication."
    ],
    questions: [
      "How do collection-based patterns reduce Flow limit risk?",
      "When should an administrator use External Services, platform events, invocable actions, or Apex?"
    ],
    flashcards: [
      { front: "Why avoid database elements inside loops?", back: "They multiply queries or data operations and can exceed transaction limits." },
      { front: "What is External Services used for?", back: "Making supported external operations available as declarative actions from an API definition." },
      { front: "Flow failure recovery options?", back: "Retry, compensate, or complete manually after correcting the root cause." }
    ]
  },
  {
    sections: [
      { title: "Approval Process Design", content: `<p>Define entry criteria, allowed submitters, approvers, delegated approvers, step criteria, record locking, recall behavior, initial submission actions, approval actions, rejection actions, final actions, and approval history. Test approval, rejection, recall, resubmission, and exception scenarios.</p>` },
      { title: "Responsible AI and Agentforce Administration", content: `<p>Before enabling AI or Agentforce capabilities, confirm licenses, user permissions, approved data access, grounding sources, prompt and action scope, human oversight, testing, monitoring, auditability, and responsible-use policies. AI must not receive broader access than the user or approved service context should have.</p>` },
      { title: "Sandbox and Deployment Strategy", content: `<p>Choose Developer, Developer Pro, Partial Copy, or Full sandboxes according to metadata, data, testing, and refresh needs. Plan deployment with dependencies, source control or change tracking, validation, tests, communication, post-deployment steps, rollback options, and evidence.</p>` },
      { title: "Packages and Change Governance", content: `<p>Understand unmanaged and managed package implications, installed-package permissions, upgrades, dependencies, and uninstall risk. Use change requests, peer review, documentation, naming standards, test evidence, and separation of duties to govern production configuration.</p>` }
    ],
    outcomes: [
      "Design complete approval, AI-governance, and deployment strategies.",
      "Select a sandbox and change mechanism based on risk and testing needs."
    ],
    practice: [
      "Create a deployment plan containing dependency analysis, validation, test evidence, communication, post-deployment checks, and rollback.",
      "Write an Agentforce or AI enablement checklist covering permissions, grounding, actions, testing, monitoring, and human oversight."
    ],
    questions: [
      "How do sandbox types differ, and how should an administrator choose one?",
      "What controls are required before enabling an AI agent or action in production?"
    ],
    flashcards: [
      { front: "Why lock a record during approval?", back: "To prevent conflicting edits while the human decision is pending." },
      { front: "What should govern AI access?", back: "Approved permissions, trusted data grounding, scoped actions, testing, monitoring, and human oversight." },
      { front: "What belongs in a rollback plan?", back: "The conditions, metadata or data recovery steps, owners, timing, and verification needed to reverse a failed change." }
    ]
  },
  {
    sections: [
      { title: "Data Lifecycle and Tool Selection", content: `<p>Profile, clean, map, validate, import, reconcile, protect, archive, and delete data through a documented lifecycle. Choose Data Import Wizard for supported guided imports, Data Loader for broader objects and operations, and appropriate APIs or integration tools for automated or large-scale requirements.</p>` },
      { title: "Data Operations and Recovery", content: `<p>Understand insert, update, upsert, delete, hard delete, undelete, export, transfer, merge, and mass operations. External IDs support reliable matching. Backups must include both data and the metadata needed to understand and restore it. Recycle Bin is useful but is not a complete backup strategy.</p>` },
      { title: "Production Deployment and Release Operations", content: `<p>Validate deployments before execution, run appropriate tests, review dependencies, perform post-deployment assignments and activation, verify critical workflows, and monitor after release. Review Salesforce seasonal releases, critical updates, deprecations, sandbox previews, and maintenance schedules.</p>` },
      { title: "Operational Administration and Adoption", content: `<p>Production administrators manage support requests, incidents, access reviews, storage, automation failures, data quality, backups, releases, documentation, technical debt, training, and adoption. Use prioritization, change logs, service expectations, root-cause analysis, and measurable success criteria.</p>` },
      { title: "Final Administrator Readiness Capstone", content: `<p>Complete an end-to-end scenario from requirement discovery through production support. Explain the chosen data model, access model, user experience, data-quality controls, automation, analytics, migration method, deployment plan, testing evidence, rollback plan, adoption strategy, and ongoing support model. A strong administrator can justify each decision and troubleshoot the interactions between them.</p><p class="mt-2">Use scenario questions to practice choosing the <strong>best</strong> Salesforce capability, not merely a capability that could work. Document assumptions, edition or license dependencies, security impact, data impact, maintainability, and testing for every solution.</p>` }
    ],
    outcomes: [
      "Manage data and metadata through migration, deployment, recovery, and maintenance lifecycles.",
      "Operate a production org with monitoring, documentation, adoption, and support practices.",
      "Defend end-to-end administrator decisions using business, security, data, automation, and operational requirements."
    ],
    practice: [
      "Create a complete data-migration plan covering profiling, cleansing, mapping, test import, reconciliation, backup, and rollback.",
      "Create a production admin runbook covering daily, weekly, monthly, quarterly, and release-cycle responsibilities.",
      "Present a final Student Success CRM solution review covering requirements, configuration, security, testing, deployment, adoption, and support."
    ],
    questions: [
      "Why is Recycle Bin not a complete backup strategy?",
      "What should an administrator verify immediately after a production deployment?",
      "What recurring operational responsibilities keep a Salesforce org healthy?",
      "How should an administrator choose the best solution when multiple Salesforce features could satisfy a requirement?"
    ],
    flashcards: [
      { front: "Insert versus update versus upsert?", back: "Insert creates records, update changes existing records, and upsert creates or updates by matching an ID or External ID." },
      { front: "What is reconciliation?", back: "Comparing expected and actual migration results to prove record counts, relationships, values, and errors." },
      { front: "What follows deployment?", back: "Post-deployment configuration, activation, smoke testing, monitoring, communication, and documentation." },
      { front: "How do you choose the best admin solution?", back: "Compare business fit, security, data impact, maintainability, licensing, user experience, testing, and operational risk." }
    ]
  }
];

const ADMIN_DEEP_RESOURCES = [
  [
    ["Trailhead Admin Beginner", "https://trailhead.salesforce.com/content/learn/trails/force_com_admin_beginner"],
    ["Trailhead Admin Intermediate", "https://trailhead.salesforce.com/content/learn/trails/force_com_admin_intermediate"]
  ],
  [
    ["Trailhead Data Modeling", "https://trailhead.salesforce.com/content/learn/modules/data_modeling"],
    ["Trailhead Picklist Administration", "https://trailhead.salesforce.com/content/learn/modules/picklist_admin"]
  ],
  [
    ["Trailhead Data Security", "https://trailhead.salesforce.com/content/learn/modules/data_security"],
    ["Salesforce Security Center", "https://security.salesforce.com/"]
  ],
  [
    ["Trailhead Lightning Experience Customization", "https://trailhead.salesforce.com/content/learn/modules/lex_customization"],
    ["Trailhead User Engagement", "https://trailhead.salesforce.com/content/learn/modules/user-engagement"],
    ["Trailhead Salesforce Mobile App Rollout", "https://trailhead.salesforce.com/content/learn/modules/salesforce1_rollout"]
  ],
  [
    ["Trailhead Formulas and Validations", "https://trailhead.salesforce.com/content/learn/modules/point_click_business_logic"],
    ["Trailhead Picklist Administration", "https://trailhead.salesforce.com/content/learn/modules/picklist_admin"]
  ],
  [
    ["Trailhead Reports and Dashboards", "https://trailhead.salesforce.com/content/learn/modules/lex_implementation_reports_dashboards"],
    ["Trailhead Sales Cloud Basics", "https://trailhead.salesforce.com/content/learn/modules/lex_sales_cloud_basics"],
    ["Trailhead Service Cloud Basics", "https://trailhead.salesforce.com/content/learn/modules/service_basics"]
  ],
  [
    ["Trailhead Flow Builder Basics", "https://trailhead.salesforce.com/content/learn/modules/flow-basics"],
    ["Trailhead Record-Triggered Flows", "https://trailhead.salesforce.com/content/learn/modules/record-triggered-flows"]
  ],
  [
    ["Trailhead External Services", "https://trailhead.salesforce.com/content/learn/modules/external-services"],
    ["Use External Services with a Flow", "https://trailhead.salesforce.com/content/learn/projects/use-external-services-with-a-flow"]
  ],
  [
    ["Trailhead Approval Processes", "https://trailhead.salesforce.com/content/learn/modules/business_process_automation/approvals"],
    ["Trailhead AgentExchange Basics", "https://trailhead.salesforce.com/content/learn/modules/appexchange_basics"]
  ],
  [
    ["Trailhead Data Management", "https://trailhead.salesforce.com/content/learn/modules/lex_implementation_data_management"],
    ["Trailhead Admin Intermediate", "https://trailhead.salesforce.com/content/learn/trails/force_com_admin_intermediate"]
  ]
];

const ADMIN_DEEP_LAB_CRITERIA = [
  "Describe the user-offboarding, release-readiness, and installed-solution risks you reviewed.",
  "Explain how record types, business processes, picklists, relationships, and advanced fields support your data model.",
  "Describe the complete access-troubleshooting path you tested from login through record access.",
  "Describe the Lightning, mobile, productivity, and user-adoption improvements you configured or planned.",
  "Explain your data-quality control choices, validation test matrix, and audit strategy.",
  "Describe the Sales Cloud, Service Cloud, and advanced analytics scenarios you completed.",
  "Explain the Flow type, transaction timing, execution context, and tests selected for your automation.",
  "Explain how you improved Flow scalability, reuse, troubleshooting, and failure recovery.",
  "Describe the approval, AI-governance, sandbox, deployment, and rollback controls you planned.",
  "Describe your data migration, deployment verification, release-readiness, and production-operations runbook."
];

const ADMIN_SUB_COURSES = [
  { id: "administrator", title: "Salesforce Administrator", moduleRange: "Modules 1-6", description: "Core platform, data model, security, user experience, data quality, Sales Cloud, Service Cloud, reports, and dashboards." },
  { id: "advanced-administrator", title: "Salesforce Advanced Administrator", moduleRange: "Modules 7-10", description: "Advanced automation, approvals, integration, development fundamentals, DevOps, AI, Agentforce, deployment, and production operations." }
];

const ADMIN_ROADMAP_COVERAGE = [
  { phase: "Phase 1: Cloud & Salesforce Fundamentals", track: "administrator", module: 0, topics: ["Introduction to Cloud Computing", "SaaS, PaaS, IaaS", "Salesforce CRM Overview", "Navigation", "Tabs", "Setup Menu", "Company Profile", "Object Manager", "Users", "Salesforce App Creation", "AppExchange", "Create a Salesforce Developer Org", "Create a Custom App", "Explore Setup Menu", "AppExchange Risk Review - Installation Not Required"] },
  { phase: "Phase 2: Data Model & Object Configuration", track: "administrator", module: 1, topics: ["Standard Objects", "Custom Objects", "Standard Fields", "Custom Fields", "Lookup Relationships", "Master-Detail Relationships", "Junction Objects", "Roll-Up Summary Fields", "Field History Tracking", "Create Student Object", "Create Course Object", "Create Course Enrollment Junction Object", "Configure Relationships", "Review the Model in Schema Builder"] },
  { phase: "Phase 3: UI Customization", track: "administrator", module: 3, topics: ["Page Layouts", "Record Types", "Lightning Record Pages", "Compact Layouts", "Search Layouts", "Custom Buttons", "Custom Links", "Quick Actions", "Create Multiple Record Types", "Customize Lightning Pages", "Create Quick Actions"] },
  { phase: "Phase 4: Business Logic", track: "administrator", module: 4, topics: ["Validation Rules", "Formula Fields", "Email Validation Rule", "Phone Validation Rule", "Salary Formula Calculation"] },
  { phase: "Phase 5: Sales Cloud", track: "administrator", module: 5, topics: ["Leads", "Accounts", "Contacts", "Opportunities", "Campaigns", "Sales Process", "Create Lead Process", "Convert Leads", "Manage Opportunities", "Create Sales Dashboard"] },
  { phase: "Phase 6: Security & User Management", track: "administrator", module: 2, topics: ["Users", "Profiles", "Permission Sets", "Roles", "OWD", "Sharing Rules", "Manual Sharing", "Field-Level Security", "Create Users", "Create Roles", "Configure Security", "Test Record Access"] },
  { phase: "Phase 7: Workflow Automation", track: "advanced-administrator", module: 8, topics: ["Workflow Rules", "Approval Processes", "Process Builder", "Flow Builder", "Leave Approval Workflow", "Email Notifications", "Auto Field Updates"] },
  { phase: "Phase 8: Lightning Flows", track: "advanced-administrator", module: 7, topics: ["Screen Flow", "Auto-Launched Flow", "Record Triggered Flow", "Scheduled Triggered Flow", "Platform Event Triggered Flow", "Login Flow", "Subflow", "Get Records", "Create Records", "Update Records", "Delete Records", "Assignment", "Decision", "Loop", "Variables", "Constants", "Formulas", "Text Templates", "Choice Sets", "Record Choice Sets", "Picklist Choice Sets", "Collections", "Employee Registration Flow", "Leave Request Flow", "Lead Assignment Flow", "Recruitment Flow"] },
  { phase: "Phase 9: Data Management", track: "advanced-administrator", module: 9, topics: ["Data Import Wizard", "Data Loader", "Data Import", "Data Export", "Insert", "Update", "Delete", "Upsert", "Import CSV Records", "Update Existing Data", "Export Backup Data"] },
  { phase: "Phase 10: Reports & Dashboards", track: "administrator", module: 5, topics: ["Reports", "Report Types", "Custom Report Types", "Dashboards", "Dynamic Dashboards", "Bucket Fields", "Sales Dashboard", "Recruitment Dashboard", "Employee Dashboard"] },
  { phase: "Phase 11: Sandboxes & Deployment", track: "advanced-administrator", module: 9, topics: ["Developer Sandbox", "Developer Pro Sandbox", "Partial Copy Sandbox", "Full Sandbox", "Sandbox Refresh", "Change Sets", "Deployment Checklist", "Create Sandbox", "Deploy Object", "Deploy Flow", "Validate Deployment"] },
  { phase: "Phase 12: Service Cloud", track: "administrator", module: 5, topics: ["Cases", "Queues", "Assignment Rules", "Escalation Rules", "Auto Response Rules", "Email-to-Case", "Web-to-Case", "Entitlements", "Milestones", "Knowledge Articles", "Customer Support Portal"] },
  { phase: "Phase 13: Apex Basics", track: "advanced-administrator", module: 9, topics: ["Apex Classes", "Methods", "Variables", "Collections", "Triggers Overview", "Debug Logs", "Create HelloWorld Class", "Execute Anonymous Window", "Debug Logs Analysis"] },
  { phase: "Phase 14: SOQL & SOSL", track: "advanced-administrator", module: 9, topics: ["SOQL Basics", "SOSL Basics", "WHERE Clause", "ORDER BY", "LIMIT", "Aggregate Functions", "Query Accounts", "Query Contacts", "Aggregate Reports"] },
  { phase: "Phase 15: Developer Console", track: "advanced-administrator", module: 9, topics: ["Query Editor", "Execute Anonymous", "Debugging", "Logs", "Run Queries", "Analyze Logs"] },
  { phase: "Phase 16: Apex Monitoring", track: "advanced-administrator", module: 9, topics: ["Apex Jobs", "Scheduled Jobs", "Batch Jobs", "Queueable Jobs", "Monitor Jobs", "Review Batch Execution"] },
  { phase: "Phase 17: Configuration Metadata", track: "advanced-administrator", module: 9, topics: ["Custom Settings", "Custom Labels", "Custom Metadata Types", "Create API Endpoint Metadata", "Create Reusable Labels"] },
  { phase: "Phase 18: Audit & Compliance", track: "advanced-administrator", module: 9, topics: ["Setup Audit Trail", "Login History", "Field History Tracking", "Review Login History", "Audit Changes"] },
  { phase: "Phase 19: Integration Basics", track: "advanced-administrator", module: 9, topics: ["REST API", "Postman", "Workbench", "REST Explorer", "Test Salesforce API", "Execute REST Calls"] },
  { phase: "Phase 20: Release Management", track: "advanced-administrator", module: 9, topics: ["Release Preparation", "UAT Validation", "Production Deployment", "Cutover Activities", "Code Freeze", "UAT Approval", "Backup Verification", "Production Validation"] },
  { phase: "Phase 21: Salesforce Administration Operations", track: "advanced-administrator", module: 9, topics: ["User Management", "Permission Changes", "Data Cleanup", "Flow Monitoring", "Apex Monitoring", "Login Support", "Login Problems", "Sharing Issues", "Validation Rule Errors", "Flow Failures", "Report Issues", "Email Delivery Problems"] },
  { phase: "Phase 22: DevOps Fundamentals", track: "advanced-administrator", module: 9, topics: ["CI/CD", "Continuous Integration", "Continuous Deployment", "Version Control"] },
  { phase: "Phase 23: Git & GitHub", track: "advanced-administrator", module: 9, topics: ["Install Git", "Git Commands", "Local Repository", "Remote Repository", "GitHub Setup", "Initialize Repository", "Commit Changes", "Push Changes", "Pull Changes"] },
  { phase: "Phase 24: VS Code & Salesforce CLI", track: "advanced-administrator", module: 9, topics: ["VS Code Setup", "Salesforce CLI Installation", "Authorize Org", "Retrieve Metadata", "Deploy Metadata", "Connect Org", "Retrieve Components", "Deploy Components"] },
  { phase: "Phase 25: Branching & Pull Requests", track: "advanced-administrator", module: 9, topics: ["Feature Branches", "Development Branch", "Main Branch", "Pull Requests", "Code Reviews", "Merge Strategy", "Feature Branch to Pull Request to Review to Merge"] },
  { phase: "Phase 26: Salesforce DevOps Pipeline", track: "advanced-administrator", module: 9, topics: ["Developer Sandbox to VS Code to Git to GitHub to CI/CD Pipeline to Production", "GitHub Actions", "Jenkins", "Gearset", "Copado"] },
  { phase: "Phase 27: Salesforce AI", track: "advanced-administrator", module: 8, topics: ["Salesforce AI Overview", "Generative AI", "Prompt Builder", "AI Features", "Create Prompt Template", "Test AI Responses"] },
  { phase: "Phase 28: Agentforce", track: "advanced-administrator", module: 8, topics: ["Agentforce Overview", "Agent Topics", "Agent Actions", "Agent Testing", "Agent Deployment", "Create Agent", "Configure Topics", "Configure Actions", "Test Agent"] },
  { phase: "Capstone Projects", track: "advanced-administrator", module: 9, topics: ["Employee Management System", "Leave Management System", "Recruitment Management System", "Sales CRM", "Customer Support Portal", "Salesforce DevOps Pipeline"] }
];

const ADMIN_ROADMAP_LEARNING_GUIDE = [
  { match: "Phase 1:", outcome: "Explain the cloud delivery model, navigate Salesforce confidently, create an app, and assess an AppExchange package.", task: "Prepare a Developer Edition or Trailhead Playground, document Company Information, create a custom app, and review one free AppExchange package before installation.", evidence: "Org-readiness note, custom-app screenshot, and AppExchange risk review.", badges: [["Salesforce Platform Basics", "https://trailhead.salesforce.com/content/learn/modules/starting_force_com"], ["AppExchange Basics", "https://trailhead.salesforce.com/content/learn/modules/appexchange_basics"]] },
  { match: "Phase 2:", outcome: "Design a maintainable Salesforce data model using the correct objects, fields, and relationships.", task: "Build Student, Course, and Course Enrollment; configure relationships; create sample records; and verify the model in Schema Builder.", evidence: "Schema Builder screenshot, Object Manager screenshots, sample records, and relationship test results.", badges: [["Data Modeling", "https://trailhead.salesforce.com/content/learn/modules/data_modeling"], ["Picklist Administration", "https://trailhead.salesforce.com/content/learn/modules/picklist_admin"]] },
  { match: "Phase 3:", outcome: "Create role-focused desktop and mobile experiences without confusing page layout, record page, compact layout, and action responsibilities.", task: "Create two record types, assign page layouts, customize a Lightning record page, configure a compact layout, and add a quick action.", evidence: "Record-type assignment matrix and screenshots from desktop and mobile views.", badges: [["Lightning Experience Customization", "https://trailhead.salesforce.com/content/learn/modules/lex_customization"], ["Lightning App Builder", "https://trailhead.salesforce.com/content/learn/modules/lightning_app_builder"]] },
  { match: "Phase 4:", outcome: "Protect data quality and calculate business values with maintainable validation rules and formulas.", task: "Create email and phone validation rules plus a salary calculation formula; test valid, invalid, blank, import, and automation scenarios.", evidence: "Rule formulas, test matrix, error messages, and calculated-field screenshots.", badges: [["Formulas and Validations", "https://trailhead.salesforce.com/content/learn/modules/point_click_business_logic"]] },
  { match: "Phase 5:", outcome: "Administer the standard Sales Cloud lifecycle from lead generation through converted customer and opportunity reporting.", task: "Create and convert a lead, manage an opportunity through stages, associate a campaign, and build a sales dashboard.", evidence: "Lead-conversion results, opportunity stage history, report, and dashboard screenshots.", badges: [["Sales Cloud Basics", "https://trailhead.salesforce.com/content/learn/modules/lex_sales_cloud_basics"], ["Leads and Opportunities", "https://trailhead.salesforce.com/content/learn/modules/leads_opportunities_lightning_experience"]] },
  { match: "Phase 6:", outcome: "Apply least privilege and troubleshoot access from login through object, field, and record visibility.", task: "Create test users and roles, set OWD, grant additional access with permission sets and sharing rules, then test access as each persona.", evidence: "Access matrix, user screenshots, sharing configuration, and persona test results.", badges: [["Data Security", "https://trailhead.salesforce.com/content/learn/modules/data_security"], ["User Management", "https://trailhead.salesforce.com/content/learn/modules/lex_implementation_user_setup_mgmt"]] },
  { match: "Phase 7:", outcome: "Understand legacy automation and build governed approvals and Flow-based replacement solutions.", task: "Document a legacy Workflow Rule or Process Builder migration, build a leave approval process, and automate notifications and field updates with Flow.", evidence: "Automation decision matrix, approval lifecycle tests, and Flow debug results.", badges: [["Business Process Automation", "https://trailhead.salesforce.com/content/learn/modules/business_process_automation"], ["Flow Builder Basics", "https://trailhead.salesforce.com/content/learn/modules/flow-basics"]] },
  { match: "Phase 8:", outcome: "Build, debug, and govern every major Flow type using appropriate elements, resources, collections, and error handling.", task: "Build one Screen Flow, one record-triggered Flow, one scheduled Flow, and one reusable subflow; test positive, negative, bulk, and fault paths.", evidence: "Flow canvases, debug runs, test matrix, and fault-recovery notes.", badges: [["Flow Builder Basics", "https://trailhead.salesforce.com/content/learn/modules/flow-basics"], ["Record-Triggered Flows", "https://trailhead.salesforce.com/content/learn/modules/record-triggered-flows"]] },
  { match: "Phase 9:", outcome: "Select safe data operations and tools, migrate data, reconcile results, and maintain recoverable backups.", task: "Prepare a CSV, perform test Insert and Upsert operations, update records, export a backup, and document delete recovery.", evidence: "Data map, source and result files, success/error logs, reconciliation counts, and rollback plan.", badges: [["Data Management", "https://trailhead.salesforce.com/content/learn/modules/lex_implementation_data_management"], ["Data Quality", "https://trailhead.salesforce.com/content/learn/modules/data_quality"]] },
  { match: "Phase 10:", outcome: "Turn business questions into secure reports, report types, formulas, buckets, dashboards, and subscriptions.", task: "Build sales, recruitment, and employee reports; add a bucket field; create a dynamic dashboard; test folder and record access.", evidence: "Report specifications, screenshots, dashboard, and access-test results.", badges: [["Reports and Dashboards", "https://trailhead.salesforce.com/content/learn/modules/lex_implementation_reports_dashboards"]] },
  { match: "Phase 11:", outcome: "Choose the correct sandbox and deploy configuration through a controlled validation and release process.", task: "Create a sandbox strategy, prepare a change set, deploy an object and Flow, validate dependencies, and document rollback.", evidence: "Sandbox decision, deployment checklist, validation result, and post-deployment checks.", badges: [["Change Set Development Model", "https://trailhead.salesforce.com/content/learn/modules/org-development-model"], ["Application Lifecycle and Development Models", "https://trailhead.salesforce.com/content/learn/modules/application-lifecycle-and-development-models"]] },
  { match: "Phase 12:", outcome: "Configure a complete Service Cloud case lifecycle with capture, routing, response, escalation, entitlements, and Knowledge.", task: "Build a customer-support process using a queue, assignment rule, auto-response rule, escalation rule, Web-to-Case or Email-to-Case, and Knowledge.", evidence: "Case lifecycle tests, routing results, escalation evidence, and support-portal design.", badges: [["Service Cloud Basics", "https://trailhead.salesforce.com/content/learn/modules/service_basics"], ["Knowledge Basics", "https://trailhead.salesforce.com/content/learn/modules/lightning-knowledge-basics"]] },
  { match: "Phase 13:", outcome: "Read and safely execute basic Apex while understanding classes, methods, variables, collections, triggers, and logs.", task: "Create a HelloWorld class, run it with Execute Anonymous, inspect debug logs, and explain when an Admin should escalate to a developer.", evidence: "Apex class, execution result, debug-log analysis, and admin-versus-code decision.", badges: [["Apex Basics and Database", "https://trailhead.salesforce.com/content/learn/modules/apex_database"], ["Apex Triggers", "https://trailhead.salesforce.com/content/learn/modules/apex_triggers"]] },
  { match: "Phase 14:", outcome: "Query Salesforce data accurately with SOQL and SOSL while understanding filters, sorting, limits, and aggregates.", task: "Write queries for Accounts and Contacts, add WHERE, ORDER BY, LIMIT, and aggregate functions, then compare SOQL with SOSL.", evidence: "Saved query set, results, and explanation of query choice.", badges: [["SOQL for Admins", "https://trailhead.salesforce.com/content/learn/modules/soql-for-admins"], ["Apex Basics and Database", "https://trailhead.salesforce.com/content/learn/modules/apex_database"]] },
  { match: "Phase 15:", outcome: "Use Developer Console for focused querying, anonymous execution, and log-based troubleshooting.", task: "Run a query, execute a small anonymous Apex block, reproduce an error, and trace it through the logs.", evidence: "Query output, anonymous execution result, and annotated log analysis.", badges: [["Developer Console Basics", "https://trailhead.salesforce.com/content/learn/modules/developer_console"], ["Troubleshoot with Logs", "https://trailhead.salesforce.com/content/learn/modules/developer_console/developer_console_logs"]] },
  { match: "Phase 16:", outcome: "Monitor asynchronous Apex work and recognize operational risks in scheduled, batch, and queueable processing.", task: "Review Apex Jobs and Scheduled Jobs, identify status and failure details, and create an escalation and recovery checklist.", evidence: "Monitoring screenshots and job-failure response plan.", badges: [["Asynchronous Apex", "https://trailhead.salesforce.com/content/learn/modules/asynchronous_apex"]] },
  { match: "Phase 17:", outcome: "Choose between Custom Settings, Custom Labels, and Custom Metadata Types for reusable configuration.", task: "Create a reusable label and API endpoint metadata record, then document access, deployment, and code/Flow usage.", evidence: "Metadata screenshots and configuration-choice explanation.", badges: [["Custom Metadata Types", "https://trailhead.salesforce.com/content/learn/modules/custom_metadata_types_dec"], ["Platform Developer Basics", "https://trailhead.salesforce.com/content/learn/modules/platform_developer_basics"]] },
  { match: "Phase 18:", outcome: "Use Salesforce audit tools to investigate access, changes, and field-level history while respecting retention limits.", task: "Review Login History and Setup Audit Trail, enable Field History Tracking, make a test change, and document the audit result.", evidence: "Masked audit screenshots and incident investigation note.", badges: [["Security Basics", "https://trailhead.salesforce.com/content/learn/modules/security_basics"], ["Data Security", "https://trailhead.salesforce.com/content/learn/modules/data_security"]] },
  { match: "Phase 19:", outcome: "Explain Salesforce API fundamentals and safely test authenticated REST requests with common tools.", task: "Authorize a practice org, execute a REST query and record request, inspect status codes, and document credential-handling rules.", evidence: "Sanitized request/response examples and integration security checklist.", badges: [["API Basics", "https://trailhead.salesforce.com/content/learn/modules/api_basics"], ["Quick Start: Connect Postman to Salesforce", "https://trailhead.salesforce.com/content/learn/projects/quick-start-connect-postman-to-salesforce"]] },
  { match: "Phase 20:", outcome: "Plan and execute a controlled production release from preparation and UAT through cutover and validation.", task: "Create a release plan containing code freeze, UAT approval, backup verification, cutover steps, rollback, and production validation.", evidence: "Signed release checklist and mock go/no-go decision.", badges: [["Application Lifecycle and Development Models", "https://trailhead.salesforce.com/content/learn/modules/application-lifecycle-and-development-models"], ["Org Development Model", "https://trailhead.salesforce.com/content/learn/modules/org-development-model"]] },
  { match: "Phase 21:", outcome: "Operate a Salesforce org through repeatable daily administration, support, monitoring, and incident response.", task: "Complete a simulated Admin support queue covering login, sharing, validation, Flow, report, and email-delivery issues.", evidence: "Operations runbook, resolved tickets, root causes, and prevention actions.", badges: [["Admin Beginner", "https://trailhead.salesforce.com/content/learn/trails/force_com_admin_beginner"], ["Admin Intermediate", "https://trailhead.salesforce.com/content/learn/trails/force_com_admin_intermediate"]] },
  { match: "Phase 22:", outcome: "Explain how version control and CI/CD make Salesforce delivery repeatable, reviewable, and safer.", task: "Design a simple CI/CD pipeline with source control, automated validation, approval, deployment, and rollback gates.", evidence: "Pipeline diagram and control explanation.", badges: [["Salesforce DevOps Basics", "https://trailhead.salesforce.com/content/learn/modules/salesforce-devops-basics"], ["Application Lifecycle and Development Models", "https://trailhead.salesforce.com/content/learn/modules/application-lifecycle-and-development-models"]] },
  { match: "Phase 23:", outcome: "Use Git and GitHub to create a traceable local-to-remote development workflow.", task: "Initialize a repository, add Salesforce metadata, commit a focused change, push it, pull a remote update, and explain repository hygiene.", evidence: "Git log, remote repository, and command journal.", badges: [["Git and GitHub Basics", "https://trailhead.salesforce.com/content/learn/modules/git-and-git-hub-basics"]] },
  { match: "Phase 24:", outcome: "Use VS Code and Salesforce CLI to authorize orgs, retrieve metadata, validate changes, and deploy safely.", task: "Install the Salesforce Extension Pack and CLI, authorize a practice org, retrieve one component, edit it, validate, and deploy.", evidence: "CLI command log, retrieved source, validation result, and deployment result.", badges: [["Salesforce Developer Tools", "https://trailhead.salesforce.com/content/learn/modules/salesforce_developer_tools"], ["Quick Start: Salesforce DX", "https://trailhead.salesforce.com/content/learn/projects/quick-start-salesforce-dx"]] },
  { match: "Phase 25:", outcome: "Collaborate through branches, pull requests, code review, merge strategy, and protected-main practices.", task: "Create a feature branch, commit a metadata change, open a pull request, perform review, resolve feedback, and merge.", evidence: "Branch history, pull request, review comments, and merge result.", badges: [["Git and GitHub Basics", "https://trailhead.salesforce.com/content/learn/modules/git-and-git-hub-basics"], ["Salesforce DevOps Basics", "https://trailhead.salesforce.com/content/learn/modules/salesforce-devops-basics"]] },
  { match: "Phase 26:", outcome: "Design an end-to-end Salesforce DevOps pipeline and compare common delivery tools.", task: "Build a pipeline from sandbox through VS Code, Git, GitHub, CI validation, approval, production deployment, and rollback; compare GitHub Actions, Jenkins, Gearset, and Copado.", evidence: "Pipeline implementation or design, tool comparison, and release evidence.", badges: [["Salesforce DevOps Basics", "https://trailhead.salesforce.com/content/learn/modules/salesforce-devops-basics"], ["Package Development Model", "https://trailhead.salesforce.com/content/learn/modules/sfdx_dev_model"]] },
  { match: "Phase 27:", outcome: "Enable generative AI responsibly with grounded prompts, permissions, testing, monitoring, and human review.", task: "Create and test a Prompt Builder template using safe sample data; evaluate quality, grounding, sensitive data, and failure cases.", evidence: "Prompt template, test cases, output evaluation, and AI governance checklist.", badges: [["Prompt Builder Basics", "https://trailhead.salesforce.com/content/learn/modules/prompt-builder-basics"], ["Generative AI Basics", "https://trailhead.salesforce.com/content/learn/modules/generative-ai-basics"]] },
  { match: "Phase 28:", outcome: "Configure and govern an Agentforce agent using clear topics, safe actions, testing, escalation, deployment, and monitoring.", task: "Create a practice agent, configure a topic and action, test expected and unexpected requests, add human escalation, and document deployment controls.", evidence: "Agent configuration, test transcript, escalation proof, and launch checklist.", badges: [["Agentforce Basics", "https://trailhead.salesforce.com/content/learn/modules/agentforce-basics"], ["Agentforce Service Agent", "https://trailhead.salesforce.com/content/learn/modules/agentforce-service-agent"]] },
  { match: "Capstone Projects", outcome: "Combine Admin and Advanced Admin skills into portfolio-ready business solutions with complete evidence.", task: "Choose at least one capstone, define requirements and personas, build the solution, test security and automation, deploy it, and present the business result.", evidence: "Requirements, design, configured solution, test pack, deployment plan, demo, and retrospective.", badges: [["Admin Super Set", "https://trailhead.salesforce.com/content/learn/superbadges/superbadge_admin_superset"], ["Advanced Administrator", "https://trailhead.salesforce.com/content/learn/trails/force_com_adv_admin"]] }
];

const ADMIN_DEVELOPER_TOPIC_ROUTES = [
  { pattern: /Apex|Trigger|SOQL|SOSL|Developer Console|Execute Anonymous|Debug Log|Batch Job|Queueable Job|Scheduled Job/i, course: "Apex Development", href: "course-apex.html" },
  { pattern: /REST API|Postman|Workbench|REST Explorer|Execute REST|API Endpoint/i, course: "Salesforce Integration", href: "course-integration.html" },
  { pattern: /Flow|Subflow|Records|Assignment|Decision|Loop|Choice Set|Collections/i, course: "Salesforce Flow", href: "course-flow.html" },
  { pattern: /Agentforce|Agent Topic|Agent Action|Agent Testing|Agent Deployment|Prompt Builder|Prompt Template|Generative AI/i, course: "Salesforce Agentforce", href: "course-agentforce.html" },
  { pattern: /Lightning Web Component|LWC|Custom UI/i, course: "Lightning Web Components", href: "course-lwc.html" },
  { pattern: /Git|GitHub|Branch|Pull Request|Code Review|CI\/CD|Jenkins|Gearset|Copado|Salesforce CLI|VS Code/i, course: "Developer capstone and DevOps practice", href: "course-apex.html?module=11" }
];

const ADMIN_PHASE_ONE_DETAILS = {
  "Introduction to Cloud Computing": { label: "Purpose", explanation: "Understand how cloud platforms deliver software through the internet without local installation.", actionLabel: "Practice", action: "Identify how Salesforce runs in the cloud and explain why users can access it from a browser or mobile device." },
  "SaaS, PaaS, IaaS": { label: "Purpose", explanation: "Understand the difference between cloud service models and where Salesforce fits.", actionLabel: "Practice", action: "Classify Salesforce CRM as SaaS and Salesforce Platform as PaaS using one business example." },
  "Salesforce CRM Overview": { label: "Purpose", explanation: "Understand how Salesforce helps businesses manage customers, students, leads, tasks, and service records.", actionLabel: "Practice", action: "Open the Sales or Service app and identify standard CRM objects such as Account, Contact, Lead, Opportunity, or Case." },
  "Navigation": { label: "Purpose", explanation: "Learn how to move inside Salesforce using App Launcher, tabs, global search, record pages, and Setup.", actionLabel: "Practice", action: "Find any standard object tab, open a record list view, and use global search." },
  "Tabs": { label: "Purpose", explanation: "Understand how tabs expose objects and pages inside an app.", actionLabel: "Practice", action: "Open an app and list the visible tabs. Explain which object or page each tab represents." },
  "Setup Menu": { label: "Purpose", explanation: "Understand Setup as the admin control center for users, objects, automation, security, and company settings.", actionLabel: "Practice", action: "Open Setup and search for Object Manager, Users, Company Information, and Profiles." },
  "Company Profile": { label: "Purpose", explanation: "Learn where org-level settings such as Organization ID, timezone, currency, language, locale, and licenses are stored.", actionLabel: "Practice", action: "Open Company Information and record the org edition, timezone, currency, and masked Organization ID only. Example: 00Dxx000000XXXX." },
  "Object Manager": { label: "Purpose", explanation: "Understand Object Manager as the workspace for reviewing and configuring Salesforce objects, fields, relationships, layouts, and record settings.", actionLabel: "Practice", action: "Open Object Manager and identify at least five standard objects." },
  "Users": { label: "Purpose", explanation: "Understand where administrators review Salesforce user identity, profile, license, active status, locale, and timezone.", actionLabel: "Practice", action: "Open Users, find your own practice user, and identify the Profile and active status without exposing sensitive details." },
  "Salesforce App Creation": { label: "Purpose", explanation: "Understand how custom apps group tabs and features for a business team.", actionLabel: "Practice", action: "Create a custom app named TomCodeX Student Success CRM." },
  "AppExchange": { label: "Purpose", explanation: "Understand AppExchange as Salesforce's marketplace for apps, components, and packages.", actionLabel: "Practice", action: "Review one free AppExchange package before installation. Check package name, publisher, rating, reviews, permissions requested, data access, licensing, and uninstall risk." },
  "Create a Salesforce Developer Org": { label: "Task", explanation: "Create or access a Salesforce Developer Edition org or Trailhead Playground.", actionLabel: "Required proof", action: "Org URL, org edition, timezone, and masked Organization ID only. Example: 00Dxx000000XXXX." },
  "Create a Custom App": { label: "Task", explanation: "Create the TomCodeX Student Success CRM custom app.", actionLabel: "Required proof", action: "Screenshot of the app name, App Launcher result, and selected tabs." },
  "Explore Setup Menu": { label: "Task", explanation: "Visit Company Information, Users, Object Manager, and Profiles.", actionLabel: "Required proof", action: "Short navigation note containing the exact paths used." },
  "AppExchange Risk Review - Installation Not Required": { label: "Task", explanation: "Review one free AppExchange package before installation. Installation is optional; the goal is to learn safe package review.", actionLabel: "Required proof", action: "Package name, publisher, rating, reviews, permissions requested, data access, licensing, uninstall risk, and final decision: Install or Do Not Install." }
};

const ADMIN_PHASE_ONE_LAB = {
  title: "Guided Phase Lab: Org Readiness and Custom App Setup",
  scenario: "TomCodeX Academy is preparing a new Salesforce org to manage students, courses, enrollments, tutor reviews, and certificates. Before building objects and automation, the admin must verify the org settings, understand navigation, create the first custom app, and review AppExchange safely.",
  tasks: ["Create or open a Developer Edition org or Trailhead Playground.", "Open Company Information and document org details.", "Explore App Launcher, Object Manager, Users, and Setup.", "Create a custom app named TomCodeX Student Success CRM.", "Review one free AppExchange package before installation."],
  evidence: ["Org-readiness note with masked sensitive details.", "Company Information screenshot showing masked Organization ID only.", "Custom app screenshot.", "App Launcher screenshot showing TomCodeX Student Success CRM.", "AppExchange risk review note."],
  validation: ["Explain cloud, SaaS, PaaS, and Salesforce CRM.", "Navigate App Launcher, Setup, Object Manager, Company Information, and Users.", "Identify Org, App, Object, Field, Record, and Profile correctly.", "Create the TomCodeX Student Success CRM custom app.", "Submit correct project evidence with masked sensitive details.", "Explain why production orgs should not be used for practice.", "Review an AppExchange package safely before installation."]
};

const ADMIN_PHASE_TWO_DETAILS = {
  "Standard Objects": { label: "Purpose", explanation: "Understand objects supplied by Salesforce for common CRM processes, such as Account, Contact, Lead, Opportunity, Case, and User.", actionLabel: "Practice", action: "Open Object Manager, identify five standard objects, and explain the business data each stores." },
  "Custom Objects": { label: "Purpose", explanation: "Understand how custom objects store business-specific data that standard Salesforce objects do not represent.", actionLabel: "Practice", action: "Explain why TomCodeX Academy needs Student, Course, and Course Enrollment custom objects." },
  "Standard Fields": { label: "Purpose", explanation: "Recognize Salesforce-provided fields such as Name, Created By, Last Modified By, Owner, and system timestamps.", actionLabel: "Practice", action: "Open a standard and custom object, then identify the standard fields Salesforce provides automatically." },
  "Custom Fields": { label: "Purpose", explanation: "Store business-specific values using suitable field types that support data quality, reporting, automation, and user experience.", actionLabel: "Practice", action: "Create Email and Learning Status fields on Student, Course Code and Active fields on Course, and Progress Percentage and Enrollment Status fields on Course Enrollment." },
  "Lookup Relationships": { label: "Purpose", explanation: "Create a flexible connection where related records can usually exist independently and maintain separate ownership.", actionLabel: "Practice", action: "Explain one situation where Course Enrollment should use Lookup instead of Master-Detail." },
  "Master-Detail Relationships": { label: "Purpose", explanation: "Create a tightly controlled parent-child relationship where the detail requires its master and inherits ownership and sharing.", actionLabel: "Practice", action: "Explain how Master-Detail would affect Course Enrollment ownership, deletion, required parents, and roll-up summaries." },
  "Junction Objects": { label: "Purpose", explanation: "Resolve a many-to-many relationship by connecting two parent records and storing information about their relationship.", actionLabel: "Practice", action: "Use Course Enrollment to connect one Student to one Course while storing enrollment status and progress." },
  "Roll-Up Summary Fields": { label: "Purpose", explanation: "Calculate Count, Sum, Min, or Max values from related detail records when a Master-Detail relationship is used.", actionLabel: "Practice", action: "Describe a useful Course roll-up, such as counting related Course Enrollment records." },
  "Field History Tracking": { label: "Purpose", explanation: "Record selected field-value changes so administrators can review who changed a tracked value and when.", actionLabel: "Practice", action: "Enable tracking for Enrollment Status or Progress Percentage and explain what history the business needs." },
  "Create Student Object": { label: "Task", explanation: "Create Student__c with Student Name and the required learner fields.", actionLabel: "Required proof", action: "Object Manager screenshot showing Student label, Student__c API name, and selected fields." },
  "Create Course Object": { label: "Task", explanation: "Create Course__c with Course Name and the required course fields.", actionLabel: "Required proof", action: "Object Manager screenshot showing Course label, Course__c API name, and selected fields." },
  "Create Course Enrollment Junction Object": { label: "Task", explanation: "Create Course_Enrollment__c to connect Student and Course and store enrollment-specific information.", actionLabel: "Required proof", action: "Object Manager screenshot showing Course_Enrollment__c, relationship fields, Progress Percentage, and Enrollment Status." },
  "Configure Relationships": { label: "Task", explanation: "Connect Course Enrollment to Student and Course using relationship types justified by the business lifecycle.", actionLabel: "Required proof", action: "Relationship decision note explaining Lookup or Master-Detail choices and their ownership, sharing, deletion, and roll-up effects." },
  "Review the Model in Schema Builder": { label: "Task", explanation: "Use Schema Builder to visually verify that the three objects and their relationships match the intended business model.", actionLabel: "Required proof", action: "Schema Builder screenshot showing Student, Course, and Course Enrollment with both relationships." }
};

const ADMIN_PHASE_TWO_LAB = {
  title: "Guided Phase Lab: Student Success CRM Data Model",
  scenario: "TomCodeX Academy must replace disconnected student and course spreadsheets with a Salesforce data model. The admin must store students and courses once, connect them through Course Enrollment, and ensure each enrollment can track status and progress.",
  tasks: ["Define the purpose of Student, Course, and Course Enrollment.", "Create the three custom objects with clean API names and descriptions.", "Add suitable business fields using correct Salesforce field types.", "Connect Course Enrollment to Student and Course.", "Create sample records and verify the model in Schema Builder."],
  evidence: ["Schema Builder screenshot showing all three objects and relationships.", "Object Manager screenshots showing Student__c, Course__c, and Course_Enrollment__c.", "Field list showing selected labels, API names, and data types.", "Relationship decision note.", "Sample Student, Course, and Course Enrollment record proof."],
  validation: ["Explain standard objects, custom objects, fields, records, and relationships.", "Identify the purpose of Student, Course, and Course Enrollment.", "Use correct custom object and field API names.", "Choose suitable field data types.", "Explain Lookup and Master-Detail relationship effects.", "Explain why Course Enrollment is a junction object.", "Submit evidence proving the three-object model works."]
};

const ADMIN_PHASE_SIX_DETAILS = {
  "Users": { label: "Purpose", explanation: "Understand Salesforce users as named login identities with licenses, profiles, roles, locale settings, active status, and access assignments.", actionLabel: "Practice", action: "Open Users, review your own user record, and identify license, profile, role, active status, timezone, and locale." },
  "Profiles": { label: "Purpose", explanation: "Understand profiles as the baseline access package for a user, including object permissions, field permissions, app visibility, login hours, and system permissions.", actionLabel: "Practice", action: "Review the System Administrator profile and identify where object permissions and field permissions are configured." },
  "Permission Sets": { label: "Purpose", explanation: "Use permission sets to add specific access without creating a new profile for every small access variation.", actionLabel: "Practice", action: "Create or document a Student Success Tutor permission set for Student, Course, and Course Enrollment access." },
  "Roles": { label: "Purpose", explanation: "Understand roles as a record-visibility structure that can open access upward through the role hierarchy.", actionLabel: "Practice", action: "Create or document Program Manager and Tutor roles and explain how they affect record visibility." },
  "OWD": { label: "Purpose", explanation: "Understand Organization-Wide Defaults as the baseline record access setting for each object.", actionLabel: "Practice", action: "Review Sharing Settings and choose a justified baseline for Student and Course Enrollment records." },
  "Sharing Rules": { label: "Purpose", explanation: "Use sharing rules to automatically open record access to users who need records beyond the OWD baseline.", actionLabel: "Practice", action: "Document one sharing rule that would give Program Managers access to relevant Student or Course Enrollment records." },
  "Manual Sharing": { label: "Purpose", explanation: "Understand manual sharing as a record-by-record access grant used for exceptions when the sharing model allows it.", actionLabel: "Practice", action: "Explain one safe support scenario where manual sharing could be used and why it should not replace a scalable sharing design." },
  "Field-Level Security": { label: "Purpose", explanation: "Protect sensitive fields so users can access a record without seeing or editing every field on that record.", actionLabel: "Practice", action: "Restrict at least one sensitive Student field from the Tutor persona and explain how FLS affects pages, reports, and APIs." },
  "Create Users": { label: "Task", explanation: "Create or document practice users for Tutor and Program Manager personas.", actionLabel: "Required proof", action: "User setup note showing persona, profile, role, permission set assignment, and active status. Do not expose passwords." },
  "Create Roles": { label: "Task", explanation: "Create or document Program Manager and Tutor roles for the Student Success CRM access model.", actionLabel: "Required proof", action: "Role hierarchy screenshot or note showing Tutor below Program Manager." },
  "Configure Security": { label: "Task", explanation: "Configure the access model using profiles, permission sets, field-level security, OWD, roles, and sharing.", actionLabel: "Required proof", action: "Access matrix showing Student, Course, Course Enrollment, sensitive fields, and record visibility for each persona." },
  "Test Record Access": { label: "Task", explanation: "Test both allowed and restricted behavior with realistic Tutor and Program Manager scenarios.", actionLabel: "Required proof", action: "Access-test table showing at least three allowed actions and three denied actions." }
};

const ADMIN_PHASE_SIX_LAB = {
  title: "Guided Phase Lab: Tutor and Program Manager Access Model",
  scenario: "TomCodeX Academy needs Tutors to update assigned student progress while Program Managers oversee student operations. The admin must grant useful access without exposing sensitive data or giving broad System Administrator-style permissions.",
  tasks: ["Define Tutor and Program Manager responsibilities.", "Create or document users and roles for both personas.", "Create the Student Success Tutor permission set.", "Review OWD and sharing needs for Student and Course Enrollment.", "Restrict at least one sensitive Student field and test allowed and denied actions."],
  evidence: ["Persona access matrix.", "Permission set object settings screenshot.", "Role hierarchy screenshot or note.", "Field-level security proof for a sensitive Student field.", "Allowed and denied access-test results."],
  validation: ["Explain profile, permission set, role, OWD, sharing rule, manual sharing, and field-level security.", "Describe how object, field, and record access combine.", "Apply least privilege to Tutor and Program Manager personas.", "Protect sensitive Student fields.", "Explain the selected OWD and sharing approach.", "Test with a restricted persona instead of only System Administrator.", "Submit evidence proving allowed and denied access."]
};

const ADMIN_PHASE_THREE_DETAILS = {
  "Page Layouts": { label: "Purpose", explanation: "Control which fields, buttons, sections, and related lists users see on a record detail page.", actionLabel: "Practice", action: "Customize the Student page layout with clear Contact Info, Learning Info, and System Info sections." },
  "Record Types": { label: "Purpose", explanation: "Support different business processes, picklist values, and page layout assignments for the same object.", actionLabel: "Practice", action: "Document whether Student needs record types now, and explain when record types would be introduced later." },
  "Lightning Record Pages": { label: "Purpose", explanation: "Control the Lightning component layout users see on a record page, including related lists, highlights, tabs, and custom components.", actionLabel: "Practice", action: "Create or customize a Student Lightning record page that surfaces key fields and related Course Enrollments." },
  "Compact Layouts": { label: "Purpose", explanation: "Control the key fields shown in highlights panels and mobile record summaries.", actionLabel: "Practice", action: "Create a Student compact layout showing Student Name, Learning Status, Email, and Course Interest." },
  "Search Layouts": { label: "Purpose", explanation: "Control which fields appear in search results and lookup dialogs so users can identify records quickly.", actionLabel: "Practice", action: "Configure Student search results to show Student Name, Email, Learning Status, and Course Interest." },
  "Custom Buttons": { label: "Purpose", explanation: "Add object-specific actions or links that help users complete frequent work from records or lists.", actionLabel: "Practice", action: "Explain one Student Success action that belongs as a button and why it should be simple and safe." },
  "Custom Links": { label: "Purpose", explanation: "Provide record-aware navigation to helpful internal or external resources.", actionLabel: "Practice", action: "Design a Student Resources custom link concept and document what URL or resource it should open." },
  "Quick Actions": { label: "Purpose", explanation: "Let users quickly create records, update fields, or launch guided work from a page.", actionLabel: "Practice", action: "Create a quick action or documented design for logging a Tutor Review or follow-up task from a Student record." },
  "Create Multiple Record Types": { label: "Task", explanation: "Create record types only when the Student process truly needs different layouts or picklist values.", actionLabel: "Required proof", action: "Record-type decision note. If created, include record type names, assigned layouts, and picklist differences." },
  "Customize Lightning Pages": { label: "Task", explanation: "Customize the Student Lightning record page so staff can see the most important fields and related enrollments quickly.", actionLabel: "Required proof", action: "Lightning App Builder screenshot showing the Student record page layout and activation assignment." },
  "Create Quick Actions": { label: "Task", explanation: "Create a quick action that reduces clicks for a common Student Success task.", actionLabel: "Required proof", action: "Quick action screenshot or design note showing action name, object, fields, and where it appears." }
};

const ADMIN_PHASE_THREE_LAB = {
  title: "Guided Phase Lab: Student Success CRM User Experience",
  scenario: "TomCodeX Academy has a working data model and security model. Now staff need a simple Lightning experience where Tutors and Program Managers can open the Student Success CRM app, find the right records, view important fields, and complete common actions without confusion.",
  tasks: ["Create or verify tabs for Student, Course, and Course Enrollment.", "Build or update the Student Success CRM Lightning app navigation.", "Customize Student and Course Enrollment page layouts.", "Create a Student Lightning record page and compact layout.", "Create Active Students and Pending Enrollments list views and one useful quick action."],
  evidence: ["App Manager or App Launcher screenshot showing Student Success CRM.", "Student page layout screenshot.", "Student Lightning record page screenshot.", "Compact layout or search layout proof.", "List view and quick action proof."],
  validation: ["Explain page layouts, Lightning record pages, compact layouts, search layouts, tabs, buttons, links, and quick actions.", "Create a usable Student Success CRM app experience.", "Place important fields and related lists where users can find them.", "Explain when record types are needed and when they are unnecessary.", "Create list views that support daily work.", "Create or document one useful quick action.", "Submit evidence proving the app is visible and usable."]
};

function adminRoadmapTopicExplanation(topic, entry) {
  if (entry.phase.startsWith("Phase 1:") && ADMIN_PHASE_ONE_DETAILS[topic]) {
    const detail = ADMIN_PHASE_ONE_DETAILS[topic];
    return { meaning: detail.explanation, practice: detail.action, meaningLabel: detail.label, practiceLabel: detail.actionLabel };
  }
  if (entry.phase.startsWith("Phase 2:") && ADMIN_PHASE_TWO_DETAILS[topic]) {
    const detail = ADMIN_PHASE_TWO_DETAILS[topic];
    return { meaning: detail.explanation, practice: detail.action, meaningLabel: detail.label, practiceLabel: detail.actionLabel };
  }
  if (entry.phase.startsWith("Phase 3:") && ADMIN_PHASE_THREE_DETAILS[topic]) {
    const detail = ADMIN_PHASE_THREE_DETAILS[topic];
    return { meaning: detail.explanation, practice: detail.action, meaningLabel: detail.label, practiceLabel: detail.actionLabel };
  }
  if (entry.phase.startsWith("Phase 6:") && ADMIN_PHASE_SIX_DETAILS[topic]) {
    const detail = ADMIN_PHASE_SIX_DETAILS[topic];
    return { meaning: detail.explanation, practice: detail.action, meaningLabel: detail.label, practiceLabel: detail.actionLabel };
  }
  const actionTopic = /^(Create|Configure|Customize|Install|Explore|Convert|Manage|Test|Import|Update|Export|Deploy|Validate|Run|Analyze|Review|Audit|Execute|Connect|Retrieve|Initialize|Commit|Push|Pull)/.test(topic);
  const flowTopic = /Flow|Records|Assignment|Decision|Loop|Variables|Constants|Formulas|Templates|Choice|Collections/.test(topic) && entry.phase.includes("Phase 8:");
  const securityTopic = /Users|Profiles|Permission|Roles|OWD|Sharing|Security|Access/.test(topic);
  const deliveryTopic = /Git|Branch|Pull Request|CI\/CD|Deployment|Sandbox|Release|Production|Metadata|CLI|VS Code/.test(topic);
  const developerRoute = ADMIN_DEVELOPER_TOPIC_ROUTES.find((route) => route.pattern.test(topic));
  let meaning = `${topic} supports the ${entry.phase.replace(/^Phase \d+:\s*/, "")} business process by giving administrators a named Salesforce capability they can configure, test, document, and support. Learners must connect ${topic} to the users, records, automation, security, or delivery result affected by this phase.`;
  let practice = `Demonstrate ${topic} in a practice org using a named business scenario, record the exact configuration or result, test an expected and unsuccessful scenario, and explain the observed Salesforce behavior.`;
  if (developerRoute) {
    meaning = `${topic} is covered in Advanced Admin at awareness, monitoring, governance, and developer-handoff level. Full implementation depth belongs in the <a href="${developerRoute.href}"><strong>${developerRoute.course}</strong></a> course.`;
    practice = `Inspect or safely demonstrate ${topic}, document the Admin responsibility and risk, then identify the implementation work that must continue in ${developerRoute.course}.`;
  } else if (actionTopic) {
    meaning = `${topic} is a hands-on deliverable. Complete it in a safe practice environment using clear names, documented requirements, and least-privilege access.`;
    practice = `${topic}, capture the result, record the exact Salesforce names used, and explain how you verified completion.`;
  } else if (flowTopic) {
    meaning = `${topic} is part of Flow design. Understand how it affects transaction behavior, data, limits, branching, reuse, and fault handling before activation.`;
    practice = `Use ${topic} in a small Flow, debug it with positive, negative, and bulk inputs, and document the observed path.`;
  } else if (securityTopic) {
    meaning = `${topic} affects Salesforce access. Evaluate it together with login, license, object permissions, field visibility, and record sharing so the solution follows least privilege.`;
    practice = `Configure or inspect ${topic}, test it as a non-admin persona, and record what the user can and cannot access.`;
  } else if (deliveryTopic) {
    meaning = `${topic} supports controlled Salesforce delivery. Understand how it improves traceability, validation, collaboration, deployment safety, and rollback readiness.`;
    practice = `Demonstrate ${topic} in a small metadata change and capture the commands, review evidence, validation, and recovery steps.`;
  }
  return { meaning, practice, meaningLabel: "Explanation", practiceLabel: "Task-based practice" };
}

function adminResourceSearchUrl(source, topic) {
  return `${source}${encodeURIComponent(`Salesforce Admin ${topic} tutorial`)}`;
}

const OFFICIAL_ADMIN_DOCS_MAP = {
  "Introduction to Cloud Computing": "https://help.salesforce.com/s/articleView?id=xcloud.basics_welcome_salesforce_users.htm&type=5",
  "SaaS, PaaS, IaaS": "https://www.salesforce.com/in/blog/what-is-iaas-paas-saas/",
  "Salesforce CRM Overview": "https://help.salesforce.com/s/articleView?id=xcloud.basics_welcome_salesforce_users.htm&type=5",
  "Navigation": "https://help.salesforce.com/s/articleView?id=xcloud.lex_find_record_layout.htm&type=5",
  "Tabs": "https://help.salesforce.com/s/articleView?id=platform.custom_tab_overview.htm&type=5",
  "Setup Menu": "https://help.salesforce.com/s/articleView?id=platform.customize_app_setup_overview.htm&type=5",
  "Company Profile": "https://help.salesforce.com/s/articleView?id=xcloud.company_information_fields.htm&type=5",
  "Object Manager": "https://help.salesforce.com/s/articleView?id=platform.extend_click_find_objectmgmt_lex.htm&type=5",
  "Users": "https://help.salesforce.com/s/articleView?id=platform.admin_users.htm&type=5",
  "Profiles": "https://help.salesforce.com/s/articleView?id=sf.profiles_about.htm&type=5",
  "Permission Sets": "https://help.salesforce.com/s/articleView?id=platform.perm_sets_overview.htm&type=5",
  "Roles": "https://help.salesforce.com/s/articleView?id=platform.security_controlling_access_using_hierarchies.htm&type=5",
  "OWD": "https://help.salesforce.com/s/articleView?id=platform.sharing_model_fields.htm&type=5",
  "Sharing Rules": "https://help.salesforce.com/s/articleView?id=platform.security_sharing_rule_types.htm&type=5",
  "Manual Sharing": "https://help.salesforce.com/s/articleView?id=platform.granting_access_to_records.htm&type=5",
  "Field-Level Security": "https://help.salesforce.com/s/articleView?id=platform.users_profiles_field_perms.htm&type=5",
  "Standard Objects": "https://help.salesforce.com/s/articleView?id=xcloud.basics_object_types.htm&type=5",
  "Custom Objects": "https://help.salesforce.com/s/articleView?id=sf.custom_objects.htm&type=5",
  "Standard Fields": "https://help.salesforce.com/s/articleView?id=sf.fields_standard_fields.htm&type=5",
  "Custom Fields": "https://help.salesforce.com/s/articleView?id=sf.custom_fields.htm&type=5",
  "Lookup Relationships": "https://help.salesforce.com/s/articleView?id=platform.overview_of_custom_object_relationships.htm&type=5",
  "Master-Detail Relationships": "https://help.salesforce.com/s/articleView?id=platform.relationships_considerations.htm&type=5",
  "Junction Objects": "https://help.salesforce.com/s/articleView?id=platform.relationships_manytomany.htm&type=5",
  "Roll-Up Summary Fields": "https://help.salesforce.com/s/articleView?id=platform.fields_about_roll_up_summary_fields.htm&type=5",
  "Field History Tracking": "https://help.salesforce.com/s/articleView?id=sf.tracking_field_history.htm&type=5",
  "Page Layouts": "https://help.salesforce.com/s/articleView?id=sf.customize_layout.htm&type=5",
  "Record Types": "https://help.salesforce.com/s/articleView?id=sf.customize_recordtype.htm&type=5",
  "Lightning Record Pages": "https://help.salesforce.com/s/articleView?id=sf.lightning_page_overview.htm&type=5",
  "Compact Layouts": "https://help.salesforce.com/s/articleView?id=sf.compact_layouts.htm&type=5",
  "Search Layouts": "https://help.salesforce.com/s/articleView?id=sf.customize_search_layout.htm&type=5",
  "Custom Buttons": "https://help.salesforce.com/s/articleView?id=sf.customize_enterprise_custom_buttons_and_links.htm&type=5",
  "Custom Links": "https://help.salesforce.com/s/articleView?id=sf.customize_enterprise_custom_buttons_and_links.htm&type=5",
  "Quick Actions": "https://help.salesforce.com/s/articleView?id=sf.actions_overview.htm&type=5",
  "Validation Rules": "https://help.salesforce.com/s/articleView?id=sf.validation_rules_overview.htm&type=5",
  "Formula Fields": "https://help.salesforce.com/s/articleView?id=sf.formulas_about.htm&type=5",
  "Leads": "https://help.salesforce.com/s/articleView?id=sf.leads_about.htm&type=5",
  "Accounts": "https://help.salesforce.com/s/articleView?id=sf.accounts_about.htm&type=5",
  "Contacts": "https://help.salesforce.com/s/articleView?id=sf.contacts_about.htm&type=5",
  "Opportunities": "https://help.salesforce.com/s/articleView?id=sf.opportunities_about.htm&type=5",
  "Campaigns": "https://help.salesforce.com/s/articleView?id=sf.campaigns_about.htm&type=5",
  "Sales Process": "https://help.salesforce.com/s/articleView?id=sf.sales_process_setup.htm&type=5",
  "Workflow Rules": "https://help.salesforce.com/s/articleView?id=sf.workflow_rules_about.htm&type=5",
  "Approval Processes": "https://help.salesforce.com/s/articleView?id=sf.approvals.htm&type=5",
  "Process Builder": "https://help.salesforce.com/s/articleView?id=sf.process_overview.htm&type=5",
  "Flow Builder": "https://help.salesforce.com/s/articleView?id=sf.flow.htm&type=5",
  "Screen Flow": "https://help.salesforce.com/s/articleView?id=sf.flow_distribute_screen.htm&type=5",
  "Auto-Launched Flow": "https://help.salesforce.com/s/articleView?id=sf.flow_distribute_autolaunch.htm&type=5",
  "Record Triggered Flow": "https://help.salesforce.com/s/articleView?id=sf.flow_concepts_trigger_record.htm&type=5",
  "Scheduled Triggered Flow": "https://help.salesforce.com/s/articleView?id=sf.flow_concepts_trigger_schedule.htm&type=5",
  "Platform Event Triggered Flow": "https://help.salesforce.com/s/articleView?id=sf.flow_concepts_trigger_event.htm&type=5",
  "Subflow": "https://help.salesforce.com/s/articleView?id=sf.flow_ref_elements_subflow.htm&type=5",
  "Data Import Wizard": "https://help.salesforce.com/s/articleView?id=sf.data_import_wizard.htm&type=5",
  "Data Loader": "https://help.salesforce.com/s/articleView?id=sf.data_loader.htm&type=5",
  "Reports": "https://help.salesforce.com/s/articleView?id=sf.reports_and_dashboards_overview.htm&type=5",
  "Report Types": "https://help.salesforce.com/s/articleView?id=sf.reports_report_types.htm&type=5",
  "Dashboards": "https://help.salesforce.com/s/articleView?id=sf.dashboards_overview.htm&type=5",
  "Developer Sandbox": "https://help.salesforce.com/s/articleView?id=sf.data_sandbox_environments.htm&type=5",
  "Change Sets": "https://help.salesforce.com/s/articleView?id=sf.changesets.htm&type=5",
  "Cases": "https://help.salesforce.com/s/articleView?id=sf.cases_about.htm&type=5",
  "Queues": "https://help.salesforce.com/s/articleView?id=sf.queues_about.htm&type=5"
};

function adminDocsReferenceUrl(topic, entry) {
  if (OFFICIAL_ADMIN_DOCS_MAP[topic]) {
    return OFFICIAL_ADMIN_DOCS_MAP[topic];
  }

  const lowerTopic = topic.toLowerCase();
  
  if (lowerTopic.includes("flow") || lowerTopic.includes("subflow") || lowerTopic.includes("assignment") || lowerTopic.includes("decision") || lowerTopic.includes("loop") || lowerTopic.includes("variables") || lowerTopic.includes("constants") || lowerTopic.includes("choice sets") || lowerTopic.includes("collections") || lowerTopic.includes("get records") || lowerTopic.includes("create records") || lowerTopic.includes("update records") || lowerTopic.includes("delete records")) {
    return "https://help.salesforce.com/s/articleView?id=sf.flow.htm&type=5";
  }
  if (lowerTopic.includes("apex") || lowerTopic.includes("class") || lowerTopic.includes("method") || lowerTopic.includes("trigger") || lowerTopic.includes("anonymous") || lowerTopic.includes("jobs") || lowerTopic.includes("batch") || lowerTopic.includes("queueable") || lowerTopic.includes("debug logs")) {
    return "https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/";
  }
  if (lowerTopic.includes("soql") || lowerTopic.includes("sosl") || lowerTopic.includes("where clause") || lowerTopic.includes("order by") || lowerTopic.includes("limit") || lowerTopic.includes("aggregate") || lowerTopic.includes("query") || lowerTopic.includes("queries")) {
    if (entry && entry.phase && entry.phase.includes("Developer Console")) {
      return "https://help.salesforce.com/s/articleView?id=sf.developer_console.htm&type=5";
    }
    return "https://developer.salesforce.com/docs/atlas.en-us.soql_sosl.meta/soql_sosl/";
  }
  if (lowerTopic.includes("developer console") || lowerTopic.includes("query editor") || lowerTopic.includes("debugging") || lowerTopic.includes("logs") || lowerTopic.includes("analyze logs") || lowerTopic.includes("run queries")) {
    return "https://help.salesforce.com/s/articleView?id=sf.developer_console.htm&type=5";
  }
  if (lowerTopic.includes("developer org") || lowerTopic.includes("playground")) {
    return "https://help.salesforce.com/s/articleView?id=sf.setup_dx_playgrounds.htm&type=5";
  }
  if (lowerTopic.includes("appexchange")) {
    return "https://help.salesforce.com/s/articleView?id=sf.appexchange_install.htm&type=5";
  }
  if (lowerTopic.includes("schema builder")) {
    return "https://help.salesforce.com/s/articleView?id=sf.schema_builder.htm&type=5";
  }
  if (lowerTopic.includes("relationship") || lowerTopic.includes("lookup") || lowerTopic.includes("master-detail")) {
    return "https://help.salesforce.com/s/articleView?id=sf.relationships_considerations.htm&type=5";
  }
  if (lowerTopic.includes("junction object")) {
    return "https://help.salesforce.com/s/articleView?id=sf.relationships_many_to_many.htm&type=5";
  }
  if (lowerTopic.includes("roll-up")) {
    return "https://help.salesforce.com/s/articleView?id=sf.fields_about_roll_up_summary_fields.htm&type=5";
  }
  if (lowerTopic.includes("custom object") || lowerTopic.includes("object") || lowerTopic.includes("student object") || lowerTopic.includes("course object")) {
    return "https://help.salesforce.com/s/articleView?id=sf.custom_objects.htm&type=5";
  }
  if (lowerTopic.includes("custom field") || lowerTopic.includes("field") || lowerTopic.includes("standard field")) {
    return "https://help.salesforce.com/s/articleView?id=sf.custom_fields.htm&type=5";
  }
  if (lowerTopic.includes("record type")) {
    return "https://help.salesforce.com/s/articleView?id=sf.customize_recordtype.htm&type=5";
  }
  if (lowerTopic.includes("compact layout")) {
    return "https://help.salesforce.com/s/articleView?id=sf.compact_layouts.htm&type=5";
  }
  if (lowerTopic.includes("search layout")) {
    return "https://help.salesforce.com/s/articleView?id=sf.customize_search_layout.htm&type=5";
  }
  if (lowerTopic.includes("page layout") || lowerTopic.includes("lightning page") || lowerTopic.includes("record page")) {
    return "https://help.salesforce.com/s/articleView?id=sf.customize_layout.htm&type=5";
  }
  if (lowerTopic.includes("quick action") || lowerTopic.includes("action")) {
    return "https://help.salesforce.com/s/articleView?id=sf.actions_overview.htm&type=5";
  }
  if (lowerTopic.includes("button") || lowerTopic.includes("link")) {
    return "https://help.salesforce.com/s/articleView?id=sf.customize_enterprise_custom_buttons_and_links.htm&type=5";
  }
  if (lowerTopic.includes("validation rule") || lowerTopic.includes("validation")) {
    return "https://help.salesforce.com/s/articleView?id=sf.validation_rules_overview.htm&type=5";
  }
  if (lowerTopic.includes("formula")) {
    return "https://help.salesforce.com/s/articleView?id=sf.formulas_about.htm&type=5";
  }
  if (lowerTopic.includes("lead")) {
    return "https://help.salesforce.com/s/articleView?id=sf.leads_about.htm&type=5";
  }
  if (lowerTopic.includes("account")) {
    return "https://help.salesforce.com/s/articleView?id=sf.accounts_about.htm&type=5";
  }
  if (lowerTopic.includes("contact")) {
    return "https://help.salesforce.com/s/articleView?id=sf.contacts_about.htm&type=5";
  }
  if (lowerTopic.includes("opportunity") || lowerTopic.includes("opportunities")) {
    return "https://help.salesforce.com/s/articleView?id=sf.opportunities_about.htm&type=5";
  }
  if (lowerTopic.includes("campaign")) {
    return "https://help.salesforce.com/s/articleView?id=sf.campaigns_about.htm&type=5";
  }
  if (lowerTopic.includes("sales process")) {
    return "https://help.salesforce.com/s/articleView?id=sf.sales_process_setup.htm&type=5";
  }
  if (lowerTopic.includes("profile") || lowerTopic.includes("permission") || lowerTopic.includes("role") || lowerTopic.includes("owd") || lowerTopic.includes("sharing") || lowerTopic.includes("security") || lowerTopic.includes("access") || lowerTopic.includes("user")) {
    return "https://help.salesforce.com/s/articleView?id=sf.security_data_access.htm&type=5";
  }
  if (lowerTopic.includes("workflow") || lowerTopic.includes("approval") || lowerTopic.includes("process builder")) {
    return "https://help.salesforce.com/s/articleView?id=sf.approvals.htm&type=5";
  }
  if (lowerTopic.includes("import") || lowerTopic.includes("export") || lowerTopic.includes("loader") || lowerTopic.includes("wizard") || lowerTopic.includes("csv") || lowerTopic.includes("data cleanup") || lowerTopic.includes("data management") || lowerTopic.includes("insert") || lowerTopic.includes("update") || lowerTopic.includes("delete") || lowerTopic.includes("upsert") || lowerTopic.includes("existing data")) {
    return "https://help.salesforce.com/s/articleView?id=sf.data_import_wizard.htm&type=5";
  }
  if (lowerTopic.includes("report") || lowerTopic.includes("dashboard")) {
    return "https://help.salesforce.com/s/articleView?id=sf.reports_and_dashboards_overview.htm&type=5";
  }
  if (lowerTopic.includes("sandbox")) {
    return "https://help.salesforce.com/s/articleView?id=sf.data_sandbox_environments.htm&type=5";
  }
  if (lowerTopic.includes("change set") || lowerTopic.includes("deployment") || lowerTopic.includes("deploy") || lowerTopic.includes("release") || lowerTopic.includes("cutover") || lowerTopic.includes("code freeze") || lowerTopic.includes("backup")) {
    return "https://help.salesforce.com/s/articleView?id=sf.changesets.htm&type=5";
  }
  if (lowerTopic.includes("case") || lowerTopic.includes("queue") || lowerTopic.includes("escalation") || lowerTopic.includes("entitlement") || lowerTopic.includes("milestone") || lowerTopic.includes("knowledge") || lowerTopic.includes("support")) {
    return "https://help.salesforce.com/s/articleView?id=sf.cases_about.htm&type=5";
  }
  if (lowerTopic.includes("custom settings") || lowerTopic.includes("custom labels") || lowerTopic.includes("custom metadata") || lowerTopic.includes("labels")) {
    return "https://help.salesforce.com/s/articleView?id=sf.custom_metadata_types_about.htm&type=5";
  }
  if (lowerTopic.includes("audit") || lowerTopic.includes("compliance") || lowerTopic.includes("login history") || lowerTopic.includes("setup audit trail")) {
    return "https://help.salesforce.com/s/articleView?id=sf.security_basics.htm&type=5";
  }
  if (lowerTopic.includes("api") || lowerTopic.includes("postman") || lowerTopic.includes("workbench") || lowerTopic.includes("rest") || lowerTopic.includes("integration")) {
    return "https://developer.salesforce.com/docs/atlas.en-us.integration_patterns_and_practices.meta/integration_patterns_and_practices/integ_pat_intro_overview.htm";
  }
  if (lowerTopic.includes("devops") || lowerTopic.includes("git") || lowerTopic.includes("github") || lowerTopic.includes("repository") || lowerTopic.includes("branch") || lowerTopic.includes("merge") || lowerTopic.includes("pull request") || lowerTopic.includes("ci/cd") || lowerTopic.includes("cli") || lowerTopic.includes("vs code") || lowerTopic.includes("code review")) {
    return "https://developer.salesforce.com/tools/salesforcecli";
  }
  if (lowerTopic.includes("ai") || lowerTopic.includes("prompt") || lowerTopic.includes("einstein") || lowerTopic.includes("generative")) {
    return "https://help.salesforce.com/s/articleView?id=sf.prompt_builder_about.htm&type=5";
  }
  if (lowerTopic.includes("agentforce") || lowerTopic.includes("agent")) {
    return "https://help.salesforce.com/s/articleView?id=sf.agentforce_about.htm&type=5";
  }
  if (lowerTopic.includes("capstone") || lowerTopic.includes("employee management") || lowerTopic.includes("leave management") || lowerTopic.includes("recruitment") || lowerTopic.includes("sales crm")) {
    return "https://help.salesforce.com/s/articleView?id=sf.fundamentals_crm_overview.htm&type=5";
  }

  if (entry && entry.phase) {
    const lowerPhase = entry.phase.toLowerCase();
    if (lowerPhase.includes("security") || lowerPhase.includes("user management")) {
      return "https://help.salesforce.com/s/articleView?id=sf.security_data_access.htm&type=5";
    }
    if (lowerPhase.includes("data model") || lowerPhase.includes("object configuration")) {
      return "https://help.salesforce.com/s/articleView?id=sf.custom_objects.htm&type=5";
    }
    if (lowerPhase.includes("ui") || lowerPhase.includes("customization")) {
      return "https://help.salesforce.com/s/articleView?id=sf.customize_layout.htm&type=5";
    }
    if (lowerPhase.includes("business logic")) {
      return "https://help.salesforce.com/s/articleView?id=sf.validation_rules_overview.htm&type=5";
    }
    if (lowerPhase.includes("flow")) {
      return "https://help.salesforce.com/s/articleView?id=sf.flow.htm&type=5";
    }
    if (lowerPhase.includes("sales")) {
      return "https://help.salesforce.com/s/articleView?id=sf.sales_process_setup.htm&type=5";
    }
    if (lowerPhase.includes("service")) {
      return "https://help.salesforce.com/s/articleView?id=sf.cases_about.htm&type=5";
    }
    if (lowerPhase.includes("devops") || lowerPhase.includes("git")) {
      return "https://developer.salesforce.com/tools/salesforcecli";
    }
    if (lowerPhase.includes("agentforce")) {
      return "https://help.salesforce.com/s/articleView?id=sf.agentforce_about.htm&type=5";
    }
  }

  return "https://help.salesforce.com/";
}

function adminTopicSummary(topic, entry, explanation) {
  const phaseName = entry.phase.replace(/^Phase \d+:\s*/, "");
  if (explanation.meaningLabel === "Purpose") {
    return `${topic} gives this module a clear beginner foundation: ${explanation.meaning}`;
  }
  if (explanation.meaningLabel === "Task") {
    return `${topic} is a proof-based build activity for ${phaseName}. The learner must complete it in a safe practice org, capture evidence, and explain the Salesforce result in simple business language.`;
  }
  return `${topic} belongs to ${phaseName}. It connects the business requirement to Salesforce setup, testing, user behavior, and administrator support.`;
}

function adminTopicResourceLinks(topic, entry) {
  return {
    docs: [`Salesforce Docs: ${topic}`, adminDocsReferenceUrl(topic, entry)],
    video: ["Free video resource", adminResourceSearchUrl("https://www.youtube.com/results?search_query=", topic)]
  };
}

function buildAdminRoadmapLesson(entry, guideOverride = null) {
  const guide = guideOverride || ADMIN_ROADMAP_LEARNING_GUIDE.find((item) => entry.phase.startsWith(item.match)) || ADMIN_ROADMAP_LEARNING_GUIDE.at(-1);
  const topicLessons = entry.topics.map((topic, topicIndex) => {
    const explanation = adminRoadmapTopicExplanation(topic, entry);
    const resources = adminTopicResourceLinks(topic, entry);
    const summary = adminTopicSummary(topic, entry, explanation);
    return `<article class="roadmap-topic-card"><span>${String(topicIndex + 1).padStart(2, "0")}</span><div><h6>${topic}</h6><p><strong>Summary Explanation:</strong> ${summary}</p><p><strong>${explanation.meaningLabel}:</strong> ${explanation.meaning}</p><p><strong>${explanation.practiceLabel}:</strong> ${explanation.practice}</p><div class="roadmap-topic-links"><a href="${resources.docs[1]}" target="_blank" rel="noopener noreferrer"><strong>Docs:</strong> ${resources.docs[0]}</a><a href="${resources.video[1]}" target="_blank" rel="noopener noreferrer"><strong>Free video:</strong> YouTube tutorial search</a></div></div></article>`;
  }).join("");
  const badges = guide.badges.map(([title, url]) => `<a class="trailhead-badge-card" href="${url}" target="_blank" rel="noopener noreferrer"><span>TomCodeX Trailmix resource</span><strong>${title}</strong><small>Official Trailhead module selected for this phase</small></a>`).join("");
  const detailedLab = entry.phase.startsWith("Phase 1:")
    ? ADMIN_PHASE_ONE_LAB
    : entry.phase.startsWith("Phase 2:")
      ? ADMIN_PHASE_TWO_LAB
      : entry.phase.startsWith("Phase 3:")
        ? ADMIN_PHASE_THREE_LAB
        : entry.phase.startsWith("Phase 6:")
          ? ADMIN_PHASE_SIX_LAB
          : null;
  const phaseLab = detailedLab
    ? `<div class="roadmap-phase-lab roadmap-guided-lab"><div><span>Guided phase lab</span><h6>${detailedLab.title.replace("Guided Phase Lab: ", "")}</h6><p><strong>Business scenario:</strong> ${detailedLab.scenario}</p><ol>${detailedLab.tasks.map((task) => `<li>${task}</li>`).join("")}</ol></div><div><span>Required evidence</span><ul>${detailedLab.evidence.map((item) => `<li>${item}</li>`).join("")}</ul><h6>Zentom AI Validation Criteria</h6><ol>${detailedLab.validation.map((item) => `<li>${item}</li>`).join("")}</ol><p><strong>Passing Score:</strong> 80%</p></div></div>`
    : `<div class="roadmap-phase-lab"><div><span>Guided phase lab</span><h6>Task-based work</h6><p>${guide.task}</p></div><div><span>Required proof</span><h6>Evidence to submit</h6><p>${guide.evidence}</p></div></div>`;
  return `
    <section class="roadmap-phase-lesson">
      <div class="roadmap-phase-summary"><span>${entry.track === "advanced-administrator" ? "Advanced Administrator" : "Administrator"} syllabus phase</span><h5>${entry.phase}</h5><p>${guide.outcome}</p></div>
      <div class="roadmap-topic-grid">${topicLessons}</div>
      ${phaseLab}
      <div class="roadmap-trailhead"><h6>TomCodeX Trailmix modules for this phase</h6><div>${badges}</div><p>Trailhead is mapped at phase/module level because not every syllabus subtopic has an exact matching Trailhead module. Complete the curated Trailmix resources, then apply the same skill in the TomCodeX guided phase lab. Trailhead completion alone does not replace the project evidence.</p></div>
    </section>`;
}

const ADMIN_PROJECT_NAME = "TomCodeX Student Success CRM + Agentforce Assistant";
const ADMIN_MASTERY_EVALUATION_CRITERIA = [
  "Concept understanding",
  "Hands-on completion",
  "Correct Salesforce naming",
  "Business explanation",
  "Mistake awareness",
  "Real-time job readiness"
];

const ADMIN_PROJECT_TASKS = [
  {
    title: "Create the TomCodeX Student Success CRM Foundation",
    purpose: "Prepare a safe Salesforce practice org, create the first custom app, and complete a safe AppExchange risk review.",
    objects: ["Company Information", "User", "App Launcher", "Object Manager"],
    fields: ["Masked Organization ID only", "Salesforce Edition", "Default Time Zone", "Currency Locale", "User Profile"],
    flows: ["Not required in this module"],
    reportsDashboards: ["Not required in this module"],
    apexLwc: ["Not required in the Admin course"],
    steps: [
      "Create the TomCodeX Student Success CRM custom app and confirm it appears in App Launcher.",
      "Review one free AppExchange package without installing it. Record package name, publisher, rating, reviews, permissions, data access, licensing, uninstall risk, and an Install or Do Not Install decision."
    ],
    expected: "A safe practice org is ready, Company Information is verified with masked sensitive details, the learner can navigate core admin areas, the TomCodeX Student Success CRM app exists, and an AppExchange package has been reviewed safely.",
    evidence: [
      "Org-readiness note with org edition, timezone, currency, and masked Organization ID only. Example: 00Dxx000000XXXX.",
      "Company Information screenshot with the Organization ID masked.",
      "Custom app screenshot and App Launcher screenshot showing TomCodeX Student Success CRM.",
      "AppExchange risk review note with the final Install or Do Not Install decision."
    ],
    validation: [
      "Explain cloud, SaaS, PaaS, and Salesforce CRM.",
      "Navigate App Launcher, Setup, Object Manager, Company Information, and Users.",
      "Identify Org, App, Object, Field, Record, and Profile correctly.",
      "Create the TomCodeX Student Success CRM custom app.",
      "Submit correct project evidence with masked sensitive details.",
      "Explain why production orgs should not be used for practice.",
      "Review an AppExchange package safely before installation."
    ]
  },
  {
    title: "Create the Student Success CRM Data Model",
    purpose: "Build the core data structure that stores students, courses, and each student's course enrollment.",
    objects: ["Student__c", "Course__c", "Course_Enrollment__c"],
    fields: ["Student__c.Email__c", "Student__c.Learning_Status__c", "Course__c.Course_Code__c", "Course__c.Active__c", "Course_Enrollment__c.Student__c", "Course_Enrollment__c.Course__c", "Course_Enrollment__c.Progress_Percentage__c", "Course_Enrollment__c.Enrollment_Status__c"],
    flows: ["Not required in this module"],
    reportsDashboards: ["Not required in this module"],
    apexLwc: ["Not required in the Admin course"],
    steps: [
      "Create the Student custom object with a Student Name record name.",
      "Create the Course custom object with a Course Name record name.",
      "Create the Course Enrollment custom object with an auto-number record name.",
      "Add the listed fields with clear descriptions and appropriate data types.",
      "Create Student and Course relationship fields on Course Enrollment.",
      "Create a Progress Percentage formula or percent field and document the choice.",
      "Open Schema Builder and verify the three-object relationship model."
    ],
    expected: "The org contains a reusable three-object Student Success CRM data model with clean API names and working enrollment relationships.",
    evidence: [
      "Screenshot of Schema Builder showing Student, Course, and Course Enrollment.",
      "Object Manager screenshots showing the exact custom object API names.",
      "A sample enrollment record connected to one Student and one Course."
    ],
    validation: [
      "Confirm custom object and field API names use the __c suffix.",
      "Verify Course Enrollment connects Student and Course without duplicating their data.",
      "Check that the learner can explain the chosen relationship types and field data types."
    ]
  },
  {
    title: "Secure Student Success CRM for Tutors and Program Managers",
    purpose: "Apply least-privilege access so tutors and program managers can complete their work without receiving unnecessary access.",
    objects: ["Student__c", "Course__c", "Course_Enrollment__c", "User"],
    fields: ["Student__c.Email__c", "Course_Enrollment__c.Progress_Percentage__c", "Course_Enrollment__c.Enrollment_Status__c"],
    flows: ["Not required in this module"],
    reportsDashboards: ["Not required in this module"],
    apexLwc: ["Not required in the Admin course"],
    steps: [
      "Create roles named Program Manager and Tutor, with Tutor below Program Manager.",
      "Create a permission set named Student_Success_Tutor.",
      "Grant the permission set only the required object and field permissions.",
      "Review organization-wide defaults and choose a justified sharing baseline for Student and Course Enrollment.",
      "Create sharing access only where the business requirement needs it.",
      "Test visibility and edit access as a tutor persona and a program manager persona."
    ],
    expected: "Tutors receive task-appropriate access, program managers receive required oversight, and restricted data remains protected.",
    evidence: [
      "Screenshot of the Student_Success_Tutor permission set object settings.",
      "Screenshot of the Program Manager and Tutor role hierarchy.",
      "Access test table showing allowed and denied actions for both personas."
    ],
    validation: [
      "Verify least privilege and correct use of profiles, permission sets, roles, OWD, and sharing.",
      "Confirm field-level security is considered for sensitive student data.",
      "Check that testing includes a restricted user instead of only System Administrator."
    ]
  },
  {
    title: "Build the Student Success CRM Lightning App Experience",
    purpose: "Give academy staff a focused, usable workspace for managing students, courses, and enrollments.",
    objects: ["Student__c", "Course__c", "Course_Enrollment__c"],
    fields: ["Student__c.Email__c", "Student__c.Learning_Status__c", "Course_Enrollment__c.Progress_Percentage__c", "Course_Enrollment__c.Enrollment_Status__c"],
    flows: ["Not required in this module"],
    reportsDashboards: ["List View: Active Students", "List View: Pending Enrollments"],
    apexLwc: ["Not required in the Admin course"],
    steps: [
      "Create a Lightning app named Student Success CRM.",
      "Add Students, Courses, Course Enrollments, Tasks, Reports, and Dashboards to the navigation.",
      "Create clear page layouts for Student and Course Enrollment.",
      "Create a Lightning record page named Student Success Record Page.",
      "Place important fields and related lists where staff can find them quickly.",
      "Create the Active Students and Pending Enrollments list views.",
      "Activate and test the app for the intended user personas and mobile experience."
    ],
    expected: "Academy staff can open one Lightning app and efficiently view, create, and update Student Success CRM records.",
    evidence: [
      "Screenshot of the Student Success CRM navigation bar.",
      "Screenshot of the activated Student Success Record Page.",
      "Screenshots of Active Students and Pending Enrollments list views."
    ],
    validation: [
      "Verify the app and record page use the exact required names.",
      "Check that important fields and actions are easy to find for the intended persona.",
      "Confirm the learner tested desktop and mobile usability."
    ]
  },
  {
    title: "Protect Student and Enrollment Data Quality",
    purpose: "Prevent incomplete or contradictory student and enrollment records before they affect automation and reporting.",
    objects: ["Student__c", "Course_Enrollment__c"],
    fields: ["Student__c.Email__c", "Student__c.Learning_Status__c", "Course_Enrollment__c.Progress_Percentage__c", "Course_Enrollment__c.Enrollment_Status__c"],
    flows: ["Not required in this module"],
    reportsDashboards: ["Data quality test matrix"],
    apexLwc: ["Not required in the Admin course"],
    steps: [
      "Create validation rule Student_Email_Required for the agreed student-status condition.",
      "Create validation rule Completion_Requires_100_Percent on Course Enrollment.",
      "Write clear error messages that tell users how to fix the record.",
      "Create or refine controlled picklist values for Learning Status and Enrollment Status.",
      "Build a positive and negative test matrix for both validation rules.",
      "Test data creation and updates as the intended user persona."
    ],
    expected: "Invalid student and enrollment data is blocked with helpful messages while valid business transactions still save.",
    evidence: [
      "Screenshot of Student_Email_Required formula and error message.",
      "Screenshot of Completion_Requires_100_Percent formula and error message.",
      "Completed data quality test matrix with passing and blocked examples."
    ],
    validation: [
      "Verify formulas compile and use the exact validation rule names.",
      "Confirm error messages explain the correction instead of only stating that data is invalid.",
      "Check positive, negative, blank-value, and boundary tests."
    ]
  },
  {
    title: "Build the Student Success Operations Dashboard",
    purpose: "Turn Student Success CRM data into actionable views for tutors and program managers.",
    objects: ["Student__c", "Course__c", "Course_Enrollment__c", "Task"],
    fields: ["Student__c.Learning_Status__c", "Course_Enrollment__c.Progress_Percentage__c", "Course_Enrollment__c.Enrollment_Status__c"],
    flows: ["Not required in this module"],
    reportsDashboards: ["Report: Students by Learning Status", "Report: Enrollment Progress by Course", "Report: Pending Enrollment Follow-Up", "Dashboard: Student Success Operations Dashboard"],
    apexLwc: ["Not required in the Admin course"],
    steps: [
      "Create enough sample records to make reports meaningful.",
      "Build the Students by Learning Status summary report.",
      "Build the Enrollment Progress by Course report with appropriate grouping.",
      "Build the Pending Enrollment Follow-Up report.",
      "Create Student Success Operations Dashboard and add useful components.",
      "Set folder access and test report visibility as a non-admin user.",
      "Explain one decision that a program manager can make from the dashboard."
    ],
    expected: "The Student Success Operations Dashboard shows current student status, course progress, and follow-up work using secure reports.",
    evidence: [
      "Screenshots of all three named reports with filters and groupings visible.",
      "Screenshot of Student Success Operations Dashboard.",
      "Short business explanation of one action supported by each dashboard component."
    ],
    validation: [
      "Verify exact report and dashboard names.",
      "Check that filters, groupings, and chart choices answer the stated business questions.",
      "Confirm report folder access and underlying record access were tested."
    ]
  },
  {
    title: "Automate Student Welcome",
    purpose: "Create a reliable follow-up task whenever a student becomes active, reducing manual work for academy staff.",
    objects: ["Student__c", "Task"],
    fields: ["Student__c.Learning_Status__c", "Student__c.Email__c", "Task.Subject", "Task.Status", "Task.ActivityDate"],
    flows: ["Record-Triggered Flow: Student_Welcome_Automation"],
    reportsDashboards: ["Use existing Student Success Operations Dashboard for monitoring"],
    apexLwc: ["Not required in the Admin course"],
    steps: [
      "Define the trigger, entry conditions, expected task values, and duplicate-prevention behavior.",
      "Create record-triggered Flow Student_Welcome_Automation on Student__c.",
      "Run the Flow after save when Learning Status becomes Active.",
      "Create a welcome Task with a clear subject, owner, status, and due date.",
      "Add a fault path or documented failure-monitoring approach.",
      "Debug positive, negative, and update-again scenarios before activation.",
      "Activate the Flow and confirm the expected Task is created once."
    ],
    expected: "Activating a student creates one correctly assigned welcome Task, while records outside the entry conditions do not create one.",
    evidence: [
      "Screenshot of the Student_Welcome_Automation Flow canvas.",
      "Debug evidence for positive and negative paths.",
      "Screenshot of the created welcome Task related to an active Student."
    ],
    validation: [
      "Verify exact Flow API/name, trigger object, timing, and entry conditions.",
      "Confirm the learner tested duplicate prevention and failure handling.",
      "Check that the automation supports a clear business outcome."
    ]
  },
  {
    title: "Automate Enrollment Follow-Up",
    purpose: "Use scalable Flow patterns to create and manage follow-up work for pending course enrollments.",
    objects: ["Course_Enrollment__c", "Student__c", "Course__c", "Task"],
    fields: ["Course_Enrollment__c.Enrollment_Status__c", "Course_Enrollment__c.Progress_Percentage__c", "Task.Subject", "Task.ActivityDate"],
    flows: ["Record-Triggered Flow: Enrollment_Follow_Up_Flow", "Optional Subflow: Create_Student_Success_Task"],
    reportsDashboards: ["Report: Pending Enrollment Follow-Up"],
    apexLwc: ["Not required in the Admin course"],
    steps: [
      "Define the pending-enrollment follow-up requirement and volume assumptions.",
      "Create Enrollment_Follow_Up_Flow on Course_Enrollment__c.",
      "Use entry conditions and scheduled or immediate logic appropriate to the requirement.",
      "Use Get Records, Decision, Assignment, and Create Records outside loops where applicable.",
      "Optionally move reusable task creation into Create_Student_Success_Task.",
      "Add fault handling and a clear operational recovery note.",
      "Debug multiple records, no-match, and failure scenarios before activation."
    ],
    expected: "Pending enrollments create timely follow-up work through a maintainable Flow that handles scale and failures.",
    evidence: [
      "Screenshot of Enrollment_Follow_Up_Flow and any subflow used.",
      "Debug details for bulk, no-match, and fault scenarios.",
      "Screenshot of Pending Enrollment Follow-Up report containing automated tasks."
    ],
    validation: [
      "Verify the Flow uses the exact required name and an appropriate Flow type.",
      "Check that database operations are not placed inside loops.",
      "Confirm fault handling, bulk testing, and operational monitoring are explained."
    ]
  },
  {
    title: "Create Graduation Approval and Agentforce Governance Blueprint",
    purpose: "Control graduation decisions and prepare a secure Admin-owned governance blueprint for the future Student Success Agentforce assistant.",
    objects: ["Course_Enrollment__c", "User"],
    fields: ["Course_Enrollment__c.Progress_Percentage__c", "Course_Enrollment__c.Enrollment_Status__c"],
    flows: ["Optional Flow: Submit_Graduation_Approval"],
    reportsDashboards: ["Approval monitoring view or report"],
    apexLwc: ["Not required in the Admin course; future Agentforce actions must be reviewed before development"],
    steps: [
      "Document entry criteria for graduation approval.",
      "Create approval process Student_Graduation_Approval.",
      "Configure the approver, approval steps, final approval action, final rejection action, and recall behavior.",
      "Test submission, approval, rejection, recall, and locked-record behavior.",
      "Create an Agentforce governance blueprint for TomCodeX Student Success Assistant.",
      "Define allowed topics, protected data, user permissions, human escalation, testing, monitoring, and change-control requirements.",
      "Document sandbox validation, deployment, rollback, and post-release checks."
    ],
    expected: "Graduation decisions follow a controlled approval process, and the future Agentforce assistant has a documented security and governance plan.",
    evidence: [
      "Screenshot of Student_Graduation_Approval entry criteria and approval steps.",
      "Approval test evidence for approved, rejected, and recalled requests.",
      "Agentforce governance blueprint naming TomCodeX Student Success Assistant and its controls."
    ],
    validation: [
      "Verify exact approval process name and complete approval lifecycle testing.",
      "Confirm the Agentforce blueprint covers permissions, grounding, protected data, human escalation, testing, monitoring, and rollback.",
      "Check that AI is treated as governed configuration, not an unrestricted replacement for human decisions."
    ]
  },
  {
    title: "Prepare Production Data and Agentforce Assistant Launch Plan",
    purpose: "Prove that the Student Success CRM can be migrated, deployed, operated, and prepared for a controlled Agentforce launch.",
    objects: ["Student__c", "Course__c", "Course_Enrollment__c"],
    fields: ["Student__c.Email__c", "Student__c.Learning_Status__c", "Course__c.Course_Code__c", "Course_Enrollment__c.Enrollment_Status__c"],
    flows: ["Student_Welcome_Automation", "Enrollment_Follow_Up_Flow"],
    reportsDashboards: ["Student Success Operations Dashboard", "Production verification report"],
    apexLwc: ["Not required in the Admin course; document future extension decisions only"],
    steps: [
      "Prepare, clean, map, and import at least ten Student records with a test-first migration plan.",
      "Create and test a matching rule and duplicate rule using Student Email.",
      "Reconcile imported records, relationships, errors, and expected counts.",
      "Create a metadata deployment checklist covering dependencies, tests, activation, permissions, and rollback.",
      "Create a production Admin runbook covering monitoring, support, backup, release readiness, and maintenance.",
      "Create the TomCodeX Student Success Assistant launch plan with topic Student Success Support, allowed actions, security, testing, monitoring, human escalation, and rollback.",
      "Present an end-to-end solution review using project evidence from Modules 1 through 10."
    ],
    expected: "The Admin can demonstrate a production-ready Student Success CRM and a controlled launch plan for TomCodeX Student Success Assistant.",
    evidence: [
      "Data import plan, result summary, error file, and reconciliation evidence for at least ten Students.",
      "Screenshot of the Student Email matching rule and duplicate rule test.",
      "Deployment checklist, production Admin runbook, and Agentforce Assistant launch plan.",
      "Final project evidence pack linking the outputs from all ten modules."
    ],
    validation: [
      "Verify data counts, relationship reconciliation, duplicate controls, and rollback planning.",
      "Confirm deployment and operations plans include security, activation, monitoring, and support.",
      "Check that the Agentforce launch plan uses the exact assistant and topic names and includes safe human escalation."
    ]
  }
];

function buildAdminMasteryTest(module, projectTask) {
  const correctStatements = [];
  const addUnique = (items) => items.forEach((item) => {
    if (item && !correctStatements.includes(item) && correctStatements.length < 10) correctStatements.push(item);
  });
  addUnique(module.points);
  addUnique(module.richContent?.learningOutcomes || []);
  addUnique(module.richContent?.bestPractices || []);
  addUnique([projectTask.expected, `Use the exact project task name: ${projectTask.title}.`]);

  const distractorSets = [
    [
      "Configure directly in production before confirming the requirement.",
      "Grant System Administrator access to every user to avoid access issues.",
      "Skip testing and documentation when the configuration saves successfully."
    ],
    [
      "Use unclear names so configuration can be created faster.",
      "Test only as a System Administrator and assume all personas behave the same.",
      "Ignore security, data quality, and maintenance impact."
    ],
    [
      "Replace the standard Salesforce capability before evaluating it.",
      "Treat screenshots as the only proof and do not explain the business result.",
      "Deploy without rollback, monitoring, or post-release verification."
    ]
  ];

  const mcqs = correctStatements.slice(0, 10).map((answer, index) => {
    const options = [answer, ...distractorSets[index % distractorSets.length]];
    const rotation = index % options.length;
    const rotated = [...options.slice(rotation), ...options.slice(0, rotation)];
    return {
      type: "mcq",
      question: `Which statement best demonstrates job-ready understanding for this module topic ${index + 1}?`,
      options: rotated,
      answer
    };
  });

  const scenarioSources = [...module.questions, ...projectTask.validation];
  const scenarios = scenarioSources.slice(0, 3).map((question) => ({
    type: "scenario",
    question: `Scenario: A TomCodeX Academy stakeholder asks for help during ${module.title}. ${question} Explain the best Admin response, the risk to avoid, and how you would test it.`
  }));
  const practical = [
    {
      type: "practical",
      question: `Practical verification: Explain how your completed task "${projectTask.title}" produced this expected output: ${projectTask.expected}`
    },
    {
      type: "practical",
      question: `Practical verification: Describe the evidence you created and how Zentom can verify correct Salesforce naming and hands-on completion. Required evidence includes: ${projectTask.evidence.slice(0, 2).join(" | ")}`
    }
  ];

  return [...mcqs, ...scenarios, ...practical];
}

modules.forEach((module, index) => {
  const rich = module.richContent;
  if (!rich) return;
  const optionalDeepDiveOnly = true;

  const roadmapPhases = ADMIN_ROADMAP_COVERAGE.filter((entry) => entry.module === index);
  const trackId = index < 6 ? "administrator" : "advanced-administrator";
  const track = ADMIN_SUB_COURSES.find((entry) => entry.id === trackId);
  module.subCourse = track;
  rich.roadmapCoverage = roadmapPhases;
  roadmapPhases.forEach((entry) => {
    entry.topics.forEach((topic) => {
      if (!module.points.includes(topic)) module.points.push(topic);
    });
    const guide = ADMIN_ROADMAP_LEARNING_GUIDE.find((item) => entry.phase.startsWith(item.match));
    if (guide) {
      if (!module.practice.includes(guide.task)) module.practice.push(guide.task);
      guide.badges.forEach((badge) => {
        if (!module.resources.some((resource) => resource[1] === badge[1])) module.resources.push(badge);
      });
    }
  });
  rich.detailedLessonSections ||= [];
  rich.detailedLessonSections = rich.detailedLessonSections.filter((section) => section.title !== "TomCodeX Syllabus Roadmap Coverage");
  const mainSyllabusContent = roadmapPhases.length
    ? roadmapPhases.map((entry) => buildAdminRoadmapLesson(entry)).join("")
    : buildAdminRoadmapLesson(
      { phase: `TomCodeX Module ${index + 1}: ${module.title}`, track: trackId, module: index, topics: module.points },
      {
        outcome: rich.moduleGoal,
        task: module.practice.slice(0, 3).join(" "),
        evidence: (rich.practicalAssignment || module.practice).slice(0, 3).join(" "),
        badges: module.resources.filter((resource) => resource[1].includes("trailhead.salesforce.com")).slice(0, 2)
      }
    );
  rich.mainSyllabus = {
    title: `${track.title} Main Syllabus`,
    introduction: "This TomCodeX syllabus is the primary study resource for the module. Complete every explanation, task-based practice item, guided phase lab, and evidence requirement. Use the supporting lesson library and Salesforce Trailhead resources to reinforce the TomCodeX syllabus.",
    content: mainSyllabusContent
  };

  rich.projectConnection = ADMIN_PROJECT_PATH[index];
  const projectTask = ADMIN_PROJECT_TASKS[index];
  rich.trailheadPractice = {
    title: `Official Trailhead Practice for ${module.title}`,
    purpose: "Complete official Salesforce learning and then apply the same skills in the connected TomCodeX project.",
    resources: module.resources,
    tasks: module.practice.slice(0, 3)
  };
  rich.projectName = ADMIN_PROJECT_NAME;
  rich.projectTask = projectTask;
  rich.projectEvidence = projectTask.evidence;
  if (index === 0) {
    rich.moduleGoal = "Build confidence with cloud basics and Salesforce navigation, prepare a safe practice org, create the TomCodeX Student Success CRM app, and review AppExchange safely.";
    rich.learningOutcomes = [
      "Explain cloud computing, SaaS, PaaS, IaaS, and Salesforce CRM.",
      "Identify Org, App, Object, Field, Record, and Profile correctly.",
      "Navigate App Launcher, tabs, Setup, Company Information, Object Manager, and Users.",
      "Identify org edition, timezone, currency, and masked Organization ID only.",
      "Create the TomCodeX Student Success CRM custom app.",
      "Review an AppExchange package safely before installation."
    ];
    rich.handsOnLab = {
      title: "Guided Phase Lab: Org Readiness and Custom App Setup",
      instructions: `<p class="text-slate-600 text-xs leading-relaxed">Complete the Guided Phase Lab story shown in the primary TomCodeX syllabus. Use this lab section to confirm that the org, custom app, and AppExchange risk review are complete before answering Check My Work.</p><p class="mt-3 text-xs text-brand-800"><strong>Do not submit a full Organization ID.</strong> Use a masked value such as 00Dxx000000XXXX.</p>`
    };
    rich.practicalAssignment = [];
    rich.knowledgeCheckQuestions = [];
    rich.completionChecklist = [
      "I created or opened a safe Salesforce practice org.",
      "I verified Company Information.",
      "I identified org edition, timezone, currency, and masked Org ID.",
      "I explored App Launcher, Setup, Object Manager, and Users.",
      "I created the TomCodeX Student Success CRM custom app.",
      "I reviewed one AppExchange package safely.",
      "I submitted project evidence.",
      "I passed the Zentom AI Mastery Test with 80% or higher."
    ];
    rich.finalSummary = "By the end of Module 1, the learner has created or opened a safe Salesforce practice org, verified Company Information, identified org edition, timezone, currency, and masked Org ID, explored App Launcher, Setup, Object Manager, and Users, created the TomCodeX Student Success CRM custom app, reviewed one AppExchange package safely, submitted project evidence, and passed the Zentom AI Mastery Test with 80% or higher.";
  }
  if (index === 1) {
    rich.moduleGoal = "Build a clear, working Student Success CRM data model using Student, Course, and Course Enrollment.";
    rich.learningOutcomes = [
      "Explain standard objects, custom objects, standard fields, custom fields, and records.",
      "Choose suitable Salesforce field types for student, course, and enrollment data.",
      "Explain Lookup and Master-Detail relationship behavior.",
      "Explain why Course Enrollment is a junction object.",
      "Create Student, Course, and Course Enrollment with clean API names.",
      "Create sample records and verify the model in Schema Builder."
    ];
    projectTask.steps = [
      "Create Student__c, Course__c, and Course_Enrollment__c with clear descriptions and suitable fields.",
      "Connect Course Enrollment to Student and Course using justified relationship types.",
      "Create sample records and verify the complete model in Schema Builder."
    ];
    projectTask.expected = "Student, Course, and Course Enrollment form a working three-object Student Success CRM data model with correct fields, relationships, and sample records.";
    projectTask.evidence = [
      "Schema Builder screenshot showing Student, Course, Course Enrollment, and both relationships.",
      "Object Manager screenshots showing Student__c, Course__c, and Course_Enrollment__c.",
      "Field and relationship decision note explaining selected data types and relationship behavior.",
      "Sample Student, Course, and Course Enrollment record proof."
    ];
    rich.projectEvidence = projectTask.evidence;
    rich.handsOnLab = {
      title: "Guided Phase Lab: Student Success CRM Data Model",
      instructions: `<p class="text-slate-600 text-xs leading-relaxed">Complete the Guided Phase Lab story shown in the primary TomCodeX syllabus. Use this lab section to confirm the three custom objects, relationships, and sample records work before answering Check My Work.</p>`
    };
    rich.practicalAssignment = [];
    rich.knowledgeCheckQuestions = [];
    rich.completionChecklist = [
      "I explained standard objects, custom objects, fields, records, and relationships.",
      "I created Student__c, Course__c, and Course_Enrollment__c.",
      "I added suitable fields with clear API names and descriptions.",
      "I configured and explained the Student and Course relationships.",
      "I explained why Course Enrollment is a junction object.",
      "I created sample Student, Course, and Course Enrollment records.",
      "I submitted Schema Builder and Object Manager evidence.",
      "I passed the Zentom AI Mastery Test with 80% or higher."
    ];
    rich.finalSummary = "By the end of Module 2, the learner has built and explained a working Student Success CRM data model using Student, Course, and Course Enrollment, verified the relationships with sample records and Schema Builder, submitted evidence, and passed the Zentom AI Mastery Test with 80% or higher.";
  }
  if (index === 2) {
    rich.moduleGoal = "Secure the Student Success CRM with least-privilege access for Tutor and Program Manager personas.";
    rich.learningOutcomes = [
      "Explain users, profiles, permission sets, roles, OWD, sharing rules, manual sharing, and field-level security.",
      "Describe how object, field, and record access combine.",
      "Create or document Tutor and Program Manager personas.",
      "Create the Student Success Tutor permission set.",
      "Protect a sensitive Student field with field-level security.",
      "Test allowed and denied access for realistic user scenarios."
    ];
    projectTask.steps = [
      "Create or document Tutor and Program Manager users, roles, and access responsibilities.",
      "Create the Student Success Tutor permission set with the required object and field access.",
      "Review OWD, sharing, and field-level security, then test allowed and denied actions."
    ];
    projectTask.expected = "Tutors receive only the access needed to support assigned students, Program Managers receive oversight access, and restricted Student data remains protected.";
    projectTask.evidence = [
      "Persona access matrix for Tutor and Program Manager.",
      "Screenshot of Student Success Tutor permission set object settings.",
      "Role hierarchy, OWD, sharing, and field-level security proof.",
      "Access-test table showing allowed and denied actions."
    ];
    rich.projectEvidence = projectTask.evidence;
    rich.handsOnLab = {
      title: "Guided Phase Lab: Tutor and Program Manager Access Model",
      instructions: `<p class="text-slate-600 text-xs leading-relaxed">Complete the Guided Phase Lab story shown in the primary TomCodeX syllabus. Use this lab section to confirm the security model, permission set, field protection, and access tests are complete before answering Check My Work.</p>`
    };
    rich.finalSummary = "By the end of Module 3, the learner has created a least-privilege Student Success CRM access model for Tutor and Program Manager personas, protected sensitive data, tested allowed and denied actions, submitted evidence, and passed the Zentom AI Mastery Test with 80% or higher.";
  }
  if (index === 3) {
    rich.moduleGoal = "Create a simple, usable Student Success CRM app experience for Tutors and Program Managers.";
    rich.learningOutcomes = [
      "Explain tabs, Lightning apps, page layouts, Lightning record pages, compact layouts, search layouts, and quick actions.",
      "Create or verify Student, Course, and Course Enrollment tabs.",
      "Build or update the Student Success CRM Lightning app navigation.",
      "Customize Student and Course Enrollment page layouts.",
      "Create a Student Lightning record page, compact layout, and useful list views.",
      "Create or document one quick action that supports daily Student Success work."
    ];
    projectTask.steps = [
      "Create or verify the Student Success CRM Lightning app with Student, Course, Course Enrollment, Tasks, Reports, and Dashboards navigation.",
      "Customize Student and Course Enrollment page layouts, compact/search layout behavior, and the Student Lightning record page.",
      "Create Active Students and Pending Enrollments list views plus one useful quick action or documented quick-action design."
    ];
    projectTask.expected = "Tutors and Program Managers can open one Student Success CRM app, find the right records, see important fields, and complete common actions with fewer clicks.";
    projectTask.evidence = [
      "App Launcher or App Manager screenshot showing Student Success CRM and navigation items.",
      "Student and Course Enrollment page layout screenshots.",
      "Student Lightning record page and compact/search layout proof.",
      "Active Students, Pending Enrollments, and quick action proof."
    ];
    rich.projectEvidence = projectTask.evidence;
    rich.handsOnLab = {
      title: "Guided Phase Lab: Student Success CRM User Experience",
      instructions: `<p class="text-slate-600 text-xs leading-relaxed">Complete the Guided Phase Lab story shown in the primary TomCodeX syllabus. Use this lab section to confirm the app, layouts, record page, list views, and quick action are complete before answering Check My Work.</p>`
    };
    rich.finalSummary = "By the end of Module 4, the learner has created a simple Student Success CRM user experience with app navigation, page layouts, a Lightning record page, list views, a quick action, project evidence, and a passing Zentom AI Mastery Test score of 80% or higher.";
  }
  rich.masteryTest ||= buildAdminMasteryTest(module, projectTask);
  rich.masteryEvaluationCriteria = ADMIN_MASTERY_EVALUATION_CRITERIA;
  const standard = ADMIN_STANDARD_COVERAGE[index];
  if (standard) {
    const appendUnique = (target, additions) => {
      additions.forEach((item) => {
        if (!target.includes(item)) target.push(item);
      });
    };
    if (!optionalDeepDiveOnly) appendUnique(module.points, standard.topics);
    appendUnique(module.practice, standard.practice);
    appendUnique(module.questions, standard.questions);
    rich.learningOutcomes ||= [];
    if (!optionalDeepDiveOnly) appendUnique(rich.learningOutcomes, standard.outcomes);
    rich.detailedLessonSections ||= [];
    if (!rich.detailedLessonSections.some((section) => section.title === standard.title)) {
      rich.detailedLessonSections.push({ title: optionalDeepDiveOnly ? `Optional Admin Deep-Dive: ${standard.title}` : standard.title, content: standard.html });
    }
  }
  const deep = ADMIN_DEEP_DIVE_COVERAGE[index];
  if (deep) {
    const appendUnique = (target, additions, key = null) => {
      additions.forEach((item) => {
        const exists = key
          ? target.some((existing) => existing[key] === item[key])
          : target.includes(item);
        if (!exists) target.push(item);
      });
    };
    const deepSections = optionalDeepDiveOnly
      ? deep.sections.map((section) => ({ ...section, title: `Optional Admin Deep-Dive: ${section.title}` }))
      : deep.sections;
    appendUnique(rich.detailedLessonSections, deepSections, "title");
    if (!optionalDeepDiveOnly) {
      appendUnique(rich.learningOutcomes, deep.outcomes);
      appendUnique(module.practice, deep.practice);
      appendUnique(module.questions, deep.questions);
    }
  }
  const deepResources = ADMIN_DEEP_RESOURCES[index] || [];
  deepResources.forEach((resource) => {
    if (!module.resources.some((existing) => existing[1] === resource[1])) {
      module.resources.push(resource);
    }
  });
  rich.keyNotes ||= module.points;
  (optionalDeepDiveOnly ? [] : standard?.topics || []).forEach((topic) => {
    if (!rich.keyNotes.includes(topic)) rich.keyNotes.push(topic);
  });
  (optionalDeepDiveOnly ? [] : deep?.outcomes || []).forEach((outcome) => {
    if (!rich.keyNotes.includes(outcome)) rich.keyNotes.push(outcome);
  });
  rich.flashcards ||= module.questions.map((question, questionIndex) => ({
    front: question,
    back: module.points[questionIndex % module.points.length]
  }));
  (optionalDeepDiveOnly ? [] : standard?.questions || []).forEach((question, questionIndex) => {
    if (!rich.flashcards.some((card) => card.front === question)) {
      rich.flashcards.push({
        front: question,
        back: standard.topics[questionIndex % standard.topics.length]
      });
    }
  });
  (optionalDeepDiveOnly ? [] : deep?.flashcards || []).forEach((card) => {
    if (!rich.flashcards.some((existing) => existing.front === card.front)) {
      rich.flashcards.push(card);
    }
  });
  rich.practicalAssignment ||= module.practice;
  (optionalDeepDiveOnly ? [] : standard?.practice || []).forEach((item) => {
    if (!rich.practicalAssignment.includes(item)) rich.practicalAssignment.push(item);
  });
  (optionalDeepDiveOnly ? [] : deep?.practice || []).forEach((item) => {
    if (!rich.practicalAssignment.includes(item)) rich.practicalAssignment.push(item);
  });
  rich.knowledgeCheckQuestions ||= module.questions;
  (optionalDeepDiveOnly ? [] : standard?.questions || []).forEach((question) => {
    if (!rich.knowledgeCheckQuestions.includes(question)) rich.knowledgeCheckQuestions.push(question);
  });
  (optionalDeepDiveOnly ? [] : deep?.questions || []).forEach((question) => {
    if (!rich.knowledgeCheckQuestions.includes(question)) rich.knowledgeCheckQuestions.push(question);
  });
  rich.completionChecklist ||= [
    ...module.practice.map((item) => `I completed: ${item}`),
    "I completed Check My Work.",
    "I scored 80% or higher in the AI Mastery Test."
  ];
  rich.practicalAssignment = [];
  rich.knowledgeCheckQuestions = [];
  if (index >= 2) {
    rich.completionChecklist = [
      `I completed the Module ${index + 1} guided phase lab.`,
      `I built the TomCodeX project task: ${projectTask.title}.`,
      "I submitted the required project evidence.",
      "I answered Check My Work with specific Salesforce names and proof.",
      "I reviewed the Trailhead hands-on practice.",
      "I can explain the module best practices and common mistakes.",
      "I prepared for the interview questions.",
      "I passed the Zentom AI Mastery Test with 80% or higher."
    ];
    rich.finalSummary ||= `By the end of Module ${index + 1}, the learner has completed the guided phase lab, built "${projectTask.title}", submitted project evidence, answered Check My Work, reviewed Trailhead practice, prepared interview answers, and passed the Zentom AI Mastery Test with 80% or higher.`;
  }
  rich.masteryPreparationQuestions ||= module.questions;
  (optionalDeepDiveOnly ? [] : standard?.questions || []).forEach((question) => {
    if (!rich.masteryPreparationQuestions.includes(question)) rich.masteryPreparationQuestions.push(question);
  });
  (optionalDeepDiveOnly ? [] : deep?.questions || []).forEach((question) => {
    if (!rich.masteryPreparationQuestions.includes(question)) rich.masteryPreparationQuestions.push(question);
  });
  rich.finalSummary ||= `You completed ${module.title} as part of the connected Student Success CRM Admin project.`;
  if (!optionalDeepDiveOnly && !rich.completionChecklist.includes(`I completed the TomCodeX project task: ${projectTask.title}`)) {
    rich.completionChecklist.unshift(`I completed the TomCodeX project task: ${projectTask.title}`);
  }
  if (!optionalDeepDiveOnly && !rich.completionChecklist.includes("I completed the official Trailhead hands-on practice.")) {
    rich.completionChecklist.unshift("I completed the official Trailhead hands-on practice.");
  }

  if (!rich.handsOnLab && rich.labTask) {
    rich.handsOnLab = {
      title: rich.labTask.title,
      instructions: `<p class="text-slate-600 text-xs leading-relaxed mb-3">${rich.labTask.description || "Complete the connected Student Success CRM lab."}</p><ol class="list-decimal pl-5 space-y-1.5 text-slate-600 text-xs">${(rich.labTask.steps || []).map((step) => `<li>${step}</li>`).join("")}</ol>`
    };
  }
  if (!optionalDeepDiveOnly && rich.handsOnLab && deep?.practice?.length && !rich.handsOnLab.instructions.includes("Deep-dive evidence")) {
    rich.handsOnLab.instructions += `<div class="mt-4 rounded-xl border border-blue-200 bg-blue-50 p-3"><strong class="text-xs text-blue-900">Deep-dive evidence</strong><ol class="list-decimal pl-5 mt-2 space-y-1 text-xs text-blue-800">${deep.practice.map((item) => `<li>${item}</li>`).join("")}</ol></div>`;
  }
  if (!optionalDeepDiveOnly && rich.handsOnLab && !rich.handsOnLab.instructions.includes(projectTask.title)) {
    rich.handsOnLab.instructions += `<div class="mt-4 rounded-xl border border-brand-200 bg-brand-50 p-3"><strong class="text-xs text-brand-900">Connected project task: ${projectTask.title}</strong><p class="mt-2 text-xs text-brand-800">${projectTask.expected}</p></div>`;
  }
  rich.labCriteria ||= rich.labTask?.labQuestions || [];
  if (index === 0) {
    rich.labCriteria = [
      { id: "cloud_crm", question: "Explain cloud computing, SaaS, PaaS, and Salesforce CRM using one Salesforce business example.", type: "text", minLength: 100 },
      { id: "navigation", question: "Describe the exact paths you used to open App Launcher, Setup, Object Manager, Company Information, and Users.", type: "text", minLength: 100 },
      { id: "foundation_terms", question: "Explain Org, App, Object, Field, Record, and Profile using your practice org.", type: "text", minLength: 100 },
      { id: "custom_app", question: "What exact custom app name did you create, and which tabs did you add?", type: "text", expectedKeywords: ["TomCodeX Student Success CRM"], minLength: 50 },
      { id: "project_evidence", question: "Describe your submitted project evidence. Include org edition, timezone, currency, masked Organization ID only, custom app proof, and AppExchange risk review.", type: "text", placeholder: "Use a masked Organization ID such as 00Dxx000000XXXX.", minLength: 120 },
      { id: "practice_org_safety", question: "Why should a production Salesforce org not be used for learning and practice?", type: "text", minLength: 60 },
      { id: "appexchange_review", question: "Give your AppExchange Install or Do Not Install decision and explain the publisher, rating, reviews, permissions, data access, licensing, and uninstall risk you reviewed.", type: "text", minLength: 120 }
    ];
  }
  if (index === 1) {
    rich.labCriteria = [
      { id: "object_model", question: "Explain the purpose of Student, Course, and Course Enrollment and why each requires its own Salesforce object.", type: "text", minLength: 100 },
      { id: "api_names", question: "Provide the exact API names of the three custom objects you created.", type: "text", expectedKeywords: ["Student__c", "Course__c", "Course_Enrollment__c"], minLength: 50 },
      { id: "field_types", question: "List important fields you created and explain why each Salesforce field type fits the stored data.", type: "text", minLength: 120 },
      { id: "relationships", question: "Explain the relationship types connecting Course Enrollment to Student and Course, including ownership, sharing, deletion, and required-parent behavior.", type: "text", minLength: 120 },
      { id: "junction_object", question: "Why is Course Enrollment a junction object, and what enrollment-specific data does it store?", type: "text", minLength: 80 },
      { id: "sample_records", question: "Describe the sample Student, Course, and Course Enrollment records you created and how they prove the model works.", type: "text", minLength: 100 },
      { id: "project_evidence", question: "Describe your Schema Builder, Object Manager, field decision, relationship decision, and sample-record evidence.", type: "text", minLength: 120 }
    ];
  }
  if (index === 2) {
    rich.labCriteria = [
      { id: "security_layers", question: "Explain how object, field, and record access combine in Salesforce.", type: "text", minLength: 100 },
      { id: "persona_model", question: "Describe the Tutor and Program Manager personas and the access each needs.", type: "text", minLength: 100 },
      { id: "permission_set", question: "What exact permission set did you create or document, and what object access does it grant?", type: "text", expectedKeywords: ["Student Success Tutor"], minLength: 100 },
      { id: "field_security", question: "Name one sensitive Student field you protected and explain how field-level security affects pages, reports, and APIs.", type: "text", minLength: 100 },
      { id: "record_access", question: "Explain the OWD, role, and sharing approach you selected for Student and Course Enrollment records.", type: "text", minLength: 120 },
      { id: "access_tests", question: "Describe at least three allowed actions and three denied actions from your access-test table.", type: "text", minLength: 120 },
      { id: "project_evidence", question: "Describe the persona matrix, permission set screenshot, role or sharing proof, FLS proof, and access-test evidence you submitted.", type: "text", minLength: 120 }
    ];
  }
  if (index === 3) {
    rich.labCriteria = [
      { id: "ui_layers", question: "Explain the difference between a tab, Lightning app, page layout, Lightning record page, compact layout, search layout, and quick action.", type: "text", minLength: 120 },
      { id: "app_navigation", question: "What exact app name and navigation items did you configure for the Student Success CRM experience?", type: "text", expectedKeywords: ["Student Success CRM"], minLength: 80 },
      { id: "page_layouts", question: "Describe the Student and Course Enrollment page layout changes you made and why they help users.", type: "text", minLength: 100 },
      { id: "record_page", question: "Describe the Student Lightning record page or activation assignment you configured.", type: "text", minLength: 80 },
      { id: "list_views", question: "What list views did you create, and what filters make them useful for daily work?", type: "text", expectedKeywords: ["Active Students", "Pending Enrollments"], minLength: 100 },
      { id: "quick_action", question: "Describe the quick action you created or designed, including object, purpose, fields, and placement.", type: "text", minLength: 100 },
      { id: "project_evidence", question: "Describe your app navigation, page layout, Lightning record page, compact/search layout, list view, and quick action evidence.", type: "text", minLength: 120 }
    ];
  }
  if (index === 4) {
    rich.labCriteria = [
      { id: "validation_use_case", question: "Explain why validation rules are used in Salesforce instead of user training alone, and give one student data example.", type: "text", minLength: 100 },
      { id: "email_validation", question: "Provide the exact formula you configured for the Student Email validation rule.", type: "text", minLength: 50, expectedKeywords: ["Student__c", "Email__c"] },
      { id: "enrollment_validation", question: "Provide the exact formula you configured for the Course Enrollment Progress validation rule (preventing completion before progress reaches 100%).", type: "text", minLength: 60, expectedKeywords: ["Course_Enrollment__c", "Progress_Percentage__c", "Completed"] },
      { id: "formula_vs_validation", question: "What is the difference between a Formula field and a validation-rule formula?", type: "text", minLength: 80 },
      { id: "testing_boundaries", question: "Describe the boundary test cases you performed (e.g. empty fields, progress of 99% vs 100%) and the expected results.", type: "text", minLength: 120 },
      { id: "project_evidence", question: "Describe your validation rules, formulas, error messages, and testing evidence.", type: "text", minLength: 120 },
      { id: "data_quality_impact", question: "How do validation rules prevent dirty data during imports and background API integrations?", type: "text", minLength: 80 }
    ];
  }
  if (index === 5) {
    rich.labCriteria = [
      { id: "reports_created", question: "List the names and purposes of the three reports you created for Student Success CRM.", type: "text", minLength: 100, expectedKeywords: ["Learning Status", "Enrollment Progress", "Follow-Up"] },
      { id: "dashboard_components", question: "What exact dashboard name did you configure, and which chart components did you add?", type: "text", minLength: 80, expectedKeywords: ["Student Success Operations Dashboard"] },
      { id: "report_filtering", question: "Explain the grouping and filter logic you used for the Enrollment Progress report.", type: "text", minLength: 80 },
      { id: "folder_security", question: "Explain how folder sharing and Organization-Wide Defaults (OWD) affect report and dashboard visibility for different users.", type: "text", minLength: 100 },
      { id: "business_value", question: "Give one concrete business decision or follow-up action a Program Manager can make based on this dashboard.", type: "text", minLength: 100 },
      { id: "project_evidence", question: "Describe your reports, dashboard, folder security, and visibility test evidence.", type: "text", minLength: 120 },
      { id: "standard_objects_use", question: "Explain the standard Sales and Service Cloud objects (Leads, Opportunities, Cases) and how they fit into the academy's operational pipeline.", type: "text", minLength: 100 }
    ];
  }
  if (index === 6) {
    rich.labCriteria = [
      { id: "flow_trigger", question: "Explain why you chose a record-triggered Flow for Student Welcome, including the object, trigger timing (before vs after save), and entry conditions.", type: "text", minLength: 100, expectedKeywords: ["Student__c", "Active"] },
      { id: "task_creation", question: "Describe the elements and fields you configured in the Flow to create the welcome Task record.", type: "text", minLength: 100, expectedKeywords: ["Task", "Subject", "Active"] },
      { id: "duplicate_prevention", question: "How does your Flow ensure that multiple welcome Tasks are not created for the same Student?", type: "text", minLength: 80 },
      { id: "flow_debugging", question: "Explain how you used Flow Builder's Debug mode to test both positive and negative paths.", type: "text", minLength: 100 },
      { id: "platform_events", question: "What is the difference between a Platform Event-triggered Flow and a standard Record-triggered Flow?", type: "text", minLength: 80 },
      { id: "project_evidence", question: "Describe your Flow canvas, entry conditions, debug runs, and task record evidence.", type: "text", minLength: 120 },
      { id: "autolaunched_flows", question: "Explain the role of Autolaunched Flows and when they should be preferred over triggered flows.", type: "text", minLength: 80 }
    ];
  }
  if (index === 7) {
    rich.labCriteria = [
      { id: "flow_trigger", question: "Explain the trigger object, timing, and entry conditions for the Enrollment Follow-Up Flow.", type: "text", minLength: 100, expectedKeywords: ["Course_Enrollment__c", "Pending"] },
      { id: "subflow_integration", question: "If you created a reusable subflow, explain its input variables, outputs, and how it is invoked.", type: "text", minLength: 80 },
      { id: "fault_handling", question: "Explain how and where you added fault paths in your Flow, and what action is taken when an error occurs.", type: "text", minLength: 100, expectedKeywords: ["fault"] },
      { id: "asynchronous_paths", question: "What is the difference between a Schedule-triggered Flow, a scheduled path, and an asynchronous path?", type: "text", minLength: 100 },
      { id: "bulk_considerations", question: "How does Flow Builder execute data elements (like Update Records) to avoid hitting governor limits in bulk transactions?", type: "text", minLength: 80 },
      { id: "project_evidence", question: "Describe your Flow canvas, fault paths, debug logs, and notification evidence.", type: "text", minLength: 120 },
      { id: "variables_formulas", question: "Describe the variables and formula resources you configured to support dynamic calculations inside the Flow.", type: "text", minLength: 80 }
    ];
  }
  if (index === 8) {
    rich.labCriteria = [
      { id: "approval_process", question: "Describe the API name, entry criteria, steps, and final actions of your graduation approval process.", type: "text", minLength: 100, expectedKeywords: ["Student_Graduation_Approval"] },
      { id: "approval_lifecycle", question: "Explain how the record lock, approver assignment, and email alerts behave during a record's approval lifecycle.", type: "text", minLength: 100 },
      { id: "agentforce_governance", question: "Explain the key components of your Agentforce governance blueprint, including allowed topics and human escalation.", type: "text", minLength: 120, expectedKeywords: ["TomCodeX Student Success Assistant"] },
      { id: "change_management", question: "What sandboxes (Developer, Full, etc.) are used for UAT, and how do Change Sets deploy configuration?", type: "text", minLength: 100 },
      { id: "project_evidence", question: "Describe your approval process canvas, UAT plan, and Agentforce governance blueprint evidence.", type: "text", minLength: 120 },
      { id: "ai_trust_layer", question: "Explain the Einstein Trust Layer's role in masking sensitive student data during generative AI interactions.", type: "text", minLength: 100 },
      { id: "prompt_builder_use", question: "How does Prompt Builder ground LLM calls using CRM record merge fields?", type: "text", minLength: 80 }
    ];
  }
  if (index === 9) {
    rich.labCriteria = [
      { id: "data_migration", question: "Describe how you prepared, mapped, and imported your test Student records, including reconciliation counts.", type: "text", minLength: 100, expectedKeywords: ["Student__c", "Email__c"] },
      { id: "duplicate_rules", question: "Explain the matching rule and duplicate rule you configured to detect and handle duplicate Student emails.", type: "text", minLength: 100 },
      { id: "deployment_checklist", question: "What key items belong on your metadata deployment checklist before releasing to production?", type: "text", minLength: 100 },
      { id: "production_operations", question: "Describe three tasks in your production Admin runbook (monitoring, backup, user support).", type: "text", minLength: 100 },
      { id: "agentforce_launch", question: "Explain your launch plan for the Student Success Assistant, including allowed topics, actions, and security.", type: "text", minLength: 120, expectedKeywords: ["Student Success Support"] },
      { id: "project_evidence", question: "Describe your data import log, duplicate rule tests, deployment runbook, and final Assistant launch plan.", type: "text", minLength: 120 },
      { id: "git_branching", question: "Describe the Git branching, pull request, code review, and merge strategy used in your team's DevOps pipeline.", type: "text", minLength: 100 }
    ];
  }
  if (!rich.labCriteria.some((criterion) => criterion.id === "project_evidence")) {
    rich.labCriteria.push({
      id: "project_evidence",
      question: `Prove that you completed "${projectTask.title}". Describe the exact Salesforce names used, expected output, evidence captured, tests performed, and business result.`,
      type: "text",
      placeholder: "Reference your project configuration, screenshots, tests, and business result.",
      minLength: 120,
      hint: "Use the TomCodeX project task, Project Evidence Required, and AI validation criteria shown in this module."
    });
  }
  const deepCriterion = ADMIN_DEEP_LAB_CRITERIA[index];
  if (!optionalDeepDiveOnly && deepCriterion && !rich.labCriteria.some((criterion) => criterion.id === "deep_evidence")) {
    rich.labCriteria.push({
      id: "deep_evidence",
      question: deepCriterion,
      type: "text",
      placeholder: "Summarize your configuration, decisions, tests, and evidence.",
      minLength: 80,
      hint: "Reference the Deep-dive evidence tasks in this module's hands-on lab."
    });
  }
  rich.labCriteria.forEach((criterion) => {
    if (criterion.type !== "number" && !criterion.acceptedValues?.length && !criterion.expectedKeywords?.length && !criterion.minLength) {
      criterion.minLength = 3;
    }
  });
});

window.TomCodexAdminModules = modules;
window.TomCodexCourseConfig = {
  modules,
  subCourses: ADMIN_SUB_COURSES,
  roadmapCoverage: ADMIN_ROADMAP_COVERAGE,
  masteryKey: "tomcodex.adminMasteryScores.v1",
  courseName: "Salesforce Administrator",
  recordLabel: "Admin",
  moduleHours: 6
};
