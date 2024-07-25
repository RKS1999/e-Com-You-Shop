import React from "react";
import Slider from "../Blocks/Slider";
import WhySection from "../Blocks/WhySection";
import ArrivalSection from "../Blocks/ArrivalSection";
import Products from "../Blocks/Products";
import SubscribeSection from "../Blocks/SubscribeSection";
import ClientSection from "../Blocks/ClientSection";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Slider />
      <WhySection />
      <ArrivalSection />
      <Products />
      <section className="product_section">
        <div className="btn-box">
          <Link to="shop">View All products</Link>
        </div>
      </section>
      <br />
      <br />
      <SubscribeSection />
      <ClientSection />
    </div>
  );
};

export default Home;
