// 364d90c4eafb84407135bc900f697f3d

import { apiRequest } from "../../components/api/apiRequest";
import axios from "axios";
import { useEffect, useState } from "react";
import "./moviePage.css";
import Navbar from "../../components/navbar/Navbar";
import SearchForm from "../../components/searchForm/SearchForm";
import MovieList from "../../components/movieList/MovieList";

const MoviePage = () => {
  const [movieInfo, setMovieInfo] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const fetchMovies = async () => {
    const response = await axios.get(
      "https://api.themoviedb.org/3/trending/all/day?api_key=364d90c4eafb84407135bc900f697f3d&page=1"
    );
    console.log(response.data);
    setMovieInfo(response.data.results);
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
