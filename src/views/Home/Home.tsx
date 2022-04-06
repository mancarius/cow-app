import * as React from "react";
import Hero from "../../components/Hero/Hero";
import Feature from "../../components/Feature/Feature";
import Carousel from "../../components/Carousel/Carousel";
import LoginDialog from "../../components/LoginDialog/LoginDialog";

function Home() {
  return (
    <React.Fragment>
      <LoginDialog />
      <Hero />
      <Feature />
      <Carousel />
    </React.Fragment>
  );
}

export default Home;
