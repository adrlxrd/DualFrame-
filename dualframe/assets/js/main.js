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
  const logoSrc = brand?.logo || 'assets/images/logo-dark.png';
  const logoHTML = `<a href="index.html" class="nav-brand"><img src="${logoSrc}" alt="${brand?.name || 'DUALFRAME'}" style="height:36px; width:auto; display:block;"></a>`;

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
        <a href="index.html" class="drawer-brand" style="text-decoration:none;"><img src="${logoSrc}" alt="${brand?.name || 'DUALFRAME'}" style="height:30px; width:auto; display:block;"></a>
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
      <div class="drawer-footer">
        <p class="drawer-footer-title">Direct Contact</p>
        <a href="mailto:${contact?.email || 'hellodualframemedia@gmail.com'}" class="drawer-contact-item">✉ ${contact?.email || 'hellodualframemedia@gmail.com'}</a>
        <a href="tel:${(contact?.phone || '+91 80974 88190').replace(/[^0-9+]/g, '')}" class="drawer-contact-item">📞 ${contact?.phone || '+91 80974 88190'}</a>
      </div>
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
            ${ct.email   ? `<div class="contact-detail"><div class="detail-icon"><i class="bi bi-envelope-fill" aria-hidden="true"></i></div><span><a href="mailto:${ct.email}">${ct.email}</a></span></div>` : ''}
            ${ct.phone   ? `<div class="contact-detail"><div class="detail-icon"><i class="bi bi-telephone-fill" aria-hidden="true"></i></div><span><a href="tel:${ct.phone.replace(/[^0-9+]/g, '')}">${ct.phone}</a></span></div>` : ''}
          </div>
          <div class="social-links">
            ${(ct.socialLinks || []).map(s =>
              `<a href="${s.url}" class="social-link" title="${s.platform}" aria-label="${s.platform}" target="_blank" rel="noopener noreferrer">${s.svg || `<i class="bi ${s.icon}" aria-hidden="true"></i>`}</a>`
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

  const defaultSocials = [
    {
      platform: "Instagram",
      url: "https://www.instagram.com/hiten_04?jplx=MWtqczdmNG9oNnAxYQ%3D%3D",
      svg: `<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>`
    },
    {
      platform: "Behance",
      url: "https://www.behance.net/hitennirmal1",
      svg: `<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-4.976 3-3.468 0-5.75-2.783-5.75-6.042 0-3.376 2.308-6.083 5.642-6.083 3.42 0 5.358 2.593 5.358 5.766 0 .445-.045.981-.077 1.292h-8.084c.063 1.956 1.341 3.267 3.328 3.267 1.542 0 2.502-.693 3.011-1.2l1.548 1zm-2.883-4.103c-.048-1.554-1.077-2.674-2.613-2.674-1.488 0-2.49 1.054-2.673 2.674h5.286zm-14.843 7.103h-6v-16h6.136c3.218 0 5.166 1.554 5.166 4.198 0 1.63-.872 2.92-2.193 3.513 1.83.606 2.891 2.052 2.891 4.025 0 2.766-2.148 4.264-6 4.264zm-3.158-9.458h3.045c1.479 0 2.373-.679 2.373-1.895 0-1.161-.871-1.776-2.327-1.776h-3.091v3.671zm0 6.643h3.295c1.678 0 2.716-.761 2.716-2.174 0-1.343-1.026-2.094-2.693-2.094h-3.318v4.268z"/></svg>`
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/hiten-nirmal-211536263?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      svg: `<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>`
    },
    {
      platform: "WhatsApp",
      url: "https://wa.me/918097488190",
      svg: `<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>`
    }
  ];
  const socials = (contact?.socialLinks && contact.socialLinks.some(s => s.platform === 'Behance' || s.platform === 'WhatsApp'))
    ? contact.socialLinks
    : defaultSocials;

  e.innerHTML = `
    <div class="container">
      <div class="footer-grid">
        <div class="footer-col">
          <div class="footer-brand">
            <a href="index.html" aria-label="${brand?.name || 'DUALFRAME'}"><img src="${footer?.logo || 'assets/images/logo-light.png'}" alt="${brand?.name || 'DUALFRAME'}" class="footer-logo" style="height:40px; width:auto; display:block;"></a>
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
            <li><span class="footer-contact-icon"><i class="bi bi-envelope-fill" aria-hidden="true"></i></span><a href="mailto:${contact?.email || 'hellodualframemedia@gmail.com'}">${contact?.email || 'hellodualframemedia@gmail.com'}</a></li>
            <li><span class="footer-contact-icon"><i class="bi bi-telephone-fill" aria-hidden="true"></i></span><a href="tel:${(contact?.phone || '+91 80974 88190').replace(/[^0-9+]/g, '')}">${contact?.phone || '+91 80974 88190'}</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4 class="footer-heading">Follow Us</h4>
          <div class="footer-social">
            ${socials.map(s =>
              `<a href="${s.url}" class="footer-social-link" title="${s.platform}" aria-label="${s.platform}" target="_blank" rel="noopener noreferrer">${s.svg || `<i class="bi ${s.icon}" aria-hidden="true"></i>`}</a>`
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
