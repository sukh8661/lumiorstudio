import { Link } from "react-router-dom";
export default function CallToAction({ home = false }) {
  return (
    <section className="contact section-pad" id="contact">
      <p className="eyebrow">Good things begin with a conversation</p>
      <h2>
        Let’s make your
        <br />
        next chapter brighter.
      </h2>
      <p>Bring your big idea. We’ll bring the right kind of energy.</p>
      <div className="actions">
        <Link className="button" to="/contact">
          Tell us your idea <span className="circle">↗</span>
        </Link>
        {home ? (
          <a className="button yellow" href="#services">
            Find your starting point <span>↗</span>
          </a>
        ) : (
          <Link className="button yellow" to="/services">
            Find your starting point <span>↗</span>
          </Link>
        )}
      </div>
    </section>
  );
}
