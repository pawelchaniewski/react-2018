import React from "react";
import Repeat from "react-repeat-component";

// Zadanie 3 - bez dodatków
// const Rating = ({ rating }) => {
//   let stars = Array(rating)
//     .fill(0)
//     .map(() => "*");
//   return <p>Rating: {stars}</p>;
// };

// const Rating = ({ rating }) => (
//   <Repeat times={rating} className="rating">
//     {i => <span key={i} className="fa fa-star checked" />}
//   </Repeat>
// );

const Rating = ({ rating, onClick }) => (
  <Repeat times={rating}>
    {i => (
      <span key={i} className="fa fa-star checked" onClick={() => onClick(i)} />
    )}
  </Repeat>
);

export default Rating;
