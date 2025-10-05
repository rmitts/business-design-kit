# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

The **Business Design Kit** is a modern design management system built with Next.js 15, ShadCN/UI, and Tailwind CSS. It helps organize and present brand assets, color concepts, and social media graphics with an intuitive sidebar navigation and tabbed interface.

## Development Commands

### Core Development
```bash
# Start development server (with Turbopack)
npm run dev

# Production build (with Turbopack) 
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

### Deployment & Static Hosting
```bash
# Build and prepare for static hosting
npm run deploy

# Serve built files locally (for testing)
npm run serve

# Access local development server
# http://localhost:3000

# Access local static build
# http://localhost:3000 (after npm run serve)
```

### Testing Build Locally
```bash
# Test complete build pipeline
npm run build && npm run serve

# Alternative local server (Python)
python -m http.server 8000 --directory out
```

## Architecture & Code Structure

### Application Architecture
- **Framework**: Next.js 15 with App Router
- **UI Library**: ShadCN/UI components with Radix UI primitives  
- **Styling**: Tailwind CSS v4 with CSS variables
- **Icons**: Lucide React
- **Build**: Turbopack for development and production
- **Deployment**: Static export for GitHub Pages

### Directory Structure
```
enrich-med/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with SidebarProvider
│   ├── page.tsx           # Main dashboard with tabs
│   └── globals.css        # Global styles & Tailwind
├── components/
│   ├── ui/                # ShadCN UI components (auto-generated)
│   └── app-sidebar.tsx    # Main sidebar navigation
├── hooks/
│   └── use-mobile.ts      # Mobile detection hook
├── lib/
│   └── utils.ts           # Utility functions (cn helper)
└── public/                # Static assets
```

### Key Components

#### AppSidebar (`components/app-sidebar.tsx`)
- Main navigation component with nested menu items
- Uses ShadCN Sidebar primitives
- Includes sections: Dashboard, Brand Assets, Color Concepts, Social Media, Design Templates
- Features badge counts and hierarchical navigation

#### Main Dashboard (`app/page.tsx`)
- Tab-based interface with Overview, Brand Assets, Colors, Social Media
- Uses ShadCN Tabs, Cards, Badges, and Buttons
- Client-side component with interactive elements
- Responsive grid layouts for different content types

#### Layout (`app/layout.tsx`)
- Root layout with SidebarProvider context
- Geist fonts (Sans & Mono) loaded from Google Fonts
- Metadata configuration for SEO

### Styling System

#### Tailwind Configuration
- **Base Color**: Neutral theme with CSS variables
- **Custom Fonts**: Geist Sans and Geist Mono
- **Component Styles**: Defined in `app/globals.css`
- **Dark Mode**: Supported via CSS variables

#### ShadCN Configuration (`components.json`)
- **Style**: "new-york" theme
- **TypeScript**: Enabled with RSC support
- **Icon Library**: Lucide React
- **Path Aliases**: `@/components`, `@/lib`, `@/hooks`, etc.

## Development Patterns

### Component Patterns
- All components use TypeScript with proper typing
- ShadCN components follow the library's patterns
- Icon components from Lucide React with consistent sizing
- Client components explicitly marked with `"use client"`

### State Management
- No external state management library (using React state)
- Context providers for UI state (SidebarProvider)
- Local state for component interactions

### Styling Patterns
- Utility-first approach with Tailwind CSS
- Component variants using `cn()` utility function
- Consistent spacing and typography scales
- Responsive design with mobile-first approach

### File Organization
- Components in `components/` directory
- UI primitives auto-generated in `components/ui/`
- Utilities in `lib/` directory
- Custom hooks in `hooks/` directory
- App Router structure in `app/` directory

## Configuration Files

### Next.js (`next.config.ts`)
- Static export enabled for GitHub Pages deployment
- Base path configuration for production
- Image optimization disabled for static hosting
- Trailing slash enabled for proper static serving

### Package Dependencies
- **Framework**: Next.js 15, React 19
- **UI**: Radix UI primitives, Lucide React icons
- **Styling**: Tailwind CSS v4, class-variance-authority
- **Utilities**: clsx, tailwind-merge
- **Dev Tools**: TypeScript, ESLint

### Development Tools
- **TypeScript**: Strict mode enabled
- **ESLint**: Next.js configuration with modern rules
- **Turbopack**: Enabled for faster builds
- **PostCSS**: For Tailwind processing

## Deployment Configuration

### GitHub Pages Setup
- Automatic deployment via GitHub Actions
- Static export builds to `out/` directory  
- Base path configured for repository deployment
- `.nojekyll` file added for proper serving

### Build Pipeline
1. `npm run build` - Creates production build with Turbopack
2. Static files exported to `out/` directory
3. `.nojekyll` file added to prevent Jekyll processing
4. Deploy via GitHub Actions to gh-pages branch

## Common Development Tasks

### Adding New Components
1. Place in `components/` directory
2. Use TypeScript with proper prop typing
3. Import and use ShadCN UI primitives
4. Follow existing naming conventions

### Adding New ShadCN Components
```bash
# Add new ShadCN components (example)
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add tabs
```

### Modifying Sidebar Navigation
- Edit `components/app-sidebar.tsx`
- Update `menuItems` array with new sections
- Add icons from Lucide React
- Include badge counts where appropriate

### Creating New Dashboard Tabs
- Edit `app/page.tsx`
- Add new `TabsTrigger` in `TabsList`
- Add corresponding `TabsContent` section
- Use consistent Card layouts for content

### Customizing Styles
- Global styles in `app/globals.css`
- Component-specific styles using Tailwind classes
- CSS variables for theme customization
- Responsive breakpoints: `md:`, `lg:`, `xl:`

## Build & Development Notes

### Performance Considerations
- Static export for optimal loading performance  
- Code splitting handled automatically by Next.js
- Turbopack for faster development builds
- Optimized asset serving for GitHub Pages

### Browser Compatibility
- Modern browsers supporting ES2017+
- CSS Grid and Flexbox required
- CSS custom properties (variables) required
- No Internet Explorer support

### Mobile Responsiveness
- Mobile-first responsive design
- Collapsible sidebar navigation
- Touch-friendly interactive elements
- Responsive grid layouts throughout