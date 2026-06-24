/** @jest-environment node */

import fs from "node:fs";

describe("shared 10-part topic mastery standard", () => {
  const masterySource = fs.readFileSync("js/course-mastery.js", "utf8");
  const adminSource = fs.readFileSync("js/course-admin.js", "utf8");
  const coursePages = [
    "course-admin.html",
    "course-flow.html",
    "course-apex.html",
    "course-lwc.html",
    "course-integration.html",
    "course-agentforce.html",
    "course-poc.html"
  ];

  test("renders every required topic-specific learning section", () => {
    [
      "1. Concept",
      "2. Key Concepts",
      "3. Real Business Example",
      "4. Salesforce Implementation",
      "5. Best Practices",
      "6. Common Mistakes",
      "7. Interview Questions and Answers",
      "8. LEITR Learning Tasks",
      "9. Certification Focus",
      "10. Practical Proof"
    ].forEach((heading) => expect(masterySource).toContain(heading));

    expect(masterySource).toContain("Array.from({ length: 5 }");
    expect(masterySource).toContain("Review: Revisit the ${title} explanation and implementation after 1 day, 3 days, and 7 days.");
    expect(masterySource).toContain("Developer Edition org or Trailhead Playground");
    expect(masterySource).toContain("Expected outcome:");
  });

  test("removes prohibited generic Admin roadmap wording", () => {
    [
      "Learn what it controls",
      "When to use it",
      "its dependencies",
      "risks of configuring it incorrectly"
    ].forEach((phrase) => expect(adminSource).not.toContain(phrase));
  });

  test.each(coursePages)("%s advertises the shared 10-part topic lessons", (page) => {
    const html = fs.readFileSync(page, "utf8");
    expect(html).toContain("10-part topic mastery lessons");
    expect(html).toContain("five answered interview questions");
    expect(html).toContain("LEITR tasks");
    expect(html).toContain('id="topicCoverage"');
  });
});
