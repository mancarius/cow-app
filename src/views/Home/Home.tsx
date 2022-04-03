import * as React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Hero from "../../components/Hero/Hero";
import Footer from "../../components/Footer/Footer";
import Feature from "../../components/Feature/Feature";
import Carousel from "../../components/Carousel/Carousel";

function Home() {
  return (
    <React.Fragment>
      <NavBar />
      <Hero />
      <Feature />
      <Carousel />
      <Footer />
    </React.Fragment>
  );
}

export default Home;
