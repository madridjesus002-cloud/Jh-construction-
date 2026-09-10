import {
  BrickWall,
  Flower2,
  Hammer,
  MapPin,
  MountainSnow,
  Phone,
  ShieldCheck,
  Sparkles,
  TreePine,
} from 'lucide-react';
import Image from 'next/image';

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
  { name: 'Tree Removal', detail: 'Careful tree removal and cleanup to help protect and open up your property.', icon: TreePine, image: '/images/service-tree-removal.jpg' },
];

const beforeAfterProjects = [
  {
    title: 'Natural Stone Patio',
    detail: 'From compacted base preparation to a clean, level outdoor living area.',
    before: '/images/patio-before.jpg',
    after: '/images/patio-after.jpg',
    beforeAlt: 'Prepared gravel base before natural stone patio installation',
    afterAlt: 'Completed natural stone patio installation',
    orientation: 'landscape',
    afterPosition: 'center 58%',
  },
  {
    title: 'Custom Fire Feature',
    detail: 'Hand-set stone, river-rock detail, and fitted caps create a polished centerpiece.',
    before: '/images/fire-feature-before.jpg',
    after: '/images/fire-feature-after.jpg',
    beforeAlt: 'Outdoor stone fire feature during construction',
    afterAlt: 'Completed outdoor stone fire feature and patio',
    orientation: 'landscape',
  },
  {
    title: 'Curved Paver Walkway',
    detail: 'An aging path replaced with a wider, smooth-flowing paver walkway.',
    before: '/images/curved-walkway-before.jpg',
    after: '/images/curved-walkway-after.jpg',
    beforeAlt: 'Aging curved walkway before replacement',
    afterAlt: 'New curved paver walkway installation',
    orientation: 'portrait',
    afterPosition: 'center 38%',
  },
  {
    title: 'Bluestone Walkway',
    detail: 'A weathered path renewed with aligned bluestone and crisp, even joints.',
    before: '/images/bluestone-walkway-before.jpg',
    after: '/images/bluestone-walkway-after.jpg',
    beforeAlt: 'Weathered bluestone walkway before restoration',
    afterAlt: 'Renewed bluestone walkway with aligned stone',
    orientation: 'portrait',
  },
  {
    title: 'Front Porch & Stonework',
    detail: 'A complete porch rebuild finished with stone veneer, new steps, and a paver approach.',
    before: '/images/porch-before.jpg',
    after: '/images/porch-after.jpg',
    beforeAlt: 'Front porch during structural rebuilding',
    afterAlt: 'Finished front porch with stone veneer, steps, and paver walkway',
    orientation: 'landscape',
  },
];

function Brand() {
  return (
    <a href="#top" className="brand" aria-label="J Hernandez Construction home">
      <img className="brand-logo" src="/images/jh-logo.png" alt="" />
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
          <Image src="/images/porch-after.jpg" alt="" fill sizes="100vw" priority />
          <Image src="/images/fire-feature-after.jpg" alt="" fill sizes="100vw" />
          <Image src="/images/patio-after.jpg" alt="" fill sizes="100vw" />
          <Image src="/images/project-9.jpg" alt="" fill sizes="100vw" />
        </div>
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow">West Hartford · Licensed &amp; Insured</p>
          <div className="hero-wordmark">
            <img src="/images/jh-logo.png" alt="" aria-hidden="true" />
            <h1 id="hero-title" aria-label="JH Construction LLC">
              <span>Construction</span><small>LLC</small>
            </h1>
          </div>
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

          <div className="comparison-grid">
            {beforeAfterProjects.map((project) => (
              <article className={`comparison-card ${project.orientation}`} key={project.title}>
                <div className="comparison-heading">
                  <div>
                    <span>Project transformation</span>
                    <h3>{project.title}</h3>
                  </div>
                  <p>{project.detail}</p>
                </div>
                <div className="comparison-photos">
                  <figure>
                    <Image
                      src={project.before}
                      alt={project.beforeAlt}
                      fill
                      sizes="(max-width: 760px) 100vw, 25vw"
                    />
                    <figcaption>Before</figcaption>
                  </figure>
                  <figure>
                    <Image
                      src={project.after}
                      alt={project.afterAlt}
                      fill
                      sizes="(max-width: 760px) 100vw, 25vw"
                      style={{ objectPosition: project.afterPosition ?? 'center' }}
                    />
                    <figcaption>After</figcaption>
                  </figure>
                </div>
              </article>
            ))}
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
        <div className="contact-mark" aria-hidden="true"><img src="/images/jh-logo.png" alt="" /></div>
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
        <p>Concrete · Steps · Stone Work · Chimneys · Patios · Sidewalks · Tile · Snow · Landscaping · Tree Removal</p>
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
