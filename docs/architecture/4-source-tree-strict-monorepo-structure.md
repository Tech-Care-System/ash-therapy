# 4. Source Tree (Strict Monorepo Structure)

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
│       │   └── styles.css        # SHARED Tailwind v4 CSS (Theme/Config)
│       └── package.json
├── .env.local.example            # Template for environment vars
├── pnpm-workspace.yaml           # Workspace definition
└── turbo.json                    # Build pipeline config
```
