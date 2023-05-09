function Banner({ pic, text }) {
  return (
    <div className="banner-container">
      <div className="banner">
        <div className="photo-container">
          <img className="banner-photo" src={pic} alt="bannière paysage" />
          <div className="banner-shadow"></div>
        </div>
        {text && <p className="banner-text">{text}</p>}
      </div>
    </div>
  );
}

export default Banner;
