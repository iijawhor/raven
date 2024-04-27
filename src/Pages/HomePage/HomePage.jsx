import React from "react";
import { HeroSection, MostPopularProductsSection } from "../../exports";
function HomePage() {
  return (
    <div className="relative scroll-smooth">
      <HeroSection />
      <MostPopularProductsSection />
    </div>
  );
}

export default HomePage;
