# Architecture Document: Ash Therapy & Counselling (v2.0)

## 1. Executive Summary
This project is a scalable, full-stack web application designed to serve as the digital presence for Ash Therapy. It uses a **Monorepo** architecture to enforce a strict separation between the "Marketing/Landing" concerns (Phase 1) and future "Application/Booking" concerns (Phase 2), ensuring code reusability and scalability from Day 1.

## 2. High-Level Architecture
* **Pattern:** **Hybrid Rendering (SSR + Client Hydration).**
    * **Static Content (SSR):** Landing page text, SEO meta tags, and initial layout load via Next.js Server Components.
    * **Interactive Islands (Client):** HeroUI components (Cards, Accordions, Forms) are hydrated on the client for the "tricks" (animations).
* **Workspace Strategy:** **Turborepo** with **pnpm**.
    * `apps/web`: The public landing page (Phase 1).
    * `packages/ui`: The shared design system (HeroUI + Tailwind config). **Crucial:** This package exports the *theme*, ensuring future apps (e.g., `apps/dashboard`) look identical automatically.

## 3. Tech Stack (The "Source of Truth")

| Category | Technology | Version | Purpose |
| :--- | :--- | :--- | :--- |
| **Framework** | **Next.js** | 14+ (App Router) | Core framework. Enforces React Server Components. |
| **Language** | **TypeScript** | 5.x | Strict mode enabled. No `any` types allowed. |
| **Package Manager** | **pnpm** | 9.x | Enforces strict dependency isolation (security). |
| **Styling** | **Tailwind CSS** | 3.x | Utility-first styling. Configured in `packages/ui`. |
| **UI Library** | **HeroUI** | Latest | Base accessible components. |
| **Animation** | **Framer Motion** | (Via HeroUI) | Powers the "Fade Up" and complex interactions. |
| **Forms** | **React Hook Form** | Latest | Validation logic. |
| **Schema** | **Zod** | Latest | Type-safe validation for Forms AND API routes. |
| **Email** | **Resend** | SDK | Transactional email API (Developer friendly). |

## 4. Source Tree (Strict Monorepo Structure)

```text
ash-therapy-monorepo/
├── apps/
│   └── web/                      # PUBLIC LANDING PAGE
│       ├── app/
│       │   ├── page.tsx          # Composition of landing page sections
│       │   ├── layout.tsx        # Providers (HeroUIProvider)
│       │   └── api/
│       │       └── contact/      # API Route: POST /route.ts
│       ├── components/           # App-specific implementations
│       │   ├── sections/         # Big blocks: Hero.tsx, About.tsx
│       │   └── forms/            # ContactForm.tsx
│       ├── config/
│       │   └── site.ts           # Constant strings (nav links, SEO)
│       └── public/               # Static assets (images, fonts)
├── packages/
│   └── ui/                       # SHARED DESIGN SYSTEM
│       ├── src/
│       │   ├── theme/            # The "Sanctuary" Theme definitions
│       │   ├── components/       # Reusable atoms (Button, Card)
│       │   └── utils/            # Shared cn() helper
│       ├── tailwind.config.ts    # SHARED Tailwind config (Colors/Fonts)
│       └── package.json
├── .env.local.example            # Template for environment vars
├── pnpm-workspace.yaml           # Workspace definition
└── turbo.json                    # Build pipeline config
```

## 5. Theme & Styling Strategy (The "Sanctuary" Look)
To ensure the "Calm" vibe is consistent, we override HeroUI defaults at the packages/ui level.
* **Colors (Tailwind Config)**:
    * `primary`: Remapped to Sage Green (instead of HeroUI Blue).
    * `secondary`: Remapped to Clay/Terracotta.
    * `background`: Remapped to Cream/Off-White.

* **Border Radius:** Globally set to large or full (pills) to avoid sharp edges.

* **Typography:** Serif for Headings, Sans for Body.

## 6. Component Architecture

### A. The "Fade Up" Wrapper (packages/ui/FadeIn.tsx)
* **Responsibility**: A client component that wraps any content.
* **Props**: delay (number), direction ('up' | 'down'), children.
* **Tech**: Uses framer-motion useInView hook.
* **Logic**: initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}.

### B. Service Data Model (apps/web/config/services.ts)
* **Pattern**: Do not hardcode text in JSX. Use a config array.
* **Schema**: interface Service { title: string; description: string; icon: ReactNode; }
* **Usage**: The ServicesSection.tsx maps over this array to render ServiceCard components.

### C. Contact Form Logic
* **Client Side**: apps/web/components/forms/ContactForm.tsx
    * **Uses** `useForm` (React Hook Form) + zodResolver.
    * **State**: isSubmitting (disable button), isSuccess (show green check).

* **Server Side**: apps/web/app/api/contact/route.ts
    * **Validation**: Parses body with Zod schema. Returns 400 if invalid.
    * **Action**: Calls Resend API.
    * **Response**: Returns 200 JSON.

### 7. Configuration & Security
**Environment Variables**: (.env.local)
The developer MUST create this file.
```bash
# App Configuration
NEXT_PUBLIC_SITE_URL="[https://ashtherapy.co.uk](https://ashtherapy.co.uk)"

# Email Service (Resend)
RESEND_API_KEY="re_123..."
CONTACT_EMAIL_TO="ashsach25@outlook.com"
```

**Middleware** (middleware.ts)
* Phase 1: Empty/Passthrough (prepared for future auth).
* Phase 2: Will handle supabase-auth session checks for /dashboard routes.

8. Coding Standards & Rules
    1. **"Use Client" Discipline**: Only add `'use client'` to leaf components (buttons, forms, animations). Keep `page.tsx` as Server Components for SEO.
    2. **Strict Imports**: Imports from `packages/ui` must be used for all primitives. Do not import raw HeroUI components in `apps/web` if a wrapped version exists in `packages/ui`.
    3. **Responsive Design**: Mobile styles are default. Use `md:` and `lg:` prefixes for desktop overrides. No `sm:` unless strictly necessary.