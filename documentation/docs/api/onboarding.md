---
sidebar_position: 3
title: Onboarding API
description: API reference for adding new providers
---

# 🔌 Onboarding API

The Onboarding API handles the lifecycle of teaching Jobel about new providers.

---

## Upload Documentation

Upload files to start a new onboarding session.

### Endpoint
`POST /api/onboarding/upload`

### Request Body (Multipart)
- `file`: The documentation file
- `providerName`: Unique ID for the provider
- `displayName`: Human-readable name
- `description`: Brief description

### Response
```json
{
  "success": true,
  "data": {
    "sessionId": "onboard_abc123",
    "status": "uploaded",
    "providerName": "sendgrid"
  }
}
```

---

## Extract Capabilities

Tells Jobel to analyze the uploaded documents and extract API contracts.

### Endpoint
`POST /api/onboarding/extract/:sessionId`

### Response
```json
{
  "success": true,
  "data": {
    "sessionId": "onboard_abc123",
    "status": "extracted",
    "extraction": {
      "capabilities": [...],
      "contracts": [...],
      "securityRequirements": [...]
    }
  }
}
```

---

## Get Session Status

Returns the current state of an onboarding session.

### Endpoint
`GET /api/onboarding/session/:sessionId`

### Response
```json
{
  "success": true,
  "data": {
    "sessionId": "onboard_abc123",
    "status": "extracted",
    "providerName": "sendgrid",
    "documents": ["doc_123"],
    "extraction": { ... }
  }
}
```

---

## Certify Provider

Finalizes the onboarding process and makes the provider available for use.

### Endpoint
`POST /api/onboarding/certify/:sessionId`

### Request Body
```json
{
  "approved": true,
  "notes": "Verified against official Dec 2024 docs"
}
```

### Response
```json
{
  "success": true,
  "data": {
    "providerId": "sendgrid",
    "status": "certified"
  }
}
```

---

## Ingest from GitHub

Onboard a provider by importing its documentation repository.

### Endpoint
`POST /api/onboarding/github`

### Request Body
```json
{
  "repoUrl": "https://github.com/sendgrid/docs",
  "providerName": "sendgrid",
  "branch": "main",
  "paths": ["/api-reference/*.md"]
}
```

### Response
```json
{
  "success": true,
  "data": {
    "sessionId": "onboard_def456",
    "status": "ingesting"
  }
}
```

---

## Onboarding Statuses

| Status | Description |
|--------|-------------|
| `uploaded` | Documents successfully uploaded |
| `ingesting` | Fetching documents from external source |
| `extracting` | LLM is analyzing documentation |
| `extracted` | Capabilities and contracts ready for review |
| `certified` | Provider approved and ready for use |
| `failed` | Processing error encountered |

---

## Next Steps

<div className="doc-cards">

- [**Custom Providers Guide**](/docs/guides/custom-providers) — Step-by-step walkthrough
- [**Providers Features**](/docs/features/providers) — How providers work
- [**Integration API**](/docs/api/integration) — Use your new provider

</div>