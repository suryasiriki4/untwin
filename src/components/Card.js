import React from "react";
import "./component-styles/Card.css"

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <p className="name">{props.name}</p>
        <img className="circle-img" src={props.img} alt="avatar_img" />
      </div>
      <div className="bottom">
        <p className="info">{props.tel}</p>
        <p className="info">{props.email}</p>
      </div>
    </div>
  );
}

export default Card;
