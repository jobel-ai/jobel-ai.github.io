---
sidebar_position: 1
title: API Overview
description: Jobel REST API reference
---

# 🔌 API Overview

Complete reference for the Jobel REST API.

---

## Base URL

```
http://localhost:4000
```

For production, replace with your deployment URL.

---

## Authentication

### Organization Context
Most endpoints require an organization ID header:

```bash
X-Org-ID: org_abc123
```

### Future: API Keys
Coming in v2:

```bash
Authorization: Bearer jobel_sk_xxx
```

---

## Response Format

All responses follow this structure:

```json
{
  "success": true,
  "data": { ... },
  "meta": {
    "requestId": "req_abc123",
    "duration": 1234
  }
}
```

### Error Response

```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid request body",
    "details": [...]
  }
}
```

---

## Endpoints Overview

### Integration (Mode A)

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/integration/analyze` | Generate code from intent |
| `GET` | `/api/integration/providers` | List certified providers |
| `GET` | `/api/integration/providers/:id` | Get provider details |
| `POST` | `/api/integration/validate` | Validate code security |

### Provider Onboarding (Mode B)

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/onboarding/upload` | Upload documentation |
| `POST` | `/api/onboarding/extract/:sessionId` | Extract capabilities |
| `GET` | `/api/onboarding/session/:sessionId` | Get session status |
| `POST` | `/api/onboarding/certify/:sessionId` | Approve/reject provider |

### Knowledge Base

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/knowledge/upload` | Upload document |
| `GET` | `/api/knowledge/search` | Search knowledge base |
| `GET` | `/api/knowledge/documents` | List documents |
| `DELETE` | `/api/knowledge/documents/:id` | Delete document |

### System

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/health` | Health check |
| `GET` | `/api/llm/status` | LLM provider status |

---

## Rate Limits

| Tier | Requests/Min | Notes |
|------|--------------|-------|
| Demo | 10 | No API key |
| Free | 60 | With API key |
| Pro | 300 | Coming soon |

---

## Common Headers

```bash
# Required for most endpoints
X-Org-ID: org_abc123

# Content type
Content-Type: application/json

# Accept
Accept: application/json
```

---

## SDKs

### Python (Coming Soon)
```python
from jobel import Jobel

client = Jobel(api_key="jobel_sk_xxx")
result = client.integrate("Add Stripe subscriptions")
```

### TypeScript (Coming Soon)
```typescript
import { Jobel } from '@jobel/sdk';

const client = new Jobel({ apiKey: 'jobel_sk_xxx' });
const result = await client.integrate('Add Stripe subscriptions');
```

---

## Next Steps

<div className="doc-cards">

- [**Integration API**](/docs/api/integration) — Generate code
- [**Onboarding API**](/docs/api/onboarding) — Add providers
- [**Quick Start**](/docs/guides/quickstart) — Get started

</div>