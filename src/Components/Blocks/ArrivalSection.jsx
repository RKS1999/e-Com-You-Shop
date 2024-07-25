import React from "react";
import { Link } from "react-router-dom";

const ArrivalSection = () => {
  return (
    <div>
      <section className="arrival_section">
        <div className="container">
          <div className="box">
            <div className="arrival_bg_box">
              <img src="images/arrival-bg.png" alt="" />
            </div>
            <div className="row">
              <div className="col-md-6 ml-auto">
                <div className="heading_container remove_line_bt">
                  <h2>#NewArrivals</h2>
                </div>
                <p>
                  Explicabo esse amet tempora quibusdam laudantium, laborum
                  eaque magnam fugiat hic? Esse dicta aliquid error repudiandae
                  earum suscipit fugiat molestias, veniam, vel architecto
                  veritatis delectus repellat modi impedit sequi.
                </p>
                {/* <div className="btn-box">
                  <Link to="shop" className="btn1">
                    Shop Now
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArrivalSection;
