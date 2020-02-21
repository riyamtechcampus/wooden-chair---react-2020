import React, { Component } from "react";
import "./style.css";

import CatagoryBanner1 from "../images/category-banner1.jpg";
import CatagoryBanner2 from "../images/category-banner2.jpg";
import CatagoryBanner3 from "../images/category-banner3.jpg";
import CatagoryBanner4 from "../images/category-banner4.jpg";

class Catagory extends Component {
  state = {};
  render() {
    return (
      <div>
        <section class="catagory">
          <div class="section-header">
            <h2 class="section-title section-padding">Special Catagory</h2>
            <span class="line"></span>
          </div>

          <div class="container">
            <div class="catagory-items">
              <div class="catagory-item">
                <img src={CatagoryBanner1} alt="" />
                <h4 class="catagory-item-subtitle">Most Popular</h4>
                <h3 class="catagory-item-title">Modern Chair Collections</h3>
                <i class="icon fa fa-angle-right fa-lg"></i>
              </div>
              <div class="catagory-item">
                <img src={CatagoryBanner2} alt="" />
                <h4 class="catagory-item-subtitle">Most Popular</h4>
                <h3 class="catagory-item-title">Modern Chair Collections</h3>
                <i class="icon fa fa-angle-right fa-lg"></i>
              </div>
              <div class="catagory-item">
                <img src={CatagoryBanner3} alt="" />
                <h4 class="catagory-item-subtitle">Most Popular</h4>
                <h3 class="catagory-item-title">Modern Chair Collections</h3>
                <i class="icon fa fa-angle-right fa-lg"></i>
              </div>
              <div class="catagory-item">
                <img src={CatagoryBanner4} alt="" />
                <h4 class="catagory-item-subtitle">Most Popular</h4>
                <h3 class="catagory-item-title">Modern Chair Collections</h3>
                <i class="icon fa fa-angle-right fa-lg"></i>
              </div>
            </div>

            <div class="catagory-dots">
              <ul class="list-unstyled">
                <li class="first"></li>
                <li class="second"></li>
              </ul>
            </div>

            <div class="discount">
              <div class="discount-desc">
                <div class="top">
                  <i class="icon fa fa-quote-left fa-lg"></i>
                  <h2 class="discount-title">Penelope Artist</h2>
                  <span class="discount-subtitle">(Marketing)</span>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi magnam quibusdam numquam labore quia eveniet dolorum
                  asperiores deserunt harum libero, aspernatur suscipit corporis
                  dignissimos totam{" "}
                </p>
                <div class="bullets">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div class="discount-item">
                <div class="discount-item-info">
                  <h3>30% Discount</h3>
                  <h2>Designing Interior</h2>
                </div>
              </div>
              <div class="discount-item">
                <div class="discount-item-info">
                  <h3>30% Discount</h3>
                  <h2>Designing Interior</h2>
                </div>
              </div>
            </div>

            <div class="sprites">
              <div class="sprite-item">
                <div class="sprite-icon sprite-icon-1"></div>
                <div class="sprite-info">
                  <h3>Free Delivery</h3>
                  <span>Free Shipping On All Order</span>
                </div>
              </div>
              <div class="sprite-item">
                <div class="sprite-icon sprite-icon-2"></div>
                <div class="sprite-info">
                  <h3>Free Delivery</h3>
                  <span>Free Shipping On All Order</span>
                </div>
              </div>
              <div class="sprite-item">
                <div class="sprite-icon sprite-icon-3"></div>
                <div class="sprite-info">
                  <h3>Free Delivery</h3>
                  <span>Free Shipping On All Order</span>
                </div>
              </div>
              <div class="sprite-item">
                <div class="sprite-icon sprite-icon-4"></div>
                <div class="sprite-info">
                  <h3>Free Delivery</h3>
                  <span>Free Shipping On All Order</span>
                </div>
              </div>
              <div class="sprite-item">
                <div class="sprite-icon sprite-icon-5"></div>
                <div class="sprite-info">
                  <h3>Free Delivery</h3>
                  <span>Free Shipping On All Order</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Catagory;
