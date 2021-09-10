import React from "react";
import "./About.css";
import Dyson from "../assets/home-feat-dyson.jpg";

const About = () => {
  return (
    <div>
      <h1 className="heading">
        {" "}
        Daily essentials with good intentions - for living life or creating it.{" "}
      </h1>
      <div className="about">
          <img className="image" src={Dyson} alt="diamond" />
          <div>
            <h1 className="heading_1">
              {" "}
              We're not about <br /> pseudoscience and half- <br /> truths
            </h1>
            <p>
              {" "}
              From Omega-3 DHA from microalgae to regeneratively-farmed pea
              protein, our scientists studied diets and genetics to make daily
              essentials based on what we need.{" "}
            </p>
            <a href="/"> Who we are </a>
          </div>
        </div>
      </div>
  );
};

export default About;
