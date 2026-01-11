# 📁 Project Structure

Complete file tree for the Interactive Grid & Layout System.

## 🌳 Directory Tree

```
VES/
│
├── 📁 .github/
│   └── 📁 workflows/
│       └── deploy.yml                    # GitHub Actions deployment workflow
│
├── 📁 components/
│   ├── 📁 figma/
│   │   └── ImageWithFallback.tsx        # Protected: Image component with fallback
│   │
│   └── 📁 ui/                           # UI Components Library (shadcn-style)
│       ├── accordion.tsx
│       ├── alert-dialog.tsx
│       ├── alert.tsx
│       ├── aspect-ratio.tsx
│       ├── avatar.tsx
│       ├── badge.tsx
│       ├── breadcrumb.tsx
│       ├── button.tsx
│       ├── calendar.tsx
│       ├── card.tsx
│       ├── carousel.tsx
│       ├── chart.tsx
│       ├── checkbox.tsx
│       ├── collapsible.tsx
│       ├── command.tsx
│       ├── context-menu.tsx
│       ├── dialog.tsx
│       ├── drawer.tsx
│       ├── dropdown-menu.tsx
│       ├── form.tsx
│       ├── hover-card.tsx
│       ├── input-otp.tsx
│       ├── input.tsx
│       ├── label.tsx
│       ├── menubar.tsx
│       ├── navigation-menu.tsx
│       ├── pagination.tsx
│       ├── popover.tsx
│       ├── progress.tsx
│       ├── radio-group.tsx
│       ├── resizable.tsx
│       ├── scroll-area.tsx
│       ├── select.tsx
│       ├── separator.tsx
│       ├── sheet.tsx
│       ├── sidebar.tsx
│       ├── skeleton.tsx
│       ├── slider.tsx
│       ├── sonner.tsx                   # Toast notification component
│       ├── switch.tsx
│       ├── table.tsx
│       ├── tabs.tsx
│       ├── textarea.tsx
│       ├── toggle-group.tsx
│       ├── toggle.tsx
│       ├── tooltip.tsx
│       ├── use-mobile.ts                # Mobile detection hook
│       └── utils.ts                     # Utility functions
│
├── 📁 guidelines/
│   └── Guidelines.md                    # Design guidelines
│
├── 📁 imports/
│   ├── Frame.tsx                        # Main interactive grid layout component
│   └── svg-5uhspcn6q2.ts               # SVG assets from Figma
│
├── 📁 public/
│   └── .nojekyll                        # Prevents GitHub Pages Jekyll processing
│
├── 📁 styles/
│   └── globals.css                      # Global styles & Tailwind CSS
│
├── .gitignore                           # Git ignore rules
├── .nojekyll                            # Root Jekyll prevention
├── App.tsx                              # Main application component
├── Attributions.md                      # Asset attributions
├── DEPLOYMENT.md                        # 📘 Detailed deployment guide
├── index.html                           # HTML entry point
├── main.tsx                             # React entry point
├── package.json                         # Dependencies & scripts
├── PROJECT_STRUCTURE.md                 # 📘 This file
├── QUICKSTART.md                        # 📘 Quick start guide
├── README.md                            # 📘 Main documentation
├── SETUP_SUMMARY.md                     # 📘 Setup summary
├── tsconfig.json                        # TypeScript configuration
├── tsconfig.node.json                   # TypeScript Node configuration
└── vite.config.ts                       # Vite build configuration
```

## 📂 Key Directories Explained

### `.github/workflows/`
Contains GitHub Actions workflows for CI/CD automation.
- **deploy.yml** - Builds and deploys the site to GitHub Pages automatically

### `components/`
React components organized by purpose.
- **figma/** - Components imported from Figma (protected, do not edit)
- **ui/** - Reusable UI component library

### `imports/`
Figma-imported design assets.
- **Frame.tsx** - The main interactive grid system component
- **svg-*.ts** - Vector graphics exported from Figma

### `public/`
Static assets served as-is (not processed by Vite).
- **.nojekyll** - Tells GitHub Pages not to use Jekyll

### `styles/`
Global stylesheets and CSS configurations.
- **globals.css** - Contains Tailwind CSS imports and custom styles

## 📄 Key Files Explained

### Build & Configuration

| File | Purpose |
|------|---------|
| `vite.config.ts` | Vite build tool configuration, sets base path for GitHub Pages |
| `tsconfig.json` | TypeScript compiler options for the app |
| `tsconfig.node.json` | TypeScript options for Node.js/build scripts |
| `package.json` | Project metadata, dependencies, and npm scripts |

### Entry Points

| File | Purpose |
|------|---------|
| `index.html` | HTML template, entry point for Vite |
| `main.tsx` | JavaScript entry point, renders React app |
| `App.tsx` | Main React component, imports and renders Frame.tsx |

### Documentation

| File | Purpose |
|------|---------|
| `README.md` | Comprehensive project documentation |
| `QUICKSTART.md` | 5-minute deployment guide |
| `DEPLOYMENT.md` | Detailed step-by-step deployment instructions |
| `SETUP_SUMMARY.md` | Overview of all configurations |
| `PROJECT_STRUCTURE.md` | This file - explains file structure |

### Git & Deployment

| File | Purpose |
|------|---------|
| `.gitignore` | Specifies files Git should ignore (node_modules, dist, etc.) |
| `.nojekyll` | Prevents GitHub Pages from using Jekyll (root) |
| `public/.nojekyll` | Same, but copied to build output |

## 🎯 Important Files for GitHub Pages

These files are critical for deployment:

1. **.github/workflows/deploy.yml** - Automates build and deployment
2. **vite.config.ts** - Sets `base: '/VES/'` for correct routing
3. **.nojekyll** files - Prevent Jekyll processing
4. **package.json** - Defines build scripts

## 🔒 Protected Files

Do NOT edit these files:
- `components/figma/ImageWithFallback.tsx` - System component

## 🛠️ Build Output

When you run `npm run build`, Vite creates:

```
dist/
├── assets/
│   ├── index-[hash].js       # Bundled JavaScript
│   ├── index-[hash].css      # Bundled CSS
│   └── [other assets]        # Images, fonts, etc.
├── .nojekyll                 # Copied from public/
└── index.html                # Processed HTML
```

This `dist/` folder is what gets deployed to GitHub Pages.

## 📊 File Count Summary

- **Total Components:** 48 UI components
- **Main App Files:** 3 (App.tsx, main.tsx, index.html)
- **Configuration Files:** 5 (vite.config, tsconfig, package.json, etc.)
- **Documentation Files:** 5 (README, guides)
- **Workflow Files:** 1 (deploy.yml)

## 🎨 Component Architecture

```
index.html
  └── main.tsx
      └── App.tsx
          └── Frame.tsx (Interactive Grid System)
              ├── Grid Buttons (1-12)
              ├── Column Span Buttons (3, 4, 6, 8)
              ├── Breakpoint Cards (Mobile, Tablet, Laptop, Desktop)
              ├── Spacing Controls
              ├── Alignment Buttons
              └── Sample Cards (Analytics Dashboard, User Management)
```

## 🔄 Data Flow

1. User interacts with button/card in `Frame.tsx`
2. Event handler triggers
3. Toast notification appears (via Sonner)
4. CSS animations run (via Tailwind + inline styles)
5. Visual feedback displayed

## 📦 Dependencies Overview

### Production Dependencies
- **react** - UI framework
- **react-dom** - React DOM rendering
- **clsx** - Utility for conditional classes

### Development Dependencies
- **vite** - Build tool
- **typescript** - Type checking
- **tailwindcss** - Styling framework
- **@vitejs/plugin-react** - Vite React plugin
- **postcss** - CSS processing
- **autoprefixer** - CSS vendor prefixing

## 🎯 How It All Works Together

1. **Development:**
   - Edit code in `App.tsx` or `imports/Frame.tsx`
   - Run `npm run dev` to see changes live
   - Vite hot-reloads your changes instantly

2. **Building:**
   - Run `npm run build`
   - Vite compiles TypeScript to JavaScript
   - Tailwind CSS generates optimized styles
   - All assets are bundled into `dist/`

3. **Deployment:**
   - Push to GitHub
   - `.github/workflows/deploy.yml` runs automatically
   - Builds the project
   - Uploads `dist/` to GitHub Pages
   - Site goes live!

## 🗺️ Navigation Map

- Need deployment help? → `QUICKSTART.md` or `DEPLOYMENT.md`
- Want project overview? → `README.md`
- Understanding setup? → `SETUP_SUMMARY.md`
- Exploring files? → `PROJECT_STRUCTURE.md` (this file)

---

**Now you know where everything is! 🗺️**
