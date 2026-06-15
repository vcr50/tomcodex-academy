/** @jest-environment node */

import fs from "node:fs";
import vm from "node:vm";

function loadFlowCourse() {
  const context = { window: {} };
  vm.createContext(context);
  vm.runInContext(fs.readFileSync("js/course-flow.js", "utf8"), context);
  return context.window.TomCodexCourseConfig;
}

describe("Flow course Admin-pattern curriculum", () => {
  const course = loadFlowCourse();

  test("keeps the twelve-module Salesforce Flow path", () => {
    expect(course.courseName).toBe("Salesforce Flow");
    expect(course.subCourses.map((stage) => stage.title)).toEqual([
      "Stage 1: Flow Foundations",
      "Stage 2: Intermediate Flow Builder",
      "Stage 3: Advanced Flow Automation",
      "Stage 4: Flow Mastery and Capstone"
    ]);
    expect(course.modules).toHaveLength(12);
    expect(course.modules[0].title).toBe("Flow Builder Foundations");
    expect(course.modules[11].title).toBe("Deployment and Flow Capstone");
    expect(course.modules.slice(0, 3).every((module) => module.masteryStage.id === "foundation")).toBe(true);
    expect(course.modules.slice(3, 6).every((module) => module.masteryStage.id === "intermediate")).toBe(true);
    expect(course.modules.slice(6, 9).every((module) => module.masteryStage.id === "advanced")).toBe(true);
    expect(course.modules.slice(9).every((module) => module.masteryStage.id === "mastery")).toBe(true);
  });

  test.each(course.modules.map((module, index) => [index + 1, module]))(
    "module %s follows the rich Admin-pattern learning contract",
    (_moduleNumber, module) => {
      const rich = module.richContent;
      expect(module.subCourse.title).toContain("Stage ");
      expect(rich.mainSyllabus.content).toContain("roadmap-phase-summary");
      expect(rich.mainSyllabus.content).toContain(module.masteryStage.title);
      expect(rich.mainSyllabus.title).toBe("Salesforce Flow Practical Build Syllabus");
      expect(rich.mainSyllabus.introduction).toContain("fully practical course");
      expect(rich.mainSyllabus.introduction).toContain("LEITR");
      expect(rich.mainSyllabus.content).toContain("Build requirement:");
      expect(rich.mainSyllabus.content).toContain("Required test:");
      expect(rich.mainSyllabus.content).toContain("Supporting Salesforce Trailhead resources");
      expect(rich.detailedLessonSections.length).toBeGreaterThan(0);
      expect(rich.trailheadPractice.resources.length).toBeGreaterThan(0);
      expect(rich.projectName).toBe("TomCodeX Service Request Automation");
      expect(rich.projectTask.flows.length).toBeGreaterThan(0);
      expect(rich.projectTask.steps.length).toBeGreaterThan(0);
      expect(rich.projectEvidence.length).toBeGreaterThan(0);
      expect(rich.projectTask.steps.length).toBeGreaterThanOrEqual(9);
      expect(rich.projectTask.steps.join(" ")).toContain("LEITR");
      expect(rich.projectEvidence.length).toBeGreaterThanOrEqual(6);
      expect(rich.projectEvidence.join(" ")).toContain("LEITR");
      expect(rich.projectEvidence.join(" ")).toContain("1:2 rule");
      expect(rich.projectEvidence.join(" ")).toContain("1 day, 3 days, and 7 days");
      expect(rich.labCriteria).toHaveLength(5);
      expect(rich.labCriteria.map((criterion) => criterion.id)).toEqual([
        "flow_identity",
        "flow_logic",
        "flow_tests",
        "flow_evidence",
        "leitr_review"
      ]);
      expect(rich.labCriteria.find((criterion) => criterion.id === "leitr_review").question).toContain("1:2 rule");
      expect(rich.labCriteria.find((criterion) => criterion.id === "leitr_review").question).toContain("1-day, 3-day, and 7-day review dates");
      expect(rich.masteryTest).toHaveLength(15);
    }
  );

  test("Flow page contains Admin-pattern selectors and rich syllabus sections", () => {
    const html = fs.readFileSync("course-flow.html", "utf8");
    [
      'id="moduleSelect"',
      'id="previousModuleTopBtn"',
      'id="nextModuleTopBtn"',
      'id="richMainSyllabusSection"',
      'id="richDetailedLessonSection"',
      'id="richTrailheadPracticeSection"',
      'id="richProjectTaskSection"',
      'id="richProjectEvidenceSection"'
    ].forEach((id) => expect(html).toContain(id));
    expect(html.indexOf('id="richProjectTaskSection"')).toBeLessThan(html.indexOf('id="richMainSyllabusSection"'));
    expect(html).toContain("Start Here: Build the Working Flow");
    expect(html).toContain("Required Practical Evidence");
    expect(html).toContain("Salesforce Flow Mastery");
    expect(html).toContain("Basic to advanced");
    expect(html).toContain("Flow mastery path");
    expect(html).toContain("TomCodeX LEITR study system");
    expect(html).toContain("Learn &gt; Explain &gt; Implement &gt; Test &gt; Review");
    expect(html).toContain("For every 1 hour learning, spend at least 2 hours implementing.");
  });
});
