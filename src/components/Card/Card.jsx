import { Link } from "react-router-dom";

function Card({ title, cover, id }) {
  return (
    <article className="card-logement">
      <Link to={`/fichelogement/${id}`} className="card-link">
        <img src={cover} alt="location" />
        <div className="card-shadow"></div>
        <p className="card-logement-title">{title}</p>
      </Link>
    </article>
  );
}

export default Card;
