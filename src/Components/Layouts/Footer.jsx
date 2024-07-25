import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="container">
        <div className="row" style={{ padding: "30px" }}>
          <div className="col-md-4">
            <div className="full">
              <div className="logo_footer">
                <Link to="#">
                  <img width="100" src="images/logo.png" alt="#" />
                </Link>
              </div>
              <div className="information_f">
                <p>
                  <strong>TELEPHONE:</strong> +1(888) 459-7789
                </p>
                <p>
                  <strong>EMAIL:</strong> yourmain@gmail.com
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-7">
                <div className="row">
                  <div className="col-md-6">
                    <div className="widget_menu">
                      <h3>Menu</h3>
                      <ul>
                        <li>
                          <Link to="/">Home</Link>
                        </li>
                        <li>
                          <Link to="about">About</Link>
                        </li>
                        <li>
                          <Link to="testimonial">Testimonial</Link>
                        </li>
                        <li>
                          <Link to="shop">Shop</Link>
                        </li>
                        <li>
                          <Link to="blog">Blog</Link>
                        </li>
                        <li>
                          <Link to="contact">Contact</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="widget_menu">
                      <h3>Account</h3>
                      <ul>
                        <li>
                          <Link to="account">Account</Link>
                        </li>
                        <li>
                          <Link to="cart">Cart</Link>
                        </li>
                        <li>
                          <Link to="login">Login</Link>
                        </li>
                        <li>
                          <Link to="register">Register</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <div className="widget_menu">
                  <h3>Newsletter</h3>
                  <div className="information_f">
                    <p>Subscribe by our newsletter and get update protidin.</p>
                  </div>
                  <div className="form_sub">
                    <form>
                      <fieldset>
                        <div className="field">
                          <input
                            type="email"
                            placeholder="Enter Your Mail"
                            name="email"
                          />
                          <input type="submit" value="Subscribe" />
                        </div>
                      </fieldset>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h6
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Developed by Roshan Kumar Singh.
        </h6>
      </div>
    </div>
  );
};

export default Footer;
