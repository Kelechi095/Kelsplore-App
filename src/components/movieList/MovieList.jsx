import "./movieList.css";

const MovieList = ({ movies }) => {
  console.log(movies);
  return (
    <div className="movie-list">
      {movies?.slice(0, 3).map((movie) => (
        <div key={movie.id} className="movie-info">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt=""
          />
          <div className="title-rating">
            <p className="title">{movie.title}</p>
            <div className="rating">{movie?.vote_average?.toFixed(1)}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
