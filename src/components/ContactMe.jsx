import React from 'react'
import ContactForm from './contactForm'

const ContactMe = () => {
  return (
   
    <div className="contact" id="contact">
    <div className="content-inner">
        <div className="content-header">
            <h2>Contact Me</h2>
        </div>
        <div className="row align-items-center">
            <div className="col-md-6">
                <div className="contact-info">
                    <p><i className="fa fa-user"></i>Habibur Rahman</p>
                    <p><i className="fa fa-tag"></i>Web Designer & Developer</p>
                    <p><i className="fa fa-envelope"></i><a href="mailto:habiburrahman06000@gmail.com">habiburrahman06000@gmail.com</a></p>
                    <p><i className="fa fa-phone"></i><a href="tel:+8801913626951">+8801913626951</a></p>
                    <p><i className="fa fa-map-marker"></i>Holding No. 700, Rustompur, Faridgonj, Chandpur, Bangladesh</p>
                    <div className="social">
                        <a className="btn" href="https://x.com/habib0054"><i className="fab fa-twitter"></i></a>
                        <a className="btn" href="https://web.facebook.com/habiburrahman7"><i className="fab fa-facebook-f"></i></a>
                        <a className="btn" href="https://www.linkedin.com/in/habibur-rahman"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
            <div className="col-md-6">     
                <ContactForm/>
            </div>
        </div>
    </div>
</div>
  )
}

export default ContactMe