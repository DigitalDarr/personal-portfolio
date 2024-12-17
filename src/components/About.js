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
                <p>A curious-by-nature person, I’ve always been eager to explore and understand the world around me. With a background in anthropology and archaeology, I developed strong research and analytical skills while uncovering the stories of history and cultures. This same curiosity and problem-solving mindset led me to transition into software engineering, where I thrive on researching complex challenges and building innovative solutions.</p> 
                <p>My research-driven approach allows me to dissect problems, uncover patterns, and design impactful, scalable software. I’m also committed to continuous learning, holding certifications in CompTIA Security+, CompTIA A+, and ISC2 Cybersecurity.</p>
                <p>Outside of work, I value connecting with others in the industry, especially Black women in tech. When I’m not coding, you’ll find me enjoying a good meme, solving sudoku puzzles, watching anime, reading fantasy books, adventuring with my family, or sipping on coffee.</p>             
              </div> 
          </Col>
        </Row>
      </Container>
    </section>
  )
}