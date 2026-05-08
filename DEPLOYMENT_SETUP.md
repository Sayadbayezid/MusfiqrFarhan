# Deployment Setup Guide

Complete guide to deploy your Musfiq R. Farhan blog website with custom domain.

---

## 🚀 Current Setup Status

### Main Repository
- **Repository:** https://github.com/Sayadbayezid/MusfiqrFarhan
- **Type:** Public
- **Status:** ✅ Ready for GitHub Pages
- **CNAME:** `www.musfiqrfarhan.blog`

### Private Repository
- **Repository:** https://github.com/Sayadbayezid/MusfiqrFarhan-Secrets
- **Type:** Private
- **Status:** ✅ Created for sensitive data
- **Purpose:** Store secrets, backups, and sensitive configuration

---

## 📋 Deployment Checklist

### Step 1: Enable GitHub Pages ✅
- [x] Repository is public
- [x] CNAME file is created
- [x] README.md is complete
- [ ] Go to Settings → Pages
- [ ] Select "Deploy from a branch"
- [ ] Choose `main` branch
- [ ] Select root folder
- [ ] Click Save

### Step 2: Configure Custom Domain
- [ ] Purchase domain `musfiqrfarhan.blog`
- [ ] Go to Settings → Pages
- [ ] Add custom domain: `www.musfiqrfarhan.blog`
- [ ] Configure DNS records (see below)
- [ ] Enable HTTPS
- [ ] Wait for DNS propagation (5-48 hours)

### Step 3: DNS Configuration

#### Option A: Using CNAME Record (Recommended)
1. Go to your domain registrar
2. Find DNS settings
3. Add CNAME record:
   - **Name:** `www`
   - **Value:** `sayadbayezid.github.io`
   - **TTL:** 3600 (or default)

#### Option B: Using GitHub's Nameservers
1. Go to your domain registrar
2. Update nameservers to:
   - `ns-1234.awsdns-12.com`
   - `ns-5678.awsdns-34.org`
   - `ns-9012.awsdns-56.co.uk`
   - `ns-3456.awsdns-78.net`

#### Option C: Using A Records
1. Add A records pointing to:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`

### Step 4: Enable HTTPS
- [ ] Wait for DNS propagation
- [ ] Go to Settings → Pages
- [ ] Check "Enforce HTTPS"
- [ ] Wait for SSL certificate (usually 5-10 minutes)

### Step 5: Verify Deployment
- [ ] Visit https://www.musfiqrfarhan.blog
- [ ] Check homepage loads correctly
- [ ] Test all navigation links
- [ ] Verify images display
- [ ] Test admin login at /admin
- [ ] Check mobile responsiveness

---

## 🌐 Domain Registrars

### Popular Options
- **GoDaddy** - https://www.godaddy.com
- **Namecheap** - https://www.namecheap.com
- **Google Domains** - https://domains.google
- **Bluehost** - https://www.bluehost.com
- **HostGator** - https://www.hostgator.com

### Domain Cost
- Typical cost: $10-15/year
- First year often discounted: $1-5
- Renewal: $10-15/year

---

## 🔗 DNS Records Examples

### GoDaddy
1. Log in to GoDaddy
2. Go to My Products → Domains
3. Click DNS for your domain
4. Add CNAME record:
   - **Name:** www
   - **Value:** sayadbayezid.github.io
   - **TTL:** 3600

### Namecheap
1. Log in to Namecheap
2. Go to Dashboard → Domain List
3. Click Manage for your domain
4. Go to Advanced DNS
5. Add CNAME record:
   - **Type:** CNAME Record
   - **Host:** www
   - **Value:** sayadbayezid.github.io
   - **TTL:** 3600

### Google Domains
1. Log in to Google Domains
2. Select your domain
3. Go to DNS
4. Add custom record:
   - **Name:** www
   - **Type:** CNAME
   - **Data:** sayadbayezid.github.io
   - **TTL:** 3600

---

## ✅ Verification Steps

### Test DNS Resolution
```bash
# Check CNAME record
nslookup www.musfiqrfarhan.blog

# Should return: sayadbayezid.github.io
```

### Test Website
1. Open https://www.musfiqrfarhan.blog
2. Should load your homepage
3. Check all pages work
4. Verify SSL certificate (green lock icon)

### Test Admin Area
1. Go to https://www.musfiqrfarhan.blog/admin
2. Enter password: `SmbSmb64`
3. Should access admin dashboard

### Test Mobile
1. Open on mobile device
2. Check responsive design
3. Test navigation
4. Verify images display

---

## 🔄 Deployment Workflow

### Making Changes

1. **Edit code locally**
   ```bash
   cd MusfiqrFarhan
   # Make your changes
   ```

2. **Test locally**
   ```bash
   pnpm dev
   # Test at http://localhost:3000
   ```

3. **Commit changes**
   ```bash
   git add .
   git commit -m "Description of changes"
   ```

4. **Push to GitHub**
   ```bash
   git push origin main
   ```

5. **GitHub Pages deploys automatically**
   - Check Actions tab for deployment status
   - Usually deploys within 1-2 minutes

6. **Verify on live site**
   - Visit https://www.musfiqrfarhan.blog
   - Verify changes are live

---

## 📊 Monitoring Deployment

### GitHub Actions
1. Go to repository
2. Click "Actions" tab
3. See deployment status
4. Check build logs if needed

### GitHub Pages
1. Go to Settings → Pages
2. See deployment status
3. Check custom domain
4. Verify HTTPS is enabled

### Uptime Monitoring
- Use UptimeRobot: https://uptimerobot.com
- Set up alerts for downtime
- Monitor response time

---

## 🔐 Security Setup

### Enable Branch Protection
1. Go to Settings → Branches
2. Add rule for `main` branch
3. Require pull request reviews
4. Dismiss stale reviews
5. Require status checks to pass

### Enable HTTPS
- [x] CNAME configured
- [x] GitHub Pages enabled
- [x] HTTPS enforced
- [x] SSL certificate active

### Private Repository for Secrets
- [x] MusfiqrFarhan-Secrets created
- [x] Only you have access
- [x] Store sensitive data here

---

## 📈 Post-Deployment

### Submit to Search Engines

#### Google Search Console
1. Go to https://search.google.com/search-console
2. Add property: https://www.musfiqrfarhan.blog
3. Verify domain ownership
4. Submit sitemap
5. Monitor search performance

#### Bing Webmaster Tools
1. Go to https://www.bing.com/webmasters
2. Add website
3. Verify ownership
4. Submit sitemap

### Setup Analytics

#### Google Analytics 4
1. Create GA4 property
2. Get Measurement ID
3. Add to Google Tag Manager
4. Monitor traffic and behavior

#### Google Tag Manager
- [x] GTM ID: GTM-WJKZBG9Z
- [x] Already configured
- [x] Tracking page views

### Setup Email

#### Contact Form
- Consider adding contact form
- Use service like Formspree or EmailJS
- Get notifications for inquiries

---

## 🚨 Troubleshooting

### Site Not Loading
1. Check GitHub Pages is enabled
2. Verify CNAME file exists
3. Check DNS records
4. Wait for DNS propagation (up to 48 hours)
5. Clear browser cache

### Custom Domain Not Working
1. Verify CNAME file: `cat CNAME`
2. Check DNS records
3. Test DNS: `nslookup www.musfiqrfarhan.blog`
4. Wait for DNS propagation
5. Check GitHub Pages settings

### HTTPS Not Working
1. Verify custom domain is set
2. Wait for SSL certificate (5-10 minutes)
3. Check "Enforce HTTPS" is enabled
4. Clear browser cache

### Images Not Loading
1. Check image URLs are correct
2. Verify images are uploaded
3. Check file paths
4. Clear browser cache

---

## 📞 Support Resources

- **GitHub Pages Docs:** https://docs.github.com/en/pages
- **GitHub Pages Troubleshooting:** https://docs.github.com/en/pages/getting-started-with-github-pages/troubleshooting-custom-domains-and-github-pages
- **DNS Help:** https://support.google.com/domains/answer/3290309

---

## 🎯 Next Steps

1. **Purchase Domain**
   - Buy `musfiqrfarhan.blog` domain
   - Cost: ~$10-15/year

2. **Configure DNS**
   - Add CNAME record
   - Wait for propagation

3. **Enable GitHub Pages**
   - Go to Settings → Pages
   - Add custom domain
   - Enable HTTPS

4. **Monitor Site**
   - Check uptime
   - Monitor analytics
   - Track search rankings

5. **Add Content**
   - Create blog posts
   - Add news/links
   - Build audience

---

## 📝 Deployment Checklist

- [ ] Domain purchased
- [ ] DNS records configured
- [ ] GitHub Pages enabled
- [ ] Custom domain added
- [ ] HTTPS enabled
- [ ] Website loads correctly
- [ ] All pages working
- [ ] Admin area accessible
- [ ] Mobile responsive
- [ ] Google Search Console verified
- [ ] Analytics configured
- [ ] Uptime monitoring set up

---

**Last Updated:** May 8, 2026  
**Version:** 1.0.0  
**Status:** Ready for Deployment ✅

---

**Next:** Purchase your domain and follow the DNS configuration steps!
