import React from "react";

function ContactCard(props) {
  return (
    <div className="contact-card">
      <p>Name: {props.name}</p>

      <p>Role: {props.title}</p>

      <p>
        Phone: <a href={"tel:" + props.tel}>{props.tel}</a>
      </p>

      <p>
        Email: <a href={"mailto:" + props.email}>{props.email}</a>
      </p>
    </div>
  );
}

export default ContactCard;
