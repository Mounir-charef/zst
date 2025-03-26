# Project Overview

This repository is a monorepo managed with Nx, housing multiple applications and libraries.
Zst is an all-in-one e-commerce platform, designed to handle everything from storefronts to backend operations in a modular and scalable architecture.

## Project Structure

The project is organized as follows:

```
.
├── .editorconfig          # Editor configuration for consistent coding styles
├── .eslintignore          # Files and directories ignored by ESLint
├── .eslintrc.json         # ESLint configuration
├── .gitignore             # Git ignored files
├── .npmrc                 # npm configuration
├── .prettierignore        # Files and directories ignored by Prettier
├── .prettierrc            # Prettier configuration
├── components.json        # Component configuration (if applicable)
├── jest.config.ts         # Jest configuration for testing
├── jest.preset.js         # Jest preset configuration
├── nx.json                # Nx workspace configuration
├── package.json           # Project dependencies and scripts
├── pnpm-lock.yaml         # Lockfile for pnpm package manager
├── README.md              # Project documentation (this file)
├── tsconfig.base.json     # Base TypeScript configuration
├── tsconfig.json          # Root TypeScript configuration
├── .nx/                   # Nx cache and metadata
├── .vscode/               # VS Code workspace settings
├── apps/                  # Applications in the monorepo
│   ├── admin/             # Admin application
│   ├── client/            # Client application
│   ├── store/             # Store application
│   └── supplier/          # Supplier application
└── libs/                  # Shared libraries
    └── ui-kit/            # UI components library
```

## Applications

### `apps/admin`

The admin application, which includes administrative tools and dashboards. It uses Next.js and has its own `.env.local` and ESLint configuration.

### `apps/client`

The client-facing application, designed for end-users. It includes localization support and uses Tailwind CSS for styling.

### `apps/store`

The store application, potentially for e-commerce or inventory management. It includes reusable components and localization.

### `apps/supplier`

The supplier application, possibly for managing supplier interactions. It also supports localization and uses Tailwind CSS.

## Libraries

### `libs/ui-kit`

A shared library containing reusable UI components and utilities for use across applications. It includes hooks, utility functions, and Tailwind CSS configurations.

## Development

### Prerequisites

- Node.js
- pnpm (preferred package manager)
- Nx CLI (optional but recommended)

### Installation

Install dependencies using `pnpm`:

```sh
pnpm install
```

### Running Applications

You can serve individual applications using pnpm. For example, to serve the `admin` app:

```sh
pnpm run admin:dev
```

Or serving all application at once:

```sh

pnpm run dev
```

### Exploring the Dependency Graph

To visualize the dependency graph, run:

```sh
nx graph
```

## Configuration Files

- **`.editorconfig`**: Ensures consistent coding styles across editors.
- **`.eslintrc.json`**: Configures ESLint for linting JavaScript/TypeScript code.
- **`.prettierrc`**: Configures Prettier for code formatting.
- **`jest.config.ts`**: Sets up Jest for unit testing.
- **`nx.json`**: Defines Nx workspace settings and project relationships.
- **`tsconfig.base.json`**: Shared TypeScript configuration for the workspace.

## Nx Workspace

This project uses Nx to manage the monorepo. Nx provides tools for dependency graph visualization, task running, and caching.

### Dependency Graph

To visualize the dependency graph, run:

```sh
nx graph
```
