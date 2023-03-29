import banner from "../../assets/banner_home.png";

function Banner() {
  return (
    <div className="banner-container">
      <div className="banner">
        <div className="photo-container">
          <img className="banner-photo" src={banner} alt="bannière paysage" />
          <div className="banner-shadow"></div>
        </div>
        <p className="banner-text">Chez vous, partout et ailleurs</p>
      </div>
    </div>
  );
}

export default Banner;
