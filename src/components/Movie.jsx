import React from "react";
import { convertTitle } from "../utils/convert_text";

const Movie = ({ movie }) => {
  return (
    <div className="movie_card">
      <img src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} />
      <div className="movie_card_bot">
        <div>
          <h6 className="title">{convertTitle(movie.title)}</h6>
          <p className="rating">{Math.round(movie.vote_average)}/10</p>
        </div>
        <div>
          <p className="last_update">LAST UPDATE</p>
          <p className="running_time">VIEWS</p>
        </div>
        <div className="date">
          <p>{movie.release_date}</p>
          <p className="duration">{movie.popularity}</p>
        </div>
      </div>
    </div>
  );
};

export default Movie;
