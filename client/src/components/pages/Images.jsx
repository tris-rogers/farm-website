import React from "react";

function Images(props) {
  return (
    <div className="image-collage">
      <img src={props.img1} />
      <img src={props.img2} />
      <img src={props.img3} />
      <img src={props.img4} />
    </div>
  );
}

export default Images;
