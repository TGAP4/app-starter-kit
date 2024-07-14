# React-Express-GraphQL Fullstack Starter Kit

## Setup

- Create a new repository using this template
- Create a new Web Service on Render and connect to the GitHub repository. Select Docker as the language, and deploy
- Clone the repository locally, run `bun install` to install dependencies, then `bun run prisma generate` to generate the Prisma Client

## How-To

- `bun dev` - Starts the development server with HMR and automatically updated TS types generated from the GraphQL schema
- `bun run migrate` - Generates a new migration from any changes made to the Prisma schema and regenerates the Prisma Client
  - To **prototype** schema design **locally**, make the desired changes to the Prisma schema and use `bun run prisma db push`. Be sure to revert changes and run the command again before properly migrating to avoid resetting the database ([docs](https://www.prisma.io/docs/orm/prisma-migrate/workflows/prototyping-your-schema))
- `bun run studio` - Launches Prisma Studio, a simple interface to explore and manipulate data ([docs](https://www.prisma.io/studio))
- Visit `/graphql` to access an in-browser IDE for writing, validating, and testing GraphQL queries

<br />

## Stack

#### Frontend:

- [React](https://react.dev/) - The library for web and native user interfaces
- [Chakra UI](https://v2.chakra-ui.com/) - React component library for building accessible, customizable, and responsive web interfaces
- [React Router](https://reactrouter.com/en/main/start/overview) - Routing library that enables dynamic, client-side navigation in React apps, improving responsiveness and performance
- [TanStack Query](https://tanstack.com/query/latest) - Data-fetching library that simplifies data fetching and state management with automatic caching and efficient synchronization
- [graphql-request](https://www.npmjs.com/package/graphql-request) - Minimal GraphQL client supporting Node and browsers for scripts or simple apps
  - Used in combination with TanStack Query and GraphQL-Codegen to provide fully-typed client-side GraphQL operations

#### Backend:

- [Express](https://expressjs.com/) - Backend web application framework for building RESTful APIs with Node.js
- [GraphQL](https://graphql.org/) - Data query and manipulation language for APIs and a query runtime engine
- [GraphQL Yoga](https://the-guild.dev/graphql/yoga-server) - Fully-featured GraphQL Server with focus on easy setup, performance and great developer experience
- [Prisma](https://www.prisma.io/graphql) - Next-generation ORM for Node.js & TypeScript with a readable data model, automated migrations, type-safety, and auto-completion
- [Pothos GraphQL](https://pothos-graphql.dev/) - Plugin-based GraphQL schema builder for typescript
- [Prisma Plugin for Pothos](https://pothos-graphql.dev/docs/plugins/prisma) - Enables efficient, type-safe GraphQL API creation by integrating Prisma models and optimizing database queries

#### Devops:

- [TypeScript](https://www.typescriptlang.org/) - Strongly-typed superset of JavaScript that enhances code quality and developer productivity
- [Bun](https://bun.sh/) - Complete toolkit for building JavaScript apps, including a package manager, test runner, and bundler
- [Vite](https://vitejs.dev/) - Modern build tool and development server that offers significantly faster build times and optimized code sizes
- [SQLite](https://www.sqlite.org/) - Lightweight, serverless database engine for fast, reliable data storage in embedded systems and small applications
- [Render](https://render.com/)- Unified cloud to build and run apps with free TLS certificates, global CDN, private networks and auto deploys from Git
- [Docker](https://www.docker.com/) - Platform that uses containerization to package, distribute, and run applications consistently across environments
  - The development server can be run without it (i.e. `bun dev`) but it is required to deploy to Render with Bun
- [GraphQL-Codegen](https://the-guild.dev/graphql/codegen) - Automatically generates typed client-side code from GraphQL schemas, ensuring consistency across the codebase
- [gql.tada](https://gql-tada.0no.co/) - Document authoring library that provides instant type inference for GraphQL queries and fragments
- [ESLint](https://eslint.org/) - JavaScript linter that improves code quality by catching errors, enforcing standards, and promoting best practices
- [Prettier](https://prettier.io/) - Automatic code formatter that enforces consistent style, improving readability and collaboration
- [Husky](https://typicode.github.io/husky/) - Simplifies Git hooks, automating tasks and enforcing code standards to improve workflow and consistency

## Additional Resources

- [Chakra components docs](https://v2.chakra-ui.com/docs/components)
- [Prisma CRUD docs](https://www.prisma.io/docs/orm/prisma-client/queries/crud)
- [Bun-Docker deployment on Render](https://github.com/render-examples/bun-docker)
- [Vite-Express integration](https://github.com/szymmis/vite-express)
- [Why use Vite when Bun is also a bundler?](https://dev.to/this-is-learning/why-use-vite-when-bun-is-also-a-bundler-vite-vs-bun-2723)
