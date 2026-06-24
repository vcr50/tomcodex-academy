/**
 * Realistic Practice Questions for Developer & AI/Agentforce Certifications
 */

window.PDI_PREP_QUESTIONS = [
  {
    id: 101,
    category: "Apex Coding & Triggers",
    question: "A developer wants to perform custom validation checks on records before they are saved to the database. Which trigger event should they use?",
    options: [
      "before insert and before update",
      "after insert and after update",
      "before insert and after insert",
      "after update only"
    ],
    correctIndex: 0,
    explanation: "Before triggers (before insert, before update) are used to validate or update record values before they are committed to the database. Trying to perform custom validation or modify fields in an after trigger throws read-only exceptions or requires extra DML operations."
  },
  {
    id: 102,
    category: "Apex Coding & Triggers",
    question: "Which code pattern should be used to prevent hitting governor limits when querying related records for a list of accounts?",
    options: [
      "Execute a SOQL query inside a for loop iterating over the Account list.",
      "Query all Contacts and match them in-memory using nested loops.",
      "Use a single SOQL query with a subquery (inner join) to fetch Account and Contacts together.",
      "Call a @future method for each account record to fetch its contacts asynchronously."
    ],
    correctIndex: 2,
    explanation: "SOQL queries should never be executed inside loops (which causes the 'Too many SOQL queries: 101' limit). Fetching records and their children using a single relationship subquery (e.g., [SELECT Id, Name, (SELECT Id FROM Contacts) FROM Account WHERE Id IN :accIds]) is the bulkified best practice."
  },
  {
    id: 103,
    category: "Lightning Web Components",
    question: "How should a Lightning Web Component child send data back up to its parent component?",
    options: [
      "By calling a public method exposed on the parent via @api.",
      "By firing a CustomEvent and letting the parent listen for it.",
      "By importing a shared service module in both components.",
      "By updating a properties variable in localStorage."
    ],
    correctIndex: 1,
    explanation: "Lightning Web Components use standard DOM events to communicate upward. A child component dispatches a CustomEvent, which propagates up, and the parent handles it with an event listener on the child tag."
  },
  {
    id: 104,
    category: "Apex Coding & Triggers",
    question: "What is the maximum number of SOQL queries allowed in a single synchronous Apex transaction?",
    options: [
      "20 queries",
      "100 queries",
      "200 queries",
      "Unlimited"
    ],
    correctIndex: 1,
    explanation: "The synchronous governor limit for SOQL queries is 100. For asynchronous transactions (like Batch Apex or Queueable Apex), the limit is increased to 200."
  },
  {
    id: 105,
    category: "Apex Coding & Triggers",
    question: "Which keyword should a developer use to allow an Apex class to respect the sharing rules of the current user?",
    options: [
      "with sharing",
      "without sharing",
      "inherited sharing",
      "public sharing"
    ],
    correctIndex: 0,
    explanation: "The 'with sharing' keyword ensures that the class respects the sharing rules, organization-wide defaults, and role hierarchy settings of the running user."
  },
  {
    id: 106,
    category: "Apex Coding & Triggers",
    question: "A developer is writing an Apex trigger that performs multiple processing steps. During execution, it hits the Apex CPU time limit. Which action should the developer take to optimize performance?",
    options: [
      "Use Map collections to avoid nested loops.",
      "Run the trigger asynchronously using @future.",
      "Move the logic to a Screen Flow.",
      "Increase the heap limit in setup."
    ],
    correctIndex: 0,
    explanation: "Apex CPU time limit (10 seconds synchronous) is most often hit because of inefficient code like nested loops. Using Map collections to lookup records in O(1) time instead of nested loops in O(N^2) time drastically reduces CPU consumption."
  },
  {
    id: 107,
    category: "Apex Coding & Triggers",
    question: "Which method allows a developer to perform a DML operation while allowing partial success and capturing error messages for failed records?",
    options: [
      "Database.insert(records, false)",
      "insert records",
      "Database.insert(records, true)",
      "Database.insertSecure(records)"
    ],
    correctIndex: 0,
    explanation: "Using Database.insert(records, false) (with allOrNone parameter set to false) allows partial success. It returns an array of Database.SaveResult objects which can be inspected to find errors without rolling back the entire transaction."
  },
  {
    id: 108,
    category: "Apex Coding & Triggers",
    question: "Under which condition is a SOSL query preferred over a SOQL query?",
    options: [
      "When searching for a specific text string across multiple unrelated objects.",
      "When retrieving records from a child object linked to a parent.",
      "When calculating sum or average values of numeric fields.",
      "When querying large data volumes on a single indexed object."
    ],
    correctIndex: 0,
    explanation: "SOSL (Salesforce Object Search Language) is optimized for text searches across multiple, potentially unrelated objects. SOQL can only search one primary object at a time."
  },
  {
    id: 109,
    category: "Lightning Web Components",
    question: "How does a parent component pass data down to a child Lightning Web Component dynamically?",
    options: [
      "By setting properties exposed with the @api decorator in the child.",
      "By calling fireEvent() from the parent page.",
      "By utilizing standard DOM custom events on the parent container.",
      "By defining an @wire adapter in the child component."
    ],
    correctIndex: 0,
    explanation: "To expose a public property or method that a parent component can set or call, the child component must annotate the property/method with the @api decorator."
  },
  {
    id: 110,
    category: "Apex Coding & Triggers",
    question: "A developer is writing an Apex test class. What is the default behavior regarding access to existing organization data?",
    options: [
      "Test methods cannot see existing organization records by default, unless annotated with (SeeAllData=true).",
      "Test methods can read and write all organization data by default.",
      "Test methods can only see User and Profile records by default.",
      "Test methods can only access data if run as a System Administrator."
    ],
    correctIndex: 0,
    explanation: "By default, Apex test classes cannot access existing organization data (data isolation). To access existing data, you can use @isTest(SeeAllData=true). Best practice is to create mock data inside the test context."
  },
  {
    id: 111,
    category: "Apex Coding & Triggers",
    question: "In the Salesforce Order of Execution, when do database triggers run in relation to validation rules?",
    options: [
      "Before triggers run before system and custom validation rules; After triggers run after validation rules.",
      "All triggers run after validation rules have successfully passed.",
      "All triggers run before any validation rules are executed.",
      "Validation rules run before 'Before' triggers but after 'After' triggers."
    ],
    correctIndex: 0,
    explanation: "During save operations, Salesforce executes 'Before' triggers first, then checks system and custom validation rules, and runs 'After' triggers after validation has succeeded."
  },
  {
    id: 112,
    category: "Apex Coding & Triggers",
    question: "What is the primary cause of a 'System.LimitException: Apex heap size too large' error in Apex?",
    options: [
      "Too much memory is consumed by variables, collections, and query results in a single transaction.",
      "Too many SOQL queries were executed.",
      "The CPU execution time exceeded 10 seconds.",
      "More than 150 DML operations were performed."
    ],
    correctIndex: 0,
    explanation: "The heap size limit restricts the amount of memory allocated for variables and data in a single transaction (6MB synchronous, 12MB asynchronous). Querying large datasets without limits or storing excessive data in memory causes this limit to be breached."
  },
  {
    id: 113,
    category: "Apex Coding & Triggers",
    question: "Which of the following is a recommended best practice for writing Apex triggers?",
    options: [
      "Write a single trigger per object and delegate execution to a handler class.",
      "Create multiple triggers on the same object to separate business features.",
      "Perform SOQL queries directly inside the trigger loop to check status.",
      "Hardcode record IDs in trigger criteria to speed up routing."
    ],
    correctIndex: 0,
    explanation: "Best practice is to have one trigger per object. Having multiple triggers makes it impossible to guarantee the order of execution. Logic should be delegated to handler classes."
  },
  {
    id: 114,
    category: "Lightning Web Components",
    question: "Which LWC lifecycle hook is invoked when a component is inserted into the DOM and is the best place to perform initial setup or fetch data?",
    options: [
      "connectedCallback()",
      "renderedCallback()",
      "constructor()",
      "disconnectedCallback()"
    ],
    correctIndex: 0,
    explanation: "The connectedCallback() hook fires when a component is inserted into the DOM. It is the ideal place to perform initial operations, setup listeners, or fetch record data."
  },
  {
    id: 115,
    category: "Apex Coding & Triggers",
    question: "A developer needs to run a complex callout asynchronously and chain another job once it completes. Which asynchronous Apex option should they choose?",
    options: [
      "Queueable Apex",
      "Future Methods",
      "Batch Apex",
      "Scheduled Apex"
    ],
    correctIndex: 0,
    explanation: "Queueable Apex supports chaining jobs (submitting a new queueable job from a running one) and allows utilizing complex object parameters, which @future methods do not support."
  }
];

window.AI_PREP_QUESTIONS = [
  {
    id: 201,
    category: "AI Ethics & Trust",
    question: "Which principle of ethical AI in Salesforce ensures that users understand why an AI model made a specific prediction or recommendation?",
    options: [
      "Transparency",
      "Accountability",
      "Empowerment",
      "Robustness"
    ],
    correctIndex: 0,
    explanation: "Transparency means that AI models should be open, explaining how they make recommendations and predictions so users can verify accuracy and understand the logic behind outcomes."
  },
  {
    id: 202,
    category: "AI Fundamentals",
    question: "Which type of AI is specifically designed to generate new content, such as email drafts, chat replies, and text summaries?",
    options: [
      "Predictive AI",
      "Generative AI",
      "Analytical AI",
      "Classification AI"
    ],
    correctIndex: 1,
    explanation: "Generative AI uses Large Language Models (LLMs) to create brand-new text, images, code, or other media based on input prompts."
  },
  {
    id: 203,
    category: "Data Quality & AI",
    question: "What is the primary factor that determines the accuracy and reliability of AI predictions?",
    options: [
      "The number of fields in the record layouts",
      "The cleanliness, quality, and completeness of the training data",
      "The size of the user licenses in the organization",
      "The frequency of sandbox deployments"
    ],
    correctIndex: 1,
    explanation: "Data quality is the most crucial factor for AI success ('garbage in, garbage out'). Incomplete, biased, or duplicate data leads directly to poor, inaccurate predictions."
  },
  {
    id: 204,
    category: "AI Fundamentals",
    question: "What does LLM stand for in the context of Generative AI?",
    options: [
      "Large Language Model",
      "Logical Learning Module",
      "Linked Layout Map",
      "License Loading Manager"
    ],
    correctIndex: 0,
    explanation: "LLM stands for Large Language Model. It is a type of neural network trained on vast amounts of text to parse, understand, and generate natural language."
  },
  {
    id: 205,
    category: "Einstein Features",
    question: "Which Salesforce Einstein feature helps write replies to customer service emails automatically by combining case context with LLM generation?",
    options: [
      "Einstein Reply Recommendations",
      "Einstein Generative Service Replies",
      "Einstein Prediction Builder",
      "Einstein Analytics Service"
    ],
    correctIndex: 1,
    explanation: "Einstein Generative Service Replies generates real-time, context-specific email drafts or chat messages for agents using generative AI grounded in local CRM data."
  },
  {
    id: 206,
    category: "AI Ethics & Trust",
    question: "An AI recruiting model consistently favors male candidates over female candidates. What does this situation indicate?",
    options: [
      "Algorithmic or training data bias",
      "System CPU speed limitations",
      "User permission set misconfigurations",
      "Model overfitting because of too much data"
    ],
    correctIndex: 0,
    explanation: "AI models learn from historical data. If the historical training data contains biases (like favoring male applicants), the AI will replicate and reinforce those biases."
  },
  {
    id: 207,
    category: "AI Fundamentals",
    question: "Which type of machine learning involves training a model on labeled historical data with known inputs and correct outputs?",
    options: [
      "Supervised Learning",
      "Unsupervised Learning",
      "Reinforcement Learning",
      "Deep Learning"
    ],
    correctIndex: 0,
    explanation: "Supervised learning trains models using labeled training data containing both inputs and their corresponding correct outputs."
  },
  {
    id: 208,
    category: "AI Fundamentals",
    question: "Which AI field deals with the interaction between computers and human language, allowing systems to analyze and extract meaning from text?",
    options: [
      "Natural Language Processing (NLP)",
      "Computer Vision",
      "Predictive Analytics",
      "Robotic Process Automation"
    ],
    correctIndex: 0,
    explanation: "NLP is the field of AI focused on enabling computers to understand, interpret, and manipulate human language."
  },
  {
    id: 209,
    category: "AI Fundamentals",
    question: "In generative AI, what is a 'hallucination'?",
    options: [
      "The model generates confident but false or inaccurate information.",
      "The model fails to respond due to an API timeout.",
      "The model exposes restricted client data to unauthorized profiles.",
      "The model enters an infinite execution loop."
    ],
    correctIndex: 0,
    explanation: "A hallucination occurs when an LLM generates text that sounds fluent and plausible but is factually incorrect or unsupported by the training data."
  },
  {
    id: 210,
    category: "Prompt Engineering",
    question: "What is 'Few-Shot Prompting' in the context of Generative AI?",
    options: [
      "Providing the LLM with a few examples of desired inputs and outputs in the prompt.",
      "Restricting the prompt length to a few words.",
      "Running the LLM inference only a few times.",
      "Grounding the prompt with a single record relation."
    ],
    correctIndex: 0,
    explanation: "Few-shot prompting is a technique where you supply a few input-output examples in the prompt to guide the model's structure and behavior."
  },
  {
    id: 211,
    category: "Einstein Features",
    question: "What distinguishes Einstein Copilot from traditional chatbots?",
    options: [
      "It uses a conversational interface grounded in CRM data and dynamically reasons using actions.",
      "It only supports static, rule-based keywords.",
      "It requires users to write HTML code to customize answers.",
      "It does not have access to Salesforce database objects."
    ],
    correctIndex: 0,
    explanation: "Einstein Copilot is an autonomous assistant that reasons dynamically using configured topics and actions, using real-time CRM grounding rather than static decision trees."
  },
  {
    id: 212,
    category: "AI Ethics & Trust",
    question: "How does the Einstein Trust Layer enforce zero data retention with LLM partners?",
    options: [
      "Through API contracts ensuring partner LLMs do not store Salesforce data for model training.",
      "By running the entire LLM locally inside the user's browser.",
      "By deleting all Salesforce database records after the query finishes.",
      "By blocking all external network integrations."
    ],
    correctIndex: 0,
    explanation: "Salesforce's agreements with LLM providers ensure that prompts sent to the models are not cached or stored to train the partner's public models."
  },
  {
    id: 213,
    category: "AI Ethics & Trust",
    question: "Which Einstein Trust Layer mechanism prevents sensitive fields like Social Security Numbers from being sent to external models?",
    options: [
      "Data Masking",
      "Toxicity Detection",
      "Prompt Grounding",
      "Data Encryption"
    ],
    correctIndex: 0,
    explanation: "Data masking identifies and replaces PII (names, emails, SSNs, credit cards) with placeholder text before the prompt leaves the Salesforce trust boundary."
  },
  {
    id: 214,
    category: "Data Quality & AI",
    question: "Why are thumb-up and thumb-down feedback widgets important in AI consoles?",
    options: [
      "They capture user feedback to evaluate model accuracy and refine prompt instructions.",
      "They are used to rate customer service speed.",
      "They determine user license pricing tiers.",
      "They trigger database sync operations."
    ],
    correctIndex: 0,
    explanation: "Capturing direct user feedback helps administrators audit model outputs, identify hallucinations, and refine templates and instructions."
  },
  {
    id: 215,
    category: "AI Fundamentals",
    question: "A company wants to identify which leads are most likely to convert next month. Which type of AI should they use?",
    options: [
      "Predictive AI",
      "Generative AI",
      "Acoustic AI",
      "Large Language Models"
    ],
    correctIndex: 0,
    explanation: "Predictive AI analyzes historical patterns to forecast scores or probabilities (like Lead Scoring). Generative AI is designed to create new content."
  }
];

window.AGENTFORCE_PREP_QUESTIONS = [
  {
    id: 301,
    category: "Agentforce Configuration",
    question: "In Agentforce, how does the AI Copilot determine which action or topic to trigger when a user inputs a request?",
    options: [
      "It executes a hardcoded rule-based regex string match.",
      "The dynamic planner maps user intent to configured Agent Actions and Topics dynamically.",
      "It requires the administrator to link keywords to button click elements manually.",
      "It routes all queries to an external apex router class."
    ],
    correctIndex: 1,
    explanation: "Agentforce uses a dynamic planner that evaluates the user request and selects the most relevant Agent Actions or Topics based on action descriptions and input properties."
  },
  {
    id: 302,
    category: "Grounding Case Context",
    question: "What is the term used in Agentforce for supplying local CRM records, case context, or knowledge articles to a prompt template to guarantee accurate responses?",
    options: [
      "Prompt engineering",
      "Grounding",
      "Anchoring",
      "Data ingestion"
    ],
    correctIndex: 1,
    explanation: "Grounding is the process of injecting verified CRM data or knowledge articles into the prompt template context before sending it to the LLM, ensuring the output is safe and factual."
  },
  {
    id: 303,
    category: "Prompt Builder",
    question: "Which Salesforce tool is used to design, verify, and safe-test custom prompts integrated into Agentforce actions?",
    options: [
      "Agentforce Manager",
      "Prompt Builder",
      "Einstein Playgrounds",
      "Flow Builder"
    ],
    correctIndex: 1,
    explanation: "Prompt Builder is the workspace used by admins to draft prompt templates, merge dynamic CRM fields and flows, test prompt rendering, and deploy them for agents."
  },
  {
    id: 304,
    category: "Agentforce Topics",
    question: "What is the role of a 'Topic' in configuring Agentforce copilot behavior?",
    options: [
      "It sets the visual styling and color layout of the chat widget.",
      "It acts as a category of actions, defining the scope and system instructions for specific business domains.",
      "It determines the profile access of the copilot widget.",
      "It acts as an automated backup router for server downtime."
    ],
    correctIndex: 1,
    explanation: "Topics group relevant actions and instructions together, helping the copilot understand the boundaries, rules, and actions associated with specific business areas (e.g., billing, customer support, lead intake)."
  },
  {
    id: 305,
    category: "Salesforce Trust Layer",
    question: "What is the primary objective of the Salesforce Einstein Trust Layer when communicating with third-party LLMs?",
    options: [
      "To optimize API call speeds and reduce pricing packages.",
      "To verify that the user has a valid Salesforce login license.",
      "To mask personally identifiable information (PII) and ensure zero data retention on external servers.",
      "To execute security checks on the user's role hierarchy."
    ],
    correctIndex: 2,
    explanation: "The Einstein Trust Layer guarantees data privacy by masking PII, filtering toxic content, and enforcing a zero-data-retention policy with LLM partners."
  },
  {
    id: 306,
    category: "Agent Actions",
    question: "How can an administrator expose a Salesforce Flow to an Agentforce Agent as a callable Action?",
    options: [
      "By adding the Flow to the Agent's Topic and defining clear Action descriptions.",
      "By adding a script tag to the Lightning page.",
      "By rewriting the Flow as an invocable Apex class.",
      "By changing the Flow type to 'Screen Flow' only."
    ],
    correctIndex: 0,
    explanation: "Flows can be exposed directly as Actions. The agent's dynamic planner uses the Action's description to understand when and how to call it, so clear descriptions are critical."
  },
  {
    id: 307,
    category: "Agent Actions",
    question: "What is a constraint when writing @InvocableMethod Apex classes for Agentforce actions?",
    options: [
      "The method must be static, public or global, and accept a List of inputs.",
      "The method can return any number of output parameters without lists.",
      "The method must not make any SOQL queries.",
      "The class must implement the Queueable interface."
    ],
    correctIndex: 0,
    explanation: "Apex invocable methods must be static, public/global, and accept a List of inputs to support bulk execution patterns in Salesforce."
  },
  {
    id: 308,
    category: "Agentforce Configuration",
    question: "Where does an administrator define the core personality, boundaries, and general rules of an Agentforce Agent?",
    options: [
      "System Instructions in the Agent configuration profile.",
      "In the OWD security settings.",
      "In the prompt templates.",
      "In the Experience Cloud widget settings."
    ],
    correctIndex: 0,
    explanation: "System Instructions define the agent's identity, tone, general behavior, constraints, and how it handles greeting and handoff requests."
  },
  {
    id: 309,
    category: "Agent Studio",
    question: "Which tool in Agent Studio allows admins to test conversational turns, inspect classification, and view which actions were triggered?",
    options: [
      "Conversation Debugger Console",
      "Flow Builder Debugger",
      "Apex Test Execution Console",
      "Event Log Viewer"
    ],
    correctIndex: 0,
    explanation: "The Conversation Debugger inside Agent Studio lets you chat with the agent in real-time, showing which Topic was matched and what Actions were planned."
  },
  {
    id: 310,
    category: "Agentforce Channels",
    question: "An administrator wants to embed an Agentforce agent on an external, non-Salesforce company website. Which channel deployment should they use?",
    options: [
      "Embedded Service Chat Web Deployment",
      "Lightning Experience Utility Bar",
      "Experience Cloud Component",
      "API Outbound Message"
    ],
    correctIndex: 0,
    explanation: "Embedded Service Chat (Web Deployment) generates the HTML/JS snippet needed to embed the agent client on external websites."
  },
  {
    id: 311,
    category: "Agentforce Configuration",
    question: "What happens when an Agentforce agent encounters a request it cannot resolve or classify?",
    options: [
      "It routes the session to a live support agent based on handoff rules.",
      "It shuts down the chat widget and logs out the student.",
      "It starts guessing random answers to satisfy the user query.",
      "It raises a Salesforce system exception and halts the server."
    ],
    correctIndex: 0,
    explanation: "Agents support handoff capabilities. When a query is out of scope or requires human assistance, it escalates the conversation to a live agent."
  },
  {
    id: 312,
    category: "Einstein Event Logs",
    question: "Which Setup page in Salesforce allows auditing of detailed transaction events, including exact prompt payloads and LLM responses?",
    options: [
      "Einstein Copilot Event Logs",
      "Debug Logs",
      "Apex Jobs",
      "Security Health Check"
    ],
    correctIndex: 0,
    explanation: "Einstein Copilot Event Logs (or Agent Event Logs) display detailed transactional timelines showing what was received, how it was masked, the prompt sent, and the LLM's response."
  },
  {
    id: 313,
    category: "Agentforce Channels",
    question: "Why must the site domain be added to CORS and CSP trust settings in Setup for web widgets?",
    options: [
      "To allow the client browser to load script resources and connect to Salesforce servers safely.",
      "To sync database records between the site and Salesforce.",
      "To authenticate users automatically.",
      "To allow Google search crawlers to scan the widget content."
    ],
    correctIndex: 0,
    explanation: "Cross-Origin Resource Sharing (CORS) and Content Security Policy (CSP) allow the external site to safely load Salesforce scripts and make requests to Salesforce API endpoints."
  },
  {
    id: 314,
    category: "Agent Actions",
    question: "If an Agentforce action requires a 'Contact ID' parameter but the user only types their email address, what does the agent do?",
    options: [
      "It automatically runs other actions or queries to resolve the email address to a Contact ID, or asks the user.",
      "It throws an immediate error and cancels the conversation.",
      "It passes the email address directly to the ID field.",
      "It skips the action execution entirely."
    ],
    correctIndex: 0,
    explanation: "The planner can attempt to resolve parameters using entity extraction, other action outputs, or by asking the user to supply the missing information."
  },
  {
    id: 315,
    category: "Salesforce Trust Layer",
    question: "Which Einstein Trust Layer setting is used to detect, score, and block profanity or offensive inputs in user chats?",
    options: [
      "Toxicity Detection and Filtering",
      "Data Masking",
      "Sentiment Analysis",
      "Audit Logging"
    ],
    correctIndex: 0,
    explanation: "Toxicity detection scores user inputs and agent outputs for hate speech, harassment, sexual content, and violence, blocking toxic exchanges according to configured thresholds."
  }
];
