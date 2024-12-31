# Miranda API

Welcome to the **Miranda API** repository! This is a Node.js Express server built with TypeScript, designed as the first API for the **Deablr** system. The Miranda API focuses on maintainable, type-safe development practices while utilizing modern JavaScript and TypeScript features.

## Table of Contents
- [Technologies](#technologies)
- [Project Structure](#project-structure)
- [Development Guidelines](#development-guidelines)
- [Running Locally](#running-locally)
- [Tagging and Releases](#tagging-and-releases)
- [Continuous Integration and Continuous Delivery (CI/CD)](#continuous-integration-and-continuous-delivery-cicd)

---

## Technologies

The Miranda API is built with the following technologies:

- **Node.js**: Runtime environment (using the latest LTS version).
- **Express**: Lightweight web framework for building APIs.
- **TypeScript**: For type-safe development and modern JavaScript features.
- **ESLint**: To enforce consistent coding standards.

Additionally, we use Node.js' `--experimental-strip-types` flag to strip TypeScript types during runtime, ensuring efficient execution without a separate transpilation step.

---

## Project Structure

The project follows this directory structure:

- `src/` - Contains the server code, routes, middleware, and utilities.
- `tests/` - Test cases for the API.
- `tsconfig.json` - TypeScript configuration file.
- `.eslintrc.js` - ESLint configuration file.
- `package.json` - Project metadata and dependencies.

Additional details about individual files or folders will be added as the project evolves.

---

## Development Guidelines

To maintain consistency and avoid common pitfalls, the following guidelines are enforced:

1. **Avoid enums and namespaces**:
    - Use **string literals** or **object literals** instead of enums.
    - Use **modules** instead of namespaces to organize code.

2. **Code quality checks**:
    - All code must pass **ESLint** checks before being merged.

3. **TypeScript best practices**:
    - Use strict types and avoid `any` whenever possible.
    - Write clear and concise comments for complex logic.

---

## Running Locally

To run the Miranda API locally:

1. Install dependencies:
   ```bash
   npm install
   ```
2. Build project
   ```bash
   npm run build
   ```

3. Start the server:
   ```bash
   npm start
   ```

4. Access the API at `http://localhost:28001` (default port).

For development mode with live reload, use:
```bash
npm run dev
```

---
