# Grid & Layout System - Interactive Design System

An interactive React-based grid and layout system with comprehensive UI controls and visual feedback.

## 🚀 Live Demo

Visit the live site: [https://larasmdev.github.io/VES/](https://larasmdev.github.io/VES/)

## ✨ Features

- **12-Column Grid System** - Interactive grid visualization with numbered columns
- **Flexible Column Spans** - Buttons to demonstrate 3, 4, 6, and 8 column layouts
- **Responsive Breakpoints** - Mobile, Tablet, Laptop, and Desktop preview cards
- **Gap Spacing Controls** - Adjustable spacing between grid items
- **Alignment Options** - Multiple alignment and distribution controls
- **Interactive Cards** - Sample dashboard components with hover effects
- **Toast Notifications** - Visual feedback for all interactions
- **Smooth Animations** - Scale and transition effects on hover and click

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool
- **Tailwind CSS v4** - Utility-first styling
- **Framer Motion** - Smooth animations
- **Sonner** - Beautiful toast notifications
- **Lucide React** - Modern icon library

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/larasmdev/VES.git

# Navigate to the project
cd VES

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🏗️ Build & Deploy

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview
```

## 🌐 GitHub Pages Deployment

This project is configured to automatically deploy to GitHub Pages when you push to the `main` branch.

### Setup Steps:

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Configure GitHub Pages:**
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - The workflow will automatically build and deploy your site

3. **Wait for deployment:**
   - Check the **Actions** tab to see the deployment progress
   - Once complete, your site will be live at `https://larasmdev.github.io/VES/`

### Important Notes:

- The `base` path in `vite.config.ts` is set to `/VES/` to match your repository name
- If you rename your repository, update the `base` value accordingly
- The `.nojekyll` file ensures GitHub Pages doesn't process the site with Jekyll

## 🗑️ Cleaning Up Conflicting Workflows

If GitHub auto-generated conflicting workflow files, delete them:

1. Go to your repository on GitHub
2. Navigate to `.github/workflows/`
3. Delete these files if they exist:
   - `jekyll-gh-pages.yml`
   - `static.yml`
   - Any other auto-generated workflow files
4. Keep only `deploy.yml`

You can also delete them via command line:

```bash
# Make sure you're in your repository root
cd .github/workflows/

# Remove conflicting files
rm jekyll-gh-pages.yml
rm static.yml

# Commit the changes
git add .
git commit -m "Remove conflicting workflow files"
git push origin main
```

## 📁 Project Structure

```
VES/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── components/
│   ├── figma/                  # Figma-imported components
│   └── ui/                     # UI components library
├── imports/
│   ├── Frame.tsx               # Main grid layout component
│   └── svg-*.ts                # SVG assets
├── public/
│   └── .nojekyll               # Prevents Jekyll processing
├── styles/
│   └── globals.css             # Global styles
├── App.tsx                     # Main application component
├── main.tsx                    # Application entry point
├── index.html                  # HTML template
├── vite.config.ts              # Vite configuration
├── package.json                # Dependencies and scripts
└── README.md                   # This file
```

## 🎨 Customization

### Changing the Base Path

If you deploy to a different repository or custom domain:

1. Open `vite.config.ts`
2. Update the `base` value:
   ```ts
   export default defineConfig({
     base: '/your-repo-name/', // or '/' for custom domain
   })
   ```

### Modifying Styles

- Global styles: Edit `/styles/globals.css`
- Component styles: Edit individual component files in `/components/`
- Tailwind configuration: Modify tokens in `/styles/globals.css`

## 🐛 Troubleshooting

### Deployment Fails

- Check the **Actions** tab for error messages
- Ensure all dependencies are in `package.json`
- Verify Node.js version (should be 18)

### Site Shows 404

- Verify the `base` path in `vite.config.ts` matches your repository name
- Check GitHub Pages settings are configured correctly
- Ensure the deployment workflow completed successfully

### Blank Page After Deployment

- Check browser console for errors
- Verify all imports use correct paths
- Ensure `.nojekyll` file exists in the `public` directory

## 📝 License

This project is part of a portfolio showcase.

## 🙏 Acknowledgments

- Design system imported from Figma
- Built with modern web technologies
- Deployed on GitHub Pages

---

**Made with ❤️ for showcasing interactive design systems**
