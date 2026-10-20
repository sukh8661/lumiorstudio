import { Link } from "react-router-dom";
import CallToAction from "../components/CallToAction.jsx";
export default function AboutPage() {
  return (
    <>
      <section className="about-editorial page-wrap">
        <div className="about-letter">
          <p className="eyebrow">A LITTLE ABOUT ESGROW</p>
          <h1>
            Independent minds.
            <br />
            Shared ambition.
          </h1>
          <p className="lead">
            We like good questions, considered details and work that makes
            things clearer.
          </p>
          <p>
            Esgrow Studio connects design, development and digital marketing. We
            help businesses bring the pieces together, so the website, the
            message and the next step feel part of the same picture.
          </p>
          <Link className="text-link" to="/contact">
            Get to know your next team ↗
          </Link>
        </div>
        <figure>
          <img
            src="/assets/studio.webp"
            alt="An illustrated creative studio in a sunlit garden"
          />
          <figcaption>A little imagination. A lot of possibility.</figcaption>
        </figure>
      </section>
      <section className="studio-manifesto page-wrap">
        <p className="eyebrow">THE WAY WE WORK</p>
        <h2>
          Big on care.
          <br />
          <span>Light on complication.</span>
        </h2>
        <div className="manifesto-list">
          {[
            [
              "Clarity, before complexity.",
              "Ask useful questions. Agree what matters. Make the next step clear.",
            ],
            [
              "Craft, with a purpose.",
              "Make it feel considered, then make sure it works for the people using it.",
            ],
            [
              "A shared point of view.",
              "Keep the conversation open. Bring the right thinking to each part of the work.",
            ],
          ].map(([title, description], i) => (
            <article className="reveal" key={title}>
              <span>0{i + 1}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>
      <CallToAction />
    </>
  );
}
