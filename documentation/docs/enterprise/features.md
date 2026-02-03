---
sidebar_position: 1
title: Enterprise Features
description: Jobel capabilities for large-scale engineering teams
---

# 🏢 Enterprise Features

Jobel is built to handle the security, compliance, and scale requirements of modern enterprise engineering organizations.

---

## Multi-Tenancy & Isolation

### Organization-Level Security
- **Data Isolation** — Knowledge bases and contracts are isolated per organization ID (`X-Org-ID`).
- **Private Knowledge Bases** — Upload internal documentation without leaking it to other tenants.
- **Tenant Context** — Every LLM call is wrapped in tenant-specific safety constraints.

---

## Role-Based Access Control (RBAC)

Jobel supports granular personas and roles:

| Persona | Capabilities | Ideal For |
|---------|--------------|-----------|
| `ENGINEER` | Code generation, research | Frontend & Backend developers |
| `ARCHITECT` | System design, contract review | Senior engineers, tech leads |
| `DOC_WRITER` | Documentation generation | Technical writers |
| `AUDITOR` | Read-only access to generation history | Security & compliance teams |

---

## Security & Compliance

### Audit Logging
Comprehensive trails of every AI interaction:
- Who requested the code?
- Which LLM was used?
- Which documentation chunks were retrieved?
- Which security violations were flagged by the Critic?

### On-Premise Deployment
Jobel is 100% containerized. You can run the entire platform within your own:
- **AWS VPC** (ECS/EKS/Fargate)
- **Google Cloud** (GKE/Cloud Run)
- **Azure** (AKS)
- **Private Data Centers** (Air-gapped)

### Zero Data Retention
- Jobel does not use your data for model training.
- Ephemeral processing mode ensures data is deleted after the request is fulfilled.

---

## Enterprise Metrics

Track the ROI and efficiency of Jobel across your teams:

| Metric | Description |
|--------|-------------|
| **Velocity Boost** | Percentage reduction in integration development time |
| **Accuracy Rate** | Ratio of first-pass successful generations |
| **Security Fix Count** | Number of vulnerabilities caught by Jobel before PR |
| **Token Utilization** | Optimization of LLM costs across providers |

---

## Custom Security Patterns

Enterprises can define their own security benchmarks:
- **Internal standards** (e.g., "Must use our internal logger")
- **Compliance requirements** (SOC2, HIPAA, GDPR)
- **Corporate best practices**

These rules are loaded into the **Critic agent** for enforcement across the entire organization.

---

## Private Model Support

Connect Jobel to your own fine-tuned or private models:
- **Azure OpenAI Service**
- **Amazon Bedrock**
- **Google Vertex AI**
- **Local LLMs** (via Ollama or vLLM)

---

## Professional Services

For enterprise customers, we offer:
- **Custom Provider Onboarding** — We build certified providers for your tech stack.
- **Implementation Support** — Help integrating Jobel into your CI/CD pipeline.
- **Security Audits** — Verification of Jobel's generated patterns.

---

## Next Steps

<div className="doc-cards">

- [**Enterprise Use Cases**](/docs/enterprise/use-cases) — Real-world scenarios
- [**Architecture Overview**](/docs/architecture/overview) — System design
- [**Security Layer**](/docs/features/security) — Detailed pattern list

</div>