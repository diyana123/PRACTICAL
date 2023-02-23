import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import SubHeader from "./Components/Header/SubHeader";
import Head from "./Components/Header/Head";
import Cards from "./Components/Header/Cards/Cards";
import Banners from "./Components/Header/Cards/banners";
import Destination from "./Components/Destination/Destination";
import Offers from "./Components/Offers/Offers";
import BookForm from "./Components/BookForm/BookForm";
import HeroSlider from "./Components/Hero/HeroSlider";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />

      {/* <SubHeader /> */}
      <div className="-pt-4">
        <Head />
      </div>

      <HeroSlider />
      <div className="container mx-auto relative">
        {/* <div className="bg-opacity-25 mt-4 p-4 lg:shadow-xl lg:absolute lg:left-0 lg:right-0 lg:p-0 lg:z-10 lg:-top-12"> */}
        {/* <div className="bg-opacity-25 mt-4 p-4 lg:shadow-xl lg:absolute lg:left-0 lg:right-0 lg:p-0 lg:z-10 lg:-top-12">
          <BookForm />
        </div> */}
      </div>
      <Destination />

      <Banners />

      <Offers />

      <Footer />
    </div>
  );
}

export default App;
