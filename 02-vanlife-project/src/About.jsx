import React from "react";
import heroImg from "./assets/image54.png";

const About = () => {
  return (
    <main className="about main">
      <div className="about__hero-img">
        <img src={heroImg} alt="Van camping in the night" />
      </div>
      <div className="about__content">
        <h1 className="about__title">
          Don’t squeeze in a sedan when you could relax in a van.
        </h1>
        <p>
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch.
          <br />
          (Hitch costs extra 😉)
        </p>
        <p>
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
        <div className="about__highlight">
          <h3>Your destination is waiting.</h3>
          <h3>Your van is ready.</h3>
          <button className="about__highlight-button">Explore our vans</button>
        </div>
      </div>
    </main>
  );
};

export default About;
