import "./styles/index.css"
import "./styles/components/dualBrandLogoMask.css"
import DualBrandLogoMask from "./components/dualBrandLogoMask.js"

const INTRO_KEY = "ananta-intro-completed"

const navItems = [
  { label: "Vision", target: "#vision" },
  { label: "Residences", target: "#residences" },
  { label: "Amenities", target: "#amenities" },
  { label: "Hospitality", target: "#hospitality" },
  { label: "Location", target: "#location" },
  { label: "Contact", target: "#contact" }
]

const statHighlights = [
  { value: "05", label: "Signature towers", description: "A hospitality-driven neighbourhood designed for extended stays." },
  { value: "466", label: "Serviced residences", description: "Fully furnished suites managed and maintained by Global One." },
  { value: "30+", label: "Lifestyle conveniences", description: "Wellness, business, and social amenities curated for guests and owners." },
  { value: "24/7", label: "Operations team", description: "Hotel-trained staff delivering concierge, security, and guest services." }
]

const residenceTiers = [
  {
    name: "Executive suites",
    size: "650 - 720 sq.ft.",
    summary: "Optimised for business travellers with flex living areas, compact pantries, and skyline views.",
    inclusions: ["Fully furnished turnkey delivery", "Smart access and climate control", "Dedicated housekeeping program"]
  },
  {
    name: "Presidential residences",
    size: "1100+ sq.ft.",
    summary: "Expansive layouts with private decks, entertainer kitchens, and ensuite wellness pods.",
    inclusions: ["Private owners lounge access", "Sommelier curated dining experiences", "On-call butler and valet"]
  }
]

const amenityGroups = [
  {
    title: "Wellness and leisure",
    items: ["Skyline infinity pool with cabanas", "Spa, sauna, and hydrotherapy circuit", "Holistic fitness studios and reformers", "Sunken fire lounge and meditation decks"]
  },
  {
    title: "Business ready",
    items: ["Hybrid boardrooms and event suites", "Cowork studios with acoustic pods", "24-hour concierge and travel desk", "Media lab for content and virtual meetings"]
  },
  {
    title: "Lifestyle services",
    items: ["Managed housekeeping and laundry", "In-residence dining and chef on call", "Resident programming calendar", "Personalised transport and excursions"]
  }
]

const hospitalityHighlights = [
  {
    title: "Hospitality-led asset",
    copy: "Global One's hospitality division operates the property end-to-end, ensuring consistent guest experience and brand integrity."
  },
  {
    title: "Assured performance model",
    copy: "Owners participate in a central revenue pool with transparent reporting, predictable payouts, and professional asset management.*"
  },
  {
    title: "Technology and operations",
    copy: "Smart access, energy optimisation, and guest experience platforms keep every stay effortless for residents and staff."
  }
]

const locationHighlights = {
  intro: "Strategically positioned in Datia's emerging growth corridor with effortless links to Gwalior, Jhansi, and the Bundelkhand tourism circuit.",
  connections: [
    {
      title: "Connectivity",
      copy: "5 minutes from the NH-44 interchange, 20 minutes from Datia Junction, and 70 minutes from Gwalior Airport via the expressway spur."
    },
    {
      title: "Neighbourhood",
      copy: "Upcoming corporate parks, healthcare, and education hubs within a 10 km radius support long-stay demand."
    },
    {
      title: "Culture and leisure",
      copy: "Weekend access to Orchha, Khajuraho, wildlife reserves, and spiritual destinations across the Bundelkhand region."
    }
  ]
}

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches

const safeScrollTo = (targetSelector) => {
  const el = typeof targetSelector === "string" ? document.querySelector(targetSelector) : targetSelector
  if (!el) return
  el.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth", block: "start" })
}

const createReveals = () => {
  const elements = document.querySelectorAll("[data-reveal]")
  if (!elements.length) return () => {}
  if (prefersReducedMotion()) {
    elements.forEach((node) => node.classList.add("reveal-visible"))
    return () => {}
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible")
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.18, rootMargin: "0px 0px -10% 0px" }
  )
  elements.forEach((node) => observer.observe(node))
  return () => observer.disconnect()
}

const renderNav = () => {
  const nav = document.createElement("nav")
  nav.className = "nav"
  nav.setAttribute("data-nav", "")
  nav.innerHTML = `
    <div class="nav__inner container">
      <a href="#hero" class="nav__brand" data-scroll>
        <span class="nav__brand-eyebrow">Global One Consulting</span>
        <span class="nav__brand-title">Project Ananta</span>
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
              `<a href="${item.target}" class="nav__link" data-scroll data-nav-link>${item.label}</a>`
          )
          .join("")}
      </div>
      <a href="#contact" class="nav__cta btn btn--small" data-scroll>Book a consultation</a>
    </div>
  `
  document.body.appendChild(nav)
}

const renderSections = () => {
  const main = document.createElement("main")
  main.id = "app-root"
  main.innerHTML = `
    <section id="hero" class="section hero">
      <div class="container hero__inner">
        <div class="hero__copy" data-reveal>
          <p class="hero__eyebrow">Luxurious serviced living in Datia</p>
          <h1 class="hero__title">A hospitality-managed sanctuary for residents and investors.</h1>
          <p class="hero__lead">
            Project Ananta pairs world-class amenities with a stable revenue model, delivering a new benchmark for premium extended stays in Central India.
          </p>
          <div class="hero__cta">
            <a href="#vision" class="btn" data-scroll>Explore the vision</a>
            <a href="/archive/legacy-web-index-clean.html" class="btn btn--outline" target="_blank" rel="noopener">Legacy reference</a>
          </div>
        </div>
        <div class="hero__meta" data-reveal>
          <div class="hero__badge">Managed by Global One Hospitality</div>
          <ul class="hero__list">
            <li>Fully furnished serviced residences</li>
            <li>Hotel-grade operations and concierge</li>
            <li>Future-ready wellness and business facilities</li>
          </ul>
        </div>
      </div>
    </section>

    <section id="vision" class="section section--raised">
      <div class="container section__grid">
        <div class="section__intro" data-reveal>
          <p class="section__eyebrow">The vision</p>
          <h2 class="section__title">Crafted for modern residents, engineered for long-term value.</h2>
          <p class="section__lead">
            Project Ananta is a two-brand experience where Global One introduces Datia's most premium hospitality-led residences. Every detail supports high occupancy, superior guest satisfaction, and effortless ownership.
          </p>
        </div>
        <div class="pill-group" data-reveal>
          <div class="pill">Cinematic arrival experience with dual-brand entry masks</div>
          <div class="pill">World-class wellness deck overlooking the Datia skyline</div>
          <div class="pill">Integrated hospitality tech stack for guests and operators</div>
          <div class="pill">Asset and operations managed in-house by Global One</div>
        </div>
      </div>
    </section>

    <section id="numbers" class="section section--accent">
      <div class="container">
        <div class="section__header" data-reveal>
          <p class="section__eyebrow">Key numbers</p>
          <h2 class="section__title">A destination designed to deliver dependable performance.</h2>
        </div>
        <ul class="stats__grid">
          ${statHighlights
            .map(
              (stat) => `
            <li class="stats__item" data-reveal>
              <span class="stats__value">${stat.value}</span>
              <span class="stats__label">${stat.label}</span>
              <p class="stats__description">${stat.description}</p>
            </li>`
            )
            .join("")}
        </ul>
      </div>
    </section>

    <section id="residences" class="section">
      <div class="container section__grid section__grid--balanced">
        <div class="section__intro" data-reveal>
          <p class="section__eyebrow">Residences</p>
          <h2 class="section__title">Thoughtfully planned serviced apartments across two distinctive tiers.</h2>
          <p class="section__lead">
            Each residence is fully furnished, technology-enabled, and supported by a hospitality-trained team so owners can focus on returns while guests enjoy a seamless stay.
          </p>
        </div>
        <div class="residence-cards">
          ${residenceTiers
            .map(
              (tier) => `
            <article class="residence-card" data-reveal>
              <header class="residence-card__header">
                <h3>${tier.name}</h3>
                <span class="residence-card__size">${tier.size}</span>
              </header>
              <p class="residence-card__summary">${tier.summary}</p>
              <ul class="residence-card__list">
                ${tier.inclusions.map((item) => `<li>${item}</li>`).join("")}
              </ul>
            </article>`
            )
            .join("")}
        </div>
      </div>
    </section>

    <section id="amenities" class="section section--alt">
      <div class="container">
        <div class="section__header section__header--center" data-reveal>
          <p class="section__eyebrow">Amenities</p>
          <h2 class="section__title">Three vertical clubs that balance wellbeing, productivity, and social energy.</h2>
          <p class="section__lead">Amenities are staged to open with the first handover, ensuring the experience feels world-class from day one.</p>
        </div>
        <div class="amenities__grid">
          ${amenityGroups
            .map(
              (group) => `
            <article class="amenity-card" data-reveal>
              <h3>${group.title}</h3>
              <ul>
                ${group.items.map((item) => `<li>${item}</li>`).join("")}
              </ul>
            </article>`
            )
            .join("")}
        </div>
      </div>
    </section>

    <section id="hospitality" class="section">
      <div class="container section__grid section__grid--balanced">
        <div class="section__intro" data-reveal>
          <p class="section__eyebrow">Hospitality engine</p>
          <h2 class="section__title">Operated like a five-star hotel, owned like a resilient real estate asset.</h2>
          <p class="section__lead">
            Global One Hospitality brings years of operational expertise to Ananta, managing staffing, marketing, distribution, and guest experience from a single command center.
          </p>
        </div>
        <div class="card-stack">
          ${hospitalityHighlights
            .map(
              (item) => `
            <article class="card" data-reveal>
              <h3>${item.title}</h3>
              <p>${item.copy}</p>
            </article>`
            )
            .join("")}
        </div>
      </div>
      <p class="disclaimer container" data-reveal>*Indicative model subject to final legal and financial structuring.</p>
    </section>

    <section id="location" class="section section--alt">
      <div class="container section__grid section__grid--balanced">
        <div class="section__intro" data-reveal>
          <p class="section__eyebrow">Location</p>
          <h2 class="section__title">Central to growth corridors, culture, and connectivity.</h2>
          <p class="section__lead">${locationHighlights.intro}</p>
        </div>
        <div class="location__details">
          ${locationHighlights.connections
            .map(
              (item) => `
            <article class="card card--soft" data-reveal>
              <h3>${item.title}</h3>
              <p>${item.copy}</p>
            </article>`
            )
            .join("")}
          <div class="location__map" data-reveal>
            <span>Interactive map and virtual site tour arriving in the next sprint.</span>
          </div>
        </div>
      </div>
    </section>

    <section id="contact" class="section">
      <div class="container contact">
        <div class="contact__meta" data-reveal>
          <p class="section__eyebrow">Connect</p>
          <h2 class="section__title">Schedule a private presentation.</h2>
          <p class="section__lead">
            Our advisory team will share floor plans, investment models, and a walkthrough of the hospitality programme.
          </p>
          <ul class="contact__list">
            <li><span>Call</span><a href="tel:+919876543210">+91 98765 43210</a></li>
            <li><span>Email</span><a href="mailto:info@projectananta.com">info@projectananta.com</a></li>
            <li><span>Visit</span>Global One Consulting, Datia, Madhya Pradesh</li>
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
          <div class="form-field form-field--split">
            <div>
              <label for="phone">Phone (optional)</label>
              <input class="input" id="phone" name="phone" type="tel" autocomplete="tel" />
            </div>
            <div>
              <label for="city">City</label>
              <input class="input" id="city" name="city" type="text" autocomplete="address-level2" />
            </div>
          </div>
          <div class="form-field">
            <label for="message">Notes</label>
            <textarea class="input" id="message" name="message" rows="4" placeholder="Tell us how we can help." required></textarea>
          </div>
          <button class="btn" type="submit">Submit inquiry</button>
          <p class="form__status" data-status role="status" aria-live="polite"></p>
        </form>
      </div>
    </section>
  `
  document.body.appendChild(main)
}

const renderFooter = () => {
  const year = new Date().getFullYear()
  const footer = document.createElement("footer")
  footer.className = "footer"
  footer.innerHTML = `
    <div class="container footer__inner">
      <div class="footer__brand">
        <span class="footer__title">Project Ananta</span>
        <span class="footer__copy">&copy; ${year} Global One Consulting Pvt. Ltd.</span>
      </div>
      <div class="footer__links">
        <a href="mailto:info@projectananta.com">info@projectananta.com</a>
        <a href="/archive/legacy-web-index-clean.html" target="_blank" rel="noopener">Legacy copy archive</a>
      </div>
    </div>
  `
  document.body.appendChild(footer)
}

class AnantaApp {
  constructor() {
    this.cleanupReveals = null
    this.mask = null
  }

  init() {
    renderNav()
    renderSections()
    renderFooter()
    this.setupForm()
    this.cleanupReveals = createReveals()
    this.registerEvents()
    this.playIntro()
  }

  setupForm() {
    const form = document.getElementById("contactForm")
    const status = form ? form.querySelector("[data-status]") : null
    if (!form || !status) return

    form.addEventListener("submit", async (event) => {
      event.preventDefault()
      status.textContent = "Sending..."
      const formData = new FormData(form)
      const payload = Object.fromEntries(formData.entries())
      try {
        await new Promise((resolve) => setTimeout(resolve, 600))
        status.textContent = "Thank you. Our team will reach out within 24 hours."
        form.reset()
        if (import.meta.env && import.meta.env.DEV) {
          console.info("[Ananta] Contact form submission", payload)
        }
      } catch (_) {
        status.textContent = "Please try again in a moment."
      }
    })
  }

  registerEvents() {
    document.addEventListener("click", (event) => {
      const toggle = event.target.closest("[data-nav-toggle]")
      if (toggle) {
        this.toggleNav(toggle)
        return
      }
      const link = event.target.closest("[data-scroll]")
      if (link) {
        event.preventDefault()
        const target = link.getAttribute("href")
        this.closeNav()
        safeScrollTo(target)
      }
    })

    document.addEventListener("dualBrandMaskComplete", () => {
      this.onIntroComplete()
    })
  }

  toggleNav(toggleButton) {
    const nav = document.querySelector("[data-nav]")
    if (!nav) return
    const isOpen = nav.classList.toggle("nav--open")
    toggleButton.setAttribute("aria-expanded", isOpen ? "true" : "false")
  }

  closeNav() {
    const nav = document.querySelector("[data-nav]")
    const toggle = document.querySelector("[data-nav-toggle]")
    if (!nav || !toggle) return
    nav.classList.remove("nav--open")
    toggle.setAttribute("aria-expanded", "false")
  }

  onIntroComplete() {
    document.body.classList.add("dual-brand-complete")
    if (this.cleanupReveals) this.cleanupReveals()
    this.cleanupReveals = createReveals()
    try {
      localStorage.setItem(INTRO_KEY, "true")
    } catch (_) {
      // ignore storage errors
    }
  }

  playIntro(forceReplay = false) {
    let seenIntro = false
    try {
      seenIntro = localStorage.getItem(INTRO_KEY) === "true"
    } catch (_) {
      seenIntro = false
    }

    if (seenIntro && !forceReplay) {
      this.onIntroComplete()
      return
    }

    this.mask = new DualBrandLogoMask()
    this.mask.init()
  }
}

window.addEventListener("DOMContentLoaded", () => {
  const app = new AnantaApp()
  app.init()
})






