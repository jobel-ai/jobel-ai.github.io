---
slug: /
sidebar_position: 1
title: Welcome to Jobel
description: Your AI Solutions Architect that never hallucinates
---

# 🚀 Welcome to Jobel

**The AI that reads the docs so you don't have to.**

Jobel is an enterprise-grade AI platform that transforms your natural language intent into production-ready, security-validated code. Unlike other AI code generators, Jobel **never hallucinates**—every line of code is grounded in verified API documentation.

---

## ⚡ Quick Start (5 Minutes)

### Prerequisites
- Docker & Docker Compose (recommended)
- Or Node.js 20+ for local development

### Option 1: Docker (Recommended)

```bash
# Clone the repository
git clone https://github.com/jobel-ai/jobel-ai.github.io.git
cd Jobel

# Start all services
docker-compose up --build

# Access the application
# Frontend: http://localhost:3000
# Backend:  http://localhost:4000
```

### Option 2: Local Development

```bash
# Start Backend
cd backend
npm install
cp .env.example .env
npm run dev

# Start Frontend (new terminal)
cd frontend
npm install
npm run dev
```

---

## 🎯 What Can Jobel Do?

### Mode A: Integration Assistant
Tell Jobel what you want to build in plain English:

> "Add Stripe subscriptions with monthly and yearly plans, including webhook handling for payment failures"

Jobel will:
1. **Understand** your intent and break it into tasks
2. **Research** relevant documentation and patterns
3. **Generate** production-ready code with security baked in
4. **Validate** the output against API contracts

### Mode B: Provider Onboarding
Upload any API documentation to teach Jobel new providers:
- OpenAPI specs
- Markdown documentation
- Code examples
- Any structured content

---

## 🏆 Why Developers Choose Jobel

| Feature | Jobel | Other AI Tools |
|---------|-------|----------------|
| **Hallucination-Free** | ✅ Contract Authority ensures accuracy | ❌ Often invents fake APIs |
| **Security Patterns** | ✅ 50+ rules enforced by default | ❌ Manual review required |
| **Documentation Grounded** | ✅ Every method verified | ❌ Based on training data |
| **Multi-LLM Support** | ✅ Groq, Claude, OpenAI, Gemini | ❌ Usually locked to one |
| **Self-Hosted** | ✅ Your data stays private | ❌ Cloud-only |

---

## 🗂️ Documentation Structure

<div className="doc-cards">

### 📖 Learn
- [Why Jobel?](/docs/why-jobel) — The problem we solve
- [Architecture Overview](/docs/architecture/overview) — How it works
- [Quick Start Guide](/docs/guides/quickstart) — Get running in 5 minutes

### 🔧 Build
- [API Reference](/docs/api/overview) — Complete API documentation
- [Custom Providers](/docs/guides/custom-providers) — Add new integrations
- [Docker Setup](/docs/guides/docker-setup) — Production deployment

### 🏢 Enterprise
- [Enterprise Features](/docs/enterprise/features) — Multi-tenant, metrics, personas
- [Use Cases](/docs/enterprise/use-cases) — Real-world scenarios

</div>

---

## 💬 Need Help?

- 📚 Browse our [full documentation](/docs/intro)
- 💬 Join our [Discord community](https://discord.gg/jobel)
- 🐛 Report issues on [GitHub](https://github.com/jobel-ai/jobel-ai.github.io/issues)
- 🐦 Follow us on [Twitter](https://twitter.com/JobelAI)

---

<div className="cta-box">

## Ready to Ship Faster?

Stop debugging hallucinated APIs. Start building with confidence.

[**Get Started Now →**](/docs/guides/quickstart)

</div>