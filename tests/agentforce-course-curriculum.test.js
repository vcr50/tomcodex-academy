/** @jest-environment node */

import fs from "node:fs";
import vm from "node:vm";

function loadAgentforceCourse() {
  const context = { window: {} };
  vm.createContext(context);
  vm.runInContext(fs.readFileSync("js/course-agentforce.js", "utf8"), context);
  return context.window.TomCodexCourseConfig;
}

describe("Agentforce course curriculum", () => {
  const course = loadAgentforceCourse();

  test("matches the six-module Salesforce Agentforce path", () => {
    expect(course.courseName).toBe("Salesforce Agentforce");
    expect(course.modules).toHaveLength(6);
    expect(course.modules[0].title).toBe("Agentforce Foundations & Setup");
    expect(course.modules[5].title).toBe("Conversational Analytics & Auditing");
    expect(course.subCourses.map((stage) => stage.title)).toEqual([
      "Stage 1: Agent Foundations and Actions",
      "Stage 2: Prompts, Deployments and Auditing"
    ]);
  });

  test.each(course.modules.map((module, index) => [index + 1, module]))(
    "module %s follows the Agentforce build contract",
    (_moduleNumber, module) => {
      const rich = module.richContent;
      expect(module.subCourse.title).toContain("Stage ");
      expect(module.masteryStage.title).toBe(module.subCourse.title);
      expect(rich.mainSyllabus.title).toBe("Salesforce Agentforce Practical Build Syllabus");
      expect(rich.mainSyllabus.introduction).toContain("Build production-ready autonomous agents");
      expect(rich.mainSyllabus.content).toContain("roadmap-phase-summary");
      expect(rich.mainSyllabus.content).toContain("Guided Agentforce lab");
      expect(rich.mainSyllabus.content).toContain("Supporting Salesforce Agentforce resources");
      expect(rich.projectName).toBe("TomCodeX Support Agentforce Engine");
      expect(rich.projectTask.artifact).toBeTruthy();
      expect(rich.projectTask.steps).toHaveLength(9);
      expect(rich.projectTask.steps.join(" ")).toContain("LEITR");
      expect(rich.projectEvidence.length).toBeGreaterThanOrEqual(6);
      expect(rich.projectEvidence.join(" ")).toContain("LEITR");
      expect(rich.labCriteria).toHaveLength(7);
      
      const expectedIds = [
        ["agentforce_architecture", "agentforce_permissions", "copilot_agent_name", "provisioning_steps", "activation_evidence", "project_impact", "leitr_review"],
        ["topics_purpose", "intent_routing", "student_support_topic", "instruction_boundary", "debugger_evidence", "project_integration", "leitr_review"],
        ["action_mapping", "invocable_annotations", "registration_action", "parameter_definitions", "execution_security", "project_triage", "leitr_review"],
        ["prompt_grounding", "trust_masking", "summary_template", "merge_fields", "preview_evidence", "project_value", "leitr_review"],
        ["channel_differences", "cors_csp_settings", "experience_cloud_widget", "access_control", "deployment_evidence", "project_accessibility", "leitr_review"],
        ["audit_logs", "toxicity_settings", "toxicity_masking_log", "routing_failures", "adoption_metrics", "project_robustness", "leitr_review"]
      ];
      
      const index = _moduleNumber - 1;
      expect(rich.labCriteria.map((criterion) => criterion.id)).toEqual(expectedIds[index]);
      expect(rich.labCriteria.find((criterion) => criterion.id === "leitr_review").question).toContain("1-day, 3-day, and 7-day review dates");
      expect(rich.labCriteria.find((criterion) => criterion.id === "leitr_review").expectedKeywords).toEqual(["1 day", "3 days", "7 days"]);
      expect(rich.masteryTest).toHaveLength(15);
      expect(rich.masteryTest.filter((q) => q.type === "mcq")).toHaveLength(10);
      expect(rich.masteryTest.filter((q) => q.type === "scenario")).toHaveLength(3);
      expect(rich.masteryTest.filter((q) => q.type === "practical")).toHaveLength(2);
      expect(rich.masteryEvaluationCriteria).toContain("Correct agent and setup configuration");
    }
  );

  test("Agentforce page contains correct selectors and title", () => {
    const html = fs.readFileSync("course-agentforce.html", "utf8");
    expect(html).toContain("18+ hours");
    expect(html).toContain("6 modules");
    expect(html).toContain("0 / 6");
    expect(html).toContain('id="moduleNav"');
    expect(html).toContain('id="moduleSelect"');
    expect(html).toContain('id="moduleContent"');
    expect(html).toContain('id="previousModuleTopBtn"');
    expect(html).toContain('id="nextModuleTopBtn"');
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
    expect(html).toContain("Salesforce Agentforce Program");
    expect(html).toContain("TomCodeX LEITR study system");
    expect(html).toContain("Agentforce Deep-Dive Lesson Library");
    expect(html).toContain("TomCodeX Agentforce Project Task");
  });
});
