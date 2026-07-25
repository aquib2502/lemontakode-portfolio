---
name: AI Robots
url: https://ai-robots.apps.mdxpreview.xyz/
colors:
  primary: '#6289ff'
  background: '#121212'
  background-darker: '#000000'
  background-light: '#ffffff'
  text-primary: '#ffffff'
  text-secondary: '#cbcbcb'
  text-dark: '#000000'
  text-dark-muted: '#131313'
  neutral-medium: '#808080'
  neutral-light: '#adadad'
  button-light-hover: '#d1d1d1'
  nav-link-hover: '#363636'
  focus-ring: '#00bbff'
  link-visited: '#0000ee'
typography:
  family: 'Work Sans, sans-serif'
  display:
    family: 'Work Sans'
    size: 45px
    weight: 700
    line-height: 1.2
  heading-1:
    family: 'Work Sans'
    size: 45px
    weight: 700
    line-height: 1.2
  heading-2:
    family: 'Work Sans'
    size: 30px
    weight: 700
    line-height: 1.2
  heading-3:
    family: 'Work Sans'
    size: 23px
    weight: 400
    line-height: 1.5
  heading-4:
    family: 'Work Sans'
    size: 20px
    weight: 400
    line-height: 1.5
  body:
    family: 'Work Sans'
    size: 16px
    weight: 400
    line-height: 1.5
  caption:
    family: 'Work Sans'
    size: 12px
    weight: 400
    line-height: 1.5
  button:
    family: 'Work Sans'
    size: 16px
    weight: 400
    line-height: 1.5
  button-secondary:
    family: 'Work Sans'
    size: 13.9469px
    weight: 500
    line-height: 1.5
spacing:
  base: 4px
  scale: [4, 8, 12, 16, 24, 32, 48, 64, 80, 96]
radius:
  sm: 9px
  md: 11px
  lg: 15px
  xl: 23px
  full: 50px
elevation:
  z-content: 1
  z-shade: 2
  z-header: 10
  z-preloader: 200000
components:
  button-primary:
    bg: '{colors.background-light}'
    text: '{colors.text-dark-muted}'
    radius: '{radius.sm}'
    padding: '10px 18px'
  button-dark:
    bg: '{colors.background}'
    text: '{colors.text-primary}'
    radius: '{radius.md}'
    padding: '10px 18px'
  card:
    bg: '{colors.background}'
    radius: '{radius.md}'
  nav-link:
    bg: 'transparent'
    text: '{colors.text-primary}'
    padding: '8px 16px'
    radius: '{radius.sm}'
motion:
  duration-xs: '0.15s'
  duration-sm: '0.2s'
  duration-md: '0.25s'
  duration-lg: '0.3s'
  easing-ease-out: 'ease-out'
  easing-ease-in: 'ease-in'
  easing-ease-in-out: 'ease-in-out'
  easing-linear: 'linear'
---

# Design System Inspired by AI Robots

## 1. Visual Theme & Atmosphere
The AI Robots design system is characterized by a high-contrast, dark-themed aesthetic, utilizing a deep `#121212` background paired with crisp `#ffffff` text. A vibrant `#6289ff` blue serves as the primary accent color, highlighting key interactive elements, subtle underlines, and brand iconography. The overall layout emphasizes spaciousness and a centered content approach, with generous `24px` to `64px` vertical padding between sections, creating a sense of clarity and focus on the advanced robotics content.

Typography is consistently set in the sans-serif 'Work Sans' font, maintaining excellent legibility across various scales. Interactive elements feature subtle `0.15s` to `0.3s` ease-out transitions, enhancing user feedback without distracting from the content. The brand logo, a stylized 'A' in `#6289ff` blue, reinforces the technological and futuristic identity. The site also incorporates GSAP for dynamic animations and video elements, adding a layer of sophisticated interaction.

Key Characteristics:
- Dark background `#121212` with bright `#ffffff` text.
- Primary accent color `#6289ff` for highlights.
- 'Work Sans' font family for all typography.
- Generous spacing, often `24px` to `64px` vertically.
- Subtle `0.15s` to `0.3s` ease-out transitions on interactions.
- Rounded corners, typically `9px` to `11px` radius, for buttons and containers.
- GSAP-driven animations for dynamic content.

## 2. Color Palette & Roles
The color palette is built around a strong dark mode foundation, with a single vibrant accent blue.

-   **Primary**
    -   `primary`: `#6289ff` – Used for interactive elements, accent lines, link highlights, and the brand logo.
-   **Neutral Scale**
    -   `background`: `#121212` – The dominant dark background for most sections and the main page.
    -   `background-darker`: `#000000` – Used for deeper black sections, some borders, and text on light backgrounds.
    -   `background-light`: `#ffffff` – Utilized for primary button backgrounds and as the main text color on dark backgrounds.
    -   `text-primary`: `#ffffff` – The primary text color used against dark backgrounds for maximum readability.
    -   `text-secondary`: `#cbcbcb` – Secondary text color for less prominent information on dark backgrounds, such as descriptions and captions.
    -   `text-dark`: `#000000` – Main text color when placed on light backgrounds, such as within buttons.
    -   `text-dark-muted`: `#131313` – Muted text color for specific elements on light backgrounds, providing slight contrast.
    -   `neutral-medium`: `#808080` – A mid-tone gray used for subtle borders and inactive elements.
    -   `neutral-light`: `#adadad` – A lighter gray for less emphasized elements or placeholders.
-   **Interactive**
    -   `button-light-hover`: `#d1d1d1` – The background color for primary buttons on hover states.
    -   `nav-link-hover`: `#363636` – The background color for navigation links on hover states.
    -   `focus-ring`: `#00bbff` – A distinct blue used for universal focus indicators to ensure accessibility.
    -   `link-visited`: `#0000ee` – The color for visited links, as observed in accessibility data (inferred from screenshot).

## 3. Typography Rules
The AI Robots design system relies on a single, highly legible sans-serif typeface, 'Work Sans', to maintain a consistent and modern aesthetic.

-   **Font Family**: 'Work Sans', sans-serif
    -   `monospace` fallback: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace (inferred)
-   **Hierarchy**:
    -   **Display**: `Work Sans` `45px` `700` · line-height `1.2` · tracking `none` · Used for prominent hero titles.
    -   **Heading 1**: `Work Sans` `45px` `700` · line-height `1.2` · tracking `none` · Main section titles, like "Unitree B2".
    -   **Heading 2**: `Work Sans` `30px` `700` · line-height `1.2` · tracking `none` · Sub-section titles, providing strong visual weight.
    -   **Heading 3**: `Work Sans` `23px` `400` · line-height `1.5` · tracking `none` · Used for descriptive headings and feature titles.
    -   **Heading 4**: `Work Sans` `20px` `400` · line-height `1.5` · tracking `none` · Smaller subheadings or emphasized text blocks.
    -   **Body**: `Work Sans` `16px` `400` · line-height `1.5` · tracking `none` · Standard paragraph text for readability.
    -   **Caption**: `Work Sans` `12px` `400` · line-height `1.5` · tracking `none` · Smallest text for meta-information or footnotes.
    -   **Button**: `Work Sans` `16px` `400` · line-height `1.5` · tracking `none` · Standard button text.
    -   **Button Secondary**: `Work Sans` `13.9469px` `500` · line-height `1.5` · tracking `none` · Text for secondary action buttons.
-   **Principles**
    -   Maintain high contrast by pairing `#ffffff` or `#cbcbcb` text with `#121212` backgrounds for optimal legibility.
    -   Utilize the `700` weight for headings to establish a clear hierarchy and strong visual impact.
    -   Ensure consistent `1.5` unitless line-height for body and smaller text to improve reading comfort.
    -   Avoid mixing font families; 'Work Sans' is the singular typeface for all content.
    -   Use the `#6289ff` accent color sparingly for text, primarily for interactive links or brand emphasis.

## 4. Component Stylings

### Buttons
Buttons are designed with clear visual hierarchy and distinct interaction states, employing subtle transitions for a polished feel.

#### Primary Button
A prominent call-to-action button with a light background and dark text, used for primary actions.

```css
.button-primary {
  background-color: var(--color-background-light, #ffffff);
  color: var(--color-text-dark-muted, #131313);
  font-family: var(--typography-button-secondary-family, 'Work Sans');
  font-size: var(--typography-button-secondary-size, 13.9469px);
  font-weight: var(--typography-button-secondary-weight, 500);
  padding: 10px 18px; /* inferred from screenshot and button data */
  border: 1px solid var(--color-text-dark-muted, #131313);
  border-radius: var(--radius-sm, 9px);
  cursor: pointer;
  transition: background-color var(--motion-duration-sm, 0.2s) var(--motion-easing-ease-in, ease-in),
              border-color var(--motion-duration-sm, 0.2s) var(--motion-easing-ease-in, ease-in);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px; /* inferred from screenshot */
}

.button-primary:hover {
  background-color: var(--color-button-light-hover, #d1d1d1);
  border-color: var(--color-button-light-hover, #d1d1d1); /* inferred from screenshot */
}

.button-primary:active {
  background-color: var(--color-neutral-medium, #808080); /* inferred from screenshot */
  border-color: var(--color-neutral-medium, #808080); /* inferred from screenshot */
  transform: translateY(1px); /* inferred from screenshot */
}

.button-primary:disabled {
  background-color: var(--color-neutral-light, #adadad); /* inferred from screenshot */
  border-color: var(--color-neutral-light, #adadad); /* inferred from screenshot */
  color: var(--color-neutral-medium, #808080); /* inferred from screenshot */
  cursor: not-allowed;
}
```

#### Dark Button
A button with a dark background and light text, often used for secondary actions or within dark sections.

```css
.button-dark {
  background-color: var(--color-background, #121212);
  color: var(--color-text-primary, #ffffff);
  font-family: var(--typography-button-family, 'Work Sans');
  font-size: var(--typography-button-size, 16px);
  font-weight: var(--typography-button-weight, 400);
  padding: 10px 18px; /* inferred from screenshot and button data */
  border: 1px solid var(--color-background-darker, #000000);
  border-radius: var(--radius-md, 11px);
  cursor: pointer;
  transition: background-color var(--motion-duration-sm, 0.2s) var(--motion-easing-ease-in, ease-in),
              border-color var(--motion-duration-sm, 0.2s) var(--motion-easing-ease-in, ease-in);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px; /* inferred from screenshot */
}

.button-dark:hover {
  background-color: var(--color-nav-link-hover, #363636); /* inferred from screenshot */
  border-color: var(--color-nav-link-hover, #363636); /* inferred from screenshot */
}

.button-dark:active {
  background-color: var(--color-neutral-medium, #808080); /* inferred from screenshot */
  border-color: var(--color-neutral-medium, #808080); /* inferred from screenshot */
  transform: translateY(1px); /* inferred from screenshot */
}

.button-dark:disabled {
  background-color: var(--color-neutral-light, #adadad); /* inferred from screenshot */
  border-color: var(--color-neutral-light, #adadad); /* inferred from screenshot */
  color: var(--color-neutral-medium, #808080); /* inferred from screenshot */
  cursor: not-allowed;
}
```

#### Ghost Button
A text-only button for tertiary actions, often used in navigation or secondary menus.

```css
.button-ghost {
  background-color: transparent;
  color: var(--color-text-primary, #ffffff);
  font-family: var(--typography-button-family, 'Work Sans');
  font-size: var(--typography-button-size, 16px);
  font-weight: var(--typography-button-weight, 400);
  padding: 8px 12px; /* inferred from screenshot */
  border: none;
  border-radius: var(--radius-sm, 9px);
  cursor: pointer;
  transition: color var(--motion-duration-xs, 0.15s) var(--motion-easing-ease-out, ease-out),
              background-color var(--motion-duration-xs, 0.15s) var(--motion-easing-ease-out, ease-out);
}

.button-ghost:hover {
  color: var(--color-primary, #6289ff);
  background-color: rgba(98, 137, 255, 0.1); /* inferred from screenshot */
}

.button-ghost:active {
  color: var(--color-primary, #6289ff);
  background-color: rgba(98, 137, 255, 0.2); /* inferred from screenshot */
  transform: translateY(1px); /* inferred from screenshot */
}

.button-ghost:disabled {
  color: var(--color-neutral-medium, #808080);
  cursor: not-allowed;
}
```

### Cards & Containers
The design system uses implicit containers rather than explicit cards, primarily relying on the dark background and subtle borders.

#### Standard Content Container
Maintains a consistent dark background with rounded corners for content sections.

```css
.container-standard {
  background-color: var(--color-background, #121212);
  color: var(--color-text-primary, #ffffff);
  padding: var(--spacing-64, 64px); /* inferred from screenshot */
  border: 1px solid transparent; /* inferred from screenshot */
  border-image: var(--css-variables-root-border-gradient-color, linear-gradient( 90deg, rgba(102, 102, 102, 1), #00000000 )); /* from cssVariables */
  border-image-slice: 1;
  border-radius: var(--radius-md, 11px); /* inferred from general aesthetic */
  transition: border-color var(--motion-duration-sm, 0.2s) var(--motion-easing-ease-out, ease-out);
}

.container-standard:hover {
  border-color: var(--color-neutral-medium, #808080); /* inferred from screenshot */
}
```

### Inputs & Forms
Form elements are designed for clarity within the dark theme, with a focus on accessible states.

#### Text Input
A standard text input field with a dark background and light text, featuring a clear focus indicator.

```css
.input-text {
  background-color: var(--color-background, #121212);
  color: var(--color-text-primary, #ffffff);
  font-family: var(--typography-body-family, 'Work Sans');
  font-size: var(--typography-body-size, 16px);
  font-weight: var(--typography-body-weight, 400);
  padding: 12px 16px; /* inferred from screenshot */
  border: 1px solid var(--color-neutral-medium, #808080);
  border-radius: var(--radius-sm, 9px);
  transition: border-color var(--motion-duration-sm, 0.2s) var(--motion-easing-ease-in-out, ease-in-out),
              outline var(--motion-duration-sm, 0.2s) var(--motion-easing-ease-in-out, ease-in-out);
}

.input-text:focus {
  border-color: var(--color-primary, #6289ff);
  outline: 3px solid var(--color-focus-ring, #00bbff);
  outline-offset: 3px;
}

.input-text:disabled {
  background-color: var(--color-background-darker, #000000);
  border-color: var(--color-neutral-light, #adadad);
  color: var(--color-text-secondary, #cbcbcb);
  cursor: not-allowed;
}
```

#### Form Label
Labels for form fields, using the secondary text color for subtle guidance.

```css
.form-label {
  color: var(--color-text-secondary, #cbcbcb);
  font-family: var(--typography-body-family, 'Work Sans');
  font-size: var(--typography-body-size, 16px);
  font-weight: var(--typography-body-weight, 400);
  margin-bottom: var(--spacing-8, 8px); /* inferred from screenshot */
  display: block;
}
```

#### Checkbox
A custom-styled checkbox, using a subtle transform for its checked state.

```css
.checkbox-custom {
  appearance: none;
  width: 20px; /* inferred from screenshot */
  height: 20px; /* inferred from screenshot */
  border: 1px solid var(--color-neutral-medium, #808080);
  border-radius: var(--radius-sm, 9px); /* inferred from screenshot */
  background-color: var(--color-background-darker, #000000);
  position: relative;
  cursor: pointer;
  transition: background-color var(--motion-duration-xs, 0.15s) var(--motion-easing-ease-in, ease-in),
              border-color var(--motion-duration-xs, 0.15s) var(--motion-easing-ease-in, ease-in);
}

.checkbox-custom:hover {
  border-color: var(--color-primary, #6289ff);
}

.checkbox-custom:checked {
  background-color: var(--color-primary, #6289ff);
  border-color: var(--color-primary, #6289ff);
}

.checkbox-custom:checked::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 6px; /* inferred from screenshot */
  height: 12px; /* inferred from screenshot */
  border: solid var(--color-text-primary, #ffffff);
  border-width: 0 2px 2px 0;
  transform: translate(-50%, -60%) rotate(45deg); /* from pseudoStates */
  transition: transform var(--motion-duration-xs, 0.15s) var(--motion-easing-ease-out, ease-out);
}

.checkbox-custom:focus-visible {
  outline: 3px solid var(--color-focus-ring, #00bbff);
  outline-offset: 3px;
}
```

### Navigation
The navigation system features a top bar with clear links and distinct hover states.

#### Top Navigation Bar
The main header navigation bar, semi-transparent and fixed at the top.

```css
.nav-top-bar {
  background-color: var(--css-variables-root-nav-background, rgba(18, 18, 18, .8));
  color: var(--color-text-primary, #ffffff);
  padding: 12px var(--css-variables-root-hor-padding, 2.5vw); /* from cssVariables */
  height: var(--css-variables-root-nav-height, calc(.85vw * 3.5)); /* from cssVariables */
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: var(--elevation-z-header, 10);
  backdrop-filter: blur(5px); /* inferred from screenshot */
}
```

#### Navigation Link
Individual links within the navigation bar, with a subtle background change on hover.

```css
.nav-link {
  background-color: transparent;
  color: var(--color-text-primary, #ffffff);
  font-family: var(--typography-body-family, 'Work Sans');
  font-size: var(--typography-body-size, 16px);
  font-weight: var(--typography-body-weight, 400);
  padding: 8px 16px;
  border-radius: var(--radius-sm, 9px);
  text-decoration: none;
  transition: background-color var(--motion-duration-xs, 0.15s) var(--motion-easing-ease-in, ease-in);
  display: inline-flex;
  align-items: center;
}

.nav-link:hover {
  background-color: var(--color-nav-link-hover, #363636);
}

.nav-link[aria-current="page"],
.nav-link.active { /* .active class inferred for consistency */
  background-color: var(--color-nav-link-hover, #363636); /* inferred from screenshot */
  color: var(--color-text-primary, #ffffff);
  font-weight: var(--typography-button-secondary-weight, 500); /* inferred for active state */
}
```

#### Dropdown Menu
(None observed in source)

### Links
Standard text links are styled with the brand's primary blue accent.

#### Standard Link
A typical inline text link, using the primary accent color and underlining on hover.

```css
.link-standard {
  color: var(--color-primary, #6289ff);
  text-decoration: none;
  transition: text-decoration var(--motion-duration-xs, 0.15s) var(--motion-easing-ease-out, ease-out);
}

.link-standard:hover {
  text-decoration: underline;
}

.link-standard:visited {
  color: var(--color-link-visited, #0000ee); /* from contrastPairs, inferred for style */
}
```

#### Secondary Link
(None observed in source)

### Badges
(None observed in source)

## 5. Layout Principles

-   **Spacing System**: The system employs a `4px` base unit, creating a comprehensive and consistent spacing scale.
    -   Base `4px` → `4, 8, 12, 16, 24, 32, 48, 64, 80, 96` px
    -   **4px**: Smallest gaps, used for spacing icons from text.
    -   **8px**: Minor internal padding, spacing between form elements.
    -   **12px**: Padding for smaller buttons, internal component spacing.
    -   **16px**: Standard padding for text inputs, spacing between list items.
    -   **24px**: Vertical spacing between related content blocks, section padding.
    -   **32px**: Larger component spacing, padding for cards.
    -   **48px**: Significant vertical separation between major sections.
    -   **64px**: Large section padding, hero content spacing.
    -   **80px**: Extra-large vertical spacing for distinct content areas.
    -   **96px**: Maximum vertical spacing for hero sections or full-page breaks.

-   **Grid & Container** *(Suggested — not measured)*: _Note: container widths and column counts are not extracted from the source. The values below are reasonable defaults inferred from the visible layout density._
    -   **Max Width**: `1280px` (inferred from screenshot)
    -   **Columns**: `12` (inferred)
    -   **Gutter**: `24px` (inferred)
    -   **Section Padding**: `0px 2.5vw` horizontal, `64px` vertical (from `cssVariables` and screenshot)

-   **Whitespace Philosophy**: Whitespace is used generously to create a sense of openness and focus, particularly with the dark background. Ample vertical spacing, often `48px` to `64px`, separates distinct content blocks, allowing elements to breathe. Horizontal padding, derived from `2.5vw`, ensures content never feels cramped against the screen edges. This deliberate use of negative space emphasizes key information and interactive elements, contributing to a clean, high-tech aesthetic.

-   **Border Radius Scale**:
    -   `sm`: `9px` – Used for smaller interactive elements like navigation links and input fields.
    -   `md`: `11px` – Standard radius for buttons and general content containers.
    -   `lg`: `15px` – Larger rounded corners for more prominent containers or visual elements.
    -   `xl`: `23px` – Used for distinct, softer-edged UI elements.
    -   `full`: `50px` – Applied to pill-shaped elements such as navigation arrows or tags.

## 6. Depth & Elevation

The AI Robots design system primarily uses z-index for layering content, with no explicit box-shadows observed in the extracted tokens.

-   **Background Elements (z--1)**: `z-index: -1` — Used for decorative background images or subtle visual overlays.
-   **Content (z-1)**: `z-index: 1` — Standard stacking order for main content blocks and interactive elements.
-   **Shade Overlays (z-2)**: `z-index: 2` — Applied to elements that create a subtle overlay effect, like strong.shade.
-   **Header (z-10)**: `z-index: 10` — The main fixed navigation bar, ensuring it always remains above page content.
-   **Preloader (z-200000)**: `z-index: 200000` — The highest stacking context for temporary loading screens or modals, ensuring it covers all other content.

**Shadow Philosophy**: The design system opts for a flat aesthetic, eschewing traditional box-shadows for depth. Instead, layering is achieved purely through z-index management, creating distinct planes of content without visual "lift." The focus is on clean separation and clarity, with interactive states relying on background color changes and subtle transforms rather than shadows.

## 7. Do's and Don'ts

### Do's
-   **Do** use `#6289ff` for all primary interactive elements and brand accents.
-   **Do** ensure body text in `#cbcbcb` on `#000000` backgrounds, which achieves an AAA contrast ratio of 12.94.
-   **Do** use `Work Sans` `700` for all `H1` and `H2` titles to maintain strong hierarchy.
-   **Do** apply `10px 18px` padding to the Primary Button for consistent sizing.
-   **Do** use `var(--radius-sm, 9px)` for input fields and `var(--radius-md, 11px)` for buttons.
-   **Do** separate major content sections with at least `var(--spacing-48, 48px)` vertical spacing.
-   **Do** use `outline: 3px solid var(--color-focus-ring, #00bbff)` for all focusable interactive elements.
-   **Do** ensure navigation links use `var(--color-nav-link-hover, #363636)` for their hover background.
-   **Do** maintain a `1.5` line-height for all body text (`16px` `400`) to enhance readability.

### Don'ts
-   **Don't** use `#0000ee` on `#000000` backgrounds, as it fails AA contrast with a ratio of 2.23.
-   **Don't** introduce any font families other than 'Work Sans' for content.
-   **Don't** use button padding values outside the `10px 18px` range for primary and dark buttons.
-   **Don't** apply `box-shadow` for elevation; rely solely on `z-index` for layering.
-   **Don't** use `#adadad` for primary text on `#121212` backgrounds, as it would fail AA contrast.
-   **Don't** use `0.1s` or `0.5s` transition durations; stick to the `0.15s` to `0.3s` scale.
-   **Don't** center align body text; prefer left alignment for improved readability on `16px` text.
-   **Don't** use `border-radius` values other than `9px`, `11px`, `15px`, `23px`, or `50px`.

## 8. Responsive Behavior *(Suggested — not measured)*
_Note: breakpoints below are industry-standard recommendations, not measurements from the source. Adjust to the brand's actual media queries when implementing._

-   **Suggested Breakpoints**:
    -   **Mobile Small** (~375px): Typography scales down, single-column layouts.
    -   **Mobile Large** (~480px): Navigation collapses to hamburger menu.
    -   **Tablet** (~768px): Two-column layouts for some content, larger touch targets.
    -   **Desktop** (~1024px): Full navigation visible, multi-column layouts.
    -   **Desktop Large** (~1440px): Max content width applied, increased spacing.
-   **Touch Targets**:
    -   Interactive elements like buttons and links should have a minimum tap area of `44px` by `44px`.
    -   Ensure at least `12px` of clear space between adjacent touch targets.
-   **Collapsing Strategy**:
    -   **Navigation**: The top navigation bar should collapse into a hamburger menu icon below `768px`.
    -   **Cards**: Content containers should stack vertically on mobile, maintaining `24px` vertical spacing.
    -   **Typography**: Display and Heading 1 font sizes should scale down by `20-30%` on mobile.
    -   **Padding**: Horizontal `2.5vw` padding should be maintained, but vertical section padding may reduce to `32px` on mobile.
    -   **Forms**: Input fields should occupy `100%` width of their container on smaller screens.
    -   **Spacing**: The `var(--spacing-scale)` should be used, but larger values like `80px` and `96px` may be reduced on mobile.

## 9. Agent Prompt Guide

-   **Quick Color Reference**
    -   `primary`: `#6289ff`
    -   `background`: `#121212`
    -   `background-darker`: `#000000`
    -   `background-light`: `#ffffff`
    -   `text-primary`: `#ffffff`
    -   `text-secondary`: `#cbcbcb`
    -   `text-dark`: `#000000`
    -   `text-dark-muted`: `#131313`
    -   `neutral-medium`: `#808080`
    -   `neutral-light`: `#adadad`
    -   `button-light-hover`: `#d1d1d1`
    -   `nav-link-hover`: `#363636`
    -   `focus-ring`: `#00bbff`
    -   `link-visited`: `#0000ee`

-   **Iteration Guide**
    1.  Always use `Work Sans` as the font family for all text elements.
    2.  Ensure primary CTAs use `background-color: var(--color-background-light, #ffffff)` and `color: var(--color-text-dark-muted, #131313)`.
    3.  Apply `padding: 10px 18px` and `border-radius: var(--radius-sm, 9px)` to all standard buttons.
    4.  Utilize the `spacing` scale `[4, 8, 12, 16, 24, 32, 48, 64, 80, 96]` for all layout and component spacing.
    5.  Set main body text to `font-size: 16px`, `font-weight: 400`, `line-height: 1.5`.
    6.  All interactive elements must include a `transition` with `var(--motion-duration-xs, 0.15s)` to `var(--motion-duration-lg, 0.3s)`.
    7.  Implement `outline: 3px solid var(--color-focus-ring, #00bbff); outline-offset: 3px;` for `:focus-visible` states on inputs and buttons.
    8.  Ensure navigation links have `background-color: var(--color-nav-link-hover, #363636)` on hover and active states.
    9.  Do not use `box-shadow` for elevation; manage layering exclusively with `z-index` values `1, 2, 10, 200000`.
    10. Always check contrast: `#cbcbcb` on `#000000` passes AAA; `#6289ff` on `#000000` passes AA.
    11. Implement responsive design by collapsing the main navigation to a hamburger menu below `768px`.
    12. Maintain `border-radius: var(--radius-md, 11px)` for general content containers.