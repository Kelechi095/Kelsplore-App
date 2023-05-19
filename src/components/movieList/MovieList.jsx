import "./movieList.css";

const MovieList = ({ movieInfo }) => {
  return (
    <div className="movie-list">
      {movieInfo?.map((movie) => (
        <div key={movie.id} className="movie-info">
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
          <p className="title">
            {movie.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
