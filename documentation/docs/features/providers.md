---
sidebar_position: 2
title: Providers
description: Certified and custom API providers
---

# 🔌 Providers

Jobel uses a pluggable **Provider System** that allows it to interact with any external service. Every provider is grounded in verified documentation via the [Contract Compiler](/docs/architecture/contract-compiler).

---

## Certified Providers

Jobel comes with pre-certified providers that are built-in and ready to use. These providers have high-confidence contracts and enforced security patterns.

### 🔐 Auth0 (Certified)
Complete identity management integration.

**Capabilities:**
- **Authentication** — Login, logout, sign up
- **User Management** — Profile updates, metadata
- **Permissions** — Roles, scopes, RBAC
- **Organization** — Multi-tenancy support

**Security Requirements:**
- signature verification for webhooks
- JWT audience/issuer validation
- HTTPS only endpoints

### 💳 Stripe (Certified)
Full payment and subscription management.

**Capabilities:**
- **Customers** — Create, update, list
- **Subscriptions** — Create, cancel, update plans
- **Checkout** — Session management
- **Webhooks** — Handling events (payment success, failure)

**Security Requirements:**
- signature verification
- Idempotency keys for all mutate operations
- Secret key management (no server-side exposure)

---

## Provider Structure

Each provider consists of three core components:

### 1. Knowledge Module
Documentation and metadata about the provider.
```typescript
{
  id: "auth0",
  name: "Auth0",
  type: "certified",
  knowledge: [
    { source: "auth0-mgmt-api.yaml", type: "openapi" },
    { source: "auth0-security.md", type: "markdown" }
  ]
}
```

### 2. Contract Registry
Verified API signatures. See [Contract Compiler](/docs/architecture/contract-compiler) for details.

### 3. Reliability Rules
Security and best-practice patterns specific to the provider.
```typescript
const reliabilityRules = [
  {
    id: "stripe-idempotency",
    check: "Ensure idempotencyKey is present in all POST requests",
    severity: "critical"
  }
];
```

---

## Onboarding New Providers

You can teach Jobel about any API by following the onboarding workflow.

### Mode B: Onboarding Workbench
Jobel's dedicated UI for adding new providers:
1. **Upload Documentation** — OpenAPI, Markdown, or Code
2. **Extract Capabilities** — Jobel identifies what the API can do
3. **Review Contracts** — Manually verify signatures and types
4. **Certify** — Add to the available provider list

### Via CLI/API
```bash
# Upload SendGrid docs
curl -X POST http://localhost:4000/api/onboarding/upload \
  -F "file=@sendgrid.yaml" \
  -F "providerName=sendgrid"

# Trigger extraction
curl -X POST http://localhost:4000/api/onboarding/extract/onboard_123
```

See [Custom Providers Guide](/docs/guides/custom-providers) for a full walkthrough.

---

## Security Patterns

Every provider has a set of enforced security patterns. Jobel uses these to ensure the generated code is production-ready.

### Global Patterns (All Providers)
- ✅ Never log sensitive data (passwords, tokens)
- ✅ Use environment variables for all secrets
- ✅ Include proper error handling and logging
- ✅ Enforce HTTPS for all external calls

### Provider-Specific Patterns
- **Auth0:** Always validate JWT signatures and audiences.
- **Stripe:** Always use idempotency keys for financial mutations.
- **Generic:** Add `User-Agent` headers and timeout configurations.

---

## Provider Management

### List Available Providers
```bash
GET /api/integration/providers
```

### Response
```json
{
  "providers": [
    {
      "id": "auth0",
      "name": "Auth0",
      "status": "certified",
      "capabilities": ["auth", "users", "roles"]
    },
    {
      "id": "stripe",
      "name": "Stripe",
      "status": "certified",
      "capabilities": ["payments", "subscriptions"]
    },
    {
      "id": "sendgrid",
      "name": "SendGrid",
      "status": "certified",
      "capabilities": ["email"]
    }
  ]
}
```

### View Provider Details
```bash
GET /api/integration/providers/auth0
```

---

## Best Practices

### 1. Document Everything
The better the documentation you provide, the better the code Jobel generates. OpenAPI specs are always preferred.

### 2. Define Security Early
When onboarding a provider, identify its security requirements (auth headers, signature checks) immediately.

### 3. Verification is Key
Always use the [Critic agent](/docs/architecture/multi-agent) to validate that generated code follows provider-specific best practices.

### 4. Group Capabilities
Organize provider functions into logically grouped capabilities (e.g., "Authentication", "Transactions").

---

## Next Steps

<div className="doc-cards">

- [**Custom Providers Guide**](/docs/guides/custom-providers) — Step-by-step onboarding
- [**Contract Compiler**](/docs/architecture/contract-compiler) — How APIs are verified
- [**Security Layer**](/docs/features/security) — Enterprise security patterns

</div>