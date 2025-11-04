# Siham Demami - Data Science & Web Developer Portfolio

A modern, professional portfolio website showcasing expertise in Data Science, Machine Learning, and Web Development. Built with Astro, TailwindCSS, and TypeScript.

![Portfolio Preview](https://github.com/user-attachments/assets/acb6f58f-06ba-446d-baf4-bfcbeb767b68)

## ✨ Features

### 🎨 Design & UX
- **Dark/Light Mode Toggle** - Seamless theme switching with localStorage persistence
- **Smooth Animations** - Elegant transitions and hover effects throughout
- **Responsive Design** - Mobile-first approach, optimized for all screen sizes
- **Modern UI** - Clean, professional design with subtle gradients and thoughtful spacing
- **Sticky Navigation** - Active section highlighting with smooth scroll behavior

### 🚀 Functionality
- **Project Filtering** - Filter projects by category (AI, Data Science, Web)
- **Contact Form** - Interactive contact form with validation
- **SEO Optimized** - Comprehensive meta tags, Open Graph, and structured data
- **Performance** - Optimized images, lazy loading, and fast load times
- **Accessibility** - ARIA labels, semantic HTML, keyboard navigation support

### 📋 Sections
1. **Hero** - Professional introduction with tagline and CTA
2. **Work Experience** - Detailed employment history with measurable impacts
3. **Featured Projects** - Filterable showcase of key projects with impact metrics
4. **About Me** - Personal yet professional background and expertise
5. **Contact** - Interactive form and direct contact information

## 🛠️ Tech Stack

- **Framework**: [Astro 5.13](https://astro.build/) - Static site generation
- **Styling**: [TailwindCSS 4.1](https://tailwindcss.com/) - Utility-first CSS
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type safety
- **Deployment**: [Vercel](https://vercel.com/) - Edge network hosting
- **Fonts**: Gabarito Variable (serif), Be Vietnam Pro (sans-serif)

## 🎨 Design System

### Color Palette

```css
/* Primary Colors */
--color-primary: #3b82f6;        /* Blue 500 */
--color-primary-dark: #2563eb;   /* Blue 600 */
--color-primary-light: #60a5fa;  /* Blue 400 */

/* Secondary & Accent */
--color-secondary: #8b5cf6;      /* Violet 500 */
--color-accent: #06b6d4;         /* Cyan 500 */

/* Neutrals */
--color-neutral: #94a3b8;        /* Slate 400 */
--color-neutral-light: #cbd5e1;  /* Slate 300 */
--color-neutral-dark: #64748b;   /* Slate 500 */

/* Backgrounds */
--color-black: #0f172a;          /* Slate 900 */
--color-gray-900: #0f172a;
--color-gray-800: #1e293b;
--color-white: #f8fafc;          /* Slate 50 */
```

### Typography

- **Headings**: Gabarito Variable (serif) - Bold, modern character
- **Body**: Be Vietnam Pro (sans-serif) - Clean, readable
- **Scale**: Fluid typography from 0.875rem to 6rem
- **Line Heights**: Optimized for readability (1.5-1.75 for body text)

### Spacing & Layout

- **Max Width**: 768px (3xl) for main content
- **Section Padding**: 6rem (py-24) on desktop, 8rem (py-32) for hero
- **Card Borders**: Subtle borders with neutral/20 opacity
- **Border Radius**: 1rem (rounded-2xl) for cards and modals

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm 10+ (recommended) or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/anaitabd/siham-portfolio.git
cd siham-portfolio

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

The site will be available at `http://localhost:4321`

### Available Commands

| Command          | Description                                      |
| :--------------- | :----------------------------------------------- |
| `pnpm install`   | Install dependencies                             |
| `pnpm dev`       | Start local dev server at `localhost:4321`       |
| `pnpm build`     | Build production site to `./dist/`               |
| `pnpm preview`   | Preview production build locally                 |
| `pnpm astro`     | Run Astro CLI commands                           |

## 📝 Content Configuration

All site content is centralized in `src/config/index.ts` for easy customization:

```typescript
export const SITE_CONFIG = {
  title: "Your Name — Title",
  author: "Your Name",
  description: "Your description",
  // ... navigation, social links, etc.
}

export const SITE_CONTENT = {
  hero: { /* ... */ },
  experience: [ /* ... */ ],
  projects: [ /* ... */ ],
  about: { /* ... */ },
}
```

### Adding Projects

Projects support categorization for filtering:

```typescript
{
  name: "Project Name",
  summary: "Description with impact metrics",
  linkPreview: "https://demo.com",
  linkSource: "https://github.com/...",
  image: "/project-image.png",
  category: "AI" | "Data Science" | "Web"
}
```

## 🎯 Customization Guide

### Changing Theme Colors

Edit `src/styles/global.css`:

```css
@theme {
  --color-primary: #your-color;
  --color-accent: #your-accent;
}
```

### Modifying Layout

Components are in `src/components/`:
- `Hero.astro` - Hero section
- `Experience.astro` - Work experience
- `Projects.astro` - Project showcase with filtering
- `About.astro` - About section
- `Contact.astro` - Contact form
- `Header.astro` - Navigation with theme toggle
- `Footer.astro` - Footer with social links

### Adding Sections

1. Create component in `src/components/YourSection.astro`
2. Import and add to `src/pages/index.astro`
3. Add navigation link in `src/config/index.ts`

## 🌐 Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/anaitabd/siham-portfolio)

Or manually:

```bash
# Build the site
pnpm build

# Deploy to Vercel
vercel deploy --prod
```

### Deploy to Other Platforms

The site is pre-configured for Vercel but can be deployed to any static hosting:

- **Netlify**: Use the Netlify adapter
- **GitHub Pages**: Use the static adapter
- **Cloudflare Pages**: Use the Cloudflare adapter

See [Astro Deployment Guide](https://docs.astro.build/en/guides/deploy/) for details.

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **First Contentful Paint**: < 1s
- **Time to Interactive**: < 2s
- **Cumulative Layout Shift**: < 0.1
- **Total Bundle Size**: < 50KB (gzipped)

## ♿ Accessibility

- Semantic HTML5 elements
- ARIA labels and roles
- Keyboard navigation support
- Focus indicators
- Screen reader friendly
- Color contrast ratios meet WCAG AA standards

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Original template inspiration: [AstroZen](https://github.com/immois/astro-zen) by Moisés Machuca
- Fonts: [Google Fonts](https://fonts.google.com/)
- Icons: Custom SVG icons
- Deployment: [Vercel](https://vercel.com/)

## 📬 Contact

**Siham Demami**
- Email: siham.demami1@gmail.com
- LinkedIn: [linkedin.com/in/sihamdemami](https://linkedin.com/in/sihamdemami)
- GitHub: [github.com/sihamdemami](https://github.com/sihamdemami)

---

Built with ❤️ using Astro, TailwindCSS, and TypeScript
