---
sidebar_position: 3
title: Custom Providers
description: Add any API as a certified provider
---

# 🔌 Custom Providers

Teach Jobel about any API by uploading documentation and going through the certification workflow.

---

## Overview

The provider onboarding workflow:

```
┌──────────┐     ┌───────────┐     ┌──────────┐     ┌──────────┐
│  Upload  │ ──▶ │  Extract  │ ──▶ │  Review  │ ──▶ │  Certify │
│   Docs   │     │   APIs    │     │ Manually │     │   Use!   │
└──────────┘     └───────────┘     └──────────┘     └──────────┘
```

---

## Step 1: Prepare Documentation

Gather documentation for your API:

### Best Formats (In Order)

1. **OpenAPI/Swagger Spec** (Best)
   - Automatic extraction
   - Highest confidence
   - Full type information

2. **Structured Markdown**
   - Clear headers and code blocks
   - Explicit parameter lists
   - Authentication sections

3. **Code Examples**
   - SDK usage patterns
   - Request/response samples

---

## Step 2: Upload Documentation

### Via API

```bash
POST /api/onboarding/upload
Content-Type: multipart/form-data

curl -X POST http://localhost:4000/api/onboarding/upload \
  -F "file=@sendgrid-openapi.yaml" \
  -F "providerName=sendgrid" \
  -F "displayName=SendGrid" \
  -F "description=Email delivery platform"
```

### Response

```json
{
  "sessionId": "onboard_abc123",
  "status": "uploaded",
  "filename": "sendgrid-openapi.yaml",
  "fileType": "openapi",
  "message": "Ready for extraction"
}
```

---

## Step 3: Extract Capabilities

Trigger capability extraction:

```bash
POST /api/onboarding/extract/onboard_abc123
```

### Response

```json
{
  "sessionId": "onboard_abc123",
  "status": "extracted",
  "extraction": {
    "capabilities": [
      {
        "name": "Send Email",
        "description": "Send transactional or marketing email",
        "methods": ["POST /v3/mail/send"],
        "confidence": 0.95
      },
      {
        "name": "Manage Templates",
        "description": "Create and update email templates",
        "methods": ["GET /v3/templates", "POST /v3/templates"],
        "confidence": 0.88
      }
    ],
    "securityRequirements": [
      {
        "name": "API Key Authentication",
        "type": "bearer_token",
        "headerName": "Authorization"
      }
    ],
    "contracts": 15,
    "schemas": 8,
    "avgConfidence": 0.91
  }
}
```

---

## Step 4: Review Extraction

Check the extracted data:

```bash
GET /api/onboarding/session/onboard_abc123
```

Review:
- Are all expected capabilities extracted?
- Are security requirements correct?
- Is confidence high enough (>0.70)?

---

## Step 5: Certify Provider

Approve or reject:

### Approve

```bash
POST /api/onboarding/certify/onboard_abc123
{
  "approved": true,
  "certifierNotes": "Verified against official SendGrid docs",
  "securityNotes": "API key must be kept server-side"
}
```

### Reject

```bash
POST /api/onboarding/certify/onboard_abc123
{
  "approved": false,
  "rejectionReason": "Incomplete documentation, missing auth endpoints"
}
```

---

## Step 6: Use the Provider

Once certified, use in prompts:

> "Send a welcome email using SendGrid when a user signs up"

Jobel will generate code using verified SendGrid contracts!

---

## Documentation Tips

### OpenAPI Spec

Include all relevant paths and operations:

```yaml
openapi: 3.0.0
info:
  title: SendGrid API
  version: v3
paths:
  /v3/mail/send:
    post:
      summary: Send an email
      operationId: sendEmail
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/SendEmailRequest'
      responses:
        '202':
          description: Accepted
```

### Markdown Format

Structure with clear headers:

```markdown
# SendGrid API

## Authentication
All requests require Bearer token authentication.

## Send Email
POST /v3/mail/send

### Parameters
- `personalizations` (required): Array of recipients
- `from` (required): Sender email
- `subject` (required): Email subject
- `content` (required): Email body

### Example
```typescript
await sendgrid.send({
  to: 'user@example.com',
  from: 'app@yourcompany.com',
  subject: 'Welcome!',
  text: 'Hello world'
});
```
```

---

## Security Requirements

When adding providers, define security requirements:

```typescript
const securityRequirements = [
  {
    id: 'sendgrid-sec-001',
    name: 'API Key Server-Side Only',
    description: 'API key must never be exposed to client',
    severity: 'critical',
    enforcementType: 'required'
  },
  {
    id: 'sendgrid-sec-002',
    name: 'Rate Limiting',
    description: 'Implement rate limiting for email sends',
    severity: 'high',
    enforcementType: 'recommended'
  }
];
```

---

## GitHub Repository Ingestion

Import documentation from GitHub:

```bash
POST /api/onboarding/github
{
  "repoUrl": "https://github.com/sendgrid/docs",
  "providerName": "sendgrid",
  "paths": [
    "content/api-reference/**/*.md",
    "specs/openapi.yaml"
  ],
  "branch": "main"
}
```

---

## Best Practices

### 1. Start with OpenAPI
If available, always use the official OpenAPI spec.

### 2. Include Error Responses
Document error codes and messages for better code generation.

### 3. Add Code Examples
Real-world examples improve extraction accuracy.

### 4. Define Security Upfront
Specify all security requirements during onboarding.

### 5. Version Your Providers
Track provider versions for API changes:

```bash
POST /api/onboarding/upload
{
  "providerName": "sendgrid",
  "version": "3.0.0"
}
```

---

## Troubleshooting

### Low Confidence Extraction
- Add more documentation
- Use OpenAPI format
- Include explicit parameter lists

### Missing Capabilities
- Check if documentation covers all endpoints
- Upload additional files

### Authentication Issues
- Verify security requirements are extracted
- Add explicit auth documentation

---

## Next Steps

<div className="doc-cards">

- [**Providers Overview**](/docs/features/providers) — Pre-certified providers
- [**Knowledge Base**](/docs/features/knowledge-base) — Document processing
- [**API Reference**](/docs/api/onboarding) — Full onboarding API

</div>