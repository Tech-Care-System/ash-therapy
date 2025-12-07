# 6. Component Architecture

## A. The "Fade Up" Wrapper (packages/ui/FadeIn.tsx)
* **Responsibility**: A client component that wraps any content.
* **Props**: delay (number), direction ('up' | 'down'), children.
* **Tech**: Uses framer-motion useInView hook.
* **Logic**: initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}.

## B. Service Data Model (apps/web/config/services.ts)
* **Pattern**: Do not hardcode text in JSX. Use a config array.
* **Schema**: interface Service { title: string; description: string; icon: ReactNode; }
* **Usage**: The ServicesSection.tsx maps over this array to render ServiceCard components.

## C. Contact Form Logic
* **Client Side**: apps/web/components/forms/ContactForm.tsx
    * **Uses** `useForm` (React Hook Form) + zodResolver.
    * **State**: isSubmitting (disable button), isSuccess (show green check).

* **Server Side**: apps/web/app/api/contact/route.ts
    * **Validation**: Parses body with Zod schema. Returns 400 if invalid.
    * **Action**: Calls Resend API.
    * **Response**: Returns 200 JSON.

## 7. Configuration & Security
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