import "./bookPage.css";
import Navbar from "../../components/navbar/Navbar";
import { useQuery } from "react-query";
import { useContext } from "react";
import FetchContext from "../../components/context/FetchContext";

const BookPage = () => {
  const { fetchMovies } = useContext(FetchContext);
  const { data: movies } = useQuery({
    queryKey: ["movies"],
    queryFn: fetchMovies,
  });

  console.log(movies?.results);
  return (
    <main className="book-page">
      <div className="left">
        <Navbar />
      </div>
      <section>
        <h2>Page is currently under construction</h2>
      </section>
    </main>
  );
};

export default BookPage;
