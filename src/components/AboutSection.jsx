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
            <h1>✨ About Me</h1>
            <p>
              
Hi, I’m Habibur Rahman, a passionate Shopify and WordPress Developer from Chittagong, Bangladesh. With over 3 years of experience in ecommerce and web development, I specialize in building high-converting Shopify stores, custom WordPress themes, and dropshipping websites that help businesses grow online.

I love creating modern, responsive, and SEO-friendly websites that not only look great but also deliver results. From store setup and customization to performance optimization and automation, I provide end-to-end solutions tailored to each client’s needs.

💡 My mission is simple: to help entrepreneurs and businesses turn their ideas into successful online stores.

When I’m not coding, you’ll find me exploring new design trends, learning the latest ecommerce tools, and constantly improving my skills to deliver the best for my clients.

🚀 Let’s build something amazing together!
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
