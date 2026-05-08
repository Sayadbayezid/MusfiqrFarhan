# DNS Configuration Guide for Hostinger

## Problem: CNAME Record Error

**Error Message:** "DNS resource record is not valid or conflicts with another resource record"

**Cause:** You likely have an A record for `www` that conflicts with the CNAME record.

---

## ✅ Solution: Use A Records Instead of CNAME

### Step 1: Remove Existing Records
1. Go to Hostinger Dashboard
2. Click on your domain: `musfiqrfarhan.blog`
3. Go to **DNS/Nameservers** section
4. **Delete** any existing `www` records (A records or CNAME)
5. **Delete** any existing `@` (root) records if they exist

### Step 2: Add A Records for GitHub Pages

Add these **A records** pointing to GitHub Pages:

| Name | Type | Value | TTL |
|------|------|-------|-----|
| @ | A | 185.199.108.153 | 3600 |
| @ | A | 185.199.109.153 | 3600 |
| @ | A | 185.199.110.153 | 3600 |
| @ | A | 185.199.111.153 | 3600 |
| www | CNAME | sayadbayezid.github.io | 3600 |

### Step 3: Verify Configuration

After adding records, wait 5-15 minutes for DNS propagation, then check:

```bash
# Check A records
nslookup musfiqrfarhan.blog

# Check www CNAME
nslookup www.musfiqrfarhan.blog

# Should return:
# musfiqrfarhan.blog → 185.199.108.153 (or other GitHub IP)
# www.musfiqrfarhan.blog → sayadbayezid.github.io
```

---

## Alternative: Use Hostinger Nameservers

If A records don't work, use Hostinger's nameservers:

1. Go to Hostinger Dashboard
2. Click your domain
3. Go to **Nameservers**
4. Change to Hostinger nameservers:
   - `ns1.hostinger.com`
   - `ns2.hostinger.com`
   - `ns3.hostinger.com`
   - `ns4.hostinger.com`

5. Then add CNAME record:
   - **Name:** www
   - **Type:** CNAME
   - **Value:** sayadbayezid.github.io
   - **TTL:** 3600

---

## Step-by-Step in Hostinger

### For A Records:

1. **Login to Hostinger**
2. **Select your domain:** musfiqrfarhan.blog
3. **Go to DNS Zone Editor** (or DNS Records)
4. **Delete existing www records**
5. **Add A Records:**
   - Click "Add Record"
   - Type: A
   - Name: @ (or leave blank)
   - Value: 185.199.108.153
   - TTL: 3600
   - Click Save
   
6. **Repeat for other 3 GitHub IPs:**
   - 185.199.109.153
   - 185.199.110.153
   - 185.199.111.153

7. **Add CNAME for www:**
   - Click "Add Record"
   - Type: CNAME
   - Name: www
   - Value: sayadbayezid.github.io
   - TTL: 3600
   - Click Save

### For CNAME Only (if A records fail):

1. **Delete all existing records** for the domain
2. **Add only one CNAME record:**
   - Name: www
   - Type: CNAME
   - Value: sayadbayezid.github.io
   - TTL: 3600

---

## Common Issues & Solutions

### Issue 1: "CNAME conflicts with another record"
**Solution:** Delete the A record for `www` before adding CNAME

### Issue 2: "Cannot add CNAME to root (@)"
**Solution:** Use A records for root (@), CNAME only for www

### Issue 3: "DNS not resolving after 1 hour"
**Solution:** 
- Clear browser cache
- Try different DNS: `8.8.8.8` or `1.1.1.1`
- Check if TTL has expired (usually 3600 seconds = 1 hour)

### Issue 4: "Site shows Hostinger default page"
**Solution:** 
- Make sure GitHub Pages is enabled in repository settings
- Verify CNAME file exists in repository
- Check if custom domain is set in GitHub Pages settings

---

## Verification Checklist

- [ ] Deleted old DNS records
- [ ] Added 4 A records for GitHub IPs
- [ ] Added CNAME record for www
- [ ] TTL set to 3600
- [ ] Waited 5-15 minutes for propagation
- [ ] DNS resolves correctly
- [ ] Website loads at www.musfiqrfarhan.blog
- [ ] HTTPS certificate issued

---

## GitHub Pages Configuration

Also verify in GitHub:

1. Go to repository: https://github.com/Sayadbayezid/MusfiqrFarhan
2. Click **Settings** → **Pages**
3. Verify:
   - Source: Deploy from a branch
   - Branch: main
   - Folder: root
   - Custom domain: www.musfiqrfarhan.blog
   - Enforce HTTPS: ✅ Checked

---

## Expected Timeline

| Step | Time |
|------|------|
| Add DNS records | Immediate |
| DNS propagation | 5-15 minutes |
| HTTPS certificate | 5-10 minutes after DNS |
| Website accessible | 15-30 minutes total |

---

## Support

If DNS still doesn't work:
1. Contact Hostinger support with error message
2. Provide your domain: musfiqrfarhan.blog
3. Ask them to verify A records don't conflict with CNAME
4. Request manual DNS configuration if needed

---

**Last Updated:** May 8, 2026

**Your website will be live at:** https://www.musfiqrfarhan.blog 🎉
