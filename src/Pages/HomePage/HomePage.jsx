import React from "react";
import { HeroSection, MostPopularProductsSection, Banner } from "../../exports";
function HomePage() {
  return (
    <div className="relative scroll-smooth">
      <HeroSection />
      <MostPopularProductsSection />
      <Banner />
    </div>
  );
}

export default HomePage;
