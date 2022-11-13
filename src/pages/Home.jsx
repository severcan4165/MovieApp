import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import MovieCard from "../components/MovieCard.jsx";
import { AuthContext } from "../context/AuthContext.jsx";
import { toastWarnNotify } from "../helpers/ToastNotify.js";
import HomeStyle from "./home.module.scss";

const API_KEY = process.env.REACT_APP_TMDB_KEY;
const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [searchMovie, setSearchMovie] = useState("");
  const [loading, setLoading] = useState(false);
  const {currentUser} = useContext(AuthContext);

  const getMovies = async (a) => {
    try {
      axios.get(a).then((res) => setMovies(res.data.results));
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getMovies(url);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(searchMovie && currentUser){
      getMovies(searchUrl + searchMovie);
      setSearchMovie("")
    }
    else if(!currentUser){
      toastWarnNotify("please login to search");
    }
    else{
      toastWarnNotify("please enter a movie name");
    }
  };

  return (
    <div className={HomeStyle.container} >
      <form className={HomeStyle.form} onSubmit={handleSubmit}>
        <input
          className={HomeStyle.inputArea}
          type="search"
          placeholder="Search a movie..."
          onChange={(e) => setSearchMovie(e.target.value)}
          value={searchMovie}
        />
        <button className={HomeStyle.buttonSearch}type="submit">Search</button>
      </form>
      <div className={HomeStyle.movieCardContainer}>
        {loading ? (
          <div>
            <span>Loading...</span>
          </div>
        ) : (
          movies.map((movie) => <MovieCard key={movie.id} {...movie} />)
        )}
      </div>
    </div>
  );
};

export default Home;
