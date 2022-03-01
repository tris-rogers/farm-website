import React from "react";

function ContactForm() {
  return (
    <form className="contact-form" method="post">
      <h2>Get in Touch With Us</h2>
      <input name="name" placeholder="Name*" required />
      <input name="email" type="email" placeholder="Email*" required />
      <input name="business" placeholder="Business" />
      <textarea
        name="message"
        placeholder="Message*"
        required
        rows="10"
      ></textarea>
      <button type="submit" className="btn">
        Send
      </button>
    </form>
  );
}

export default ContactForm;
