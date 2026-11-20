/**
 * ============================================================
 *  SITE ENGINE — Renders every page from SITE_CONFIG
 * ============================================================
 *  Detects which page it's on by checking for element IDs,
 *  then renders only the relevant sections.
 */

document.addEventListener("DOMContentLoaded", () => {
  const C = window.SITE_CONFIG || {};
  applyTheme(C.theme);
  renderNavbar(C.brand, C.navigation, C.navCTA, C.contact);
  renderFooter(C.footer, C.brand, C.navigation, C.contact);

  // Page-specific rendering
  if (el('hero'))              renderHero(C.hero);
  if (el('home-features'))     renderHomeFeatures(C.homeFeatures);
  if (el('home-cta'))          renderHomeCTA(C.homeCTA);
  if (el('about-content'))     renderAboutPage(C.about);
  if (el('services-content'))  renderServicesPage(C.services);
  if (el('portfolio-content')) renderPortfolioPage(C.portfolio);
  if (el('testimonials-content')) renderTestimonialsPage(C.testimonials);
  if (el('contact-content'))   renderContactPage(C.contact);

  initScrollEffects();
  initMobileMenu();
  highlightCurrentNav();
});

function el(id) { return document.getElementById(id); }

/* ── Theme ───────────────────────────────────────────────── */
function applyTheme(t) {
  if (!t) return;
  const r = document.documentElement.style;
  const map = {
    primary:'--color-primary', primaryDark:'--color-primary-dark',
    accent:'--color-accent', textDark:'--color-text-dark',
    textLight:'--color-text-light', bgLight:'--color-bg-light',
    bgAlt:'--color-bg-alt', bgDark:'--color-bg-dark'
  };
  Object.entries(map).forEach(([k,v]) => { if (t[k]) r.setProperty(v, t[k]); });
}

/* ── Navbar ──────────────────────────────────────────────── */
function renderNavbar(brand, navItems, navCTA, contact) {
  const nav = el('navbar');
  if (!nav) return;
  const logoHTML = brand?.logo
    ? `<a href="index.html" class="nav-brand"><img src="${brand.logo}" alt="${brand.name}" style="height:38px"></a>`
    : `<a href="index.html" class="nav-brand"><i class="bi bi-stars brand-badge" aria-hidden="true"></i> ${brand?.name || 'Brand'}</a>`;

  const ctaBtn = navCTA
    ? `<a href="${navCTA.href}" class="btn btn-sm btn-primary nav-cta-btn">${navCTA.text}</a>`
    : '';

  nav.innerHTML = `
    <div class="container nav-container">
      ${logoHTML}

      <!-- DESKTOP NAVBAR: Visible on Desktop, Hidden on Phone -->
      <nav class="nav-desktop" id="navDesktop" aria-label="Desktop Navigation">
        <ul class="nav-menu">
          ${(navItems || []).map(n => `
            <li class="nav-item">
              <a href="${n.href}" class="nav-link">
                ${n.text}
              </a>
            </li>
          `).join('')}
        </ul>
      </nav>

      <div class="nav-actions">
        ${ctaBtn}
        <!-- PHONE HAMBURGER BUTTON: Hidden on Desktop, Visible on Phone -->
        <button class="nav-toggle hamburger-btn" id="navToggle" aria-label="Toggle navigation menu" aria-expanded="false">
          <span class="bar bar-1"></span>
          <span class="bar bar-2"></span>
          <span class="bar bar-3"></span>
        </button>
      </div>
    </div>

    <!-- PHONE NAVIGATION DRAWER: Slid open by Hamburger button -->
    <div class="nav-overlay" id="navOverlay"></div>
    <aside class="nav-drawer" id="navDrawer" aria-label="Mobile Navigation">
      <div class="drawer-header">
        <span class="drawer-brand">${brand?.name || 'Menu'}</span>
        <button class="drawer-close" id="drawerClose" aria-label="Close menu">&times;</button>
      </div>
      <nav class="drawer-links">
        ${(navItems || []).map(n => `
          <a href="${n.href}" class="drawer-link-item">
            <span class="drawer-icon">${n.icon || '•'}</span>
            <span class="drawer-text">${n.text}</span>
            <span class="drawer-arrow">→</span>
          </a>`).join('')}
      </nav>
      ${navCTA ? `
      <div class="drawer-cta">
        <a href="${navCTA.href}" class="btn btn-primary" style="width:100%">${navCTA.text}</a>
      </div>` : ''}
      ${contact?.email || contact?.phone ? `
      <div class="drawer-footer">
        <p class="drawer-footer-title">Direct Contact</p>
        ${contact.email ? `<a href="mailto:${contact.email}" class="drawer-contact-item">✉ ${contact.email}</a>` : ''}
        ${contact.phone ? `<a href="tel:${contact.phone}" class="drawer-contact-item">📞 ${contact.phone}</a>` : ''}
      </div>` : ''}
    </aside>`;
}

function highlightCurrentNav() {
  const currentPath = location.pathname.split('/').pop().toLowerCase() || 'index.html';
  document.querySelectorAll('.nav-link, .drawer-link-item').forEach(a => {
    const target = a.getAttribute('href').split('/').pop().toLowerCase();
    if (target === currentPath) {
      a.classList.add('active');
    } else {
      a.classList.remove('active');
    }
  });
}

/* ── Hero (Home only) ────────────────────────────────────── */
function renderHero(hero) {
  const e = el('hero');
  if (!e || !hero) return;
  if (hero.backgroundImage) {
    e.style.backgroundImage = `linear-gradient(rgba(0,0,0,.55),rgba(0,0,0,.55)), url('${hero.backgroundImage}')`;
    e.style.backgroundSize = 'cover'; e.style.backgroundPosition = 'center';
  }
  e.innerHTML = `
    <div class="container">
      <div class="hero-content">
        <p class="hero-eyebrow"><span></span> Video Production · Photography · Social Media</p>
        <h1>${hero.headline}</h1>
        <p>${hero.subheadline}</p>
        <div class="hero-buttons">
          ${hero.ctaPrimary ? `<a href="${hero.ctaPrimary.href}" class="btn btn-primary">${hero.ctaPrimary.text}</a>` : ''}
          ${hero.ctaSecondary ? `<a href="${hero.ctaSecondary.href}" class="btn btn-secondary">${hero.ctaSecondary.text}</a>` : ''}
        </div>
      </div>
      <div class="hero-camera" aria-hidden="true">
        <div class="camera-glow"></div>
        <div class="camera-wrapper">
          <img src="assets/images/hero-camera.png" alt="Vintage Silver and Black Rangefinder Cinema Camera" class="camera-image" width="720" height="580">
        </div>
      </div>
    </div>
    <div class="hero-ticker" aria-hidden="true">
      <div class="ticker-track">
        <span>Dual Frame Media · You Dream It · We Frame It · Creative Media ·</span>
        <span>Dual Frame Media · You Dream It · We Frame It · Creative Media ·</span>
      </div>
    </div>`;
}

/* ── Home Features (Home only) ───────────────────────────── */
function renderHomeFeatures(hf) {
  const e = el('home-features');
  if (!e || !hf) return;
  e.innerHTML = `
    <div class="container">
      <div class="section-header reveal"><h2>${hf.title}</h2><p>${hf.subtitle}</p></div>
      <div class="features-grid">
        ${(hf.items || []).map(f => `
          <a href="${f.link || '#'}" class="feature-card reveal">
            <div class="feature-icon">${f.icon}</div>
            <h3>${f.title}</h3>
            <p>${f.description}</p>
            <span class="feature-link">Learn more →</span>
          </a>`).join('')}
      </div>
    </div>`;
}

/* ── Home CTA Banner (Home only) ─────────────────────────── */
function renderHomeCTA(cta) {
  const e = el('home-cta');
  if (!e || !cta) return;
  e.innerHTML = `
    <div class="container">
      <div class="cta-banner reveal">
        <h2>${cta.headline}</h2>
        <p>${cta.subheadline}</p>
        ${cta.button ? `<a href="${cta.button.href}" class="btn btn-primary">${cta.button.text}</a>` : ''}
      </div>
    </div>`;
}

/* ── About Page ──────────────────────────────────────────── */
function renderAboutPage(about) {
  const e = el('about-content');
  if (!e || !about) return;
  e.innerHTML = `
    <div class="container">
      <!-- Intro -->
      <div class="about-intro reveal">
        <h2>${about.title}</h2>
        <p class="about-lead">${about.description}</p>
      </div>

      <!-- Mission & Vision -->
      <div class="mv-grid">
        ${about.mission ? `
        <div class="mv-card reveal">
          <h3>${about.mission.title}</h3>
          <p>${about.mission.description}</p>
        </div>` : ''}
        ${about.vision ? `
        <div class="mv-card reveal">
          <h3>${about.vision.title}</h3>
          <p>${about.vision.description}</p>
        </div>` : ''}
      </div>

      <!-- Values -->
      ${about.values ? `
      <div class="values-section">
        <h2 class="section-title reveal">Our Values</h2>
        <div class="values-grid">
          ${about.values.map(v => `
            <div class="value-card reveal">
              <div class="value-icon">${v.icon}</div>
              <h3>${v.title}</h3>
              <p>${v.description}</p>
            </div>`).join('')}
        </div>
      </div>` : ''}

      <!-- Stats -->
      <div class="stats-grid">
        ${(about.stats || []).map(s => `
          <div class="stat-card reveal">
            <div class="stat-value">${s.value}</div>
            <div class="stat-label">${s.label}</div>
          </div>`).join('')}
      </div>

      <!-- Team -->
      ${about.team ? `
      <div class="team-section">
        <h2 class="section-title reveal">Meet the Team</h2>
        <div class="team-grid">
          ${about.team.map(m => {
            const initials = m.name.split(' ').map(w => w[0]).join('');
            return `
            <div class="team-card reveal">
              ${m.avatar
                ? `<img src="${m.avatar}" alt="${m.name}" class="team-avatar">`
                : `<div class="team-avatar-placeholder">${initials}</div>`}
              <h4>${m.name}</h4>
              <span>${m.role}</span>
            </div>`;
          }).join('')}
        </div>
      </div>` : ''}
    </div>`;
}

/* ── Services Page ───────────────────────────────────────── */
function renderServicesPage(svc) {
  const e = el('services-content');
  if (!e || !svc) return;
  e.innerHTML = `
    <div class="container">
      <div class="services-grid-full">
        ${(svc.items || []).map(s => `
          <div class="service-card-full reveal">
            <div class="service-icon-large">${s.icon}</div>
            <div class="service-body">
              <h3>${s.title}</h3>
              <p>${s.description}</p>
              ${s.features ? `
              <ul class="service-features">
                ${s.features.map(f => `<li>✓ ${f}</li>`).join('')}
              </ul>` : ''}
            </div>
          </div>`).join('')}
      </div>

      ${svc.process ? `
      <div class="process-section">
        <h2 class="section-title reveal">${svc.process.title}</h2>
        <div class="process-grid">
          ${svc.process.steps.map(s => `
            <div class="process-step reveal">
              <div class="process-number">${s.number}</div>
              <h3>${s.title}</h3>
              <p>${s.description}</p>
            </div>`).join('')}
        </div>
      </div>` : ''}
    </div>`;
}

/* ── Portfolio Page ──────────────────────────────────────── */
function renderPortfolioPage(pf) {
  const e = el('portfolio-content');
  if (!e || !pf) return;
  e.innerHTML = `
    <div class="container">
      <div class="portfolio-grid">
        ${(pf.items || []).map(item => `
          <a href="${item.link || '#'}" class="portfolio-card reveal">
            <div class="portfolio-image">
              ${item.image ? `<img src="${item.image}" alt="${item.title}">` : '📁'}
            </div>
            <div class="card-body">
              <div class="card-category">${item.category}</div>
              <h3>${item.title}</h3>
              <p>${item.description}</p>
            </div>
          </a>`).join('')}
      </div>
    </div>`;
}

/* ── Testimonials Page ───────────────────────────────────── */
function renderTestimonialsPage(test) {
  const e = el('testimonials-content');
  if (!e || !test) return;
  e.innerHTML = `
    <div class="container">
      <div class="testimonials-grid">
        ${(test.items || []).map(t => {
          const initials = t.author.split(' ').map(w => w[0]).join('');
          const avatarHTML = t.avatar
            ? `<img src="${t.avatar}" alt="${t.author}" class="testimonial-avatar">`
            : `<div class="testimonial-avatar">${initials}</div>`;
          return `
            <div class="testimonial-card reveal">
              <blockquote>${t.quote}</blockquote>
              <div class="testimonial-author">
                ${avatarHTML}
                <div class="author-info">
                  <strong>${t.author}</strong>
                  <span>${t.role}</span>
                </div>
              </div>
            </div>`;
        }).join('')}
      </div>
    </div>`;
}

/* ── Contact Page ────────────────────────────────────────── */
function renderContactPage(ct) {
  const e = el('contact-content');
  if (!e || !ct) return;
  e.innerHTML = `
    <div class="container">
      <div class="contact-grid">
        <div class="contact-info reveal">
          <h3>Let's Connect</h3>
          <p>Whether you have a question, a project idea, or just want to say hello — we'd love to hear from you.</p>
          <div class="contact-details">
            ${ct.email   ? `<div class="contact-detail"><div class="detail-icon"><i class="bi bi-envelope-fill" aria-hidden="true"></i></div><span>${ct.email}</span></div>` : ''}
            ${ct.phone   ? `<div class="contact-detail"><div class="detail-icon"><i class="bi bi-telephone-fill" aria-hidden="true"></i></div><span>${ct.phone}</span></div>` : ''}
            ${ct.address ? `<div class="contact-detail"><div class="detail-icon"><i class="bi bi-geo-alt-fill" aria-hidden="true"></i></div><span>${ct.address}</span></div>` : ''}
          </div>
          <div class="social-links">
            ${(ct.socialLinks || []).map(s =>
              `<a href="${s.url}" class="social-link" title="${s.platform}" aria-label="${s.platform}" target="_blank" rel="noopener"><i class="bi ${s.icon}" aria-hidden="true"></i></a>`
            ).join('')}
          </div>
        </div>
        <form class="contact-form reveal" action="${ct.formAction || '#'}" method="POST">
          <div class="form-row">
            <div class="form-group">
              <label for="name">Full Name</label>
              <input type="text" id="name" name="name" placeholder="John Doe" required>
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" name="email" placeholder="john@example.com" required>
            </div>
          </div>
          <div class="form-group">
            <label for="subject">Subject</label>
            <input type="text" id="subject" name="subject" placeholder="Project Inquiry">
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" name="message" placeholder="Tell us about your project…" required></textarea>
          </div>
          <button type="submit" class="btn btn-primary" style="width:100%">Send Message</button>
        </form>
      </div>
      ${ct.mapEmbed ? `<div class="map-embed reveal"><iframe src="${ct.mapEmbed}" width="100%" height="400" style="border:0;border-radius:var(--radius);margin-top:60px;" allowfullscreen loading="lazy"></iframe></div>` : ''}
    </div>`;
}

/* ── Footer (Multi-Column) ───────────────────────────────── */
function renderFooter(footer, brand, navItems, contact) {
  const e = el('footer');
  if (!e) return;
  const desc = footer?.description || brand?.tagline || 'Building extraordinary digital experiences.';
  const quickLinks = (navItems || []).slice(0, 6);

  e.innerHTML = `
    <div class="container">
      <div class="footer-grid">
        <div class="footer-col">
          <div class="footer-brand">
            ${brand?.logo
              ? `<img src="${brand.logo}" alt="${brand.name}" style="height:32px">`
              : `<i class="bi bi-stars brand-badge" aria-hidden="true"></i> ${brand?.name || 'Brand'}`}
          </div>
          <p class="footer-desc">${desc}</p>
        </div>
        <div class="footer-col">
          <h4 class="footer-heading">Quick Links</h4>
          <ul class="footer-nav">
            ${quickLinks.map(n => `<li><a href="${n.href}">${n.text}</a></li>`).join('')}
          </ul>
        </div>
        <div class="footer-col">
          <h4 class="footer-heading">Contact</h4>
          <ul class="footer-contact-list">
            ${contact?.email   ? `<li><span class="footer-contact-icon"><i class="bi bi-envelope-fill" aria-hidden="true"></i></span><a href="mailto:${contact.email}">${contact.email}</a></li>` : ''}
            ${contact?.phone   ? `<li><span class="footer-contact-icon"><i class="bi bi-telephone-fill" aria-hidden="true"></i></span><a href="tel:${contact.phone}">${contact.phone}</a></li>` : ''}
            ${contact?.address ? `<li><span class="footer-contact-icon"><i class="bi bi-geo-alt-fill" aria-hidden="true"></i></span><span>${contact.address}</span></li>` : ''}
          </ul>
        </div>
        <div class="footer-col">
          <h4 class="footer-heading">Follow Us</h4>
          <div class="footer-social">
            ${(contact?.socialLinks || []).map(s =>
              `<a href="${s.url}" class="footer-social-link" title="${s.platform}" aria-label="${s.platform}" target="_blank" rel="noopener"><i class="bi ${s.icon}" aria-hidden="true"></i></a>`
            ).join('')}
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <span>${footer?.copyright || `© ${new Date().getFullYear()} ${brand?.name || 'Brand'}. All rights reserved.`}</span>
        <div class="footer-bottom-links">
          ${(footer?.links || []).map(l => `<a href="${l.href}">${l.text}</a>`).join('')}
        </div>
      </div>
    </div>`;
}

/* ── Scroll Effects ──────────────────────────────────────── */
function initScrollEffects() {
  const navbar = el('navbar');
  const backToTop = el('backToTop');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(e => observer.observe(e));

  window.addEventListener('scroll', () => {
    if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 20);
    if (backToTop) backToTop.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });

  if (backToTop) backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ── Mobile Menu & Hamburger Drawer ─────────────────────── */
function initMobileMenu() {
  const toggle = el('navToggle');
  const drawer = el('navDrawer');
  const overlay = el('navOverlay');
  const closeBtn = el('drawerClose');
  if (!toggle || !drawer || !overlay) return;

  function openMenu() {
    toggle.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
    drawer.classList.add('open');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    toggle.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    drawer.classList.remove('open');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    if (drawer.classList.contains('open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      closeMenu();
    });
  }

  overlay.addEventListener('click', closeMenu);

  drawer.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      closeMenu();
    }
  });
}
