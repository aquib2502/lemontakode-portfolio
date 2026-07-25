# LemontaKode Portfolio — Complete Creative Redesign

You are working inside the existing LemontaKode portfolio repository.

Before changing anything, inspect the entire existing landing-page implementation, including all components imported by `src/app/page.js`, global styles, fonts, animation utilities, assets, images, videos, responsive behavior, and existing dependencies.

Do NOT immediately start coding.

First understand what already exists, then redesign the landing page as one cohesive creative system.

## PRIMARY OBJECTIVE

Transform the current website from a recognizable AI-generated SaaS/agency template into a genuinely art-directed, premium software studio portfolio.

The finished site should feel like a talented designer and frontend engineer spent significant time considering:

* composition
* typography
* spacing
* pacing
* motion
* imagery
* storytelling
* hierarchy
* interaction
* restraint
* performance

It should feel custom-made for **LemontaKode**, not generated from a component library.

Think:

premium digital studio
× engineering company
× editorial portfolio
× subtle experimental interaction

The website should communicate:

**serious engineering + excellent design + human craftsmanship**

---

# IMPORTANT: DO NOT PRESERVE THE CURRENT VISUAL STRUCTURE

You may reuse useful content and assets, but do NOT simply reskin the existing sections.

The current implementation relies too heavily on:

* rounded cards
* icon boxes
* glowing gradients
* centered SaaS hero layouts
* pills/badges
* generic bento grids
* repeated fade-up animations
* generic Lucide iconography
* excessive borders
* identical section structures
* gradient text
* marketing buzzwords
* predictable alternating project layouts

Remove or substantially redesign these patterns.

Do not make every piece of information a card.

Do not put every icon inside a rounded square.

Do not use decorative gradients simply because empty space exists.

Do not fill the website with glassmorphism.

Do not make every section `max-w-7xl + heading + paragraph + grid`.

The page needs visual rhythm.

Some sections should be dense.

Some should breathe.

Some should be typographic.

Some should be visual.

Some should be interactive.

---

# DESIGN PHILOSOPHY

Use restraint.

Premium does NOT mean adding more effects.

Premium means:

* excellent typography
* deliberate spacing
* confident composition
* strong imagery
* subtle details
* controlled motion
* meaningful interaction
* consistency

Prefer one exceptional visual idea over ten mediocre effects.

Use LemontaKode's lemon identity intelligently.

The lemon yellow should become a recognizable brand signature, not something sprayed throughout every component.

Use a sophisticated neutral foundation with lemon used selectively.

Avoid the stereotypical neon-purple/blue AI startup appearance.

---

# TYPOGRAPHY

Typography should carry a large portion of the visual identity.

Create a strong display/body relationship.

Headlines should feel editorial rather than like generic SaaS headings.

Use responsive typography with `clamp()` where appropriate.

Pay attention to:

* line length
* line breaks
* optical alignment
* letter spacing
* line height
* hierarchy
* whitespace

Avoid generic phrases such as:

"Digital excellence, engineered."

"Next-gen engineering."

"Guaranteed performance."

"Cutting-edge solutions."

"Transforming ideas into reality."

Rewrite generic AI-sounding marketing copy into short, confident, human language.

Copy should sound like a real software studio.

Example direction:

"We design and engineer digital products people actually enjoy using."

Not necessarily this exact sentence—understand the tone.

---

# NAVIGATION

Create a minimal, extremely polished navigation.

It should initially integrate naturally with the hero rather than looking like a detached SaaS navbar.

Possible behavior:

transparent at top
→ subtly changes after scrolling
→ compact floating navigation after leaving hero

Keep interactions extremely smooth.

Navigation should contain only what is necessary.

Do not over-design it.

---

# HERO — MAKE THIS THE SIGNATURE MOMENT

Completely rethink the current hero.

Remove the current:

* Sparkles badge
* generic radial blobs
* metric strip
* squiggle decoration
* conventional CTA pair
* generic SaaS composition

The hero needs ONE memorable creative concept.

It should immediately communicate that LemontaKode is a serious digital product studio.

Explore a composition involving:

large editorial typography

* LemontaKode branding
* controlled motion
* an interactive visual / product imagery / abstract brand object

The layout does NOT need to be perfectly centered.

Asymmetry is encouraged.

Use the available viewport intelligently.

The hero should feel designed rather than assembled.

Consider subtle mouse/parallax response on desktop, but keep it restrained.

A visitor should remember the hero after closing the website.

---

# SCROLL EXPERIENCE

Scrolling should feel exceptionally smooth.

The project already contains Lenis/GSAP-related infrastructure. Inspect it before modifying anything.

Create a consistent motion system instead of random animations.

Use approximately:

fast micro interactions: 150–250ms
normal transitions: 350–600ms
large editorial reveals: 700–1100ms

Use premium easing curves.

Avoid excessive spring/bounce animations.

Avoid having every element:

opacity 0 → 1
translateY 20 → 0

That is one of the biggest AI-generated website tells.

Instead mix meaningful techniques:

* masks
* clipping reveals
* typography reveals
* image cropping
* scale
* horizontal movement
* pinned sections
* controlled parallax
* staggered typography
* scroll-linked progress
* layout transitions

Animations should be tied to the composition.

---

# SECTION TRANSITIONS

Do not make sections feel like stacked React components.

The entire landing page should feel like one continuous visual story.

Create intentional transitions between major sections.

Examples:

dark → warm off-white
large typography → image-led composition
full-width project media → quiet text section
horizontal movement → vertical reading
large visual → restrained whitespace

The transition itself can occasionally become part of the experience.

Avoid obvious hard boundaries unless intentionally used.

---

# HUMAN DETAILS

Introduce subtle imperfections and crafted details that make the site feel human.

Examples:

* editorial annotations
* tiny project numbers
* understated labels
* unusual but deliberate image crops
* thin rules
* offset typography
* occasional handwritten/organic brand detail
* cursor-aware micro interaction
* tiny motion details
* carefully positioned metadata
* unexpected whitespace
* subtle grain/noise if performant

Do NOT turn these into gimmicks.

The user should notice the craftsmanship subconsciously.

---

# CAPABILITIES / SERVICES

Completely remove the current six-card SaaS grid.

Do not show:

icon
title
description
Explore capability →

six times.

Instead create a sophisticated capability presentation.

Possible direction:

01 Product Engineering
02 Web Platforms
03 Mobile Applications
04 Product Design
05 Infrastructure
06 Security

Use typography and interaction rather than cards.

For example, large horizontal capability rows where hovering changes supporting imagery, typography or background details.

Or create an editorial index.

The section should feel like a studio capability statement rather than a pricing-page feature grid.

---

# ENGINEERING / TECHNOLOGY

Do not show the technology stack as ten identical rounded boxes.

React, Next.js, Node, Docker, AWS, etc. are supporting evidence—not the main product.

Present technology more subtly.

Possible approaches:

a horizontal technical ticker
an editorial technology index
stack labels embedded into project case studies
a restrained technical matrix
animated text rows

Show engineering competence without looking like a junior developer portfolio displaying every framework learned.

---

# PROCESS

The current Discover → Design → Build → Launch → Scale content can remain conceptually, but completely rethink its presentation.

Do NOT create five generic cards.

Create a visual sequence.

Consider scroll progression.

For example:

01 Discover
large title + one concise sentence

scroll

02 Design

scroll

03 Build

etc.

Or use a pinned left-side title while the stages progress on the right.

Keep the copy concise.

Motion should help communicate progression.

---

# PROJECTS — MOST IMPORTANT SECTION

This should be the strongest section after the hero.

The repository already contains project videos.

Inspect and use them properly.

Existing project material includes:

* TPFAID Platform
* TPF Admin System
* The Trace Express
* Flow India Projects

and their existing local video assets.

Do NOT present them as repetitive alternating:

video | text
text | video
video | text

That pattern is too predictable.

Build a cinematic case-study showcase.

## Desktop project experience

Consider using large viewport-filling project moments.

A project could occupy approximately 80–100vh.

Use the video as the visual centerpiece.

Videos should:

* autoplay when appropriate
* remain muted
* loop
* use `playsInline`
* pause when sufficiently outside viewport if practical
* load efficiently
* avoid blocking initial page rendering

Use IntersectionObserver where useful.

Do not autoplay four heavy videos unnecessarily before the visitor reaches them.

Use poster images if appropriate.

Project media should feel almost like looking at the actual product on a premium showcase site.

---

# PROJECT STORYTELLING

Each project needs a compact but meaningful narrative.

Show information such as:

PROJECT
TPFAID

TYPE
Crowdfunding Platform

ROLE
Product Design / Engineering

PROBLEM
Short human explanation.

SOLUTION
Short explanation.

IMPACT
Actual measurable outcome where legitimate.

TECH
Relevant technologies.

Avoid paragraphs everywhere.

Make the visual product the hero.

The text should support it.

---

# PROJECT INTERACTION IDEA

Create an elegant project transition system.

Potential directions:

### Direction A — Sticky cinematic projects

Project information remains sticky while video/image compositions transform while scrolling.

### Direction B — Horizontal gallery

Vertical scroll drives a carefully controlled horizontal project gallery.

Only use this if mobile fallback is excellent.

### Direction C — Full viewport chapters

Each project becomes its own visual chapter with transitions between them.

### Direction D — Layered media

Project video begins cropped, expands toward fullscreen during scroll, then reveals project information.

Choose whichever works best with the actual content.

Do NOT implement complex animation merely for novelty.

---

# PROJECT VIDEOS

Treat video like premium product photography.

Use:

* tasteful framing
* subtle browser/device framing only when appropriate
* smooth scaling
* crop transitions
* playback triggered near viewport
* poster images
* responsive video sources if available
* preload metadata instead of blindly preloading everything

Avoid fake 3D laptop mockups unless they genuinely improve the presentation.

Sometimes a clean fullscreen product recording is more premium.

---

# IMAGERY

The website currently relies too heavily on abstract CSS decoration.

Introduce relevant imagery where it improves storytelling.

Images should relate to:

software
digital products
engineering
interfaces
actual project context
human collaboration where appropriate

Avoid cliché stock photos:

people pointing at laptops
fake office meetings
generic programmer screens
robot/AI imagery
random futuristic city renders

Prefer actual product visuals and art-directed imagery.

If an image does not communicate anything, do not add it.

---

# STATS / TRUST

Do not create another dashboard/card section for statistics.

Integrate credibility naturally into the story.

For example:

50+ projects shipped

could appear as oversized editorial typography integrated into a section rather than inside a rounded card.

Only display statistics that are defensible.

Avoid suspicious vanity metrics.

---

# CONTACT

The final CTA should feel like the natural conclusion of the portfolio.

Make it dramatically simpler.

Large statement.

Something along the lines of:

Have something ambitious in mind?

Let's build it properly.

Then one clear action.

Use typography and whitespace instead of another large card.

The transition into the footer should be seamless.

---

# FOOTER

Keep the footer minimal.

Brand.

Location / availability if appropriate.

Email/contact.

Selected social links.

Legal/copyright.

No giant generic sitemap unless genuinely necessary.

---

# MICROINTERACTIONS

Create polished interaction states for:

* navigation
* text links
* project links
* buttons
* project media
* cursor interactions where appropriate
* video hover
* capability rows

Buttons should not simply:

scale(1.05)

Experiment with:

text sliding
arrow movement
background sweep
mask transition
underline expansion
magnetic movement

Keep movement subtle.

---

# CURSOR

On desktop only, consider a custom contextual cursor for project media.

Example:

hover project → cursor becomes:

VIEW CASE

or

PLAY

Do not replace the native cursor globally.

Disable custom cursor behavior on touch devices.

---

# PERFORMANCE IS NON-NEGOTIABLE

The final experience must feel extremely fast.

A beautiful website that stutters is unacceptable.

Target:

60fps animation on modern desktop devices.

Avoid layout thrashing.

Prefer transform and opacity animations.

Use GSAP ScrollTrigger only where it genuinely adds value.

Do not create dozens of independent scroll listeners.

Use Lenis correctly.

Clean up animation contexts/listeners on unmount.

Lazy-load below-the-fold media.

Optimize images.

Avoid enormous blur filters covering the viewport.

Avoid excessive `backdrop-filter`.

Avoid unnecessary React state updates during scroll.

Avoid animating layout properties where transforms can achieve the same effect.

Use `will-change` only where justified.

Respect:

`prefers-reduced-motion`

Create reduced-motion fallbacks.

---

# MOBILE

Mobile cannot simply be the desktop design squeezed vertically.

Design responsive behavior intentionally.

Remove expensive effects where necessary.

No horizontal overflow.

No broken sticky sections.

No giant unreadable typography.

No scroll-jacking.

Project videos should maintain sensible aspect ratios.

Touch interactions must work without hover.

Motion should be reduced on lower-powered/mobile contexts where appropriate.

---

# ACCESSIBILITY

Maintain:

semantic HTML
keyboard navigation
visible focus states
proper contrast
descriptive alt text
reduced-motion support
accessible buttons/links

Animation should never prevent content access.

---

# CODE QUALITY

Do not rewrite the entire application unnecessarily.

Reuse existing infrastructure where it is good.

Refactor components where the design requires it.

Break large animation systems into maintainable components/hooks.

Avoid giant 500-line components.

Keep content/data separated from presentation where appropriate.

Do not install another animation library unless absolutely necessary.

The existing stack already provides enough tools.

Remove dead code and unused imports after redesigning.

---

# IMPORTANT CREATIVE RULE

Whenever you are about to add:

a gradient
a glow
a rounded card
a pill
an icon box
a floating orb
a glass panel
a generic fade-up animation

ask:

**"Does this improve the composition, or am I adding it because modern websites commonly have it?"**

If it is the latter, do not add it.

---

# VISUAL QUALITY TEST

Before considering a section complete, evaluate it at:

1440px desktop
1024px laptop/tablet
768px tablet
390px mobile

Then ask:

Does this look custom?

Does this look like LemontaKode?

Is there a clear visual hierarchy?

Is there unnecessary decoration?

Does the animation have a reason?

Does it look good when animation stops?

Would this still be visually strong as a screenshot?

If the answer is no, redesign it.

---

# EXECUTION PROCESS

Do this systematically.

## Phase 1 — Audit

Inspect the existing landing page and identify:

* reusable content
* reusable assets
* project videos
* useful components
* weak visual patterns
* duplicated patterns
* performance concerns
* animation infrastructure

## Phase 2 — Design direction

Define internally:

* typography system
* color system
* spacing rhythm
* grid
* project treatment
* animation language
* section pacing

Do this BEFORE implementing individual components.

## Phase 3 — Structural redesign

Rebuild the landing-page composition.

Do not merely change CSS on the existing layout.

## Phase 4 — Motion

Once static composition looks excellent, add motion.

Static design must look premium BEFORE animation.

## Phase 5 — Performance

Profile the implementation.

Fix:

* unnecessary rerenders
* video loading
* scroll performance
* animation cleanup
* layout shifts

## Phase 6 — Responsive refinement

Review every section at mobile/tablet/desktop widths.

---

# FINAL RESULT

The visitor should not think:

"Nice animated template."

They should think:

**"These people clearly know how to design and build digital products."**

The portfolio should feel confident enough to win serious software clients.

Prioritize:

1. art direction
2. project presentation
3. typography
4. visual hierarchy
5. motion quality
6. storytelling
7. performance
8. responsive quality

Do not prioritize quantity of effects.

Build fewer things, but execute them exceptionally well.

Start by auditing the current code and assets. Then redesign the landing page as a single coherent experience rather than independently styling each existing section.


# TYPOGRAPHY — MAKE IT A CORE PART OF THE ART DIRECTION

Typography must be one of the strongest visual elements of the entire LemontaKode website.

Do NOT use one font, one weight, one heading style, and one body style everywhere.

The current uniform typography contributes to the generic AI-generated appearance.

Create a deliberate **multi-typeface typography system** with contrast, personality, and hierarchy.

## Use Multiple Font Personalities

Choose approximately **2–3 complementary font families**, each with a specific role.

For example:

### 1. Primary Display Font

Use for major statements, hero typography, project titles, and important section headlines.

It should feel:

* distinctive
* modern
* confident
* editorial
* premium

It may be geometric, grotesk, neo-grotesk, or another strong contemporary display face.

### 2. Editorial / Accent Font

Introduce a contrasting font for selected words, statements, project quotes, or expressive moments.

Consider:

* elegant serif
* italic serif
* condensed display font
* tasteful variable font

Use it selectively.

For example, a headline could combine:

**We design digital products**
*people remember.*

where the first line uses the primary display font and the second uses an elegant italic serif.

The contrast should feel intentionally art-directed rather than decorative.

### 3. Functional / Body Font

Use a highly readable neutral sans-serif for:

* descriptions
* navigation
* case-study information
* buttons
* captions
* supporting text

It should disappear into the experience rather than competing with the display typography.

---

# TYPOGRAPHIC VARIETY

Create meaningful variation using:

* font family
* font size
* weight
* width
* italic styles
* capitalization
* letter spacing
* line height
* color
* opacity
* alignment
* indentation
* line breaks
* text orientation where appropriate

Do NOT make every heading:

`font-bold text-5xl text-white`

Typography should have composition.

---

# EXTREME SCALE CONTRAST

Use stronger differences between important and supporting typography.

A major desktop statement might reach:

`clamp(4rem, 9vw, 10rem)`

while supporting metadata could be:

`11px–13px`

This large scale contrast creates editorial hierarchy.

Do not make everything medium-sized.

Use combinations such as:

HUGE DISPLAY TEXT

small metadata

medium editorial copy

tiny project index

large italic statement

compact technical labels

The differences should be obvious.

---

# RESPONSIVE TYPOGRAPHY

Avoid relying entirely on Tailwind breakpoint jumps such as:

`text-4xl md:text-6xl lg:text-8xl`

Use fluid typography where beneficial:

`clamp()`

Typography should scale continuously with the viewport.

Carefully control line breaks so headlines remain composed at:

1440px
1024px
768px
390px

Do not allow awkward one-word lines.

---

# MIX FONTS INSIDE HEADLINES

Important headlines can contain multiple typographic voices.

Example concept:

BUILDING
*digital products*
THAT WORK.

Where:

"BUILDING" = bold grotesk
"digital products" = large elegant italic serif
"THAT WORK." = bold grotesk

Or:

Software should feel
**EFFORTLESS.**

with radically different scale between the two lines.

Do not copy these examples literally. Develop typography appropriate to LemontaKode.

---

# TYPOGRAPHY + BRAND COLOR

Use color as part of the typography system.

Do NOT simply make random keywords blue/yellow.

Establish clear rules.

Possible palette:

primary text → warm off-white
secondary text → muted grey
brand emphasis → LemontaKode lemon
technical metadata → cool neutral
project-specific accent → derived carefully from project media

Use lemon yellow sparingly so it remains powerful.

Some oversized typography can use very low-contrast colors to become part of the composition.

Example:

ENGINEERING

could appear as enormous dark-grey background typography while smaller content moves above it.

---

# TYPOGRAPHIC MOTION

Typography animation should also vary.

Do not animate every heading using:

opacity 0 → 1
translateY 20px → 0

Use different techniques according to importance.

Possible techniques:

### Mask reveal

Text emerges vertically from an overflow-hidden wrapper.

### Line reveal

Headline lines appear sequentially.

### Character reveal

Individual characters subtly appear/stagger.

Use sparingly.

### Split typography

Two portions of a headline move from opposing directions.

### Scroll-linked typography

Large words subtly translate as the visitor scrolls.

### Variable font animation

If a suitable variable font is used, carefully animate weight or width.

### Italic transition

A selected word can subtly transform between roman and italic on interaction.

### Text color transition

Typography can change color as the background/section changes.

### Oversized background words

Large words can move slower than foreground content to create depth.

Keep everything smooth and restrained.

---

# EDITORIAL COMPOSITION

Treat typography like graphic design rather than HTML text.

Experiment with:

* asymmetrical positioning
* text occupying only part of the viewport
* oversized words extending near viewport edges
* unexpected line breaks
* small annotations beside huge headlines
* vertical project numbers
* offset serif words
* aligned metadata columns
* intentional whitespace
* baseline alignment

Not every section title needs to sit at:

left: 0
then paragraph
then grid

Break this pattern.

---

# PROJECT TYPOGRAPHY

Each case study should have strong typographic identity.

For example:

small:
`01 / CROWDFUNDING PLATFORM`

huge:
`TPFAID`

supporting:
`Design · Engineering · Infrastructure`

then an editorial outcome such as:

`72 HOURS → 6 MINUTES`

The outcome could become a major typographic moment instead of another statistic card.

Project videos and typography should interact compositionally.

Typography can partially overlap media where readability remains excellent.

---

# TECHNICAL TYPOGRAPHY

Use a tasteful monospace font selectively for technical information such as:

`NEXT.JS / NODE / MONGODB`

`2026`

`WEB PLATFORM`

`ROLE — DESIGN + ENGINEERING`

`STATUS — LIVE`

Do NOT use monospace for normal paragraphs.

It should provide a subtle engineering character.

---

# FONT WEIGHTS

Use the full range intentionally.

Examples:

300 → elegant supporting copy
400 → body
500 → navigation / labels
600 → important information
700 → headings
800/900 → rare display moments

Avoid making everything bold.

Thin/light typography beside extremely heavy display typography can create sophisticated contrast.

---

# ITALICS

Use italics as an art-direction tool.

A premium serif italic can make selected words feel more human and editorial.

Examples of concepts:

Engineered with
*intention.*

Digital products for
*real people.*

Again, do not blindly copy these phrases.

Use the technique where it improves the composition.

---

# TEXT COLOR HIERARCHY

Do not use pure white for every piece of text.

Create depth.

Example hierarchy:

Primary headline:
`#F4F2ED`

Body:
`rgba(244,242,237,0.72)`

Metadata:
`rgba(244,242,237,0.45)`

Brand:
LemontaKode lemon

Very subtle decorative text:
`rgba(244,242,237,0.08)`

Adjust actual values based on the final palette and accessibility requirements.

Maintain sufficient contrast for readable content.

---

# FONT SELECTION

Choose fonts intentionally.

Do not automatically default to:

Inter
Poppins
Roboto
Montserrat

unless there is a compelling reason.

Explore high-quality fonts that give the portfolio more identity.

Prefer performant variable fonts where practical.

If using Google Fonts or another webfont source, keep the number of requested files/weights under control.

Use `next/font` where appropriate to avoid unnecessary font-loading issues and layout shifts.

Do not sacrifice performance for typography.

---

# TYPOGRAPHY PERFORMANCE

Only load weights/styles actually used.

Prefer variable font files when appropriate.

Preload critical fonts.

Use sensible fallbacks.

Avoid FOIT.

Prevent layout shift.

Do not import ten font weights just because they exist.

---

# IMPORTANT RULE

Typography should NOT merely contain the design.

**Typography should BE part of the design.**

If all images, gradients, glows, icons and animations were removed, the page should still look beautifully composed because of:

type
scale
spacing
alignment
contrast
hierarchy

Every major section should have its own typographic rhythm while remaining part of one coherent LemontaKode design system.

The final result should feel closer to an art-directed digital studio portfolio or editorial design piece than a conventional software-company template.
