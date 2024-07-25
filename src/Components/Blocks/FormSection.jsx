import React from "react";

const FormSection = () => {
  return (
    <div>
      <section className="why_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="full">
                <form action="index.html">
                  <fieldset>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      name="name"
                      required
                    />
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      name="email"
                      required
                    />
                    <input
                      type="text"
                      placeholder="Enter subject"
                      name="subject"
                      required
                    />
                    <textarea
                      placeholder="Enter your message"
                      required
                    ></textarea>
                    <input type="submit" value="Submit" />
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FormSection;
