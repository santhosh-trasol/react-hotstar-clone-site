import React from "react";
import "./Main.css";
import fb from "./images/fb.png";
import tw from "./images/Twitter.png";
import app from "./images/app-store.png";
function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="f-start">
              <ul className="d-flex list-unstyled">
                <li className="footer-link">
                  <a href="">About Disney+ Hotstar</a>
                </li>
                <li className="footer-link">
                  <a href="">Terms Of Use</a>
                </li>
                <li className="footer-link">
                  <a href="">Privacy Policy</a>
                </li>
                <li className="footer-link">
                  <a href="">FAQ</a>
                </li>
                <li className="footer-link">
                  <a href="">Feedback</a>
                </li>
                <li className="footer-link">
                  <a href="">Careers</a>
                </li>
              </ul>
              <p className="disclaimer f-text">
                © 2022 STAR. All Rights Reserved. HBO, Home Box Office and all
                related channel and programming logos are service marks of, and
                all related programming visuals and elements are the property
                of, Home Box Office, Inc. All rights reserved.
              </p>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="f-mid">
              <p className="f-text">Connect With Us</p>
              <ul className="d-flex list-unstyled">
                <li>
                  <a href="" className="c-fit">
                    <img src={fb} />
                  </a>
                </li>
                <li>
                  <a href="" className="c-fit">
                    <img src={tw} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="f-last">
              <p className="f-text">Disney+ Hotstar App</p>
              <a href="" className="d-fit">
                <img src={app} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
