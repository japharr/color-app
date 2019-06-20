import React from "react";
import Star from "./Star";
//import { PorpTypes } from "prop-types";

const StarRating = ({ starsSelected = 0, totalStars = 5, onRate = f => f }) => {
  return (
    <div className="star-rating">
      {[...Array(totalStars)].map((n, i) => (
        <Star
          key={i}
          selected={i < starsSelected}
          onClick={() => onRate(i + 1)}
        />
      ))}
      <p>
        {starsSelected} of {totalStars} stars
      </p>
    </div>
  );
};

export default StarRating;
