# 🚀 GitHub Pages Deployment Checklist

Follow these steps to deploy your Grid & Layout System to GitHub Pages.

## ✅ Pre-Deployment Checklist

- [ ] All code is committed and working locally
- [ ] `npm run build` completes successfully
- [ ] `npm run preview` shows the site working correctly
- [ ] Repository name is `VES` (or `vite.config.ts` base path is updated)

## 📋 Step-by-Step Deployment Guide

### Step 1: Push to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial commit - Interactive Grid & Layout System"

# Add your GitHub repository as remote
git remote add origin https://github.com/larasmdev/VES.git

# Push to main branch
git push -u origin main
```

### Step 2: Configure GitHub Pages

1. Go to your repository: [https://github.com/larasmdev/VES](https://github.com/larasmdev/VES)
2. Click on **Settings** (top navigation)
3. In the left sidebar, click **Pages**
4. Under **Build and deployment**:
   - **Source**: Select **GitHub Actions**
   - You should see "Your site is live at https://larasmdev.github.io/VES/"

### Step 3: Monitor Deployment

1. Go to the **Actions** tab in your repository
2. You should see a workflow run called "Deploy to GitHub Pages"
3. Click on it to see the progress
4. Wait for both the "build" and "deploy" jobs to complete (green checkmarks)

### Step 4: Verify Deployment

1. Once the workflow completes, visit: [https://larasmdev.github.io/VES/](https://larasmdev.github.io/VES/)
2. Your interactive grid system should be live!

## 🗑️ Clean Up Conflicting Workflows (If Needed)

If you see errors about multiple workflows, delete the auto-generated ones:

### Via GitHub Web Interface:

1. Go to your repository
2. Navigate to `.github/workflows/` folder
3. Delete these files if they exist:
   - `jekyll-gh-pages.yml`
   - `static.yml`
4. Keep only `deploy.yml`

### Via Command Line:

```bash
# Navigate to your repository
cd /path/to/VES

# Check what workflow files exist
ls -la .github/workflows/

# Remove conflicting files (if they exist)
rm .github/workflows/jekyll-gh-pages.yml
rm .github/workflows/static.yml

# Commit and push
git add .
git commit -m "Remove conflicting workflow files"
git push origin main
```

## 🔄 Updating Your Live Site

After the initial deployment, updating is simple:

```bash
# Make your changes to the code
# ...

# Commit your changes
git add .
git commit -m "Update: description of your changes"

# Push to GitHub
git push origin main

# GitHub Actions will automatically rebuild and redeploy!
```

## ⚠️ Common Issues & Solutions

### Issue: Deployment workflow fails

**Solution:**
- Check the Actions tab for error details
- Ensure `package.json` has all dependencies
- Verify Node.js version is 18

### Issue: Site shows 404 error

**Solution:**
- Check that `vite.config.ts` has `base: '/VES/'`
- Verify GitHub Pages is set to use GitHub Actions
- Wait a few minutes after deployment completes

### Issue: Site loads but shows blank page

**Solution:**
- Open browser console (F12) and check for errors
- Verify all imports are using correct paths
- Check that `.nojekyll` file exists in `public` folder

### Issue: Assets not loading (images, icons, etc.)

**Solution:**
- Ensure all asset paths are relative, not absolute
- Verify the `base` path in `vite.config.ts` is correct
- Check the browser console for 404 errors on assets

### Issue: Multiple workflow files causing conflicts

**Solution:**
- Delete all workflow files except `deploy.yml`
- Only GitHub-generated files should be deleted:
  - `jekyll-gh-pages.yml`
  - `static.yml`
  - Any other `.yml` files you didn't create

## 🎉 Success Indicators

You'll know the deployment was successful when:

- ✅ The Actions workflow shows green checkmarks
- ✅ The GitHub Pages settings show "Your site is live"
- ✅ You can access https://larasmdev.github.io/VES/ and see your app
- ✅ All interactions work (buttons, hover effects, toasts)
- ✅ The grid system is fully interactive

## 📞 Need Help?

If you encounter issues:

1. Check the **Actions** tab for detailed error logs
2. Review the **Issues** section of this repository
3. Ensure all files in this checklist are properly configured

## 🎨 Customization for Other Repositories

If you want to use this setup for a different repository:

1. Update repository name in `vite.config.ts`:
   ```ts
   base: '/your-new-repo-name/'
   ```

2. Update the README.md with your new repository URL

3. Push to your new repository and follow the same steps above

---

**Happy Deploying! 🚀**
