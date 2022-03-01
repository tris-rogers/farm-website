import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright © Gnagara Premium Fresh {year}</p>
      <p>Site by Tristan Rogers</p>
    </footer>
  );
}

export default Footer;
