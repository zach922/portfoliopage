import React from 'react';
import { Form, Button } from 'bootstrap-4-react';
import './stylesheets/EmailForm.css';

function EmailForm(props) {  


    return (
        <Form className="emailForm">
        <Form.Group>
          <label htmlFor="exampleInputEmail1">Email address</label>
          <Form.Input type="email" id="exampleInputEmail1" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group>
          <label htmlFor="exampleInputPassword1">Subject</label>
          <Form.Input type="text" id="exampleInputPassword1" placeholder="work request, feedback, question..." />
        </Form.Group>
        <Form.Group>
          <Form.Textarea id="exampleControlsTextarea1" rows="3"></Form.Textarea>
        </Form.Group>
        <Button primary type="submit">Send</Button>
      </Form>
    )
}

export default EmailForm;