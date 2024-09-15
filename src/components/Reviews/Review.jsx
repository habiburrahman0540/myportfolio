import React from 'react'
import './review.css'
import {FaChevronLeft, FaChevronRight, FaQuoteRight} from "react-icons/fa"
const Review = ({name,job,image,text,prevButton,nextButton,randonPerson}) => {
  return (
    <article className='review'>
        <div className='img-container'>
            <img src={image} alt={name} className='person-img' />
            <span className='quote-icon'>
                <FaQuoteRight/>
            </span>
        </div>
        <h4 className='author text-capitalize'>{name}</h4>
        <p className='job text-capitalize'>{job}</p>
        <p className='text'>{text}</p>
        <div className='button-container'>
            <button onClick={prevButton} className='bg-gray prev-btn'>
                <FaChevronLeft/>
            </button>
            <button onClick={nextButton} className='next-btn'>
                <FaChevronRight/>
            </button>
        </div>
    </article>
  )

}

export default Review