import React from "react";
import { FaUserTie, FaGithub, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="footer text-light row max-width">
      <div className="col-12 col-md-4 footer-item">
        <div>
          <h4>Find us</h4>
          <p>
            Palermo 174 <br />
            Buenos Aires
          </p>

          <div className="footer-icons">
            <a href="https://alexander-fernandez.netlify.app/" target="_blank">
              <FaUserTie />
            </a>
            <a
              href="https://github.com/Alexander-Fernandez-1997"
              target="_blank"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/alexander-fern%C3%A1ndez-9455aa174/"
              target="_blank"
            >
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
