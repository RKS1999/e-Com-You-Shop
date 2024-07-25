import React from "react";
import WhySection from "../Blocks/WhySection";
import ArrivalSection from "../Blocks/ArrivalSection";

const About = () => {
  return (
    <div>
      <section className="inner_page_head">
        <div className="container_fuild">
          <div className="row">
            <div className="col-md-12">
              <div className="full">
                <h3>About us</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <WhySection />
      <ArrivalSection />
    </div>
  );
};

export default About;
