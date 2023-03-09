import "./Layout.scss"

import Twiter from "../../assets/twitter.svg"
import Facebook from "../../assets/facebook.svg"
import Linkedin from "../../assets/linkedin.svg"
import Instagram from "../../assets/instagram.svg"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="footer-area pt-100 pb-50">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-sm-6">
            <div className="single-footer-widget">
              <div className="footer-logo">
                <a href="https://sniser.com/">
                  <img src="https://sniser.com/images/Sniser.svg" alt="" />
                </a>
              </div>
              <div className="footer-widgets">
                <p>
                  Sniser provides an innovative
                  <br /> solution to protect artists creativity using blockchain
                  technology.
                </p>
              </div>
              <ul className="social mt-20">
                <li>
                  <a
                    href="https://www.facebook.com/Sniserman/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={Facebook} style={{ width: "42px" }} alt="" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/sniser-ltd-b0a9a6205/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={Linkedin} style={{ width: "42px" }} alt="" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/Sniser4"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={Twiter} style={{ width: "42px" }} alt="" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/sniser_nfts/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={Instagram} style={{ width: "42px" }} alt="" />
                  </a>
                </li>
              </ul>
              <div className="app-boxs">
                <a href="#">
                  <img
                    src="https://sniser.com/https://sniser.com/images/aap1.png"
                    alt=""
                  />
                </a>
                <a href="#">
                  <img
                    src="https://sniser.com/https://sniser.com/images/aap2.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6">
            <div className="single-footer-widget pl-5">
              <h3>Site Links</h3>
              <ul className="quick-links">
                <li>
                  <a href="https://sniser.com/">Homepage</a>
                </li>
                <li>
                  <a href="https://sniser.com/our-algorithm/">How it works</a>
                </li>
                <li>
                  <Link to="/artist-service">Artist service</Link>
                </li>
                <li>
                  <Link to="/faq">FAQs</Link>
                </li>
                <li>
                  <Link to="/about-us">About Us</Link>
                </li>
                <li>
                  <a href="https://sniser.com/contact-us/">Contact Us</a>
                </li>
                <li>
                  <a href="https://sniser.com/sign-up/">Nft Shop Signup</a>
                </li>
                <li>
                  <a href="#">Sitemap</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="single-footer-widget pl-5">
              <h3>Corporate Information</h3>
              <ul className="quick-links">
                <li>
                  <a href="#">SNISER LTD</a>
                </li>
                <li>
                  <a href="#">3rd Floor </a>
                </li>
                <li>
                  <a href="#">86-90 Paul Street</a>
                </li>
                <li>
                  <a href="#">London</a>
                </li>
                <li>
                  <a href="#">EC2A 4NE</a>
                </li>
                <li>
                  <a href="#">support@sniser.com</a>
                </li>
                <li>
                  <a href="#">Registered in England and Wales (13149945)</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
