import { useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects.js";
import CallToAction from "../components/CallToAction.jsx";
export default function WorkPage() {
  const [filter, setFilter] = useState("All");
  return (
    <>
      <section className="work-page-intro page-wrap">
        <p className="eyebrow">SELECTED EXPLORATIONS / 02</p>
        <h1>
          Ideas you can
          <br />
          see and feel.
        </h1>
        <div className="work-intro-bottom">
          <p className="lead">
            Two self-initiated concepts.
            <br />
            Different worlds. The same care in the craft.
          </p>
          <div className="filter-pills">
            {["All", "Brand & commerce", "Web & strategy"].map((item) => (
              <button
                key={item}
                aria-pressed={filter === item}
                onClick={() => setFilter(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </section>
      <section className="portfolio-stories page-wrap">
        {projects
          .filter((p) => filter === "All" || p.category === filter)
          .map((project, i) => (
            <Link
              to={"/work/" + project.slug}
              className={"portfolio-story story-" + i}
              key={project.slug}
            >
              <div className="story-photo">
                <img
                  src={"/assets/" + project.image + ".webp"}
                  alt={project.name + " creative concept"}
                />
                <span>View exploration ↗</span>
              </div>
              <div className="story-copy">
                <p className="eyebrow">{project.category} · Concept</p>
                <h2>{project.name}</h2>
                <p>{project.line}</p>
                <span className="text-link">Explore the thinking ↗</span>
              </div>
            </Link>
          ))}
        <p className="small-note">
          These are illustrative studio explorations, not commissioned client
          work. No client endorsements or commercial results are claimed.
        </p>
      </section>
      <CallToAction compact />
    </>
  );
}
