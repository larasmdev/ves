# ⚡ Quick Start Guide - Deploy in 5 Minutes

Follow these simple steps to get your Interactive Grid & Layout System live on GitHub Pages.

## 🎯 Before You Start

Make sure you have:
- A GitHub account
- Git installed on your computer
- This project ready to deploy

## 🚀 5-Step Deployment

### Step 1: Test Locally (30 seconds)

```bash
npm install
npm run build
npm run preview
```

Visit http://localhost:4173/VES/ - does it work? ✅ Great, continue!

### Step 2: Push to GitHub (1 minute)

```bash
git init
git add .
git commit -m "Deploy Interactive Grid System"
git branch -M main
git remote add origin https://github.com/larasmdev/VES.git
git push -u origin main
```

### Step 3: Enable GitHub Pages (30 seconds)

1. Go to: https://github.com/larasmdev/VES/settings/pages
2. Under **"Build and deployment"** → **"Source"**
3. Select **"GitHub Actions"**
4. Done! ✅

### Step 4: Wait for Deployment (2-3 minutes)

1. Go to: https://github.com/larasmdev/VES/actions
2. Watch the workflow run (it should complete with green checkmarks)
3. Wait for both "build" and "deploy" jobs to finish

### Step 5: Visit Your Live Site! (5 seconds)

🎉 **Your site is now live at:** https://larasmdev.github.io/VES/

## ⚠️ If You See Errors

### Problem: Multiple workflow files conflict

**Quick Fix:**
1. Go to: https://github.com/larasmdev/VES/tree/main/.github/workflows
2. Delete any files EXCEPT `deploy.yml`
   - Delete `jekyll-gh-pages.yml` if it exists
   - Delete `static.yml` if it exists
3. The workflow will re-run automatically

### Problem: 404 Error on the live site

**Quick Fix:**
1. Open `vite.config.ts`
2. Check that it says `base: '/VES/'`
3. Make sure the repository name is exactly `VES`
4. If you renamed the repo, update the base path to match

### Problem: Blank page after deployment

**Quick Fix:**
1. Open the site in your browser
2. Press F12 to open Developer Tools
3. Check the Console tab for errors
4. Most likely cause: incorrect base path in vite.config.ts

## 🔄 Making Updates Later

After your site is live, updating is super easy:

```bash
# 1. Make your changes to the code

# 2. Commit and push
git add .
git commit -m "Update: describe your changes"
git push origin main

# 3. That's it! GitHub Actions will automatically rebuild and deploy
```

## 📋 Checklist

- [ ] Tested locally with `npm run preview`
- [ ] Pushed code to GitHub
- [ ] Set GitHub Pages source to "GitHub Actions"
- [ ] Workflow completed successfully (green checkmarks)
- [ ] Site is live at https://larasmdev.github.io/VES/
- [ ] All interactive features work (buttons, hover, toasts)

## 🎉 You're Done!

Your interactive grid system is now live and ready to showcase in your portfolio!

## 📚 Need More Details?

- **Detailed Guide:** See `DEPLOYMENT.md`
- **Full Documentation:** See `README.md`
- **Setup Overview:** See `SETUP_SUMMARY.md`

---

**Happy Deploying! 🚀**
