import React from "react";
import MilkPacket from "../Categories/MilkPacket";

const Featured = () => {
  return (
    <>
      <div className="bg-light cate-bg featuredPro">
        <div className="container">
          <h2 className="heading  headingSpacing">
            <span>Featured Products</span>
          </h2>
          <MilkPacket />
        </div>
      </div>
    </>
  );
};

export default Featured;
