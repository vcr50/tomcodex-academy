# TomCodeX Salesforce Development Syllabus

## Purpose

This document is the source-of-truth placement guide for Salesforce development topics in TomCodeX Academy.

- The **Salesforce Administrator** course teaches configuration, security, data, reporting, standard clouds, and user support.
- The **Salesforce Advanced Administrator** sub-course teaches developer-tool awareness, monitoring, release governance, troubleshooting, and collaboration with developers.
- Dedicated development courses teach implementation depth, coding, testing, architecture, integration, and deployment.

Developer topics must not be placed as full coding lessons inside the Admin course. Admin learners should understand when a developer is required, how to monitor the solution, how to test business behavior, and how to govern deployment.

---

# Course Placement Summary

| Topic Area | Primary TomCodeX Course | Admin / Advanced Admin Coverage |
| --- | --- | --- |
| Flow Builder and declarative automation | Salesforce Flow | Build and govern common Admin flows; advanced patterns continue in Flow course |
| Apex, SOQL, SOSL, triggers, testing, async Apex | Apex Development | Awareness, Execute Anonymous basics, logs, job monitoring, and developer handoff |
| Lightning Web Components and JavaScript UI | Lightning Web Components | Recognize when custom UI is required and govern deployment |
| REST, SOAP, Bulk API, authentication, Platform Events | Salesforce Integration | API awareness, credential safety, monitoring, and integration governance |
| Agentforce topics, actions, prompts, deployment | Salesforce Agentforce | Admin setup, permissions, governance, testing, and monitoring |
| Git, GitHub, Salesforce CLI, CI/CD, deployment | Apex/LWC capstones and DevOps practice | Release governance, validation, approvals, rollback, and production support |

---

# Prerequisite: Salesforce Administrator Foundation

Complete the TomCodeX Salesforce Administrator core modules before beginning development:

- Salesforce platform, CRM, org, app, object, field, and record concepts
- Standard and custom objects, relationships, formulas, and validation rules
- Users, profiles, permission sets, roles, sharing, CRUD, FLS, and record access
- Lightning apps, page layouts, record pages, actions, and user experience
- Sales Cloud, Service Cloud, reports, and dashboards
- Data management, sandboxes, deployment, audit, and production operations

These are Admin topics and remain in the Admin syllabus.

---

# Advanced Admin Developer Awareness

The Advanced Admin syllabus includes the following developer-adjacent topics at awareness and governance level:

- Identify when Flow is sufficient and when Apex is required.
- Read basic Apex and understand classes, methods, variables, collections, and triggers.
- Run safe Execute Anonymous examples in a practice org.
- Read Debug Logs and identify the failing automation or Apex component.
- Write basic SOQL and SOSL queries for investigation and data verification.
- Monitor Apex Jobs, Scheduled Jobs, Batch Jobs, and Queueable Jobs.
- Understand Custom Settings, Custom Labels, and Custom Metadata Types.
- Test basic REST API requests using Workbench, REST Explorer, or Postman.
- Collaborate through Git, GitHub, pull requests, Salesforce CLI, and CI/CD.
- Prepare UAT, deployment, rollback, monitoring, and production-support plans.

Advanced Admin learners do not replace the dedicated developer courses for production coding.

---

# Development Path 1: Apex Development

Primary course: `course-apex.html`

## Module 1: Apex and the Salesforce Runtime

- Multitenancy and Salesforce runtime
- Transactions and execution contexts
- Governor limits
- Declarative automation versus Apex
- Developer Console, VS Code, Salesforce CLI, and Execute Anonymous

## Module 2: Apex Language Fundamentals

- Classes, objects, methods, constructors, and properties
- Variables, constants, primitive types, and type conversion
- Conditions, loops, exceptions, and reusable methods
- Lists, Sets, and Maps

## Module 3: SOQL, SOSL, and Data Access

- SOQL SELECT, WHERE, ORDER BY, LIMIT, and OFFSET
- Relationship queries and aggregate functions
- SOSL text search across objects
- Query selectivity and Query Plan
- Avoiding SOQL inside loops

## Module 4: DML and Transaction Control

- Insert, update, upsert, delete, undelete, and merge
- Database methods and partial success
- Savepoints and rollback
- Error handling and transaction boundaries

## Module 5: Triggers and Order of Execution

- Before and after triggers
- Trigger context variables
- Order of execution
- Trigger handlers
- Recursion prevention

## Module 6: Bulkification and Governor Limits

- Collection-based processing
- Bulk-safe SOQL and DML
- Processing 200 records
- CPU, heap, query, DML, and row limits
- Large-data-volume considerations

## Module 7: Apex Testing and Test Data

- Test classes and test methods
- Test data factories
- `@testSetup`
- Positive, negative, bulk, and security tests
- Mocking callouts
- Meaningful assertions and code coverage

## Module 8: Asynchronous Apex

- Future methods
- Queueable Apex
- Batch Apex
- Scheduled Apex
- Chaining, monitoring, limits, and failure handling

## Module 9: Integrations and HTTP Callouts

- HTTP requests and responses
- JSON serialization and deserialization
- Named Credentials
- Authentication and secure secrets
- Callout mocks and error handling

## Module 10: Secure Apex and Sharing

- `with sharing`, `without sharing`, and `inherited sharing`
- CRUD, FLS, and record access
- User-mode operations
- `stripInaccessible`
- SOQL injection prevention

## Module 11: Apex Architecture and Patterns

- Trigger-handler pattern
- Service, selector, domain, and utility layers
- Dependency boundaries
- Maintainable error handling and logging

## Module 12: Deployment and Apex Capstone

- Salesforce DX source format
- Git and pull requests
- Automated tests and code analysis
- Validation deployment, release, rollback, and support
- Production-ready Apex capstone

---

# Development Path 2: Salesforce Flow

Primary course: `course-flow.html`

- Flow Builder foundations
- Record-triggered Flow
- Screen Flow
- Decisions, formulas, and business logic
- Data operations and collections
- Loops and bulk-safe design
- Subflows and reusable automation
- Fault handling and observability
- Scheduled and asynchronous automation
- Flow security and governance
- Testing, debugging, and performance
- External Services, integrations, deployment, and Flow capstone

Admin course placement:

- Admin builds common flows and understands automation selection.
- Advanced Admin governs Flow scale, failures, deployment, and monitoring.
- The dedicated Flow course teaches complete implementation depth.

---

# Development Path 3: Lightning Web Components

Primary course: `course-lwc.html`

## Foundations and UI

- HTML, CSS, JavaScript, Web Components, and LWC architecture
- Component bundles, templates, directives, and scoped styling
- Salesforce Lightning Design System
- Accessibility and responsive design

## JavaScript and Component Communication

- Reactivity and lifecycle hooks
- Public properties and methods
- Parent-child events and composition
- Lightning Message Service

## Salesforce Data and Apex

- Lightning Data Service
- UI API and wire adapters
- Record forms and data refresh
- Wired and imperative Apex
- Error handling and user feedback

## Security, Testing, and Deployment

- Lightning Web Security
- CRUD, FLS, and Apex security
- Jest tests, mocks, and DOM assertions
- Performance and component architecture
- Salesforce DX, Git, validation, deployment, and LWC capstone

Admin course placement:

- Admin configures standard Lightning pages, actions, Dynamic Forms, and visibility rules.
- Custom LWC implementation belongs in the LWC course.

---

# Development Path 4: Salesforce Integration

Primary course: `course-integration.html`

- REST API, Workbench, and standard endpoints
- SOAP API and Bulk API
- Connected Apps, OAuth, Named Credentials, and External Credentials
- JSON serialization and parsing in Apex
- Outbound Apex HTTP callouts
- Inbound Apex REST services
- Platform Events and event-driven integration
- Integration security, limits, logging, retries, monitoring, and governance

Admin course placement:

- Advanced Admin understands API purpose, credential safety, data access, monitoring, and vendor governance.
- Building production integrations belongs in the Integration and Apex courses.

---

# Development Path 5: Salesforce Agentforce

Primary course: `course-agentforce.html`

- Agentforce foundations and setup
- Topics, instructions, routing, and guardrails
- Agent actions using Flow and Apex
- Prompt templates and Prompt Builder
- Channels and deployment
- Conversational analytics, auditing, monitoring, and human escalation

Admin course placement:

- Advanced Admin owns permissions, trusted data, governance, testing, deployment controls, monitoring, and escalation.
- Apex-backed actions and custom integrations continue in the Apex and Integration courses.

---

# DevOps and Release Engineering Placement

DevOps topics span Advanced Admin and developer capstones.

## Advanced Admin Responsibilities

- Sandbox strategy
- Release preparation and UAT
- Dependency and permission review
- Deployment checklist and approval
- Backup, rollback, cutover, and production validation
- Monitoring and operational support

## Developer Responsibilities

- Salesforce DX projects and source format
- Git branches, commits, pull requests, and code review
- Salesforce CLI retrieve, deploy, validate, and test commands
- Automated unit tests and code analysis
- CI/CD pipelines using GitHub Actions, Jenkins, Gearset, or Copado
- Package and metadata dependency management

---

# Required Development Capstone

Build a production-style Salesforce solution that includes:

- Documented business requirements and personas
- Secure Salesforce data model
- Admin configuration and Flow automation
- Bulkified Apex service or trigger
- SOQL and DML
- Automated Apex tests
- LWC user interface
- Secure integration or Platform Event
- Git and pull-request history
- CI validation and deployment plan
- Monitoring, rollback, and production-support runbook

Evidence must include configuration names, source code, tests, screenshots, commands, validation results, and a business demonstration.

---

# Placement Rules

1. Keep configuration-first Admin topics in the Salesforce Administrator course.
2. Keep monitoring, governance, release, and developer-collaboration topics in Advanced Admin.
3. Place Apex implementation, triggers, testing, async processing, and secure code in Apex Development.
4. Place custom Lightning user-interface development in Lightning Web Components.
5. Place API implementation and event-driven architecture in Salesforce Integration.
6. Place complete Flow specialization in Salesforce Flow.
7. Place Agentforce implementation and governance in Salesforce Agentforce.
8. Use cross-course links instead of duplicating full developer lessons inside Admin Module 10.
