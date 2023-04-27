import "../FicheLogement/FicheLogement.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Error from "../Error/Error";
import Carousel from "../../components/Carousel/Carousel";
import Tag from "../../components/Tag/Tag";

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
                <h1>{logement.title}</h1>
                <h3>{logement.location}</h3>
              </div>
              <div className="tag-container">
                {tags.map((tag) => (
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
                <div className="score">8.5/10</div>
              </div>
            </div>
          </section>
          <div className="description-equipment">
            <div className="description">
              <div className="description-title">Description</div>
              <div className="description-text">{logement.description}</div>
            </div>
            <div className="equipments">
              <div className="equipments-title">Équipements</div>
              <div className="equipments-text">{stuff}</div>
            </div>
          </div>
        </div>
      ) : (
        <div>ERROR</div>
      )}
    </div>
  );
}
export default FicheLogement;
