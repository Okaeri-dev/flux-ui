# Flux UI Monorepo

This is the main repository for the Flux UI project, a monorepo containing the main Angular application, a shared utilities library, and a mock API server.

## Project Structure

```
.
├── angular.json
├── compose.yaml
├── Dockerfile
├── eslint.config.js
├── flux
│   ├── package.json
│   ├── postcss.config.mjs
│   ├── public
│   ├── src
│   ├── tailwinds.config.js
│   ├── tsconfig.app.json
│   ├── tsconfig.json
│   ├── tsconfig.spec.json
│   └── vitest.config.mts
├── flux-utilities
│   ├── ng-package.json
│   ├── package.json
│   ├── README.md
│   ├── src
│   ├── tsconfig.lib.json
│   ├── tsconfig.lib.prod.json
│   ├── tsconfig.spec.json
│   └── vitest.config.mts
├── mock-api
│   ├── next.config.ts
│   ├── next-env.d.ts
│   ├── package.json
│   ├── public
│   ├── src
│   └── tsconfig.json
├── package.json
├── README.Docker.md
├── README.md
├── tests
│   └── vitest
├── tsconfig.json
├── vitest.config.mts
└── vitest.workspace.json
```

## Sub-projects

- [**flux**](./flux/README.md): The main Angular application.
- [**flux-utilities**](./flux-utilities/README.md): A library of shared components and utilities for the Angular application.
- [**mock-api**](./mock-api/README.md): A Next.js application that provides a mock API for development and testing.

## Environment Configuration

To run the application locally, you need to create a `.env` file in the root of the project. This file is used to store environment-specific variables and is not checked into version control.

Create a file named `.env` in the project root and add the following key:

```
API_URL
```

You will need to provide a value for `API_URL`. For local development against the included mock API, the correct URL is `http://localhost:3000/api/v1`.

## Available Commands

The following commands can be run from the root of the project:

| Command           | Description                                                                                 |
| ----------------- | ------------------------------------------------------------------------------------------- |
| `ng`              | Execute Angular CLI commands.                                                               |
| `start`           | Starts the development server for the `flux` application.                                   |
| `pretty`          | Lints and formats the code in the entire monorepo.                                          |
| `build`           | Builds the `flux` application.                                                              |
| `watch`           | Builds the `flux` application and watches for changes.                                      |
| `test`            | Runs tests for all projects.                                                                |
| `sanity`          | Runs a sanity check on the codebase, including linting, testing, and building all projects. |
| `prepare`         | Prepares the husky pre-commit hooks.                                                        |
| `prestart:prod`   | Substitutes environment variables for the production environment.                           |
| `prebuild:prod`   | Substitutes environment variables for the production environment.                           |
| `start:prod`      | Starts the development server with the production configuration.                            |
| `build:prod`      | Builds the `flux` application for production.                                               |
| `build:prod:libs` | Builds the `flux-utilities` library for production.                                         |
| `docker:run`      | Builds and runs the docker containers for the project.                                      |
| `serve:ssr:flux`  | Serves the server-side rendered `flux` application.                                         |

