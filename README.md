# Deablr Main

Welcome to the **Deablr** central repository! This repository hosts the main server, AWS setup, and front-end site. Note that it does not include the Minecraft Server, Lambdas, or proofs of concept.

The **Deablr** project prioritizes:
- **Stability:** Ensuring production-ready solutions.
- **Learning:** Facilitating growth and understanding for contributors.
- **Accessibility:** Keeping the codebase friendly for developers of all experience levels.

Some technology choices may not be optimal but are implemented in a manner that prioritizes stability and real-world application.

## Table of Contents
- [Naming Convention](#naming-convention)
- [Project Structure](#project-structure)
- [Technologies](#technologies)
  - [NodeJs](#nodejs) 
  - [Postgres](#postgresql) 
  - [Authentication](#authentication)
- [Running Locally](#running-locally)
- [Ports](#ports)
- [Tagging and Releases](#tagging-and-releases)
- [Continuous Integration and Continuous Delivery (CI/CD)](#continuous-integration-and-continuous-delivery-cicd)

---

## Naming Convention

APIs and Lambdas in the project are named after cousins, ordered by their birthdates:
- **Miranda** - October 14, 1993
- **Alex** - 1996
- **Sierra** - October 18
- **Sam** - ?
- **Andrew** - ?

This convention adds a personal touch to the project while maintaining an organized structure.

---

## Project Structure

The project adheres to the following structure:

- `.idea/` - IDE configurations.
- `.nvmrc` - Node.js version manager configuration.
- `.run/` - Run configurations.
- `aws/` - TypeScript CDK for main **Deablr** functionality.
- `client/` - Main website codebase ([README](client/README.md)).
- `miranda/` - First API implementation ([README](miranda/README.md)).
- `gencerts.sh` - Script to generate SSL key and permissions.
- `compose.yaml` - Monorepo configuration for Docker Compose.

---

## Technologies

The **Deablr** project leverages the following technologies:

### Node.js
- The monorepo is built around Node.js and adheres to the latest LTS version (currently Node 22).
- When updating Node.js, update the following files:
   - `/.nvmrc`
   - `/miranda/Dockerfile`
   - `/client`
   - `/compose.yaml`

### PostgreSQL
- PostgreSQL is the primary database solution.
- Table schemas and migrations are handled by the respective service.

### TypeScript
- TypeScript is preferred for consistency and reliability.
- Ensure consistent TypeScript versions across all services.

### Authentication
Leverage [AWS Amplify](https://aws.amazon.com/amplify/authentication/)


For more details, refer to the [Miranda API README](miranda/README.md) and [Client README](client/README.md).

---

## Running Locally

To run the project locally, choose one of the following methods:
1. Use **Docker Compose**:
   - Execute `docker compose up` to spin up the entire monorepo.
2. Utilize **WebStorm configurations**:
   - Predefined configurations are available for local development.

For specific development workflows, refer to the [Miranda API README](miranda/README.md) and [Client README](client/README.md).

All sub-projects will utilize a shared Postgres instance.

---

## Ports
- For the Deablr system, all Minecraft servers will run with ports in the 25000-25999 range. 
  - The main proxy will run on the default 25565
- For the Deablr system, all services will run in the 28000-28499 range.
  - Postgres: 28000
  - Miranda: 28001
- For the Deablr system, all client dev servers will run in the 28500-28999 range.
  - The main site will run on 28500 (dev HMR and static)

## Tagging and Releases

Releases are managed using a tagging system based on the date and build attempt:

**Versioning Pattern:**
`YYYY.MM.DDBB`
- `YYYY`: Year
- `MM`: Month (two digits)
- `DD`: Day (two digits)
- `BB`: Build attempt (two digits)

### Development Release
1. Merge changes into the feature branch `feature/*`.
2. Create a tag using the naming convention: `dev-YYYY.MM.DDBB-*` (e.g., `dev-2024.12.2801-*`).
   - **Note:** Use GitHub's "Create Release" option and mark it as a **pre-release**.
3. The pipeline will automatically deploy the changes.

### Production Release
1. Merge changes into the `main` branch.
2. Create a tag using the naming convention: `prod-YYYY.MM.DDBB` (e.g., `prod-2024.12.2801`).
   - **Note:** Use GitHub's "Create Release" option without marking it as a pre-release.
3. Approve the changes in **CodePipeline**.

---

## Continuous Integration and Continuous Delivery (CI/CD)

**TODO:** Map and build the CI/CD pipeline to streamline deployments and integrations.

### Planned Features:
- Automated builds and testing for all pull requests.
- Deployment pipelines for staging and production environments.
- Monitoring and alerts for successful deployments.

---
