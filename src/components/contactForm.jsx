import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();
  const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false); 

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_l5ha1wr', 'template_nt9t1a7', form.current, {
        publicKey: 'gIYKrpBlNHeh8h-f2',
      })
      .then(
        () => {
          setMessage('Your message has been sent successfully!'); 
          setShowMessage(true);
          e.target.reset();
        },
        (error) => {
          setMessage(`Failed to send message: ${error.text}`);
          setShowMessage(true); 
        }
      );
  };

  
  useEffect(() => {
    if (showMessage) {
      const timer = setTimeout(() => {
        setShowMessage(false); 
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [showMessage]);

  return (
    <div className="form">
       {showMessage && <div className="alert alert-info mt-3">{message}</div>}
      <form ref={form} onSubmit={sendEmail}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <input type="text" className="form-control" name="user_name" placeholder="Your Name" />
          </div>
          <div className="form-group col-md-6">
            <input type="email" className="form-control" name="user_email" placeholder="Your Email" />
          </div>
        </div>
        <div className="form-group">
          <input type="text" className="form-control" name="subject" placeholder="Subject" />
        </div>
        <div className="form-group">
          <textarea className="form-control" rows="5" name="message" placeholder="Message" />
        </div>
        <div><input className="btn" type="submit" value="Send Message" /></div>
      </form>
    </div>
  );
}

export default ContactForm;
