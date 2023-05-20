import Navbar from "../../components/navbar/Navbar";
import "./trendingMovies.css";
import { useContext } from "react";
import FetchContext from "../../components/context/FetchContext";
import { useQuery } from "react-query";
import { MdKeyboardBackspace } from "react-icons/md";
import { Link } from "react-router-dom";

const TrendingMovies = () => {
  const { fetchMovies } = useContext(FetchContext);

  const { data: movies } = useQuery({
    queryKey: ["movies"],
    queryFn: fetchMovies,
  });

  return (
    <div>
      <Navbar />
      <div className="back-header">
        <h2>TRENDING MOVIES</h2>
        <Link to="/movies">
          <button>
            <MdKeyboardBackspace className="icon" />
          </button>
        </Link>
      </div>

      <div className="movie-list">
        {movies?.results?.slice(0, 18).map((movie) => (
          <Link to={`movie/${movie.id}`} key={movie.id}>
            <div key={movie.id} className="movie-info">
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
    </div>
  );
};

export default TrendingMovies;
