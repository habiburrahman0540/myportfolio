import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="wrapper">
    <div className="sidebar">
        <div className="sidebar-header">
            <img src="img/profile.jpg" alt="Image"/>
        </div>
        <div className="sidebar-content">
            <nav className="navbar navbar-expand-md bg-dark navbar-dark">
                <a href="#" className="navbar-brand">Navigation</a>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="nav navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#header">Home<i className="fa fa-home"></i></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">About<i className="fa fa-address-card"></i></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#experience">Experience<i className="fa fa-star"></i></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#service">Service<i className="fa fa-tasks"></i></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#portfolio">Portfolio<i className="fa fa-file-archive"></i></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact<i className="fa fa-envelope"></i></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
        <div className="sidebar-footer">
            <a href="https://x.com/habib0054"><i className="fab fa-twitter"></i></a>
            <a href="https://web.facebook.com/habiburrahman7"><i className="fab fa-facebook-f"></i></a>
            <a href="https://www.linkedin.com/in/habibur-rahman"><i className="fab fa-linkedin-in"></i></a>
        </div>
    </div>
    <div className="content">
       
        <div className="header" id="header">
            <div className="content-inner">
                <p>I'm</p>
                <h1>Habibur Rahman</h1>
                <h2></h2>
                <div className="typed-text">Web Designer, Web Developer, Front End Developer, Apps Developer, Graphic Designer</div>
            </div>
        </div>
      
        
       
        <div className="large-btn">
            <div className="content-inner">
                <a className="btn" href="#"><i className="fa fa-download"></i>Resume</a>
                <a className="btn" href="#"><i className="fa fa-hands-helping"></i>Hire Me On Upwork</a>
            </div>
        </div>
     
        <div className="about" id="about">
            <div className="content-inner">
                <div className="content-header">
                    <h2>About Me</h2>
                </div>
                <div className="row align-items-center">
                    <div className="col-md-6 col-lg-5">
                        <img src="img/about.jpg" alt="Image"/>
                    </div>
                    <div className="col-md-6 col-lg-7">
                    <h1>We’re On Mission To Help Business Grow Faster</h1>
                        <p>
                        Our mission is to empower businesses with powerful online solutions that propel them towards success in the digital landscape. Whether you’re seeking to establish a captivating online presence with our expertly crafted landing pages, create dynamic and fully functional websites from scratch.
                        </p>
                        <a className="btn" href="#">Learn More</a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="skills">
                            <div className="skill-name">
                                <p>Design</p><p>85%</p>
                            </div>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div className="skill-name">
                                <p>SEO</p><p>95%</p>
                            </div>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="skills">
                            <div className="skill-name">
                                <p>Development</p><p>90%</p>
                            </div>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div className="skill-name">
                                <p>Marketing</p><p>85%</p>
                            </div>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
        <div className="education" id="education">
            <div className="content-inner">
                <div className="content-header">
                    <h2>Education</h2>
                </div>
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="edu-col">
                            <span>01-Jan-2020 <i>to</i> 31-Dec-2050</span>
                            <h3>Master Degree</h3>
                            <p>Lorem ipsum dolor sit amet elit suscipit orci. Donec molestie velit id libero.</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="edu-col">
                            <span>01-Jan-2020 <i>to</i> 31-Dec-2050</span>
                            <h3>Bachelor Degree</h3>
                            <p>Lorem ipsum dolor sit amet elit suscipit orci. Donec molestie velit id libero.</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="edu-col">
                            <span>01-Jan-2020 <i>to</i> 31-Dec-2050</span>
                            <h3>Associate Degree</h3>
                            <p>Lorem ipsum dolor sit amet elit suscipit orci. Donec molestie velit id libero.</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="edu-col">
                            <span>01-Jan-2020 <i>to</i> 31-Dec-2050</span>
                            <h3>High School</h3>
                            <p>Lorem ipsum dolor sit amet elit suscipit orci. Donec molestie velit id libero.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     
        <div className="experience" id="experience">
            <div className="content-inner">
                <div className="content-header">
                    <h2>Experience</h2>
                </div>
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="exp-col">
                            <span>01-Jan-2020 <i>to</i> 31-Dec-2050</span>
                            <h3>Codex Solution</h3>
                            <h4>San Francisco, CA</h4>
                            <h5>Project Manager</h5>
                            <p>Lorem ipsum dolor sit amet elit suscipit orci. Donec molestie velit id libero.</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="exp-col">
                            <span>01-Jan-2020 <i>to</i> 31-Dec-2050</span>
                            <h3>Soft Solution Ltd</h3>
                            <h4>San Francisco, CA</h4>
                            <h5>Web Developer</h5>
                            <p>Lorem ipsum dolor sit amet elit suscipit orci. Donec molestie velit id libero.</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="exp-col">
                            <span>01-Jan-2020 <i>to</i> 31-Dec-2050</span>
                            <h3>ABC Soft Ltd</h3>
                            <h4>San Francisco, CA</h4>
                            <h5>Web Designer</h5>
                            <p>Lorem ipsum dolor sit amet elit suscipit orci. Donec molestie velit id libero.</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="exp-col">
                            <span>01-Jan-2020 <i>to</i> 31-Dec-2050</span>
                            <h3>Soft Agency</h3>
                            <h4>San Francisco, CA</h4>
                            <h5>Graphic Designer</h5>
                            <p>Lorem ipsum dolor sit amet elit suscipit orci. Donec molestie velit id libero.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
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
       
        <div className="portfolio" id="portfolio">
            <div className="content-inner">
                <div className="content-header">
                    <h2>Portfolio</h2>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <ul id="portfolio-flters">
                            <li data-filter="*" className="filter-active">All</li>
                            <li data-filter=".web-des">Design</li>
                            <li data-filter=".web-dev">Development</li>
                            <li data-filter=".dig-mar">Marketing</li>
                        </ul>
                    </div>
                </div>
                <div className="row portfolio-container">
                    <div className="col-lg-4 col-md-6 portfolio-item web-des">
                        <div className="portfolio-wrap">
                            <figure>
                                <img src="img/portfolio-1.jpg" className="img-fluid" alt=""/>
                                <a href="img/portfolio-1.jpg" data-lightbox="portfolio" data-title="Project Name" className="link-preview" title="Preview"><i className="fa fa-eye"></i></a>
                                <a href="#" className="link-details" title="More Details"><i className="fa fa-link"></i></a>
                                <a className="portfolio-title" href="#">Project Name <span>Web Design</span></a>
                            </figure>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item web-des">
                        <div className="portfolio-wrap">
                            <figure>
                                <img src="img/portfolio-2.jpg" className="img-fluid" alt=""/>
                                <a href="img/portfolio-2.jpg" className="link-preview" data-lightbox="portfolio" data-title="Project Name" title="Preview"><i className="fa fa-eye"></i></a>
                                <a href="#" className="link-details" title="More Details"><i className="fa fa-link"></i></a>
                                <a className="portfolio-title" href="#">Project Name <span>Web Design</span></a>
                            </figure>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item web-dev">
                        <div className="portfolio-wrap">
                            <figure>
                                <img src="img/portfolio-3.jpg" className="img-fluid" alt=""/>
                                <a href="img/portfolio-3.jpg" className="link-preview" data-lightbox="portfolio" data-title="Project Name" title="Preview"><i className="fa fa-eye"></i></a>
                                <a href="#" className="link-details" title="More Details"><i className="fa fa-link"></i></a>
                                <a className="portfolio-title" href="#">Project Name <span>Web Development</span></a>
                            </figure>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item web-dev">
                        <div className="portfolio-wrap">
                            <figure>
                                <img src="img/portfolio-4.jpg" className="img-fluid" alt=""/>
                                <a href="img/portfolio-4.jpg" className="link-preview" data-lightbox="portfolio" data-title="Project Name" title="Preview"><i className="fa fa-eye"></i></a>
                                <a href="#" className="link-details" title="More Details"><i className="fa fa-link"></i></a>
                                <a className="portfolio-title" href="#">Project Name <span>Web Development</span></a>
                            </figure>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item dig-mar">
                        <div className="portfolio-wrap">
                            <figure>
                                <img src="img/portfolio-5.jpg" className="img-fluid" alt=""/>
                                <a href="img/portfolio-5.jpg" className="link-preview" data-lightbox="portfolio" data-title="Project Name" title="Preview"><i className="fa fa-eye"></i></a>
                                <a href="#" className="link-details" title="More Details"><i className="fa fa-link"></i></a>
                                <a className="portfolio-title" href="#">Project Name <span>Digital Marketing</span></a>
                            </figure>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item dig-mar">
                        <div className="portfolio-wrap">
                            <figure>
                                <img src="img/portfolio-6.jpg" className="img-fluid" alt=""/>
                                <a href="img/portfolio-6.jpg" className="link-preview" data-lightbox="portfolio" data-title="Project Name" title="Preview"><i className="fa fa-eye"></i></a>
                                <a href="#" className="link-details" title="More Details"><i className="fa fa-link"></i></a>
                                <a className="portfolio-title" href="#">Project Name <span>Digital Marketing</span></a>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
        <div className="review" id="review">
            <div className="content-inner">
                <div className="content-header">
                    <h2>Review</h2>
                </div>
                <div className="row align-items-center review-slider">
                    <div className="col-md-12">
                        <div className="review-slider-item">
                            <div className="review-text">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu suscipit orci. Donec molestie velit id libero blandit, quis suscipit urna suscipit. Donec aliquet erat eu lacinia iaculis. Ut tempor tellus eu sem pharetra feugiat.
                                </p>
                            </div>
                            <div className="review-img">
                                <img src="img/review-1.jpg" alt="Image"/>
                                <div className="review-name">
                                    <h3>Client Name</h3>
                                    <p>Profession</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="review-slider-item">
                            <div className="review-text">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu suscipit orci. Donec molestie velit id libero blandit, quis suscipit urna suscipit. Donec aliquet erat eu lacinia iaculis. Ut tempor tellus eu sem pharetra feugiat.
                                </p>
                            </div>
                            <div className="review-img">
                                <img src="img/review-2.jpg" alt="Image"/>
                                <div className="review-name">
                                    <h3>Client Name</h3>
                                    <p>Profession</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="review-slider-item">
                            <div className="review-text">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu suscipit orci. Donec molestie velit id libero blandit, quis suscipit urna suscipit. Donec aliquet erat eu lacinia iaculis. Ut tempor tellus eu sem pharetra feugiat.
                                </p>
                            </div>
                            <div className="review-img">
                                <img src="img/review-3.jpg" alt="Image"/>
                                <div className="review-name">
                                    <h3>Client Name</h3>
                                    <p>Profession</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
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
                        <div className="form">
                            <form>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <input type="text" className="form-control" placeholder="Your Name" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <input type="email" className="form-control" placeholder="Your Email" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Subject" />
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control" rows="5" placeholder="Message"></textarea>
                                </div>
                                <div><button className="btn" type="submit">Send Message</button></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     
        <div className="footer">
            <div className="content-inner">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <p>&copy; Copyright <span id="year"></span><a href="">2024</a>. All Rights Reserved</p>
                    </div>
                    <div className="col-md-6">
                        <p>Design and Developed by <a href="">Habibur Rahman</a></p>
                    </div>
                </div>
            </div>
        </div>
       
    </div>
</div>
  );
}

export default App;
