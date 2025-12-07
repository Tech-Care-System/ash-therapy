# Project Brief: Ash Therapy & Counselling

## 1. Executive Summary
**Ash Therapy & Counselling** is a new digital presence for an integrative counsellor and psychotherapist. The project aims to create a "safe and supportive space" online that mirrors the practitioner's gentle, trauma-informed approach.
**Phase 1** will be a high-impact, single-page website (landing page) featuring engaging micro-interactions to create a soothing yet interesting user experience. The technical foundation must be robust and scalable to support future features (booking, user accounts) without requiring a rewrite.

## 2. Problem Statement
* **Current State:** The practitioner currently has no website, relying on email/manual contact. Potential clients lack a centralized place to learn about the therapist's approach, fees, and areas of expertise.
* **The Gap:** Clients need to feel "safe" and "heard" before they even book a session. A static text document doesn't convey the "warm, gentle" vibe of the practice.
* **Urgency:** Establishing a professional digital presence is critical for building trust and streamlining the inquiry process.

## 3. Proposed Solution
A **Modern, Scalable Web Application** starting as a single-page landing page.
* **Vibe:** Calm, grounded, organic (using the provided "Sage/Nature" colour palette).
* **Engagement:** Use of subtle animations (fade-ins, soft hovers, smooth scrolling) to make the reading experience feel like a "journey" rather than a wall of text.
* **Scalability:** Built on a full-stack framework (e.g., Next.js) to allow easy addition of backend features later.

## 4. Target Users
* **Primary:** Adults and young people (16+) seeking therapy for anxiety, trauma, depression, or life transitions.
* **Needs:** They are likely feeling overwhelmed or vulnerable. They need clear information, reassurance, and a friction-free way to reach out.
* **Device:** Likely browsing on mobile devices during private moments.

## 5. Goals & Success Metrics
* **Primary Goal:** Launch a live, accessible website that accurately reflects Ash Therapy's brand.
* **User Goal:** Visitors can easily understand the service offerings, fees, and how to book a free consultation.
* **Metric:** Successful submission of "Get in Touch" forms (inquiries).

## 6. MVP Scope (Phase 1)
**"The Single Landing Page"**
* **Hero Section:** "Ash Therapy & Counselling" with the tagline and "Get in Touch" CTA.
* **About Me:** Introduction to the therapist's integrative, trauma-informed approach.
* **Services:** "Areas I Work With" displayed clearly (e.g., card grid).
* **Approach:** "How We Work Together" section emphasizing the safe pace.
* **Logistics:**
    * **Fees:** £50/session, 50 mins, Online (Teams).
    * **Consultation:** Free 20-min offer.
    * **Cancellation:** 24-hour notice policy.
* **FAQ:** Accordion-style section for common questions.
* **Contact:** Functional contact form (Name, Email, Message) triggering an email to `ashsach25@outlook.com`.
* **Interactions:** "Tricks" like smooth scroll navigation, subtle element fade-ins on scroll, and gentle hover states on buttons.

## 7. Post-MVP Vision (Phase 2+)
* **Integrated Booking System:** Real-time calendar scheduling for the 20-min consultations.
* **Client Portal:** Secure login for existing clients to view notes or homework.
* **Blog/Resources:** A CMS-backed section for sharing mental health articles.

## 8. Technical Considerations
* **Framework:** **Next.js (React)** recommended. It is excellent for SEO (crucial for therapy), renders fast static pages for Phase 1, and has a built-in backend (API routes) for the contact form and future Phase 2 expansion.
* **Styling:** **Tailwind CSS**. Allows for rapid, custom styling to match the specific "Sample colour palette" and easy implementation of animations.
* **Hosting:** **Vercel**. Zero-config deployment for Next.js with easy scalability.

## 9. Constraints & Assumptions
* **Content:** All text is provided in `Website content.docx`.
* **Assets:** We assume the "leaf/nature" background image is available or a similar stock asset will be used.
* **Legal:** Privacy policy/GDPR compliance text may be needed (standard template to be used for MVP).