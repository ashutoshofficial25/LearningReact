import React from "react";
import Card from "./Card";
const CardSection = () => {
  return (
    <div>
      <section className="contact bg-success ">
        <div className="container ">
          <h2 className="text-white">We love new friends!</h2>
          <div className="row">
            <Card
              title="MyCard"
              button="Visit MyCard"
              cardText="Some quick example text to build on the card title and make up the
            bulk of the cards content."
              image="https://images.pexels.com/photos/3532557/pexels-photo-3532557.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            />
            <Card
              title="Card 2"
              button="Visit c2"
              cardText="Some quick example text to build on the card title and make
                    up the bulk of the card's content."
              image="https://images.pexels.com/photos/3532544/pexels-photo-3532544.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            />

            <Card
              title="Card 3"
              button="visit page"
              cardText=" Some quick example text to build on the card title and make
                    up the bulk of the cards content."
              image="https://images.pexels.com/photos/2522663/pexels-photo-2522663.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CardSection;
