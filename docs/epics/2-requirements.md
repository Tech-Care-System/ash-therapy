# 2. Requirements

## 🛠️ Functional Requirements (FR)
These define the specific behaviors and features the website must support.

* **FR1 - Hero & First Impression:** The landing page must display a "Hero" section with the brand name ("Ash Therapy & Counselling"), the core tagline ("A safe and supportive space..."), and a clear "Get in Touch" Call-to-Action (CTA) button.
* **FR2 - Content Sections:** The page must render distinct sections for "About Me," "Areas I Work With," "How We Work Together," "Fees & Availability," "Cancellation Policy," and "Online Therapy" details, using the text provided in the content brief.
* **FR3 - Interactive Service Cards:** The "Areas I Work With" list (Anxiety, Depression, etc.) must be displayed as a grid of interactive cards that react subtly to user interaction (e.g., gentle lift or color shift on hover) to encourage exploration.
* **FR4 - FAQ Accordion:** The "Frequently Asked Questions" section must use an accordion/expandable pattern to keep the page clean and allow users to reveal answers on demand.
* **FR5 - Contact Form:** A functional contact form must be included (fields: Name, Email, Message) that triggers an email notification to `ashsach25@outlook.com` upon submission.
* **FR6 - Micro-Interactions ("Tricks"):** The site must implement "scroll-triggered animations" (e.g., text fading in up, elements sliding gently into place) as the user scrolls down, ensuring the experience feels "alive" but calm.
* **FR7 - Smooth Navigation:** Clicking navigation links (e.g., "Fees") must smoothly scroll the user to that specific section on the page rather than jumping abruptly.

## ⚙️ Non-Functional Requirements (NFR)
These define the quality attributes, performance, and constraints.

* **NFR1 - Responsiveness:** The site must be fully responsive and optimized for mobile devices first, as users are likely to access therapy services privately via phone.
* **NFR2 - Performance:** The site must achieve a Lighthouse Performance score of 90+ to ensure fast loading times (crucial for SEO and user retention).
* **NFR3 - Accessibility:** The design and code must aim for WCAG 2.1 AA compliance (sufficient color contrast, screen reader support) to ensure inclusivity for all potential clients.
* **NFR4 - SEO Optimized:** The architecture must support Server-Side Rendering (SSR) or Static Site Generation (SSG) via Next.js to maximize search engine visibility for terms like "Trauma therapy" and "Counselling".
* **NFR5 - Tech Stack Compliance:** The implementation must use **Next.js**, **Tailwind CSS**, and be deployed on **Vercel** to ensure the requested scalability for Phase 2.
