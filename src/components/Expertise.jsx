import React from 'react'
import Shopify from "../ShopifyLogo.png";
import ReactIcon from "../react.png";
const Expertise = () => {
  return (
    <div className="service" id="service">
    <div className="content-inner">
        <div className="content-header">
            <h2>My Expert Area</h2>
        </div>
        <p>My specialize in fine-tuning every aspect of your online presence, from speed optimization and prompt bug fixing</p>
        <div className="row align-items-center">
          
            <div className="col-md-6">
                <div className="srv-col border rounded border-primary p-3">
                   <div className='text-center'>
                   <img loading="lazy" decoding="async" width="100" height="100" src="https://shakilaslam.com/wp-content/uploads/2024/04/web-design.webp" class="rounded-circle" alt=""/>
                   </div>
                    <h3 className='text-center my-3'>Website Design</h3>
                    <p>Involves creating visually appealing and functional layouts for websites, ensuring they effectively communicate information and engage visitors.</p>
                </div>
            </div>
            <div className="col-md-6">
                <div className="srv-col border rounded border-primary p-3">
                   <div className='text-center'>
                   <img loading="lazy" decoding="async" width="100" height="100" src={Shopify} class="border p-2 rounded-circle" alt=""/>
                   </div>
                    <h3 className='text-center my-3'>Shopify</h3>
                    <p>Involves creating visually appealing and functional layouts for websites, ensuring they effectively communicate information and engage visitors.</p>
                </div>
            </div>
            <div className="col-md-6">
                <div className="srv-col border rounded border-primary p-3">
                   <div className='text-center'>
                   <img loading="lazy" decoding="async" width="100" height="100" src="https://shakilaslam.com/wp-content/uploads/2024/04/wordpress.webp" class="rounded-circle" alt=""/>
                   </div>
                    <h3 className='text-center my-3'>WordPress</h3>
                    <p>Involves creating visually appealing and functional layouts for websites, ensuring they effectively communicate information and engage visitors.</p>
                </div>
            </div>
            <div className="col-md-6">
                <div className="srv-col border rounded border-primary p-3">
                   <div className='text-center'>
                   <img width="100" height="100" src={ReactIcon} class="border p-2 rounded-circle" alt=""/>
                   </div>
                    <h3 className='text-center my-3'>React</h3>
                    <p>Involves creating visually appealing and functional layouts for websites, ensuring they effectively communicate information and engage visitors.</p>
                </div>
            </div>
            <div className="col-md-6">
                <div className="srv-col border rounded border-primary p-3">
                   <div className='text-center'>
                   <img loading="lazy" decoding="async" width="100" height="100" src="https://shakilaslam.com/wp-content/uploads/2024/04/elementor-1.webp" class="rounded-circle" alt=""/>
                   </div>
                    <h3 className='text-center my-3'>Elementor</h3>
                    <p>A drag-and-drop page builder plugin for WordPress, enabling users to create custom website designs without needing to write code.</p>
                </div>
            </div>
            <div className="col-md-6">
                <div className="srv-col border rounded border-primary p-3">
                   <div className='text-center'>
                   <img loading="lazy" decoding="async" width="100" height="100" src="https://shakilaslam.com/wp-content/uploads/2024/04/web.webp" class="rounded-circle" alt=""/>
                   </div>
                    <h3 className='text-center my-3'>Website Maintain</h3>
                    <p>I will now maintain it nicely and update it regularly. From the beginning to the end all the work of a website will be done very well through which your business will grow very fast</p>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Expertise