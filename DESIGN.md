# FOURTH PASS — UX, SCROLL CHOREOGRAPHY & COMPOSITION REBUILD

Read the CURRENT repository before modifying anything.

Do not blindly follow previous redesign prompts.

The current version has improved visual identity, but several interactions and layouts are objectively broken.

This pass is NOT about adding more decoration.

It is about fixing:

* viewport composition
* scroll choreography
* project usability
* typography wrapping
* section transitions
* hover interaction
* mobile experience
* GSAP architecture
* information hierarchy

---

# 1. HERO — FIX NAVBAR COLLISION

The floating navbar currently overlaps/cuts into the hero composition.

The navbar and hero must be designed as one viewport system.

Do NOT position hero content as though the navbar does not exist.

Create a navbar-safe hero area.

Conceptually:

viewport height
− navbar top offset
− navbar height
− intentional breathing room

= usable hero composition.

The eyebrow must never sit behind or too close to the navbar.

Test specifically at:

1366×768
1440×900
1536×864
1920×1080
390×844
430×932

At 1366×768 the complete primary hero composition must fit cleanly.

---

# 2. REMOVE HERO TELEMETRY

Remove the current bottom statistics/telemetry strip.

Remove:

50+ Problems
100% Trust
Fast Delivery
12-Hour

It makes the hero feel like another agency template and consumes valuable vertical space.

The hero needs confidence, not more information.

Use the freed space for better composition and breathing room.

---

# 3. HERO NEEDS A VISUAL COUNTERWEIGHT

The current hero is almost entirely typography on the left with empty grid space on the right.

This feels unfinished.

Use the transparent LemontaKode asset derived from `1st.png` as a compositional element.

Do NOT place it inside a card.

Do NOT just put the logo at 300px width.

Use it as graphic design.

Possible treatment:

large partially cropped brand mark on right

slow mouse-responsive movement on desktop

small GSAP entrance

parts of typography can overlap the mark

very subtle rotation/translation

brand mark can move differently from foreground typography while scrolling

The mark should visually balance the headline.

On mobile, reposition the mark behind or between typography rather than simply hiding it.

---

# 4. HERO TYPOGRAPHY

The headline is currently strong but too mechanically broken into `<br />` lines.

Do not hard-code line breaks that fail at intermediate widths.

Create controlled responsive line breaking.

Desktop composition can intentionally break:

We solve complex problems
with simple, powerful
digital tools.

But laptop/tablet/mobile may need different breaks.

Use responsive wrappers or breakpoint-specific breaks where necessary.

Avoid orphaned single words.

---

# 5. HOW WE WORK — REBUILD THE SCROLLTRIGGER

The current implementation is wrong conceptually.

It currently:

pins the whole section
for a hard-coded `+=1800`
reads ScrollTrigger progress
calculates an index
directly replaces DOM `innerText`

This creates an unnatural scroll experience.

Do NOT continue this architecture.

Build a real GSAP timeline.

---

# 6. HOW WE WORK SHOULD NEVER SCROLL DOWN THEN JUMP/PULL BACK

The section must enter naturally from the previous section.

Then it may pin.

Then the internal process animation progresses.

Then it must unpin naturally into Projects.

There must be NO:

jump backward
scroll reversal sensation
layout shift
unexpected spacer collapse
content snapping upward
visible pinning glitch

Use proper ScrollTrigger pin spacing.

Refresh ScrollTrigger after fonts/media load if necessary.

Inspect interaction with Lenis.

Do not allow Lenis and ScrollTrigger to fight each other.

---

# 7. HOW WE WORK — BETTER CONCEPT

Keep the basic idea:

01
02
03
04
05

But make it a real visual sequence.

Desktop:

LEFT

massive process number.

RIGHT

step title
short subtitle
2–3 line description

As scrolling progresses:

01 → 02 → 03 → 04 → 05

But DO NOT directly replace `innerText`.

Create all five step contents in the DOM.

Animate between them.

For example:

current title exits through a vertical mask

next title enters from the opposite direction

number rolls vertically

description crossfades through a clip mask

progress line advances

small step indicator updates

This should feel like a controlled sequence.

---

# 8. HOW WE WORK NUMBER ANIMATION

Instead of:

01 instantly becoming 02

create a rolling counter.

Example:

01
↓
02

The old number moves upward behind a mask while the new number enters from below.

Or use vertical number columns.

The animation should be tied to scroll progress.

No bouncing.

No flashy counter effect.

---

# 9. REDUCE HOW-WE-WORK SCROLL DISTANCE

`+=1800` is arbitrary.

Determine scroll duration based on:

number of steps
viewport height
desired interaction duration

Do not force users through an unnecessarily long pinned section.

Five steps should feel informative, not like a scroll obstacle.

---

# 10. MOBILE HOW WE WORK

Do NOT use the same desktop pinning.

On mobile, strongly consider a native vertical timeline.

Example:

01
Understand the problem

↓

02
Design simple interfaces

↓

03
Engineer fast code

Each stage can have a small mask reveal.

This is much easier to use on phones.

Use `gsap.matchMedia()`.

Desktop can pin.

Mobile should remain natural.

---

# 11. WHAT WE SOLVE — CURRENT INTERACTION IS TOO WEAK

Currently hover mostly creates:

left yellow border
slight background
padding change

That is not enough.

The section explicitly tells the visitor:

HOVER OR TAP ANY SERVICE TO LEARN MORE

The interaction must actually deliver something.

---

# 12. CREATE A LEFT-TO-RIGHT HOVER TRANSITION

Each service row should have a directional hover state.

Desktop behavior:

On hover, a contrasting background layer sweeps:

LEFT → RIGHT

behind the row.

Use a pseudo-element or dedicated absolute layer.

Example:

default:

dark background
white title
yellow number

hover:

warm ivory / LemontaKode yellow / carefully selected contrasting tone sweeps from left to right

Then foreground colors transition appropriately.

Example if using yellow sweep:

background → LemontaKode yellow
number → black
title → black
description → dark graphite
tech → black/70
arrow → black

Do not animate width directly if transform scaleX can be used.

Use:

transform-origin: left
scaleX(0 → 1)

with a premium easing curve.

---

# 13. SERVICE ROW TYPOGRAPHY SHOULD ALSO MOVE

When hovered:

number shifts slightly right

title shifts approximately 12–20px right

description appears/repositions

arrow travels right

technical labels transition

Do NOT simply change background color.

The row should feel responsive to the visitor.

---

# 14. SERVICE ROW SHOULD HAVE AN ARROW / DIRECTIONAL SIGNAL

Add a restrained arrow at the far right.

Default:

→

Hover:

arrow moves horizontally

possibly line extends behind it.

Do not use giant icons.

---

# 15. SERVICE ROW ACTIVE STATE

Do not keep the first capability permanently highlighted just because React state defaults to `0`.

Currently the first row appears active before the user interacts.

That weakens the interaction.

Use:

`activeIdx = null`

initially.

Nothing should look selected until:

hover
focus
tap

On mobile, tapping can expand/reveal details.

---

# 16. REMOVE FADE-UP ANIMATION FROM EVERY SERVICE

Current rows still use:

opacity 0
y 15

Stop doing this.

For the section entrance, use one coordinated animation.

For example:

horizontal rules draw across

numbers reveal

titles unmask

But do not animate six rows independently upward.

---

# 17. PROJECT SECTION — CURRENT DESIGN IS NOT USABLE

The current horizontal project layout is visually confusing.

The visitor sees:

part of one project
large gap
part of another project

instead of ONE clear active case study.

The current `78vw / 65vw` card architecture is not working.

Rebuild it.

---

# 18. PROJECT SECTION SHOULD SHOW ONE COMPLETE PROJECT AT A TIME

Desktop project viewport should behave approximately:

┌─────────────────────────────────────────────────────────┐
│ 01 / CROWDFUNDING PLATFORM                             │
│                                                         │
│ TPFAID                    [ FULL PRODUCT VIDEO ]         │
│                                                         │
│ Short description        [ FULL PRODUCT VIDEO ]         │
│                                                         │
│ ROLE                      [ FULL PRODUCT VIDEO ]         │
│ Product + Engineering                                  │
│                                                         │
│ IMPACT                                                  │
│ 72 hrs → instant                                        │
└─────────────────────────────────────────────────────────┘

Do not literally create this bordered box.

This is layout guidance.

The entire active project should fit within the usable viewport.

---

# 19. REMOVE GIANT HORIZONTAL PROJECT CARDS

The viewport itself should become the project stage.

Do not place every project inside another enormous rounded rectangle.

Avoid:

card inside section
video card inside project card
outcome card inside project card

Too many nested containers make it look like a dashboard.

Use composition rather than boxes.

---

# 20. PROJECT HORIZONTAL TRANSITION

The SECTION can remain pinned.

But instead of moving one enormous flex track continuously, consider transitioning project states.

Vertical scroll progresses:

PROJECT 01
→
PROJECT 02
→
PROJECT 03
→
PROJECT 04

Each project occupies the SAME visual stage.

Media changes horizontally.

Typography changes through masks.

Project number updates.

Accent color changes subtly.

This may be cleaner than physically dragging a giant 4-card track across the viewport.

---

# 21. ALTERNATIVE PROJECT IMPLEMENTATION

A strong architecture:

Pinned section.

LEFT:
persistent project information area.

RIGHT:
persistent media stage.

As ScrollTrigger progresses:

Project 01 video slides out left.

Project 02 video enters right.

At the same time:

01 → 02

TPFAID → TPF ADMIN

description updates via masked transition.

impact changes.

progress indicator advances.

This produces horizontal motion without exposing half-visible cards.

Use all project content in the DOM rather than directly mutating text.

---

# 22. PROJECT INFORMATION MUST BE READABLE WITHOUT SCROLLING DOWN

The current project description exists in code but appears below the visible area.

Fix this.

For every active project the user should immediately see:

PROJECT TITLE

CATEGORY

ONE-SENTENCE DESCRIPTION

ROLE

TECH

IMPACT

VIDEO

Do not show two long paragraphs labelled:

PROBLEM SOLVED
OUR SOLUTION

inside the main viewport if they create too much density.

Condense them.

Example:

TPFAID

Crowdfunding infrastructure for verified emergency campaigns, combining campaign management, donation processing and real-time tracking.

ROLE
Product Design + Full-Stack Engineering

TECH
Next.js / Node / MongoDB / AWS

IMPACT
72 hrs → 6 min

If deeper case studies exist, put detailed problem/solution there.

Portfolio overview should be scannable.

---

# 23. DO NOT USE UNVERIFIED CLAIMS

Audit project copy.

Remove statistics or claims that are not actually supported.

Do not invent:

40% globally
250% engagement
120+ countries

unless these are genuine project metrics.

Credibility is more valuable than impressive-looking numbers.

---

# 24. PROJECT VIDEO MUST REMAIN COMPLETELY VISIBLE

Do not crop product recordings.

Use the natural aspect ratio.

Use `object-fit: contain`.

The media stage can have:

subtle graphite background
very small padding
minimal browser framing

but do not crop UI just to fill space.

---

# 25. PROJECT VIDEO SHOULD NOT AUTOPLAY ALL FOUR SIMULTANEOUSLY

Currently every `<video>` uses `autoPlay`.

Change this.

Only active/nearby project video should play.

Use IntersectionObserver or active-project state.

Pause inactive videos.

Use:

muted
playsInline
loop
preload="metadata"

This improves mobile performance considerably.

---

# 26. PROJECT MOBILE EXPERIENCE

Mobile should NOT use the desktop pinned GSAP project experience.

Create a touch-native experience.

Recommended:

horizontal swipe project carousel.

Each slide approximately:

88–92vw

with enough next-slide visibility to communicate swipe.

Inside:

number/category

title

video

short description

role

impact

Use CSS scroll snap.

Do not use giant desktop card dimensions.

Do not require precise horizontal dragging.

---

# 27. FIX AWKWARD TYPOGRAPHY WRAPPING SITE-WIDE

The screenshot shows:

"We don't just build
apps."

where `apps.` becomes an awkward orphan.

Audit every major heading.

Do not rely solely on browser wrapping.

Use intentional responsive typography.

Important:

`text-wrap: balance`

can help, but it is not enough by itself.

Adjust:

max-width
font-size
line-height
letter-spacing
grid width

per breakpoint.

---

# 28. NO ORPHAN WORDS IN MAJOR HEADLINES

Avoid layouts where the final line contains only:

apps.
you.
work.
properly.
software.

unless intentionally designed as an expressive typographic device.

If a single word is isolated, it must look deliberate.

---

# 29. PHILOSOPHY SECTION

The new contrast is much better.

Keep the light-section idea.

But the headline currently occupies too much width relative to the right paragraph.

Refine the grid.

The left statement and right explanation should feel compositionally connected.

Consider aligning the right paragraph with a meaningful baseline in the headline rather than vertically centering it arbitrarily.

---

# 30. NAVBAR

The centered floating navbar is significantly better.

Keep this direction.

But refine it.

The shadow in the light section currently becomes very heavy.

Reduce the large diffuse black shadow.

The navbar should float, not cast a dramatic floating-panel shadow.

On light sections:

use controlled dark background
thin subtle border
small soft shadow

On dark sections:

border can become even subtler.

---

# 31. NAVBAR SHOULD REACT TO SECTION THEME

Because the site alternates dark/light backgrounds, allow the navbar to subtly adapt.

Do NOT completely recolor it every section.

Potential:

dark sections:
near-black surface + subtle neutral border

light sections:
slightly stronger shadow + controlled border

Keep identity stable.

---

# 32. NAVBAR ACTIVE SECTION

Use ScrollTrigger or IntersectionObserver to determine the active section.

Subtly indicate:

Vision
Services
Process
Work
Contact

Do not use a giant underline.

Possible:

text color
small dot
tiny line

This improves orientation.

---

# 33. SECTION TRANSITIONS STILL FEEL TOO ABRUPT

Currently sections visually switch:

black
→ cream
→ black
→ black
→ black
→ cream

Create better transitions.

Not every transition needs animation.

But at least some should feel connected.

Example:

Vision cream section exits while its huge serif word moves horizontally.

Capabilities dark section rises beneath it.

Or:

Capabilities final row transforms into the Process divider.

Or:

Process progress line extends and becomes the project progress indicator.

Create continuity.

---

# 34. CONNECT CAPABILITIES → PROCESS

Instead of:

last service row
then blank space
then HOW WE WORK

use a transition.

For example:

after final service hover/list:

a horizontal line expands across viewport

the line becomes the divider in Process

the `06` capability number disappears

the process `01` enters

Small continuity like this makes the site feel designed.

---

# 35. CONNECT PROCESS → PROJECTS

The process currently ends and projects simply begin.

Create a meaningful handoff.

Example:

05 / MONITOR & EXPAND

progress reaches 100%

the giant `05` shifts sideways

it becomes:

05 // REAL PROBLEMS WE SOLVED

then Featured Case Studies enters.

This could be a strong signature transition.

---

# 36. REMOVE EXCESSIVE SECTION NUMBERS IF THEY BECOME NOISE

Currently nearly everything is:

02 //
03 //
04 //
05 //
06 //

This can become predictable.

Keep numbering where it contributes to navigation/story.

Do not mechanically number every heading because it looks "editorial."

---

# 37. COPY NEEDS MORE NATURAL HUMAN LANGUAGE

Some copy still feels generated.

Example:

"We engineered a real-time verification engine..."

"Predictive manifest processing across global shipping hubs."

Use language a client immediately understands.

Prefer:

"We built a dashboard that lets the team review campaigns, verify documents and approve requests from one place."

over unnecessarily technical marketing language.

Technical depth can appear in:

architecture
tech stack
case-study details

Homepage copy should be clear.

---

# 38. CONTACT SECTION

Current light contact direction is much better than the previous white-card-on-black version.

Keep it.

But reduce visual complexity in the form.

The project-type and budget pills plus multiple fields create many competing rounded shapes.

Simplify border radii.

Reduce the "SaaS form builder" appearance.

Use typography and spacing more heavily.

---

# 39. FORM BUDGET VALUES

Do not hard-code arbitrary USD budget tiers unless LemontaKode actually wants to publicly qualify clients using those numbers.

If pricing strategy is not finalized, use:

Small project
Growth project
Large / custom

or remove budget from the homepage form.

Only keep currency values if they reflect the actual business.

---

# 40. ADD REAL MICROINTERACTION TO BUTTONS

Current white pill buttons are clean but still generic.

Introduce restrained interaction.

For primary buttons:

background layer sweeps horizontally

arrow moves

text shifts slightly

No scale(1.05).

No bouncing.

Use the same directional interaction language as service rows.

---

# 41. CREATE ONE CONSISTENT DIRECTIONAL MOTION LANGUAGE

The website should have a recognizable motion system.

Use:

LEFT → RIGHT

for:

service hover
project progression
button hover
selected navigation movement

Use:

VERTICAL MASKING

for:

section titles
process stages
major copy reveals

Use:

SUBTLE PARALLAX

for:

brand/logo imagery

This creates consistency without making every animation identical.

---

# 42. PERFORMANCE AUDIT

There are currently multiple animation systems:

Framer Motion
GSAP
ScrollTrigger
Lenis / smooth scrolling

Make sure they are not fighting.

Framer Motion:
microinteractions / component state

GSAP:
scroll choreography

Lenis:
scroll smoothing

Do not use all three to control the same property.

---

# 43. USE `gsap.matchMedia()`

Stop checking only:

`window.innerWidth >= 1024`

inside an effect.

Use `gsap.matchMedia()` for responsive animation architecture.

Create:

desktop animation
tablet behavior
mobile behavior
reduced-motion behavior

This also handles viewport changes more cleanly.

---

# 44. SCROLLTRIGGER CLEANUP

Every ScrollTrigger must:

live inside `gsap.context()`

clean up properly

recalculate when necessary

avoid duplicate triggers in development

handle React Strict Mode correctly

No lingering pin spacers.

No duplicated ScrollTriggers.

No page jumping after route/hot reload.

---

# 45. DO A REAL VISUAL QA PASS

After implementing, DO NOT stop because `npm run build` succeeds.

Actually inspect:

1366×768
1440×900
1920×1080
1024×768
768×1024
430×932
390×844

At every size inspect:

navbar collision
hero fit
headline wrapping
section height
pin entry
pin exit
project visibility
video visibility
contact layout
horizontal overflow

---

# 46. SPECIFIC BUG TEST — PROCESS

Slowly scroll:

Capabilities
→ Process
→ Projects

Then reverse direction:

Projects
→ Process
→ Capabilities

There must be ZERO jumping.

Test:

mouse wheel
trackpad
scrollbar dragging

Pinned animation must behave correctly in both directions.

---

# 47. SPECIFIC BUG TEST — PROJECTS

At the start of Projects:

Project 01 must be completely understandable.

At approximately 33% progress:

the active project must still be understandable.

At approximately 66%:

the active project must still be understandable.

At the end:

the final project must be fully visible before unpinning.

Never leave the user looking at two half-projects.

---

# 48. SPECIFIC BUG TEST — MOBILE

On a real 390px layout:

Hero must fit cleanly.

No navbar collision.

No orphan headline words.

Services must be tappable.

Process must not trap scrolling.

Videos must fit.

Projects must be understandable.

Contact form must fit.

No accidental horizontal scrollbar.

No tiny unreadable metadata.

---

# FINAL DESIGN GOAL

The site has reached the point where ADDING MORE is no longer the solution.

Now improve:

composition
interaction logic
motion choreography
responsive behavior
typographic control
clarity

The next version should feel simpler but substantially more sophisticated.

A visitor should never wonder:

"Why did the page move backwards?"

"Which project am I looking at?"

"Where is the project description?"

"Why is half of this project off-screen?"

"Why did this word wrap by itself?"

"Was that supposed to animate?"

Every interaction must communicate something.

Every section must have a reason for its layout.

Fix these fundamentals before introducing any additional visual effects.
