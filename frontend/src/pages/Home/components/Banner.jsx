import React from "react";

// components
import { Container } from "components/Container";
import { Slider } from "components/Slider";

// mock data
import { data } from "./mockBannersData";

const Banner = () => {
  return (
    <Container extraClasses={"homePageBanner mb-3"}>
      <div className="h-[50vh]">
        <Slider datas={data} />
      </div>
    </Container>
  );
};

export default Banner;
