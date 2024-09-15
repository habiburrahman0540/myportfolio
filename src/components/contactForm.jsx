import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();
  const [message, setMessage] = useState(''); // State to hold success/error message
  const [showMessage, setShowMessage] = useState(false); // State to control message visibility
  const [loading, setLoading] = useState(false); // State to control loading spinner

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true); // Show spinner when submit is clicked

    emailjs
      .sendForm('service_l5ha1wr', 'template_nt9t1a7', form.current, {
        publicKey: 'gIYKrpBlNHeh8h-f2',
      })
      .then(
        () => {
          setMessage('Your message has been sent successfully!'); // Set success message
          setShowMessage(true); // Show message
          setLoading(false); // Hide spinner after success
          e.target.reset();
        },
        (error) => {
          setMessage(`Failed to send message: ${error.text}`); // Set error message
          setShowMessage(true); // Show message
          setLoading(false); // Hide spinner after failure
        }
      );
  };

  // Automatically hide the message after 5 seconds
  useEffect(() => {
    if (showMessage) {
      const timer = setTimeout(() => {
        setShowMessage(false); // Hide message
      }, 5000); // 5 seconds

      return () => clearTimeout(timer); // Cleanup timeout if component unmounts or updates
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
        <div>
          <button className="btn" type="submit" disabled={loading}>
            {loading ? (
              <span className="spinner-border spinner-border-md" role="status" aria-hidden="true"></span>
            ) : (
              "Send Message"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
