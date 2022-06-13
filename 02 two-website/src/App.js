import React from "react";
import AppSection from "./AppSection";
import CardSection from "./CardSection";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import Nav from "./Nav";

const App = () => {
  return (
    <div>
      <Nav />
      <HeroSection />
      <CardSection />
      <AppSection />
      <Footer />
    </div>
  );
};

export default App;
