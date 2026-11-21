# 🚀 Reusable Multi-Page Website Template

A modern, professional, **configuration-driven** multi-page website template. Rebrand it for any enterprise or personal project by editing **one file** — no HTML or CSS knowledge needed.

---

## 📁 Project Structure

```
website-template/
├── index.html              ← Home page (hero + features + CTA)
├── about.html              ← About page (mission, values, team)
├── services.html           ← Services page (detailed cards + process)
├── portfolio.html          ← Portfolio / work showcase
├── testimonials.html       ← Client testimonials
├── contact.html            ← Contact form + info
├── README.md               ← You are here
└── assets/
    ├── css/
    │   └── style.css       ← All styles (edit for deep customization)
    ├── js/
    │   ├── config.js       ← ⭐ EDIT THIS FILE to rebrand everything
    │   └── main.js         ← Rendering engine (auto-builds from config)
    └── images/             ← Drop your logos, photos, etc. here
```

---

## ⚡ Quick Start

1. **Open `index.html`** in any browser — it works immediately.
2. **Edit `assets/js/config.js`** to change brand, colors, content, and links.
3. **Refresh the browser** — done!

---

## 🎨 How to Customize

### Change Brand & Colors
```js
brand: { name: "YourCompany", logo: "assets/images/logo.png" },
theme: { primary: "#0EA5E9", accent: "#F97316" },
```

### Change Navigation
```js
navigation: [
  { text: "Home",     href: "index.html" },
  { text: "About",    href: "about.html" },
  { text: "Services", href: "services.html" },
  // Add or remove pages here
],
```

### Add a New Page
1. Copy any inner page HTML (e.g. `about.html`)
2. Change the `id` on the content section
3. Add a render function in `main.js` (or reuse existing ones)
4. Add the page to `config.navigation`

---

## 📋 Creating a Copy for a New Client

1. **Duplicate** the entire `website-template/` folder
2. **Edit `config.js`** with the new brand's info
3. **Replace images** in `assets/images/`
4. Done — a completely independent site!

---

## 🌐 Deploy Anywhere

| Platform | How |
|---|---|
| GitHub Pages | Push → Settings → Pages |
| Netlify | Drag & drop |
| Vercel | Import folder |
| Any server | Upload via FTP |
| Local | Open `index.html` |

---

## ✨ Features

- ✅ **6 Dedicated Pages** — Home, About, Services, Portfolio, Testimonials, Contact
- ✅ **Dual-Mode Direct Navigation**:
  - **Desktop Navbar**: Pill-shaped links with active page highlighting & quick CTA button
  - **Animated Hamburger Menu**: Morphing 3-bar to 'X' icon with smooth slide-out drawer
- ✅ **Interactive Slide-Out Drawer**:
  - Displays all pages with icons and active tags
  - Direct links that immediately navigate to any page
  - Quick contact info & backdrop overlay (closes on outside click or `Esc`)
- ✅ **Configuration-Driven** — add/remove navbar items in [config.js](assets/js/config.js) in seconds
- ✅ **Zero Dependencies** — vanilla JS, CSS, and HTML
- ✅ **Fully Responsive** — automatically switches to the hamburger menu on tablet/mobile screens
- ✅ **Smooth Animations** — scroll-reveal, glassmorphism, hover transitions

---

## 📄 License

Free to use for personal and commercial projects. No attribution required.
