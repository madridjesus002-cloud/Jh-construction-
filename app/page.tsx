import {
  BrickWall,
  Crown,
  Flower2,
  Hammer,
  MapPin,
  MountainSnow,
  Phone,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

const phoneHref = 'tel:+19595993898';

const services = [
  { name: 'Concrete', detail: 'Reliable slabs, repairs, foundations, and finished surfaces.', icon: Hammer, image: '/images/project-1.jpg' },
  { name: 'Steps', detail: 'Safe, durable entry steps built to complement your home.', icon: BrickWall, image: '/images/project-6.jpg' },
  { name: 'Stone Work', detail: 'Custom stonework with careful lines and lasting strength.', icon: Sparkles, image: '/images/project-9.jpg' },
  { name: 'Chimneys', detail: 'Masonry chimney repair and restoration for a sound structure.', icon: BrickWall, image: '/images/service-chimney.jpg' },
  { name: 'Patios', detail: 'Outdoor gathering spaces designed for everyday living.', icon: Flower2, image: '/images/project-3.jpg' },
  { name: 'Sidewalks', detail: 'Clean, level walkways and paths for safer access.', icon: Hammer, image: '/images/project-7.jpg' },
  { name: 'Tile', detail: 'Precise tile installation for polished, practical surfaces.', icon: Sparkles, image: '/images/service-tile.jpg' },
  { name: 'Snow Services', detail: 'Dependable seasonal snow clearing for your property.', icon: MountainSnow, image: '/images/service-snow.jpg' },
  { name: 'Landscaping', detail: 'Property care that keeps your exterior neat and inviting.', icon: Flower2, image: '/images/project-10.jpg' },
];

function Brand() {
  return (
    <a href="#top" className="brand" aria-label="J Hernandez Construction home">
      <span className="brand-mark" aria-hidden="true">
        <Crown size={17} strokeWidth={2.4} />
        <strong>JH</strong>
      </span>
      <span className="brand-copy">
        <strong>J Hernandez</strong>
        <small>Construction LLC</small>
      </span>
    </a>
  );
}

export default function Home() {
  return (
    <main id="top">
      <div className="topline">
        <span><MapPin size={15} /> Serving West Hartford &amp; surrounding areas</span>
        <span><ShieldCheck size={15} /> Licensed &amp; insured</span>
      </div>

      <header className="site-header">
        <Brand />
        <nav aria-label="Primary navigation">
          <a href="#services">Services</a>
          <a href="#work">Our Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-call" href={phoneHref}>
          <Phone size={18} /> <span>959-599-3898</span>
        </a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-slideshow" aria-hidden="true">
          <img src="/images/project-11.jpg" alt="" />
          <img src="/images/project-7.jpg" alt="" />
          <img src="/images/project-10.jpg" alt="" />
          <img src="/images/project-8.jpg" alt="" />
        </div>
        <div className="hero-shade" />
        <div className="hero-content">
          <div className="hero-crown" aria-hidden="true"><Crown /><span>JH</span></div>
          <span className="hero-proof">Our work · Your next project</span>
          <p className="eyebrow">West Hartford · Licensed &amp; Insured</p>
          <h1 id="hero-title"><span>JH</span> Construction LLC</h1>
          <p className="hero-lead">
            Distinctive concrete, stonework, patios, steps, and year-round property care—built with precision and pride.
          </p>
          <div className="hero-actions">
            <a className="primary-cta hero-call" href={phoneHref}><Phone size={21} /><span><strong>Call Now — Free Estimate</strong><small>Fast response · 7 days a week</small></span></a>
            <a className="text-cta" href="#work">See our work <span aria-hidden="true">→</span></a>
          </div>
          <div className="slide-dots" aria-hidden="true"><span /><span /><span /><span /></div>
        </div>
      </section>

      <section className="trust-row" aria-label="Why choose J Hernandez Construction">
        <div><strong>Licensed</strong><span>Professional service</span></div>
        <div><strong>Insured</strong><span>Work with confidence</span></div>
        <div><strong>Local</strong><span>West Hartford, CT</span></div>
        <a href={phoneHref}><Phone size={18} /> 959-599-3898</a>
      </section>

      <section className="section services-section" id="services">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow dark-eyebrow">What we do</p>
            <h2>One trusted team.<br /><em>Every season.</em></h2>
          </div>
          <p>
            From structural masonry to outdoor living spaces and year-round property care, we bring skilled hands and close attention to every project.
          </p>
        </div>
        <div className="services-grid">
          {services.map(({ name, detail, icon: Icon, image }) => (
            <article className="service-card" key={name}>
              <div className="service-media">
                <img className="service-image" src={image} alt={`${name} service example`} />
              </div>
              <div className="service-copy">
                <Icon aria-hidden="true" />
                <h3>{name}</h3>
                <p>{detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="work-section" id="work">
        <div className="section work-inner">
          <div className="section-heading work-heading">
            <div>
              <p className="eyebrow">Recent work</p>
              <h2>Real projects.<br /><em>Real results.</em></h2>
            </div>
            <a className="outline-cta" href={phoneHref}><Phone size={18} /> Start your project</a>
          </div>

          <div className="featured-project">
            <figure className="before-image">
              <img src="/images/project-1.jpg" alt="Patio before restoration" />
              <figcaption>Before</figcaption>
            </figure>
            <figure className="after-image">
              <img src="/images/project-3.jpg" alt="Restored stone patio in progress" />
              <figcaption>Renewed stone patio</figcaption>
            </figure>
          </div>

          <div className="project-grid">
            <figure>
              <img src="/images/project-6.jpg" alt="Finished stone entry steps and paver walkway" />
              <figcaption><strong>Stone entry &amp; steps</strong><span>Built for a welcoming arrival</span></figcaption>
            </figure>
            <figure>
              <img src="/images/project-7.jpg" alt="Curved paver walkway installation" />
              <figcaption><strong>Custom paver walkway</strong><span>Detailed curves and clean edging</span></figcaption>
            </figure>
            <figure>
              <img src="/images/project-9.jpg" alt="Finished paver walkway and stone entry steps" />
              <figcaption><strong>Walkway &amp; stone steps</strong><span>A complete front-entry transformation</span></figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="section about-section" id="about">
        <div className="about-image">
          <img src="/images/project-8.jpg" alt="J Hernandez Construction masonry project" />
          <div className="about-badge"><ShieldCheck size={28} /><strong>Licensed<br />&amp; Insured</strong></div>
        </div>
        <div className="about-copy">
          <p className="eyebrow dark-eyebrow">Local craftsmanship</p>
          <h2>Work we’re proud<br />to put our <em>name on.</em></h2>
          <p>
            J Hernandez Construction LLC serves West Hartford and nearby communities with dependable construction and property services. We believe good work starts with clear communication, careful preparation, and respect for your home.
          </p>
          <ul>
            <li><ShieldCheck size={19} /> Licensed and insured service</li>
            <li><MapPin size={19} /> Proudly serving the West Hartford area</li>
            <li><Hammer size={19} /> Hands-on attention from start to finish</li>
          </ul>
          <a className="navy-cta" href={phoneHref}><Phone size={20} /> Talk with our team</a>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-mark" aria-hidden="true"><Crown /><strong>JH</strong></div>
        <p className="eyebrow">Let’s build something lasting</p>
        <h2>Ready to improve<br />your property?</h2>
        <p>Call J Hernandez Construction LLC to talk about your project and request a free estimate.</p>
        <a className="primary-cta contact-call" href={phoneHref}><Phone size={24} /><span><small>Call today</small>959-599-3898</span></a>
        <div className="contact-meta">
          <span><MapPin size={17} /> West Hartford, Connecticut</span>
          <span><ShieldCheck size={17} /> Licensed &amp; insured</span>
          <span>Every day · 6:00 AM–8:00 PM</span>
        </div>
        <a className="contact-email" href="mailto:jorge.hdz90@icloud.com">jorge.hdz90@icloud.com</a>
      </section>

      <footer>
        <Brand />
        <p>Concrete · Steps · Stone Work · Chimneys · Patios · Sidewalks · Tile · Snow · Landscaping</p>
        <div className="footer-contact">
          <a href={phoneHref}>959-599-3898</a>
          <a href="mailto:jorge.hdz90@icloud.com">jorge.hdz90@icloud.com</a>
          <span>Monday–Sunday · 6 AM–8 PM</span>
        </div>
        <small>© {new Date().getFullYear()} J Hernandez Construction LLC</small>
      </footer>

      <a className="mobile-call" href={phoneHref}><Phone size={20} /> Call 959-599-3898</a>
    </main>
  );
}
