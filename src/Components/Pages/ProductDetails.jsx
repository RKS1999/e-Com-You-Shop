import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addProduct, deleteProduct } from "../Features/CartSlice";
import { ImCross } from "react-icons/im";
import { productGetByIdQuaries } from "../../Services/useQueries";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductDetails = () => {
  const { id } = useSelector((state) => state.cart);
  const [image, setImage] = useState("");
  // console.log(id);
  const { data, isPending, isError, error } = productGetByIdQuaries(id);
  console.log(data);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (isPending) {
    return <span>Loading...</span>;
  }
  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
  };

  return (
    <div>
      <section className="inner_page_head">
        <div className="container_fuild">
          <div className="row">
            <div className="col-md-12">
              <div className="full">
                <h3>Product Details</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="container-fluid h-100 h-custom"
        style={{ backgroundColor: "#eee", marginTop: "2px" }}
      >
        <div className="container-fluid py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card">
                <div className="card-body p-4">
                  <div className="row" key={data.id}>
                    <div className="col-lg-5">
                      <div className="card mb-3">
                        <div className="card-body">
                          <div className="d-flex justify-content-between">
                            <div className="d-flex flex-row align-items-center">
                              <div>
                                <div className="d-flex justify-content-center">
                                  <h1
                                    className="mb-2"
                                    style={{ color: "#FF474C" }}
                                  >
                                    {data.title}
                                  </h1>
                                </div>
                                <br />
                                <img
                                  src={image === "" ? data.thumbnail : image}
                                  className="img-fluid rounded-3"
                                  alt="no image found"
                                  style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    width: "100%",
                                    height: "100%",
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="slider-container">
                        <Slider {...settings}>
                          <div>
                            <img
                              src={data.images[0]}
                              alt=""
                              height="100px"
                              width="100px"
                              onClick={() => setImage(data.images[0])}
                            />
                          </div>
                          <div>
                            <img
                              src={data.images[1]}
                              alt=""
                              height="100px"
                              width="100px"
                              onClick={() => setImage(data.images[1])}
                            />
                          </div>
                          <div>
                            <img
                              src={data.images[2]}
                              alt=""
                              height="100px"
                              width="100px"
                              onClick={() => setImage(data.images[2])}
                            />
                          </div>
                          <div>
                            <img
                              src={data.images[3]}
                              alt=""
                              height="100px"
                              width="100px"
                              onClick={() => setImage(data.images[3])}
                            />
                          </div>
                        </Slider>
                      </div>
                    </div>

                    <div className="col-lg-7">
                      <div
                        className="card text-white rounded-3"
                        style={{ background: "transparent" }}
                      >
                        <div className="card-body">
                          <div className="d-flex justify-content-between align-items-center mb-7">
                            <h5 className="mb-0" style={{ color: "#FF474C" }}>
                              Product Details
                            </h5>
                            <div>
                              <button
                                style={{
                                  background: "transparent",
                                  border: "transparent",
                                  fontSize: "25px",
                                  color: "brown",
                                }}
                                onClick={() => navigate("/")}
                              >
                                <ImCross />
                              </button>
                            </div>
                          </div>

                          <hr className="my-4" style={{ color: "#FF474C" }} />

                          <br />
                          <div className="d-flex justify-content-between">
                            <h5 className="mb-2" style={{ color: "#87CEEB" }}>
                              Price
                            </h5>
                            <p className="mb-2" style={{ color: "black" }}>
                              ${data.price}
                            </p>
                          </div>

                          <div className="d-flex justify-content-between">
                            <h5 className="mb-2" style={{ color: "#87CEEB" }}>
                              Rating
                            </h5>
                            <p className="mb-2" style={{ color: "black" }}>
                              {data.rating}*
                            </p>
                          </div>

                          <div className="d-flex justify-content-between">
                            <h5 className="mb-2" style={{ color: "#87CEEB" }}>
                              Item Left
                            </h5>
                            <p className="mb-2" style={{ color: "black" }}>
                              {data.stock}
                            </p>
                          </div>
                          <div className="d-flex justify-content-between">
                            <h5 className="mb-2" style={{ color: "#87CEEB" }}>
                              Item Brand
                            </h5>
                            <p className="mb-2" style={{ color: "black" }}>
                              {data.brand}
                            </p>
                          </div>

                          <div className="d-flex justify-content-between">
                            <h5 className="mb-2" style={{ color: "#87CEEB" }}>
                              Item Weight
                            </h5>
                            <p className="mb-2" style={{ color: "black" }}>
                              {data.weight}
                            </p>
                          </div>

                          <div className="d-flex justify-content-between">
                            <h5 className="mb-2" style={{ color: "#87CEEB" }}>
                              Minimum Order
                            </h5>
                            <p className="mb-2" style={{ color: "black" }}>
                              {data.minimumOrderQuantity}
                            </p>
                          </div>

                          <div className="d-flex justify-content-between">
                            <h5 className="mb-2" style={{ color: "#87CEEB" }}>
                              Item Warrenty
                            </h5>
                            <p className="mb-2" style={{ color: "black" }}>
                              {data.warrantyInformation}
                            </p>
                          </div>

                          <div className="d-flex justify-content-between">
                            <h5 className="mb-2" style={{ color: "#87CEEB" }}>
                              Return Policy
                            </h5>
                            <p className="mb-2" style={{ color: "black" }}>
                              {data.returnPolicy}
                            </p>
                          </div>

                          <div className="d-flex justify-content-between">
                            <h5 className="mb-2" style={{ color: "#87CEEB" }}>
                              Shipping Details
                            </h5>
                            <p className="mb-2" style={{ color: "black" }}>
                              {data.shippingInformation}
                            </p>
                          </div>
                          <br />

                          <h5
                            className="mb-2"
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              color: "#FF474C",
                            }}
                          >
                            Description:{" "}
                          </h5>
                          <hr style={{ color: "#FF474C" }} />
                          <p className="mb-2" style={{ color: "black" }}>
                            {data.description}
                          </p>

                          <hr style={{ color: "#FF474C" }} />
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            <button
                              onClick={() => {
                                dispatch(addProduct(data));
                                navigate("/cart");
                              }}
                              className="btn btn-success"
                              style={{
                                margin: "2px",
                                display: "flex",
                                justifyContent: "center",
                              }}
                            >
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;
