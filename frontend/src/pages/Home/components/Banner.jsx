import React from "react";

// components
import { Container } from "components/Container";
import { Slider } from "components/Slider";

const Banner = () => {
  return (
    <Container extraClasses={"homePageBanner mb-3"}>
      <div className="h-[50vh] bg-slate-300">
        <Slider />
      </div>
    </Container>
  );
};

export default Banner;
