import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const MAX_CHARS = 200;

  function handleChange(e) {
    const { name, value } = e.target;
    if (name === "feedback" && value.length > MAX_CHARS) return;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit() {
    setSubmitted(true);
  }

  const isFormValid =
    formData.name.trim() &&
    formData.email.trim() &&
    formData.feedback.trim();

  return (
    <div className="page">
      <div className="form-card">
        <h1>Share your feedback</h1>

        <div className="field">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="field">
          <label htmlFor="feedback">Feedback</label>
          <textarea
            id="feedback"
            name="feedback"
            placeholder="What's on your mind?"
            value={formData.feedback}
            onChange={handleChange}
          />
          <p className={`char-count ${formData.feedback.length > 160 ? "warn" : ""}`}>
            {formData.feedback.length} / {MAX_CHARS}
          </p>
        </div>

        <button
          className="submit-btn"
          onClick={handleSubmit}
          disabled={!isFormValid}
        >
          Submit
        </button>

        {submitted && (
          <p className="success">Thanks for your feedback!</p>
        )}
      </div>

      <div className="preview">
        <h2>Live preview</h2>
        <p><span className="label">Name:</span> {formData.name || <em>–</em>}</p>
        <p><span className="label">Email:</span> {formData.email || <em>–</em>}</p>
        <p><span className="label">Feedback:</span> {formData.feedback || <em>–</em>}</p>
      </div>
    </div>
  );
}

export default App;