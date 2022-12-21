import NodeJSLogo from "../public/images/2560px-Node.js_logo.svg.png";
import BootstrapLogo from "../public/images/Bootstrap_logo.svg.png";
import GitIcon from "../public/images/Git-Icon-1788C.png";
import ReactIcon from "../public/images/React-icon.svg.png";
import CSSIcon from "../public/images/css-3.png";
import EJSIcon from "../public/images/file_type_ejs_icon_130626.png";
import HTMLIcon from "../public/images/html-5.png";
import JSIcon from "../public/images/js.png";
import { Container, Row, Col } from "react-bootstrap";

function ToolIcons() {
  return(
    <Container>
    <Row>
    <Col lg={3} md={3} sm={3} xs={3}>
    <img className="skill-icons" src={HTMLIcon} alt="html-icon" />
    </Col>
    <Col lg={3} md={3} sm={3} xs={3}>
    <img className="skill-icons" src={CSSIcon} alt="css-icon" />
    </Col>
    <Col lg={3} md={3} sm={3} xs={3}>
    <img className="skill-icons" src={JSIcon} alt="js-icon" />
    </Col>
    <Col lg={3} md={3} sm={3} xs={3}>
    <img className="skill-icons" src={BootstrapLogo} alt="bootstrap-icon" />
    </Col>
    <Col lg={3} md={3} sm={3} xs={3}>
    <img className="skill-icons" src={GitIcon} alt="git-icon" />
    </Col>
    <Col lg={3} md={3} sm={3} xs={3}>
    <img className="skill-icons" src={ReactIcon} alt="react-icon" />
    </Col>
    <Col lg={3} md={3} sm={3} xs={3}>
    <img className="skill-icons" src={EJSIcon} alt="ejs-icon" />
    </Col>
    <Col lg={3} md={3} sm={3} xs={3}>
    <img className="skill-icons" src={NodeJSLogo} alt="nodejs-icon" />
    </Col>
    </Row>
    </Container>
  )
}

export default ToolIcons;