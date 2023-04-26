import React from "react";
import Banner from "../../components/Banner/Banner";
import "../../components/Banner/banner.css";
import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import "../../components/Card/card.css";
import bannerHome from "../../assets/banner_home.png";

function Home() {
  const [logements, setLogements] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("./data.json")
      .then((response) => response.json())
      .then((data) => {
        setLogements(data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="section-container">
      <Banner pic={bannerHome} text="Chez vous, partout et ailleurs" />
      <div className="logement-container">
        {!isLoading &&
          logements.map((logement) => (
            <Card
              title={logement.title}
              cover={logement.cover}
              id={logement.id}
              key={logement.id}
            />
          ))}
      </div>
    </div>
  );
}

export default Home;
