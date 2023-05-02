import redStar from "../../assets/star.png";
import notRedStar from "../../assets/empty-star.png";

function Rate({ score }) {
  const stars = [1, 2, 3, 4, 5];
  return (
    <div>
      {stars.map((index) =>
        score >= index ? (
          <img key={index} src={redStar} alt="rate stars" />
        ) : (
          <img key={index} src={notRedStar} alt="rate stars" />
        )
      )}
    </div>
  );
}

export default Rate;
