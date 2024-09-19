import React, { useState } from 'react';
import 'lightbox2/dist/css/lightbox.min.css';


const Portfolio = () => {
  const [filter, setFilter] = useState('*');

  const portfolioItems = [
    { id: 1, category: 'wordpress', image: 'https://res.cloudinary.com/upwork-cloud/video/upload/c_scale,w_1000/v1686677809/catalog/1668671518582566912/rkb1tusg4l3dhe0xkfw8.WEBP', title: 'pixpoker blog site', type: 'wordpress',urlLink:'#' },
    { id: 2, category: 'shopify', image: 'img/shopify-1.jpeg', title: 'Quickfresh', type: 'shopify',urlLink:'https://quickfresh-sandbox.myshopify.com/' },
    { id: 3, category: 'wordpress', image: 'img/easypress.jpg', title: 'Easypress.ai', type: 'wordpress',urlLink:'easypress.ai' },
    { id: 4, category: 'react', image: 'img/react-1.jpg', title: 'Nutrition Calculator', type: 'react' ,urlLink:'https://github.com/justmeats/nutrition-calculator'},
    { id: 5, category: 'react', image: 'img/react-2.jpeg', title: 'Justmeat -Shopify project ', type: 'react',urlLink:'https://www.justmeats.com/' },
    { id: 6, category: 'shopify', image: 'img/react-2.jpeg', title: 'Justmeat -Shopify project ', type: 'shopify',urlLink:'https://www.justmeats.com/' },
    { id: 7, category: 'shopify', image: 'img/feastbox.jpeg', title: 'Feastbox -Shopify and React ', type: 'shopify',urlLink:'https://www.justmeats.com/' },
    { id: 8, category: 'react', image: 'img/feastbox.jpeg', title: 'Feastbox -Shopify and React ', type: 'react',urlLink:'https://www.justmeats.com/' },
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
              <li onClick={() => setFilter('wordpress')} className={filter === 'wordpress' ? 'filter-active' : ''}>Wordpress</li>
              <li onClick={() => setFilter('shopify')} className={filter === 'shopify' ? 'filter-active' : ''}>Shopify</li>
              <li onClick={() => setFilter('react')} className={filter === 'react' ? 'filter-active' : ''}>React</li>
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
                  <a href={item.urlLink} class="link-details" title="More Details"><i class="fa fa-link"></i></a>
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
