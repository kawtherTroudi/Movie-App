import React , {useState} from 'react';
import StarRatingComponent from 'react-star-rating-component';
import {BrowserRouter as Router, Switch, Route} from'react-router-dom';
import {Link} from 'react-router-dom';
import Modal from 'react-modal'
import Details from './Details/Info';
import MovieList from './MovieList'

function MovieCard(props) {
   const [modalState, setModalState]= useState(false)
 const style = {height : 250,
          backgroundColor : "#181818",
                margin : 10}
                let title = props.title
                let trailer = props.trailer
                let description = props.description
    return (
       <>
   <Router>
      <Link to ='/Details'>   
   <div   style={style}>
      <img src = {props.poster}   height = "280" width = "200"/><br/>
     <h6 style = {{float : "left", color : "whitesmoke"}}>{props.title}</h6>
     <br/>
      <StarRatingComponent
    name={"movie rate"} /* name of the radio input, it is required */
    value={props.rate} /* number of selected icon (`0` - none, `1` - first) */
    starCount={5} /* number of icons in rating, default `5` */
    starColor={"#ffb400"} /* color of selected icons, default `#ffb400` */
    emptyStarColor={"#333"} /* color of non-selected icons, default `#333` */
    editing={false} /* is component available for editing, default `true` *//>
    <span>{}</span>
 
    </div>
    </Link> 
    <Route path = "/Details" render={(props) => (
   <Modal isOpen={true} backgroundColor = 'black'>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
          </button>
    <Details {...props} trailer={trailer} title= {title} description = {description} />
    </Modal>
  )}/> 
</Router>

       </> 
    );
}
export default MovieCard;