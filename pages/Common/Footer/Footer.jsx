import React from "react";
import FFooter from "./FFooter";
import SFooter from "./SFooter";
import TFooter from "./TFooter";

const Footer = () => {
  return (
    <>
      <div className="bg-light unifiedFooter">
          <div className="container">
        <FFooter />
        <hr/>
        <SFooter/>
        <hr/>
        <TFooter/>
      </div>
      </div>
    </>
  );
};

export default Footer;
