import {useRef} from "react";
import { Container, Form, Button, FloatingLabel} from "react-bootstrap";
import emailjs from '@emailjs/browser';

function Contact() {
    
    const form = useRef();
 
    const sendEmail = (e) => {
      e.preventDefault(); // prevents the page from reloading when you hit “Send”
 
      emailjs.sendForm('service_5xf97k7', 'template_1ui72zn', form.current, 'Az8ZNY9A6E_0xMcS7')
        .then((result) => {
         // show the user a success message
        }, (error) => {
         // show the user an error
        });
    };
 
    return(
        <Container fluid className="contact-me-container">
            <h1 className="contact-me-title">Contact Me</h1>
            <Form ref={form} onSubmit={sendEmail}>
                
             <Form.Group className="mb-3">
             <Form.Label>Name</Form.Label>
             <Form.Control type="text" placeholder="Your Name" name="user_name" />
             </Form.Group>
             
             <Form.Group className="mb-3" controlId="formBasicEmail">
             <Form.Label>Email address</Form.Label>
             <Form.Control type="email" placeholder="Enter email" name="user_email" />
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
               name="message"
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