import React from "react";
import Style from "./style.css";

const ImgCard = (props) => {
  return (
    <div className="col col-md-3">
      <div className="card" onClick={() => props.pickedCard(props.id)}>
        <img src={props.image} className="card-img-top" />
      </div>
    </div>
  );
};

export default ImgCard;
