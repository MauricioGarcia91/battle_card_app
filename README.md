# Battle Card APP

## Description

`battle_card_app` is a project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

This applicacition allows to users managing battle cards and simulating battles between them. Users can browse through a list of cards, apply filters based on name and type, and participate in exciting card battles with customizable opponent selection.

**This applicacition is available for desktop devices now. Next version will be provide for small devices with responsive design.**

## Features

- **Card listing with filtering options by name and type**
- **Configurable pagination (2, 5, or 10 cards per page)**
- **Card detail page with battle arena.**
- **Opponent suggestions (weaker or stronger) or searching by name**

## Prerequisites

- [Node.js v20](https://nodejs.org/)

## Technologies

- Next.js 14
- Material-UI
- Zustand
- Jest
- React Testing Library

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/MauricioGarcia91/battle_card_api.git
   cd battle_card_app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

## Usage

### Check Port Usage

By default, this application runs on port 3000 and is configured to connect to the `battle_card_api` on port 4001.

1. To start the APP in development mode:

   ```bash
   npm run dev
   ```

   This will connect to battle `battle_card_api`. You must run battle `battle_card_api` before start this aplication

2. To run the tests:

   ```bash
   npm run test
   ```

## Architecture

### The application follows Next.js standards for page and route definitions. The folder structure is as follows:

- `App/`: Pages
- `UI/`: User interface components and skeletons for async components
- `Store/`: State management (Zustand stores)
- `Hooks/`: Custom React hooks
- `Lib/`:
  - Server actions
  - Services
  - Definitions
  - General utilities

## Environment Variables

This project includes environment variables for demonstration purposes. In a production environment, these should be managed securely and not included in the repository.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
