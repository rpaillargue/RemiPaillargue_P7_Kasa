import redStar from "../../assets/star.png";
import notRedStar from "../../assets/empty-star.png";

function Rate({ score }) {
  const stars = [1, 2, 3, 4, 5];
  return (
    <div className="stars-rating">
      {stars.map((index) =>
        score >= index ? (
          <img key={index} className="stars" src={redStar} alt="rate stars" />
        ) : (
          <img key={index} className="stars" src={notRedStar} alt="rate stars" />
        )
      )}
    </div>
  );
}

export default Rate;
