# 2. High-Level Architecture
* **Pattern:** **Hybrid Rendering (SSR + Client Hydration).**
    * **Static Content (SSR):** Landing page text, SEO meta tags, and initial layout load via Next.js Server Components.
    * **Interactive Islands (Client):** HeroUI components (Cards, Accordions, Forms) are hydrated on the client for the "tricks" (animations).
* **Workspace Strategy:** **Turborepo** with **pnpm**.
    * `apps/web`: The public landing page (Phase 1).
    * `packages/ui`: The shared design system (HeroUI + Tailwind config). **Crucial:** This package exports the *theme*, ensuring future apps (e.g., `apps/dashboard`) look identical automatically.
