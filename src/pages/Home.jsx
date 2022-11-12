import axios from 'axios';
import React, { useEffect, useState } from 'react'

const API_KEY = process.env.REACT_APP_TMDB_KEY;
const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
const url2 ="https://api.themoviedb.org/3/movie/550?api_key=37751259f1b08996852f2a35056705e8"
// const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;
console.log( API_KEY )
const Home = () => {
  const [movies, setMovies] = useState([]);



  const getMovies = async (a) => {
    try {
     axios.get(a)
      .then(res => console.log(res))
     
    } catch (error) {
      console.log(error.message)
    }
    
      
  };

  useEffect(() => {
    getMovies(url2);
    console.log(movies)
  }, [])
  
  return (
    <div>Homeeeee</div>
  )
}

export default Home