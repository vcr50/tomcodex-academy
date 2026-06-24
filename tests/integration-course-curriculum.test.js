/** @jest-environment node */

import fs from "node:fs";
import vm from "node:vm";

function loadIntegrationCourse() {
  const context = { window: {} };
  vm.createContext(context);
  vm.runInContext(fs.readFileSync("js/course-integration.js", "utf8"), context);
  return context.window.TomCodexCourseConfig;
}

describe("Integration course curriculum", () => {
  const course = loadIntegrationCourse();

  test("matches the eight-module Salesforce Integration path", () => {
    expect(course.courseName).toBe("Salesforce Integration");
    expect(course.modules).toHaveLength(8);
    expect(course.modules[0].title).toBe("Salesforce REST API Basics & Workbench");
    expect(course.modules[7].title).toBe("Integration Governance & Error Handling");
    expect(course.subCourses.map((stage) => stage.title)).toEqual([
      "Stage 1: APIs and Large Data Volumes",
      "Stage 2: Authentication and Serialization",
      "Stage 3: Apex Outbound & Inbound Integrations",
      "Stage 4: Asynchronous Messaging & Governance"
    ]);
  });

  test.each(course.modules.map((module, index) => [index + 1, module]))(
    "module %s follows the integration build contract",
    (_moduleNumber, module) => {
      const rich = module.richContent;
      expect(module.subCourse.title).toContain("Stage ");
      expect(module.masteryStage.title).toBe(module.subCourse.title);
      expect(rich.mainSyllabus.title).toBe("Salesforce Integration Practical Build Syllabus");
      expect(rich.mainSyllabus.introduction).toContain("Build production-grade integrations");
      expect(rich.mainSyllabus.content).toContain("roadmap-phase-summary");
      expect(rich.mainSyllabus.content).toContain("Guided Integration lab");
      expect(rich.mainSyllabus.content).toContain("Supporting Salesforce Integration resources");
      expect(rich.projectName).toBe("TomCodeX Student Integration Engine");
      expect(rich.projectTask.artifact).toBeTruthy();
      expect(rich.projectTask.steps).toHaveLength(9);
      expect(rich.projectTask.steps.join(" ")).toContain("LEITR");
      expect(rich.projectEvidence.length).toBeGreaterThanOrEqual(6);
      expect(rich.projectEvidence.join(" ")).toContain("Source files");
      expect(rich.projectEvidence.join(" ")).toContain("LEITR");
      expect(rich.labCriteria).toHaveLength(7);
      const expectedIds = [
        ["rest_principles", "api_selection", "workbench_query", "payload_structure", "response_headers", "project_impact", "leitr_review"],
        ["soap_vs_rest", "wsdl_differences", "bulk_loader_setup", "limits_bypass", "job_monitoring", "project_scalability", "leitr_review"],
        ["hardcoding_risks", "credentials_setup", "auth_protocols", "access_policies", "named_credential_syntax", "project_security", "leitr_review"],
        ["parsing_choices", "parser_class", "serialization_methods", "schema_validation", "parsing_evidence", "project_value", "leitr_review"],
        ["trigger_callout_restrictions", "client_class", "mock_implementation", "response_handling", "transaction_limits", "project_business_flow", "leitr_review"],
        ["inbound_security", "rest_service_class", "context_variables", "inbound_routing", "exception_mapping", "project_integration", "leitr_review"],
        ["event_architecture", "platform_event_name", "publishing_context", "event_subscription", "event_replay", "business_scalability", "leitr_review"],
        ["governance_framework", "logging_utility_name", "exception_logging", "retry_strategies", "api_limit_monitoring", "platform_robustness", "leitr_review"]
      ];
      const index = _moduleNumber - 1;
      expect(rich.labCriteria.map((criterion) => criterion.id)).toEqual(expectedIds[index]);
      expect(rich.labCriteria.find((criterion) => criterion.id === "leitr_review").question).toContain("1-day, 3-day, and 7-day review dates");
      expect(rich.labCriteria.find((criterion) => criterion.id === "leitr_review").expectedKeywords).toEqual(["1 day", "3 days", "7 days"]);
      expect(rich.masteryTest).toHaveLength(15);
      expect(rich.masteryTest.filter((q) => q.type === "mcq")).toHaveLength(10);
      expect(rich.masteryTest.filter((q) => q.type === "scenario")).toHaveLength(3);
      expect(rich.masteryTest.filter((q) => q.type === "practical")).toHaveLength(2);
      expect(rich.masteryEvaluationCriteria).toContain("Correct REST/SOAP endpoint configuration");
    }
  );

  test("Integration page contains correct selectors and title", () => {
    const html = fs.readFileSync("course-integration.html", "utf8");
    expect(html).toContain("24+ hours");
    expect(html).toContain("8 modules");
    expect(html).toContain("0 / 8");
    expect(html).toContain('id="moduleSelect"');
    expect(html).toContain('id="previousModuleTopBtn"');
    expect(html).toContain('id="nextModuleTopBtn"');
    expect(html).toContain('id="moduleNav"');
    expect(html).toContain('id="moduleContent"');
    expect(html).toContain('id="richModuleContent"');
    expect(html).toContain('id="projectConnectionSection"');
    expect(html).toContain('id="richMainSyllabusSection"');
    expect(html).toContain('id="richDetailedLessonSection"');
    expect(html).toContain('id="richTrailheadPracticeSection"');
    expect(html).toContain('id="richProjectTaskSection"');
    expect(html).toContain('id="richProjectEvidenceSection"');
    expect(html).toContain('id="richGoal"');
    expect(html).toContain('id="richOutcomes"');
    expect(html).toContain('id="richExplanation"');
    expect(html).toContain('id="richBusiness"');
    expect(html).toContain('id="richWhereUsed"');
    expect(html).toContain('id="richStepByStep"');
    expect(html).toContain('id="richBestPractices"');
    expect(html).toContain('id="richCommonMistakes"');
    expect(html).toContain('id="richWhyMatters"');
    expect(html).toContain('id="richInterview"');
    expect(html).toContain('id="checkMyWorkSection"');
    expect(html).toContain('id="labCriteriaForm"');
    expect(html).toContain('id="checkMyWorkBtn"');
    expect(html).toContain('id="labVerifyResult"');
    expect(html).toContain('id="startMasteryTestBtnRich"');
    expect(html).toContain('id="defaultModuleContent"');
    expect(html).toContain('id="masteryTestPanel"');
    expect(html).toContain('id="submitMasteryTestBtn"');
    expect(html).toContain('id="previousModuleBtn"');
    expect(html).toContain('id="nextModuleBtn"');
    expect(html).toContain("TomCodeX LEITR study system");
    expect(html).toContain("Integration Deep-Dive Lesson Library");
    expect(html).toContain("TomCodeX Integration Project Task");
    expect(html).toContain("Salesforce Integration Program");
  });
});
