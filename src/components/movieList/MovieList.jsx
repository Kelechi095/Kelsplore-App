import "./movieList.css";

const MovieList = ({ movieInfo }) => {
  return (
    <div className="movie-list">
      {movieInfo?.map((movie, index) => (
        <div key={index} className="movie-info">
          <img src={movie.Poster} alt="" />
          <p className="title">
            {movie.Title} ({movie.Year})
          </p>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
