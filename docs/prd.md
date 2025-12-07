# Product Requirements Document (PRD): Ash Therapy & Counselling

## 1. Goals and Background Context

### 🎯 Goals
* **Launch a "Safe Space" Digital Presence:** Deploy a high-quality, single-page website that accurately reflects the "warm, gentle, and trauma-informed" nature of Ash Therapy.
* **Drive Engagement via "Tricks":** Implement subtle, soothing micro-interactions (fade-ins, smooth scrolling) to increase user engagement and time-on-site without causing overwhelm.
* **Streamline Inquiries:** Achieve a friction-free "Get in Touch" flow that encourages vulnerable users to reach out.
* **Ensure Technical Scalability:** Build on a robust full-stack foundation (Next.js) to allow for seamless future expansion (booking, client portal) without rebuilding.

### 📖 Background Context
Ash Therapy & Counselling is a new practice for an integrative counsellor and psychotherapist. Currently, the practitioner has no website, relying on manual contact methods which creates friction for potential clients who often need to feel "safe" and "heard" before reaching out.

The market is crowded with sterile therapy directories. Ash Therapy aims to differentiate itself by offering a digital experience that feels like a "journey"—calm, grounded, and organic. While the immediate need is a simple brochure site (Phase 1), the long-term vision includes a fully integrated practice management platform. Therefore, we are treating this not as a "website build" but as the "foundation of a web application."

### 📋 Change Log
| Date | Version | Description | Author |
| :--- | :--- | :--- | :--- |
| 2025-05-20 | 1.0 | Initial Draft based on Project Brief | John (PM) |

## 2. Requirements

### 🛠️ Functional Requirements (FR)
These define the specific behaviors and features the website must support.

* **FR1 - Hero & First Impression:** The landing page must display a "Hero" section with the brand name ("Ash Therapy & Counselling"), the core tagline ("A safe and supportive space..."), and a clear "Get in Touch" Call-to-Action (CTA) button.
* **FR2 - Content Sections:** The page must render distinct sections for "About Me," "Areas I Work With," "How We Work Together," "Fees & Availability," "Cancellation Policy," and "Online Therapy" details, using the text provided in the content brief.
* **FR3 - Interactive Service Cards:** The "Areas I Work With" list (Anxiety, Depression, etc.) must be displayed as a grid of interactive cards that react subtly to user interaction (e.g., gentle lift or color shift on hover) to encourage exploration.
* **FR4 - FAQ Accordion:** The "Frequently Asked Questions" section must use an accordion/expandable pattern to keep the page clean and allow users to reveal answers on demand.
* **FR5 - Contact Form:** A functional contact form must be included (fields: Name, Email, Message) that triggers an email notification to `ashsach25@outlook.com` upon submission.
* **FR6 - Micro-Interactions ("Tricks"):** The site must implement "scroll-triggered animations" (e.g., text fading in up, elements sliding gently into place) as the user scrolls down, ensuring the experience feels "alive" but calm.
* **FR7 - Smooth Navigation:** Clicking navigation links (e.g., "Fees") must smoothly scroll the user to that specific section on the page rather than jumping abruptly.

### ⚙️ Non-Functional Requirements (NFR)
These define the quality attributes, performance, and constraints.

* **NFR1 - Responsiveness:** The site must be fully responsive and optimized for mobile devices first, as users are likely to access therapy services privately via phone.
* **NFR2 - Performance:** The site must achieve a Lighthouse Performance score of 90+ to ensure fast loading times (crucial for SEO and user retention).
* **NFR3 - Accessibility:** The design and code must aim for WCAG 2.1 AA compliance (sufficient color contrast, screen reader support) to ensure inclusivity for all potential clients.
* **NFR4 - SEO Optimized:** The architecture must support Server-Side Rendering (SSR) or Static Site Generation (SSG) via Next.js to maximize search engine visibility for terms like "Trauma therapy" and "Counselling".
* **NFR5 - Tech Stack Compliance:** The implementation must use **Next.js**, **Tailwind CSS**, and be deployed on **Vercel** to ensure the requested scalability for Phase 2.

## 3. User Interface Design Goals

### 🎨 Overall UX Vision
**"A Digital Sanctuary."**
The website should feel like stepping into a quiet, sunlit room. It is not just an informational brochure; it is an *experience* of calm. The design must actively lower the user's cognitive load. We avoid clutter, harsh lines, and jarring transitions. Instead, we use "breathable" whitespace, organic shapes, and a pacing that feels like a gentle conversation.

### 👆 Key Interaction Paradigms ("The Tricks")
To boost engagement without causing anxiety, we will use **"Calm Interactivity"**:
* **Scrollytelling:** As the user scrolls, content doesn't just sit there; it gently *arrives*. Text fades in upward (`fade-up`), and images might slowly unblur or slide in. This rewards the user for scrolling and keeps them curious.
* **Organic Micro-interactions:**
    * **Buttons:** On hover, buttons shouldn't just snap to a new color. They should "lift" slightly (scale up 1.05x) or have a soft, diffusing glow shadow.
    * **Links:** Underlines might grow from left to right gently.
    * **Cards:** Service cards (e.g., "Anxiety") respond to touch/hover with a subtle deepening of their background color or a slight elevation effect.
* **Smooth Anchor Navigation:** Clicking "Fees" triggers a silky-smooth scroll to that section, providing spatial context rather than a disorienting jump.

### 📱 Core Screens and Views
Since this is a single-page application (SPA) for Phase 1, the "Screens" are distinct visual sections:
1.  **Hero/Welcome View:** High impact, calming imagery (leaf/nature), immediate emotional connection.
2.  **Service Grid View:** Clean, card-based layout for "Areas I Work With."
3.  **FAQ Accordion View:** Clean list that expands on interaction.
4.  **Mobile Navigation Overlay:** A full-screen or slide-out menu that feels substantial and easy to tap on phones.

### ♿ Accessibility
* **Standard:** **WCAG 2.1 AA**.
* **Specifics:** High contrast for text (dark green on off-white), large touch targets (44px+) for mobile tapping, and full keyboard navigability for the "tricks" (animations must respect `prefers-reduced-motion` settings).

### 🎨 Branding
* **Palette:** "Sage & Nature." Deep moss greens for text/headings, soft cream/beige for backgrounds, and muted earth tones for accents.
* **Typography:**
    * *Headings:* A warm Serif font (e.g., *Playfair Display* or *Merriweather*) to convey professional trust and "groundedness."
    * *Body:* A clean Sans-Serif (e.g., *Inter* or *Lato*) for maximum readability.

### 📱 Target Device and Platforms
* **Primary:** **Mobile Web (Responsive)**. The design is "Mobile First."
* **Secondary:** Desktop/Tablet.

## 4. Technical Assumptions
* **Framework:** **Next.js (App Router)**.
* **Repository Structure:** **Monorepo** (using Turborepo or npm workspaces).
* **UI Library:** **HeroUI** (as approved for rapid development & interaction).
* **Styling Engine:** **Tailwind CSS**.
* **Package Manager:** **pnpm** (as approved for security & monorepo support).
* **Testing:** Jest + React Testing Library (Unit), Playwright (E2E).
* **Hosting:** Vercel.
* **Email Service:** Resend or SendGrid.

## 5. Epic List

### Epic 1: Digital Sanctuary Foundation (Phase 1)
**Goal:** Deploy the complete, public-facing landing page with the "safe space" vibe, "tricks" (animations), and working contact form.

#### Stories
* **1.1 Project Initialization & Theme Setup:** Initialize Next.js Monorepo, install HeroUI/Tailwind, configure "Sage" theme tokens.
* **1.2 Hero & Opening Experience:** Build Hero section with Scrollytelling fade-in and "About Me" slide-in.
* **1.3 Interactive Services & Approach:** Implement Service Grid with HeroUI Ripple and "Soft Lift" hover effects.
* **1.4 Logistics & FAQ:** Build Fees/Cancellation sections and FAQ using HeroUI Accordion for smooth reveal.
* **1.5 Contact Form & Integration:** Build validatable form and API route for email handling with "Calm Validation."

### Epic 2: Integrated Booking System (Future/Phase 2)
**Goal:** Allow clients to view 20-minute consultation slots and book directly.

### Epic 3: Client Portal & Resources (Future/Phase 3)
**Goal:** Secure login for clients to access documents and a CMS for the therapist to post articles.