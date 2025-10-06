import "./styles/index.css";
import "./styles/components/dualBrandLogoMask.css";
import DualBrandLogoMask from "./components/dualBrandLogoMask.js";

const navItems = [
  { label: "Global One", target: "#top" },
  { label: "Ananta", target: "#ananta" },
  { label: "MediCity", target: "#medicity" },
  { label: "Contact", target: "#contact" },
];

const projects = [
  {
    id: "ananta",
    theme: "dark",
    name: "Project Ananta",
    location: "Datia, Madhya Pradesh",
    strapline:
      "A hospitality-led mixed-use district anchored by luxury service apartments and curated retail.",
    stats: [
      { label: "Service Towers", value: "5" },
      { label: "Lifestyle Retail", value: "2 malls + 36 showrooms" },
      { label: "Corporate Tower", value: "1" },
      { label: "Hospitality", value: "24/7 managed operations" },
    ],
    masterplan: {
      blurb:
        "Ananta orchestrates residential, corporate, and retail programmes around a central hospitality core. Residents, business guests, and travellers move through shaded promenades, landscaped podiums, and climate-controlled atria before reaching their destinations.",
      elements: [
        {
          title: "Serviced Apartment Towers A through E",
          copy: "Five signature towers form the residential skyline. Each tower rises from a podium of concierge services, residents' lounge, spa and wellness suites, and rooftop terraces.",
        },
        {
          title: "Corporate Tower",
          copy: "A glass and brass landmark with column-free office plates, executive club floors, and private arrival court for investors and anchor tenants.",
        },
        {
          title: "Twin Malls",
          copy: "A pair of destination malls stitched together by a gourmet street. Anchored by cinema, fashion boulevards, wellness anchors, and experiential dining.",
        },
        {
          title: "Showroom Arcade",
          copy: "Thirty-six double-height showrooms line the ceremonial boulevard, designed for automotive, luxury retail, and flagship brand experiences.",
        },
        {
          title: "Curated Food Court",
          copy: "A day-to-night culinary hall with chef-driven counters, regional favourites, and a live mixology island overlooking the plaza.",
        },
      ],
    },
    assets: [
      {
        title: "Serviced Apartment Towers A through E",
        subtitle: "Five hospitality-managed towers",
        description:
          "From business-ready suites to extended-stay residences, Towers A through E deliver hotel-grade living with private sky amenities, residents' concierge, and back-of-house support normally reserved for five-star properties.",
        highlights: [
          "Towers A and B focus on executive suites with plug-and-play offices, media rooms, and private meeting pods.",
          "Towers C and D introduce family residences with dual-aspect living, smart kitchens, and panoramic terraces.",
          "Tower E crowns the district with signature penthouses, a wellness observatory, and members-only wine library.",
        ],
        amenities: [
          "Dedicated reception and concierge in each tower",
          "Housekeeping, linen, and pantry services managed by Global One",
          "Sky lounge with infinity lap pool, Himalayan salt spa, and sunrise yoga decks",
          "Flexible co-working studios with acoustic pods and boardrooms",
        ],
        gallery: [
          {
            src: "/images/Serviced Apartment tower A.jpg",
            alt: "Serviced apartment tower A overlooking the hospitality podium",
            caption: "Tower A rising above the hospitality podium",
          },
          {
            src: "/images/Serviced Apartment Towers A 1 (1).jpg",
            alt: "Sky lounge and infinity lap pool atop Tower A",
            caption: "Sky lounge with infinity lap pool",
          },
          {
            src: "/images/twin view tower .jpg",
            alt: "Twin serviced apartment towers framing the plaza",
            caption: "Twin towers defining Ananta�s skyline",
          },
        ],
      },
      {
        title: "Corporate Tower",
        subtitle: "Premium workplace for investors and anchor tenants",
        description:
          "A 32-level corporate tower connects directly to the hotel lobby, offering column-free office plates, double-height trading floors, and a hospitality-grade arrival experience for senior leadership teams.",
        highlights: [
          "Dedicated club floors featuring executive dining, strategy suites, and investment lounges.",
          "Smart vertical mobility with destination control lifts and private sky shuttles.",
          "Integration with Ananta's convention centre and banquet lawns for launches and summits.",
        ],
        amenities: [
          "Investor drop-off and valet court",
          "End-of-trip facilities with spa showers and nap pods",
          "Broadcast-ready boardroom with hybrid conferencing tech",
          "Building management system with live ESG dashboards",
        ],
        gallery: [
          {
            src: "/images/Corporate Tower.jpg",
            alt: "Corporate tower arrival court with valet lounge",
            caption: "Arrival court for anchor tenants",
          },
          {
            src: "/images/arch tower1 (1).jpg",
            alt: "Column-free office plate with panoramic glazing",
            caption: "Column-free office plate with panoramic glazing",
          },
          {
            src: "/images/arch tower 1 (2).jpg",
            alt: "Executive level overlooking the plaza",
            caption: "Executive level overlooking the plaza",
          },
        ],
      },
      {
        title: "Twin Malls",
        subtitle: "Experiential retail anchored by entertainment",
        description:
          "The duo of malls bring cinematic glamour and luxury retail to Datia. Rotating art installations, daylight atria, and multi-sensory zones keep the offer fresh for families and trend seekers alike.",
        highlights: [
          "Premium multiplex featuring Dolby Atmos theatres, VIP lounges, and screening salons for private premieres.",
          "Luxury fashion boulevard with duplex storefronts for international labels and Indian couture houses.",
          "Skybridge dining with chef-owned restaurants, microbreweries, and al fresco terraces overlooking the plaza.",
        ],
        amenities: [
          "Kid-centric Fun Labs with VR, indoor adventure park, and STEAM workshops",
          "Wellness village housing med-spa brands, boutique fitness, and dermatology clinics",
          "Smart parking guidance, valet lounges, and EV charging bays",
          "Weekly cultural showcases, artisan markets, and pop-up galleries",
        ],
        gallery: [
          {
            src: "/images/pyramid mall 2.jpg",
            alt: "Pyramid mall atrium",
            caption: "Pyramid mall atrium",
          },
          {
            src: "/images/Round mall 1.jpg",
            alt: "Circular retail boulevard",
            caption: "Round mall�s circular retail boulevard",
          },
          {
            src: "/images/bridge.jpg",
            alt: "Skybridge dining deck",
            caption: "Skybridge dining connecting the twin malls",
          },
        ],
      },
      {
        title: "Showroom Arcade",
        subtitle: "36 landmark storefronts",
        description:
          "A palm-lined boulevard of 36 double-height showrooms gives automotive marques, design houses, and heritage jewellers gallery-like visibility.",
        highlights: [
          "Flexible mezzanine layouts for studios, cafes, and concept lounges.",
          "Integrated digital facade for synchronized storytelling across the boulevard.",
          "Shared concierge providing test-drive coordination and personal shopping.",
        ],
        amenities: [
          "Direct access to valet and chauffeur lounges",
          "Back-of-house logistics spine for seamless deliveries",
          "Community programming with launch weekends, car rallies, and trunk shows",
        ],
        gallery: [
          {
            src: "/images/Showroom Arcade 1 (1).jpg",
            alt: "Showroom arcade lined with luxury storefronts",
            caption: "Showroom arcade arrival boulevard",
          },
          {
            src: "/images/Showroom Arcade 1 (5).jpg",
            alt: "Double-height display galleries",
            caption: "Double-height galleries for flagship brands",
          },
          {
            src: "/images/Showroom Arcade 1 (7).jpg",
            alt: "Evening lighting along the showroom arcade",
            caption: "Evening programming across the arcade",
          },
        ],
      },
      {
        title: "Signature Food Court",
        subtitle: "Culinary theatre for every palate",
        description:
          "Curated by Global One's hospitality team, the food court blends chef-led counters, regional favourites, and experiential kitchens in a light-filled atrium.",
        highlights: [
          "Live kitchens for artisanal pizza, teppanyaki, and Indian grills.",
          "Dessert promenade featuring gelato lab, bean-to-bar chocolatier, and afternoon tea kiosk.",
          "Evening entertainment with mixology masterclasses and acoustic performances.",
        ],
        amenities: [
          "500-seat flexible dining with cabanas and family lounges",
          "Kids' tasting trail and nutrition-focused menus",
          "QR-enabled table service and concierge ordering",
          "Dedicated cloud-kitchen wing for delivery partners",
        ],
        gallery: [
          {
            src: "/images/gate.jpg",
            alt: "Food court arrival pavilion",
            caption: "Arrival pavilion for the culinary hall",
          },
          {
            src: "/images/gate  5.jpg",
            alt: "Night-time view of the food court terraces",
            caption: "Evening energy across the tasting terraces",
          },
          {
            src: "/images/gate  7.jpg",
            alt: "Outdoor seating overlooking the water feature",
            caption: "Outdoor seating overlooking the plaza",
          },
        ],
      },
    ],
    operations: {
      title: "Hospitality & Investment",
      copy: "Ananta is operated end-to-end by Global One Hospitality. Owners benefit from pooled revenue sharing, rigorous ESG compliance, and a hospitality team trained to five-star standards.",
    },
  },
  {
    id: "medicity",
    theme: "light",
    name: "Global One MediCity",
    location: "Civil Lines, Datia",
    strapline:
      "Central India's first medical lifestyle campus blending healthcare, hospitality, and resort living.",
    stats: [
      { label: "Healthcare Retail", value: "Shopping complex" },
      { label: "Residences", value: "48 villas" },
      { label: "Hospitality", value: "Civil Lines Hotel" },
      { label: "Green Spine", value: "12-acre wellness corridor" },
    ],
    masterplan: {
      blurb:
        "MediCity is landscaped as a walkable healing environment. Clinics, hospitality, villas, and retail converge around a wellness spine dotted with water bodies, herb gardens, and shaded courts.",
      elements: [
        {
          title: "Shopping & Medical Boulevard",
          copy: "An adaptive retail street with pharmacies, wellness boutiques, diagnostics, and lifestyle brands curated for visiting families and local residents.",
        },
        {
          title: "Wellness Villas",
          copy: "Forty-eight villas arranged along green cul-de-sacs with private courtyards, meditation decks, and concierge healthcare.",
        },
        {
          title: "Civil Lines Hotel",
          copy: "A 220-key hotel that pairs hospitality suites with recovery rooms, conference centre, and medical tourism concierge.",
        },
      ],
    },
    assets: [
      {
        title: "Shopping & Medical Complex",
        subtitle: "Retail tailored for wellness journeys",
        description:
          "The open-air complex anchors MediCity with a 3-level atrium connecting flagship pharmacies, diagnostics labs, lifestyle retail, and gourmet nutrition.",
        highlights: [
          "Central atrium with skylit canopy and vertical gardens for natural daylight and fresh air.",
          "PVR MedScreen lounge hosting health documentaries, CME sessions, and family entertainment nights.",
          "Luxury retail mix featuring athleisure, medical tech showrooms, and wellness concept stores.",
        ],
        amenities: [
          "Holistic wellness wing with yoga studios, float therapy, and IV lounges",
          "Family respite lounges, creche, and concierge for visiting patients",
          "Wayfinding kiosks with multilingual support and telemedicine pods",
          "Night market terraces offering farm-to-table fare and artisanal products",
        ],
        gallery: [
          {
            src: "/images/gate  3.jpg",
            alt: "Medical boulevard arrival plaza",
            caption: "Arrival plaza for the medical boulevard",
          },
          {
            src: "/images/gate 2.jpg",
            alt: "Daylit atrium leading to diagnostics wing",
            caption: "Daylit atrium linking retail and diagnostics",
          },
          {
            src: "/images/arial view .jpg",
            alt: "Aerial view of the MediCity campus",
            caption: "Aerial perspective of the MediCity campus",
          },
        ],
      },
      {
        title: "Signature Villas",
        subtitle: "48 restorative residences",
        description:
          "Each villa is imagined as a private sanctuary with concierge medical services, outdoor plunge pools, and hospitality-grade housekeeping.",
        highlights: [
          "Three villa typologies ranging from 3,000 to 4,800 sq.ft with adaptable wellness rooms.",
          "Biophilic interiors with timber screens, herbal balconies, and touchless smart controls.",
          "Residents enjoy priority appointments at MediCity clinics and tailored longevity programmes.",
        ],
        amenities: [
          "Clubhouse with hydrotherapy circuit, library lounge, and farm-to-table bistro",
          "Community herb garden, reflexology trail, and silent meditation grove",
          "Dedicated villa concierge coordinating travel, appointments, and housekeeping",
          "On-call nursing suites and telemedicine integration in every villa",
        ],
        gallery: [
          {
            src: "/images/Royal tower  4.jpg",
            alt: "Wellness villa cluster overlooking landscape",
            caption: "Villas framed by the wellness spine",
          },
          {
            src: "/images/Serviced Apartment tower A s.jpg",
            alt: "Sunrise terraces with private plunge pools",
            caption: "Sunrise terraces with private plunge pools",
          },
          {
            src: "/images/3 tower.jpg",
            alt: "Residential towers with stepped balconies",
            caption: "Layered balconies for extended-stay residents",
          },
        ],
      },
      {
        title: "Civil Lines Hotel",
        subtitle: "Hospitality for caregivers and medical travellers",
        description:
          "The Civil Lines Hotel bridges luxury hospitality with specialised care suites, making extended stays comfortable for patients and accompanying families.",
        highlights: [
          "220 keys across premium rooms, recovery suites, and serviced apartments.",
          "Medical concierge desk coordinating appointments, interpreters, and wellness itineraries.",
          "Conference and knowledge centre for medical summits, product launches, and training.",
        ],
        amenities: [
          "Sky lounge with temperature-controlled pool and oxygen garden",
          "Chef-led anti-inflammatory menus and personalised nutrition plans",
          "Dedicated paediatric playrooms and family respite lounges",
          "Spa with ayurvedic therapies, sleep labs, and physiotherapy studios",
        ],
        gallery: [
          {
            src: "/images/hotel nioght 11.jpg",
            alt: "Civil Lines Hotel illuminated at night",
            caption: "Civil Lines Hotel at night",
          },
          {
            src: "/images/t1.png",
            alt: "Hotel lobby with sculpted canopy",
            caption: "Light-filled concierge lobby",
          },
          {
            src: "/images/Round mall 1.jpg",
            alt: "Conference centre connected to the hotel",
            caption: "Conference wing linked to the hotel",
          },
        ],
      },
    ],
    operations: {
      title: "Integrated Care & Hospitality",
      copy: "MediCity pairs clinical excellence with resort-grade comfort. Global One manages villa services, hotel operations, and the retail promenade to ensure a seamless experience for patients, caregivers, and residents alike.",
    },
  },
];

const renderNav = () => {
  const nav = document.createElement("nav");
  nav.className = "nav";
  nav.setAttribute("data-nav", "");
  nav.innerHTML = `
    <div class="nav__inner container">
      <a href="#top" class="nav__brand" data-scroll>
        <span class="nav__brand-logo">
          <img src="/logos/company.svg" alt="Global One Consulting" />
        </span>
        <span class="nav__brand-text">
          <span class="nav__brand-title">
            <span>Global One</span>
            <span>Consulting</span>
          </span>
          <span class="nav__brand-tagline">Branding | Consulting | Investing</span>
        </span>
      </a>
      <button class="nav__toggle" type="button" data-nav-toggle aria-expanded="false" aria-controls="navLinks">
        <span class="sr-only">Toggle navigation</span>
        <span class="nav__toggle-bar"></span>
        <span class="nav__toggle-bar"></span>
        <span class="nav__toggle-bar"></span>
      </button>
      <div class="nav__links" id="navLinks">
        ${navItems
          .map(
            (item) =>
              `<a href="${item.target}" class="nav__link" data-scroll data-nav-link>${item.label}</a>`,
          )
          .join("")}
      </div>
      <div class="nav__actions">
        <a href="#contact" class="nav__cta btn btn--small" data-scroll>Talk to us</a>
      </div>
    </div>
  `;
  document.body.appendChild(nav);
};

const renderGlobalHero = () => `
  <section id="top" class="section global-hero" data-reveal>
    <div class="container global-hero__inner">
      <div class="global-hero__copy">
        <p class="global-hero__eyebrow">Global One</p>
        <h1 class="global-hero__title">Designing destinations that blend hospitality, commerce, and community.</h1>
        <p class="global-hero__lead">
          From luxury service apartments to integrated medical townships, Global One curates experiences that elevate everyday living and unlock long-term value for investors and residents alike.
        </p>
        <div class="global-hero__cta">
          <a href="#ananta" class="btn" data-scroll>Explore Ananta</a>
          <a href="#medicity" class="btn btn--outline" data-scroll>Discover MediCity</a>
        </div>
        <ul class="global-hero__stats">
          <li><span>2</span> Flagship integrated projects</li>
          <li><span>5M sqft</span> Under development</li>
          <li><span>24/7</span> Managed hospitality operations</li>
        </ul>
      </div>
      <div class="global-hero__visual" data-hero-visual>
        <div class="hero-visual">
          <canvas class="hero-visual__canvas" data-hero-canvas aria-hidden="true"></canvas>
          <div class="hero-visual__fallback" data-hero-fallback>Loading 3D preview...</div>
        </div>
      </div>
    </div>
  </section>
`;

const renderMasterplan = (project) => `
  <section class="section project__masterplan" data-reveal>
    <div class="container project__masterplan-inner">
      <div class="project__masterplan-copy">
        <h3>Masterplan</h3>
        <p>${project.masterplan.blurb}</p>
      </div>
      <ul class="project__masterplan-list">
        ${project.masterplan.elements
          .map(
            (element) => `
              <li>
                <h4>${element.title}</h4>
                <p>${element.copy}</p>
              </li>
            `,
          )
          .join("")}
      </ul>
    </div>
  </section>
`;

const renderAsset = (asset) => {
  const galleryMarkup =
    Array.isArray(asset.gallery) && asset.gallery.length
      ? `<div class="project-asset__gallery">
          ${asset.gallery
            .map((image) => {
              const altText = image.alt || image.caption || asset.title;
              const caption = image.caption
                ? `<figcaption>${image.caption}</figcaption>`
                : "";
              return `<figure>
                <img src="${image.src}" alt="${altText}" loading="lazy" decoding="async" />
                ${caption}
              </figure>`;
            })
            .join("")}
        </div>`
      : "";

  return `
  <article class="project-asset" data-reveal>
    <div class="project-asset__header">
      <div>
        <p class="project-asset__eyebrow">${asset.subtitle}</p>
        <h3>${asset.title}</h3>
      </div>
    </div>
    <p class="project-asset__description">${asset.description}</p>
    <div class="project-asset__columns">
      <div>
        <h4>Highlights</h4>
        <ul>
          ${asset.highlights.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </div>
      <div>
        <h4>Experience</h4>
        <ul>
          ${asset.amenities.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </div>
    </div>
    ${galleryMarkup}
  </article>
`;
};

const renderProject = (project) => `
  <section id="${project.id}" class="project section project--${project.id}" data-project="${project.id}" data-theme="${project.theme}">
    <div class="container project__hero" data-reveal>
      <div>
        <p class="project__eyebrow">${project.location}</p>
        <h2 class="project__title">${project.name}</h2>
        <p class="project__lead">${project.strapline}</p>
        <ul class="project__stats">
          ${project.stats.map((stat) => `<li><span>${stat.value}</span>${stat.label}</li>`).join("")}
        </ul>
      </div>
    </div>
    ${renderMasterplan(project)}
    <div class="container project__assets">
      ${project.assets.map(renderAsset).join("")}
    </div>
    <div class="container project__operations" data-reveal>
      <h3>${project.operations.title}</h3>
      <p>${project.operations.copy}</p>
    </div>
  </section>
`;

const renderContactSection = () => `
  <section id="contact" class="section contact">
    <div class="container contact__inner">
      <div class="contact__meta" data-reveal>
        <p class="section__eyebrow">Connect</p>
        <h2 class="section__title">Partner with Global One.</h2>
        <p class="section__lead">
          Share your interest in Project Ananta, MediCity, or future collaborations. Our advisory desk will schedule a presentation and walk you through plans, investment models, and hospitality programmes.
        </p>
        <ul class="contact__list">
          <li><span>Email</span><a href="mailto:connect@globalone.co">connect@globalone.co</a></li>
          <li><span>Phone</span><a href="tel:+919876543210">+91 98765 43210</a></li>
          <li><span>Office</span>Global One Consulting, Datia &amp; New Delhi</li>
        </ul>
      </div>
      <form class="contact__form" id="contactForm" novalidate data-reveal>
        <div class="form-field">
          <label for="name">Name</label>
          <input class="input" id="name" name="name" type="text" autocomplete="name" required />
        </div>
        <div class="form-field">
          <label for="email">Email</label>
          <input class="input" id="email" name="email" type="email" autocomplete="email" required />
        </div>
        <div class="form-field">
          <label for="phone">Phone</label>
          <input class="input" id="phone" name="phone" type="tel" autocomplete="tel" />
        </div>
        <div class="form-field">
          <label for="interest">Project of interest</label>
          <select class="input" id="interest" name="interest" required>
            <option value="" disabled selected>Select</option>
            <option value="ananta">Project Ananta</option>
            <option value="medicity">Global One MediCity</option>
            <option value="partnership">Partnership / Other</option>
          </select>
        </div>
        <div class="form-field">
          <label for="message">Notes</label>
          <textarea class="input" id="message" name="message" rows="4" placeholder="Tell us about your requirements." required></textarea>
        </div>
        <button class="btn" type="submit">Submit</button>
        <p class="form__status" data-status role="status" aria-live="polite"></p>
      </form>
    </div>
  </section>
`;

const renderFooter = () => {
  const year = new Date().getFullYear();
  const footer = document.createElement("footer");
  footer.className = "footer";
  footer.innerHTML = `
    <div class="container footer__inner">
      <div class="footer__brand">
        <span class="footer__title">Global One</span>
        <span class="footer__copy">&copy; ${year} Global One Consulting Pvt. Ltd.</span>
      </div>
      <div class="footer__links">
        <a href="#ananta" data-scroll>Ananta</a>
        <a href="#medicity" data-scroll>MediCity</a>
        <a href="mailto:connect@globalone.co">connect@globalone.co</a>
      </div>
    </div>
  `;
  document.body.appendChild(footer);
};

const renderSections = () => {
  const main = document.createElement("main");
  main.id = "app-root";
  main.innerHTML = [
    renderGlobalHero(),
    ...projects.map(renderProject),
    renderContactSection(),
  ].join("");
  document.body.appendChild(main);
};

class GlobalOneApp {
  constructor() {
    this.cleanupReveals = null;
    this.cleanupTheme = null;
    this.mask = null;
    this.heroModel = null;
    this.heroModelPromise = null;
  }

  init() {
    renderNav();
    renderSections();
    renderFooter();
    this.initHeroModel();
    this.setupForm();
    this.cleanupReveals = createReveals();
    this.cleanupTheme = observeThemes();
    this.registerEvents();
    this.playIntro();
  }

  initHeroModel() {
    if (this.heroModel || this.heroModelPromise) return;
    const reduceMotion =
      typeof window !== "undefined" && window.matchMedia
        ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
        : false;
    if (reduceMotion) return;
    const container = document.querySelector("[data-hero-visual]");
    if (!container) return;
    this.heroModelPromise = import("./components/heroModel.js")
      .then(({ default: HeroModel }) => {
        this.heroModelPromise = null;
        if (!container.isConnected || this.heroModel) return;
        this.heroModel = new HeroModel(container);
      })
      .catch((error) => {
        this.heroModelPromise = null;
        if (import.meta.env && import.meta.env.DEV) {
          console.warn("Hero model failed to load", error);
        }
      });
  }
  setupForm() {
    const form = document.getElementById("contactForm");
    const status = form ? form.querySelector("[data-status]") : null;
    if (!form || !status) return;

    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      status.textContent = "Sending...";
      const formData = new FormData(form);
      const payload = Object.fromEntries(formData.entries());
      try {
        await new Promise((resolve) => setTimeout(resolve, 600));
        status.textContent =
          "Thank you. Our team will reach out within 24 hours.";
        form.reset();
        if (import.meta.env && import.meta.env.DEV) {
          console.info("[GlobalOne] Contact form submission", payload);
        }
      } catch (_) {
        status.textContent = "Please try again shortly.";
      }
    });
  }

  registerEvents() {
    document.addEventListener("click", (event) => {
      const toggle = event.target.closest("[data-nav-toggle]");
      if (toggle) {
        this.toggleNav(toggle);
        return;
      }

      const link = event.target.closest("[data-scroll]");
      if (link) {
        event.preventDefault();
        const target = link.getAttribute("href");
        this.closeNav();
        safeScrollTo(target);
      }
    });

    document.addEventListener("dualBrandMaskComplete", () => {
      this.onIntroComplete();
    });
  }

  toggleNav(toggleButton) {
    const nav = document.querySelector("[data-nav]");
    if (!nav) return;
    const isOpen = nav.classList.toggle("nav--open");
    toggleButton.setAttribute("aria-expanded", isOpen ? "true" : "false");
  }

  closeNav() {
    const nav = document.querySelector("[data-nav]");
    const toggle = document.querySelector("[data-nav-toggle]");
    if (!nav || !toggle) return;
    nav.classList.remove("nav--open");
    toggle.setAttribute("aria-expanded", "false");
  }

  onIntroComplete() {
    document.body.classList.add("dual-brand-complete");
    if (this.cleanupReveals) this.cleanupReveals();
    this.cleanupReveals = createReveals();
    if (this.cleanupTheme) this.cleanupTheme();
    this.cleanupTheme = observeThemes();
    this.mask = null;
  }

  playIntro(forceReplay = false) {
    if (forceReplay) {
      document.body.classList.remove("dual-brand-complete", "theme-light");
    }

    if (this.mask && !this.mask.hasCompleted) {
      this.mask.skip();
    }

    this.mask = new DualBrandLogoMask();
    this.mask.init();
  }
}

window.addEventListener("DOMContentLoaded", () => {
  const app = new GlobalOneApp();
  app.init();
});
