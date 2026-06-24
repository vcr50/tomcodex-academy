/** @jest-environment node */

import fs from "node:fs";

const coursePages = [
  "course-admin.html",
  "course-flow.html",
  "course-apex.html",
  "course-lwc.html",
  "course-integration.html",
  "course-agentforce.html",
  "course-poc.html"
];

const courseScripts = [
  ["Admin", "js/course-admin.js", "Salesforce Administrator", "tomcodex.adminMasteryScores.v1", "admin"],
  ["Flow", "js/course-flow.js", "Salesforce Flow", "tomcodex.flowMasteryScores.v1", "flow"],
  ["Apex", "js/course-apex.js", "Apex Development", "tomcodex.apexMasteryScores.v1", "apex"],
  ["LWC", "js/course-lwc.js", "Lightning Web Components", "tomcodex.lwcMasteryScores.v1", "lwc"],
  ["Integration", "js/course-integration.js", "Salesforce Integration", "tomcodex.integrationMasteryScores.v1", "integration"],
  ["Agentforce", "js/course-agentforce.js", "Salesforce Agentforce", "tomcodex.agentforceMasteryScores.v1", "agentforce"],
  ["POC", "js/course-poc.js", "Final POC Project", "tomcodex.pocMasteryScores.v1", "poc"]
];

describe("course module startup selection", () => {
  const source = fs.readFileSync("js/course-mastery.js", "utf8");

  test("uses URL module requests first, then learner study history", () => {
    expect(source).toContain("function resolveInitialModule()");
    expect(source).toContain("if (isValidModuleIndex(requestedModule)) return requestedModule;");
    expect(source).toContain("return nextModuleFromStudyHistory();");
  });

  test("does not use stale selectedModule localStorage as the opening default", () => {
    expect(source).toContain('const MODULE_SELECTION_KEY = `${MASTERY_KEY}.selectedModule`;');
    expect(source).toContain("localStorage.setItem(MODULE_SELECTION_KEY, String(index));");
    expect(source).not.toContain("localStorage.getItem(MODULE_SELECTION_KEY)");
  });

  test("counts mastery scores, Check My Work attempts, and saved lab results as study history", () => {
    expect(source).toContain("function bestStudyScore(index)");
    expect(source).toContain("scoreFor(index)");
    expect(source).toContain("Number(labAttemptSummaryFor(index)?.bestScore) || 0");
    expect(source).toContain("Number(labResultFor(index)?.score) || 0");
  });

  test.each(coursePages)("%s uses the shared study-history module selector", (page) => {
    const html = fs.readFileSync(page, "utf8");
    expect(html).toContain('src="js/course-mastery.js"');
  });

  test.each(courseScripts)("%s course has its own history key and shared course key", (_label, scriptPath, courseName, masteryKey, courseKey) => {
    const script = fs.readFileSync(scriptPath, "utf8");
    expect(script).toContain(`courseName: "${courseName}"`);
    expect(script).toContain(`masteryKey: "${masteryKey}"`);
    expect(source).toContain(`"${courseName}": "${courseKey}"`);
  });
});