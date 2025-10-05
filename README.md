# Business Design Kit

A modern, professional design management system built with **Next.js**, **ShadCN/UI**, and **Tailwind CSS**. This application helps organize and present brand assets, color concepts, and social media graphics with an intuitive sidebar navigation and tabbed interface.

![Business Design Kit Dashboard](https://img.shields.io/badge/Built%20with-Next.js%2015-black?style=for-the-badge&logo=next.js)
![ShadCN UI](https://img.shields.io/badge/UI-ShadCN%2FUI-black?style=for-the-badge)
![Tailwind CSS](https://img.shields.io/badge/Styling-Tailwind%20CSS-06B6D4?style=for-the-badge&logo=tailwindcss)

## ✨ Features

### 📊 **Dashboard Overview**
- Real-time statistics for designs, color palettes, and social graphics
- Recent design activity tracking
- Quick action buttons for common tasks

### 🎨 **Design Organization**
- **Brand Assets**: Logo designs, brand guidelines, and typography
- **Color Concepts**: Primary palettes, accent colors, and color schemes
- **Social Media Graphics**: Platform-specific designs with size specifications
- **Design Templates**: Business cards, presentations, and marketing materials

### 🎯 **Key Capabilities**
- ✅ Responsive sidebar navigation with collapsible sections
- ✅ Tabbed interface for efficient design browsing
- ✅ Asset preview and download functionality
- ✅ Status tracking with badges and indicators
- ✅ Modern, professional UI with dark/light mode support
- ✅ GitHub Pages deployment ready
- ✅ Mobile-responsive design

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or bun package manager

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd business-design-kit/enrich-med

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000 in your browser
```

### Development Commands

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Deploy build (creates static files + .nojekyll)
npm run deploy

# Serve static files locally
npm run serve
```

## 📁 Project Structure

```
enrich-med/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout with sidebar
│   ├── page.tsx                 # Main dashboard with tabs
│   └── globals.css              # Global styles
├── components/                  # React components
│   ├── ui/                      # ShadCN UI components
│   └── app-sidebar.tsx          # Main sidebar navigation
├── lib/                         # Utilities
│   └── utils.ts                 # Helper functions
├── public/                      # Static assets
├── .github/workflows/           # GitHub Actions
│   └── deploy.yml               # Automated deployment
├── next.config.ts               # Next.js configuration
├── tailwind.config.ts           # Tailwind CSS configuration
└── components.json              # ShadCN configuration
```

## 🎨 Design System

### Color Palette

- **Primary Brand**: Blue shades (#1E40AF → #93C5FD)
- **Accent Colors**: Purple shades (#7C3AED → #DDD6FE)  
- **Neutral Tones**: Gray shades (#1F2937 → #F3F4F6)
- **Status Colors**: Success, Warning, and Error states

### Typography

- **Primary Font**: Geist Sans (system font fallback)
- **Monospace Font**: Geist Mono
- **Scale**: text-xs to text-4xl with consistent line heights

### Components

Built on **ShadCN/UI** with custom extensions:

- `AppSidebar`: Main navigation with nested menu items
- `Tabs`: Multi-section content organization
- `Card`: Design asset and information display
- `Badge`: Status indicators and counts
- `Button`: Action triggers with icon support

## 🌐 Deployment

### GitHub Pages (Automatic)

The repository includes GitHub Actions for automatic deployment:

1. **Push to main branch** → Triggers build and deploy
2. **Static files** are generated in `/out` directory
3. **Deployed to** `https://yourusername.github.io/business-design-kit`

### Manual Deployment

```bash
# Build and prepare for static hosting
npm run deploy

# Files ready in ./out directory
# Upload to your preferred static hosting service
```

### Hosting Options

- ✅ **GitHub Pages** (Free, included)
- ✅ **Netlify** (Deploy from repository)  
- ✅ **Vercel** (Optimal for Next.js)
- ✅ **Static file hosting** (AWS S3, etc.)

## 📋 Customization

### Adding New Design Categories

1. **Update Sidebar**: Edit `components/app-sidebar.tsx`
2. **Add Tab**: Modify `app/page.tsx` tabs configuration
3. **Create Content**: Build new `TabsContent` component

### Modifying Color Schemes

1. **Update `tailwind.config.ts`** for custom colors
2. **Modify `app/globals.css`** for CSS variables
3. **Update component variants** in UI components

### Brand Customization

1. **Logo**: Replace in `components/app-sidebar.tsx` footer
2. **Title**: Update metadata in `app/layout.tsx`
3. **Colors**: Customize in Tailwind configuration

## 🔧 Configuration

### Next.js Configuration

```typescript
// next.config.ts
const nextConfig = {
  output: 'export',                    // Static export for GitHub Pages
  trailingSlash: true,                 // Required for static hosting
  images: { unoptimized: true },       // Disable image optimization
  basePath: '/business-design-kit',    // GitHub Pages path
}
```

### ShadCN Configuration

```json
// components.json
{
  "style": "neutral",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "app/globals.css"
  }
}
```

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Tablet Support**: Collapsible sidebar navigation
- **Desktop Enhanced**: Full sidebar with expanded features
- **Touch Friendly**: Large tap targets and gestures

## 🧪 Testing

### Local Testing

```bash
# Test development build
npm run dev

# Test production build locally  
npm run build && npm run serve

# Test static file serving
python -m http.server 3000 --directory out
```

### Deployment Testing

1. **Build succeeds** without errors
2. **All routes** are accessible
3. **Assets load** correctly
4. **Responsive design** works on all devices
5. **Navigation functions** properly

## 📈 Performance

### Optimizations Included

- ✅ **Static generation** for fast loading
- ✅ **Code splitting** with Next.js
- ✅ **Optimized assets** and images
- ✅ **Minimal JavaScript** bundle
- ✅ **CSS purging** with Tailwind

## 🤝 Contributing

### Development Workflow

1. **Fork** the repository
2. **Create** feature branch (`feature/amazing-feature`)
3. **Commit** changes with clear messages
4. **Push** to your fork
5. **Create** Pull Request

### Code Standards

- **TypeScript** for type safety
- **ESLint** for code quality  
- **Prettier** for consistent formatting
- **Conventional Commits** for clear history

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 🙋‍♂️ Support

### Issues & Questions

- 📖 Check the [documentation](README.md)
- 🐛 Report bugs via [GitHub Issues]()  
- 💬 Ask questions in [Discussions]()
- 📧 Email support: [your-email@domain.com]()

### Resources

- 📚 [Next.js Documentation](https://nextjs.org/docs)
- 🎨 [ShadCN/UI Components](https://ui.shadcn.com/)
- 🎯 [Tailwind CSS Docs](https://tailwindcss.com/docs)
- 🚀 [GitHub Pages Guide](https://pages.github.com/)

---

**Built with ❤️ for modern design teams**
