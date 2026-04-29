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
│   └── assets/        # Project assets (logos, images)
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
- `src/components/header.astro` - Site header
- `src/components/footer.astro` - Site footer
- `src/styles/global.css` - Global styles
- `src/pages/privacy-policy.astro` - Privacy policy page
- `src/pages/terms-of-service.astro` - Terms of service page

## Notes
- This project uses Astro 4.x (not 5.x)
- Tailwind CSS 3.x with custom configuration
- WhatsApp Business API focused content
- Spanish language primary
- Custom blue corporate color scheme (#3b82f6)
- Animations and floating background orbs implemented
