import React from "react";
import "./style.css";
import SliderImg from "../images/main-banner-1-1600x700.jpg";
const Slider = () => {
  return (
    <div>
      <section class="slider">
        <div class="container">
          <div class="dot">
            <img src={SliderImg} alt="" />
            <ul class="list-unstyled">
              <li class="first"></li>
              <li class="second"></li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Slider;
