import Navbar from "../../components/navbar/Navbar";
import "./trendingShows.css";
import { useContext, useEffect } from "react";
import FetchContext from "../../components/context/FetchContext";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { MdKeyboardBackspace } from "react-icons/md";


const TrendingShows = () => {
  const { fetchShows } = useContext(FetchContext);

  const { data: shows } = useQuery({
    queryKey: ["shows"],
    queryFn: fetchShows,
  });

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <Navbar />
      <div className="back-header">
        <h2>TRENDING TV SHOWS</h2>
        <Link to="/movies">
          <button>
            <MdKeyboardBackspace className="icon" />
          </button>
        </Link>
      </div>
      <div className="show-list">
        {shows?.results?.slice(0, 18).map((movie) => (
          <div key={movie.id} className="show-info">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt=""
            />
            <div className="title-rating">
              <p className="title">{movie.name}</p>
              <div className="rating">{movie?.vote_average?.toFixed(1)}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingShows;
