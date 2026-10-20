import { Link } from "react-router-dom";
import InquiryForm from "../components/InquiryForm.jsx";
export default function ContactPage() {
  return (
    <section className="contact-page page-wrap">
      <div className="contact-introduction">
        <p className="eyebrow">GOOD THINGS BEGIN WITH A CONVERSATION</p>
        <h1>
          What’s on
          <br />
          your horizon?
        </h1>
        <p className="lead">
          A new idea. A tricky problem.
          <br />A next chapter worth getting right.
        </p>
        <div className="contact-flower" aria-hidden="true">
          ✿
        </div>
        <div className="contact-guidance">
          <p>Tell us what you’re working towards. We’ll take it from there.</p>
          <Link className="text-link" to="/faq">
            A few useful answers ↗
          </Link>
        </div>
      </div>
      <div className="contact-form-panel">
        <span className="eyebrow">A LITTLE ABOUT YOUR NEXT CHAPTER</span>
        <InquiryForm />
      </div>
    </section>
  );
}
