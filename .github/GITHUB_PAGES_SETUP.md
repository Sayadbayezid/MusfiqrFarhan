# GitHub Pages Live Deployment Guide

**This is a personal blog and portfolio website - NO payment system**

## Quick Setup for GitHub Pages

### Step 1: Enable GitHub Pages
1. Go to: https://github.com/Sayadbayezid/MusfiqrFarhan
2. Click **Settings** → **Pages**
3. Under "Build and deployment":
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **root** (or /)
4. Click **Save**

### Step 2: Add Custom Domain (Optional)
1. In GitHub Pages settings
2. Under "Custom domain": Enter `www.musfiqrfarhan.blog`
3. Click **Save**
4. GitHub will create a CNAME file automatically

### Step 3: Configure DNS (Hostinger)
Add these records in Hostinger DNS:

```
Type: A
Name: @
Value: 185.199.108.153
TTL: 3600

Type: A
Name: @
Value: 185.199.109.153
TTL: 3600

Type: A
Name: @
Value: 185.199.110.153
TTL: 3600

Type: A
Name: @
Value: 185.199.111.153
TTL: 3600

Type: CNAME
Name: www
Value: sayadbayezid.github.io
TTL: 3600
```

### Step 4: Wait for SSL Certificate
- GitHub automatically issues SSL certificate
- Takes 5-10 minutes after DNS propagation
- You'll see green lock 🔒 when ready

### Step 5: Website Goes Live
- https://www.musfiqrfarhan.blog ✅
- https://musfiqrfarhan.blog ✅

---

## Admin Credentials

**Admin Login:** `/admin`
**Password:** Check `.env` file (VITE_ADMIN_PASSWORD)

---

## Features

✅ Blog Management (Create, Edit, Delete, Publish)
✅ News & Links Management
✅ Responsive Design
✅ SEO Optimized
✅ Google Tag Manager
✅ Social Media Links
✅ Privacy Policy
✅ Professional Images

---

## No Payment System

This website:
- ❌ Has NO payment processing
- ❌ Has NO Stripe integration
- ❌ Has NO subscription system
- ❌ Has NO e-commerce features

It's a **pure personal blog and portfolio** for showcasing content.

---

## Local Development

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

---

## Environment Variables

Create `.env` file locally (never commit):

```
VITE_ADMIN_PASSWORD=SmbSmb64
VITE_GTM_ID=GTM-WJKZBG9Z
VITE_APP_TITLE=Musfiq R. Farhan - Blog & Portfolio
VITE_APP_LOGO=https://i.postimg.cc/c1K0NDHT/IMG-2742.jpg
```

---

## Data Storage

All data stored in browser localStorage:
- `blog-posts` - Blog posts
- `news-links` - News/links
- `admin-auth` - Admin session

**Note:** Data is NOT backed up to server. Consider exporting regularly.

---

## Support

For issues:
1. Check GitHub repository issues
2. Review documentation files
3. Check browser console for errors

---

**Website Type:** Personal Blog & Portfolio
**Hosting:** GitHub Pages (Free)
**Domain:** www.musfiqrfarhan.blog
**Status:** ✅ Ready for Production
