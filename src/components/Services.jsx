import React from 'react'

const Services = () => {
  return (
        <div className="service" id="service">
            <div className="content-inner">
                <div className="content-header">
                    <h2>Service</h2>
                </div>
                <h1>What I do</h1>
                <p>Transforming businesses with expert web solutions. From captivating landing pages to full website creation, seamless e-commerce setups, speed optimization, SEO, and bug fixing – we ensure your online presence thrives.</p>
                <div className="row align-items-center">
                  
                    <div className="col-md-6">
                        <div className="srv-col">
                            <i className="fa fa-scroll"></i>
                            <h3>Landing Page</h3>
                            <p>A landing page is a focused web page designed to prompt a specific action, like making a purchase or signing up for a service. It typically has a clear call-to-action, concise copy, captivating visuals, mobile responsiveness, minimal distractions, trust signals, and undergoes A/B testing for optimization.</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="srv-col">
                            <i className="fa fa-laptop"></i>
                            <h3>Full website create</h3>
                            <p>Creating a full website involves planning, design, development, content creation, testing, deployment, optimization, and maintenance. It requires collaboration between designers, developers, and content creators to deliver a user-friendly experience aligned with the website’s goals and target audience.</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="srv-col">
                            <i className="fa fa-shopping-cart"></i>
                            <h3>E-commerce website</h3>
                            <p>An e-commerce website enables online buying and selling of goods or services. It features product listings, a shopping cart, checkout process, user accounts, search functionality, responsive design, inventory management, order processing, security features, customer support, marketing tools, and analytics.</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="srv-col">
                            <i className="fa fa-tools"></i>
                            <h3>Bug fixing</h3>
                            <p>Website bug fixing involves identifying and resolving issues within a website to ensure proper functionality. Bugs are identified, prioritized, reproduced, diagnosed, and then fixed. Fixes undergo testing, deployment, validation, and documentation. This process ensures the website works as intended and provides a positive user experience.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Services