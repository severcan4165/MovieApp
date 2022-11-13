import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { toastWarnNotify } from "../helpers/ToastNotify";
import MovieCardStyle from "./movieCard.module.scss";
import "./movie.css"

const IMG_API = "https://image.tmdb.org/t/p/w1280";
const defaultImage =
  "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";
const MovieCard = ({ poster_path, title, overview, vote_average, id }) => {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  let classVote;
  if(vote_average>=8){
    classVote ="green"
  }
  else if(vote_average>=6){
    classVote ="yellow"
  }
  else{
    classVote ="red"
  }

  console.log(`MovieCardStyle.`,classVote)
  return (
    <>
      
      <div
        className={MovieCardStyle.movieCard}
        onClick={() => {navigate("details/" + id);
        !currentUser && toastWarnNotify("please log in to see details");
        }}
      >
       <div className={MovieCardStyle.movieCardImage}>
       <img
          className={MovieCardStyle.poster}
          loading="lazy"
          src={poster_path ? IMG_API + poster_path : defaultImage}
          alt="movie-card"
        />
         <div className={MovieCardStyle.movieCardOverwiev}>
          <h2>Overview</h2>
          <p>{overview}</p>
        </div>
       </div>
        <div className={MovieCardStyle.vote}>
          <h5 className={MovieCardStyle.title}>{title}</h5>
          {currentUser && (<span style={{backgroundColor:classVote}} className={MovieCardStyle.span}>{vote_average}</span>)}
        </div>
       
      </div>
    </>
  );
};

export default MovieCard;
