/** @jest-environment node */

import fs from "node:fs";

describe("course guide Zentom training context", () => {
  const guideSource = fs.readFileSync("js/course-guide.js", "utf8");
  const engineSource = fs.readFileSync("server/ai-engine.js", "utf8");

  test("sends active curriculum and LEITR context to Ask Zentom", () => {
    expect(guideSource).toContain("buildCourseGuideContext");
    expect(guideSource).toContain("TomCodeX LEITR study system");
    expect(guideSource).toContain("activeModuleConfig");
    expect(guideSource).toContain("rich.projectEvidence");
    expect(guideSource).toContain("projectTask.steps");
    expect(guideSource).toContain("context: buildCourseGuideContext()");
  });

  test("backend trainer prompt uses Academy course context", () => {
    expect(engineSource).toContain("context = \"\"");
    expect(engineSource).toContain("Academy course context");
    expect(engineSource).toContain("const courseContext = String(context || \"\").slice(0, 6000)");
    expect(engineSource).toContain("promptFn(topic, doubt, courseContext)");
  });
});
