# Backend service

This directory contains the server-side handlers that were previously bundled with the Next.js frontend. Move or deploy these routes to a separate runtime (for example, a serverful Node.js/Edge worker deployment) while keeping the frontend statically hosted.

## Routes

- `api/health` – basic health check endpoint
- `api/dev/simulator` – development-only streaming simulator
- `api/billing/subscription-status` – checks a user's Clerk-backed subscription metadata

`middleware.ts` holds the Clerk-powered route protection that was applied when these handlers were part of the integrated Next.js app. Reuse or adapt it in the backend deployment that will sit behind your CDN-hosted frontend.
