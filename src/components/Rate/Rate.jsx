import redStar from "../../assets/star.png";
import notRedStar from "../../assets/empty-star.png";

function Rate({ score }) {
  // Tableau contenant les indices des étoiles
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="stars-rating">
      {/* Parcours du tableau 'stars' pour afficher les étoiles */}
      {stars.map((index) =>
        score >= index ? (
          // Affiche une étoile rouge si le score est supérieur ou égal à l'index actuel
          <img key={index} className="stars" src={redStar} alt="rate stars" />
        ) : (
          // Affiche une étoile vide dans le cas contraire
          <img
            key={index}
            className="stars"
            src={notRedStar}
            alt="rate stars"
          />
        )
      )}
    </div>
  );
}

export default Rate;
