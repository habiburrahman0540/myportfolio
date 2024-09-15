import React, { useEffect } from 'react';
import Typed from 'typed.js';

const HeaderSection = () => {

  useEffect(() => {
    const typed_strings = 'Web Designer, Web Developer, Front End Developer, WordPress Theme Development and Customization, Shopify Theme Developer, Shopify Custom React App Developer';
    const typed = new Typed('.header h2', {
      strings: typed_strings.split(', '),
      typeSpeed: 100,
      backSpeed: 20,
      smartBackspace: false,
      loop: true,
    });

    // Clean up the Typed instance on component unmount
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
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
    </>
  );
};

export default HeaderSection;
