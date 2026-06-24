/** @jest-environment node */

import fs from "node:fs";
import vm from "node:vm";

function loadPocCourse(selectedProject = "student") {
  const context = {
    window: {},
    localStorage: {
      getItem: () => selectedProject,
      setItem: () => undefined
    },
    document: {
      addEventListener: () => undefined
    },
    location: {
      reload: () => undefined
    }
  };
  vm.createContext(context);
  vm.runInContext(fs.readFileSync("js/course-poc.js", "utf8"), context);
  return context.window.TomCodexCourseConfig;
}

describe("Final POC course curriculum", () => {
  test.each([
    ["student", "Student Success CRM"],
    ["realestate", "Real Estate CRM"],
    ["healthcare", "Healthcare Patient CRM"],
    ["custom", "Custom Salesforce CRM"]
  ])("%s project option has the capstone build contract", (projectKey, projectLabel) => {
    const course = loadPocCourse(projectKey);

    expect(course.courseName).toBe("Final POC Project");
    expect(course.subCourses.map((stage) => stage.title)).toEqual([
      "Stage 1: Capstone Discovery and Foundation",
      "Stage 2: Capstone Automation, UI and Release"
    ]);
    expect(course.modules).toHaveLength(4);

    course.modules.forEach((module, index) => {
      const rich = module.richContent;
      expect(module.subCourse.title).toContain("Stage ");
      expect(module.masteryStage.title).toBe(module.subCourse.title);
      expect(rich.mainSyllabus.title).toBe("Salesforce Final POC Capstone Build Syllabus");
      expect(rich.mainSyllabus.content).toContain("roadmap-phase-summary");
      expect(rich.mainSyllabus.content).toContain("Required capstone work");
      expect(rich.projectName).toBe(`TomCodeX ${projectLabel} Capstone`);
      expect(rich.projectTask.artifact).toContain(module.title);
      expect(rich.projectTask.steps.join(" ")).toContain("LEITR");
      expect(rich.projectEvidence).toHaveLength(6);
      expect(rich.projectEvidence.join(" ")).toContain("LEITR");
      expect(rich.labCriteria).toHaveLength(6);
      expect(rich.labCriteria.map((criterion) => criterion.id)).toContain("leitr_review");
      expect(rich.masteryTest).toHaveLength(15);
      expect(rich.masteryTest.filter((q) => q.type === "mcq")).toHaveLength(10);
      expect(rich.masteryTest.filter((q) => q.type === "scenario")).toHaveLength(3);
      expect(rich.masteryTest.filter((q) => q.type === "practical")).toHaveLength(2);
      expect(rich.masteryEvaluationCriteria).toContain("Release readiness");
      expect(rich.projectConnection.buildsNow).toBe(module.title);
      expect(rich.projectConnection.preparesNext).toBe(course.modules[index + 1]?.title || "Final portfolio demo and interview walkthrough");
    });
  });

  test("POC page contains rich course selectors and capstone sections", () => {
    const html = fs.readFileSync("course-poc.html", "utf8");

    expect(html).toContain("12+ hours");
    expect(html).toContain("4 modules");
    expect(html).toContain("0 / 4");
    expect(html).toContain('id="pocProjectSelector"');
    expect(html).toContain('id="moduleSelect"');
    expect(html).toContain('id="previousModuleTopBtn"');
    expect(html).toContain('id="nextModuleTopBtn"');
    expect(html).toContain('id="projectConnectionSection"');
    expect(html).toContain('id="richMainSyllabusSection"');
    expect(html).toContain('id="richDetailedLessonSection"');
    expect(html).toContain('id="richTrailheadPracticeSection"');
    expect(html).toContain('id="richProjectTaskSection"');
    expect(html).toContain('id="richProjectEvidenceSection"');
    expect(html).toContain("TomCodeX LEITR study system");
    expect(html).toContain("POC Deep-Dive Lesson Library");
    expect(html).toContain("TomCodeX POC Project Task");
    expect(html).not.toContain("`r`n");
  });
});