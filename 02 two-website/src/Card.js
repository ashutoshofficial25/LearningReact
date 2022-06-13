import React from "react";

const Card = ({ title, button, cardText, image }) => {
  return (
    <div>
      <div className="col-4">
        <div className="card" style={{ width: "18rem" }}>
          <img src={image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{cardText}</p>
            <a href="#" className="btn btn-success">
              {button}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
