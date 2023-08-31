import React from 'react';
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import '../stylesheets/Contact.css';
import Swal from 'sweetalert2';
import emailjs from 'emailjs-com';
const SERVICE_ID = 'service_iczzxjs';
const TEMPLATE_ID = 'template_pylh739';
const USER_ID = 'Y5lSOCntPPnDU1-3e';

function Contact() {
  const handleOnSubmit = e => {
    e.preventDefault();
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then(result => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully',
        });
      })
      .catch(error => {
        console.log(error.text);
        Swal.fire({
          icon: 'error',
          title: 'Oops, something went wrong',
          text: error.text,
        });
      });
    e.target.reset();
  };

  return (
    <div className="page-container">
      <div className="contact-form custom-input-field">
        <Form onSubmit={handleOnSubmit}>
          <Form.Field
            id="form-input-control-email"
            control={Input}
            label="Email"
            name="user_email"
            placeholder="Email…"
            required
            icon="mail"
            iconPosition="left"
          />
          <Form.Field
            id="form-input-control-last-name"
            control={Input}
            label="Name"
            name="user_name"
            placeholder="Name…"
            required
            icon="user circle"
            iconPosition="left"
          />
          <Form.Field
            id="form-textarea-control-opinion"
            control={TextArea}
            label="Message"
            name="user_message"
            placeholder="Message…"
            required
          />
          <Button type="submit" color="yellow">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Contact;
