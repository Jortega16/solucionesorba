---
name: Orba Tech Solutions
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#4c4546'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#7e7576'
  outline-variant: '#cfc4c5'
  surface-tint: '#5e5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1b1b1b'
  on-primary-container: '#848484'
  inverse-primary: '#c6c6c6'
  secondary: '#0d50d5'
  on-secondary: '#ffffff'
  secondary-container: '#386bef'
  on-secondary-container: '#fefcff'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#410002'
  on-tertiary-container: '#f83732'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c6'
  on-primary-fixed: '#1b1b1b'
  on-primary-fixed-variant: '#474747'
  secondary-fixed: '#dbe1ff'
  secondary-fixed-dim: '#b5c4ff'
  on-secondary-fixed: '#00174d'
  on-secondary-fixed-variant: '#003dab'
  tertiary-fixed: '#ffdad6'
  tertiary-fixed-dim: '#ffb4ab'
  on-tertiary-fixed: '#410002'
  on-tertiary-fixed-variant: '#93000a'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.02em
  caption:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  xs: 8px
  sm: 16px
  md: 24px
  lg: 32px
  xl: 48px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style
The brand personality is rooted in the convergence of industrial reliability and modern technological innovation. Drawing from the "stencil" and "bulb" motifs in the logo, the design system adopts a **Corporate Modern** style with a focus on functional precision. It evokes a sense of "Engineered Trust"—the feeling that every solution is calculated, robust, and accessible.

The UI targets B2B and enterprise clients who value clarity, performance, and stability. Visually, this is achieved through a structured grid, ample whitespace to allow technical information to breathe, and a palette that uses color functionally rather than decoratively. The aesthetic is clean, sharp, and systematic, mirroring the modularity of modern software architecture.

## Colors
The color palette is derived directly from the primary brand mark, utilizing a "Neutral-First" approach with high-impact accents.

- **Primary (Black):** Used for typography, iconography, and high-emphasis borders to ground the interface in professionalism.
- **Accents (Blue, Red, Green, Orange):** These are used semantically to guide the user:
  - **Blue:** Primary actions, links, and selected states.
  - **Green:** Success states, growth metrics, and active systems.
  - **Orange:** Warnings, intermediate progress, or highlighting innovation features.
  - **Red:** Errors, critical alerts, and destructive actions.
- **Backgrounds:** A clean, slightly cool gray (#F9FAFB) serves as the primary canvas, ensuring the saturated accent colors pop without overwhelming the user.

## Typography
This design system utilizes **Hanken Grotesk** for its primary communication. Its sharp, contemporary grotesque letterforms provide a "tech-forward" feel while maintaining excellent legibility at all weights.

For technical metadata, code snippets, and system labels, **JetBrains Mono** is introduced. This monospaced font pays homage to the "stencil" effect in the logo, reinforcing the theme of precision engineering and development.

Headlines should use tighter letter-spacing for a confident, architectural appearance. Body text remains open and accessible for long-form reading.

## Layout & Spacing
The layout follows a **Rigid Fluid Grid** philosophy. It uses a 12-column structure on desktop that collapses to 4 columns on mobile. 

The rhythm is built on a 4px baseline, ensuring that all components align to a mathematical grid. This reinforces the "Solution" aspect of the brand—organized, predictable, and reliable. 
- **Desktop:** 64px outer margins with 24px gutters.
- **Tablet:** 32px outer margins with 16px gutters.
- **Mobile:** 16px outer margins with 16px gutters.

Components should utilize "md" (24px) padding for standard containers to maintain a sense of openness.

## Elevation & Depth
In line with its professional and tech-forward nature, the design system avoids heavy shadows in favor of **Tonal Layers and Low-Contrast Outlines**.

Depth is created through:
1.  **Z-Axis Stacking:** The background is #F9FAFB. Primary cards and containers use a pure white (#FFFFFF) background with a subtle 1px border (#E5E7EB).
2.  **Focus States:** Interactive elements gain depth through a slight, sharp shadow (2px blur, 10% opacity black) only when hovered or active, mimicking the tactile feedback of physical hardware.
3.  **Scrims:** For modals and overlays, use a 40% opacity black backdrop blur to maintain focus on the technical task at hand.

## Shapes
The shape language is **Soft (0.25rem)**. While the logo features circles, the primary interface elements use small radii to feel modern without losing their professional, "solid" edge. 

Full pill shapes are reserved exclusively for "Status Chips" (e.g., Online, Active, Resolved) to contrast against the more structural, rectangular buttons and cards. This distinction helps users quickly identify system statuses versus navigation or action elements.

## Components
- **Buttons:** Primary buttons are Solid Black with White text. Secondary buttons use a 1px Black border with Transparent backgrounds. Text is always centered and Bold.
- **Input Fields:** Use a 1px gray border that transitions to a 2px Blue border on focus. Labels use the JetBrains Mono "Label-md" style for a technical feel.
- **Chips:** Used for categorization. They utilize light tints of the brand's accent colors (e.g., Light Blue background with Dark Blue text).
- **Cards:** White background, 1px light gray border, 4px corner radius. No shadow in default state.
- **Lists:** High-density with clear separators. Use monospaced fonts for numerical data or IDs within list items.
- **Checkboxes:** Square with a 2px radius. When checked, they fill with Blue and show a white checkmark.
- **Navigation:** Top-bar focused for web apps, featuring high-contrast primary links and a "stencil-inspired" logo placement on the far left.