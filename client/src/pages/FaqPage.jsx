import { useState } from "react";
import { Link } from "react-router-dom";
import FaqList from "../components/FaqList.jsx";
const answers = [
  {
    q: "How do we get started?",
    a: "Tell us about your business and goals on the contact page. You can submit an inquiry when delivery is available or download a brief to keep.",
    group: "Getting started",
  },
  {
    q: "Can you help with more than one service?",
    a: "Yes. We can connect design, development and marketing in a phased plan with a clear scope.",
    group: "Getting started",
  },
  {
    q: "How long does a project take?",
    a: "The timeline depends on scope, content readiness, integrations and feedback. Milestones are agreed in your proposal.",
    group: "Projects",
  },
  {
    q: "Are the portfolio projects client work?",
    a: "The current projects are self-initiated creative concepts. They are labelled as concepts and do not claim commercial results.",
    group: "Projects",
  },
  {
    q: "Who owns the finished work?",
    a: "Ownership, licensing, account access and handover terms are agreed in your project contract.",
    group: "Projects",
  },
  {
    q: "Can you look after an existing website?",
    a: "We review the platform, codebase and access before agreeing a suitable maintenance scope.",
    group: "Ongoing care",
  },
  {
    q: "Is support available around the clock?",
    a: "Coverage and response expectations depend on the support plan you agree with us.",
    group: "Ongoing care",
  },
];
export default function FaqPage() {
  const [group, setGroup] = useState("All"),
    [query, setQuery] = useState("");
  const filtered = answers.filter(
    (a) =>
      (group === "All" || a.group === group) &&
      (a.q + " " + a.a).toLowerCase().includes(query.toLowerCase()),
  );
  return (
    <>
      <section className="faq-heading page-wrap">
        <p className="eyebrow">A LITTLE CLARITY</p>
        <h1>
          Good questions.
          <br />
          Useful answers.
        </h1>
        <label className="faq-search">
          <span>⌕</span>
          <input
            aria-label="Search questions"
            placeholder="What would you like to know?"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>
      </section>
      <section className="faq-directory page-wrap">
        <div className="filter-pills">
          {["All", "Getting started", "Projects", "Ongoing care"].map(
            (item) => (
              <button
                aria-pressed={group === item}
                onClick={() => setGroup(item)}
                key={item}
              >
                {item}
              </button>
            ),
          )}
        </div>
        <FaqList items={filtered} />
        {!filtered.length && (
          <p className="small-note">
            No matching questions. Try another word or{" "}
            <Link to="/contact">ask us directly</Link>.
          </p>
        )}
        <div className="faq-bottom">
          <span>Still have something on your mind?</span>
          <Link className="button yellow" to="/contact">
            Let’s talk ↗
          </Link>
        </div>
      </section>
    </>
  );
}
