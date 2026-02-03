# Jobel Documentation

Enterprise-grade documentation for the Jobel AI platform, built with [Docusaurus](https://docusaurus.io/).

## Quick Start

### Local Development

```bash
cd documentation
npm install
npm run start
```

This starts a local development server at `http://localhost:3000`.

### Build

```bash
npm run build
```

Generates static content in the `build` directory.

## Deployment

Documentation is automatically deployed to GitHub Pages via GitHub Actions when changes are pushed to `main`.

**Live Site:** https://jobel-ai.github.io

## Structure

```
documentation/
├── docs/                    # Markdown documentation
│   ├── intro.md             # Introduction
│   ├── why-jobel.md         # Value proposition
│   ├── architecture/        # Architecture docs
│   ├── features/            # Feature docs
│   ├── guides/              # How-to guides
│   ├── api/                 # API reference
│   ├── enterprise/          # Enterprise features
│   └── community/           # Community docs
├── src/
│   ├── pages/               # Custom pages (landing)
│   └── css/                 # Custom styling
├── static/                  # Static assets
├── docusaurus.config.js     # Main configuration
└── sidebars.js              # Sidebar navigation
```

## Contributing

See [Contributing Guide](docs/community/contributing.md) for contribution guidelines.
