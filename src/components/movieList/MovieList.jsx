import "./movieList.css";

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies?.slice(0, 3).map((movie) => (
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
