import * as React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Hero from "../../components/Hero/Hero";
import Footer from "../../components/Footer/Footer";
import Feature from "../../components/Feature/Feature";
import Carousel from "../../components/Carousel/Carousel";
import LoginDialog from "../../components/LoginDialog/LoginDialog";

function Home() {
  return (
    <React.Fragment>
      <NavBar />
      <LoginDialog />
      <Hero />
      <Feature />
      <Carousel />
      <Footer />
    </React.Fragment>
  );
}

export default Home;
