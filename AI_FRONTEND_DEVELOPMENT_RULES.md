# AI Frontend Development Rules

## Purpose

This document defines the permanent rules for any AI coding agent working on this frontend.

The objective is to make the product feel like it was built by a **senior/staff-level frontend engineering and product design team** while preserving the website's existing **AI/product identity, personality, and visual character**.

These rules apply to every UI change, refactor, new feature, bug fix, and redesign.

---

# 1. Core Principle

## Preserve the AI Feel

**NEVER remove the existing AI/product feel just to make the interface cleaner or simpler.**

The website should feel:

- Intelligent
- Modern
- Technical
- Premium
- Product-focused
- Trustworthy
- Sophisticated
- Clearly AI-powered

Do not turn the product into a generic:

- SaaS template
- Corporate website
- Bootstrap-style dashboard
- Basic CRUD interface
- Generic landing page
- Flat/minimal website with no personality

The goal is:

> **Existing identity + better design + better UX + better engineering**

Not:

> **Existing identity → completely different design**

The final result should feel like the **same product evolved by a world-class frontend team**.

---

# 2. Design Philosophy

Every UI decision should have a reason.

Prioritize:

1. Product identity
2. Usability
3. Visual hierarchy
4. Consistency
5. Accessibility
6. Performance
7. Responsiveness
8. Maintainability

Do not introduce visual elements merely because they look trendy.

Avoid design decisions that make the product feel:

- Cheap
- Overdesigned
- Template-generated
- Artificially futuristic
- Visually noisy
- Inconsistent

---

# 3. AI Product Aesthetic

The AI aesthetic should be intentional and restrained.

Appropriate visual language may include:

- Subtle gradients
- Ambient lighting
- Carefully controlled glow
- Layered surfaces
- Technical visual details
- Dynamic states
- Intelligent feedback
- Data-driven visuals
- Smooth transitions
- Contextual interactions
- Subtle motion
- Sophisticated dark/light surfaces when consistent with the existing design

Do NOT automatically add:

- Neon everywhere
- Excessive glow
- Excessive glassmorphism
- Random animated particles
- Excessive gradients
- Constant movement
- Unnecessary futuristic illustrations
- Decorative AI icons everywhere

The interface should communicate:

**Intelligence + Precision + Technology + Trust + Premium Quality**

---

# 4. Do Not Destroy Existing Design Language

Before modifying a component, inspect the existing implementation.

Understand:

- Colors
- Typography
- Spacing
- Border radius
- Shadows
- Gradients
- Component patterns
- Layout system
- Animation system
- Interaction patterns
- Responsive behavior
- Existing design tokens

If an existing pattern is good, reuse it.

Do not create a new visual pattern when an existing reusable pattern already exists.

Consistency is more important than novelty.

---

# 5. Senior Frontend Engineering Standard

Always think like a **Senior/Staff Frontend Engineer**.

Write code that is:

- Maintainable
- Scalable
- Type-safe
- Reusable
- Performant
- Accessible
- Testable
- Easy for another engineer to understand

Prefer:

- Reusable components
- Clear component boundaries
- Composition
- Strong TypeScript types
- Design tokens
- Shared UI primitives
- Small focused components
- Predictable state management
- Semantic HTML

Avoid:

- Giant components
- Duplicated UI logic
- Repeated styles
- Arbitrary magic numbers
- Excessive prop drilling
- Unnecessary dependencies
- Unnecessary abstraction
- Hacky CSS
- Excessive absolute positioning
- Temporary fixes that become permanent architecture

---

# 6. Existing Code First

Before writing new code:

1. Inspect the existing component.
2. Understand how it works.
3. Find reusable components.
4. Check existing utilities/hooks.
5. Check existing styling patterns.
6. Check existing API/data patterns.
7. Determine whether the problem can be solved by improving existing code.

Do not rewrite an entire component if a targeted improvement is sufficient.

Do not introduce a new library without a strong technical reason.

---

# 7. Component Architecture

Build UI using reusable, composable components.

Good examples:

```text
components/
  ui/
  layout/
  navigation/
  forms/
  cards/
  sections/
  feedback/
```

Use shared components for repeated patterns.

For example:

- Button
- Input
- Modal
- Dialog
- Dropdown
- Tooltip
- Card
- Badge
- Tabs
- Table
- EmptyState
- LoadingState
- ErrorState

Do not create five slightly different versions of the same component.

If variations are required, use controlled variants.

---

# 8. Visual Hierarchy

Every page should have a clear hierarchy.

Users should immediately understand:

1. Where they are
2. What the page is about
3. What action matters most
4. What information is important
5. What they should do next

Use hierarchy through:

- Typography
- Size
- Weight
- Contrast
- Spacing
- Position
- Surface treatment
- Motion

Do not rely on decoration to create hierarchy.

---

# 9. Typography

Typography must feel deliberate.

Maintain a consistent type scale.

Avoid:

- Random font sizes
- Excessive font weights
- Long blocks of tiny text
- Huge headings without purpose
- Poor line heights
- Inconsistent letter spacing

Headings should communicate hierarchy.

Body text should prioritize readability.

Labels and metadata should remain visually subordinate.

---

# 10. Spacing

Use a consistent spacing system.

Do not randomly use values everywhere.

Prefer existing project spacing tokens.

When a spacing value appears repeatedly, consider turning it into a reusable design token.

Maintain:

- Consistent section spacing
- Consistent card padding
- Consistent gaps
- Consistent alignment
- Consistent vertical rhythm

---

# 11. Color System

Use the existing brand palette as the foundation.

Do not randomly introduce colors.

Maintain semantic colors for:

- Primary
- Secondary
- Background
- Surface
- Border
- Text
- Muted text
- Success
- Warning
- Error
- Info

Colors should have consistent semantic meaning throughout the application.

---

# 12. Cards and Surfaces

Cards should have a purpose.

Do not put every piece of content inside a card.

Avoid excessive:

- Rounded rectangles
- Borders
- Shadows
- Glass effects
- Floating containers

Use surfaces to establish meaningful grouping and hierarchy.

A premium interface often looks better when some sections are allowed to breathe without containers.

---

# 13. Animations and Motion

Motion should communicate state or improve understanding.

Use animation for:

- Page transitions
- Component entrance
- Hover states
- Loading states
- Feedback
- Expand/collapse
- Success/error states
- Contextual interaction

Prefer:

- Transform
- Opacity
- CSS transitions
- GPU-friendly animation

Avoid:

- Excessive bouncing
- Constant animation
- Distracting movement
- Slow transitions
- Animation that blocks interaction

Motion should feel:

**Smooth + Fast + Intentional + Premium**

---

# 14. Micro-Interactions

Every interactive element should provide clear feedback.

Examples:

- Button hover
- Button active state
- Focus state
- Loading state
- Success state
- Error state
- Disabled state
- Selected state
- Navigation state

Do not leave users wondering whether an action happened.

---

# 15. Responsive Design

Responsive design is mandatory.

Every feature must work properly on:

- Small mobile
- Large mobile
- Tablet
- Laptop
- Desktop
- Large desktop

Do not simply shrink desktop layouts.

Adapt:

- Layout
- Typography
- Navigation
- Spacing
- Grid columns
- Component density
- Interaction patterns

Mobile must feel intentionally designed.

---

# 16. Accessibility

Accessibility is part of the implementation, not an optional enhancement.

Use:

- Semantic HTML
- Proper labels
- Keyboard navigation
- Visible focus states
- Appropriate ARIA where necessary
- Sufficient color contrast
- Accessible buttons
- Accessible forms
- Meaningful alt text
- Reduced-motion considerations

Do not use ARIA when normal semantic HTML solves the problem.

---

# 17. Performance

Performance matters.

Always consider:

- Bundle size
- Rendering cost
- Unnecessary re-renders
- Image optimization
- Lazy loading
- Code splitting
- Server/client boundaries
- Data fetching
- Caching
- Animation performance

Do not add heavy dependencies for trivial functionality.

Avoid unnecessary client-side JavaScript.

If using Next.js, use Server Components where appropriate and keep Client Components focused.

---

# 18. Loading, Empty, and Error States

Every data-driven feature should consider:

### Loading

The user should understand that something is happening.

### Empty

The user should understand:

- What is empty
- Why it is empty
- What they can do next

### Error

The user should understand:

- Something failed
- What happened when possible
- What action they can take

### Success

Important actions should provide clear confirmation.

Never design only the "happy path."

---

# 19. Forms

Forms should be highly usable.

Use:

- Clear labels
- Helpful placeholders only when appropriate
- Inline validation
- Clear error messages
- Loading states
- Disabled states
- Success feedback
- Correct input types
- Keyboard-friendly navigation

Do not make users guess what went wrong.

---

# 20. Tables and Data-Heavy UI

For data-heavy screens:

Prioritize:

- Scannability
- Alignment
- Density
- Sorting
- Filtering
- Pagination
- Search
- Empty states
- Loading states

Avoid visually heavy tables.

Use typography and spacing to establish hierarchy.

---

# 21. AI-Specific UX

When implementing AI features, think beyond a simple:

```text
Input → Loading → Output
```

Consider:

- Streaming responses
- Processing states
- AI reasoning/status indicators where appropriate
- Suggestions
- Contextual actions
- Regeneration
- Copy actions
- Feedback
- Conversation history
- Error recovery
- Partial results
- Confidence/context indicators when relevant

AI interactions should feel responsive and intelligent.

Do not fake AI behavior with meaningless animations.

---

# 22. UX Writing

UI text should be:

- Clear
- Concise
- Human
- Action-oriented
- Contextual

Avoid unnecessary technical jargon in user-facing UI unless the product is specifically technical.

Avoid generic text such as:

- "Something went wrong" when a useful explanation is available
- "Click here"
- "Submit" when a more meaningful action label exists

Prefer action-specific language.

---

# 23. Don't Over-Design

Senior-level design does NOT mean adding more things.

A sophisticated interface often comes from:

- Better spacing
- Better typography
- Better hierarchy
- Better interactions
- Better component consistency
- Better motion
- Better responsiveness

Not from adding more decoration.

---

# 24. Don't Make It Look AI-Generated

The website should not look like an AI-generated template.

Avoid obvious patterns such as:

- Every section being a rounded card
- Excessive purple/blue gradients
- Random glowing blobs
- Generic AI illustrations
- Excessive glassmorphism
- Huge hero headings everywhere
- Repetitive 3-column cards
- Unnecessary badges
- Generic "AI-powered" labels everywhere

The product should feel **designed**, not generated.

---

# 25. Preserve Product Personality

If the existing website has a unique visual element, interaction, layout, or brand behavior that works well:

**KEEP IT.**

Do not remove personality simply because a conventional SaaS design would be easier to implement.

The design should evolve, not lose its identity.

---

# 26. Before Making Changes

For every meaningful task, follow this process:

### Step 1 — Inspect

Understand the current implementation.

### Step 2 — Analyze

Identify:

- Existing strengths
- Existing weaknesses
- Reusable components
- Design inconsistencies
- UX problems
- Performance issues

### Step 3 — Plan

Decide:

- What stays
- What changes
- What is added
- What is removed
- What is refactored

### Step 4 — Implement

Make the smallest set of changes required to achieve a significant improvement.

### Step 5 — Review

Check:

- Desktop
- Mobile
- Accessibility
- Performance
- Visual consistency
- Component reuse
- Edge cases

### Step 6 — Polish

Fix:

- Alignment
- Spacing
- Typography
- Transitions
- Hover states
- Focus states
- Loading states
- Error states
- Responsive issues

---

# 27. Never Do This Without Reason

Do not:

- Completely redesign the website
- Replace the existing design system unnecessarily
- Change the brand colors arbitrarily
- Remove AI visual identity
- Replace working components just for style
- Add dependencies without justification
- Add excessive animations
- Make every element a card
- Overuse gradients
- Overuse glassmorphism
- Ignore mobile
- Ignore accessibility
- Ignore loading/error/empty states
- Create duplicated components
- Use hacks instead of fixing the underlying issue

---

# 28. Definition of Done

A frontend task is not complete when the code merely works.

It is complete when:

- The feature works correctly
- The UI matches the existing product identity
- The AI feel is preserved
- The design looks intentional
- The UX is clear
- The component is responsive
- Accessibility is considered
- Loading/error/empty states are handled
- Animations are polished
- Performance is acceptable
- Code is maintainable
- Existing reusable components are used where appropriate
- No unnecessary dependencies were introduced
- No obvious visual inconsistencies remain

---

# 29. Final Rule

Always remember:

> **Do not make the website generic in the pursuit of cleanliness.**

> **Do not remove the AI feel in the pursuit of simplicity.**

> **Do not add complexity in the pursuit of looking futuristic.**

Instead:

**Preserve the identity.  
Improve the UX.  
Refine the visual system.  
Strengthen the architecture.  
Optimize the performance.  
Polish the details.**

The target is a website that feels like:

**A real, premium AI product built by an experienced product design + senior frontend engineering team.**
