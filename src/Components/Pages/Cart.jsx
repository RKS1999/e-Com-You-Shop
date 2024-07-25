import React from "react";
import { MdDelete } from "react-icons/md";
// import { useNavigate } from "react-router-dom";
import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteProduct, increment, decrement } from "../Features/CartSlice";

const Cart = () => {
  const { cartData } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const totalPrice = cartData
    .map((items) => items.price * items.qty)
    .reduce((a, c) => a + c, 0);

  return (
    <div>
      <section className="inner_page_head">
        <div className="container_fuild">
          <div className="row">
            <div className="col-md-12">
              <div className="full">
                <h3>Cart</h3>
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
                  <div className="row">
                    <div className="col-lg-7">
                      <h5 className="mb-3">
                        <Link to="/shop" className="text-body">
                          <i className="fas fa-long-arrow-alt-left me-2"></i>
                          Continue shopping
                        </Link>
                      </h5>
                      <hr />

                      {cartData.map((items, index) => {
                        return (
                          <div className="card mb-3" key={index}>
                            <div className="card-body">
                              <div className="d-flex justify-content-between">
                                <div className="d-flex flex-row align-items-center">
                                  <div>
                                    <img
                                      src={items.thumbnail}
                                      className="img-fluid rounded-3"
                                      alt="Shopping item"
                                      style={{ width: "65px" }}
                                    />
                                  </div>
                                  <div className="ms-3">
                                    <h5 style={{ color: "#FF474C" }}>
                                      {items.title}
                                    </h5>
                                    <p
                                      className="small mb-0"
                                      style={{ color: "green" }}
                                    >
                                      Rating: {items.rating}*
                                    </p>
                                  </div>
                                </div>
                                <div className="d-flex flex-row align-items-center">
                                  <div style={{ width: "100px" }}>
                                    <h5
                                      className="fw-normal mb-0"
                                      style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        color: "#FF474C",
                                      }}
                                    >
                                      Qty.
                                    </h5>
                                    <div
                                      className="d-flex"
                                      style={{
                                        justifyContent: "center",
                                        alignItems: "center",
                                      }}
                                    >
                                      <button
                                        style={{
                                          background: "transparent",
                                          border: "transparent",
                                          fontSize: "25px",
                                        }}
                                        onClick={() => {
                                          dispatch(increment(items.id));
                                        }}
                                      >
                                        <CiCirclePlus />
                                      </button>
                                      <h6
                                        style={{
                                          justifyContent: "center",
                                          alignItems: "center",
                                          paddingTop: "12px",
                                        }}
                                      >
                                        {items.qty}
                                      </h6>
                                      <button
                                        style={{
                                          background: "transparent",
                                          border: "transparent",
                                          fontSize: "25px",
                                        }}
                                        onClick={() => {
                                          dispatch(decrement(items.id));
                                        }}
                                      >
                                        <CiCircleMinus />
                                      </button>
                                    </div>
                                  </div>
                                  <div style={{ width: "100px" }}>
                                    <h5 style={{ color: "#FF474C" }}>Price</h5>
                                    <h6
                                      className="mb-0"
                                      style={{ padding: "5px" }}
                                    >
                                      ${items.price * items.qty}
                                    </h6>
                                  </div>
                                  <div>
                                    <button
                                      style={{
                                        background: "transparent",
                                        border: "transparent",
                                        fontSize: "25px",
                                        color: "brown",
                                      }}
                                      onClick={() => {
                                        dispatch(deleteProduct(items.id));
                                      }}
                                    >
                                      <MdDelete />
                                    </button>
                                  </div>
                                  <a href="#!" style={{ color: "#cecece" }}>
                                    <i className="fas fa-trash-alt"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    <div className="col-lg-5">
                      <div
                        className="card text-white rounded-3"
                        style={{ backgroundColor: "#FF474C" }}
                      >
                        <div className="card-body">
                          <div className="d-flex justify-content-between align-items-center mb-4">
                            <h5 className="mb-0">Price details</h5>
                          </div>

                          <hr className="my-4" />

                          <div className="d-flex justify-content-between">
                            <p className="mb-2">Subtotal</p>
                            <p className="mb-2">${totalPrice}</p>
                          </div>

                          <div className="d-flex justify-content-between">
                            <p className="mb-2">Shipping</p>
                            <p className="mb-2">$20.00</p>
                          </div>

                          <div className="d-flex justify-content-between mb-4">
                            <p className="mb-2">Total(Incl. taxes)</p>
                            <p className="mb-2">${totalPrice + 20}</p>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            <button
                              type="button"
                              className="btn btn-success btn-block btn-lg"
                              style={{
                                margin: "2px",
                                display: "flex",
                                justifyContent: "center",
                              }}
                            >
                              Proceed to Checkout
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

export default Cart;
