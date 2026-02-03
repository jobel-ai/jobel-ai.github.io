---
sidebar_position: 3
title: Security
description: 50+ security patterns enforced automatically—because security isn't optional
---

# 🛡️ Security

## The Security Gap in AI Code

Ask any AI tool to generate a Stripe webhook handler. You'll get code. It probably won't include signature verification.

**Your endpoint is now vulnerable to replay attacks.**

Generic AI treats security as a suggestion, not a requirement. It generates code that "works" but ships vulnerabilities.

**This is unacceptable for production.**

---

## Built-In Security Enforcement

Jobel enforces **50+ security patterns** at code generation time. The Critic agent validates every line before it reaches you.

**Result:** Secure code by default, not as an afterthought.

---

## Security Patterns Enforced

### 🔐 Authentication & Authorization

- **Never hardcode secrets** — API keys, tokens, and passwords must use environment variables
- **JWT validation** — Proper audience, issuer, and expiry checks
- **API key rotation** — Support for key refresh without downtime
- **OAuth flows** — Correct PKCE, state parameter, and redirect URI validation

**Example:**  
❌ Generic AI: `const apiKey = "sk_live_abc123"`  
✅ Jobel: `const apiKey = process.env.STRIPE_API_KEY`

---

### 🔒 Webhook Security

- **Signature verification required** — Every webhook must validate signatures before processing
- **Replay attack prevention** — Timestamp checks and idempotency handling
- **Payload validation** — Verify expected structure before trusting data

**Example (Stripe webhooks):**  
✅ Jobel automatically generates: `stripe.webhooks.constructEvent(body, signature, secret)`

**Without this:** Your endpoint processes fraudulent webhooks. With this: Only verified Stripe events are processed.

---

### 📝 Logging & Monitoring

- **No sensitive data in logs** — Automatically redact tokens, passwords, credit cards
- **Structured logging** — JSON format for proper monitoring
- **Error messages sanitized** — Never expose internal paths or secrets in errors

**Example:**  
❌ Generic AI: `console.log("User logged in:", user)`  (exposes email, password hash)  
✅ Jobel: `logger.info("User logged in", { userId: user.id })`  (safe, structured)

---

### 🌐 Network Security

- **HTTPS-only** — External URLs must use `https://`, never `http://`
- **Certificate validation** — No `rejectUnauthorized: false` hacks
- **Timeout enforcement** — Prevent hanging requests from DoS attacks

---

### 💳 Financial Operations

- **Idempotency keys** — All Stripe payment operations include idempotency keys
- **Amount validation** — Prevent negative or zero-value charges
- **Currency consistency** — Enforce matching currency across operations

**Example:**  
✅ Jobel automatically includes: `{ idempotencyKey: uuid() }` in Stripe payment calls

**Why it matters:** Without idempotency, a double-click creates duplicate charges. With it, retries are safe.

---

### 🔍 Input Validation

- **Parameter sanitization** — Prevent SQL injection, XSS, command injection
- **Type enforcement** — Validate expected types before processing
- **Length limits** — Prevent buffer overflow attacks
- **Allowed-list validation** — Enum/constant values validated against expected sets

---

## How Validation Works

### 1. Generation with Security Patterns

When the Executor agent generates code, it applies security rules from the registry:

- Webhook handler? → Signature verification required
- API call? → Secrets from environment variables
- Database query? → Parameterized queries only
- Payment operation? → Idempotency key enforced

---

### 2. Critic Agent Validation

Before code is returned, the Critic validates:

✅ All secrets use environment variables  
✅ Webhook signature verification is present  
✅ No sensitive data in logs  
✅ HTTPS enforced for external calls  
✅ Idempotency keys included for payments

If any check fails, the Critic sends feedback to the Executor for regeneration.

---

### 3. Self-Healing Loop

The Executor regenerates with targeted feedback:

*"Missing webhook signature verification. Add `stripe.webhooks.constructEvent()` call with signature validation before processing event data."*

**This loop continues until all security validations pass.**

**Result:** You never see insecure code.

---

## Real-World Scenarios Prevented

### Scenario 1: Unverified Webhooks
**Generic AI:**  
Generates webhook handler. Processes incoming payloads without signature verification.

**Attacker sends:**  
Fake `payment_succeeded` event. Your system credits accounts for payments that never happened.

**Jobel:**  
Enforces signature verification. Invalid webhooks are rejected before processing.

---

### Scenario 2: Hardcoded Secrets
**Generic AI:**  
Includes API key directly in code: `const key = "sk_live_abc123"`.

**Result:**  
Key is committed to Git. Now exposed in your public GitHub repo. Attackers drain your Stripe account.

**Jobel:**  
Enforces environment variables: `const key = process.env.STRIPE_API_KEY`.  
Secret stays out of code, secure in environment config.

---

### Scenario 3: Missing Idempotency
**Generic AI:**  
Generates Stripe charge without idempotency key.

**Result:**  
User double-clicks "Pay Now." Two charges are created. Customer is angry.

**Jobel:**  
Automatically includes `idempotencyKey`. Duplicate requests are safely ignored.

---

## Jobel vs Generic AI

| Security Issue | ChatGPT / Copilot | Jobel |
|----------------|-------------------|-------|
| **Hardcoded secrets** | ⚠️ Common | ✅ Enforced: env vars only |
| **Webhook verification** | ❌ Often missing | ✅ Automatically generated |
| **Sensitive data in logs** | ⚠️ Frequent | ✅ Auto-redacted |
| **HTTPS enforcement** | ⚠️ Manual check | ✅ Validated before return |
| **Idempotency** | ❌ Rarely included | ✅ Financial ops enforced |
| **Self-correction** | ❌ No validation | ✅ Critic catches issues |

**Generic AI gives you code. Jobel gives you secure code.**

---

## Provider-Specific Security

### Auth0
- PKCE flow enforced for public clients
- State parameter validation
- Redirect URI validation
- Token refresh with rotation

### Stripe
- Webhook signature verification
- Idempotency keys for all payments
- Amount validation (no negative charges)
- API version pinning

### Custom Providers
Upload your security requirements in documentation. Jobel enforces them automatically.

---

## Built for Compliance

### SOC 2, ISO 27001, PCI-DSS

Jobel's security patterns align with enterprise compliance requirements:

- **Audit logging** — Structured, tamper-evident logs
- **Secret management** — No hardcoded credentials
- **Access control** — Proper authentication validation
- **Data protection** — Sensitive data handling enforced

**Your security team will thank you.**

---

## The Manus-Grade Standard

Security isn't a feature you bolt on later. It's **engineered into the architecture**.

Generic AI tools treat security as your problem. Jobel treats it as **our responsibility**.

The Critic agent validates every line. The security registry enforces patterns. The self-healing loop ensures compliance.

**This is what separates AI slop from production-ready tooling.**

---

## For Teams Who Ship Securely

### Startups
Launch without hiring a security engineer. Jobel enforces best practices automatically.

### Enterprise
Meet compliance requirements without training every developer on 50+ patterns.

### Solo Developers
Sleep well knowing your integrations follow industry standards.

---

## Next Steps

<div className="doc-cards">

- [**Multi-Agent Architecture**](/docs/architecture/multi-agent) — How the Critic validates security
- [**Contract Compiler**](/docs/architecture/contract-compiler) — Security requirements in contracts
- [**Providers**](/docs/features/providers) — Pre-certified secure integrations

</div>