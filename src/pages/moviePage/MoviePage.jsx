import { apiRequest } from "../../components/api/apiRequest";
import { useEffect, useState } from "react";
import "./moviePage.css";
import Navbar from "../../components/navbar/Navbar";
import SearchForm from "../../components/searchForm/SearchForm";
import MovieList from "../../components/movieList/MovieList";

const MoviePage = () => {
  const [movieInfo, setMovieInfo] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const fetchMovies = async () => {
    const response = await apiRequest.get(`&s=${searchValue}`);
    setMovieInfo(response.data.Search);
  };

  useEffect(() => {
    fetchMovies();
  }, [searchValue]);

  console.log(movieInfo);

  return (
    <main className="movie-page">
      <Navbar />
      <section className="movie-section">
        <SearchForm searchValue={searchValue} setSearchValue={setSearchValue} />
      </section>
      <MovieList movieInfo={movieInfo} />
    </main>
  );
};

export default MoviePage;
