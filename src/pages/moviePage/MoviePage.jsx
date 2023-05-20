import { useContext } from "react";
import "./moviePage.css";
import Navbar from "../../components/navbar/Navbar";
import MovieList from "../../components/movieList/MovieList";
import TvshowsList from "../../components/tvshowsList/TvshowsList";
import { useQuery } from "react-query";
import FetchContext from "../../components/context/FetchContext";
import { Link, Outlet } from "react-router-dom";

const MoviePage = () => {
  const { fetchMovies, fetchShows } = useContext(FetchContext);

  const { data: movies } = useQuery({
    queryKey: ["movies"],
    queryFn: fetchMovies,
  });

  const { data: shows } = useQuery({
    queryKey: ["shows"],
    queryFn: fetchShows,
  });

  return (
    <main className="movie-page">
      <Navbar />(
      <div className="header-title">
        <Link to="/movies/trending-movies">
          <button>TRENDING MOVIES</button>
        </Link>
      </div>
      )
      <MovieList movies={movies?.results} />(
      <div className="header-title">
        <Link to="/movies/trending-shows">
          <button>TRENDING TV SHOWS</button>
        </Link>
      </div>
      )
      <TvshowsList shows={shows?.results} />
    </main>
  );
};

export default MoviePage;
