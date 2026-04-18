# Shtraff Saver API

Backend service for working with fines data, built with NestJS, Prisma, and PostgreSQL.

## Tech Stack

- Programming language: TypeScript `5.7.3`
- Runtime: Node.js `22.x` recommended
- Framework: NestJS `11.x`
- Database: PostgreSQL `16+`
- ORM: Prisma `7.7.0`
- Package manager: pnpm `10.32.1`

## Requirements

Make sure these tools are installed on your system:

- Node.js
- pnpm
- PostgreSQL

Optional global tools:

```bash
npm install -g prisma
npm install -g @nestjs/cli
npm install -g pnpm
```

## Installation

Install dependencies:

```bash
pnpm install
```

Copy environment file:

```bash
cp .env.example .env
```

For Windows PowerShell:

```powershell
Copy-Item .env.example .env
```

## Environment Variables

Update `.env` before running the project.

## Database Setup

If you want to create a development migration instead:

```bash
pnpm prisma:migrate
```

Open Prisma Studio:

```bash
pnpm prisma:studio
```

## Run The Project

Run in normal mode:

```bash
pnpm start
```

Run in watch mode:

```bash
pnpm run start:watch
```

Run in Nest development mode:

```bash
pnpm run start:dev
```

Build the project:

```bash
pnpm build
```

Run compiled build:

```bash
pnpm run start:prod
```

## API Access

After startup:

- App base URL: `http://localhost:1721`
- Swagger docs: `http://localhost:1721/docs`
- API version prefix: `/api/v1`

Swagger basic auth users currently configured in the project:

- username: `1`, password: `1`
- username: `shtraff`, password: `shtraff`

## Available Endpoints

Current HTTP routes in the project:

- `GET /` - health-like hello endpoint
- `GET /fines` - get all fines
- `GET /fines/:id` - get one fine
- `POST /fines` - create fine
- `PATCH /fines/:id` - update fine
- `DELETE /fines/:id` - delete fine

## Useful Commands

```bash
# lint and format source files
pnpm fmt

# lint project
pnpm lint

# generate Prisma client
pnpm prisma:generate

# create development migration
pnpm prisma:migrate

# push schema to database
pnpm prisma:push

# open Prisma Studio
pnpm prisma:studio

# build project
pnpm build

# run project
pnpm start

# run project in watch mode
pnpm run start:watch

# run project in dev mode
pnpm run start:dev

# run tests
pnpm test

# run tests in watch mode
pnpm run test:watch

# coverage
pnpm run test:cov
```

## Project Structure

```text
src/
  common/        shared helpers, enums, pipes, guards, exceptions
  config/        environment and app config
  modules/
    fines/       fines module
    prisma/      prisma module and service
  app.controller.ts
  app.module.ts
  main.ts
prisma/
  schema.prisma
```

## Notes

- Prisma datasource is configured for PostgreSQL.
- The current project includes RabbitMQ-related environment settings in config validation.
- Build output is generated into the `lib` directory.
