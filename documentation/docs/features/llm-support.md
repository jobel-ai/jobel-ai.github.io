---
sidebar_position: 4
title: LLM Support
description: Multiple providers and fallback mechanisms
---

# ⚡ LLM Support

Jobel is built with a **multi-provider LLM abstraction layer**, allowing you to choose the best model for your speed, cost, and intelligence requirements.

---

## Supported Providers

We support 5+ major LLM providers and 100+ models through OpenRouter.

| Provider | Recommended Model | Best For | Speed |
|----------|-------------------|----------|-------|
| **Groq** | `llama-3.3-70b-versatile` | Ultra-fast development | 🚄 |
| **Claude** | `claude-3-5-sonnet` | Complex logic, high-quality code | 🏎️ |
| **OpenAI** | `gpt-4o` | Reliable performance | 🚀 |
| **Gemini** | `gemini-1.5-pro` | Large context, excellent reasoning | 🛸 |
| **OpenRouter**| `any model` | Maximum flexibility | 🚗 |

---

## Configuration

Select and configure your preferred provider in the `.env` file.

### Option A: Groq (Default)
```bash
LLM_PROVIDER=groq
GROQ_API_KEY=gsk_xxx
GROQ_MODEL=llama-3.3-70b-versatile
```

### Option B: Claude (Antrhopic)
```bash
LLM_PROVIDER=claude
CLAUDE_API_KEY=sk-ant-xxx
CLAUDE_MODEL=claude-3-5-sonnet-20240620
```

### Option C: OpenAI
```bash
LLM_PROVIDER=openai
OPENAI_API_KEY=sk-xxx
OPENAI_MODEL=gpt-4o
```

### Option D: Gemini (Google)
```bash
LLM_PROVIDER=gemini
GEMINI_API_KEY=AIza_xxx
GEMINI_MODEL=gemini-1.5-pro
```

---

## Multi-Model Intelligence

Jobel uses different models for different phases of the [Multi-Agent Architecture](/docs/architecture/multi-agent) to optimize for cost and speed.

### Current Optimization Strategy:
- **Planning** (Groq/Llama-3): Fast task decomposition.
- **Extraction** (Claude/GPT-4o): High-accuracy contract extraction.
- **Execution** (Claude/GPT-4o): Complex code generation.
- **Validation** (Groq/Gemini): Safety and pattern checks.

---

## Advanced Features

### 1. Automatic Fallback (Roadmap)
If your primary provider (e.g., Claude) is down or hits rate limits, Jobel can automatically fallback to a secondary provider (e.g., Groq).

```bash
# Planned
PRIMARY_LLM=claude
SECONDARY_LLM=groq
TERTIARY_LLM=gemini
```

### 2. Context Window Management
Jobel intelligently manages context windows by using:
- **Semantic Filtering** — Only includes relevant chunks in the prompt.
- **Summary Truncation** — Summarizes previous agent turns.
- **Variable Injection** — Minimizes prompt boilerplate.

### 3. Streaming Responses
Jobel supports real-time streaming of code generation from all major providers, providing immediate feedback in the UI.

---

## Performance Comparison

| Provider | Avg. Latency | Code Quality | Context Window |
|----------|--------------|--------------|----------------|
| **Groq** | < 1.5s | 8/10 | 128k |
| **Claude** | 4-6s | 10/10 | 200k |
| **OpenAI** | 3-5s | 9/10 | 128k |
| **Gemini** | 3-5s | 9/10 | 1M+ |

---

## Adding Your Own Provider

You can add custom LLM providers by implementing the `LLMProvider` interface in `backend/src/llm/`.

```typescript
interface LLMProvider {
  id: string;
  name: string;
  generateText(prompt: string, options?: GenOptions): Promise<string>;
  generateJSON<T>(prompt: string, schema: any): Promise<T>;
  streamText(prompt: string): AsyncIterable<string>;
}
```

---

## Next Steps

<div className="doc-cards">

- [**Multi-Agent Architecture**](/docs/architecture/multi-agent) — How agents use LLMs
- [**Quick Start Guide**](/docs/guides/quickstart) — Setting your API keys
- [**Architecture Overview**](/docs/architecture/overview) — Detailed system diagram

</div>