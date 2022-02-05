import React from "react";

const Card = ({ imgUrl, name, description }) => {
  return (
    <div className="card">
      <img src={imgUrl} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Card;
