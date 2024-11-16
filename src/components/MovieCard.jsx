import { Link } from "react-router-dom";

function MovieCard({ title, id }) {
  return (
    <article>
      <h2>{title}</h2>
      <a href="/">
        <span>
          <p>
            <Link to={`/movie/${id}`}>View Info</Link>
          </p>
        </span>
      </a>
    </article>
  );
};

export default MovieCard;