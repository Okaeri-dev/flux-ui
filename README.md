# FluxUi

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.3.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## 🗂️ Monorepo Folder Structure

```text

├── angular.json                      # Root angular configuration
├── flux                              # Flux Shell
│   ├── package.json
│   ├── public                        # Public assets
│   ├── src
│   │   ├── app
│   │   │   ├── app.component.ts      # UI Entrypoint
│   │   │   ├── app.config.ts         # Root level providers and imports
│   │   │   ├── app.routes.ts         # Root level routes
│   │   │   ├── components/           # Reusable UI components
│   │   │   ├── feature-toggles/      # Feature toggling logic
│   │   │   ├── guards/               # Route guards
│   │   │   ├── pipes/                # Custom pipes
│   │   │   ├── resolvers/            # Route resolvers
│   │   │   ├── services/             # Shared services
│   │   │   └── store/                # State management
│   │   │       ├── actions/          # Actions to trigger state updates
│   │   │       ├── effects/          # Side effects and async actions
│   │   │       ├── facade/           # Facade pattern for state management
│   │   │       ├── models/           # Data models and interfaces
│   │   │       ├── reducer/          # Reducers to modify state
│   │   │       └── selectors/        # Selectors to retrieve state
│   │   ├── index.html                # Bootstrap
│   │   ├── main.ts
│   │   └── styles.scss
│   ├── tsconfig.app.json
│   ├── tsconfig.spec.json
├── flux-utilities                  # Shared library
│   ├── ng-package.json
│   ├── package.json
│   ├── README.md
│   ├── src
│   │   ├── lib
│   │   │   ├── components/         # Reusable UI components
│   │   │   ├── guards/             # Route guards
│   │   │   ├── pipes/              # Custom pipes
│   │   │   ├── resolvers/          # Route resolvers
│   │   │   ├── services/           # Shared services
│   │   │   └── store/              # State management
│   │   └── public-api.ts
│   ├── tsconfig.lib.json
│   ├── tsconfig.lib.prod.json
│   └── tsconfig.spec.json
├── mock-api
│   ├── next.config.ts
│   ├── next-env.d.ts
│   ├── package.json
│   ├── package-lock.json
│   ├── src
│   │   └── app
│   │       ├── api
│   │       │   ├── v1/                  # Mock API version 1
│   │       │   ├── v2/                  # Mock API version 2
│   │       ├── graphql                  # GraphQL related files
│   │       ├── mock/                    # Mock data responses
│   │       ├── models                   # Models for mock API data
│   │       ├── store                    # Mock state management for orchestration
│   │       └── utils                    # Helper utilities for mock API
│   └── tsconfig.json
├── package.json
├── README.md
├── tsconfig.json
└── yarn.lock
```
