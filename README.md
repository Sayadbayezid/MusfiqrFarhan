# Musfiq R. Farhan - Blog Platform

A simple, clean blog platform with admin dashboard for managing blog posts.

## Features

✅ **Public Blog Page** - Display published blog posts
✅ **Admin Dashboard** - Write, edit, and delete posts
✅ **User Authentication** - Secure admin login
✅ **Persistent Storage** - All data saved in browser localStorage
✅ **Responsive Design** - Works on all devices
✅ **Categories** - Organize posts by category (Radio, Television, Acting, etc.)

## Getting Started

### 1. Access the Website

- **Public Blog**: `https://sayadbayezid.github.io/MusfiqrFarhan/`
- **Admin Login**: `https://sayadbayezid.github.io/MusfiqrFarhan/admin.html`

### 2. Admin Credentials

- **Username**: `admin`
- **Password**: `password123`

### 3. Create a Blog Post

1. Go to `/admin.html`
2. Login with credentials above
3. Click "+ New Post"
4. Fill in:
   - Title (required)
   - Description (required)
   - Content (required)
   - Category (Radio, Television, Acting, Content Creation, Personal)
   - Check "Publish this post" to make it visible
5. Click "Save Post"
6. Post appears immediately on the blog page

### 4. Edit or Delete Posts

1. In the dashboard, click on any post in the left sidebar
2. Edit the content
3. Click "Update Post" to save changes
4. Click "Delete Post" to remove it

## File Structure

```
docs/
├── index.html          # Main blog page
├── admin.html          # Admin login page
├── dashboard.html      # Admin dashboard
├── style.css           # Styling
├── admin.js            # Authentication logic
├── blog.js             # Blog display logic
├── dashboard.js        # Dashboard functionality
└── .nojekyll           # Disable Jekyll processing
```

## Data Storage

All blog posts are stored in browser's **localStorage**:
- Data persists across page refreshes
- Each browser/device has its own storage
- No backend server required

## Customization

### Change Admin Credentials

Edit `docs/admin.js`:
```javascript
const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = 'password123';
```

### Change Colors

Edit `docs/style.css` - Look for color values like:
```css
background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
```

### Add More Categories

Edit `docs/dashboard.js` - Find the select dropdown and add options:
```html
<option value="New Category">New Category</option>
```

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Deployment

The site is deployed on GitHub Pages. To update:

1. Make changes locally
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Update blog"
   git push origin main
   ```
3. Changes appear live within minutes

## Troubleshooting

**Admin page shows 404**
- Make sure you're accessing `/admin.html` (not just `/admin`)
- Clear browser cache and refresh

**Posts not saving**
- Check if localStorage is enabled in your browser
- Try a different browser
- Clear browser cache

**Can't login**
- Check username and password (case-sensitive)
- Default: `admin` / `password123`

## Support

For issues or questions, create a GitHub issue or contact the author.

---

**Created**: May 8, 2026
**Version**: 1.0.0
