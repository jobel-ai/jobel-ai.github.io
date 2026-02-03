---
sidebar_position: 3
title: Security
description: Enterprise-grade security patterns and validation
---

# 🛡️ Security

Security is not an afterthought in Jobel—it's baked into the **DNA** of every line of code we generate.

---

## Security Philosophy

Jobel follows the **Security-First Generator** principle:
- **Default Secure** — If a secure pattern exists, it's used by default.
- **Enforced, Not Suggested** — The Critic agent rejects code that violates security rules.
- **Provider-Aware** — We understand the specific security needs of every integration (e.g., Stripe, Auth0).

---

## The Security Layer

Jobel's security layer operates at three stages of code generation:

### 1. Planning Stage
- **Auth Identification** — Ensures authentication is planned for every protected endpoint.
- **Scope Awareness** — Minimizes permissions based on the requested task.

### 2. Execution Stage
- **Pattern Injection** — Automatically injects security patterns into the LLM context.
- **Secret Management** — Replaces hardcoded values with `process.env` equivalents.

### 3. Validation Stage (The Critic)
- **Pattern Matching** — Scans generated code for 50+ enterprise security violations.
- **Automated Rejection** — If a violation is found, the code is sent back for a fix.

---

## Enforced Security Patterns

Jobel enforces **50+ enterprise security patterns** out of the box.

### Webhook & Event Security
- ✅ **Signature Verification** — Required for all incoming webhooks (Stripe, Auth0).
- ✅ **Payload Validation** — Schemas must be validated before processing.
- ✅ **Idempotency** — Financial operations must use idempotency keys.

### Authentication & Authorization
- ✅ **JWT Validation** — Verifies issuer, audience, and expiration.
- ✅ **RBAC Compliance** — Checks user roles before sensitive operations.
- ✅ **Min-Privilege Tokens** — Recommends scopes based on actual usage.

### Data Protection
- ✅ **Secret Redaction** — Never logs API keys, tokens, or PII.
- ✅ **Input Sanitization** — Prevents SQL injection and XSS.
- ✅ **PII Handling** — Flags sensitive data for encryption or masking.

---

## Example: Secure vs. Insecure

### ❌ What other AI tools generate
```typescript
app.post('/webhook', (req, res) => {
  const event = req.body; // NO SIGNATURE CHECK!
  if (event.type === 'payment_intent.succeeded') {
    fulfillOrder(event.data.object);
  }
  res.sendStatus(200);
});
```

### ✅ What Jobel generates
```typescript
app.post('/webhook', express.raw({type: 'application/json'}), (req, res) => {
  const sig = req.headers['stripe-signature'];
  let event;

  try {
    // SECURE: Verified signature using environment secret
    event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    console.error(`❌ Webhook signature verification failed: ${err.message}`);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === 'payment_intent.succeeded') {
    fulfillOrder(event.data.object);
  }
  res.sendStatus(200);
});
```

---

## Validation Pipeline

The **Critic agent** runs a series of checks on every code block:

```typescript
interface SecurityCheck {
  id: string;
  name: string;
  pattern: RegExp | string;
  severity: 'critical' | 'high' | 'medium';
  fix: string; // Instructions for the LLM
}

const securityChecks: SecurityCheck[] = [
  {
    id: "SEC_001",
    name: "Hardcoded API Key",
    pattern: /sk_(live|test)_[0-9a-zA-Z]{24}/,
    severity: "critical",
    fix: "Move hardcoded key to process.env and rewrite with environment variable access."
  },
  {
    id: "SEC_002",
    name: "Missing Webhook Signature",
    pattern: "webhook", // Complex logic to check for constructEvent
    severity: "critical",
    fix: "Implement webhook signature verification using the provider's official SDK."
  }
];
```

---

## Security Artifacts

Jobel provides security metadata alongside the generated code:

```json
{
  "code": "...",
  "securityAnalysis": {
    "violations": [],
    "patternsApplied": [
      "webhook_signature_verification",
      "environment_variable_secrets",
      "input_sanitization"
    ],
    "reviewRequired": false,
    "securityScore": 1.0
  }
}
```

---

## Best Practices for Users

### 1. Provide Context
If your API requires specific scopes or headers, include them in your prompt or documentation.

### 2. Use Certified Providers
Certified providers (Auth0, Stripe) have built-in security rules that are 100% reliable.

### 3. Review the "Critic's" Reasoning
If Jobel fails to generate code on the first try, read the Critic's feedback—it often points to important security gaps in your request.

### 4. Enable Audit Logs
In enterprise deployments, all code generation events are logged, including security violations caught by the Critic.

---

## Next Steps

<div className="doc-cards">

- [**Multi-Agent Intelligence**](/docs/architecture/multi-agent) — How the Critic works
- [**Enterprise Features**](/docs/enterprise/features) — Compliance and audit logs
- [**API Reference**](/docs/api/overview) — Integration and security endpoints

</div>