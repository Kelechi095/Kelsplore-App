import "./trendingShows.css";
import Navbar from "../../components/navbar/Navbar";
import FetchContext from "../../components/context/FetchContext";
import { useContext, useEffect } from "react";
import { useQuery } from "react-query";
import { useLocation, Link } from "react-router-dom";
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
      <div className="shows-back-header">
        <h2>ALL TRENDING SERIES</h2>
        <Link to="/movies">
          <button>
            <MdKeyboardBackspace className="icon" />
          </button>
        </Link>
      </div>
      <div 
      className="show-list">
        {shows?.results?.slice(0, 18).map((show) => (
          <Link to={`show/${show.id}`} key={show.id}>
            <div key={show?.id} className="show-info">
              <img
                src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
                alt=""
              />
              <div className="title-rating">
                <p className="title">{show?.name}</p>
                <div className="rating">{show?.vote_average?.toFixed(1)}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TrendingShows;
