# Design System Documentation

This document outlines the design system used in the Siham Demami portfolio website.

## 🎨 Color Palette

### Primary Colors

The primary color scheme uses various shades of blue to convey professionalism, trust, and technical expertise.

| Color Name | Hex Code | Usage | CSS Variable |
|------------|----------|-------|--------------|
| Primary | `#3b82f6` | Main interactive elements, links, CTA buttons | `--color-primary` |
| Primary Dark | `#2563eb` | Hover states, emphasized elements | `--color-primary-dark` |
| Primary Light | `#60a5fa` | Highlights, dark mode primary | `--color-primary-light` |

**Example Usage:**
```css
/* Button */
background-color: var(--color-primary);

/* Hover state */
hover:bg-primary-dark

/* Dark mode */
dark:text-primary-light
```

### Secondary & Accent Colors

| Color Name | Hex Code | Usage | CSS Variable |
|------------|----------|-------|--------------|
| Secondary | `#8b5cf6` | Secondary actions, decorative elements | `--color-secondary` |
| Accent | `#06b6d4` | Highlights, taglines, special callouts | `--color-accent` |

### Neutrals

Neutral colors provide the foundation for text, backgrounds, and borders.

| Color Name | Hex Code | Usage | CSS Variable |
|------------|----------|-------|--------------|
| Neutral | `#94a3b8` | Body text, secondary text | `--color-neutral` |
| Neutral Light | `#cbd5e1` | Light text, dark mode body | `--color-neutral-light` |
| Neutral Dark | `#64748b` | Muted text, borders | `--color-neutral-dark` |

### Backgrounds

| Color Name | Hex Code | Usage | CSS Variable |
|------------|----------|-------|--------------|
| Black | `#0f172a` | Main background (light mode) | `--color-black` |
| Gray 900 | `#0f172a` | Dark background | `--color-gray-900` |
| Gray 800 | `#1e293b` | Card backgrounds (dark mode) | `--color-gray-800` |
| Gray 100 | `#f1f5f9` | Light backgrounds | `--color-gray-100` |
| Gray 50 | `#f8fafc` | White text | `--color-gray-50` |
| White | `#f8fafc` | Text on dark backgrounds | `--color-white` |

## 📝 Typography

### Font Families

**Serif (Headings): Gabarito Variable**
- Used for all headings (h1-h4)
- Modern, bold character
- Variable font for optimal performance
- Weight range: 400-900
- Source: `@fontsource-variable/gabarito`

**Sans-Serif (Body): Be Vietnam Pro**
- Used for body text, navigation, buttons
- Clean, highly readable
- Weights: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)
- Source: `@fontsource/be-vietnam-pro`

### Type Scale

Fluid typography system that adapts to viewport size:

| Name | Size (rem) | Line Height | Usage |
|------|-----------|-------------|-------|
| xs | 0.875 | 1.25 | Small labels, captions |
| sm | 1.0 | 1.5 | Form labels, footer text |
| base | 1.125 | 1.75 | Body text, paragraphs |
| lg | 1.25 | 1.875 | Large body text |
| xl | 1.5 | 2.0 | Subheadings |
| 2xl | 1.75 | 2.25 | Section subheaders |
| 3xl | 2.0 | 2.5 | Card titles |
| 4xl | 2.25 | 2.75 | Section titles (mobile) |
| 5xl | 2.5 | 3.0 | Hero secondary |
| 6xl | 3.0 | 3.75 | Hero secondary (desktop) |
| 7xl | 3.75 | 1.0 | Hero name (mobile) |
| 8xl | 4.5 | 1.0 | Hero name (tablet) |
| 9xl | 6.0 | 1.0 | Hero name (desktop) |

### Letter Spacing (Tracking)

| Name | Value | Usage |
|------|-------|-------|
| Tightest | -0.05em | Large display text (hero name) |
| Tighter | -0.025em | Section headings |
| Tight | -0.0125em | Subheadings |

### Font Weights

| Name | Weight | Usage |
|------|--------|-------|
| Normal | 400 | Body text |
| Medium | 500 | Navigation, buttons |
| Semibold | 600 | Subheadings |
| Bold | 700 | Headings, emphasis |

### Typography Examples

```css
/* Hero Name */
font-family: var(--font-serif);
font-size: 7xl; /* 3.75rem mobile, 6rem desktop */
font-weight: 700;
letter-spacing: var(--tracking-tightest);

/* Section Headings */
font-family: var(--font-serif);
font-size: 4xl; /* 2.25rem mobile, 3rem desktop */
font-weight: 700;
letter-spacing: var(--tracking-tighter);

/* Body Text */
font-family: var(--font-sans);
font-size: base; /* 1.125rem */
font-weight: 400;
line-height: 1.75;

/* Buttons */
font-family: var(--font-sans);
font-size: sm; /* 1rem */
font-weight: 500;
```

## 📏 Spacing & Layout

### Container Widths

| Breakpoint | Max Width | Usage |
|------------|-----------|-------|
| Default | 100% | Full width on mobile |
| sm | 640px | Small tablets |
| md | 768px | Tablets |
| lg | 1024px | Small desktops |
| xl | 1280px | Desktops |
| 2xl | 1536px | Large desktops |
| Content Max | 768px (3xl) | Main content area |
| Header Max | 1280px (5xl) | Header/footer |

### Section Spacing

| Element | Padding Y | Usage |
|---------|-----------|-------|
| Hero | 6rem (mobile), 8rem (desktop) | Main hero section |
| Sections | 6rem | Standard sections |
| Cards | 3rem (pt-12) | Card internal padding |

### Border Radius

| Name | Value | Usage |
|------|-------|-------|
| lg | 0.5rem | Buttons, inputs |
| xl | 0.75rem | Dropdowns, modals |
| 2xl | 1rem | Cards, project cards |
| full | 9999px | Pills, badges, avatar |

### Shadows

| Name | Values | Usage |
|------|--------|-------|
| lg | `0 10px 15px -3px rgb(0 0 0 / 0.1)` | Cards, dropdowns |
| xl | `0 20px 25px -5px rgb(0 0 0 / 0.1)` | Hover states |
| 2xl | `0 25px 50px -12px rgb(0 0 0 / 0.25)` | Modals, emphasized elements |
| primary | `0 20px 25px -5px rgb(59 130 246 / 0.2)` | Primary button hovers |

## 🎭 Interactive States

### Transitions

Default transition for theme switching and hover states:
```css
transition: background-color 300ms ease, 
            color 300ms ease, 
            border-color 300ms ease;
```

### Hover Effects

**Buttons:**
```css
/* Scale and shadow */
transition-all duration-300 
hover:scale-105 
hover:shadow-xl
```

**Links:**
```css
/* Color and underline */
hover:text-primary 
hover:underline
```

**Cards:**
```css
/* Scale, border, and shadow */
transition-all duration-500 
hover:scale-[1.02] 
hover:border-primary/50 
hover:shadow-2xl 
hover:shadow-primary/20
```

## 🌓 Dark Mode

The design system uses Tailwind's built-in dark mode with class-based switching.

### Implementation

```html
<!-- Toggle via JavaScript -->
<html class="dark">
```

### Dark Mode Colors

| Light Mode | Dark Mode | Element |
|------------|-----------|---------|
| `bg-black` | `bg-gray-900` | Main background |
| `text-neutral` | `text-neutral-light` | Body text |
| `border-neutral/20` | `border-neutral-dark/20` | Borders |
| `bg-gray-800` | `bg-gray-900` | Cards |
| `text-primary` | `text-primary-light` | Interactive elements |

### Dark Mode Class Pattern

```css
/* Example */
class="text-neutral dark:text-neutral-light"
class="bg-black dark:bg-gray-900"
class="border-primary dark:border-primary-light"
```

## ✨ Animations

### Keyframe Animations

**Slide In (Header):**
```css
@keyframes slide-in {
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
```

**Fade In:**
```css
@keyframes fade-in {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
```

**Slide Up:**
```css
@keyframes slide-up {
  0% {
    transform: translateY(30px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
```

## 🎯 Component-Specific Styles

### Project Cards

```css
/* Sticky positioning with increasing top offset */
sticky 
top-[98px] /* First card */
top-[138px] /* Second card (+40px) */
top-[178px] /* Third card (+40px) */
```

### Category Badges

```css
rounded-full 
bg-primary/10 
px-3 py-1 
text-xs font-semibold 
text-primary
dark:bg-primary-light/10 
dark:text-primary-light
```

### Form Inputs

```css
rounded-lg 
border border-neutral/40 
bg-black/50 
px-4 py-3 
text-white 
placeholder-neutral 
focus:border-primary 
focus:outline-none 
focus:ring-2 
focus:ring-primary/50
```

## 📱 Responsive Breakpoints

| Breakpoint | Width | Device |
|------------|-------|--------|
| sm | 640px | Large phones, small tablets |
| md | 768px | Tablets |
| lg | 1024px | Small laptops |
| xl | 1280px | Desktops |
| 2xl | 1536px | Large desktops |

### Mobile-First Approach

Always design for mobile first, then add breakpoints:

```css
/* Mobile first */
class="text-4xl md:text-5xl lg:text-6xl"
class="px-4 md:px-8 lg:px-12"
class="flex-col md:flex-row"
```

## 🔍 Accessibility

### Color Contrast

All color combinations meet WCAG AA standards:
- Normal text: 4.5:1 minimum
- Large text: 3:1 minimum
- Interactive elements: 3:1 minimum

### Focus States

```css
focus:outline-none 
focus:ring-2 
focus:ring-primary/50
```

### Semantic HTML

- Use proper heading hierarchy (h1 → h2 → h3)
- `<nav>` for navigation
- `<main>` for main content
- `<footer>` for footer
- `<section>` for content sections

---

Last Updated: November 2025
Version: 1.0
