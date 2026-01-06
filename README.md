# Books By Mandi May

A HackerRank-inspired dark theme website for sci-fi/LitRPG author Mandi May, featuring Matrix-style code rain animations and interactive elements. Perfect for stories about protagonists who can see the universe's code.

## Features

- **Matrix Code Rain Background** - Animated falling code in signature HackerRank green
- **Dark Theme** - Professional dark UI with bright green accents (#00EA64)
- **Interactive Elements**
  - Animated stat counters
  - Typing code animation
  - Glitch effects on hover
  - Smooth scroll animations
  - Fade-in effects for sections
- **Fully Responsive** - Mobile-first design that works on all devices
- **Code-Themed UI** - Terminal-style headers, monospace fonts, syntax-highlighted code windows
- **Easter Eggs** - Konami code and console messages for fellow developers
- **Performance Optimized** - Efficient animations and lazy loading

## Tech Stack

- **Vanilla HTML5** - Clean, semantic markup
- **CSS3** - Modern styling with CSS variables, flexbox, and grid
- **Vanilla JavaScript** - No dependencies, pure ES6+
- **Canvas API** - For Matrix animation

## Quick Start

1. **Open the website:**
   ```bash
   # Navigate to the folder
   cd books-by-mandi-may

   # Open index.html in your browser
   # On Windows:
   start index.html

   # On Mac:
   open index.html

   # On Linux:
   xdg-open index.html
   ```

2. **Customize your content** (see guide below)
3. **Deploy to hosting** (GitHub Pages, Netlify, Vercel)

## Customization Guide

### 1. Basic Information

Edit `index.html` and update:

**Your Name & Branding:**
```html
<!-- Line 18 -->
<span class="logo-bracket">&lt;</span>Mandi May<span class="logo-bracket">/&gt;</span>
```

**Hero Section:**
```html
<!-- Lines 35-40 -->
<h1 class="hero-title">Where Reality Becomes <span class="highlight">Code</span></h1>
<p class="hero-description">
    Blending sci-fi and LitRPG, I write stories where the fabric of reality is just
    another system waiting to be decoded. What happens when you can see the universe's source code?
</p>
```

**Stats Counter (Lines 41-53):**
Update the `data-target` values to reflect your actual progress:
- Chapters written
- Words written
- Books in universe

### 2. About Section

Update lines 103-110 with your actual author bio. Current text is tailored for sci-fi/LitRPG but customize to your style.

### 3. Books Section

The template includes 3 book cards:

**Main Book (Featured):**
```html
<div class="book-card featured">
    <div class="status-badge">In Progress</div>
    <h3 class="book-title">Code of Reality</h3>
    <p class="book-genre">SCI-FI / LITRPG</p>
    <div class="book-stats">
        <span class="stat">🎯 Level: 1</span>
        <span class="stat">📖 Status: Active</span>
    </div>
    <p class="book-description">Your description here...</p>
</div>
```

**Status Badge Options:**
- `<div class="status-badge">` - Green (in progress)
- `<div class="status-badge upcoming">` - Gray (coming soon)
- `<div class="status-badge bonus">` - Purple (bonus content)

**Replace Book Covers:**
Replace the placeholder `<div class="cover-placeholder">` with actual images:
```html
<div class="book-cover">
    <img src="path/to/your/cover.jpg" alt="Book Title" style="width: 100%; height: 100%; object-fit: cover;">
</div>
```

### 4. Contact Information

**Email (Line 240):**
```html
<span>your.email@example.com</span>
```

**Social Links (Lines 299-314):**
Update href attributes with your actual profile URLs:
- Twitter/X
- Discord server
- Reddit community
- Or add your own platforms

### 5. Patreon & Merch Links

**Footer (Lines 288-293):**
```html
<li><a href="YOUR_PATREON_URL" class="patreon-link">
    <span class="link-icon">♥</span> Join me on Patreon
</a></li>
<li><a href="YOUR_MERCH_URL" class="merch-link">
    <span class="link-icon">🛒</span> Shop Merchandise
</a></li>
```

### 6. Color Customization

If you want to adjust the color scheme, edit `styles.css` lines 13-31:

```css
:root {
    --primary-green: #00EA64;     /* Main brand color */
    --green-bright: #39FF14;      /* Bright hover state */
    --green-glow: #00ff41;        /* Glow effect */

    --bg-black: #0a0a0a;          /* Main background */
    --bg-dark: #141414;           /* Section backgrounds */
    --bg-card: #1c1c1c;           /* Card backgrounds */
}
```

## Interactive Features

### Matrix Animation
The falling code background uses the Canvas API. Customize in `script.js` lines 17-50:
- `matrixChars` - Characters to display
- `fontSize` - Size of characters
- Speed and density of drops

### Stat Counters
Automatically animate when hero section scrolls into view. Edit target values in HTML `data-target` attributes.

### Glitch Effect
Hover over book cover text to see the glitch effect. Customizable in `script.js` lines 303-328.

### Easter Eggs
- **Konami Code**: ↑ ↑ ↓ ↓ ← → ← → B A (unlocks page flash effect)
- **Console Messages**: Open browser console to see themed messages

## Setting Up Contact Form

The form currently simulates submission. To make it functional:

### Option 1: Formspree (Recommended - Easiest)

1. Sign up at [Formspree.io](https://formspree.io/)
2. Create a new form and get your endpoint
3. Edit `script.js` around line 267:

```javascript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
});
```

### Option 2: Netlify Forms

1. Deploy to Netlify
2. Add `netlify` attribute to form in `index.html` line 249:
```html
<form class="contact-form" id="contactForm" netlify>
```

### Option 3: EmailJS

1. Sign up at [EmailJS.com](https://www.emailjs.com/)
2. Follow their JavaScript integration guide
3. Replace form submission code in `script.js`

## Deployment

### GitHub Pages (Free)

```bash
# Initialize git repository
git init
git add .
git commit -m "Initial commit - Books By Mandi May website"

# Create GitHub repo and push
git remote add origin https://github.com/yourusername/books-by-mandi-may.git
git branch -M main
git push -u origin main

# Enable GitHub Pages
# Go to Settings > Pages
# Select main branch
# Your site will be live at https://yourusername.github.io/books-by-mandi-may
```

### Netlify (Free)

1. Drag and drop the `books-by-mandi-may` folder to [Netlify](https://app.netlify.com/drop)
2. Or connect your GitHub repository for automatic deployments
3. Site will be live instantly with a random URL (can customize)

### Vercel (Free)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd books-by-mandi-may
vercel

# Follow the prompts
```

## File Structure

```
books-by-mandi-may/
├── index.html          # Main HTML structure
├── styles.css          # All styling and animations
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## Performance Tips

1. **Optimize Images**: Compress book covers before uploading (use TinyPNG or similar)
2. **Lazy Loading**: Already implemented for animations
3. **Caching**: Add meta tags for browser caching
4. **CDN**: Use a CDN if deploying large image files

## Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## SEO Optimization

Add these meta tags to `<head>` in `index.html`:

```html
<meta name="description" content="Mandi May - Sci-fi/LitRPG author writing about protagonists who can see the universe's code">
<meta name="keywords" content="sci-fi, litrpg, system apocalypse, progression fantasy, mandi may">
<meta name="author" content="Mandi May">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://mandimay.com/">
<meta property="og:title" content="Mandi May - Sci-Fi Author">
<meta property="og:description" content="Sci-fi/LitRPG author writing about protagonists who can see the universe's code">
<meta property="og:image" content="https://mandimay.com/preview.jpg">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="https://mandimay.com/">
<meta property="twitter:title" content="Mandi May - Sci-Fi Author">
<meta property="twitter:description" content="Sci-fi/LitRPG author writing about protagonists who can see the universe's code">
<meta property="twitter:image" content="https://mandimay.com/preview.jpg">
```

## Adding Google Analytics

```html
<!-- Add before closing </head> tag -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## Customization Ideas

### Add a Blog Section
Create a new section after books to showcase your latest blog posts or chapters.

### Newsletter Integration
Add MailChimp, ConvertKit, or similar newsletter signup form.

### Reading Progress Bar
Show chapter progress or writing milestones with a progress bar.

### Character Database
Add a section showcasing main characters with their stats (perfect for LitRPG).

### World Map
Interactive map of your story universe.

## Troubleshooting

**Matrix animation not showing:**
- Check browser console for errors
- Ensure `script.js` is loaded properly
- Canvas may not work in very old browsers

**Animations lagging:**
- Reduce matrix animation complexity in `script.js`
- Consider disabling on mobile devices

**Form not submitting:**
- Check that you've integrated a form service (Formspree, etc.)
- Verify network requests in browser dev tools

## Support & Community

For bugs or feature requests related to this template, you can:
- Open an issue on the repository
- Fork and customize for your needs
- Share improvements with the community

## Credits & Inspiration

- Design inspired by [HackerRank](https://www.hackerrank.com/)
- Matrix animation inspired by "The Matrix" (1999)
- Built for authors writing progression fantasy and LitRPG

## License

This template is free to use for personal and commercial projects. Attribution appreciated but not required.

---

**Built with `<code/>` and imagination**

*// The universe is listening.*
