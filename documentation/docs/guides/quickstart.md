---
sidebar_position: 1
title: Quick Start
description: Get Jobel running in 5 minutes
---

# ⚡ Quick Start

Get Jobel running and generate your first integration in 5 minutes.

---

## Prerequisites

- **Docker & Docker Compose** (recommended)
- Or **Node.js 20+** for local development

---

## Option 1: Docker (Recommended)

### Step 1: Clone the Repository

```bash
git clone https://github.com/jobel-ai/jobel-ai.github.io.git
cd Jobel
```

### Step 2: Configure Environment

```bash
# Copy example environment file
cp .env.example .env

# Edit .env with your LLM API key (at minimum)
# GROQ_API_KEY=gsk_xxx  (free tier available)
```

### Step 3: Start Services

```bash
docker-compose up --build
```

This starts:
- **Frontend** at http://localhost:3000
- **Backend** at http://localhost:4000
- **PostgreSQL** with pgvector

### Step 4: Generate Your First Integration

1. Open http://localhost:3000
2. Enter a request like:
   > "Add Stripe subscription management with monthly billing"
3. Watch Jobel generate production-ready code! 🎉

---

## Option 2: Local Development

### Step 1: Start the Backend

```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your API keys
npm run dev
```

### Step 2: Start the Frontend

```bash
# New terminal
cd frontend
npm install
npm run dev
```

### Step 3: Access the Application

- **Frontend**: http://localhost:3000
- **Backend**: http://localhost:4000/health

---

## First Integration

### Try This Request

In the chat interface, enter:

> "Create an Auth0 login with Google SSO and JWT protection for API routes"

### Expected Output

Jobel will generate:
1. **Architecture plan** — Component breakdown
2. **Implementation code** — Ready-to-use files
3. **Setup instructions** — Environment variables needed
4. **Security validation** — Patterns enforced

---

## Configuration

### Minimal Setup (Demo Mode)

Without any API keys, Jobel runs in **demo mode** with sample responses:

```bash
# .env - No API keys needed for demo
PORT=4000
CORS_ORIGIN=http://localhost:3000
```

### Full Setup

For real AI-powered generation:

```bash
# .env - Choose your LLM provider

# Option A: Groq (free tier)
LLM_PROVIDER=groq
GROQ_API_KEY=gsk_xxx

# Option B: Claude (best reasoning)
LLM_PROVIDER=claude
CLAUDE_API_KEY=sk-ant-xxx

# Option C: OpenAI (most popular)
LLM_PROVIDER=openai
OPENAI_API_KEY=sk-xxx

# Option D: Gemini (free tier)
LLM_PROVIDER=gemini
GEMINI_API_KEY=AIza_xxx
```

---

## Verify Installation

### Health Check

```bash
curl http://localhost:4000/health

# Response
{
  "status": "healthy",
  "services": {
    "llm": { "configured": true, "provider": "groq" },
    "providers": { "count": 2 }
  }
}
```

### List Providers

```bash
curl http://localhost:4000/api/integration/providers

# Response
{
  "providers": [
    { "id": "auth0", "name": "Auth0", "status": "certified" },
    { "id": "stripe", "name": "Stripe", "status": "certified" }
  ]
}
```

---

## What's Next?

<div className="next-steps">

### Learn
- [**Why Jobel?**](/docs/why-jobel) — Understand the value proposition
- [**Architecture**](/docs/architecture/overview) — How it works under the hood

### Build
- [**Docker Setup**](/docs/guides/docker-setup) — Production deployment
- [**Custom Providers**](/docs/guides/custom-providers) — Add your own APIs

### Explore
- [**API Reference**](/docs/api/overview) — Full API documentation
- [**Enterprise Features**](/docs/enterprise/features) — Advanced capabilities

</div>

---

## Troubleshooting

### Docker Issues

```bash
# Rebuild from scratch
docker-compose down -v
docker-compose up --build
```

### Port Conflicts

```bash
# Check if ports are in use
netstat -an | grep 3000
netstat -an | grep 4000

# Use alternative ports
PORT=4001 docker-compose up
```

### LLM Connection Issues

```bash
# Verify API key
curl http://localhost:4000/api/llm/status

# Check logs
docker-compose logs backend
```

---

## Get Help

- 📚 [Full Documentation](/docs/)
- 💬 [Discord Community](https://discord.gg/jobel)
- 🐛 [GitHub Issues](https://github.com/jobel-ai/jobel-ai.github.io/issues)