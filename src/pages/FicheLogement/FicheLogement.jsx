import "../FicheLogement/FicheLogement.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Error from "../Error/Error";
import Carousel from "../../components/Carousel/Carousel";
import Tag from "../../components/Tag/Tag";
import Rate from "../../components/Rate/Rate";
import Collapse from "../../components/Collapse/Collapse";

function FicheLogement() {
  const [logement, setLogement] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const slidePics = logement && logement.pictures;
  const equipments = logement?.equipments;
  const tags = logement && logement.tags;
  const stuff = equipments?.map((item, index) => (
    <li key={index} className="equipments-list">
      {item}
    </li>
  ));

  let { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetch("../../data.json")
      .then((response) => response.json())
      .then((data) => {
        const logementTrouve = data.find((item) => item.id === id);
        if (logementTrouve === undefined) {
          setError(true);
        } else {
          console.log(logementTrouve);
          setLogement(logementTrouve);
        }

        setIsLoading(false);
        console.log(logementTrouve);
      })
      .catch((error) => console.log(error));
  }, [id]);

  if (error) return <Error />;

  return (
    <div>
      <Carousel slides={slidePics} />
      {!isLoading ? (
        <div className="fiche-logement">
          <section className="host-info">
            <div className="title-tag">
              <div className="title">
                <span className="title-logement">{logement.title}</span>
                <span className="location-logement">{logement.location}</span>
              </div>
              <div className="tag-container">
                {tags?.map((tag) => (
                  <Tag key={tag} tag={tag} />
                ))}
              </div>
            </div>
            <div className="host-rating">
              <div className="host">
                <div className="host-name">{logement?.host?.name}</div>
                <img src={logement?.host?.picture} alt="Random host pic" />
              </div>
              <div className="rating">
                <Rate score={logement?.rating} />
              </div>
            </div>
          </section>
          <div className="description-equipment">
            <Collapse
              title="Description"
              description={logement?.description}
              className="logement-description"
            />
            <Collapse
              title="Équipements"
              description={stuff}
              className="logement-equipement"
            />
          </div>
        </div>
      ) : (
        <div>ERROR</div>
      )}
    </div>
  );
}
export default FicheLogement;
