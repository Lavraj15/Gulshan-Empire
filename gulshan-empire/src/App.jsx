import { useEffect, useState } from "react";
import {
  IMG,
  WHATSAPP_LINK,
  PHONE_DISPLAY,
  PHONE_TEL,
  EMAIL,
  // SITE_VISIT_LINK,
  MAP_LINK,
  BROCHURE,
} from "./config.js";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#overview" },
  { label: "Residences", href: "#residences" },
  { label: "Amenities", href: "#amenities" },
  { label: "Location", href: "#location" },
  { label: "Floor plans", href: "#floor-plan" },
];

const RESIDENCE_POINTS = [
  "Spacious layouts imagined for modern family life",
  "Living areas that welcome light and togetherness",
  "Bedrooms designed for privacy and repose",
  "Kitchens and utility spaces shaped by practicality",
  "Balconies that open to air, light, and a broader sense of calm",
  "For the family that values room to grow",
  "For the lifestyle that values grace in every detail",
  "For a life that deserves a better frame",
];

const HIGHLIGHTS = [
  {
    title: "Skyline Presence",
    text: "G+31 towers shaping a powerful residential skyline",
  },
  { title: "Green-Centric Planning", text: "Large landscaped zones" },
  {
    title: "Garden Residences",
    text: "Ground-floor homes with private garden access",
  },
  { title: "Advanced Security Grid", text: "Automated monitored access" },
];

const AMENITIES = [
  "Central Park",
  "Sports complex",
  "24x7 security with CCTV",
  "Fiber optic connectivity",
  "Wide roads and planned township",
];

const DISTANCES = [
  "15 minutes from Noida Sector 62",
  "6 minutes from Eastern Peripheral Expressway",
  "30 minutes from Akshardham Temple",
  "direct adjacency to NH-24",
];

const FAQS = [
  {
    q: "Where is Gulshan Empire located?",
    a: "Gulshan Empire is positioned in Wave City, Ghaziabad, within a larger planned township on the NH-24 corridor.",
  },
  {
    q: "What makes Wave City an attractive residential destination?",
    a: "Wave City is officially presented as a smart township with large-scale planned development, greenery, security systems, infrastructure, and strong connectivity to key NCR routes.",
  },
  {
    q: "What is the lifestyle positioning of Gulshan Empire?",
    a: "Gulshan Empire is best positioned as a premium residential address shaped by forward living, elegant spaces, and a calmer, more elevated everyday experience.",
  },
  {
    q: "How well connected is the location?",
    a: "Wave City's official communication highlights adjacency to NH-24 and approximate access to Noida Sector 62, the Eastern Peripheral Expressway, and Delhi-side landmarks.",
  },
  {
    q: "How can I get the brochure, floor plans, or price details?",
    a: "Download the brochure from this page, or message us on WhatsApp for floor plans, inventory details, and latest pricing.",
  },
  {
    q: "About the Group.",
    a: "Gulshan Empire is envisioned by Gulshan Group, a name synonymous with premium living, timeless design, and a legacy of crafting distinguished residential communities for thousands of families.",
  },
];

function WhatsAppGlyph({ size = 28 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M16.04 3C9.4 3 4 8.38 4 15.01c0 2.12.55 4.19 1.6 6.01L4 29l8.18-1.57a12.03 12.03 0 0 0 3.86.63C22.68 28.06 28 22.67 28 16.04 28 9.4 22.68 3 16.04 3Zm0 22.04c-1.2 0-2.38-.2-3.5-.6l-.5-.18-4.86.93.95-4.73-.2-.5a9.94 9.94 0 0 1-1.52-5.28c0-5.5 4.5-9.98 10.02-9.98 5.5 0 9.98 4.48 9.98 9.98 0 5.52-4.48 10.36-9.97 10.36Zm5.5-7.48c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.95 1.18-.18.2-.35.22-.65.08-.3-.15-1.28-.47-2.44-1.5-.9-.8-1.5-1.8-1.68-2.1-.18-.3-.02-.47.13-.62.14-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.68-1.64-.93-2.25-.25-.58-.5-.5-.68-.5h-.58c-.2 0-.53.08-.8.38-.28.3-1.05 1.03-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.1 3.2 5.1 4.5.72.3 1.28.5 1.7.63.72.23 1.37.2 1.88.12.58-.08 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.08-.12-.28-.2-.58-.35Z" />
    </svg>
  );
}

function ChatBubble({ size = 30 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 3C7 3 3 6.6 3 11c0 2 .8 3.8 2.2 5.2L4 21l4.2-1.7c1.1.4 2.4.7 3.8.7 5 0 9-3.6 9-8s-4-8-9-8Z" />
    </svg>
  );
}

function Social({ kind }) {
  if (kind === "instagram") {
    return (
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        aria-hidden="true"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    );
  }
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.5-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9v2.3H8v3h2.5V21h3Z" />
    </svg>
  );
}

function useCountUp() {
  useEffect(() => {
    const els = document.querySelectorAll("[data-count]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          io.unobserve(el);
          const end = Number(el.dataset.count);
          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            el.textContent = end;
            return;
          }
          const start = performance.now();
          const dur = 1400;
          const tick = (now) => {
            const t = Math.min((now - start) / dur, 1);
            el.textContent = Math.round(end * (1 - Math.pow(1 - t, 3)));
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        });
      },
      { threshold: 0.4 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useCountUp();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const ext = { target: "_blank", rel: "noopener noreferrer" };

  return (
    <>
      {/* ---------- Header ---------- */}
      <header
        className={`header ${scrolled || menuOpen ? "header--solid" : ""}`}
      >
        <a href="#home" className="header__logo" onClick={closeMenu}>
          <img src={IMG.logo} alt="Gulshan Empire Wave City" />
        </a>

        <nav className={`nav ${menuOpen ? "nav--open" : ""}`} aria-label="Main">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} onClick={closeMenu}>
              {n.label}
            </a>
          ))}
          <a
            className="nav__contact"
            href={WHATSAPP_LINK}
            {...ext}
            onClick={closeMenu}
          >
            Contact Us
          </a>
        </nav>

        <button
          className="burger"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      <main>
        {/* ---------- Hero ---------- */}
        <section
          id="home"
          className="hero"
          style={{ backgroundImage: `url(${IMG.hero})` }}
        >
          <div className="hero__shade" />
          <div className="hero__actions">
            <a className="btn btn--lg" href={BROCHURE} download>
              Download Brochure
            </a>
            <a className="btn btn--lg" href={WHATSAPP_LINK} {...ext}>
              Book a Private Site Visit
            </a>
          </div>
        </section>

        {/* ---------- Tagline ---------- */}
        <section className="tagline">
          <h1>Every game of chess has just one king</h1>
          <p>
            Every decisive move shapes a remarkable future. Every exceptional
            life deserves an address that reflects it.
          </p>
        </section>

        {/* ---------- Overview ---------- */}
        <section id="overview" className="overview">
          <div className="wrap overview__grid">
            <img
              className="overview__img"
              src={IMG.overview}
              alt="Gulshan Empire"
            />
            <div className="overview__text">
              <span className="label">Overview</span>
              <h2>A home that lets life move beautifully forward</h2>
              <p>
                Gulshan Empire is more than a residential destination it is the
                embodiment of ambition, refinement and enduring value.
                Thoughtfully envisioned for those who appreciate the finer
                nuances of life, it brings together timeless architecture,
                expansive residences, verdant landscapes and curated experiences
                to create a lifestyle that stands apart.
              </p>
              <p>
                For over 37 years, Gulshan has built a legacy founded on trust,
                quality and excellence. Gulshan Empire carries this legacy
                forward, offering a premium community where every detail is
                designed to enrich the way you live, connect and grow.
              </p>
              <h3>
                Welcome to the address
                <br />
                where every move leads to distinction.
              </h3>
              <a className="btn" href="#residences">
                Explore the Empire
              </a>
            </div>
          </div>

          <div className="wrap strip">
            <ul className="strip__list">
              <li>Premium township</li>
              <li>Expansive 3 &amp; 4 BHK homes</li>
              <li>High-rise premium towers</li>
            </ul>
            <div className="strip__stats">
              <div>
                <strong data-count="6">0</strong>
                <span>Towers</span>
              </div>
              <div>
                <strong>
                  G+<span data-count="31">0</span>
                </strong>
                <span>Floors</span>
              </div>
              <div>
                <strong>
                  3 &amp; <span data-count="4">0</span>
                </strong>
                <span>BHK Apartments</span>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- Project vision ---------- */}
        <section className="vision">
          <div className="wrap split">
            <div>
              <span className="label">Project vision</span>
              <h2>Crafted for those who look ahead</h2>
              <h3>
                A residence for families who value clarity, comfort, and a finer
                pace of life
              </h3>
            </div>
            <div className="split__text">
              <p>
                Some homes simply accommodate life. Others shape it. Gulshan
                Empire is positioned for those who seek more than square
                footage, those who look for grace in planning, openness in
                design, and meaning in the everyday experience of living well.
              </p>
              <p>
                The aspiration here is not excess. It is refinement. It is the
                confidence of living in a place that feels complete - connected
                to the city, embraced by greenery, and aligned with the
                sensibilities of modern families who want their home to reflect
                both achievement and peace.
              </p>
            </div>
          </div>
        </section>

        {/* ---------- Residences ---------- */}
        <section id="residences" className="residences">
          <div className="wrap split">
            <div>
              <span className="label">Residences</span>
              <h2>Residences designed around light, openness, and ease</h2>
              <h3>
                Spaces that feel as composed as the life you want to build
              </h3>
              <a className="btn" href={WHATSAPP_LINK} {...ext}>
                Request Floor Plans
              </a>
              <img className="residences__mark" src={IMG.watermark} alt="" />
            </div>
            <div className="split__text">
              <p>
                Every residence at Gulshan Empire should be presented as a
                setting for balance - a place where natural light, thoughtful
                planning and a sense of openness create a home that feels
                intuitive from the moment you enter.
              </p>
              <ul className="features">
                {RESIDENCE_POINTS.map((text, i) => (
                  <li key={text}>
                    <img
                      src={IMG.residenceIcons[i]}
                      alt=""
                      width="46"
                      height="46"
                    />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
              <a className="btn" href={WHATSAPP_LINK} {...ext}>
                Check Available Inventory
              </a>
            </div>
          </div>
        </section>

        {/* ---------- Key highlights ---------- */}
        <section id="highlights" className="highlights">
          <h2>Key Highlights</h2>
          <h3>A Signature Design Language</h3>
          <div className="highlights__banner">
            <img src={IMG.highlights} alt="Gulshan Empire towers" />
            <ul>
              {HIGHLIGHTS.map((h, i) => (
                <li key={h.title}>
                  <img
                    src={IMG.highlightIcons[i]}
                    alt=""
                    width="38"
                    height="38"
                  />
                  <div>
                    <h4>{h.title}</h4>
                    <p>{h.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ---------- Amenities ---------- */}
        <section id="amenities" className="amenities">
          <div className="wrap wrap--narrow split">
            <div>
              <span className="label">Amenities</span>
              <h2>An experience that extends far beyond your home</h2>
              <h3>
                Wellness, leisure, community, and peace of mind in one address
              </h3>
            </div>
            <div className="split__text split__text--small">
              <p>
                A truly elevated life is never defined by interiors alone. It is
                shaped by the spaces you step into after them - the greens that
                invite a pause, the community that feels welcoming, and the
                amenities that support wellness, recreation, and ease.
              </p>
              <p>
                Within the wider Wave City ecosystem, residents benefit from a
                township environment that highlights green spaces, security
                systems, road infrastructure, sports and recreation, and a
                planned social fabric. Wave City's official communication
                references features such as 24x7 security, CCTV surveillance,
                Central Park, a sports complex, fiber optic connectivity, wide
                roads, and community-focused amenities, all of which strengthen
                the lifestyle positioning for Gulshan Empire.
              </p>
            </div>
          </div>
          <div className="center">
            <a className="btn" href={WHATSAPP_LINK} {...ext}>
              Explore Amenities
            </a>
          </div>
        </section>

        {/* ---------- Location ---------- */}
        <section id="location" className="location">
          <div className="wrap">
            <div className="head">
              <span className="label">Location</span>
              <h2>Connected to the city, removed from its chaos</h2>
              <h3>An address that keeps you close to what matters</h3>
              <p>
                Gulshan Empire's location advantage should be expressed through
                both convenience and emotional contrast: close enough for
                access, distant enough for calm. Positioned in Wave City,
                Ghaziabad, the development benefits from NH-24 adjacency and the
                larger connectivity narrative attached to the township.
              </p>
            </div>
            <div className="location__grid">
              <div>
                <ul className="distances">
                  {DISTANCES.map((d, i) => (
                    <li key={d}>
                      <img
                        src={IMG.locationIcons[i]}
                        alt=""
                        width="42"
                        height="42"
                      />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
                <div className="btn-row">
                  <a className="btn" href={MAP_LINK} {...ext}>
                    Get Exact Location
                  </a>
                  <a className="btn" href={WHATSAPP_LINK} {...ext}>
                    Schedule a Visit
                  </a>
                </div>
              </div>
              <a
                className="location__map"
                href={MAP_LINK}
                {...ext}
                aria-label="Open location in Google Maps"
              >
                <img
                  src={IMG.locationMap}
                  alt="Gulshan Empire location map"
                  loading="lazy"
                />
              </a>
            </div>
          </div>
        </section>

        {/* ---------- From the house of Gulshan ---------- */}
        <section id="gulshan-group" className="legacy">
          <div className="wrap legacy__grid">
            <div className="legacy__logo-col">
              <img
                className="legacy__logo"
                src={IMG.logoLegacy}
                alt="Gulshan Group"
              />
            </div>
            <div className="legacy__text">
              <h2>From the house of Gulshan</h2>
              <h3>
                A legacy shaped by timeless residences and elevated experiences
              </h3>
              <p>
                For over three decades, Gulshan has quietly shaped some of the
                region's most distinguished residential addresses, spaces where
                architecture, craftsmanship, and thoughtful living come together
                seamlessly.
              </p>
              <p>
                Every development reflects a commitment to creating homes that
                endure beyond trends, designed not merely for today, but for
                generations to come. Rooted in a philosophy of timeless design
                and uncompromising quality, Gulshan has earned the trust of
                thousands of families who seek more than a residence, they seek
                a legacy.
              </p>
              <p>
                Gulshan Empire continues this tradition. Conceived as an address
                for those who appreciate space, privacy, and refinement, it
                embodies the values that have defined the brand for decades:
                meticulous attention to detail, elevated living experiences, and
                an unwavering commitment to excellence.
              </p>
              <p className="legacy__lines">
                A legacy built through trust.
                <br />
                A vision crafted for the future.
                <br />
                An address destined to endure.
              </p>
              <div className="legacy__stats">
                <div>
                  <strong>
                    <span data-count="36">0</span>+
                  </strong>
                  <span>Years of development presence</span>
                </div>
                <div>
                  <strong>
                    <span data-count="7500">0</span>+
                  </strong>
                  <span>Trusted by Families</span>
                </div>
              </div>
              <a className="btn" href={WHATSAPP_LINK} {...ext}>
                Explore Gulshan Legacy
              </a>
            </div>
          </div>
        </section>

        {/* ---------- Floor plans ---------- */}
        <section id="floor-plan" className="plans">
          <div className="wrap">
            <div className="head">
              <span className="label">Floor plans</span>
              <h2>See how every space has been imagined</h2>
              <h3>Thoughtful layouts for a life that flows naturally</h3>
            </div>
            <div className="plans__grid">
              <figure>
                <div className="plans__box">
                  <img src={IMG.plan3} alt="3 BHK floor plan" loading="lazy" />
                </div>
                <figcaption>3 BHK Residences</figcaption>
              </figure>
              <figure>
                <div className="plans__box">
                  <img src={IMG.plan4} alt="4 BHK floor plan" loading="lazy" />
                </div>
                <figcaption>4 BHK Residences</figcaption>
              </figure>
            </div>
            <div className="btn-row btn-row--center">
              <a className="btn" href={BROCHURE} download>
                Download Floor Plans
              </a>
              <a className="btn" href={BROCHURE} download>
                Request the Brochure
              </a>
            </div>
          </div>
        </section>

        {/* ---------- FAQs ---------- */}
        <section id="faqs" className="faqs">
          <div className="wrap">
            <div className="head">
              <span className="label">FAQs</span>
              <h2>Questions, answered with clarity</h2>
              <h3>Everything you need to know before taking the next step</h3>
            </div>
            <div className="faqs__list">
              {FAQS.map((f, i) => (
                <details key={f.q} open={i === 0}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Contact (form hata ke WhatsApp) ---------- */}
        <section id="contact" className="contact">
          <div className="wrap">
            <h2>Begin your next chapter with Gulshan Empire</h2>
            <h3>Get the brochure, location, and official project details</h3>
            <div className="contact__rows">
              <a href={PHONE_TEL}>
                <i>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    aria-hidden="true"
                  >
                    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
                  </svg>
                </i>
                {PHONE_DISPLAY}
              </a>
              <a href={`mailto:${EMAIL}`}>
                <i>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    aria-hidden="true"
                  >
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m3 7 9 6 9-6" />
                  </svg>
                </i>
                {EMAIL}
              </a>
            </div>

            <div className="contact__card">
              <h4>Request Official Project Details</h4>
              <p>
                Message us on WhatsApp to receive the brochure, location map,
                floor plans, and latest project updates.
              </p>
              <a
                className="contact__wa"
                href={WHATSAPP_LINK}
                {...ext}
                aria-label="Chat on WhatsApp"
              >
                <WhatsAppGlyph size={40} />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ---------- Footer ---------- */}
      <footer className="footer">
        <div className="wrap footer__top">
          <div>
            <img
              src={IMG.logoFooter}
              alt="Gulshan - Experience Excellence"
              className="footer__logo"
            />
            <p className="footer__name">
              Gulshan Empire at Wave City, Ghaziabad
            </p>
            <p>
              <strong>Corporate Address:</strong>
              <br />
              7th Floor Gulshan One29, Plot No. C3-E1 Sector 129, Noida-Greater
              Noida Expressway - 201304 (UP)
            </p>
            <p>
              <strong>Project Address:</strong>
              <br />
              Oakwood Enclave, Plot No. GH-2B, Sector-1, Wave City, Ghaziabad,
              Uttar Pradesh, 201015
            </p>
          </div>
          <ul className="footer__links">
            <li>
              <a href="#overview">Overview</a>
            </li>
            <li>
              <a href="#location">Location</a>
            </li>
            <li>
              <a href="#residences">Highlights</a>
            </li>
            <li>
              <a href="#gulshan-group">Gulshan Group</a>
            </li>
            <li>
              <a href="#amenities">Amenities</a>
            </li>
            <li>
              <a href="#faqs">FAQs</a>
            </li>
            <li>
              <a href="#floor-plan">Floor Plans</a>
            </li>
          </ul>
        </div>

        <div className="wrap footer__mid">
          <div className="footer__disclaimer">
            <strong>Disclaimer:</strong>
            <p>
              *All plans, images (other than actual images), details, etc.,
              given in the brochure and/or marketing material are indicative of
              the envisaged developments.
            </p>
          </div>
          <div className="footer__rera">
            <div>
              <p>RERA NO.: UPRERAPRJ166511/05/2026</p>
              <a href="https://www.up-rera.in/index" {...ext}>
                https://www.up-rera.in/index
              </a>
            </div>
            <img src={IMG.reraQr} alt="RERA QR code" width="80" height="80" />
          </div>
        </div>

        <div className="wrap footer__bottom">
          <div className="footer__social">
            <a
              href="https://www.instagram.com/gulshanempireofficial/"
              {...ext}
              aria-label="Instagram"
            >
              <Social kind="instagram" />
            </a>
            <a
              href="https://www.facebook.com/Gulshanempireofficial"
              {...ext}
              aria-label="Facebook"
            >
              <Social kind="facebook" />
            </a>
          </div>
          <div className="footer__legal">
            <a
              href="https://www.gulshanempire.com/terms-and-conditions.php"
              {...ext}
            >
              Terms &amp; Conditions
            </a>
            <a href="https://www.gulshanempire.com/privacy-policy.php" {...ext}>
              Privacy Policy
            </a>
            <a href="https://www.gulshanempire.com/disclaimer.php" {...ext}>
              Disclaimer
            </a>
            <span>Copyright 2026 Gulshan Empire. All Right Reserved</span>
          </div>
        </div>
      </footer>

      {/* ---------- Floating WhatsApp ---------- */}
      <a
        className="wa-float"
        href={WHATSAPP_LINK}
        {...ext}
        aria-label="Chat on WhatsApp"
      >
        <ChatBubble size={30} />
      </a>
    </>
  );
}
