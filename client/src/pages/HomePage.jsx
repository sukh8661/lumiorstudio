import ServiceList from "../components/ServiceList.jsx";
import StudioPrinciples from "../components/StudioPrinciples.jsx";
export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-image"></div>
        <div className="hero-topline">
          <span>
            <i></i> Independent minds. Shared ambition.
          </span>
          <span>Digital that grows with you.</span>
        </div>
        <div className="hero-content">
          <h1>
            A brighter
            <br />
            kind of <span className="flower">✿</span>
            <br />
            digital.
          </h1>
          <div className="hero-side">
            <p>
              Beautiful websites. Smarter marketing.
              <br />
              We turn your next big thing into
              <br />
              your everyday reality.
            </p>
            <div className="actions">
              <a className="button" href="/contact">
                Grow with us <span className="circle">↗</span>
              </a>
              <a className="button yellow" href="/work">
                Explore our work <span>↗</span>
              </a>
            </div>
          </div>
        </div>
        <a className="hero-scroll" href="#about">
          A little further. A lot more possibility. <span>↓</span>
        </a>
      </section>
      <section className="about section-pad" id="about">
        <div className="intro reveal">
          <p className="eyebrow">A little about Esgrow</p>
          <h2>
            We believe growing your business shouldn’t feel like a guessing game
            — it should feel like <em>moving forward.</em>{" "}
            <span>
              We bring design, development and marketing into one clear,
              connected picture.
            </span>
          </h2>
        </div>
        <div className="stats-grid">
          <article className="stat light reveal">
            <div className="avatar-row">
              <span>✺</span>
              <span>↗</span>
              <span>✿</span>
              <span>◎</span>
            </div>
            <div>
              <p>Good people. Big possibilities.</p>
              <strong>
                Your next
                <br />
                growth team.
              </strong>
            </div>
            <span className="tiny">Small by design. Ambitious by nature.</span>
          </article>
          <article className="stat dark reveal">
            <p>Built for the bigger picture</p>
            <strong>
              One
              <br />
              shared goal.
            </strong>
            <img
              className="stat-object"
              src="/assets/services.webp"
              alt=""
              loading="lazy"
            />
            <span className="tiny">
              Your brand, growing in the right direction.
            </span>
          </article>
          <article className="stat light reveal">
            <p>
              From first impression
              <br />
              to long-term connection.
            </p>
            <div className="stat-bottom">
              <span className="mini-landscape"></span>
              <div>
                <p>Connected disciplines</p>
                <strong>09</strong>
              </div>
            </div>
          </article>
          <article className="stat scenic reveal">
            <p>Ideas don’t grow in silos.</p>
            <strong>
              Better,
              <br />
              together.
            </strong>
            <span className="tiny">Design × development × search × social</span>
          </article>
        </div>
      </section>
      <section className="services section-pad" id="services">
        <div className="section-heading reveal">
          <div>
            <p className="eyebrow">What we do</p>
            <h2>
              One team. Every
              <br />
              piece of your growth.
            </h2>
          </div>
          <p>
            From a website people remember to campaigns that move them.
            Everything works harder when it works together.
          </p>
        </div>
        <div className="service-layout">
          <div className="service-art reveal">
            <img
              className="service-generated"
              src="/assets/services.webp"
              alt="A miniature creative ecosystem connecting web design, strategy and growth"
              loading="lazy"
              width="1536"
              height="1024"
            />
            <span className="art-badge badge-one">↗ Built to convert</span>
            <span className="art-badge badge-two">✧ Made to stand out</span>
            <div className="art-label">
              A little strategy. A lot of possibility.
            </div>
          </div>
          <div className="service-list">
            <ServiceList compact />
          </div>
        </div>
      </section>
      <section className="work section-pad" id="work">
        <div className="section-heading reveal">
          <div>
            <p className="eyebrow">A glimpse of what’s possible</p>
            <h2>
              Good ideas.
              <br />
              Beautifully brought to life.
            </h2>
          </div>
          <p>
            A few concept explorations.
            <br />
            Different worlds. The same attention to detail.
          </p>
        </div>
        <div className="work-grid">
          <a className="project reveal" href="/work/bloom-botanicals">
            <div className="project-image bloom">
              <img
                className="project-generated"
                src="/assets/bloom.webp"
                alt="Botanical skincare bottles styled with olive branches and limestone"
                loading="lazy"
                width="1536"
                height="1024"
              />
              <span className="project-image-title">
                bloom<span>Rooted in a better everyday.</span>
              </span>
              <span className="project-arrow">↗</span>
            </div>
            <div className="project-caption">
              <h3>Bloom Botanicals</h3>
              <span>Branding · E-commerce concept</span>
            </div>
          </a>
          <a className="project reveal" href="/work/forma-living">
            <div className="project-image forma">
              <img
                className="project-generated"
                src="/assets/forma.webp"
                alt="A sunlit contemporary interior with sculptural furniture and natural materials"
                loading="lazy"
                width="1536"
                height="1024"
              />
              <span className="project-image-title">
                FORMA<span>Spaces with soul.</span>
              </span>
              <span className="project-arrow">↗</span>
            </div>
            <div className="project-caption">
              <h3>Forma Living</h3>
              <span>Web design · Digital strategy concept</span>
            </div>
          </a>
        </div>
      </section>
      <section className="process section-pad" id="process">
        <div className="section-heading reveal">
          <div>
            <p className="eyebrow">Clear from the very first hello</p>
            <h2>
              Big on collaboration.
              <br />
              Light on complication.
            </h2>
          </div>
          <a className="text-link" href="/contact">
            Meet your next team ↗
          </a>
        </div>
        <div className="process-grid">
          <article className="reveal">
            <span>01</span>
            <h3>Find your north.</h3>
            <p>
              We listen first. Your business, your customers, your ambitions.
              Then we map the way forward together.
            </p>
          </article>
          <article className="reveal">
            <span>02</span>
            <h3>Make it meaningful.</h3>
            <p>
              Strategy becomes something you can see, feel and use. We design,
              build and refine with you in the loop.
            </p>
          </article>
          <article className="reveal">
            <span>03</span>
            <h3>Keep growing.</h3>
            <p>
              Launch is a beginning. We measure what matters, learn from real
              behaviour and keep making things better.
            </p>
          </article>
        </div>
      </section>
      <StudioPrinciples />
      <div className="capabilities">
        <span>CONNECTED THINKING. EVERY TOUCHPOINT.</span>
        <b>Webflow</b>
        <b>shopify</b>
        <b>
          Meta<span className="meta-symbol">∞</span>
        </b>
        <b>Google</b>
        <b>WordPress</b>
      </div>
      <section className="contact section-pad" id="contact">
        <p className="eyebrow">Good things begin with a conversation</p>
        <h2>
          Let’s make your
          <br />
          next chapter brighter.
        </h2>
        <p>Bring your big idea. We’ll bring the right kind of energy.</p>
        <div className="actions">
          <a className="button" href="/contact">
            Tell us your idea <span className="circle">↗</span>
          </a>
          <a className="button yellow" href="#services">
            Find your starting point <span>↗</span>
          </a>
        </div>
      </section>
    </>
  );
}
