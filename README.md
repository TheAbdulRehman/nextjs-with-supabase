# MindDock

A fresh [Next.js](https://nextjs.org) 16 (App Router) + React 19 project, styled with [Tailwind CSS](https://tailwindcss.com) and [shadcn/ui](https://ui.shadcn.com/). [Supabase](https://supabase.com) cookie-based auth is wired up under `lib/supabase/` but currently disabled in the proxy while the project is being re-scaffolded.

## Getting started

This project uses **pnpm**.

1. Install dependencies:

   ```bash
   pnpm install
   ```

2. Create a `.env.local` file in the project root with your Supabase credentials (required only once you re-enable auth):

   ```env
   NEXT_PUBLIC_SUPABASE_URL=[YOUR SUPABASE PROJECT URL]
   NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=[YOUR SUPABASE PUBLISHABLE OR ANON KEY]
   ```

   Both values are found in your [Supabase project's API settings](https://supabase.com/dashboard/project/_?showConnect=true). The `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` variable accepts either a new **publishable** key or a legacy **anon** key.

3. Start the dev server:

   ```bash
   pnpm dev
   ```

   The app runs at [localhost:3000](http://localhost:3000/).

## Scripts

- `pnpm dev` — start the dev server
- `pnpm build` — production build
- `pnpm start` — serve a production build
- `pnpm lint` — run ESLint

## Project structure

- `app/page.tsx` — the single welcome page
- `app/layout.tsx` — root layout (light theme by default via `next-themes`)
- `components/ui/` — shadcn/ui primitives
- `lib/supabase/` — Supabase browser, server, and proxy clients (kept intact)
- `proxy.ts` — root middleware; Supabase `updateSession()` is commented out (pass-through). Restore the import and call to re-enable session refresh.
