import React from "react";
import { Navbar, Container, Row, Col } from "react-bootstrap";
import Slideshow from "./Carousel.jsx";
import Header from "./Header";
import Button from "react-bootstrap/Button";
import Skill from "./Skill";
import Projects from "./Projects";
import tonkotsu from "./images/2250403.png";
import About from "./About";

function App() {
  return (
    <div>
      <Header />
      <Container fluid className="top-compartment">
        <h1>Hi! I am lawlaw, I am a Junior Front End Developer</h1>
        <Button variant="outline-dark">About</Button>
        <Button variant="outline-dark">Project</Button>
        <Button variant="outline-dark">Contact</Button>
        <img className="katsu-img" src={tonkotsu} alt="katsu-img" />
      </Container>
      <Skill />
      <Projects />
      <About />
      {/* <div class="bubble"></div> */}
      {/* <Slideshow /> */}
    </div>
  );
}

export default App;
