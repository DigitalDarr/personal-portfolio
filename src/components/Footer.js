import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} sm={6} className="text-center text-sm-start">
            <a href="/" className="footer-brand">
              <span>digital</span>
              <span>darr</span>
            </a>
          </Col>
          <Col xs={12} sm={6} className="text-sm-end">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/darr-gilreath/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img src={navIcon1} alt="LinkedIn Icon" />
              </a>
              <a
                href="https://bsky.app/profile/digitaldarr.bsky.social"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img src={navIcon2} alt="Bluesky Icon" />
              </a>
              <a
                href="https://github.com/DigitalDarr"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img src={navIcon3} alt="GitHub Icon" />
              </a>
            </div>
            <p>© DigitalDarr 2024</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
