import React from "react";

function ContactForm() {
  return (
    <form className="contact-form">
      <h2>Get in Touch With Us</h2>
      <input placeholder="Name*" required />
      <input type="email" placeholder="Email*" required />
      <input placeholder="Business" />
      <textarea placeholder="Message*" required rows="10"></textarea>
      <button type="submit" className="btn">
        Send
      </button>
    </form>
  );
}

export default ContactForm;
