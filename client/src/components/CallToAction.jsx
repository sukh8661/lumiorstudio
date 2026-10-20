import { Link } from "react-router-dom";
export default function CallToAction({ compact = false }) {
  return (
    <section
      className={compact ? "closing-note section-pad" : "contact section-pad"}
    >
      <p className="eyebrow">Good things begin with a conversation</p>
      <h2>
        Let’s make your
        <br />
        next chapter brighter.
      </h2>
      <p>Bring your big idea. We’ll bring the right kind of energy.</p>
      <Link className="button yellow" to="/contact">
        Start a conversation ↗
      </Link>
    </section>
  );
}
