---
sidebar_position: 2
title: Contributing
description: How to contribute to Jobel
---

# 🤝 Contributing

We love contributions! Here's how to get involved.

---

## Ways to Contribute

### 🐛 Report Bugs

Found a bug? Open an issue:

1. Go to [GitHub Issues](https://github.com/jobel-ai/jobel-ai.github.io/issues)
2. Click "New Issue"
3. Choose "Bug Report"
4. Fill in the template

**Good bug reports include:**
- Steps to reproduce
- Expected vs actual behavior
- Environment details (OS, Node version)
- Error messages or screenshots

---

### 💡 Request Features

Have an idea? We want to hear it:

1. Check [existing issues](https://github.com/jobel-ai/jobel-ai.github.io/issues) first
2. Open a new issue with "Feature Request"
3. Describe the use case
4. Explain the expected behavior

---

### 🔌 Add a Provider

Help expand the provider ecosystem:

1. **Find API Documentation**
   - OpenAPI spec (preferred)
   - Markdown docs
   - Code examples

2. **Open a PR** with:
   - Provider knowledge module
   - Security requirements
   - Sample code
   - Tests

See [Custom Providers](/docs/guides/custom-providers) for the structure.

---

### 📝 Improve Documentation

Docs live in `documentation/docs/`:

1. Fork the repository
2. Edit markdown files
3. Open a PR
4. We'll review and merge!

---

### 🧑‍💻 Fix Bugs or Add Features

1. Check "good first issue" labels
2. Comment on the issue to claim it
3. Fork and create a branch
4. Make your changes
5. Open a PR

---

## Development Setup

### Prerequisites

- Node.js 20+
- Docker & Docker Compose
- Git

### Clone and Setup

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/Jobel.git
cd Jobel

# Install dependencies
cd backend && npm install
cd ../frontend && npm install

# Start development
docker-compose up postgres -d
cd backend && npm run dev
# New terminal
cd frontend && npm run dev
```

### Run Tests

```bash
cd backend
npm test
```

---

## Code Style

### TypeScript

- Use TypeScript for all backend code
- Enable strict mode
- Document public APIs with JSDoc

```typescript
/**
 * Generates code from user intent.
 * @param intent - Natural language description
 * @param providers - Provider IDs to use
 * @returns Generated code and validation results
 */
async function generateCode(
  intent: string,
  providers: string[]
): Promise<GenerationResult> {
  // Implementation
}
```

### React/Next.js

- Functional components with hooks
- TypeScript for all components
- CSS Modules for styling

### Naming Conventions

- **Files**: `kebab-case.ts`
- **Components**: `PascalCase.tsx`
- **Functions**: `camelCase`
- **Constants**: `SCREAMING_SNAKE_CASE`
- **Types**: `PascalCase`

---

## Commit Messages

Follow [Conventional Commits](https://conventionalcommits.org/):

```
feat: add SendGrid provider support
fix: resolve webhook signature verification issue
docs: update quickstart guide
chore: update dependencies
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation
- `style`: Formatting
- `refactor`: Code restructuring
- `test`: Adding tests
- `chore`: Maintenance

---

## Pull Request Process

1. **Create a branch**
   ```bash
   git checkout -b feat/my-feature
   ```

2. **Make changes** and test locally

3. **Commit** with descriptive messages

4. **Push** to your fork
   ```bash
   git push origin feat/my-feature
   ```

5. **Open a PR** against `main`

6. **Fill in the template**
   - What changed
   - Why it changed
   - How to test

7. **Respond to feedback** and iterate

---

## Review Criteria

PRs are reviewed for:

- ✅ **Functionality** — Does it work?
- ✅ **Tests** — Are there tests?
- ✅ **Security** — No vulnerabilities introduced
- ✅ **Documentation** — Are changes documented?
- ✅ **Style** — Follows code conventions

---

## Community Guidelines

### Be Respectful

- Be kind and constructive
- Assume positive intent
- Welcome newcomers

### Be Collaborative

- Share knowledge
- Help others learn
- Credit contributors

### Be Honest

- Admit mistakes
- Ask for help when needed
- Give honest feedback

---

## Recognition

Contributors are recognized in:

- **README** — Contributors section
- **Release Notes** — Credited for features/fixes
- **Discord** — Contributor role

---

## Getting Help

- 💬 [Discord](https://discord.gg/jobel) — Real-time help
- 🐛 [GitHub Issues](https://github.com/jobel-ai/jobel-ai.github.io/issues) — Bug reports
- 📚 [Documentation](/docs/) — Guides and reference

---

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

<div className="cta-box">

## Ready to Contribute?

[**View Open Issues →**](https://github.com/jobel-ai/jobel-ai.github.io/issues)
[**Join the Discord →**](https://discord.gg/jobel)

</div>