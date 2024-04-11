import ReactStars from 'react-stars';
import React from 'react';

//used reactstars to add star rating element
export default function Stars() {
  
  const ratingChanged = (newRating) => {
    console.log(`rating: ${newRating}`)
  }
  return (
    <ReactStars
    count={5}
    color2={'#ffd700'}
    size={20}
    onChange={ratingChanged}
    />
  );
} 