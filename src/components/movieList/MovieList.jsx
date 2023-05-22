import "./movieList.css";
import { Link } from "react-router-dom";
import {motion} from "framer-motion"

const MovieList = ({ movies }) => {

  return (
    <div className="movie-list">
      {movies?.slice(0, 4).map((movie) => (
        <Link to={`movie/${movie.id}`} key={movie.id}>
          <div 
          className="movie-info">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt=""
            />
            <div className="title-rating">
              <p className="title">{movie.title}</p>
              <div className="rating">{movie?.vote_average?.toFixed(1)}</div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MovieList;
