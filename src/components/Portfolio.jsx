import React, { useState } from 'react';
import 'lightbox2/dist/css/lightbox.min.css';


const Portfolio = () => {
  const [filter, setFilter] = useState('*');

  const portfolioItems = [
    { id: 1, category: 'wordpress', image: 'https://res.cloudinary.com/upwork-cloud/video/upload/c_scale,w_1000/v1686677809/catalog/1668671518582566912/rkb1tusg4l3dhe0xkfw8.WEBP', title: 'pixpoker blog site', type: 'wordpress',urlLink:'#' },
    { id: 2, category: 'shopify', image: 'img/shopify-1.jpeg', title: 'Quickfresh', type: 'shopify',urlLink:'https://quickfresh-sandbox.myshopify.com/' },
    { id: 3, category: 'wordpress', image: 'https://upwork-usw2-prod-agora-file-storage.s3.us-west-2.amazonaws.com/profile/portfolio/thumbnail/e50ab19448a512c9a77ad4e137087e12?response-content-disposition=inline;+filename=%22image_original%22;+filename*=utf-8%27%27image_original&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIAVG/OISWW%2BVgqAOrOiLqrzdPsJ9eQj1WLu3ukRShNBcAiBrIw8x0sLGMTePatFudhPmDo0eMBLG8sURaBCp8AZSNCrNBAhVEAAaDDczOTkzOTE3MzgxOSIMq1iwB8OzvG/%2BM/WMKqoEVk7BAWLkYqWryQmUmfXGSFibcqpunW5xhVbZM7vhzD%2B35MnDy5iigexIAsSNZl%2BW1Td4PCUwS5IePqSVoqy6Ptx9hU4gg1UeIJjYyv0mZCU4pPP5RiMCYmiTHG8lsV55nHQuJZb0MaocRObG6upvSEQx1mngtdmTjFDkpvr56RWb%2BX7yDNlvazwK/U3cyMld001Ks6VfQr4bPfQKwEJrHUL4O2w7KzIO46SCllzrqebrgE9mgF%2BXE2JlFpEdRA%2B7fsCZQiThFv9q7LNyOntdpqIH1yFQ7KoqHeil7fOsZyXqocHhb%2B9e4JLQFmdQZ3l5yDpWzDp0YZdhtyQwWw3ziilyJaEqzZ/3A8FOLHIM%2BqtAotWJD3J2Z5CrlQfJfNOAr/spkwZ6hWvE172lCI58Rrw2cPSUlTLsl1laXCigtoK2rR%2BErXHDYUYDuDGBwjnmH2KjF2zHeYA9AcEI0F/c6UlI2F5knVdpeEgtIosS8kxWuU1uEpHJO/mMinD7C%2BilQewLzVgTGbNDZRG9NVJJf9KM3Mgz4KvIHx80N1Sj8dZpqxaiwUi5Bz6IH4EKoESqk7nzum5UuyUZmzCRRYZfDy2qGRAt6DGec45kg6rYA2b5tJdW5wCX%2BcWQZcFmu%2BAVtDhVoP5KbjpGu2%2BSKCxT/l3rgNoRhm2fyB4l3PN31jU7j%2BJxv74xtuEKhR0Ch2BsKkBTQsFhpk8c6CDMQmUN4De6GgZnAerXr98wgriutwY6qAGvTrX6KU76tl6LNBrAcetLwqf5clyFhbIdmrxUiymMggkYmaHnHWh4tsrIP3M32GqpViXEOB0bbX5pHW44STYjRa3kl79qLC7f6CU1AyH5l9c%2B%2BdGNsQbeOgTDyviuP8sTtP%2BrgzlIZLXfDd5LZRY/d/5d1PwlAwsbPfNlIcrn4aHMSHGkHVESAL25Tf1JL5sBMOcej2OQpLZ2HZM6NATtJWm7VY7dCfw=&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240919T041712Z&X-Amz-SignedHeaders=host&X-Amz-Expires=900&X-Amz-Credential=ASIA2YR6PYW5XSU6HTSR/20240919/us-west-2/s3/aws4_request&X-Amz-Signature=450d787b0ebeba3267847fb933497ed3da031bec60ecc5632f80fa5aa27a70c4', title: 'Easypress.ai', type: 'wordpress',urlLink:'easypress.ai' },
    { id: 4, category: 'react', image: 'img/react-1.jpg', title: 'Nutrition Calculator', type: 'react' ,urlLink:'https://github.com/justmeats/nutrition-calculator'},
    { id: 5, category: 'react', image: 'img/react-2.jpeg', title: 'Justmeat -Shopify project ', type: 'react',urlLink:'https://www.justmeats.com/' },
    { id: 6, category: 'shopify', image: 'img/react-2.jpeg', title: 'Justmeat -Shopify project ', type: 'shopify',urlLink:'https://www.justmeats.com/' },
    { id: 7, category: 'shopify', image: 'img/feastbox.jpeg', title: 'Feastbox -Shopify and React ', type: 'shopify',urlLink:'https://www.justmeats.com/' },
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
