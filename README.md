# Musfiq R. Farhan - Professional Portfolio & Blog

A modern, responsive portfolio website for Musfiq R. Farhan, showcasing his multi-talented career as a Radio Jockey (RJ), actor, and content creator. The site features a professional portfolio, blog section, and integrated Decap CMS for easy content management.

## 🌟 Features

- **Responsive Design**: Mobile-first approach with beautiful layouts on all devices
- **Professional Portfolio**: Showcase of works across radio, television, and digital media
- **Blog Section**: Share stories and insights with integrated Decap CMS
- **Admin Dashboard**: Easy content management with Decap CMS at `/admin`
- **GitHub Pages Ready**: Deployed directly from GitHub with custom domain support
- **SEO Optimized**: Meta tags, Open Graph, and structured data for better search visibility
- **Fast & Lightweight**: Pure HTML, CSS, and JavaScript with no heavy dependencies

## 📁 Project Structure

```
MusfiqrFarhan/
├── docs/                          # GitHub Pages root directory
│   ├── index.html                 # Main portfolio page
│   ├── admin/
│   │   ├── config.yml             # Decap CMS configuration
│   │   └── index.html             # Decap CMS admin interface
│   └── [other pages]
├── assets/
│   ├── css/
│   │   └── style.css              # Main stylesheet
│   ├── js/
│   │   └── main.js                # Main JavaScript file
│   └── images/
│       └── uploads/               # Media uploads folder
├── _posts/                        # Blog posts (Jekyll format)
├── _pages/                        # Additional pages
├── _config.yml                    # Jekyll configuration
└── README.md                      # This file
```

## 🚀 Getting Started

### Prerequisites

- GitHub account
- Git installed on your computer
- Text editor or IDE

### Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Sayadbayezid/MusfiqrFarhan.git
   cd MusfiqrFarhan
   ```

2. **Serve locally (optional):**
   - Use Python: `python -m http.server 8000`
   - Use Node.js: `npx http-server`
   - Open `http://localhost:8000/docs/` in your browser

3. **Edit content:**
   - Edit HTML files in the `docs/` folder
   - Update CSS in `assets/css/style.css`
   - Add JavaScript in `assets/js/main.js`

### Deployment to GitHub Pages

1. **Enable GitHub Pages:**
   - Go to repository Settings → Pages
   - Select "Deploy from a branch"
   - Choose `main` branch and `/docs` folder
   - Click Save

2. **Configure custom domain:**
   - In repository Settings → Pages
   - Add custom domain: `musfiqrfarhan.blog`
   - Update DNS records with your domain registrar
   - Enable HTTPS

3. **Push changes:**
   ```bash
   git add .
   git commit -m "Update portfolio content"
   git push origin main
   ```

## 📝 Content Management

### Using Decap CMS

1. **Access the admin panel:**
   - Navigate to `https://musfiqrfarhan.blog/admin`
   - Log in with your GitHub account

2. **Configure GitHub OAuth:**
   - Create a GitHub OAuth App at: https://github.com/settings/developers
   - Set Authorization callback URL to: `https://api.netlify.com/auth/done`
   - Add Client ID and Client Secret to Netlify

3. **Manage content:**
   - Create and edit blog posts
   - Upload images and media
   - Organize content by categories

### Manual Content Addition

**Add a blog post:**
1. Create a new file in `_posts/` folder
2. Name it: `YYYY-MM-DD-post-title.md`
3. Add frontmatter:
   ```yaml
   ---
   title: "Post Title"
   date: 2026-05-07
   image: "/assets/images/uploads/image.jpg"
   category: "Radio"
   tags: ["tag1", "tag2"]
   ---
   ```
4. Write your content in Markdown
5. Commit and push to GitHub

**Add a project:**
1. Create a new file in `_pages/projects/` folder
2. Add similar frontmatter with project details
3. Include description and images

## 🎨 Customization

### Update Colors

Edit `assets/css/style.css` and modify the CSS variables:

```css
:root {
  --primary: #1e40af;           /* Main brand color */
  --secondary: #f59e0b;         /* Accent color */
  --accent: #8b5cf6;            /* Highlight color */
  /* ... other colors ... */
}
```

### Update Navigation

Edit the navigation links in `docs/index.html`:

```html
<ul class="nav-links">
  <li><a href="#home">Home</a></li>
  <li><a href="#about">About</a></li>
  <!-- Add more links as needed -->
</ul>
```

### Update Social Links

Edit the contact section in `docs/index.html`:

```html
<a href="https://your-facebook-url" class="social-link">f</a>
<a href="https://your-instagram-url" class="social-link">📷</a>
```

## 📊 SEO & Analytics

### Add Google Analytics

1. Get your Google Analytics ID
2. Update `_config.yml`:
   ```yaml
   google_analytics: "YOUR_ANALYTICS_ID"
   ```

### Meta Tags

All important meta tags are included in `docs/index.html`:
- Open Graph tags for social sharing
- Twitter Card tags
- SEO meta descriptions
- Viewport settings for mobile

## 🔧 Troubleshooting

### Site not loading on GitHub Pages

- Verify the `docs/` folder is set as the source in Settings → Pages
- Check that `index.html` exists in the `docs/` folder
- Clear browser cache and hard refresh

### Images not showing

- Ensure image paths are correct (relative to `docs/` folder)
- Check that images are in `assets/images/` folder
- Verify file extensions (.jpg, .png, etc.)

### Admin panel not working

- Verify GitHub OAuth App is configured correctly
- Check that Authorization callback URL is: `https://api.netlify.com/auth/done`
- Ensure you have push access to the repository

## 📚 Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Decap CMS Documentation](https://decapcms.org/docs/)
- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [HTML & CSS Reference](https://developer.mozilla.org/en-US/)

## 📧 Contact & Support

For questions or support, contact: contact@musfiqrfarhan.blog

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Built with passion for Musfiq R. Farhan
- Powered by GitHub Pages and Decap CMS
- Designed for modern web standards

---

**Last Updated:** May 7, 2026
**Version:** 1.0.0
