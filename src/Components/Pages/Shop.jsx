// Shop.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, changeSearchProduct, getId } from "../Features/CartSlice";
import {
  getAllCategoriesQueries,
  productGetQuaries,
} from "../../Services/useQueries";

const Shop = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { searchProduct } = useSelector((state) => state.cart);
  const { data: categories } = getAllCategoriesQueries();
  console.log(categories);
  const { isPending, isError, data: products, error } = productGetQuaries();
  if (isPending) {
    return <span>Loading...</span>;
  }
  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  const limitTitle = (title, limit = 10) => {
    if (title.length > limit) {
      return title.substring(0, limit) + "...";
    }
    return title;
  };

  return (
    <div>
      <section className="inner_page_head">
        <div className="container_fuild">
          <div className="row">
            <div className="col-md-12">
              <div className="full">
                <h3>Shop</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="product_section layout_padding">
        <div className="row">
          <div className="col-3">
            <div className="container">
              <form className="form-inline" style={{ display: "flex" }}>
                <input
                  type="text"
                  className="input is-expanded"
                  placeholder="Search"
                  onChange={(e) =>
                    dispatch(changeSearchProduct(e.target.value))
                  }
                />
              </form>
            </div>
            {categories?.map((category) => {
              console.log(category);
              <div>
                <li style={{ color: "black" }}>{category}</li>
              </div>;
            })}
          </div>
          <div className="row">
            {products
              .filter((product) => product.title.includes(searchProduct))
              .map((product, id) => (
                <div className="col-sm-6 col-md-4 col-lg-3" key={id}>
                  <div className="box">
                    <div className="option_container">
                      <div className="options">
                        <button
                          onClick={() => {
                            dispatch(addProduct(product));
                            navigate("/cart");
                          }}
                          className="option1"
                          style={{
                            padding: "10px",
                            borderRadius: "100px",
                            margin: "2px",
                          }}
                        >
                          Add to Cart
                        </button>
                        <button
                          onClick={() => {
                            dispatch(getId(product.id));
                            navigate("/product/:id");
                          }}
                          className="option2"
                          style={{
                            padding: "10px",
                            borderRadius: "100px",
                            margin: "2px",
                          }}
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                    <div className="img-box">
                      <img src={product.thumbnail} alt={product.title} />
                    </div>
                    <div className="detail-box">
                      <h5>{limitTitle(product.title)}</h5>
                      <h6>${product.price}</h6>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
