import React from 'react';
import { Form, Button } from 'bootstrap-4-react';
import './stylesheets/EmailForm.css';
import emailjs from 'emailjs-com';
import {AiFillLinkedin, AiFillGithub, AiFillInstagram} from 'react-icons/ai';


export default function EmailForm(props) {  

    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_c0itqbj','template_nvfhgdj',e.target,'user_Le7X7NilmEM328MCZ2K5L')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }

    return (
        <Form className="emailForm" onSubmit={sendEmail}>
            <div className="form-group">
                <label  htmlFor="email1">Email address</label>
                <input className="form-control" type="email" id="email1" placeholder="name@example.com"  name="email" required />
            </div>
            <div className="form-group">
                <label  htmlFor="subject1">Subject</label>
                <input className="form-control" type="text" id="subject1" placeholder="subject"  name="subject" required />
            </div>
            <div className="form-group">
                <textarea className="form-control" rows="3" type="text" name="message" required />
            </div>
            <div>
                <Button primary type="submit">Send</Button>
                <a href="https://www.linkedin.com/in/zacharyeschmitz/"><AiFillLinkedin className="social-media" /></a>
                <a href="https://github.com/zach922"><AiFillGithub className="social-media" /></a>
                <a href="https://www.instagram.com/this.zachschmitz/"><AiFillInstagram  className="social-media" /></a>
            </div>
        </Form>
    )
}