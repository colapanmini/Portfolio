import { Container, Form, Button, FloatingLabel} from "react-bootstrap";

function Contact() {
    return(
        <Container fluid className="contact-me-container">
            <h1 className="contact-me-title">Contact Me</h1>
            <Form>
                
             <Form.Group className="mb-3">
             <Form.Label>Name</Form.Label>
             <Form.Control type="text" placeholder="Your Name" />
             </Form.Group>
             
             <Form.Group className="mb-3" controlId="formBasicEmail">
             <Form.Label>Email address</Form.Label>
             <Form.Control type="email" placeholder="Enter email" />
             <Form.Text className="text-muted">
              Your email will never be shared with anyone else.
             </Form.Text>
            </Form.Group>

            
            <FloatingLabel controlId="floatingTextarea2" label="Message">
            <Form.Control
               className="custom-text-area"
               as="textarea"
               placeholder="Leave a message here"
               style={{ height: '100px' }}
             />
            </FloatingLabel>
            <div className="button-wrapper">
            <Button variant="dark" type="submit">
             Submit
            </Button>
            </div>
            </Form>
        </Container>
    )
}

export default Contact;