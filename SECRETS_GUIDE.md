# Secrets & Environment Variables Guide

This guide explains how to manage sensitive data and environment variables for the Musfiq R. Farhan blog website.

---

## 🔐 Sensitive Information

### Never Commit to Public Repository
- ❌ API keys and tokens
- ❌ Database credentials
- ❌ Admin passwords
- ❌ Google AdSense credentials
- ❌ OAuth tokens
- ❌ Private keys

### Store in Private Repository
- ✅ Use `MusfiqrFarhan-Secrets` private repository
- ✅ Keep `.env` files locally only
- ✅ Use `.env.example` for templates

---

## 📋 Environment Variables

### Setup Instructions

1. **Copy template file**
   ```bash
   cp .env.example .env
   ```

2. **Edit `.env` with your values**
   ```bash
   nano .env
   ```

3. **Never commit `.env` file**
   - `.env` is in `.gitignore`
   - Only commit `.env.example`

### Available Variables

```env
# Google Tag Manager
VITE_GTM_ID=GTM-WJKZBG9Z

# Analytics
VITE_ANALYTICS_ENDPOINT=https://analytics.example.com
VITE_ANALYTICS_WEBSITE_ID=your_website_id

# App Configuration
VITE_APP_ID=musfiq-blog
VITE_APP_TITLE=Musfiq R. Farhan - Blog & Portfolio
VITE_APP_LOGO=https://i.postimg.cc/c1K0NDHT/IMG-2742.jpg

# Admin Configuration
ADMIN_PASSWORD=SmbSmb64

# Google AdSense (Add when approved)
VITE_ADSENSE_CLIENT_ID=ca-pub-xxxxxxxxxxxxxxxx

# Custom Domain
VITE_DOMAIN=www.musfiqrfarhan.blog

# Social Media Links
VITE_INSTAGRAM_URL=https://www.instagram.com/musfiqfarhan
VITE_FACEBOOK_URL=https://www.facebook.com/share/1cQdw7JcMs/
VITE_YOUTUBE_URL=https://youtube.com/@musfiqrfarhan
VITE_IMDB_URL=https://www.imdb.com/name/nm11068428/bio/
VITE_WHATSAPP_URL=https://whatsapp.com/channel/0029VbBdG03HQbS1bTrVHF1X
```

---

## 🔑 Admin Password

### Current Password
- **Password:** Stored in environment variable `VITE_ADMIN_PASSWORD`
- **Location:** `client/src/contexts/AuthContext.tsx` (uses env variable)
- **Never:** Hardcode passwords in public repository

### Change Password
1. Create `.env` file locally (never commit)
2. Add: `VITE_ADMIN_PASSWORD=your-new-password`
3. Restart dev server
4. For production: Use GitHub Secrets or environment variables
5. **Never** commit password to repository

### Security Notes
- ⚠️ Password is hardcoded in frontend (visible in browser)
- ✅ Only for personal blog (not production-grade security)
- 🔒 For production, use backend authentication

---

## 🔑 Google Tag Manager

### Current ID
- **GTM ID:** Stored in environment variable `VITE_GTM_ID`
- **Status:** Active and tracking

### Update GTM ID
1. Create `.env` file locally
2. Add: `VITE_GTM_ID=GTM-XXXXXXXXX`
3. Restart dev server
4. **Never** hardcode GTM ID in public repository

---

## 📊 Google Analytics

### Setup GA4
1. Create Google Analytics 4 property
2. Get your Measurement ID
3. Add to Google Tag Manager:
   - Create new GA4 tag
   - Add Measurement ID
   - Configure triggers

### Environment Variable
```env
VITE_ANALYTICS_WEBSITE_ID=G-XXXXXXXXXX
```

---

## 💳 Google AdSense

### When Approved
1. Get your AdSense Publisher ID
2. Add to `.env`:
   ```env
   VITE_ADSENSE_CLIENT_ID=ca-pub-xxxxxxxxxxxxxxxx
   ```
3. Uncomment in `client/index.html`:
   ```html
   <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR_ADSENSE_ID" crossorigin="anonymous"></script>
   ```

---

## 🔗 Social Media Links

### Update Links
Edit `client/src/components/SeoSchema.tsx`:

```typescript
export const SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/musfiqfarhan',
  facebook: 'https://www.facebook.com/share/1cQdw7JcMs/',
  imdb: 'https://www.imdb.com/name/nm11068428/bio/',
  youtube: 'https://youtube.com/@musfiqrfarhan',
  whatsapp: 'https://whatsapp.com/channel/0029VbBdG03HQbS1bTrVHF1X',
};
```

---

## 🌐 Custom Domain

### CNAME File
- **File:** `CNAME`
- **Content:** `www.musfiqrfarhan.blog`
- **Purpose:** Tells GitHub Pages where to serve the site

### DNS Configuration
1. Go to domain registrar
2. Add DNS records:
   - **Type:** CNAME
   - **Name:** www
   - **Value:** `sayadbayezid.github.io`

3. Or use GitHub's nameservers:
   - `ns-1234.awsdns-12.com`
   - `ns-5678.awsdns-34.org`
   - `ns-9012.awsdns-56.co.uk`
   - `ns-3456.awsdns-78.net`

---

## 📁 Private Repository

### MusfiqrFarhan-Secrets
- **URL:** https://github.com/Sayadbayezid/MusfiqrFarhan-Secrets
- **Access:** Private (only you)
- **Purpose:** Store sensitive files and backups

### What to Store
- Backup of `.env` file
- Database backups
- API credentials
- Private keys
- Configuration files
- Deployment scripts

### How to Use
```bash
# Clone private repo
git clone https://github.com/Sayadbayezid/MusfiqrFarhan-Secrets.git

# Add sensitive files
cp .env MusfiqrFarhan-Secrets/
cd MusfiqrFarhan-Secrets
git add .env
git commit -m "Add environment variables"
git push origin main
```

---

## ✅ Security Checklist

- [ ] `.env` file is in `.gitignore`
- [ ] `.env.example` is committed (without secrets)
- [ ] No API keys in public repository
- [ ] No passwords in commits
- [ ] CNAME file configured
- [ ] GitHub Pages enabled
- [ ] HTTPS enabled
- [ ] Private repository created for secrets
- [ ] Admin password changed from default
- [ ] Google Tag Manager ID updated

---

## 🚀 Deployment Secrets

### GitHub Pages
- No secrets needed for static deployment
- All configuration in `.env.example`

### Environment Variables
- Development: Use local `.env` file
- Production: Use GitHub Secrets (if needed)

### Adding GitHub Secrets
1. Go to repository Settings
2. Click "Secrets and variables" → "Actions"
3. Click "New repository secret"
4. Add secret name and value

---

## 📝 Best Practices

### Do's ✅
- ✅ Use `.env.example` for templates
- ✅ Keep `.env` in `.gitignore`
- ✅ Store secrets in private repository
- ✅ Rotate passwords regularly
- ✅ Use strong passwords
- ✅ Document all environment variables
- ✅ Review commits before pushing

### Don'ts ❌
- ❌ Never commit `.env` file
- ❌ Never hardcode secrets in code
- ❌ Never share passwords in chat
- ❌ Never use weak passwords
- ❌ Never commit API keys
- ❌ Never push to public repo accidentally

---

## 🔄 Updating Secrets

### Update Admin Password
1. Edit `client/src/contexts/AuthContext.tsx`
2. Change `ADMIN_PASSWORD` value
3. Commit and push
4. Redeploy website

### Update GTM ID
1. Edit `client/index.html`
2. Update GTM ID in script
3. Commit and push
4. Redeploy website

### Update Social Links
1. Edit `client/src/components/SeoSchema.tsx`
2. Update `SOCIAL_LINKS` object
3. Commit and push
4. Redeploy website

---

## 📞 Support

For questions about secrets management:
1. Check this guide
2. Review `.env.example` file
3. Check GitHub documentation
4. Contact support

---

**Last Updated:** May 8, 2026  
**Version:** 1.0.0

---

**Remember:** Security is everyone's responsibility! 🔒
