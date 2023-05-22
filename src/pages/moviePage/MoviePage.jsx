import "./moviePage.css";
import { useEffect, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import Navbar from "../../components/navbar/Navbar";
import MovieList from "../../components/movieList/MovieList";
import TvshowsList from "../../components/tvshowsList/TvshowsList";
import FetchContext from "../../components/context/FetchContext";


const MoviePage = () => {
  const { fetchMovies, fetchShows } = useContext(FetchContext);

  const { data: movies, isSuccess } = useQuery({
    queryKey: ["movies"],
    queryFn: fetchMovies,
  });

  const { data: shows } = useQuery({
    queryKey: ["shows"],
    queryFn: fetchShows,
  });

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  return (
    <main className="movie-page">
      <Navbar />
      <div className="movie-header-title">
        <Link to="/movies/trending-movies">
          <button>TRENDING MOVIES</button>
        </Link>
      </div>
      <MovieList movies={movies?.results} />

      {isSuccess && (
        <div className="shows-header-title">
          <Link to="/movies/trending-shows">
            <button>TRENDING TV SHOWS</button>
          </Link>
        </div>
      )}

      {isSuccess && <TvshowsList shows={shows?.results} />}
    </main>
  );
};

export default MoviePage;
