import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Navbar, Container, Row, Col } from "react-bootstrap";

function Projects() {
  return (
    <Container>
      <h1 className="projects-title">Projects</h1>
      <Row>
        <Col lg={6} md={6}>
          <Card className="card-block" style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>InstaDex</Card.Title>
              <Card.Text>
                A simple Pokédex web app that utilizes the PokeAPI. Currently
                under constant development.
              </Card.Text>
              <Button variant="dark">Try It!</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className="project-desc" lg={6} md={6}>
          <h3>Technologies Used</h3>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>ReactJS</li>
            <li>Bootstrap</li>
          </ul>
          <h3>Project Difficulties</h3>
          <p>
            This project tested my knowledge on multiple API fetching and making
            sure that the data is received in order of the API calls. It
            presented some challenges due to the data fetching with Axios being
            async in nature. The second challenge was ensuring that the pages
            will have minimal loading for best user experience, it was tricky
            due to the nature of React Components not maintaining their states
            after unmounting.
          </p>
          <h3>My Solution</h3>
          <p>
            Through the usage of axios.all method, I was able to make the API
            requests in order, as well as have the responses be returned in the
            order that was intended, which in turn allows the application's
            pages to be populated properly. And through moving the state of the
            child components to the parent component, and then passing the child
            component through props, I was able to retain the states of the
            child component, making sure the loading is kept at minimum.
          </p>
          <h3>Notable Features</h3>
          <ul>
            <li>Search Function</li>
            <li>Zero buffer across pages after initial load</li>
            <li>Responsive across multiple devices</li>
          </ul>
        </Col>
      </Row>
      <br />
      <Row>
        <Col lg={6} md={6}>
          <Card className="card-block" style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Keeper App</Card.Title>
              <Card.Text>
                A web app that allows you to make notes for reminders or tasks.
              </Card.Text>
              <Button variant="dark">Try It!</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className="project-desc" lg={6} md={6}>
          <h3>Technologies Used</h3>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>ReactJS</li>
          </ul>
          <h3>Project Difficulties</h3>
          <p>
            This project tested my knowledge on React states as well as the
            ability to map out each unique item. The challenge that I
            encountered while building this project revolves around implementing
            a delete function that allows a specific item to be deleted while
            making sure the other items remain intact.
          </p>
          <h3>My Solution</h3>
          <p>
            The function was successfuly implemented through passing a function
            that takes the id of the item, and then filtering out that specific
            item, only returning the ones that does not have the id of the one
            that gets clicked on.
          </p>
          <h3>Notable Features</h3>
          <ul>
            <li>Quick note generation</li>
            <li>Easy note deletion</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Projects;
