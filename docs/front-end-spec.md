# UI/UX Specification: Ash Therapy & Counselling

## 1. Design Philosophy
* **Core Vibe:** "Digital Sanctuary." The site should feel like a deep exhale.
* **Visual Strategy:** **"Organic Minimalism."** We will use HeroUI's clean components but soften them significantly to avoid the "SaaS/Tech" look.
* **Motion Principle:** **"Water-like Flow."** Interactions should be fluid and viscous, not snappy or bouncy.

## 2. Information Architecture (Site Map)
Single-Page structure with smooth-scroll anchors:
1.  **Hero** (`#home`) - Introduction & immediate "safe space" feeling.
2.  **About** (`#about`) - Therapist bio & photo.
3.  **Services** (`#services`) - Grid of issues treated.
4.  **Approach** (`#approach`) - Methodology (CBT, Person-centred).
5.  **Logistics** (`#logistics`) - Fees, Cancellation, FAQ.
6.  **Contact** (`#contact`) - Form & Email.

## 3. "The Tricks" (Interaction Specifications)
*Specific HeroUI & Tailwind implementations to boost engagement.*

### ✨ Scrollytelling Entrance (The "Fade Up")
* **Concept:** As the user scrolls, content shouldn't be static. It should gently *arrive*.
* **Implementation:** Create a custom Tailwind utility `.animate-fade-up`.
    * **Behavior:** Translate Y-axis 20px $\to$ 0px; Opacity 0% $\to$ 100%.
    * **Timing:** Duration 800ms, Ease-out-cubic.
    * **Staggering:** For the Services Grid, cascade the entry: Card 1 (0ms delay), Card 2 (100ms), Card 3 (200ms).

### 🌊 The "Calm" Button (HeroUI Customization)
* **Component:** `<Button />` (HeroUI).
* **Customization:**
    * **Shape:** Full Pill (`rounded-full`) to feel friendly.
    * **Ripples:** **Keep enabled**, but set color to a faint white (`rgba(255,255,255,0.2)`) so it feels like water, not electricity.
    * **Hover:** Gentle scale (`scale-105`) + Soft Shadow (`shadow-lg shadow-sage-200/50`).

### 🃏 Service Cards ("Breathing" Effect)
* **Component:** `<Card />` (HeroUI).
* **Rest State:** `variant="flat"`, `bg-sage-50` (very light green/grey), no border.
* **Hover State:**
    * Background shifts slightly darker (`bg-sage-100`).
    * Card lifts (`-translate-y-1`).
    * **The Trick:** Add a subtle "glass" shine effect or inner glow using Tailwind `ring-1 ring-inset ring-white/50`.

### 🧩 FAQ Accordion ("Soft Reveal")
* **Component:** `<Accordion />` (HeroUI).
* **Selection Mode:** `selectionMode="multiple"` (allows reading multiple answers at once).
* **Motion:** Use HeroUI's default motion but slow it down slightly via the `motionProps` prop to make the expansion feel "heavy" and deliberate, like opening a quality book.

## 4. Visual Design System

### 🎨 Color Palette ("Sage & Nature")
We will define these as Tailwind config colors:
* **Backgrounds:**
    * `bg-cream` (#FDFCF8) - Main page background.
    * `bg-sage-50` (#F4F7F5) - Section backgrounds (alternating).
* **Text:**
    * `text-moss-900` (#2C3E30) - Primary text (softer than black).
    * `text-moss-600` (#5F7161) - Secondary text.
* **Accents:**
    * `bg-sage-500` (#8DA399) - Primary Buttons/Highlights.
    * `bg-clay-400` (#C8A78F) - Secondary/Warm accents.

### 🔠 Typography
* **Headings:** *Playfair Display* (Serif). Elegant, trustworthy, "editorial."
* **Body:** *Lato* or *Inter* (Sans-Serif). Clean, legible, modern.

## 5. Key Layouts

### Hero Section
* **Layout:** Split screen.
* **Left:** "Ash Therapy & Counselling" + Tagline + CTA.
* **Right:** An organic "blob" shape containing a calming nature image (leaf/forest), masked using CSS `clip-path` or an SVG mask.
* **Animation:** The blob gently "breathes" (scale 1.0 to 1.02) on an infinite 6s loop.

### Navigation (Glassmorphism)
* **Sticky Header:** `backdrop-blur-md bg-white/70 border-b border-white/20`.
* **Effect:** Content slides *under* the blurry header, creating depth.

## 6. Accessibility & Responsiveness
* **Mobile First:** All "hover" effects must have "active" (touch) equivalents.
* **Reduced Motion:** Wrap all "tricks" (fade-ups, floating blobs) in a `motion-safe:` Tailwind variant. If a user prefers reduced motion, the site stays static and calm.