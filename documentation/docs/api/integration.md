---
sidebar_position: 2
title: Integration API
description: Generate code from natural language intent
---

# 🎯 Integration API

The Integration API is the primary interface for generating code from natural language intent.

---

## Analyze Intent

Transforms a natural language request into production-ready code.

### Endpoint
`POST /api/integration/analyze`

### Request Body
```json
{
  "intent": "Add stripe subscriptions with Auth0 authentication",
  "providers": ["stripe", "auth0"],
  "persona": "ENGINEER"
}
```

### Response
```json
{
  "success": true,
  "data": {
    "plan": {
      "goal": "Implement Stripe subscriptions with Auth0",
      "tasks": [...]
    },
    "implementation": [
      {
        "filename": "stripe-service.ts",
        "code": "...",
        "explanation": "..."
      },
      {
        "filename": "auth-middleware.ts",
        "code": "...",
        "explanation": "..."
      }
    ],
    "validation": {
      "valid": true,
      "patternsApplied": ["stripe_signature", "jwt_validation"]
    }
  }
}
```

---

## List Providers

Returns a list of all pre-certified and custom providers.

### Endpoint
`GET /api/integration/providers`

### Response
```json
{
  "success": true,
  "data": [
    {
      "id": "auth0",
      "name": "Auth0",
      "status": "certified",
      "description": "Identity management platform"
    },
    {
      "id": "stripe",
      "name": "Stripe",
      "status": "certified",
      "description": "Global payment infrastructure"
    }
  ]
}
```

---

## Get Provider Details

Returns detailed information about a specific provider, including its capabilities.

### Endpoint
`GET /api/integration/providers/:id`

### Response
```json
{
  "success": true,
  "data": {
    "id": "stripe",
    "name": "Stripe",
    "capabilities": [
      {
        "name": "Subscriptions",
        "description": "Manage recurring billing"
      },
      {
        "name": "Checkout",
        "description": "Hosted payment pages"
      }
    ]
  }
}
```

---

## Validate Code

Manually trigger the [Critic agent](/docs/architecture/multi-agent) to validate a block of code.

### Endpoint
`POST /api/integration/validate`

### Request Body
```json
{
  "code": "const stripe = require('stripe')(process.env.STRIPE_KEY); ...",
  "provider": "stripe"
}
```

### Response
```json
{
  "success": true,
  "data": {
    "valid": false,
    "issues": [
      {
        "id": "SEC_001",
        "name": "Missing Webhook Signature",
        "severity": "critical",
        "message": "Implement stripe.webhooks.constructEvent()",
        "fix": "..."
      }
    ]
  }
}
```

---

## Personas

Jobel supports different "personas" to tailor the generated code:

| Persona | Tone | Focus |
|---------|------|-------|
| `ENGINEER` | Technical | Clean, functional code |
| `ARCHITECT` | High-level | System design and patterns |
| `DOC_WRITER` | Explanatory | In-depth commentary |
| `LEARNER` | Educational | Step-by-step guidance |

---

## Best Practices

1. **Be Specific** — Include provider names and specific features in your intent.
2. **Use Providers** — Explicitly pass the `providers` array to ground generation.
3. **Check Validation** — Always review the `validation` property in the response.

---

## Next Steps

<div className="doc-cards">

- [**Onboarding API**](/docs/api/onboarding) — Add new providers
- [**Architecture**](/docs/architecture/overview) — How it works
- [**Guides**](/docs/guides/quickstart) — Implementation tutorials

</div>