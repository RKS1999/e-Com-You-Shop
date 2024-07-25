import React from "react";
import FormSection from "../Blocks/FormSection";
import ArrivalSection from "../Blocks/ArrivalSection";

const Contact = () => {
  return (
    <div>
      <section className="inner_page_head">
        <div className="container_fuild">
          <div className="row">
            <div className="col-md-12">
              <div className="full">
                <h3>Contact us!</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FormSection />
      <ArrivalSection />
    </div>
  );
};

export default Contact;
