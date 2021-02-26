import React, { useState } from 'react';
import Filter from './Filter'
import {Container, Row, Input} from 'reactstrap';
import Modal from 'react-modal'
import MovieCard from './MovieCard';
import {Button} from 'react-bootstrap';



     
function MovieList() {
 
    const [modalState, setModalState]= useState(false)
    const button = {borderRadius : 100}

    const [movies, setMovies] = useState([
        {title : "Spirited Away", description:"During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.", 
        posterUrl:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS6MveoDoJOg9-wMvtHE4ak_-HDZeYS1egb9PwRcf8lhrtcppMc", rate:5, trailer:"https://www.youtube.com/embed/watch?v=ByXuk9QqQkk"},
        {title : "Howl's Moving Castle", description:"When an unconfident young woman is cursed with an old body by a spiteful witch, her only chance of breaking the spell lies with a self-indulgent yet insecure young wizard and his companions in his legged, walking castle.", 
        posterUrl:"https://images-na.ssl-images-amazon.com/images/I/91r6ErURNeL._SL1500_.jpg", rate:4, trailer: "https://www.youtube.com/embed/watch?v=iwROgK94zcM"},
        {title : "Sherlock Holmes", description:"Detective Sherlock Holmes and his stalwart partner Watson engage in a battle of wits and brawn with a nemesis whose plot is a threat to all of England.", 
        posterUrl:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR8dWDKB8nvxwcQbY-VYlmBxRf6V4HUF6ALRoKDXaZtTtDqjvgw", rate:4, trailer: "https://www.youtube.com/embed/watch?v=iKUzhzustok"},
        {title : "X-Men: Dark Phoenix", description:"Jean Grey begins to develop incredible powers that corrupt and turn her into a Dark Phoenix, causing the X-Men to decide if her life is worth more than all of humanity.", 
        posterUrl:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSx4JS_U1Xp6AKtrTXtE00H40SejV2VfJtLVd3Vy46BcPYa0PPy", rate:3, trailer: "https://www.youtube.com/embed/watch?v=azvR__GRQic"},
        {title : "Inception", description:"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.", 
        posterUrl:"https://www.25thframe.co.uk/film-images/inception.jpg", rate:5, trailer: "https://www.youtube.com/embed/watch?v=YoHD9XEInc0"},
        {title : "Avengers: Endgame", description:"After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.", 
        posterUrl:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQA_-tL18_rj9zEcjN6n41NEaJm-kRNF9UeOtvksZ4z_OW6jRA9", rate:4, trailer: "https://www.youtube.com/embed/watch?v=TcMBFSGVi1c"},
        {title : "Wonder Woman", description:"When a pilot crashes and tells of conflict in the outside world, Diana, an Amazonian warrior in training, leaves home to fight a war, discovering her full powers and true destiny.", 
        posterUrl:"https://contentserver.com.au/assets/646095_523722_p12543972_p_v8_ab.jpg", rate:4, trailer: "https://www.youtube.com/embed/watch?v=1Q8fG0TtVAY"},
])
const [title, setTitle] = useState('')
const [description, setDescription] = useState('')
const [poster, setPoster] = useState('')
const [rate, setRate] = useState('')
const [trailer, setTrailer] = useState('')

  const handleTitleChange = (event)=>{
setTitle(event.target.value)
  }
const handleDescriptionChange = (event)=>{
    setDescription(event.target.value)
  }
  const handleURLChange = (event)=>{
    setPoster(event.target.value)
  }
  const handleRateChange = (event)=>{
    setRate(event.target.value)
  }

  const handleTrailerChange = (event)=>{
    setTrailer(event.target.value)
      }

  const findMovies = (title, rate)=> {
   setMovies(movies.filter(movie=> movie.rate === rate && movie.title.includes (title)))
  }



  const addMovie = (event)=>{
event.preventDefault();
setMovies([...movies,{title :title, description : description, posterUrl : poster, rate : rate} ])
setModalState(false)
}


    return (
       <>
       <Container fluid>
         <Filter findMovies = {findMovies}>
          </Filter>
          
          </Container>
         
         <br/>
       <Container fluid><Row>
       {movies.map(movie => <MovieCard height = "100" width = "50%" title = {movie.title} description = {movie.description} poster = {movie.posterUrl} rate = {movie.rate} trailer = {movie.trailer}>
       
       </MovieCard>
        
       )}
       <div style ={{padding : 100, marginTop : 20}}>
      <Button style = {button} variant = "light" onClick = {()=>setModalState(true)}>New Movie</Button> 
      </div>
      </Row>
      </Container>
      <Modal isOpen={modalState}>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick = {()=>setModalState(false)}>
          <span aria-hidden="true">&times;</span>
        </button>
        <div style ={{margin : 70}}>
        <Input placeholder="Movie Title" onChange={handleTitleChange}></Input><br/>
        <Input placeholder="Movie Description" onChange={handleDescriptionChange}></Input><br/>
        <Input placeholder="Poster URL" onChange={handleURLChange}></Input><br/>
        <Input placeholder="Rate" onChange={handleRateChange}></Input><br/>
        <Input placeholder="Trailer" onChange={handleTrailerChange}></Input><br/>
        <Button variant = "dark" onClick = {addMovie}>Submit</Button>
        </div>
        </Modal>  
        
       </> 
    );
}
export default MovieList;