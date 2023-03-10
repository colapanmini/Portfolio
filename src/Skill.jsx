import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import colorlessConsole from "../public/images/controller.png";
import coloredConsole from "../public/images/controller (1).png";
import ToolIcons from "./ToolIcons";

function Skill() {
  const [isHovered, setHovered] = React.useState(false);

  function handleHover() {
    setHovered(true);
  }

  function handleMouseOut() {
    setHovered(false);
  }

  return (
    <Container fluid className="slanted-background">
      <h1 className="skill-title">Skills</h1>
      <Row>
        <Col md={12} lg={12}>
          {isHovered ? (
            <img
              onMouseOver={handleHover}
              onMouseOut={handleMouseOut}
              className="console-icon"
              src={coloredConsole}
              alt="console"
            />
          ) : (
            <img
              onMouseOver={handleHover}
              onMouseOut={handleMouseOut}
              className="console-icon"
              src={colorlessConsole}
              alt="console"
            />
          )}
        </Col>
        <Col className="skill-display" md={12} lg={12}>
          {isHovered ? <ToolIcons /> : <p className="alignment">Hover over me for more!</p>}
        </Col>
      </Row>
    </Container>
  );
}

export default Skill;
