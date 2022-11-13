import axios from 'axios';
import React, { useEffect, useState } from 'react'
import MovieCard from "./MovieCard.jsx"

const API_KEY = process.env.REACT_APP_TMDB_KEY;
const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
// const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [searchMovie, setSearchMovie] = useState("");
  const [loading, setLoading] = useState(false)



  const getMovies = async (a) => {
    try {
     axios.get(a)
      .then(res => setMovies(res.data.results))
     
    } catch (error) {
      console.log(error.message)
    }
    
      
  };

  useEffect(() => {
    getMovies(url);
    
  }, [])

  const handleSubmit = (e) =>{
    e.preventDefault();
  }
  
  return (
    <>  
     <form onSubmit={handleSubmit}>
    <input
      type="search"
     
      placeholder="Search a movie..."
      onChange={(e) => setSearchMovie(e.target.value)}
      value={searchMovie}
    />
    <button  type="submit">
      Search
    </button>
  </form>
  <div >
    {loading ? (
      <div>
        <span>Loading...</span>
      </div>
    ) : (
      movies.map((movie) => <MovieCard key={movie.id} {...movie} />)
    )}
  </div></>
  )
}

export default Home