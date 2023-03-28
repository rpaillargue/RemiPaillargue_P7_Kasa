import Banner from "../../components/Banner/Banner";
import "../../components/Banner/banner.css";
import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import "../../components/Card/card.css";

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
    <div>
      <Banner />
      {!isLoading &&
        logements.map((logement) => (
          <section className="logement-container">
            <Card
              title={logement.title}
              cover={logement.cover}
              id={logement.id}
            />
          </section>
        ))}
    </div>
  );
}

export default Home;
