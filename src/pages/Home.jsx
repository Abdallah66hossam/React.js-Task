import Banner from "../components/Banner";
import Details from "../components/Details";
import NavBar from "../components/NavBar";
import Services from "../components/Services";
import Products from "../components/Products";
import Statictics from "../components/Statictics";
import News from "../components/News";
import Partners from "../components/Partners";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <main className="bg-white relative">
      <NavBar />
      <Banner />
      <Details />
      <Services />
      <Products />
      <Statictics />
      <News />
      <Partners />
      <Newsletter />
      <Footer />
    </main>
  );
};

export default Home;
