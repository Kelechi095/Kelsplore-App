import { BrowserRouter, Routes, Route } from "react-router-dom";
import MoviePage from "./pages/moviePage/MoviePage";
import HomePage from "./pages/homePage/HomePage";
import AboutPage from "./pages/aboutPage/AboutPage";
import BookPage from "./pages/bookPage/BookPage";
import MessageMe from "./pages/messageMe/MessageMe";
import TrendingMovies from "./pages/trendingMovies/TrendingMovies";
import TrendingShows from "./pages/trendingShows/TrendingShows";
import { FetchProvider } from "./components/context/FetchContext";

function App() {
  return (
    <FetchProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" >
            <Route path="/movies" element={<MoviePage />}/>
            <Route path="trending-movies" element={<TrendingMovies />} />
            <Route path="trending-shows" element={<TrendingShows />} />
          </Route>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/books" element={<BookPage />} />
          <Route path="/message" element={<MessageMe />} />
        </Routes>
      </BrowserRouter>
    </FetchProvider>
  );
}

export default App;
