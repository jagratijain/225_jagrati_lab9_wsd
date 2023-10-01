import React, { useState } from 'react';
import './book.css'
import ReviewForm from './reviewform';
import ReviewList from './reviewlist';


function Book({ book }) {
  const [reviews, setReviews] = useState([]);

  const handleReviewSubmit = (review) => {
    setReviews([...reviews, review]);
  };

  return (
    <div className="book-card">
      <h2 className="book-title">{book.title}</h2>
      <p className="book-author">Author: {book.author}</p>
      <p className="book-description">{book.description}</p>
      <img src={book.thumbnail} alt={book.title} /> 
     
      <div className="reviews-container">
        <h3>Reviews:</h3>
        <ReviewList reviews={reviews} />
      </div>

      <ReviewForm onSubmit={handleReviewSubmit} />
    </div>
  );
}

export default Book;