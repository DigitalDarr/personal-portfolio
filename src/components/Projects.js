import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";

export const Projects = () => {
  const projects: ProjectCard = [
{ 
      title: "SmartBrain App",
      description: "Uses Clarifai API for facial recognition in user-uploaded images.",
      imgUrl: projImg3,
      githubUrl: "https://github.com/DigitalDarr/smartbrain",
      deployedUrl: "https://digitaldarr.github.io/smartbrain/",
      tech: ["html", "css", "javascript", "react"],
    },
    {
      title: "RoboFriends App",
      description: "A dynamic app displaying robot profiles with search functionality.",
      imgUrl: projImg2,
      githubUrl: "https://github.com/DigitalDarr/robofriends",
      deployedUrl: "https://digitaldarr.github.io/robofriends/",
      tech: ["html", "css", "javascript", "react"],
    },
    {
      title: "NASA APOD (Astronomy Picture of the Day)",
      description: "Fetches and displays NASA's daily astronomy images with descriptions.",
      imgUrl: projImg1,
      githubUrl: "https://github.com/DigitalDarr/nasa-apod",
      deployedUrl: "https://digitaldarr.github.io/nasa-apod/",
      tech: ["html", "css", "javascript", "github"],
    },
    {
      title: "Robo-Twins",
      description: "Dancing robot animations using CSS and HTML.",
      imgUrl: projImg5,
      githubUrl: "https://github.com/DigitalDarr/robo-twins",
      deployedUrl: "https://digitaldarr.github.io/robo-twins/",
      tech: ["html", "css"],
    },
    {
      title: "Background Generator",
    description: "Create gradient backgrounds with a customizable interface.",
    imgUrl: projImg4,
    githubUrl: "https://github.com/DigitalDarr/background-generator",
    deployedUrl: "https://digitaldarr.github.io/background-generator/",
    tech: ["html", "css", "javascript"],
    },
    {
      title: "Personal-Portfolio",
      description: "This very portfolio site showcasing my skills and projects.",
      imgUrl: projImg6,
      githubUrl: "https://github.com/DigitalDarr/personal-portfolio",
      deployedUrl: "https://digitaldarr.github.io/personal-portfolio/",
      tech: ["html", "css", "javascript", "react"],
    },
  ];

  const oneThird = projects.slice(0, 2);
  const twoThird = projects.slice(2,4);
  const threeThird = projects.slice(4,6);


  return (
    <section className="project" id="projects">
      <Container>
        <Row>
        <Col size={12}>
            <div>
              <h1>Projects</h1>
              <p>Below are some of the projects I have completed or am currently working on.</p>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center">
                  <Nav.Item>
                    <Nav.Link eventKey="first">1</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">2</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">3</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content>

                  <Tab.Pane eventKey="first">
                    <Row>
                      {oneThird.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                      ))}
                    </Row>
                  </Tab.Pane>

                  <Tab.Pane eventKey="second">
                    <Row>
                      {twoThird.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                      ))}
                    </Row>
                  </Tab.Pane>

                  <Tab.Pane eventKey="third">
                    <Row>
                    {threeThird.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                      ))}  
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </Col>
        </Row>
        <div className="project-bx">
        <h2>Why I code</h2>
              <p>
              Software projects allow me to tap into my creativity and problem-solving skills, 
              and I thrive on the challenges that come with developing websites and applications. 
              I particularly enjoy working with React, as it gives me the flexibility to build dynamic, 
              responsive interfaces while providing a smooth user experience. 
              The process of turning ideas into functional, engaging web solutions is both rewarding and exciting, 
              and it keeps me motivated to keep learning and improving my skills. 
              </p>
      </div>
      </Container>
      <img className="background-image-right" src={"colorSharp2"} alt="background" />
    </section>
  );
};
