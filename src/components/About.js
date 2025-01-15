import { Container, Row, Col } from "react-bootstrap";
import aboutImg from "../assets/img/about-img.jpeg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const About = () => {

  return (
    <section className="about" id="about">
      <Container>
        <Row className="align-items-center">
        <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
            {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img 
                  className="rounded-circle"
                  width="500"
                  height="500" 
                  src={aboutImg} 
                  alt="About Img"/>
                </div>}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
                <div>
                <h2>A little more about me</h2>
                <p>Before diving into software engineering, I spent years exploring the world of anthropology and archaeology, uncovering history’s hidden stories. That same curiosity and love for problem-solving sparked my transition into tech, where I now channel my research skills into unraveling complex challenges and building creative, effective solutions.</p> 
                <p>As someone who thrives on learning, I hold certifications in CompTIA Security+, CompTIA A+, and ISC2 Cybersecurity. I see every day as a chance to grow, connect, and leave my mark in the world of technology.</p>
                <p>When I’m not immersed in code, you’ll probably find me laughing at memes, conquering sudoku puzzles, or binging anime. I’m also a fantasy bookworm, a coffee aficionado, and an adventurer at heart, always seeking out new experiences with my family.</p>             
              </div> 
          </Col>
        </Row>
      </Container>
    </section>
  )
}
