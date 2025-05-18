

import { FaStarHalfStroke, FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa"; 

import "./StarRating.css";
const StarRating = ({ stars }) => {

  const RatingStar =  Array.from({ length : 5}, (elem, index) => {
   
    let number = index + 0.5; 

    return (
      <span key={index}> 
      
      {
        ( stars >= index + 1
           ? < FaStar className="icon" />
           : stars >= number
           ? < FaStarHalfStroke className="icon" />
           : < FaRegStar className="icon" /> )
      }
      </span>
    )
  })


  return (   
    <>
      <div className="icon-style">
           { RatingStar }
      </div>
    </>
  )

};

export default StarRating

















