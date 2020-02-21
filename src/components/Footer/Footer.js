import React, { Component } from "react";
import "./style.css";

import FooterLogo from "../images/footer-logo.png";
import Footer1 from "../images/cms-footer-1.png";
import Footer2 from "../images/cms-footer-2.png";

const InputStyle = {
  backgroundColor: "#000",
  border: "1px solid grey",
  padding: " 10px 2px",
  marginTop: " 50px"
};

const IconGrey1 = {
  color: "grey"
};

const SocialList = {
  color: "grey",
  marginTop: "40px"
};

const ListItems = {
  display: "inline-block"
};

const FooterIcons = {
  paddingRight: "10px"
};
class Footer extends Component {
  render() {
    return (
      <div>
        <section class="footer section-padding">
          <div class="container">
            <div class="footer-downloads">
              <img src={FooterLogo} alt="" />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
                necessitatibus sequi earum tempora sapiente possimus fuga
                minima, eius eaque commodi?
              </p>
              <div class="footer-downloads-info">
                <img src={Footer1} alt="" />
                <img src={Footer2} alt="" />
              </div>
            </div>

            <div class="footer-lists">
              <div class="footer-list-1">
                <h3>Information</h3>
                <ul class="list-unstyled">
                  <li>About us</li>
                  <li>Delivery Information</li>
                  <li>Privacy Policy</li>
                  <li>Terms & Conditions</li>
                  <li>Site Map</li>
                </ul>
              </div>
              <div class="footer-list-2">
                <h3>My Account</h3>
                <ul class="list-unstyled">
                  <li>My Accounts</li>
                  <li>Order History</li>
                  <li>Wish List</li>
                  <li>Newsletter</li>
                  <li>Returns</li>
                </ul>
              </div>
            </div>
            <div class="footer-subscribe">
              <h3>Subscribe Now</h3>
              <div class="search">
                <br />
                <br />
                <input
                  type="email"
                  placeholder="Enter your Email Address.."
                  style={InputStyle}
                />
                <i class="icon fa fa-send fa-lg" style={IconGrey1}></i>
              </div>

              <ul class="list-unstyled social" style={SocialList}>
                <li style={ListItems}>
                  <i class="fa fa-facebook fa-lg" style={FooterIcons}></i>
                </li>
                <li style={ListItems}>
                  <i class="fa fa-twitter fa-lg" style={FooterIcons}></i>
                </li>
                <li style={ListItems}>
                  <i class="fa fa-instagram fa-lg" style={FooterIcons}></i>
                </li>
                <li style={ListItems}>
                  <i class="fa fa-youtube fa-lg" style={FooterIcons}></i>
                </li>
                <li style={ListItems}>
                  <i class="fa fa-google-plus fa-lg" style={FooterIcons}></i>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <div class="footer-two">
          <br />
          <div class="container">
            <span>powered by Sophie Ro &copu;2020 All rights reserver</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
