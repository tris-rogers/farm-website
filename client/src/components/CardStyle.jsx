import React from "react";


function CardStyle(props) {
  return (
    <div className="card">
      <div className="card-info" style={{ order: props.infoOrder }}>
        <h2 className="card-title">{props.title}</h2>
        <p>{props.content}</p>
        {!props.produce && <button className="btn">{props.buttonLink}</button>}
      </div>
      <div className="card-img" style={{ order: props.imgOrder }}>
        <picture>
          <source media="(min-width:600px)" srcSet={props.imgDesktop} />
          <img src={props.imgMobile} />
        </picture>
      </div>
    </div>
  );
}

export default CardStyle;
