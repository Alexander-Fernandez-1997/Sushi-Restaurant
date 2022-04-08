import React from "react";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="footer text-light row">
      <div className="col-12 col-md-4 footer-item">
        <div>
          <h4>Find us</h4>
          <p>
            Palermo 174 <br />
            Buenos Aires
          </p>

          <div className="footer-icons">
            <a href="">
              <FaInstagram />
            </a>
            <a href="">
              <FaGithub />
            </a>
            <a href="">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-4 footer-item">
        <div className="footer-img"></div>
      </div>
      <div className="col-12 col-md-4 footer-item">
        <div>
          <h4>Opening Hours</h4>
          <p>
            Monday-Friday <br />
            11hs-23hs <br />
            Saturday-Sunday <br />
            11hs-00hs
          </p>
        </div>
      </div>
    </div>
  );
};
