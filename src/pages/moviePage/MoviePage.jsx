import { useContext } from "react";
import "./moviePage.css";
import Navbar from "../../components/navbar/Navbar";
import MovieList from "../../components/movieList/MovieList";
import Tvshow from "../../components/tvshow/Tvshow";
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
      <Navbar />
      <section className="movie-section"></section>
      {movies?.results?.length > 0 && (
        <div className="header-title">
          <Link to="trending-movies">
            <button>TRENDING MOVIES</button>
          </Link>
        </div>
      )}
      <MovieList movies={movies?.results} />
      {shows?.results?.length > 0 && (
        <div className="header-title">
          <Link to="trending-shows">
            <button onclick={window.scrollTo({ top: 0, behavior: "smooth" })}>
              TRENDING TV SHOWS
            </button>
          </Link>
        </div>
      )}
      <Tvshow shows={shows?.results} />
    </main>
  );
};

export default MoviePage;
