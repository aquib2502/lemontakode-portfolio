# THIRD DESIGN PASS — FIX VISUAL, RESPONSIVE AND UX FAILURES

Read the CURRENT repository again before changing anything.

Also inspect the latest implementation visually at real viewport sizes.

The structural redesign introduced some of the requested ideas, but several sections are now visually broken or poorly composed.

Do NOT start another redesign from scratch.

Keep the strongest ideas, but fix the execution problems described below.

This pass should focus on:

1. readability
2. project presentation
3. responsive composition
4. mobile-first quality
5. hero visual logic
6. contact section art direction
7. brand/logo integration
8. animation refinement
9. viewport fitting
10. visual consistency

---

# CRITICAL: MOBILE-FIRST FROM THIS POINT FORWARD

The majority of visitors may view this portfolio on a phone.

Do NOT treat mobile as a simplified afterthought.

The website must be equally impressive on:

390×844 mobile

430×932 mobile

768×1024 tablet

1366×768 laptop

1440×900 laptop

1920×1080 desktop

Every major section must be intentionally designed for BOTH:

desktop
and
mobile.

Do not create an amazing desktop interaction and then simply stack everything vertically on mobile.

Mobile needs its own composition and motion decisions.

---

# 1. FIX THE PHILOSOPHY SECTION CONTRAST IMMEDIATELY

The current section containing:

"Technology should
feel less like
technology."

has a serious contrast problem.

The first two lines are nearly invisible against the dark background.

The supporting paragraph below is also barely readable.

This is NOT subtle design.

It is inaccessible design.

Subtlety does not mean low contrast.

The hierarchy should be obvious immediately.

For example:

Primary statement:
warm off-white / light neutral

Secondary or background typography:
can use reduced opacity

Accent:
LemontaKode yellow

Body:
clearly readable muted neutral

Do NOT use text that is only 3–8% brighter than its background for actual content.

Decorative typography may have extremely low contrast.

Readable content may NOT.

---

# 2. PHILOSOPHY SECTION NEEDS BETTER ART DIRECTION

Keep the editorial idea, but make the composition much stronger.

Instead of:

everything centered
everything same width
everything sitting in the middle

create more deliberate typography.

Possible desktop composition:

small technical label near upper-left

large statement positioned slightly asymmetrically

Technology should
feel less like

*technology.*

The serif italic word can break alignment slightly.

Supporting copy should NOT sit as another centered grey paragraph directly underneath.

Place it as a smaller editorial annotation.

For example, offset toward the right or aligned against a grid column.

Introduce visual tension.

---

# 3. MOBILE PHILOSOPHY SECTION

On mobile:

Do NOT shrink the desktop composition until it fits.

Recompose it.

For example:

TECHNOLOGY
SHOULD FEEL
LESS LIKE

*technology.*

Allow the serif word to become the expressive focal point.

Use approximately 70–80% of the viewport width.

Supporting text should remain clearly readable.

Avoid excessive empty vertical space.

The section should feel like an editorial poster on a phone.

---

# 4. PROJECT SECTION CURRENTLY FAILS AS A PORTFOLIO

The horizontal concept is useful.

The current execution is not.

Right now the visitor sees large fragments of project cards.

The project frame extends beyond the useful viewport area.

The video dominates without giving enough context.

Descriptions and outcomes are not clearly visible.

The visitor cannot immediately understand:

What is this?

What did LemontaKode do?

Why is this project impressive?

What technologies were involved?

What was the outcome?

That information needs to exist WITHOUT turning the project into a text-heavy card.

---

# 5. EACH PROJECT MUST FIT AS A COMPLETE COMPOSITION

On desktop, when a project becomes the active project, the important composition should fit inside the available viewport.

The user should see:

PROJECT NUMBER

PROJECT NAME

CATEGORY

VIDEO / PRODUCT MEDIA

SHORT DESCRIPTION

ROLE

TECH

ONE OUTCOME / IMPACT

without needing to vertically scroll inside the pinned project section.

Do NOT create enormous cards wider than the meaningful viewport.

The active project should feel intentionally framed.

---

# 6. REDESIGN THE PROJECT VIEWPORT

Instead of gigantic cards partially entering/exiting the screen, consider a composition like:

---

01 / CROWDFUNDING PLATFORM

TPFAID

Short one-line project explanation.

```
    [ PRODUCT VIDEO ]
```

ROLE                     IMPACT
Design + Engineering     40% less friction

TECH
Next.js / Node / AWS

---

But do NOT literally turn this into a bordered card.

Use layout, spacing and typography.

The viewport itself should become the project canvas.

---

# 7. HORIZONTAL MOVEMENT SHOULD MOVE BETWEEN COMPLETE PROJECTS

The horizontal ScrollTrigger should behave conceptually like:

[ PROJECT 01 ] → [ PROJECT 02 ] → [ PROJECT 03 ]

NOT:

[ half of project 01 ][ half of project 02 ]

The active project needs a clear visual state.

Consider snapping or soft snapping between project positions.

Do not make snapping aggressive.

Track positions based on actual viewport dimensions.

Account for:

viewport width
container padding
navbar
project width

Avoid hard-coded translations that only look correct on one monitor.

---

# 8. PROJECT DESCRIPTION IS REQUIRED

Every project needs a concise human explanation.

Example structure:

TPFAID

A crowdfunding platform built to connect donors with verified emergency campaigns and simplify donation processing.

ROLE
Product Design / Full-Stack Engineering

TECH
Next.js / Node / MongoDB / AWS

IMPACT
40% lower processing friction

Keep it short.

Do not use exaggerated AI copy.

Do not use fake marketing language.

The project should explain actual work.

---

# 9. PROJECT VIDEO MUST SHOW THE COMPLETE PRODUCT

This remains critical.

Do NOT use `object-cover` if it crops the application recording.

Inspect each video's actual aspect ratio.

Use:

`object-fit: contain`

where necessary.

Build the surrounding stage around the video's natural dimensions.

For example:

video inside dark graphite stage
with controlled padding
and perhaps extremely subtle browser chrome

The user must see the actual UI.

Do NOT cut:

navigation
dashboard edges
footer
sidebars
important interface content

just to fill a decorative rectangle.

---

# 10. PROJECT VIDEO SIZE

The current video/project area is too visually oversized.

Reduce it enough that project information can coexist inside the viewport.

A good desktop target may be roughly:

55–65% media

35–45% information / whitespace

depending on the project.

Do not blindly implement those percentages.

Use the actual content.

The project should feel cinematic WITHOUT hiding its context.

---

# 11. PROJECT DESKTOP COMPOSITION

Try asymmetric composition.

For example:

LEFT 65%

large product video

RIGHT 35%

01

TPFAID

Crowdfunding Platform

description

ROLE
Product Design + Engineering

IMPACT
40%
less processing friction

This is significantly easier to understand than one enormous project window.

For the next project, you can reverse or alter the composition slightly.

---

# 12. PROJECT MOBILE EXPERIENCE MUST BE DIFFERENT

DO NOT use desktop GSAP pinned horizontal scrolling on small mobile screens unless it genuinely feels excellent.

Prefer a mobile-native project interaction.

Strong option:

horizontal swipe carousel using CSS scroll snap.

One project per swipe.

Each project:

project number
title
category
video
description
impact

The user can swipe naturally.

Use:

`scroll-snap-type: x mandatory`

with careful sizing.

Show a small portion of the next project if useful to communicate swipeability.

But do NOT crop the active project's important information.

Another valid option is a compact vertical project sequence.

Choose whichever performs and feels better.

---

# 13. MOBILE PROJECT VIDEO

Video should fit naturally.

Use the video's native aspect ratio.

Do not create giant fixed-height media.

The project title and context should remain visible without requiring excessive scrolling.

Videos should:

muted
playsInline
loop where appropriate
pause when outside viewport
preload metadata

Do not preload every project video immediately.

---

# 14. CONTACT CTA TEXT IS ALMOST INVISIBLE

The current left-side text:

"Have something
ambitious
in mind?"

is far too dark.

The supporting paragraph is also almost invisible.

Fix the contrast.

Primary CTA statement should have strong visual presence.

For example:

Have something
ambitious
in mind?

could use warm white.

Then:

*Let's build it properly.*

can remain LemontaKode yellow serif.

Do not make the main message look disabled.

---

# 15. CONTACT SECTION SHOULD FEEL LIKE A FINALE

Right now the contact section feels like:

dark left panel

* generic white form

The form looks imported from another website.

Redesign the section as one cohesive composition.

The contact section should feel like the final chapter of the portfolio.

---

# 16. REMOVE THE PURE WHITE FORM CARD

Do NOT use a bright white form container on the dark website.

It creates too much visual separation and looks generic.

Integrate the form into the LemontaKode visual system.

Potential direction:

dark graphite / warm charcoal form surface

subtle 1px neutral border

warm off-white labels

dark input surfaces

LemontaKode yellow focus state

minimal rounded corners

excellent spacing

No giant white rectangle.

Alternatively, if using a light contact section, transition the ENTIRE section into a warm ivory background so the form belongs to that environment.

Do not mix a near-black section with an isolated pure-white SaaS form.

---

# 17. FORM DESIGN

Make the form feel custom.

Avoid default:

label

large rounded input

label

large rounded input

label

select

Use a cleaner editorial form.

Possible style:

FULL NAME

---

EMAIL

---

PROJECT TYPE

---

MESSAGE

---

with understated fields and excellent focus interaction.

Or use extremely subtle filled fields.

The design should feel premium but remain highly usable.

---

# 18. MOBILE CONTACT SECTION

On mobile:

CTA statement first.

Then form.

Do NOT create two cramped columns.

Use comfortable input heights.

Ensure keyboard interaction works.

Use correct HTML input types.

No horizontal overflow.

No tiny labels.

Submit button should be easy to tap.

The section should look intentionally designed at 390px wide.

---

# 19. HERO RIGHT SIDE CURRENTLY FEELS ILLOGICAL

Revisit the hero.

The right side currently feels like visual filler rather than part of the story.

Do NOT fill the right side simply because the hero uses a two-column grid.

If the content does not deserve a right column, change the layout.

The hero should have one clear visual concept.

---

# 20. REMOVE GENERIC HERO TELEMETRY / RANDOM INFORMATION

Do not use generic studio statistics or telemetry simply to occupy space.

Avoid things like:

PROJECTS SHIPPED

RETENTION

GLOBAL REACH

unless they materially support the hero.

The hero should introduce LemontaKode, not behave like an analytics dashboard.

---

# 21. USE THE ACTUAL LEMONTAKODE BRAND ASSET

Important:

The repository contains the logo asset:

`1st.png`

This is the logo/brand asset I want used throughout the website outside the navbar where appropriate.

Inspect `1st.png`.

Remove its existing background and create/use a transparent-background version.

Preserve the logo itself accurately.

Do NOT redraw the logo.

Do NOT alter its proportions.

Do NOT invent another lemon icon.

Do NOT replace it with a Lucide icon.

Do NOT recreate it with CSS.

Create a transparent version from the actual `1st.png` asset and use that.

The transparent logo can become an important visual element in:

hero
section transitions
brand moments
contact
footer

But use it with restraint.

Do NOT paste the logo everywhere.

---

# 22. HERO RIGHT SIDE — USE THE BRAND ASSET MEANINGFULLY

The right side of the hero is a good place to explore the transparent `1st.png` brand asset.

But do NOT simply display a static logo.

Create an art-directed interaction around it.

Possible direction:

large transparent logo mark

subtle GSAP entrance

small controlled rotation/parallax responding to cursor

masked reveal

pieces of typography passing behind/in front

very subtle depth

scroll transformation into the next section

The logo could begin as the hero's visual anchor and transform as the user begins scrolling.

Keep it sophisticated.

No bouncing.

No constant spinning.

No glowing neon logo.

No cheesy 3D effect.

---

# 23. HERO COMPOSITION EXAMPLE

Possible desktop direction:

LEFT

small:
LEMONTAKODE / DIGITAL PRODUCT STUDIO

huge:
We build digital
products that

*feel considered.*

short supporting copy

[ View work → ]

RIGHT

large transparent LemontaKode brand mark

small annotations around it

PRODUCT
DESIGN
ENGINEERING

subtle cursor response

This is only a directional example.

Do not copy it blindly.

The goal is to make the right side visually meaningful.

---

# 24. MOBILE HERO

This is extremely important.

The hero must look excellent at 390px.

Do not hide every visual element and leave only text.

Recompose it.

Possible mobile structure:

small brand label

large headline

logo mark integrated behind/between typography

short description

primary CTA

small scroll cue

The transparent LemontaKode mark can become a background compositional element.

Make sure it does not destroy readability.

The hero should fit approximately within the initial mobile viewport where practical.

Account for browser UI using `svh`.

---

# 25. DO NOT USE THE SAME SECTION TEMPLATE

The screenshots reveal another problem:

different sections are still using almost identical:

dark background
tiny mono heading
huge heading
yellow serif
grey paragraph

Stop repeating this exact formula.

Keep the overall brand system.

Change the composition.

---

# 26. DIFFERENT TYPOGRAPHIC PERSONALITY PER SECTION

Use the same font system but change dominance.

HERO

large grotesk
small mono details
limited serif accent

VISION

serif becomes dominant

CAPABILITIES

large sans / condensed typography

PROCESS

huge numbers + technical mono

PROJECTS

project-specific display titles + tiny metadata

CONTACT

large expressive serif/sans conclusion

FOOTER

minimal mono/sans

This creates variety without losing consistency.

---

# 27. READABILITY RULE

Create an explicit text contrast hierarchy.

On dark backgrounds:

Primary:
high-contrast warm white

Secondary:
approximately 65–80% visual strength

Tertiary metadata:
approximately 45–60%

Decorative background typography:
may go significantly lower

But NEVER use decorative-level contrast for meaningful body text.

On light backgrounds:

Primary:
near-black

Secondary:
dark graphite

Metadata:
medium graphite

Accent:
brand yellow only where contrast remains sufficient

Check actual WCAG contrast.

---

# 28. MOBILE TYPOGRAPHY

Do not merely use:

desktop font-size / 2.

Use fluid responsive sizing.

For example:

`clamp()`

Headlines need deliberate line breaks on mobile.

Use `text-wrap: balance` where useful.

Prevent orphaned words.

Keep body copy around readable line lengths.

Do not use 10px text for meaningful mobile content.

Tiny technical metadata can be smaller, but important information cannot.

---

# 29. MOBILE SPACING

Desktop spacing cannot simply become:

`py-28 → py-20`

Design mobile spacing intentionally.

Some sections should be compact.

Some can have dramatic whitespace.

But avoid making every section 100vh+.

Mobile users should not need 20 swipes to reach the project section.

Keep the total page journey reasonable.

---

# 30. MOBILE GSAP

GSAP interactions need responsive behavior.

Use:

`gsap.matchMedia()`

Create separate animation logic where necessary.

Desktop may use:

pinning
horizontal translation
cursor interaction
parallax

Mobile may use:

native horizontal swipe
simpler clip reveals
lighter parallax
no cursor logic
less pinning

Do not execute expensive desktop ScrollTriggers on mobile when they provide no value.

---

# 31. TABLET IS NOT DESKTOP

Explicitly test tablet widths.

At approximately 768–1024px:

Do not force desktop two-column compositions when they become cramped.

Do not immediately switch to tiny mobile layouts either.

Create intermediate layouts.

---

# 32. TOUCH DEVICES

Everything must work without hover.

Capabilities cannot depend entirely on hover.

Project interactions cannot depend on cursor.

Buttons need proper touch targets.

Any information revealed on hover must have a touch equivalent.

---

# 33. RESPONSIVE NAVBAR

Desktop:

centered floating navbar.

Tablet:

compact centered navbar.

Mobile:

small floating brand/navigation control.

Do not allow it to consume a huge portion of the mobile viewport.

Menu opening/closing should animate smoothly.

Mobile menu should itself look art-directed.

Do not use a generic full-screen black drawer unless it is beautifully composed.

---

# 34. USE THE LOGO CONSISTENTLY

Navbar may retain the navbar-specific logo treatment if appropriate.

For other major visual branding moments, use the transparent version derived from:

`1st.png`

Do not accidentally use different unrelated logo variants across sections.

Establish:

navbar logo
primary brand mark
favicon

as deliberate assets.

---

# 35. SECTION COLOR VARIATION

Continue introducing tonal variation.

The site currently risks becoming endless black.

Consider:

Hero:
near-black

Vision:
warm ivory OR clearly differentiated charcoal

Capabilities:
neutral dark

Process:
slightly lighter graphite

Projects:
deep black

Contact:
possibly warm ivory / brand-tinted neutral

Do not force every section to be dark.

If the contact section becomes light, the form can naturally use light styling without looking like an unrelated white box.

---

# 36. CONTACT ALTERNATIVE — STRONGLY CONSIDER THIS

A strong option:

transition the entire Contact section to warm ivory.

Then:

left:
near-black typography

yellow accent

right:
form using transparent/light-neutral fields

This would create a powerful visual break after the dark project showcase.

It would also solve the isolated white-form problem.

If this direction looks better, use it.

---

# 37. PROJECT COLOR IDENTITY

Each project may borrow a very subtle color from the actual product.

For example:

TPFAID:
subtle green influence

TPF Admin:
appropriate interface accent

Trace Express:
brand-specific accent

Flow India:
brand-specific accent

Do NOT recolor the whole page for every project.

Use project colors subtly in:

number
progress indicator
small accent
media stage

This helps distinguish projects.

---

# 38. PROJECT PROGRESS

Make horizontal projects understandable.

Show something like:

01 ━━━━━━━ 02 ━━━━━━━ 03 ━━━━━━━ 04

or:

01 / 04

with a progress line.

The user should understand:

where they are
how many projects exist
that scrolling is progressing horizontally

Keep it subtle.

---

# 39. PROJECT TRANSITION

When moving from one project to another:

media can shift

title can mask out/in

metadata can update

background accent can subtly transition

Do NOT simply slide one enormous rectangle sideways.

The transition should communicate a change of case study.

---

# 40. FIX ALL OVERFLOW

Audit:

`100vw`

large fixed widths

horizontal tracks

absolute positioning

transforms

video containers

oversized typography

At:

390px
430px
768px
1024px
1366px
1440px
1920px

There should be no accidental horizontal scrollbar.

Horizontal project behavior must exist only inside the intended project interaction.

---

# 41. VERIFY REAL CONTENT BEFORE FINALIZING

Do not invent project statistics.

Do not invent technologies.

Do not invent offices.

Do not invent project outcomes.

Use information already supported by the repository/content.

If something is uncertain, use descriptive language instead of fake numbers.

---

# 42. VISUAL QA — ACTUALLY CHECK THE RESULT

Do not finish after the code compiles.

Open the website at multiple viewport sizes.

Inspect every section visually.

Specifically check:

text contrast

hero fit

navbar overlap

project video cropping

project descriptions

project horizontal positioning

form appearance

mobile overflow

tablet composition

font loading

section spacing

animation smoothness

video loading

Then fix what looks wrong.

---

# 43. SCREENSHOT TEST

Every major section should pass this test:

"If I take a screenshot of this section with all animation frozen, does it still look professionally designed?"

If no, animation is hiding weak composition.

Fix the static design.

---

# 44. MOBILE SCREENSHOT TEST

Also ask:

"If someone sees only a screenshot from the 390px mobile version, would they believe this is the same premium portfolio as the desktop site?"

If no, redesign mobile.

Mobile should NOT look like a stripped-down fallback.

---

# 45. FINAL ACCEPTANCE CRITERIA

Do not consider this pass complete until:

✓ Philosophy text is clearly readable.

✓ Philosophy body copy is clearly readable.

✓ Contact heading is clearly readable.

✓ Contact supporting copy is clearly readable.

✓ Pure white disconnected form card is removed/redesigned.

✓ Contact section feels like part of the same design system.

✓ Hero right side has a meaningful visual purpose.

✓ Generic hero telemetry/filler is removed.

✓ `1st.png` is processed into a transparent-background asset.

✓ The actual logo is preserved accurately.

✓ Transparent logo is incorporated tastefully into the visual system.

✓ Projects contain descriptions.

✓ Projects clearly explain LemontaKode's role.

✓ Project videos show the complete UI without destructive cropping.

✓ Active desktop project fits meaningfully within the viewport.

✓ Horizontal project movement shows complete compositions, not random halves.

✓ Project section does not feel excessively long.

✓ Mobile project experience is intentionally designed.

✓ Desktop project interaction remains smooth.

✓ Mobile does not depend on desktop pinning.

✓ Every meaningful text element has sufficient contrast.

✓ Every section has responsive typography.

✓ Every section has deliberate mobile composition.

✓ Every section looks excellent around 390px width.

✓ Tablet layout is intentionally handled.

✓ No horizontal overflow exists.

✓ Navigation works well on mobile.

✓ Touch interactions do not depend on hover.

✓ GSAP uses responsive matchMedia logic where appropriate.

✓ Heavy desktop animation is reduced on mobile.

✓ Project videos are performance-aware.

✓ Site remains smooth on realistic mobile hardware.

✓ Sections no longer repeat exactly the same typography formula.

✓ The website still feels like one coherent LemontaKode identity.

---

# MOST IMPORTANT PRINCIPLE

Do not optimize the website around a 1920×1080 designer monitor.

Design from:

**390px mobile → 1366×768 laptop → large desktop**

in that priority order.

A premium portfolio that only works on a large desktop is not a premium portfolio.

The mobile experience must have the same:

art direction
personality
clarity
craftsmanship
brand identity

as desktop, even if the layouts and animations are different.

Fix the current implementation rather than layering more effects on top of the problems.
