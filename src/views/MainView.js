import React from "react";
import Carousel from "../components/Carousel";

function MainView() {
  return (
    <div>
      <Carousel slides={1} infinite={false} />
      <Carousel slides={4} infinite={true} />
      <Carousel slides={10} infinite={false} />
    </div>
  );
}

export default MainView;
