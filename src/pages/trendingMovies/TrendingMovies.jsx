import Navbar from "../../components/navbar/Navbar";
import "./trendingMovies.css";
import { useContext } from "react";
import FetchContext from "../../components/context/FetchContext";
import { useQuery } from "react-query";
import { MdKeyboardBackspace } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const TrendingMovies = () => {
  const { fetchMovies } = useContext(FetchContext);

  const { data: movies } = useQuery({
    queryKey: ["movies"],
    queryFn: fetchMovies,
  });

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <Navbar />
      <div className="movies-back-header">
        <Link to="/movies">
          <button>Back</button>
        </Link>
      </div>

      <div className="movie-list">
        {movies?.results?.slice(0, 20).map((movie) => (
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
