
# Hello Clean Architecture (NestJS-style) - Entrega 2

This scaffold implements a minimal Clean Architecture (modular) structure for a Hello World service,
following the requirements: modules split into `interface`, `use-case`, `domain`, `infra` and `libs`.

## How to run

1. Install dependencies:
```bash
npm install
```

2. Development:
```bash
npm run start:dev
```

3. Build and run:
```bash
npm run build
npm start
```

The service exposes `GET /hello` which returns:
```json
{ "message": "Hello World" }
```

A Dockerfile and Kubernetes manifests are included.
