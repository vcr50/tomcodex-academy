/** @jest-environment node */

import fs from "node:fs";
import vm from "node:vm";

function loadAdminCourse() {
  const context = { window: {} };
  vm.createContext(context);
  vm.runInContext(fs.readFileSync("js/course-admin.js", "utf8"), context);
  return context.window.TomCodexCourseConfig;
}

describe("Admin course continuous project curriculum", () => {
  const course = loadAdminCourse();
  const modules = course.modules;

  test("keeps the ten-module Admin roadmap", () => {
    expect(modules).toHaveLength(10);
    expect(modules[0].title).toBe("Cloud & Salesforce Platform Foundations");
    expect(modules[9].title).toBe("Data Management, Deployment, and Maintenance");
  });

  test("contains the Salesforce Administrator and Advanced Administrator sub-courses", () => {
    expect(course.subCourses.map((subCourse) => subCourse.title)).toEqual([
      "Salesforce Administrator",
      "Salesforce Advanced Administrator"
    ]);
    expect(modules.slice(0, 6).every((module) => module.subCourse.id === "administrator")).toBe(true);
    expect(modules.slice(6).every((module) => module.subCourse.id === "advanced-administrator")).toBe(true);
  });

  test("maps every roadmap phase and topic into the primary TomCodeX syllabus", () => {
    expect(course.roadmapCoverage).toHaveLength(29);
    expect(course.roadmapCoverage.filter((entry) => entry.phase.startsWith("Phase "))).toHaveLength(28);
    expect(course.roadmapCoverage.some((entry) => entry.phase === "Capstone Projects")).toBe(true);

    course.roadmapCoverage.forEach((entry) => {
      const module = modules[entry.module];
      const roadmapLesson = module.richContent.mainSyllabus;
      expect(module.subCourse.id).toBe(entry.track);
      expect(roadmapLesson).toBeTruthy();
      expect(roadmapLesson.title).toContain("Main Syllabus");
      expect(roadmapLesson.introduction).toContain("primary study resource");
      expect(roadmapLesson.content).toContain("roadmap-phase-summary");
      const detailedPurposePracticePhase = entry.phase.startsWith("Phase 1:")
        || entry.phase.startsWith("Phase 2:")
        || entry.phase.startsWith("Phase 3:")
        || entry.phase.startsWith("Phase 6:");
      if (detailedPurposePracticePhase) {
        expect(roadmapLesson.content).toContain("Purpose:");
        expect(roadmapLesson.content).toContain("Practice:");
        expect(roadmapLesson.content).toContain("Required proof:");
        expect(roadmapLesson.content).toContain("Zentom AI Validation Criteria");
      } else {
        expect(roadmapLesson.content).toContain("Explanation:");
        expect(roadmapLesson.content).toContain("Task-based practice:");
      }
      expect(roadmapLesson.content).toContain("Guided phase lab");
      expect(roadmapLesson.content).toContain(
        detailedPurposePracticePhase ? "Required evidence" : "Evidence to submit"
      );
      expect(roadmapLesson.content).toContain("Official Trailhead");
      expect(roadmapLesson.content).toContain("trailhead.salesforce.com");
      expect(roadmapLesson.content).toContain("Summary Explanation:");
      expect(roadmapLesson.content).toContain("Docs:");
      expect(roadmapLesson.content).toContain("Salesforce Docs:");
      expect(roadmapLesson.content).toContain("Free video:");
      expect(roadmapLesson.content).toContain("TomCodeX Trailmix modules for this phase");
      expect(roadmapLesson.content).toContain("Trailhead is mapped at phase/module level");
      expect(roadmapLesson.content).not.toContain("trailhead.salesforce.com/search?keywords=");
      expect(roadmapLesson.content).toContain("help.salesforce.com/");
      expect(roadmapLesson.content).toContain("youtube.com/results?search_query=");
      entry.topics.forEach((topic) => {
        expect(module.points).toContain(topic);
        expect(roadmapLesson.content).toContain(topic);
      });
    });
  });

  test("keeps roadmap content out of the supporting accordion lesson library", () => {
    modules.forEach((module, moduleIndex) => {
      expect(module.richContent.mainSyllabus.content).toContain("roadmap-phase-summary");
      expect(module.richContent.mainSyllabus.content).toContain(moduleIndex < 4 ? "Practice:" : "Task-based practice:");
      expect(module.richContent.mainSyllabus.content).toContain("Official Trailhead");
      expect(module.richContent.detailedLessonSections.some(
        (section) => section.title === "TomCodeX Syllabus Roadmap Coverage"
      )).toBe(false);
    });
  });

  test("uses the detailed Phase 1 org-readiness and custom-app syllabus", () => {
    const phaseOne = course.roadmapCoverage.find((entry) => entry.phase.startsWith("Phase 1:"));
    const content = modules[phaseOne.module].richContent.mainSyllabus.content;

    expect(phaseOne.topics).toContain("AppExchange Risk Review - Installation Not Required");
    expect(phaseOne.topics).not.toContain("Install a Free AppExchange Package");
    expect(content).toContain("Understand how cloud platforms deliver software through the internet without local installation.");
    expect(content).toContain("Classify Salesforce CRM as SaaS and Salesforce Platform as PaaS");
    expect(content).toContain("TomCodeX Student Success CRM");
    expect(content).toContain("Guided Phase Lab: Org Readiness and Custom App Setup".replace("Guided Phase Lab: ", ""));
    expect(content).toContain("Business scenario:");
    expect(content).toContain("Zentom AI Validation Criteria");
    expect(content).toContain("Review an AppExchange package safely before installation.");
    expect(content).toContain("Passing Score:</strong> 80%");
  });

  test("keeps Module 1 simple, practical, masked, and confidence-building", () => {
    const module = modules[0];
    const rich = module.richContent;

    expect(rich.learningOutcomes).toHaveLength(6);
    expect(rich.learningOutcomes.join(" ")).toContain("masked Organization ID only");
    expect(rich.projectEvidence.join(" ")).toContain("masked Organization ID only");
    expect(rich.projectTask.steps.join(" ")).toContain("Install or Do Not Install");
    expect(rich.labCriteria).toHaveLength(7);
    expect(rich.labCriteria.map((criterion) => criterion.id)).toEqual([
      "cloud_crm",
      "navigation",
      "foundation_terms",
      "custom_app",
      "project_evidence",
      "practice_org_safety",
      "appexchange_review"
    ]);
    expect(rich.practicalAssignment).toEqual([]);
    expect(rich.knowledgeCheckQuestions).toEqual([]);
    expect(rich.completionChecklist).toHaveLength(8);
    expect(rich.completionChecklist[7]).toContain("80% or higher");
    expect(rich.handsOnLab.instructions).toContain("Guided Phase Lab story");
    expect(rich.handsOnLab.instructions).not.toContain("<ol");
    expect(rich.detailedLessonSections.filter((section) => section.title.startsWith("Optional Admin Deep-Dive:")).length).toBeGreaterThanOrEqual(5);
  });

  test("uses a simple connected Student Success CRM data model for Module 2", () => {
    const phaseTwo = course.roadmapCoverage.find((entry) => entry.phase.startsWith("Phase 2:"));
    const module = modules[1];
    const rich = module.richContent;
    const content = rich.mainSyllabus.content;

    expect(module.title).toBe("Data Modeling & Object Configuration");
    expect(phaseTwo.topics).toContain("Create Student Object");
    expect(phaseTwo.topics).toContain("Create Course Object");
    expect(phaseTwo.topics).toContain("Create Course Enrollment Junction Object");
    expect(phaseTwo.topics).not.toContain("Create Employee Object");
    expect(content).toContain("Guided Phase Lab: Student Success CRM Data Model".replace("Guided Phase Lab: ", ""));
    expect(content).toContain("Zentom AI Validation Criteria");
    expect(content).toContain("Passing Score:</strong> 80%");
    expect(rich.learningOutcomes).toHaveLength(6);
    expect(rich.projectTask.steps).toHaveLength(3);
    expect(rich.projectTask.steps.join(" ")).toContain("Student__c");
    expect(rich.projectTask.steps.join(" ")).toContain("Schema Builder");
    expect(rich.practicalAssignment).toEqual([]);
    expect(rich.knowledgeCheckQuestions).toEqual([]);
    expect(rich.completionChecklist).toHaveLength(8);
    expect(rich.labCriteria).toHaveLength(7);
    expect(rich.labCriteria.map((criterion) => criterion.id)).toEqual([
      "object_model",
      "api_names",
      "field_types",
      "relationships",
      "junction_object",
      "sample_records",
      "project_evidence"
    ]);
    expect(rich.handsOnLab.instructions).not.toContain("<ol");
    expect(rich.detailedLessonSections.filter((section) => section.title.startsWith("Optional Admin Deep-Dive:")).length).toBeGreaterThanOrEqual(5);
  });

  test("uses a focused Tutor and Program Manager security model for Module 3", () => {
    const phaseSix = course.roadmapCoverage.find((entry) => entry.phase.startsWith("Phase 6:"));
    const module = modules[2];
    const rich = module.richContent;
    const content = rich.mainSyllabus.content;

    expect(module.title).toBe("User Access and Security");
    expect(phaseSix.topics).toContain("Permission Sets");
    expect(phaseSix.topics).toContain("Field-Level Security");
    expect(content).toContain("Guided Phase Lab: Tutor and Program Manager Access Model".replace("Guided Phase Lab: ", ""));
    expect(content).toContain("Zentom AI Validation Criteria");
    expect(content).toContain("Passing Score:</strong> 80%");
    expect(rich.learningOutcomes).toHaveLength(6);
    expect(rich.projectTask.steps).toHaveLength(3);
    expect(rich.projectTask.expected).toContain("Tutors receive only the access needed");
    expect(rich.projectEvidence.join(" ")).toContain("Access-test table");
    expect(rich.labCriteria).toHaveLength(7);
    expect(rich.labCriteria.map((criterion) => criterion.id)).toEqual([
      "security_layers",
      "persona_model",
      "permission_set",
      "field_security",
      "record_access",
      "access_tests",
      "project_evidence"
    ]);
    expect(rich.handsOnLab.instructions).not.toContain("<ol");
    expect(rich.finalSummary).toContain("least-privilege");
  });

  test("uses a focused Student Success CRM user experience build for Module 4", () => {
    const phaseThree = course.roadmapCoverage.find((entry) => entry.phase.startsWith("Phase 3:"));
    const module = modules[3];
    const rich = module.richContent;
    const content = rich.mainSyllabus.content;

    expect(module.title).toBe("Page Layouts, Lightning App, and User Experience");
    expect(phaseThree.topics).toContain("Lightning Record Pages");
    expect(phaseThree.topics).toContain("Quick Actions");
    expect(content).toContain("Guided Phase Lab: Student Success CRM User Experience".replace("Guided Phase Lab: ", ""));
    expect(content).toContain("Zentom AI Validation Criteria");
    expect(content).toContain("Passing Score:</strong> 80%");
    expect(rich.learningOutcomes).toHaveLength(6);
    expect(rich.projectTask.steps).toHaveLength(3);
    expect(rich.projectTask.expected).toContain("one Student Success CRM app");
    expect(rich.projectEvidence.join(" ")).toContain("Active Students");
    expect(rich.labCriteria).toHaveLength(7);
    expect(rich.labCriteria.map((criterion) => criterion.id)).toEqual([
      "ui_layers",
      "app_navigation",
      "page_layouts",
      "record_page",
      "list_views",
      "quick_action",
      "project_evidence"
    ]);
    expect(rich.handsOnLab.instructions).not.toContain("<ol");
    expect(rich.finalSummary).toContain("Student Success CRM user experience");
  });

  test("uses validation rules and data quality config for Module 5", () => {
    const phaseFour = course.roadmapCoverage.find((entry) => entry.phase.startsWith("Phase 4:"));
    const module = modules[4];
    const rich = module.richContent;
    const content = rich.mainSyllabus.content;

    expect(module.title).toBe("Validation Rules and Data Quality");
    expect(phaseFour.topics).toContain("Validation Rules");
    expect(phaseFour.topics).toContain("Formula Fields");
    expect(content).toContain("Explanation:");
    expect(content).toContain("Task-based practice:");
    expect(content).toContain("Evidence to submit");
    expect(rich.learningOutcomes).toHaveLength(5);
    expect(rich.projectTask.steps).toHaveLength(6);
    expect(rich.projectEvidence).toHaveLength(3);
    expect(rich.labCriteria).toHaveLength(7);
    expect(rich.labCriteria.map((criterion) => criterion.id)).toEqual([
      "validation_use_case",
      "email_validation",
      "enrollment_validation",
      "formula_vs_validation",
      "testing_boundaries",
      "project_evidence",
      "data_quality_impact"
    ]);
    expect(rich.handsOnLab.instructions).toContain("<ol");
    expect(rich.detailedLessonSections.filter((section) => section.title.startsWith("Optional Admin Deep-Dive:")).length).toBeGreaterThanOrEqual(1);
  });

  test("uses sales, service, reports, and dashboards config for Module 6", () => {
    const phaseFive = course.roadmapCoverage.find((entry) => entry.phase.startsWith("Phase 5:"));
    const module = modules[5];
    const rich = module.richContent;
    const content = rich.mainSyllabus.content;

    expect(module.title).toBe("Sales, Service, Reports, and Dashboards");
    expect(phaseFive.topics).toContain("Leads");
    expect(phaseFive.topics).toContain("Opportunities");
    expect(content).toContain("Explanation:");
    expect(content).toContain("Task-based practice:");
    expect(content).toContain("Evidence to submit");
    expect(rich.learningOutcomes).toHaveLength(4);
    expect(rich.projectTask.steps).toHaveLength(7);
    expect(rich.projectEvidence).toHaveLength(3);
    expect(rich.labCriteria).toHaveLength(7);
    expect(rich.labCriteria.map((criterion) => criterion.id)).toEqual([
      "reports_created",
      "dashboard_components",
      "report_filtering",
      "folder_security",
      "business_value",
      "project_evidence",
      "standard_objects_use"
    ]);
    expect(rich.handsOnLab.instructions).toContain("<ol");
    expect(rich.detailedLessonSections.filter((section) => section.title.startsWith("Optional Admin Deep-Dive:")).length).toBeGreaterThanOrEqual(1);
  });

  test("uses flow automation foundations config for Module 7", () => {
    const module = modules[6];
    const rich = module.richContent;
    const content = rich.mainSyllabus.content;

    expect(module.title).toBe("Flow Automation Foundations");
    expect(content).toContain("Explanation:");
    expect(content).toContain("Task-based practice:");
    expect(content).toContain("Evidence to submit");
    expect(rich.learningOutcomes).toHaveLength(7);
    expect(rich.projectTask.steps).toHaveLength(7);
    expect(rich.projectEvidence).toHaveLength(3);
    expect(rich.labCriteria).toHaveLength(7);
    expect(rich.labCriteria.map((criterion) => criterion.id)).toEqual([
      "flow_trigger",
      "task_creation",
      "duplicate_prevention",
      "flow_debugging",
      "platform_events",
      "project_evidence",
      "autolaunched_flows"
    ]);
    expect(rich.handsOnLab.instructions).toContain("<ol");
    expect(rich.detailedLessonSections.filter((section) => section.title.startsWith("Optional Admin Deep-Dive:")).length).toBeGreaterThanOrEqual(1);
  });

  test("uses flow automation intermediate config for Module 8", () => {
    const phaseEight = course.roadmapCoverage.find((entry) => entry.phase.startsWith("Phase 8:"));
    const module = modules[7];
    const rich = module.richContent;
    const content = rich.mainSyllabus.content;

    expect(module.title).toBe("Flow Automation Intermediate");
    expect(phaseEight.topics).toContain("Screen Flow");
    expect(phaseEight.topics).toContain("Record Triggered Flow");
    expect(content).toContain("Explanation:");
    expect(content).toContain("Task-based practice:");
    expect(content).toContain("Evidence to submit");
    expect(rich.learningOutcomes).toHaveLength(7);
    expect(rich.projectTask.steps).toHaveLength(7);
    expect(rich.projectEvidence).toHaveLength(3);
    expect(rich.labCriteria).toHaveLength(7);
    expect(rich.labCriteria.map((criterion) => criterion.id)).toEqual([
      "flow_trigger",
      "subflow_integration",
      "fault_handling",
      "asynchronous_paths",
      "bulk_considerations",
      "project_evidence",
      "variables_formulas"
    ]);
    expect(rich.handsOnLab.instructions).toContain("<ol");
    expect(rich.detailedLessonSections.filter((section) => section.title.startsWith("Optional Admin Deep-Dive:")).length).toBeGreaterThanOrEqual(1);
  });

  test("uses approvals, AI, and change management config for Module 9", () => {
    const phaseSeven = course.roadmapCoverage.find((entry) => entry.phase.startsWith("Phase 7:"));
    const module = modules[8];
    const rich = module.richContent;
    const content = rich.mainSyllabus.content;

    expect(module.title).toBe("Approvals, AI, and Change Management");
    expect(phaseSeven.topics).toContain("Approval Processes");
    expect(content).toContain("Explanation:");
    expect(content).toContain("Task-based practice:");
    expect(content).toContain("Evidence to submit");
    expect(rich.learningOutcomes).toHaveLength(4);
    expect(rich.projectTask.steps).toHaveLength(7);
    expect(rich.projectEvidence).toHaveLength(3);
    expect(rich.labCriteria).toHaveLength(7);
    expect(rich.labCriteria.map((criterion) => criterion.id)).toEqual([
      "approval_process",
      "approval_lifecycle",
      "agentforce_governance",
      "change_management",
      "project_evidence",
      "ai_trust_layer",
      "prompt_builder_use"
    ]);
    expect(rich.handsOnLab.instructions).toContain("<ol");
    expect(rich.detailedLessonSections.filter((section) => section.title.startsWith("Optional Admin Deep-Dive:")).length).toBeGreaterThanOrEqual(1);
  });

  test("uses data management, deployment, and maintenance config for Module 10", () => {
    const phaseNine = course.roadmapCoverage.find((entry) => entry.phase.startsWith("Phase 9:"));
    const module = modules[9];
    const rich = module.richContent;
    const content = rich.mainSyllabus.content;

    expect(module.title).toBe("Data Management, Deployment, and Maintenance");
    expect(phaseNine.topics).toContain("Data Import");
    expect(phaseNine.topics).toContain("Data Loader");
    expect(content).toContain("Explanation:");
    expect(content).toContain("Task-based practice:");
    expect(content).toContain("Evidence to submit");
    expect(rich.learningOutcomes).toHaveLength(4);
    expect(rich.projectTask.steps).toHaveLength(7);
    expect(rich.projectEvidence).toHaveLength(4);
    expect(rich.labCriteria).toHaveLength(7);
    expect(rich.labCriteria.map((criterion) => criterion.id)).toEqual([
      "data_migration",
      "duplicate_rules",
      "deployment_checklist",
      "production_operations",
      "agentforce_launch",
      "project_evidence",
      "git_branching"
    ]);
    expect(rich.handsOnLab.instructions).toContain("<ol");
    expect(rich.detailedLessonSections.filter((section) => section.title.startsWith("Optional Admin Deep-Dive:")).length).toBeGreaterThanOrEqual(1);
  });

  test("uses the final 18-step Admin learning order without duplicate assignment sections", () => {
    const html = fs.readFileSync("course-admin.html", "utf8");
    const steps = [
      "Step 1: Module Goal",
      "Step 2: Learning Outcomes",
      "Step 3: Simple Explanation",
      "Step 4: Real Business Example",
      "Step 5: Where It Is Used",
      "Step 6: Step-by-Step Walkthrough",
      "Step 7: Trailhead Hands-on Practice",
      "Step 8: TomCodeX Hands-on Project Task",
      "Step 9: Project Evidence Required",
      "Step 10: Best Practices",
      "Step 11: Common Mistakes",
      "Step 12: Why This Matters in Job",
      "Step 13: Interview Key Questions",
      "Step 14: Hands-on Practice Lab",
      "Step 15: Check My Work",
      "Step 16: Zentom AI Mastery Test",
      "Step 17: Module Completion Checklist",
      "Step 18: Final Summary"
    ];
    steps.reduce((previousPosition, step) => {
      const position = html.indexOf(step);
      expect(position).toBeGreaterThan(previousPosition);
      return position;
    }, -1);
    expect(html).not.toContain("Practical Assignment");
    expect(html).not.toContain("Check My Knowledge Questions");
  });

  test("keeps Module 8 and Module 10 syllabus content related to the selected module", () => {
    const moduleEight = modules[7].richContent.mainSyllabus.content;
    const moduleTen = modules[9].richContent.mainSyllabus.content;

    expect(moduleEight).toContain("Phase 8: Lightning Flows");
    expect(moduleEight).not.toContain("Phase 10: Reports & Dashboards");
    expect(moduleEight).not.toContain("Phase 26: Salesforce DevOps Pipeline");

    expect(moduleTen).toContain("Phase 9: Data Management");
    expect(moduleTen).toContain("Phase 26: Salesforce DevOps Pipeline");
    expect(moduleTen).toContain("Capstone Projects");
    expect(moduleTen).not.toContain("Phase 8: Lightning Flows");
  });

  test("provides top previous and next controls through shared related-module navigation", () => {
    const html = fs.readFileSync("course-admin.html", "utf8");
    const masteryScript = fs.readFileSync("js/course-mastery.js", "utf8");

    expect(html).toContain('id="previousModuleTopBtn"');
    expect(html).toContain('id="nextModuleTopBtn"');
    expect(masteryScript).toContain("function navigateToAdjacentModule(direction)");
    expect(masteryScript).toContain("selectModuleAndShowContent(targetIndex)");
    expect(masteryScript).toContain("updateModuleNavigationButtons(isPassed)");
  });

  test("uses one-based shareable module URLs for unique Admin module pages", () => {
    const masteryScript = fs.readFileSync("js/course-mastery.js", "utf8");

    expect(masteryScript).toContain('new URLSearchParams(window.location.search).get("module")');
    expect(masteryScript).toContain("requestedModuleNumber - 1");
    expect(masteryScript).toContain('selectedUrl.searchParams.set("module", String(index + 1))');
    expect(masteryScript).toContain("window.history.replaceState");
  });

  test("routes developer implementation depth out of Advanced Admin", () => {
    const developmentSyllabus = fs.readFileSync("Salesforce Development Syllbus .md", "utf8");
    const moduleTen = modules[9].richContent.mainSyllabus.content;

    expect(developmentSyllabus).toContain("Developer topics must not be placed as full coding lessons inside the Admin course.");
    expect(developmentSyllabus).toContain("# Development Path 1: Apex Development");
    expect(developmentSyllabus).toContain("# Development Path 2: Salesforce Flow");
    expect(developmentSyllabus).toContain("# Development Path 3: Lightning Web Components");
    expect(developmentSyllabus).toContain("# Development Path 4: Salesforce Integration");
    expect(developmentSyllabus).toContain("# Development Path 5: Salesforce Agentforce");

    expect(moduleTen).toContain("awareness, monitoring, governance, and developer-handoff level");
    expect(moduleTen).toContain('href="course-apex.html"');
    expect(moduleTen).toContain('href="course-integration.html"');
    expect(moduleTen).toContain('href="course-apex.html?module=11"');
  });

  test.each(modules.map((module, index) => [index + 1, module]))(
    "module %s contains both practice tracks and complete project requirements",
    (_moduleNumber, module) => {
      const rich = module.richContent;
      expect(rich.trailheadPractice.resources.length).toBeGreaterThan(0);
      expect(rich.trailheadPractice.tasks.length).toBeGreaterThan(0);
      expect(rich.projectName).toBe("TomCodeX Student Success CRM + Agentforce Assistant");
      expect(rich.projectTask.title).toBeTruthy();
      expect(rich.projectTask.purpose).toBeTruthy();
      expect(rich.projectTask.steps.length).toBeGreaterThan(0);
      expect(rich.projectTask.objects.length).toBeGreaterThan(0);
      expect(rich.projectTask.fields.length).toBeGreaterThan(0);
      expect(rich.projectTask.flows.length).toBeGreaterThan(0);
      expect(rich.projectTask.reportsDashboards.length).toBeGreaterThan(0);
      expect(rich.projectTask.apexLwc.length).toBeGreaterThan(0);
      expect(rich.projectTask.expected).toBeTruthy();
      expect(rich.projectEvidence.length).toBeGreaterThan(0);
      expect(rich.projectTask.validation.length).toBeGreaterThan(0);
      expect(rich.labCriteria.some((criterion) => criterion.id === "project_evidence")).toBe(true);
    }
  );

  test.each(modules.map((module, index) => [index + 1, module]))(
    "module %s uses the cleaned no-duplicate Admin module structure",
    (_moduleNumber, module) => {
      const rich = module.richContent;
      expect(rich.practicalAssignment).toEqual([]);
      expect(rich.knowledgeCheckQuestions).toEqual([]);
      expect(rich.completionChecklist).toHaveLength(8);
      expect(rich.completionChecklist.at(-1)).toContain("80% or higher");
      expect(rich.handsOnLab?.instructions || "").not.toContain("Connected project task:");
      expect(rich.handsOnLab?.instructions || "").not.toContain("Deep-dive evidence");
      expect(rich.labCriteria.some((criterion) => criterion.id === "deep_evidence")).toBe(false);
      expect(rich.detailedLessonSections.some((section) => section.title.startsWith("Optional Admin Deep-Dive:"))).toBe(true);
    }
  );

  test.each(modules.map((module, index) => [index + 1, module]))(
    "module %s has the required 10/3/2 mastery format",
    (_moduleNumber, module) => {
      const questions = module.richContent.masteryTest;
      expect(questions).toHaveLength(15);
      expect(questions.filter((question) => question.type === "mcq")).toHaveLength(10);
      expect(questions.filter((question) => question.type === "scenario")).toHaveLength(3);
      expect(questions.filter((question) => question.type === "practical")).toHaveLength(2);
      expect(module.richContent.masteryEvaluationCriteria).toEqual([
        "Concept understanding",
        "Hands-on completion",
        "Correct Salesforce naming",
        "Business explanation",
        "Mistake awareness",
        "Real-time job readiness"
      ]);
    }
  );
});
