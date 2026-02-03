---
sidebar_position: 2
title: Docker Setup
description: Production-ready Docker deployment
---

# 🐳 Docker Setup

Deploy Jobel with Docker Compose for production-ready infrastructure.

---

## Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     Docker Network                          │
│                                                             │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────┐ │
│  │  Frontend   │  │   Backend   │  │     PostgreSQL      │ │
│  │  (Next.js)  │  │  (Express)  │  │  (pgvector)         │ │
│  │  :3000      │  │  :4000      │  │  :5432              │ │
│  └─────────────┘  └─────────────┘  └─────────────────────┘ │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Quick Start

```bash
# Clone and deploy
git clone https://github.com/jobel-ai/jobel-ai.github.io.git
cd Jobel
cp .env.example .env
docker-compose up --build -d
```

---

## Environment Configuration

### Required Variables

```bash
# .env file

# LLM Configuration (choose one)
LLM_PROVIDER=groq
GROQ_API_KEY=gsk_xxx

# Or use Claude
# LLM_PROVIDER=claude
# CLAUDE_API_KEY=sk-ant-xxx
```

### Optional Variables

```bash
# Port Configuration
PORT=4000
NEXT_PUBLIC_API_URL=http://localhost:4000

# LLM Settings
LLM_MAX_TOKENS=4096
GROQ_MODEL=llama-3.3-70b-versatile

# Embedding Provider
EMBEDDING_PROVIDER=gemini
GEMINI_API_KEY=AIza_xxx    # For embeddings

# Database (auto-configured in Docker)
DATABASE_URL=postgresql://jobel:jobel_secret@postgres:5432/jobel
```

---

## Docker Compose Services

### Frontend

```yaml
frontend:
  build: ./frontend
  ports:
    - "3000:3000"
  environment:
    - NEXT_PUBLIC_API_URL=http://backend:4000
  depends_on:
    - backend
```

### Backend

```yaml
backend:
  build: ./backend
  ports:
    - "4000:4000"
  env_file:
    - .env
  depends_on:
    postgres:
      condition: service_healthy
```

### PostgreSQL (pgvector)

```yaml
postgres:
  image: pgvector/pgvector:pg16
  ports:
    - "5432:5432"
  environment:
    POSTGRES_USER: jobel
    POSTGRES_PASSWORD: jobel_secret
    POSTGRES_DB: jobel
  volumes:
    - jobel-postgres-data:/var/lib/postgresql/data
```

---

## Common Commands

### Start All Services

```bash
docker-compose up -d
```

### View Logs

```bash
# All services
docker-compose logs -f

# Specific service
docker-compose logs -f backend
```

### Restart Services

```bash
docker-compose restart backend
```

### Stop All Services

```bash
docker-compose down
```

### Full Reset

```bash
docker-compose down -v
docker-compose up --build
```

---

## Health Checks

### Backend Health

```bash
curl http://localhost:4000/health

# Expected response
{
  "status": "healthy",
  "services": {
    "database": "connected",
    "llm": { "configured": true, "provider": "groq" }
  }
}
```

### Container Status

```bash
docker-compose ps

# Expected output
NAME              STATUS         PORTS
jobel-frontend    Up (healthy)   0.0.0.0:3000->3000/tcp
jobel-backend     Up (healthy)   0.0.0.0:4000->4000/tcp
jobel-postgres    Up (healthy)   0.0.0.0:5432->5432/tcp
```

---

## Production Deployment

### 1. Use Production Compose File

```yaml
# docker-compose.prod.yml
version: '3.8'

services:
  frontend:
    environment:
      - NODE_ENV=production
    restart: always

  backend:
    environment:
      - NODE_ENV=production
    restart: always
    
  postgres:
    restart: always
```

```bash
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d
```

### 2. Use External Database

For production, use a managed database:

```bash
DATABASE_URL=postgresql://user:pass@your-db.rds.amazonaws.com:5432/jobel
```

### 3. Configure SSL/TLS

Use a reverse proxy like nginx or Traefik:

```nginx
server {
    listen 443 ssl;
    server_name jobel.yourdomain.com;
    
    ssl_certificate /etc/ssl/certs/cert.pem;
    ssl_certificate_key /etc/ssl/private/key.pem;
    
    location / {
        proxy_pass http://localhost:3000;
    }
    
    location /api {
        proxy_pass http://localhost:4000;
    }
}
```

---

## Scaling

### Horizontal Scaling

Frontend and backend are stateless, scale freely:

```bash
docker-compose up -d --scale backend=3
```

### Load Balancing

Use Traefik or nginx for load balancing:

```yaml
# docker-compose.scale.yml
services:
  traefik:
    image: traefik:v2.10
    command:
      - "--providers.docker=true"
    ports:
      - "80:80"
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
```

---

## Troubleshooting

### Database Connection Issues

```bash
# Check postgres is healthy
docker-compose ps postgres

# View postgres logs
docker-compose logs postgres

# Connect directly
docker-compose exec postgres psql -U jobel -d jobel
```

### Backend Not Starting

```bash
# Check environment variables
docker-compose exec backend env | grep LLM

# View full logs
docker-compose logs --tail=100 backend
```

### Memory Issues

```yaml
# docker-compose.override.yml
services:
  backend:
    deploy:
      resources:
        limits:
          memory: 2G
```

---

## Next Steps

<div className="doc-cards">

- [**Quick Start**](/docs/guides/quickstart) — First integration
- [**Custom Providers**](/docs/guides/custom-providers) — Add your APIs
- [**Enterprise Features**](/docs/enterprise/features) — Production capabilities

</div>