import { BrowserRouter, Routes, Route } from "react-router-dom";
import MoviePage from "./pages/moviePage/MoviePage";
import HomePage from "./pages/homePage/HomePage";
import AboutPage from "./pages/aboutPage/AboutPage";
import BookPage from "./pages/bookPage/BookPage";
import MessageMe from "./pages/messageMe/MessageMe";
import TrendingMovies from "./pages/trendingMovies/TrendingMovies";
import TrendingShows from "./pages/trendingShows/TrendingShows";
import { FetchProvider } from "./components/context/FetchContext";
import MovieDetails from "./pages/movieDetails/MovieDetails";
import Layout from "./components/layout/Layout";
import MovieLayout from "./components/layout/MovieLayout";
import TrendingMoviesLayout from "./components/layout/TrendingMoviesLayout";
import TrendingShowsLayout from "./components/layout/TrendingShowsLayout";
import TvShowDetails from "./pages/tvShowDetails/TvShowDetails";

function App() {
  return (
    <FetchProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MovieLayout />}>
              <Route path="/movies" element={<MoviePage />} />
              <Route path="/movies/movie/:id" element={<MovieDetails />} />
              <Route path="/movies/show/:id" element={<TvShowDetails />} />
              <Route path="/movies/trending-movies" element={<TrendingMoviesLayout />}>
                <Route path="/movies/trending-movies" element={<TrendingMovies />} />
                <Route path="/movies/trending-movies/movie/:id" element={<MovieDetails />} />
              </Route>
              <Route path="/movies/trending-shows" element={<TrendingShowsLayout />}>
                <Route path="/movies/trending-shows" element={<TrendingShows />} />
                <Route path="/movies/trending-shows/show/:id" element={<TvShowDetails />} />
              </Route>
            </Route>
            <Route path="/books" element={<BookPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/message" element={<MessageMe />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </FetchProvider>
  );
}

export default App;

// <Route path="movie-details/:id" element={<MovieDetails />} />
