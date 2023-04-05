import "../FicheLogement/FicheLogement.css";

function FicheLogement() {
  return (
    <div className="fiche-logement">
      <section className="host-info">
        <div className="title-tag">
          <div className="title">
            <h1>Cozy loft on the Canal Saint-Martin</h1>
            <h3>Paris, Ile-de-France</h3>
          </div>
          <div className="tag-container">
            <div className="tag">Cozy</div>
            <div className="tag">Canal</div>
            <div className="tag">Paris 10</div>
          </div>
        </div>
        <div className="host-rating">
          <div className="host">
            <div className="host-name">Random host name</div>
            <img
              src="https://picsum.photos/50/50?random=1"
              alt="Random host pic"
            />
          </div>
          <div className="rating">
            <div className="score">8.5/10</div>
          </div>
        </div>
      </section>
      <div className="description">
        <div className="description-title">Description</div>
        <div className="description-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in lectus
          elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia Curae; Proin fermentum lobortis quam at facilisis.
          Maecenas sit amet eleifend arcu, vel euismod elit. Vestibulum vitae
          nisi ut nisl elementum fringilla sed sit amet orci. Sed at suscipit
          velit, in viverra tellus.
        </div>
      </div>
      <div className="equipments">
        <div className="equipments-title">Équipements</div>
        <div className="equipments-text">
          Nullam ullamcorper ex eget erat facilisis bibendum. Praesent rutrum in
          lorem ac ultricies. Fusce vel pharetra sapien. Donec vestibulum,
          lectus quis sagittis pharetra, mauris libero tristique odio, a lacinia
          odio lacus a sapien. Ut consequat diam eget sem pellentesque, in
          bibendum ante sagittis. Ut ac justo eu massa congue interdum. Sed
          luctus pharetra lorem, eu pretium sapien iaculis vel.
        </div>
      </div>
    </div>
  );
}
export default FicheLogement;
