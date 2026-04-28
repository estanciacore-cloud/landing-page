# AGENTS.md

## Project Overview
This is a landing page for Estancia Core, a WhatsApp Business API Tech Provider. Built with Astro, Tailwind CSS, and React.

## Stack
- **Framework:** Astro 4.x
- **Styling:** Tailwind CSS 3.x
- **Components:** React 18
- **Deployment:** Static site (SSG)

## Project Structure
```
/
├── src/
│   ├── components/    # UI components (.astro, .tsx)
│   ├── pages/         # Pages (index.astro, privacy-policy.astro, etc.)
│   ├── styles/        # Global CSS files
│   ├── config/        # Site configuration
│   └── data/          # Data files (features, etc.)
├── public/            # Static assets (images, favicon)
├── astro.config.mjs   # Astro configuration
├── tailwind.config.mjs # Tailwind configuration
└── package.json
```

## Common Tasks

### Development
```bash
npm run dev      # Start dev server at localhost:4321
npm run build    # Build for production
npm run preview  # Preview production build
```

### Key Files
- `src/pages/index.astro` - Main landing page
- `src/config/site.ts` - Site metadata and configuration
- `src/data/features.ts` - Features section data
- `src/components/header.astro` - Site header
- `src/styles/global.css` - Global styles

## Notes
- This project uses Astro 4.x (not 5.x)
- Tailwind CSS 3.x with custom configuration
- WhatsApp Business API focused content
- Spanish language primary
- Custom blue corporate color scheme (#3b82f6)
- Animations and floating background orbs implemented
