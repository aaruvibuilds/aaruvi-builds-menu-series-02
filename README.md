# ⚡ AARUVI BUILDS

### 💧 Liquid Menu — Series 02

**What if a navigation menu behaved like liquid?**
**Pull. Morph. Flow. Navigate.**

<p align="center">
  <a href="https://aaruvibuilds.github.io/aaruvi-builds-menu-series-02/">
    <img src="https://img.shields.io/badge/🚀%20LIVE%20DEMO-7B5CFF?style=for-the-badge&logoColor=white" alt="Live Demo">
  </a>
  <a href="https://github.com/aaruvibuilds/aaruvi-builds-menu-series-02">
    <img src="https://img.shields.io/badge/💻%20SOURCE%20CODE-17151B?style=for-the-badge&logo=github&logoColor=white" alt="Source Code">
  </a>
</p>

---

## 💧 The Build

**Menu Series 02** explores navigation as a fluid visual object.

Instead of a conventional rectangular menu button, the interface begins as a soft organic shape.

When opened, the shape expands into a large liquid-inspired navigation surface.

The transformation is built entirely with HTML, CSS and JavaScript.

---

## 🎬 The Experience

The interaction follows:

```text
LIQUID MENU
    ↓
POINTER PULL
    ↓
CLICK
    ↓
MORPH
    ↓
EXPAND
    ↓
LIQUID SURFACE
    ↓
NAVIGATION REVEAL
    ↓
SELECT
```

The goal is to make navigation feel alive rather than static.

---

## 🫧 Closed State

The initial menu is intentionally compact.

It contains:

* Soft organic blob
* MENU label
* Minimal menu icon
* Purple atmospheric glow
* Subtle depth shadow

The shape is not a perfect rectangle.

Its irregular border radius creates the initial liquid character.

---

## 🖱️ Pointer-Responsive Liquid

Before opening, the menu responds subtly to the user's pointer.

When the pointer moves near the menu:

* The entire liquid object shifts
* Movement follows the pointer direction
* Motion strength is distance-based
* The movement is smoothly interpolated

The interaction is intentionally subtle.

It creates the feeling that the menu has physical presence.

---

## 🌊 Morphing Transformation

Clicking the MENU control triggers the primary transformation.

The compact blob expands into:

* A large organic surface
* Rounded asymmetric edges
* Soft purple glow
* Navigation content
* Dedicated close control

The transition changes the:

* Width
* Height
* Position
* Border radius
* Rotation
* Shadow
* Internal content

The result is a single component changing physical form.

---

## 🫧 Living Liquid Surface

Once open, the surface doesn't remain completely static.

The main blob continuously changes its border-radius configuration.

This creates a slow breathing motion:

```text id="8g0l1r"
Shape A
  ↓
Shape B
  ↓
Shape C
  ↓
Shape A
```

The effect gives the navigation surface an organic quality.

---

## ✨ Glow Layer

A second blurred blob sits behind the primary surface.

When the menu opens:

* Opacity increases
* Scale changes
* Glow breathes slowly

This creates atmospheric depth around the liquid surface.

---

## ✕ Dedicated Close Control

The closed MENU button disappears completely when the menu opens.

A separate close control becomes visible.

This is intentional.

The close control remains independent from the navigation layer so navigation links stay fully interactive.

The X appears with:

* Scale animation
* Rotation
* Opacity transition

---

## 🧭 Navigation

The menu contains four destinations:

```text id="8f0q2k"
01  HOME
02  WORK
03  ABOUT
04  CONTACT
```

Each item uses:

* Number
* Large navigation label
* Bottom divider
* Hover surface
* Horizontal movement

---

## 🎞️ Staggered Reveal

The navigation items enter sequentially.

```text id="d6u8qu"
HOME
  ↓
WORK
  ↓
ABOUT
  ↓
CONTACT
```

Each item has its own transition delay.

This creates a fluid cascading reveal rather than making all links appear simultaneously.

---

## ✨ Navigation Hover

Hovering a navigation item creates a subtle response.

The item:

* Slides horizontally
* Reveals a soft background
* Nudges the navigation label
* Reduces number opacity
* Plays a short liquid-style jolt

The movement remains small so navigation stays readable.

---

## 🎯 Active Navigation State

Clicking a navigation item changes the active state.

The system:

1. Removes `.active` from every item
2. Adds `.active` to the selected item
3. Plays a short horizontal motion

The active item remains visually distinguished.

---

## 🧠 State System

The menu is controlled through a simple state:

```text id="u8v0o3"
menuOpen = false
```

### Closed

```text id="5x3a9r"
menuOpen = false
```

### Open

```text id="8a1i8p"
menuOpen = true
```

The state controls:

* Liquid expansion
* Navigation visibility
* Close control
* ARIA state
* Pointer behavior

---

## 🖱️ Outside Click

When the menu is open, clicking outside the liquid menu closes it.

This prevents the navigation from becoming trapped open.

---

## ⌨️ Escape Support

Pressing:

```text id="q2g5pn"
Escape
```

closes the menu whenever it is open.

---

## ♿ Accessibility

The build includes:

* Semantic buttons
* Semantic navigation
* ARIA labels
* `aria-expanded`
* Keyboard focus states
* Dedicated close button
* Reduced-motion support

The menu trigger dynamically updates its accessible label between opening and closing states.

---

## ♿ Reduced Motion

The interface respects:

```css id="5gk1a2"
prefers-reduced-motion: reduce
```

When reduced motion is enabled:

* Liquid breathing animation is disabled
* Glow animation is disabled
* Transitions are reduced
* Navigation movement is simplified

---

## 📱 Responsive

The liquid menu adapts to smaller screens.

Mobile changes include:

* Smaller closed-state dimensions
* Full-width open surface
* Responsive open height
* Adjusted navigation padding
* Smaller spacing
* Mobile-friendly close control
* Responsive typography

The navigation remains centered and usable across screen sizes.

---

## 🎨 Visual Direction

The build uses a premium experimental interface language.

### Background

* Near-black
* Subtle purple radial glow
* Fine dotted texture

### Liquid Surface

* Warm paper
* Dark typography
* Organic border radius
* Soft shadow
* Purple ambient glow

### Typography

The interface combines:

* Manrope
* DM Mono

The contrast between geometric display text and monospace metadata creates a technical/editorial feel.

---

## 🧩 Motion Architecture

The animation system is built with CSS transitions and JavaScript-driven interactions.

### CSS handles

* Morphing
* Border-radius animation
* Navigation reveal
* Glow breathing
* Liquid breathing
* Hover states
* Responsive transitions

### JavaScript handles

* Menu state
* Pointer movement
* Active navigation
* Outside click
* Escape key
* ARIA updates

---

## 🛠️ Built With

* HTML5
* CSS3
* JavaScript
* CSS Variables
* CSS Transitions
* CSS Keyframes
* Web Animations API
* Pointer Events
* ARIA attributes

No framework.

No animation library.

No backend.

---

## 📂 Project Structure

```text
aaruvi-builds-menu-series-02/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## 🚀 Run Locally

Clone the repository:

```bash
git clone https://github.com/aaruvibuilds/aaruvi-builds-menu-series-02.git
```

Open the project:

```bash
cd aaruvi-builds-menu-series-02
```

Then open:

```text
index.html
```

in your browser.

No installation required.

---

## 🌐 Live Demo

Experience the complete liquid interaction:

https://aaruvibuilds.github.io/aaruvi-builds-menu-series-02/

---

## 💻 Source Code

Explore the complete source:

https://github.com/aaruvibuilds/aaruvi-builds-menu-series-02

---

## 🎯 The Idea

Traditional navigation is built from rectangles.

This build asks:

> **What if navigation could have a physical personality?**

The menu begins as a small liquid object.

A pointer pulls it slightly.

A click causes it to expand.

The surface continues to breathe.

Navigation emerges from inside it.

The goal is not simply to make a menu animated.

The goal is to make the menu **feel alive**.

---

# ⚡ AARUVI BUILDS

Frontend • UI • Motion

📸 Instagram: https://instagram.com/aaruvi_builds
▶️ YouTube: https://youtube.com/@AaruviBuilds
💻 GitHub: https://github.com/aaruvibuilds

**BUILD. EXPERIMENT. CREATE.**

*Series 02 / Menu Animation*
