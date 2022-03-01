import React from "react";
import CardStyle from "../CardStyle";
import ProduceVariety from "./ProduceVariery";
import products from "../../products";

function Produce() {
  return (
    <div>
      <div
        className="header-image"
        style={{
          background:
            "url('https://images.pexels.com/photos/2886937/pexels-photo-2886937.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')",
          backgroundPosition: "50% 75%",
        }}
      >
        <div className="title-div">
          <h1>Products</h1>
          <p>
            We have a wide range of products, made from the lettuce varieties
            we grow on the farm. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
        </div>
      </div>

      <div className="product-container">
        {products.map((item, i) => {
          return (
            <CardStyle
              key={i}
              imgMobile={item.imgMobile}
              imgDesktop={item.imgDesktop}
              title={item.title}
              content={item.content}
              imgOrder={i % 2 === 0 ? "1" : "0"}
              infoOrder={i % 2 === 0 ? "0" : "1"}
              produce="true"
            />
          );
        })}
      </div>
    </div>
  );

  // Album of varieties
  // G/O, R/O, G/Coral, R/Coral, Cos, Mesclun Red, Mesclun Green, Meditation, Corriander

  // Nutrition

  // Picking and Packing

  // Delivery
}

export default Produce;
