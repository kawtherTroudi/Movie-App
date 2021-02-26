import React, {useState} from 'react';
import StarRating from './StarRating'
import {Input} from 'reactstrap'
import {Button} from 'react-bootstrap';
function Filter(props) {
    const [title, setTitle] = useState("")
    const [rate, setRate] = useState(null)
    const handleRate =(ratingValue)=>{setRate(ratingValue)}

    return (
       <>
       <div style = {{paddingRight : 1000, paddingTop : 20}}>
       <StarRating handleRate={handleRate} style = {{marginBottom : 10}} />
       <Input type = "text" onChange={(e)=>setTitle(e.target.value)} placeholder="Search..." style = {{background : "transparent", marginBottom : 20, color: 'whitesmoke'}}></Input>
       <Button onClick={()=>props.findMovies(title, rate)} variant = "light">Search</Button>
       </div>
       </> 
    );
}
export default Filter;