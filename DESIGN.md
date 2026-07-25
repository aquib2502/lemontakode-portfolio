# SECOND REDESIGN PASS — THE CURRENT REDESIGN IS STILL TOO SAFE

Read the CURRENT implementation again before making changes.

Do not work from the previous prompt or assumptions about the old website.

The first redesign improved styling, but it did NOT solve the fundamental interaction and art-direction problems.

The website still feels like vertically stacked React sections with slightly better typography.

I do not want another cosmetic refinement.

I want a structural and motion redesign.

---

# 1. HERO DOES NOT FIT LAPTOP VIEWPORTS — FIX THIS FIRST

The current hero uses a large minimum viewport height plus large top/bottom padding and oversized content.

On common laptop screens, especially approximately:

1366×768
1440×900
1536×864

the hero composition does not fit comfortably inside the initial viewport.

This is unacceptable.

The initial hero should be deliberately composed to fit within the available viewport.

Use modern viewport units such as `svh`/`dvh` where appropriate.

Account for the navbar.

Do NOT simply make everything tiny.

Create responsive sizing based on BOTH width and height.

Use CSS such as:

`clamp()`

and, where useful, height-based media queries.

The hero should look excellent on a MacBook/laptop viewport, not only on a large desktop monitor.

The user should see the complete intended hero composition without needing to scroll just to understand it.

Test at:

1366×768
1440×900
1920×1080
1024×768
390×844

The hero should adapt intelligently to short screens.

---

# 2. HERO STILL NEEDS A REAL VISUAL IDEA

The current hero is mostly:

large typography

* paragraph
* CTA
* telemetry list

This is still too safe.

Introduce a memorable visual system.

Do NOT add another gradient blob.

Do NOT add floating generic cards.

Do NOT add a random 3D sphere.

Use the LemontaKode identity.

Explore a custom visual such as:

* animated LemontaKode mark
* lemon-inspired geometric object
* fragmented brand typography
* interactive typographic composition
* code/product fragments that respond subtly to cursor movement
* masked product imagery
* animated grid deformation
* brand object that transitions into the next section

The visual should have a reason to exist.

The hero needs ONE signature interaction.

---

# 3. CENTERED FLOATING NAVBAR — NOT FULL WIDTH

Completely redesign the current navbar.

I explicitly DO NOT want a full-width navbar.

Remove the current full-width header treatment.

Remove the white horizontal line that appears after scrolling.

There must be NO full-screen-width `border-bottom`.

Create a centered floating navigation container.

Desktop concept:

```
             [ LemontaKode | Work | Services | Process | Contact | Let's talk ]
```

The actual nav container should have a controlled maximum width and should float near the top center.

Example conceptual behavior:

At top:

slightly wider
transparent / visually integrated with hero
minimal chrome

After scrolling:

smoothly becomes narrower
moves slightly downward/upward as appropriate
background gains subtle opacity
small blur if performance permits
corners become slightly more compact
logo may simplify
spacing between nav items tightens

This should feel like the SAME navbar physically transforming.

Do not abruptly switch CSS classes.

Animate dimensions/position/background/radius/spacing smoothly.

Use GSAP if it provides the cleanest implementation.

The transformation should feel premium.

NO white horizontal line.

NO full-width background bar.

NO full-width border.

On mobile create an appropriately compact floating navigation control.

---

# 4. ACTUALLY USE GSAP

GSAP exists in the project but the current experience barely benefits from it.

Use GSAP intentionally.

Use:

GSAP
ScrollTrigger

where they materially improve the experience.

Do NOT use GSAP merely to reproduce:

opacity: 0 → 1
y: 20 → 0

Framer Motion can handle simple component micro-interactions.

GSAP should handle larger narrative motion.

Potential uses:

* pinned sections
* scrubbed transitions
* horizontal project movement
* typography masks
* project video transitions
* section transformations
* navbar morphing
* parallax
* controlled scale transitions
* scroll-linked progress
* image/video reveals
* clip-path reveals

Create proper GSAP contexts and clean them up on unmount.

Do not create memory leaks.

---

# 5. STOP MAKING EVERYTHING MOVE UP

The site currently relies too much on:

initial:
opacity 0
y 15/20

then:
opacity 1
y 0

Stop using this as the default animation.

It makes the website feel generated.

Every section does NOT need an entrance animation.

Motion should depend on the composition.

Use a richer vocabulary.

For example:

## Typography

clip-path reveal
mask reveal
line splitting
horizontal reveal
letter-spacing transition
selected word italic transformation
text crossing behind/over media

## Media

masked expansion
scale from cropped state
horizontal translation
image/video reveal through clipping
sticky media transformation
controlled parallax

## Sections

background transition
pinned content
horizontal progression
overlapping sections
scroll-linked scale
foreground/background depth

## Microinteraction

magnetic button
arrow slide
underline expansion
text swap
cursor-follow project label

Use restraint.

Not everything needs to move.

---

# 6. BREAK THE VERTICAL SCROLL MONOTONY

This is one of the most important requirements.

Currently EVERYTHING is vertically stacked.

Hero ↓
Vision ↓
Capabilities ↓
Process ↓
Projects ↓
Contact ↓

Inside those sections, everything also moves vertically.

This is too predictable.

Create changes in scroll direction and spatial behavior.

The page itself can still use normal vertical browser scrolling, but vertical wheel/touch scrolling should sometimes DRIVE other movement.

Examples:

vertical scroll → horizontal content movement

vertical scroll → pinned composition changing internally

vertical scroll → project media expanding

vertical scroll → typography moving horizontally

vertical scroll → capability rows crossing the viewport

Do not hijack the user's scroll aggressively.

The browser still needs to feel natural.

But the visual response does NOT always need to be downward movement.

---

# 7. PROJECT SECTION IS FAR TOO LONG

The current project implementation gives every project approximately 85vh plus huge spacing.

With four/five projects this creates an unnecessarily long page.

Redesign this entire section.

I do NOT want to vertically scroll through five almost-identical giant project blocks.

This is a major requirement.

---

# 8. PROJECTS SHOULD BECOME A HORIZONTAL / PINNED EXPERIENCE

On desktop, strongly consider a pinned horizontal case-study experience.

Concept:

The visitor reaches "Selected Work."

The section pins.

Normal vertical scrolling now moves through projects horizontally.

PROJECT 01 → PROJECT 02 → PROJECT 03 → PROJECT 04 → PROJECT 05

The user continues scrolling normally with mouse wheel/trackpad.

GSAP ScrollTrigger translates the internal project track horizontally.

After the final project, normal vertical page scrolling resumes.

This creates variation without requiring custom wheel-event hijacking.

Keep the interaction smooth and predictable.

Include a subtle progress indicator:

01 ————— 05

or a thin progress line.

Do not make the horizontal section excessively long.

Each project should transition efficiently.

---

# 9. PROJECT VIDEO ASPECT RATIOS ARE WRONG

Do NOT assume all project videos are 16:9.

The current implementation forces:

`aspect-[16/9]`

and:

`object-cover`

which crops important UI from project recordings.

Inspect the actual media dimensions/aspect ratios.

Preserve each video's meaningful content.

The user should be able to see the complete product interface.

Use an adaptive media stage.

Possible implementation:

large outer project media container

inside:

video using its natural aspect ratio

`object-fit: contain`

with an intentionally designed surrounding stage.

Do NOT leave ugly empty black space.

Instead make the container itself part of the composition.

For example:

soft neutral/dark stage
subtle project-specific background
browser chrome where appropriate
small project metadata
carefully controlled padding

The VIDEO should never be cropped simply to satisfy a decorative 16:9 box.

For landscape desktop recordings, show the entire recording.

For taller recordings, adapt the frame.

---

# 10. PROJECT MEDIA SHOULD BE THE STAR

Current project presentation still feels like:

video
heading
tagline
tech
stat card

That is too formulaic.

Make each project feel like a designed case study.

The video should occupy most of the visual attention.

Project metadata can sit around it rather than underneath it.

Example composition:

01 / TPFAID

```
             [ LARGE PRODUCT VIDEO ]
```

Crowdfunding
Platform

ROLE
Design + Engineering

```
                                72 HRS
                                ↓
                                6 MIN
```

Use asymmetry.

Use whitespace.

Allow typography to interact with the media.

---

# 11. EACH PROJECT CAN TRANSITION DIFFERENTLY

Do not make every project transition identical.

Maintain one coherent motion language, but vary composition.

Example:

Project 1:
video enters from right while title remains pinned.

Project 2:
media expands from a smaller crop.

Project 3:
two pieces of project media slide past each other.

Project 4:
typography transitions behind the media.

The variation should feel art-directed, not random.

---

# 12. MOBILE PROJECT FALLBACK

Do NOT force desktop horizontal pinning onto mobile if it becomes awkward.

Mobile can use:

horizontal swipe/snap carousel

or

compact vertical project cards with native aspect-ratio media

or another touch-friendly experience.

Keep it fast.

Do not make mobile users scroll through five 85vh project chapters.

---

# 13. EVERY SECTION CURRENTLY LOOKS TOO SIMILAR

This needs to change significantly.

The website currently uses too much of the same:

dark background
small yellow mono label
large white heading
yellow serif word
paragraph
content underneath

That is now becoming another template.

Each major section needs a distinct composition.

Not a different random design—different visual RHYTHM within one design system.

---

# 14. GIVE EACH SECTION ITS OWN VISUAL CHARACTER

For example:

## HERO

Dark.

Highly typographic.

Interactive brand visual.

Controlled viewport composition.

---

## VISION

Switch atmosphere.

Potentially warm off-white / cream background.

Dark typography.

Large editorial statement.

Minimal content.

Maybe oversized serif typography.

Almost no UI components.

---

## CAPABILITIES

Return to dark or another neutral tone.

Large horizontal typographic rows.

No cards.

Hover/cursor interaction.

Rows may slide slightly horizontally.

Supporting text/image can change as the active capability changes.

---

## PROCESS

Use a pinned storytelling composition.

Left:

large changing number:

01
02
03
04
05

Right:

Discover
Design
Build
Launch
Scale

As the visitor scrolls, keep the overall section partially pinned while the active stage changes.

Use GSAP ScrollTrigger.

Avoid five cards.

---

## PROJECTS

Horizontal/pinned cinematic section.

Media-first.

---

## CONTACT

Completely quiet again.

Large typography.

Very little interface.

Large negative space.

One strong action.

This creates pacing.

---

# 15. BACKGROUND COLOR TRANSITIONS

The website should not remain the exact same dark background from beginning to end.

Introduce carefully controlled tonal transitions.

Example:

Hero:
near black

Vision:
warm ivory

Capabilities:
warm grey / near black

Process:
deep charcoal

Projects:
black

Contact:
LemontaKode lemon or warm off-white, if aesthetically successful

Do not turn the site into a rainbow.

Use maybe 3–4 foundational tones.

Transition between them smoothly.

GSAP can interpolate section/background states if appropriate.

---

# 16. TYPOGRAPHY STILL NEEDS MORE VARIATION

The previous typography changes are not enough.

Do not repeat the same:

mono yellow eyebrow
white sans headline
yellow serif italic word

in every section.

That is becoming formulaic.

Create a typography SYSTEM, but allow different sections to emphasize different voices.

Use approximately 3 complementary type voices:

1. strong modern grotesk/display
2. editorial serif / italic
3. technical monospace

But vary WHICH one dominates.

Hero:
grotesk dominant.

Vision:
serif dominant.

Capabilities:
condensed/grotesk typography dominant.

Process:
monospace numbers + restrained sans.

Projects:
huge project titles + tiny technical metadata.

Contact:
massive serif/sans combination.

---

# 17. DIFFERENT FONT SIZES — MUCH MORE CONTRAST

Stop keeping all section headings around approximately the same scale.

Create dramatic scale variation.

Examples:

Hero headline:
very large

Vision statement:
even larger but lighter

Capability names:
clamp(2rem, 5vw, 5rem)

Process number:
clamp(6rem, 16vw, 15rem)

Project number:
11px

Project title:
clamp(4rem, 10vw, 9rem) where composition allows

Metadata:
10–12px

Body:
15–18px

Impact metric:
very large

This creates visual hierarchy.

---

# 18. TYPOGRAPHIC COLOR VARIATION

Do not use:

white
yellow
grey

in exactly the same roles everywhere.

Examples:

On ivory section:

near-black headline
muted graphite body
lemon highlight

On dark section:

warm-white display
grey body
lemon technical accent

Projects may borrow subtle accent colors from their actual product identity.

Keep accessibility intact.

---

# 19. HORIZONTAL TYPOGRAPHIC MOTION

Introduce subtle horizontal typography movement.

Examples:

A huge background word:

ENGINEERING →

moves slowly left while scrolling.

Another line:

← DESIGN

moves slightly right.

Capabilities can use opposing horizontal movement.

This immediately breaks the "everything comes upward" feeling.

Keep speed subtle.

---

# 20. VISION SECTION SHOULD BE EXTREMELY SIMPLE

Do not turn vision into another component-heavy section.

Consider an almost poster-like composition.

Example concept:

small:
WHAT WE BELIEVE

huge serif:
Technology should
feel less like
technology.

small annotation:
DESIGN / ENGINEERING / PEOPLE

Use large whitespace.

Possibly one carefully selected image or brand detail.

No cards.

---

# 21. CAPABILITIES SHOULD FEEL INTERACTIVE

Use large rows.

Example:

01     PRODUCT ENGINEERING                 →

02     WEB EXPERIENCES                     →

03     MOBILE                              →

04     PRODUCT DESIGN                      →

05     INFRASTRUCTURE                      →

06     SECURITY                            →

Hovering a row could:

shift typography horizontally
reveal a short description
change a supporting visual
move an arrow
alter background tone subtly

Desktop cursor interaction can add depth.

Mobile should use tap/accordion behavior.

---

# 22. PROCESS SHOULD USE PINNING

This is a strong place for ScrollTrigger.

Example:

section height: approximately 300–400vh internally

visible viewport remains pinned for part of it.

As scroll progresses:

01 DISCOVER

transitions into

02 DESIGN

then

03 BUILD

then

04 LAUNCH

then

05 SCALE

The large number can transform.

Descriptions can crossfade/mask.

A line/progress element can update.

But do not make the pinned duration excessive.

The user should understand the process quickly.

---

# 23. CREATE DEPTH

The site currently feels flat because content mostly sits on one plane.

Create subtle depth with:

foreground typography
media layer
background typography
small annotations
slow parallax elements

Do NOT create fake 3D everywhere.

Depth should come mostly from motion speed differences and overlap.

---

# 24. SECTION OVERLAP

Some transitions can overlap.

For example:

the final word of Vision could remain visible briefly while Capabilities enters.

Or project media could expand over the section boundary.

Or the hero brand object could transition into the Vision section.

This makes the website feel continuous rather than:

<Component />
<Component />
<Component />
<Component />

---

# 25. USE CLIP-PATH / MASKING

Use masking selectively for premium reveals.

Examples:

video reveal from center
headline revealed line-by-line
project image sliding beneath a mask
section transition wipe

Do not use clipping everywhere.

2–4 strong uses across the page are enough.

---

# 26. ADD A SUBTLE SCROLL PROGRESS LANGUAGE

Consider a small persistent indicator.

Not a giant progress bar.

Something like:

03 / 06

VISION
CAPABILITIES
PROCESS
WORK

that changes as sections become active.

Could integrate into navbar or page edge.

Keep it subtle.

---

# 27. PERFORMANCE

All of these animations must remain smooth.

Do not trade performance for complexity.

GSAP animations should primarily animate:

transform
opacity
clip-path where performant

Avoid continuously animating expensive blur.

Avoid huge fixed blurred layers.

Use `gsap.context()`.

Kill ScrollTriggers during cleanup.

Refresh ScrollTrigger after media/fonts settle where necessary.

Lazy-load videos.

Only play project video when near/inside viewport.

Pause videos when leaving.

Use:

`preload="metadata"`

or appropriate preload strategy.

Do not load every project video aggressively during initial page load.

---

# 28. LENIS + GSAP INTEGRATION

If Lenis remains enabled, integrate it properly with ScrollTrigger.

Do not have competing smooth-scroll systems.

Ensure ScrollTrigger updates correctly with Lenis.

The result must feel responsive rather than delayed or floaty.

Do not over-smooth scrolling.

Users should retain control.

---

# 29. REDUCED MOTION

Provide `prefers-reduced-motion` behavior.

Pinned/horizontal sections must still remain understandable without heavy animation.

Content should never disappear if animation is disabled.

---

# 30. DO NOT JUST EDIT CSS

This request requires structural component changes.

You are allowed and expected to:

rewrite components
change section markup
create animation hooks
create reusable GSAP utilities
change project layout
change navigation architecture
change responsive behavior
remove obsolete components/styles

Do not preserve weak structure simply because it already exists.

---

# FINAL EXPERIENCE TARGET

The page should alternate between different modes:

HERO
→ controlled interactive composition

VISION
→ quiet editorial poster

CAPABILITIES
→ interactive horizontal typography

PROCESS
→ pinned scroll narrative

PROJECTS
→ horizontal cinematic portfolio

CONTACT
→ quiet typographic conclusion

That variation is essential.

The website should NOT feel like six vertically stacked Tailwind sections.

It should feel like one continuous art-directed digital experience.

---

# NON-NEGOTIABLE ACCEPTANCE CHECKLIST

Before finishing, verify all of these:

* Hero fits completely and intentionally on 1366×768 laptop screens.
* Hero does not feel cramped on short-height displays.
* Navbar is centered and floating.
* Navbar is NOT full viewport width.
* No white horizontal navbar line appears while scrolling.
* Navbar smoothly morphs on scroll.
* GSAP + ScrollTrigger are genuinely used for meaningful motion.
* Animation is not mostly fade-up/slide-up.
* At least one major section uses pinned scroll behavior.
* At least one major section responds horizontally to vertical scrolling.
* Projects no longer require four/five repetitive 85vh vertical chapters.
* Project videos are NOT cropped by forced 16:9 `object-cover`.
* Video aspect ratios are handled intelligently.
* Project media is lazy/performance aware.
* Sections have visibly different compositions.
* Typography treatment changes between sections.
* Font scale varies dramatically and intentionally.
* Background tone changes at least a few times.
* Mobile receives a deliberate fallback for complex desktop interactions.
* No excessive scroll-jacking.
* No excessive cards.
* No repetitive yellow-eyebrow + white-heading + yellow-serif formula.
* No generic AI/SaaS visual language.
* No unnecessary gradients/glows.
* No animation exists merely because animation was requested.
* Scrolling remains smooth.
* No horizontal overflow bugs.
* Reduced-motion mode remains usable.

Do not stop when the implementation is merely "clean."

Iterate until the website has clearly different spatial behaviors, typography rhythms, and motion patterns across the page.
