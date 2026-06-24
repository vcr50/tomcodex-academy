/** @jest-environment node */

import fs from "node:fs";
import vm from "node:vm";

function loadApexCourse() {
  const context = { window: {} };
  vm.createContext(context);
  vm.runInContext(fs.readFileSync("js/course-apex.js", "utf8"), context);
  return context.window.TomCodexCourseConfig;
}

describe("Apex Development syllabus curriculum", () => {
  const course = loadApexCourse();

  test("matches the twelve-module Salesforce Development syllabus", () => {
    expect(course.courseName).toBe("Apex Development");
    expect(course.modules).toHaveLength(12);
    expect(course.modules[0].title).toBe("Apex and the Salesforce Runtime");
    expect(course.modules[11].title).toBe("Deployment and Apex Capstone");
    expect(course.subCourses.map((stage) => stage.title)).toEqual([
      "Stage 1: Apex Foundations",
      "Stage 2: Apex Automation",
      "Stage 3: Production Apex",
      "Stage 4: Apex Architecture and Release"
    ]);
  });

  test.each(course.modules.map((module, index) => [index + 1, module]))(
    "module %s follows the developer build contract",
    (_moduleNumber, module) => {
      const rich = module.richContent;
      expect(module.subCourse.title).toContain("Stage ");
      expect(module.masteryStage.title).toBe(module.subCourse.title);
      expect(rich.mainSyllabus.title).toBe("Apex Development Practical Build Syllabus");
      expect(rich.mainSyllabus.introduction).toContain("dedicated Salesforce developer path");
      expect(rich.mainSyllabus.content).toContain("roadmap-phase-summary");
      expect(rich.mainSyllabus.content).toContain("Developer build lab");
      expect(rich.mainSyllabus.content).toContain("Supporting Salesforce developer resources");
      expect(rich.projectName).toBe("TomCodeX Incident Response Platform");
      expect(rich.projectTask.artifact).toBeTruthy();
      expect(rich.projectTask.steps).toHaveLength(9);
      expect(rich.projectTask.steps.join(" ")).toContain("LEITR");
      expect(rich.projectEvidence.length).toBeGreaterThanOrEqual(6);
      expect(rich.projectEvidence.join(" ")).toContain("Source code");
      expect(rich.projectEvidence.join(" ")).toContain("LEITR");
      const expectedIds = [
        ["runtime_multitenancy", "automation_choice", "script_name", "limit_measurement", "developer_tools", "project_impact", "leitr_review"],
        ["collection_choices", "service_class", "static_concept", "custom_exceptions", "unit_execution", "project_integration", "leitr_review"],
        ["query_selectivity", "query_class", "soql_vs_sosl", "relationship_queries", "aggregate_analysis", "project_value", "leitr_review"],
        ["dml_options", "dml_class", "partial_success", "transaction_control", "limits_monitoring", "platform_business", "leitr_review"],
        ["execution_order", "trigger_names", "recursion_handling", "context_variables", "handler_benefits", "business_rules", "leitr_review"],
        ["bulkification_rules", "processor_class", "collection_efficiency", "limit_analysis", "profiling_output", "business_scalability", "leitr_review"],
        ["testing_standards", "factory_class", "data_isolation", "transaction_isolation", "negative_testing", "test_results", "leitr_review"],
        ["async_patterns", "async_classes", "queueable_chaining", "batch_execution", "monitoring_jobs", "async_business", "leitr_review"],
        ["named_credentials", "callout_class", "json_handling", "mock_testing", "resiliency_observability", "business_flow", "leitr_review"],
        ["sharing_keywords", "security_class", "field_security", "injection_mitigation", "permission_tests", "business_protection", "leitr_review"],
        ["pattern_benefits", "architecture_classes", "selector_design", "logging_design", "dependency_injection", "platform_robustness", "leitr_review"],
        ["deployment_lifecycle", "release_packages", "code_analyzer", "rollback_strategy", "verification_check", "capstone_business", "leitr_review"]
      ];
      const index = _moduleNumber - 1;
      expect(rich.labCriteria.map((criterion) => criterion.id)).toEqual(expectedIds[index]);
      expect(rich.labCriteria.find((criterion) => criterion.id === "leitr_review").question).toContain("1-day, 3-day, and 7-day review dates");
      expect(rich.labCriteria.find((criterion) => criterion.id === "leitr_review").expectedKeywords).toEqual(["1 day", "3 days", "7 days"]);
      expect(rich.masteryTest).toHaveLength(15);
      expect(rich.masteryTest.filter((question) => question.type === "mcq")).toHaveLength(10);
      expect(rich.masteryTest.filter((question) => question.type === "scenario")).toHaveLength(3);
      expect(rich.masteryTest.filter((question) => question.type === "practical")).toHaveLength(2);
      expect(rich.masteryEvaluationCriteria).toContain("Security enforcement");
    }
  );

  test("Apex page reflects the finalized twelve-module program", () => {
    const html = fs.readFileSync("course-apex.html", "utf8");
    expect(html).toContain("36+ hours");
    expect(html).toContain("12 modules");
    expect(html).toContain("0 / 12");
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
    expect(html).toContain("Apex Deep-Dive Lesson Library");
    expect(html).toContain("TomCodeX Apex Project Task");
    expect(html).not.toContain("13 modules");
    expect(html).not.toContain("0 / 13");
  });
});
