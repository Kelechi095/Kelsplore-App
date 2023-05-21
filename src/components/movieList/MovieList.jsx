import "./movieList.css";
import { Link } from "react-router-dom";
import {motion} from "framer-motion"

const MovieList = ({ movies }) => {

  return (
    <div className="movie-list">
      {movies?.slice(0, 3).map((movie) => (
        <Link to={`movie/${movie.id}`} key={movie.id}>
          <motion.div 
          className="movie-info"
          animate={{
            opacity: 1
          }}
          initial={{
            opacity: 0.1
          }}
          transition={{
            duration: 3
          }}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt=""
            />
            <div className="title-rating">
              <p className="title">{movie.title}</p>
              <div className="rating">{movie?.vote_average?.toFixed(1)}</div>
            </div>
          </motion.div>
        </Link>
      ))}
    </div>
  );
};

export default MovieList;
