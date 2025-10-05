# 🚀 Deployment Guide - Business Design Kit

Complete guide to deploy your Business Design Kit to GitHub Pages with automatic CI/CD.

## 📋 Prerequisites

- ✅ GitHub account
- ✅ Git installed locally
- ✅ Project files ready for deployment

## 🎯 Step-by-Step GitHub Pages Deployment

### 1. Create GitHub Repository

```bash
# Navigate to your project directory
cd /Users/ryanmitts/business-design-kit/enrich-med

# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Business Design Kit setup"

# Add GitHub remote (replace with your repository URL)
git remote add origin https://github.com/yourusername/business-design-kit.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 2. Configure GitHub Pages Settings

1. **Go to your GitHub repository**
2. **Click Settings** → **Pages** (in sidebar)
3. **Source**: Select "GitHub Actions"
4. **Branch**: The workflow will handle deployment automatically

### 3. Verify Deployment Workflow

The included `.github/workflows/deploy.yml` will automatically:

- ✅ **Trigger on push** to main branch
- ✅ **Install dependencies** with npm
- ✅ **Build the project** for production
- ✅ **Deploy to GitHub Pages** branch

### 4. Access Your Deployed Site

Your site will be available at:
```
https://yourusername.github.io/business-design-kit/
```

## ⚙️ Configuration Details

### Next.js Configuration (next.config.ts)

```typescript
const nextConfig: NextConfig = {
  output: 'export',                           // Enable static export
  trailingSlash: true,                       // Required for GitHub Pages
  images: { unoptimized: true },             // Disable Next.js image optimization
  basePath: '/business-design-kit',          // GitHub Pages repository path
  assetPrefix: '/business-design-kit',       // Asset path prefix
};
```

### Package.json Scripts

```json
{
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build --turbopack",
    "start": "next start",
    "lint": "eslint",
    "deploy": "npm run build && touch out/.nojekyll",
    "serve": "npx serve out"
  }
}
```

### GitHub Actions Workflow

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
        env:
          NODE_ENV: production
      
      - name: Add .nojekyll file
        run: touch ./out/.nojekyll
      
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

## 🔧 Troubleshooting

### Common Issues & Solutions

#### 1. **Build Fails with Image Optimization Error**
```
Error: Image Optimization using the default loader is not compatible with `output: 'export'`.
```

**Solution**: Already fixed in `next.config.ts` with `images: { unoptimized: true }`

#### 2. **404 Error on GitHub Pages**
```
Site loads but shows 404 for assets
```

**Solution**: Ensure `basePath` and `assetPrefix` are correctly set in `next.config.ts`

#### 3. **GitHub Actions Permission Error**
```
Error: Insufficient permissions to deploy
```

**Solution**: Go to Repository Settings → Actions → General → Workflow permissions → Select "Read and write permissions"

#### 4. **Build Success but Site Not Updating**
```
Deployment shows success but changes don't appear
```

**Solutions**:
- Check GitHub Pages settings (Settings → Pages)
- Clear browser cache
- Wait a few minutes for CDN propagation
- Verify the correct branch is selected for deployment

### Debugging Commands

```bash
# Test local build
npm run build

# Serve built files locally
npm run serve
# Then visit http://localhost:3000

# Check build output
ls -la out/

# Verify static files
python -m http.server 8000 --directory out
```

## 🌐 Alternative Deployment Options

### Option 1: Netlify
1. Connect your GitHub repository
2. Build settings:
   - Build command: `npm run build`
   - Publish directory: `out`
   - Node version: `18`

### Option 2: Vercel
1. Import your GitHub repository
2. Framework preset: Next.js
3. Build settings are auto-detected

### Option 3: Custom Static Hosting
```bash
# Build the project
npm run build

# Upload the 'out' directory contents to your static hosting service
# (AWS S3, CloudFlare Pages, etc.)
```

## 📊 Performance Optimization

### Pre-deployment Checklist

- ✅ **Images optimized** (WebP format recommended)
- ✅ **Unused dependencies removed** 
- ✅ **Code linting passed** (`npm run lint`)
- ✅ **Build completes without warnings**
- ✅ **Local testing successful** (`npm run serve`)

### Production Best Practices

```bash
# Analyze bundle size
npm install -g @next/bundle-analyzer
ANALYZE=true npm run build

# Check for security vulnerabilities  
npm audit

# Optimize dependencies
npm prune --production
```

## 🔄 Continuous Deployment Workflow

### Recommended Git Workflow

```bash
# Development workflow
git checkout -b feature/new-design-section
# Make your changes...
git add .
git commit -m "feat: add new design section with color picker"
git push origin feature/new-design-section

# Create Pull Request on GitHub
# After review and merge to main:
# → Automatic deployment triggers
# → Site updates in ~2-3 minutes
```

### Environment Variables (if needed)

For sensitive configuration, use GitHub Secrets:

1. **Repository Settings** → **Secrets and variables** → **Actions**
2. **Add secret** (e.g., `API_KEY`)
3. **Reference in workflow**:

```yaml
- name: Build
  run: npm run build
  env:
    NODE_ENV: production
    API_KEY: ${{ secrets.API_KEY }}
```

## 📈 Monitoring & Analytics

### Adding Analytics

```typescript
// app/layout.tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `
        }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
```

### Performance Monitoring

- 🔍 **Lighthouse CI** for performance tracking
- 📊 **Web Vitals** monitoring
- 🚨 **Error tracking** with Sentry (optional)

## ✅ Deployment Success Checklist

After deployment, verify:

- [ ] **Site loads** at your GitHub Pages URL
- [ ] **Navigation works** (sidebar, tabs, buttons)
- [ ] **Responsive design** functions on mobile/tablet
- [ ] **Assets load correctly** (fonts, icons, images)
- [ ] **Links are functional** (internal navigation)
- [ ] **Performance is acceptable** (< 3s load time)
- [ ] **No console errors** in browser dev tools

## 📞 Support

If you encounter deployment issues:

1. **Check GitHub Actions logs** in your repository
2. **Verify configuration** against this guide
3. **Test locally** with `npm run build && npm run serve`
4. **Review GitHub Pages documentation** for latest updates

---

**🎉 Your Business Design Kit is now live and accessible to the world!**