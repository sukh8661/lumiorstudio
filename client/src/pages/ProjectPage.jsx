import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects.js";
import CallToAction from "../components/CallToAction.jsx";
import NotFoundPage from "./NotFoundPage.jsx";
export default function ProjectPage() {
  const { slug } = useParams(),
    project = projects.find((p) => p.slug === slug);
  if (!project) return <NotFoundPage />;
  const next = projects.find((p) => p.slug !== slug);
  return (
    <>
      <section className={"case-hero case-" + project.image}>
        <img
          src={"/assets/" + project.image + ".webp"}
          alt={project.name + " creative direction"}
        />
        <div>
          <Link className="breadcrumb" to="/work">
            ← Selected work
          </Link>
          <p className="eyebrow">SELF-INITIATED EXPLORATION</p>
          <h1>{project.name}</h1>
          <p>{project.line}</p>
        </div>
      </section>
      <section className="case-summary page-wrap">
        <div>
          <p className="eyebrow">THE IDEA</p>
          <h2>{project.line}</h2>
          <p className="lead">{project.description}</p>
        </div>
        <aside>
          <span className="eyebrow">THE SCOPE</span>
          {project.scope.map((s) => (
            <p key={s}>{s}</p>
          ))}
          <p className="small-note">Studio concept · AI-generated imagery</p>
        </aside>
      </section>
      <section className="case-thinking page-wrap">
        <article>
          <p className="eyebrow">01 / THE CHALLENGE</p>
          <h2>A clear starting point.</h2>
          <p className="lead">{project.challenge}</p>
        </article>
        <article>
          <p className="eyebrow">02 / THE APPROACH</p>
          <h2>
            {project.image === "bloom"
              ? "Calm, without blending in."
              : "Space for the details."}
          </h2>
          <p className="lead">{project.approach}</p>
        </article>
      </section>
      <section className="next-project page-wrap">
        <span className="eyebrow">NEXT EXPLORATION</span>
        <Link to={"/work/" + next.slug}>
          {next.name}
          <span>↗</span>
        </Link>
      </section>
      <CallToAction compact />
    </>
  );
}
