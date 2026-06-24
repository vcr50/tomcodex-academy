/** @jest-environment node */

import fs from "node:fs";
import vm from "node:vm";

function loadLwcCourse() {
  const context = { window: {} };
  vm.createContext(context);
  vm.runInContext(fs.readFileSync("js/course-lwc.js", "utf8"), context);
  return context.window.TomCodexCourseConfig;
}

describe("Lightning Web Components syllabus curriculum", () => {
  const course = loadLwcCourse();

  test("matches the twelve-module Salesforce Development LWC path", () => {
    expect(course.courseName).toBe("Lightning Web Components");
    expect(course.modules).toHaveLength(12);
    expect(course.modules[0].title).toBe("LWC and Web Platform Foundations");
    expect(course.modules[11].title).toBe("Deployment and LWC Capstone");
    expect(course.subCourses.map((stage) => stage.title)).toEqual([
      "Stage 1: LWC Foundations and UI",
      "Stage 2: Communication and Salesforce Data",
      "Stage 3: User Experience and Security",
      "Stage 4: Quality, Performance, and Release"
    ]);
  });

  test.each(course.modules.map((module, index) => [index + 1, module]))(
    "module %s follows the frontend build contract",
    (_moduleNumber, module) => {
      const rich = module.richContent;
      expect(module.subCourse.title).toContain("Stage ");
      expect(module.masteryStage.title).toBe(module.subCourse.title);
      expect(rich.mainSyllabus.title).toBe("Lightning Web Components Practical Build Syllabus");
      expect(rich.mainSyllabus.introduction).toContain("dedicated Salesforce custom UI path");
      expect(rich.mainSyllabus.content).toContain("roadmap-phase-summary");
      expect(rich.mainSyllabus.content).toContain("Frontend build lab");
      expect(rich.mainSyllabus.content).toContain("Supporting Salesforce LWC resources");
      expect(rich.projectName).toBe("TomCodeX Learner Command Center");
      expect(rich.projectTask.artifact).toBeTruthy();
      expect(rich.projectTask.apexLwc).toContain(rich.projectTask.artifact);
      expect(rich.projectTask.steps).toHaveLength(9);
      expect(rich.projectTask.steps.join(" ")).toContain("LEITR");
      expect(rich.projectEvidence.length).toBeGreaterThanOrEqual(6);
      expect(rich.projectEvidence.join(" ")).toContain("Source files");
      expect(rich.projectEvidence.join(" ")).toContain("LEITR");
      const expectedIds = [
        ["bundle_standards", "configuration_choices", "component_name", "toolchain_setup", "deployment_output", "project_impact", "leitr_review"],
        ["scoped_css", "summary_card_files", "list_rendering", "accessibility_design", "accessibility_evidence", "project_integration", "leitr_review"],
        ["reactivity_rules", "progress_filter_files", "lifecycle_hooks", "rendering_side_effects", "lifecycle_evidence", "project_value", "leitr_review"],
        ["communication_patterns", "dashboard_shell_files", "custom_events", "message_channels", "communication_evidence", "business_context", "leitr_review"],
        ["lds_benefits", "record_panel_files", "wire_adapters", "cache_refresh", "security_handling", "business_rules", "leitr_review"],
        ["apex_invocation", "search_results_files", "wire_parameters", "apex_error_handling", "apex_security_enforcement", "business_scalability", "leitr_review"],
        ["form_validation", "service_request_files", "interaction_states", "error_presentation", "submission_throttling", "user_feedback", "leitr_review"],
        ["navigation_mixin", "navigation_action_files", "component_targets", "design_properties", "navigation_evidence", "context_integration", "leitr_review"],
        ["lws_architecture", "secure_dashboard_files", "dom_injection_risks", "xss_mitigation", "permission_audits", "business_protection", "leitr_review"],
        ["jest_testing_standards", "dashboard_test_files", "wire_mocking", "interaction_testing", "debugging_techniques", "test_coverage_output", "leitr_review"],
        ["rerendering_causes", "command_center_files", "composition_patterns", "performance_strategies", "measurement_evidence", "platform_robustness", "leitr_review"],
        ["deployment_lifecycle", "capstone_release_details", "code_analyzer_audit", "rollback_plan", "verification_checklist", "capstone_business_value", "leitr_review"]
      ];
      const index = _moduleNumber - 1;
      expect(rich.labCriteria.map((criterion) => criterion.id)).toEqual(expectedIds[index]);
      expect(rich.labCriteria.find((criterion) => criterion.id === "leitr_review").question).toContain("1-day, 3-day, and 7-day review dates");
      expect(rich.labCriteria.find((criterion) => criterion.id === "leitr_review").expectedKeywords).toEqual(["1 day", "3 days", "7 days"]);
      expect(rich.masteryTest).toHaveLength(15);
      expect(rich.masteryTest.filter((question) => question.type === "mcq")).toHaveLength(10);
      expect(rich.masteryTest.filter((question) => question.type === "scenario")).toHaveLength(3);
      expect(rich.masteryTest.filter((question) => question.type === "practical")).toHaveLength(2);
      expect(rich.masteryEvaluationCriteria).toContain("Accessible and responsive UI states");
    }
  );

  test("LWC page exposes the Admin-style learning containers", () => {
    const html = fs.readFileSync("course-lwc.html", "utf8");
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
    expect(html).toContain("LWC Deep-Dive Lesson Library");
    expect(html).toContain("TomCodeX LWC Project Task");
  });
});
