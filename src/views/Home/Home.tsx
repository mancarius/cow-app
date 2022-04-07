import * as React from "react";
import Hero from "../../components/Hero/Hero";
import Feature from "../../components/Feature/Feature";
import Carousel from "../../components/Carousel/Carousel";

function Home() {
  return (
    <React.Fragment>
      <Hero />
      <Feature />
      {/*<Carousel />*/}
    </React.Fragment>
  );
}

export default Home;
