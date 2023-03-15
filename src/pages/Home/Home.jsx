import Header from "../../components/Header/Header";
import "../../components/Header/header.css";
import Footer from "../../components/Footer/Footer";
import "../../components/Footer/footer.css";
import Banner from "../../components/Banner/Banner";
import "../../components/Banner/banner.css";

function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <Footer />
    </div>
  );
}

export default Home;
