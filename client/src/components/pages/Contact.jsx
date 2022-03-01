import React from "react";
import ContactForm from "./ContactForm";
import landscape from "../../images/mobile/landscape.png";
import landscapeDesktop from "../../images/desktop/landscape.png";
import { useMediaQuery } from "react-responsive";
import ContactCard from "./ContactCard";

function Contact() {
  const isNotMobile = useMediaQuery({
    query: "(min-width:600px)",
  });

  const backgroundImage = isNotMobile ? landscapeDesktop : landscape;

  return (
    <div>
      <div
        className="header-image"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="title-div">
          <h1>Contact</h1>
          <p>
            We deliver to the local area, with routes in Albury/Wodonga,
            Yarrawonga, and as far north as Wagga Wagga. Feel free to get in
            contact to enquire about where we can deliver!
          </p>
        </div>
      </div>
      <div>
        <div className="contact-card-container">
          <ContactCard
            name="Jeff Brumley"
            title="Director"
            tel="555555"
            email="example@example.com"
          />
          <ContactCard
            name="Pam Brumley"
            title="Director"
            tel="555555"
            email="example@example.com"
          />
          <ContactCard
            name="Jack Brumley"
            title="Manager"
            tel="555555"
            email="example@example.com"
          />
        </div>
        <hr />

        <ContactForm />

        <p style={{ textAlign: "center" }}>
          Gnangara is located just outside of Yackandah, Victoria- close to the
          NSW boarder
        </p>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3214.409118043344!2d146.87863031570637!3d-36.32663328004893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b26aad4c2a3a647%3A0x61953abcf63762e6!2s4%20Blairs%20Ln%2C%20Yackandandah%20VIC%203749!5e0!3m2!1sen!2sau!4v1646015680707!5m2!1sen!2sau"
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default Contact;
