import React from "react";
import Banner from "./Banner/Banner";
import Brand from "./Brand/Brand";
import Categories from "./Categories/categories";
import Category from "./Category/Category";
import Review from "./CustomerReview/Review";
import DealofDayPage from "./DealOfTheDay/DealofDayPage";
import Delivery from "./Delivery/Delivery";
import Featured from "./Featured/Featured";
import News from "./News/News";
import SaleBanner from "./SaleBanner/SaleBanner";

const Homepage = () => {
  return (
    <>
      <Banner />
      <Categories />
      <Category />
      <SaleBanner />
      <Featured />
      <Review />
      <DealofDayPage />
      <News />
      <Delivery />
      <Brand />
    </>
  );
};

export default Homepage;
