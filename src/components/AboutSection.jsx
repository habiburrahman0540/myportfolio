import React, { useEffect } from 'react';

const AboutSection = () => {
  
  useEffect(() => {
    // Animate progress bars on component mount
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(bar => {
      const value = bar.getAttribute('aria-valuenow');
      bar.style.width = `${value}%`;
    });
  }, []);

  return (
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
                <p>Web Design</p><p>85%</p>
              </div>
              <div className="progress">
                <div className="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <div className="skill-name">
                <p>Web Development</p><p>95%</p>
              </div>
              <div className="progress">
                <div className="progress-bar" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="skills">
              <div className="skill-name">
                <p>WordPress Theme Development</p><p>90%</p>
              </div>
              <div className="progress">
                <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <div className="skill-name">
                <p>Shopify Theme Development</p><p>90%</p>
              </div>
              <div className="progress">
                <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="skills">
              <div className="skill-name">
                <p>Shopify React App</p><p>90%</p>
              </div>
              <div className="progress">
                <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <div className="skill-name">
                <p>React App Development</p><p>90%</p>
              </div>
              <div className="progress">
                <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
