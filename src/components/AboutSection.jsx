import React from 'react'

const AboutSection = () => {
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
  )
}

export default AboutSection