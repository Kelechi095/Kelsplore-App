import "./tvshowsList.css";
import { Link } from "react-router-dom";

const TvshowsList = ({ shows }) => {
  return (
    <div className="show-list">
      {shows?.slice(0, 3).map((show) => (
        <Link to={`show/${show?.id}`} key={show.id}>
          <div key={show.id} className="show-info">
            <img
              src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
              alt=""
            />
            <div className="title-rating">
              <p className="title">{show.name}</p>
              <div className="rating">{show?.vote_average?.toFixed(1)}</div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default TvshowsList;
