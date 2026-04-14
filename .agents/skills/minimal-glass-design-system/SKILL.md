---
name: minimal-glass-design-system
description: "Design, restyle, or refine product UIs with a consistent minimalist glass identity. Use this skill whenever the user asks for a design system, visual identity, UI polish, Tailwind/DaisyUI theming, React component styling, or wants a professional look with subtle gradients, restrained motion, glass surfaces, and a muted primary color thread across screens."
---

# Minimal Glass Design System

Use this skill to keep a product UI visually consistent, calm, and clearly branded without drifting into loud, generic, or overdesigned interfaces.

## Core intent

Create a refined interface language built on three ideas:

1. Glass-like surfaces with low-contrast depth.
2. A muted primary color that acts as identity, not decoration.
3. Strong structure and typography so the UI feels deliberate, not ornamental.

If the user does not specify a style, default to this system instead of inventing a new visual direction.

## When to use this skill

Use this skill when the user asks to:

- design or restyle a web app, dashboard, landing page, or product UI;
- create or refine a design system;
- make a site feel more professional, minimal, editorial, or premium;
- apply glassmorphism, soft gradients, muted accents, or subtle motion;
- keep styling consistent across multiple screens or components;
- work in React, Tailwind, DaisyUI, or a similar utility-driven stack.

## Design principles

Follow these principles in every implementation:

- Keep surfaces light, layered, and slightly translucent.
- Use the primary color sparingly for identity: active states, key badges, links, subtle edge glows, and focus moments.
- Avoid loud gradients, neon saturation, heavy shadows, and colorful UI noise.
- Prefer one clear visual rhythm over many competing styles.
- Make the hierarchy obvious through spacing, typography, and surface contrast before using color.
- Use motion only where it improves perception of polish.

## System foundation

When building or updating a UI, define the system in this order:

1. Theme tokens.
2. Base typography.
3. Surface styles.
4. Shared component recipes.
5. Page-specific composition.

### Theme tokens

Anchor the palette around a muted blue primary and neutral surfaces:

- Base backgrounds: soft slate or near-white neutrals.
- Primary: restrained blue, enough to brand the interface but not enough to dominate it.
- Secondary: cool gray-violet or steel tone, used even more sparingly than primary.
- Accent: very limited use, preferably for support states only.
- Borders: thin, low-contrast, slightly tinted.
- Shadows: subtle, wide, and soft.

Prefer opacity and color mixing over fully saturated fills.

### Typography

- Use a strong heading scale with tight tracking and confident weight.
- Keep body text calm, readable, and slightly muted.
- Make titles feel editorial, not playful.
- Favor hierarchy through size and weight, not through color alone.

### Surfaces

- Use rounded panels with a soft border and backdrop blur.
- Add a nearly invisible top hairline or edge glow using the primary color at low opacity.
- Keep panel backgrounds translucent so the page feels layered.
- Avoid thick outlines and hard contrast blocks unless a control needs to feel interactive.

### Motion

- Use 150–300ms transitions for most interactions.
- Prefer tiny lifts, opacity changes, and soft border shifts.
- Use one gentle entrance animation for major sections if it adds clarity.
- Avoid bouncy motion, exaggerated scaling, and flashy micro-interactions.

## Component recipes

Use these recipes as the default language for future UI work.

### App shell and page headers

- Put the page in a spacious shell with generous gutters.
- Use a glass hero panel or header bar to establish identity.
- Include a muted primary badge or label, a strong title, and a quiet supporting sentence.
- Add small token chips only when they clarify the product identity.

### Section panels

- Use a rounded surface panel with soft translucency.
- Separate sections with a faint border-bottom or hairline.
- Keep actions aligned to one edge and metadata visually quieter.

### Cards and list items

- Make cards feel like calm containers, not tiles.
- Use subtle lift on hover and a primary-tinted line or icon only as a hint of identity.
- Keep metadata secondary and compact.
- Use badges sparingly; prefer a single clear status chip over multiple competing colors.

### Filters and chips

- Prefer pill controls with low-contrast borders and soft selected states.
- The active state should use the primary color in a muted way.
- Make inactive states feel present but quieter.

### Detail views and discussion content

- Separate the lead item from the follow-up content with spacing and a delicate divider.
- Style markdown for reading: comfortable line-height, calm code blocks, subtle quotes, restrained link color.
- Keep comments and responses visually consistent so the thread feels intentional.

### Loading and empty states

- Make loading feel like part of the design system, not a default placeholder.
- Use a soft bordered panel, subdued spinner, and enough spacing to preserve the page rhythm.
- Empty states should be quiet, concise, and visually aligned with the rest of the interface.

## Implementation guidance

When editing a project:

1. Start by adjusting theme tokens and base styles.
2. Then refine shared utilities for surfaces, headings, and layout.
3. Apply the system to the largest shell components before polishing small details.
4. Reuse one style pattern across similar UI elements instead of inventing variations.
5. Preserve existing structure unless a small markup change clearly improves hierarchy or readability.

Use DaisyUI as the foundation, but customize it enough that the product feels owned rather than stock.

## Quality checklist

Before finishing, verify that:

- the primary color appears as a subtle identity thread, not a loud accent;
- surfaces feel glassy and layered without becoming blurry or noisy;
- typography carries the hierarchy;
- motion is restrained and purposeful;
- all pages still feel like one system.

If the result starts to feel generic, increase consistency before adding more decoration.