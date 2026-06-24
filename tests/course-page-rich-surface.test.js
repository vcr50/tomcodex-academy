/** @jest-environment node */

import fs from "node:fs";

const coursePages = [
  ["Admin", "course-admin.html"],
  ["Flow", "course-flow.html"],
  ["Apex", "course-apex.html"],
  ["LWC", "course-lwc.html"],
  ["Integration", "course-integration.html"],
  ["Agentforce", "course-agentforce.html"],
  ["POC", "course-poc.html"]
];

const requiredSurface = [
  'id="moduleSelect"',
  'id="previousModuleTopBtn"',
  'id="nextModuleTopBtn"',
  'id="projectConnectionSection"',
  'id="richMainSyllabusSection"',
  'id="richDetailedLessonSection"',
  'id="richTrailheadPracticeSection"',
  'id="richProjectTaskSection"',
  'id="richProjectEvidenceSection"',
  'id="checkMyWorkSection"',
  'id="labCriteriaForm"',
  'id="masteryTestPanel"'
];

describe("finalized course page rich learner surface", () => {
  test.each(coursePages)("%s page keeps the shared finalized course UI", (_label, page) => {
    const html = fs.readFileSync(page, "utf8");
    requiredSurface.forEach((selector) => expect(html).toContain(selector));
    expect(html).toContain("TomCodeX LEITR study system");
    expect(html).toContain("10-part topic mastery lessons");
    expect(html).toContain("five answered interview questions");
    expect(html).not.toContain("`r`n");
  });
});
