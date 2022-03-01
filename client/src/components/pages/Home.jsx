import React from "react";
import Header from "../Header";
import CardStyle from "../CardStyle";
import lettuceBowl from "../../images/mobile/lettuce-bowl.png";
import lettuceBowlDesktop from "../../images/desktop/lettuce-bowl.png";
import grow from "../../images/mobile/grow.png";
import growDesktop from "../../images/desktop/grow.png";
import harvest from "../../images/mobile/harvest.png";
import harvestDesktop from "../../images/desktop/harvest.png";
import { Link } from "react-router-dom";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";

function Home() {
  const linkStyle = {
    textDecoration: "none",
    color: "#EEEEEE",
    display: "flex",
    justifyContent: "center",
  };
  return (
    <div>
      <Header />

      <section className="light-section">
        <CardStyle
          imgMobile={lettuceBowl}
          imgDesktop={lettuceBowlDesktop}
          imgOrder={0}
          infoOrder={1}
          title="Family Business"
          content="Gnagara Premium Fresh is a family business which has been running for
          over 20 years. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua."
          buttonLink={
            <Link to="/about" style={linkStyle}>
              Our Story
            </Link>
          }
        />
      </section>

      <section className="colored-section">
        <CardStyle
          imgMobile={grow}
          imgDesktop={growDesktop}
          imgOrder={1}
          infoOrder={0}
          title="What We Grow"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua."
          buttonLink={
            <Link to="/produce" style={linkStyle}>
              <LocalGroceryStoreIcon fontSize="large" />
              Products
            </Link>
          }
        />
      </section>

      <section className="light-section">
        <CardStyle
          imgMobile={harvest}
          imgDesktop={harvestDesktop}
          imgOrder={0}
          infoOrder={1}
          title="How to Order"
          content="If you are interested in ordering, or just finding out a little bit more info about us, please do not hesitate to get in contact."
          buttonLink={
            <Link to="/contact" style={linkStyle}>
              <ContactPageIcon fontSize="large" /> Contact
            </Link>
          }
        />
      </section>
    </div>
  );
}

export default Home;
