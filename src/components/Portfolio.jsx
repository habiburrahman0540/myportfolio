import React, { useState } from 'react';
import 'lightbox2/dist/css/lightbox.min.css';


const Portfolio = () => {
  const [filter, setFilter] = useState('*');

  const portfolioItems = [
    { id: 1, category: 'web-des', image: 'img/portfolio-1.jpg', title: 'Project Name', type: 'Web Design' },
    { id: 2, category: 'web-dev', image: 'img/portfolio-3.jpg', title: 'Project Name', type: 'Web Development' },
    { id: 3, category: 'dig-mar', image: 'img/portfolio-5.jpg', title: 'Project Name', type: 'Digital Marketing' },
    // Add more items here
  ];

  const filteredItems = portfolioItems.filter(item => filter === '*' || item.category === filter);

  return (
    <div className="portfolio" id="portfolio">
      <div className="content-inner">
        <div className="content-header">
          <h2>Portfolio</h2>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <ul id="portfolio-flters">
              <li onClick={() => setFilter('*')} className={filter === '*' ? 'filter-active' : ''}>All</li>
              <li onClick={() => setFilter('web-des')} className={filter === 'web-des' ? 'filter-active' : ''}>Design</li>
              <li onClick={() => setFilter('web-dev')} className={filter === 'web-dev' ? 'filter-active' : ''}>Development</li>
              <li onClick={() => setFilter('dig-mar')} className={filter === 'dig-mar' ? 'filter-active' : ''}>Marketing</li>
            </ul>
          </div>
        </div>
        <div className="row portfolio-container">
          {filteredItems.map(item => (
            <div key={item.id} className={`col-lg-4 col-md-6 portfolio-item ${item.category}`}>
              <div className="portfolio-wrap">
                <figure>
                  <img src={item.image} className="img-fluid" alt="" />
                  <a href={item.image} data-lightbox="portfolio" data-title={item.title} className="link-preview" title="Preview">
                    <i className="fa fa-eye"></i>
                  </a>
                  <a className="portfolio-title" href="#!">{item.title} <span>{item.type}</span></a>
                </figure>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
