import React, { Component } from "react";
import "./style.css";

import Chair1 from "../images/chair1.jpg";
import Chair2 from "../images/chair2.jpg";
import Chair3 from "../images/chair3.jpg";
import Chair4 from "../images/chair4.jpg";
import Chair5 from "../images/chair5.jpg";
import Chair6 from "../images/chair6.jpg";
import Banner from "../images/banner.PNG";
import Play from "../images/play.png";
import Client1 from "../images/client1.png";
import Client2 from "../images/client2.png";
import Client3 from "../images/client3.png";
import Client4 from "../images/client4.png";
import Client5 from "../images/client5.png";
import Client6 from "../images/client6.png";
class Products extends Component {
  render() {
    return (
      <div>
        <section class="products">
          <div class="section-header">
            <h2 class="section-title section-padding">Featured Products</h2>
            <span class="line"></span>
          </div>
          <div class="container">
            <ul class="list-unstyled list-products">
              <li>
                <a href="#">Wooden Chair</a>
              </li>
              <li>
                <a href="#">Plastic Chair</a>
              </li>
              <li>
                <a href="#">Study Table</a>
              </li>
              <li>
                <a href="#">Armoires</a>
              </li>
            </ul>

            <div class="products-items">
              <div class="product-item">
                <div class="product-img">
                  <img src={Chair1} alt="" />
                  <div class="product-overlay">
                    <img src={Chair2} alt="" />
                    <ul class="list-unstyled">
                      <li>
                        <i class="icon fa fa-heart fa-lg"></i>
                      </li>
                      <li>
                        <i class="icon fa fa-pinterest fa-lg"></i>
                      </li>
                      <li>
                        <i class="icon fa fa-user fa-lg"></i>
                      </li>
                      <li>
                        <i class="icon fa fa-shopping-cart fa-lg"></i>
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="product-info">
                  <i class="fa fa-star fa-sm"></i>
                  <i class="fa fa-star fa-sm"></i>
                  <i class="fa fa-star fa-sm"></i>
                  <i class="fa fa-star fa-sm"></i>
                  <i class="fa fa-star fa-sm"></i>
                  <br />
                  <span>Product item</span>
                  <h4>$108.9</h4>
                </div>
              </div>

              <div class="product-item">
                <div class="product-img">
                  <img src={Chair3} alt="" />
                  <div class="product-overlay">
                    <img src={Chair4} alt="" />
                    <ul class="list-unstyled">
                      <li>
                        <i class="icon fa fa-heart fa-lg"></i>
                      </li>
                      <li>
                        <i class="icon fa fa-pinterest fa-lg"></i>
                      </li>
                      <li>
                        <i class="icon fa fa-user fa-lg"></i>
                      </li>
                      <li>
                        <i class="icon fa fa-shopping-cart fa-lg"></i>
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="product-info">
                  <i class="fa fa-star fa-sm"></i>
                  <i class="fa fa-star fa-sm"></i>
                  <i class="fa fa-star fa-sm"></i>
                  <i class="icon fa fa-star fa-sm"></i>
                  <i class="fa fa-star fa-sm"></i>
                  <br />
                  <span>Product item</span>
                  <h4>$200.9</h4>
                </div>
              </div>

              <div class="product-item">
                <div class="product-img">
                  <img src={Chair5} alt="" />
                  <div class="product-overlay">
                    <img src={Chair6} alt="" />
                    <ul class="list-unstyled">
                      <li>
                        <i class="icon fa fa-heart fa-lg"></i>
                      </li>
                      <li>
                        <i class="icon fa fa-pinterest fa-lg"></i>
                      </li>
                      <li>
                        <i class="icon fa fa-user fa-lg"></i>
                      </li>
                      <li>
                        <i class="icon fa fa-shopping-cart fa-lg"></i>
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="product-info">
                  <i class="fa fa-star fa-sm"></i>
                  <i class="fa fa-star fa-sm"></i>
                  <i class="fa fa-star fa-sm"></i>
                  <i class="icon fa fa-star fa-sm"></i>
                  <i class="icon fa fa-star fa-sm"></i>
                  <br />
                  <span>Product item</span>
                  <h4>$100.9</h4>
                </div>
              </div>
            </div>
            <div class="products-items">
              <div class="product-item">
                <div class="product-img">
                  <img src={Chair1} alt="" />
                  <div class="product-overlay">
                    <img src={Chair2} alt="" />
                    <ul class="list-unstyled">
                      <li>
                        <i class="icon fa fa-heart fa-lg"></i>
                      </li>
                      <li>
                        <i class="icon fa fa-pinterest fa-lg"></i>
                      </li>
                      <li>
                        <i class="icon fa fa-user fa-lg"></i>
                      </li>
                      <li>
                        <i class="icon fa fa-shopping-cart fa-lg"></i>
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="product-info">
                  <i class="fa fa-star fa-sm"></i>
                  <i class="fa fa-star fa-sm"></i>
                  <i class="fa fa-star fa-sm"></i>
                  <i class="fa fa-star fa-sm"></i>
                  <i class="fa fa-star fa-sm"></i>
                  <br />
                  <span>Product item</span>
                  <h4>$108.9</h4>
                </div>
              </div>

              <div class="product-item">
                <div class="product-img">
                  <img src={Chair3} alt="" />
                  <div class="product-overlay">
                    <img src={Chair4} alt="" />
                    <ul class="list-unstyled">
                      <li>
                        <i class="icon fa fa-heart fa-lg"></i>
                      </li>
                      <li>
                        <i class="icon fa fa-pinterest fa-lg"></i>
                      </li>
                      <li>
                        <i class="icon fa fa-user fa-lg"></i>
                      </li>
                      <li>
                        <i class="icon fa fa-shopping-cart fa-lg"></i>
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="product-info">
                  <i class="fa fa-star fa-sm"></i>
                  <i class="fa fa-star fa-sm"></i>
                  <i class="fa fa-star fa-sm"></i>
                  <i class="icon fa fa-star fa-sm"></i>
                  <i class="fa fa-star fa-sm"></i>
                  <br />
                  <span>Product item</span>
                  <h4>$200.9</h4>
                </div>
              </div>

              <div class="product-item">
                <div class="product-img">
                  <img src={Chair5} alt="" />
                  <div class="product-overlay">
                    <img src={Chair6} alt="" />
                    <ul class="list-unstyled">
                      <li>
                        <i class="icon fa fa-heart fa-lg"></i>
                      </li>
                      <li>
                        <i class="icon fa fa-pinterest fa-lg"></i>
                      </li>
                      <li>
                        <i class="icon fa fa-user fa-lg"></i>
                      </li>
                      <li>
                        <i class="icon fa fa-shopping-cart fa-lg"></i>
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="product-info">
                  <i class="fa fa-star fa-sm"></i>
                  <i class="fa fa-star fa-sm"></i>
                  <i class="fa fa-star fa-sm"></i>
                  <i class="icon fa fa-star fa-sm"></i>
                  <i class="icon fa fa-star fa-sm"></i>
                  <br />
                  <span>Product item</span>
                  <h4>$100.9</h4>
                </div>
              </div>
            </div>
            <div class="events section-padding">
              <div class="event-items">
                <img src={Banner} alt="" />
                <div class="event-overlay">
                  <img src={Play} alt="" />
                </div>
              </div>
              <div class="event-info">
                <div class="event-info-overlay">
                  <div class="event-info-left">
                    <h3>28</h3>
                    <h4>February 2020</h4>
                  </div>
                  <div class="event-info-right">
                    <h5>Necessilatubus Speepe Eveniet</h5>
                  </div>
                </div>

                <div class="overlay-desc">
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut
                    nisi voluptatibus veritatis nulla laudantium provident rem
                    quos ad nesciunt molestias maxime obcaecati tempora
                    voluptates autem excepturi fugit, quas placeat in
                    reprehenderit nemo, porro minima hic consequatur eligendi.
                    Architecto unde illo harum nostrum facilis quasi deleniti
                    qui. Tempora ipsa iste natus?
                  </p>
                </div>

                <div class="info-lists">
                  <span class="active"></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
            <div class="product-spirit-second section-padding">
              <div class="product-spirit-icon product-spirit-icon-1">
                <img src={Client1} alt="" />
              </div>
              <div class="product-spirit-icon product-spirit-icon-1">
                <img src={Client2} alt="" />
              </div>
              <div class="product-spirit-icon product-spirit-icon-1">
                <img src={Client3} alt="" />
              </div>
              <div class="product-spirit-icon product-spirit-icon-1">
                <img src={Client4} alt="" />
              </div>
              <div class="product-spirit-icon product-spirit-icon-1">
                <img src={Client5} alt="" />
              </div>
              <div class="product-spirit-icon product-spirit-icon-1">
                <img src={Client6} alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Products;
