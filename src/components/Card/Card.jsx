import { Link } from "react-router-dom";

function Card({ title, cover, id }) {
  return (
    <Link to={`/fichelogement/${id}`} className="card-link">
      <article className="card-logement">
        <img src={cover} alt="location" />
        <p className="card-logement-title">{title}</p>
      </article>
    </Link>
  );
}

export default Card;
