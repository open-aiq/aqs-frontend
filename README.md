# OpenAIQ (Frontend)

Open-source frontend for device owners to register air-quality monitors, receive a device secret (no rotation), and view PM2.5 readings.

## Quick Start

- Install: `npm install`
- Env: create `.env` with `VITE_CLERK_PUBLISHABLE_KEY=...`
- Develop: `npm run dev`

## MVP Pages

- Sign in/out (Clerk)
- Dashboard
- Devices list
- Register device (issue secret)
- Device details (PM2.5 chart/history)

## Conventions

- Components: use shadcn/ui via CLI only — never copy manually
  - Add components with: `npx shadcn@latest add <component>`
- Tech: React, TypeScript, Vite, Tailwind, shadcn/ui, Clerk
