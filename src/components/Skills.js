import React, { useEffect } from "react";
import { Row, Col, Image, OverlayTrigger, Tooltip } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css"; 
import WOW from "wowjs";

// Images for skills
import htmlImg from "../assets/img/html.webp";
import cssImg from "../assets/img/css.webp";
import jsImg from "../assets/img/javascript.webp";
import reactImg from "../assets/img/react.webp";
import nodeImg from "../assets/img/node.webp";
import expressImg from "../assets/img/express.webp";
import psequelImg from "../assets/img/psequel.png";
import postgresqlImg from "../assets/img/postgresql.webp";
import gitImg from "../assets/img/git.webp";
import mongoDBImg from "../assets/img/mongoDB.webp";
import nextImg from "../assets/img/next.webp";
import bootstrapIMG from "../assets/img/bootstrap.webp"

export const Skills = () => {
  const skillsData = [
    { name: "HTML", img: htmlImg },
    { name: "CSS", img: cssImg },
    { name: "JavaScript", img: jsImg },
    { name: "React", img: reactImg },
    { name: "Node.js", img: nodeImg },
    { name: "Next.js", img: nextImg },
    { name: "Express.js", img: expressImg },
    { name: "PSequel", img: psequelImg },
    { name: "PostgreSQL", img: postgresqlImg },
    { name: "MongoDB", img: mongoDBImg },
    { name: "Git", img: gitImg },
    { name: "Bootstrap", img: bootstrapIMG },
  ];

  useEffect(() => {
    new WOW.WOW({ live: false }).init();
  }, []);

  return (
    <section id="skills" className="skills">
      <div className="skill-bx">
        <h2 className="section-title wow animate__fadeIn">Technologies and Tools</h2>
        <Row className="skills-container">
          {skillsData.map((skill, index) => (
            <Col xs={6} md={4} lg={3} className="skill-card wow animate__zoomIn" key={index}>
              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip>{skill.name}</Tooltip>}
                trigger={["hover", "focus"]}
              >
                <Image
                  src={skill.img}
                  alt={skill.name}
                  className="skill-image"
                  fluid
                  loading="lazy"
                />
              </OverlayTrigger>
            </Col>
          ))}
        </Row>
      </div>
     
    </section>
  );
};

export default Skills;
