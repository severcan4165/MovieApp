import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import DetailStyle from "./movieDetails.module.scss";

const MovieDetails = () => {
    const [movieDetails, setMovieDetails] = useState("");
    // const [videoKey, setVideoKey] = useState();
    const { id } = useParams();
  
    const {
      title,
      poster_path,
      overview,
      vote_average,
      vote_count,
      release_date,
    } = movieDetails;

    const API_KEY = process.env.REACT_APP_TMDB_KEY;
    const movieDetailBaseUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
    const baseImageUrl = "https://image.tmdb.org/t/p/w1280";
    const defaultImage =
      "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";
    
    const getMovieDetails = async (url) =>{
        try {
          let {data} =  await axios(url)
            setMovieDetails(data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getMovieDetails(movieDetailBaseUrl)
    }, [movieDetailBaseUrl])
    
    console.log(movieDetails)
  return (

      
     
      <div className={DetailStyle.detailContainer}>
        <h1 className={DetailStyle.title}>{title}</h1>
        <div className={DetailStyle.detailContent}>
          <img
            className={DetailStyle.poster}
            src={poster_path ? baseImageUrl + poster_path : defaultImage}
            alt="poster"
          />
          <div className={DetailStyle.info}>
            <div>
              <h5 className={DetailStyle.title5}>
                Overview
              </h5>
              <p className={DetailStyle.overw}>{overview}</p>
            </div>
            <ul className={DetailStyle.ulist}>
              <li className={DetailStyle.list}>
                {"Release Date : " + release_date}
              </li>
              <li className={DetailStyle.list}>
                {"Rate : " + vote_average}
              </li>
              <li className={DetailStyle.list}>
                {"Total Vote : " + vote_count}
              </li>
              <li className={DetailStyle.list}>
                <Link
                  to={-1}
                  className={DetailStyle.links}
                >
                  Go Back
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    
  )
}

export default MovieDetails