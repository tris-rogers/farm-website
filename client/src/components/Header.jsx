import React from "react";
import { Link } from "react-router-dom";
import lettuce from "../images/mobile/lettuce.png";
import lettucedesktop from "../images/desktop/lettucedesktop.png";


function Header() {
  return (
    <header>
      <div className="title-container">
        <h1 className="title">Buy Fresh Lettuce,</h1>
        <h2 className="title">
          delivered straight from the Farm to your Business
        </h2>
        <button className="btn">
          <Link
            to="/contact"
            style={{ textDecoration: "none", color: "#EEEEEE" }}
          >
            More Info
          </Link>
        </button>
      </div>
      <div className="image-container">
        <picture>
          <source
            media="(min-width:600px)"
            srcSet={lettucedesktop}
          />
          <img src={lettuce} />
        </picture>
      </div>

      {/* 
      <picture>
  <source media="(min-width:650px)" srcset="img_pink_flowers.jpg">
  <source media="(min-width:465px)" srcset="img_white_flower.jpg">
  <img src="img_orange_flowers.jpg" alt="Flowers" style="width:auto;">
</picture> */}
    </header>
  );
}

export default Header;
