# 3. Tech Stack (The "Source of Truth")

| Category | Technology | Version | Purpose |
| :--- | :--- | :--- | :--- |
| **Framework** | **Next.js** | 16+ (App Router) | Core framework. Enforces React Server Components. |
| **Language** | **TypeScript** | 5.x | Strict mode enabled. No `any` types allowed. |
| **Package Manager** | **pnpm** | 9.x | Enforces strict dependency isolation (security). |
| **Styling** | **Tailwind CSS** | 4.x | Utility-first styling. Configured in `packages/ui` using CSS-first config. |
| **UI Library** | **HeroUI** | v3 (Beta) | Base accessible components. Requires React 19 & Tailwind 4. |
| **Animation** | **Framer Motion** | Latest | Powers the "Fade Up" and complex interactions. |
| **Forms** | **React Hook Form** | Latest | Validation logic. |
| **Schema** | **Zod** | Latest | Type-safe validation for Forms AND API routes. |
| **Email** | **Resend** | SDK | Transactional email API (Developer friendly). |
