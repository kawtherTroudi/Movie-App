import React, {useState} from 'react';
import './App.css';
import MovieList from './MovieList';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from'react-router-dom';


function App() {
  
const handleMovieDetails=(title, trailer, description)=>{
var title = title
var trailer = trailer
var description = description
}
 
  return (
<Router>
    <div style = {{backgroundImage: `url("https://www.waterandsportspt.com/wp-content/uploads/2016/12/dark-bg.jpg")`, overflow: "hidden", height : "100vh"}}>
   
     <Route exact path = "/" component = {MovieList}></Route>
     
    
    </div>
    </Router>
    
  );
}

export default App;