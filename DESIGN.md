---
name: Lumina Citrus Tech
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#424656'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#727687'
  outline-variant: '#c2c6d8'
  surface-tint: '#0054d6'
  primary: '#0050cb'
  on-primary: '#ffffff'
  primary-container: '#0066ff'
  on-primary-container: '#f8f7ff'
  inverse-primary: '#b3c5ff'
  secondary: '#715d00'
  on-secondary: '#ffffff'
  secondary-container: '#fed400'
  on-secondary-container: '#6f5c00'
  tertiary: '#475887'
  on-tertiary: '#ffffff'
  tertiary-container: '#5f71a1'
  on-tertiary-container: '#f9f8ff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae1ff'
  primary-fixed-dim: '#b3c5ff'
  on-primary-fixed: '#001849'
  on-primary-fixed-variant: '#003fa4'
  secondary-fixed: '#ffe177'
  secondary-fixed-dim: '#ebc300'
  on-secondary-fixed: '#231b00'
  on-secondary-fixed-variant: '#554500'
  tertiary-fixed: '#dae2ff'
  tertiary-fixed-dim: '#b4c5fb'
  on-tertiary-fixed: '#021945'
  on-tertiary-fixed-variant: '#344573'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
  circuit-glow: '#33C3FF'
  glass-surface: rgba(255, 255, 255, 0.7)
  glass-border: rgba(255, 255, 255, 0.3)
  navy-blue-gradient: 'linear-gradient(135deg, #071D49 0%, #0066FF 100%)'
  lemon-glow: rgba(255, 212, 0, 0.4)
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 64px
    fontWeight: '800'
    lineHeight: 72px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '800'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
  section-gap: 120px
  stack-gap: 16px
---

## Brand & Style

This design system embodies the intersection of organic freshness and high-precision engineering. The narrative centers on "The Bright Circuit"—a visual metaphor where the zest of innovation meets the structure of code.

Drawing inspiration from the precision of **Apple**, the fluid dynamism of **Stripe**, and the sleek utility of **Linear**, the design style utilizes a sophisticated blend of **Glassmorphism** and **Corporate Modernism**. The UI is characterized by expansive whitespace, semi-transparent frosted layers, and high-fidelity "glowing" accents that mimic electrical traces within a circuit. The target audience is the forward-thinking developer and the modern tech-startup, expecting an environment that feels both professional and vibrantly alive.

## Colors

The palette is anchored by **Tech Blue** and **Dark Navy**, providing a reliable and deep foundation reminiscent of terminal screens and professional software environments. **Lemon Yellow** acts as a high-energy disruptor, used sparingly for critical CTAs and "aha!" moments.

The background strategy utilizes a tiered system of **White** and **F8FAFC (Neutral)** to create depth without clutter. The "Navy-to-Blue" gradient is the primary driver for hero sections and high-impact containers, while the "Circuit Glow" is reserved for micro-interactions, progress indicators, and decorative line work that suggests data flow.

## Typography

This system employs a dual-font strategy. **Plus Jakarta Sans** provides a modern, slightly geometric personality for headings, ensuring the "Fresh" aspect of the brand is communicated through typography. For functional text, **Inter** is utilized for its exceptional legibility and systematic appearance.

Use `display-lg` exclusively for hero sections. Headlines should use a "tight" letter-spacing to maintain a premium, editorial feel. Labels and small metadata should always be rendered with slightly increased tracking (letter-spacing) to ensure clarity against complex backgrounds or within glass containers.

## Layout & Spacing

The layout follows a **Fixed-Fluid hybrid grid**. Content is constrained to a 1280px central container on desktop to ensure readability, while backgrounds and decorative "circuit" elements bleed to the edges. 

The rhythm is dictated by a 4px baseline, with a preference for generous vertical padding (120px section gaps) to evoke the "Apple-esque" sense of premium space. On mobile, margins shrink to 16px, and multi-column card layouts reflow into a single-column stack. Use the `stack-gap` for consistent spacing between related components within a card or sidebar.

## Elevation & Depth

Hierarchy is achieved through a mix of **Glassmorphism** and **Ambient Shadows**.

1.  **Level 0 (Base):** Neutral white or #F8FAFC surface.
2.  **Level 1 (Cards):** White background with a very soft, high-diffusion shadow (0px 10px 40px rgba(0, 0, 0, 0.04)).
3.  **Level 2 (Overlays):** Glass containers using `glass-surface` with a 12px backdrop-blur and a 1px solid `glass-border`.
4.  **Level 3 (Interactive):** Elements that "glow." For example, a primary button on hover should emit a soft blue outer glow (0px 0px 20px rgba(0, 102, 255, 0.3)).

Depth is perceived as "layers of light" rather than heavy physical blocks.

## Shapes

The design system uses a "Hyper-Rounded" language to feel approachable and modern. 

Base components like small buttons or tags use a 12px (rounded) radius. Primary structural elements like cards and modal containers use a **24px (rounded-lg)** radius. Hero elements or floating navigation bars use **32px+ (rounded-xl)** or full pill shapes. This exaggerated softness contrasts beautifully with the sharp "circuit" lines used in background decorations.

## Components

### Buttons
- **Primary:** Navy-to-Blue gradient background, white text, 24px corner radius. On hover, apply a `circuit-glow` outer shadow.
- **Secondary:** Transparent with a `primary_color` (Blue) border.
- **Glass:** Frosted background, white text, 1px white border at 30% opacity.

### Cards
- Standard cards use white backgrounds, 24px radius, and soft ambient shadows. 
- "Tech" cards use the Dark Navy background with `circuit-glow` accents (thin 1px lines that terminate in small circles) to mimic a PCB.

### Input Fields
- Subtle #F1F5F9 fill, 12px radius, and a transition to a Blue border on focus. 
- Labels sit above the field in `label-md` style, using the Dark Navy color at 70% opacity.

### Chips & Tags
- Use the Pill-shape (full rounded). Backgrounds should be low-opacity versions of the brand colors (e.g., 10% Lemon Yellow with 100% saturation text).

### Circuit Accents
- SVG decorative lines used in the background. Use 1.5px stroke width. Lines should always be horizontal, vertical, or 45-degree angles. Use the `circuit-glow` color with a `flicker` animation for high-tech pages.