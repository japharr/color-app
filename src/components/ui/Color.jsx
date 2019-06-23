import React from "react";
import StarRating from "./StarRating";
import TimeAgo from "./TimeAgo";

const Color = ({
  title,
  color,
  rating,
  timestamp,
  onRemove = f => f,
  onRate = f => f
}) => {
  return (
    <div className="color">
      <h1>{title}</h1>
      <button onClick={onRemove}>X</button>
      <div className="color" style={{ backgroundColor: color }} />
      <TimeAgo timestamp={timestamp} />
      <div>
        <StarRating starsSelected={rating} onRate={onRate} />
      </div>
    </div>
  );
};

export default Color;
