import React, {useState} from 'react';
import {FaStar} from 'react-icons/fa';

function StarRating(props){
    const [rating, setRating] = useState(null)
    const [hover, setHover] = useState(null)
    return (
<div>
{[...Array(5)].map((star, i) => {
    let ratingValue = i+1
    return (
    
<label>
    <input type = "radio" name ="rating" value={ratingValue} onClick = {()=> {setRating(ratingValue)
    props.handleRate(ratingValue)}} style = {{display:"none"}} />
        <FaStar className="star" size={30} color={ratingValue <= (hover||rating) ? "#ffc107" : "#e4e5e9"}
        onMouseEnter={()=> setHover(ratingValue)}
        onMouseLeave={()=> setHover(null)}
        />
        
        </label>
        )})}
</div>

    );
    
}

export default StarRating;