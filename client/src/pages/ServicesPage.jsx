import { useState } from "react";
import { Link } from "react-router-dom";
import services from "../data/services.json";
import CallToAction from "../components/CallToAction.jsx";
const groups = {
  All: services.map((s) => s.slug),
  Build: [
    "web-design",
    "website-development",
    "hosting-cloud",
    "maintenance-support",
  ],
  Grow: ["seo", "social-media", "performance-marketing"],
  Shape: ["digital-strategy", "branding-content"],
};
const glyphs = ["◒", "⌘", "↗", "✳", "◎", "▥", "☁", "Aa", "✦"];
export default function ServicesPage() {
  const [group, setGroup] = useState("All");
  return (
    <>
      <section className="directory-intro page-wrap">
        <div>
          <p className="eyebrow">OUR EXPERTISE / 01—09</p>
          <h1>
            Many moving parts.
            <br />
            One connected team.
          </h1>
        </div>
        <p className="lead">
          From your first idea to your next stage of growth. Choose the piece
          you need, or bring the whole picture together.
        </p>
      </section>
      <section className="service-catalog page-wrap">
        <div className="catalog-bar">
          <span>Nine ways forward.</span>
          <div className="filter-pills" aria-label="Filter services">
            {Object.keys(groups).map((name) => (
              <button
                aria-pressed={group === name}
                key={name}
                onClick={() => setGroup(name)}
              >
                {name}
              </button>
            ))}
          </div>
        </div>
        <div className="service-tile-grid">
          {services
            .filter((s) => groups[group].includes(s.slug))
            .map((s) => {
              const i = services.indexOf(s);
              return (
                <Link
                  className="service-tile"
                  key={s.slug}
                  to={"/services/" + s.slug}
                >
                  <div className="tile-top">
                    <span>{String(i + 1).padStart(2, "0")}</span>
                    <span>↗</span>
                  </div>
                  <span className="service-glyph" aria-hidden="true">
                    {glyphs[i]}
                  </span>
                  <h2>{s.name}</h2>
                  <p>{s.headline}</p>
                  <span className="tile-line" />
                </Link>
              );
            })}
        </div>
        <p className="small-note">
          Not sure where to start?{" "}
          <Link to="/contact">Tell us what you’re trying to solve ↗</Link>
        </p>
      </section>
      <CallToAction compact />
    </>
  );
}
