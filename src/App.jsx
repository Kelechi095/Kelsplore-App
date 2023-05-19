import { BrowserRouter, Routes, Route } from "react-router-dom";
import MoviePage from "./pages/moviePage/MoviePage";
import HomePage from "./pages/homePage/HomePage";
import AboutPage from "./pages/aboutPage/AboutPage";
import BookPage from "./pages/bookPage/BookPage";
import MessageMe from "./pages/messageMe/MessageMe";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/books" element={<BookPage />} />
        <Route path="/message" element={<MessageMe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
