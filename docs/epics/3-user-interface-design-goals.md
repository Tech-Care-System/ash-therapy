# 3. User Interface Design Goals

## 🎨 Overall UX Vision
**"A Digital Sanctuary."**
The website should feel like stepping into a quiet, sunlit room. It is not just an informational brochure; it is an *experience* of calm. The design must actively lower the user's cognitive load. We avoid clutter, harsh lines, and jarring transitions. Instead, we use "breathable" whitespace, organic shapes, and a pacing that feels like a gentle conversation.

## 👆 Key Interaction Paradigms ("The Tricks")
To boost engagement without causing anxiety, we will use **"Calm Interactivity"**:
* **Scrollytelling:** As the user scrolls, content doesn't just sit there; it gently *arrives*. Text fades in upward (`fade-up`), and images might slowly unblur or slide in. This rewards the user for scrolling and keeps them curious.
* **Organic Micro-interactions:**
    * **Buttons:** On hover, buttons shouldn't just snap to a new color. They should "lift" slightly (scale up 1.05x) or have a soft, diffusing glow shadow.
    * **Links:** Underlines might grow from left to right gently.
    * **Cards:** Service cards (e.g., "Anxiety") respond to touch/hover with a subtle deepening of their background color or a slight elevation effect.
* **Smooth Anchor Navigation:** Clicking "Fees" triggers a silky-smooth scroll to that section, providing spatial context rather than a disorienting jump.

## 📱 Core Screens and Views
Since this is a single-page application (SPA) for Phase 1, the "Screens" are distinct visual sections:
1.  **Hero/Welcome View:** High impact, calming imagery (leaf/nature), immediate emotional connection.
2.  **Service Grid View:** Clean, card-based layout for "Areas I Work With."
3.  **FAQ Accordion View:** Clean list that expands on interaction.
4.  **Mobile Navigation Overlay:** A full-screen or slide-out menu that feels substantial and easy to tap on phones.

## ♿ Accessibility
* **Standard:** **WCAG 2.1 AA**.
* **Specifics:** High contrast for text (dark green on off-white), large touch targets (44px+) for mobile tapping, and full keyboard navigability for the "tricks" (animations must respect `prefers-reduced-motion` settings).

## 🎨 Branding
* **Palette:** "Sage & Nature." Deep moss greens for text/headings, soft cream/beige for backgrounds, and muted earth tones for accents.
* **Typography:**
    * *Headings:* A warm Serif font (e.g., *Playfair Display* or *Merriweather*) to convey professional trust and "groundedness."
    * *Body:* A clean Sans-Serif (e.g., *Inter* or *Lato*) for maximum readability.

## 📱 Target Device and Platforms
* **Primary:** **Mobile Web (Responsive)**. The design is "Mobile First."
* **Secondary:** Desktop/Tablet.
