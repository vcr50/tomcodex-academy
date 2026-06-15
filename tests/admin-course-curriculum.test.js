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
    expect(modules[0].title).toBe("Salesforce Platform Foundations");
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
      expect(roadmapLesson.content).toContain("Explanation:");
      expect(roadmapLesson.content).toContain("Task-based practice:");
      expect(roadmapLesson.content).toContain("Guided phase lab");
      expect(roadmapLesson.content).toContain("Evidence to submit");
      expect(roadmapLesson.content).toContain("Official Trailhead");
      expect(roadmapLesson.content).toContain("trailhead.salesforce.com");
      entry.topics.forEach((topic) => {
        expect(module.points).toContain(topic);
        expect(roadmapLesson.content).toContain(topic);
      });
    });
  });

  test("keeps roadmap content out of the supporting accordion lesson library", () => {
    modules.forEach((module) => {
      expect(module.richContent.mainSyllabus.content).toContain("roadmap-phase-summary");
      expect(module.richContent.mainSyllabus.content).toContain("Task-based practice:");
      expect(module.richContent.mainSyllabus.content).toContain("Official Trailhead");
      expect(module.richContent.detailedLessonSections.some(
        (section) => section.title === "TomCodeX Syllabus Roadmap Coverage"
      )).toBe(false);
    });
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
