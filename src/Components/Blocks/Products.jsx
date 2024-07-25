import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, changeSearchProduct, getId } from "../Features/CartSlice";
import { productGetQuaries } from "../../Services/useQueries";

const Products = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const searchProduct = useSelector((state) => state.cart.searchProduct) || ""; // Ensure it's never undefined
  const { isPending, isError, data: products, error } = productGetQuaries();
  const [page, setPage] = useState(1);
  const handleSearch = (e) => {
    dispatch(changeSearchProduct(e.target.value)); // Correctly dispatching the action
  };
  const selectPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= products.length / 8 &&
      selectedPage !== page
    ) {
      setPage(selectedPage);
    }
  };

  useEffect(() => {
    console.log("Search Product state changed:", searchProduct);
  }, [searchProduct]);

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
      <section className="product_section layout_padding">
        <div className="container">
          <div className="row heading_container heading_center">
            <div className="col-6">
              <h2>
                All <span>Products</span>
              </h2>
            </div>
            <div className="col-6">
              <form className="form-inline" style={{ display: "flex" }}>
                <input
                  type="text"
                  className="input is-expanded"
                  placeholder="Search"
                  value={searchProduct}
                  onChange={handleSearch}
                />
              </form>
            </div>
          </div>
          <div className="row">
            {products
              .slice(page * 8 - 8, page * 8)
              .filter((product) =>
                product.title
                  .toLowerCase()
                  .includes(searchProduct.toLowerCase())
              )
              .map((product, id) => (
                <div className="col-sm-6 col-md-4 col-lg-3" key={id}>
                  <div className="box">
                    <div className="option_container">
                      <div className="options">
                        <button
                          onClick={() => {
                            dispatch(addProduct(product));
                            navigate("cart");
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
      {products.length > 0 && (
        <div className="pagination">
          <span
            onClick={() => selectPageHandler(page - 1)}
            className={page > 1 ? "" : "pagination__disable"}
          >
            ◀
          </span>

          {[...Array(products.length / 10)].map((_, i) => {
            return (
              <span
                key={i}
                className={page === i + 1 ? "pagination__selected" : ""}
                onClick={() => selectPageHandler(i + 1)}
              >
                {i + 1}
              </span>
            );
          })}

          <span
            onClick={() => selectPageHandler(page + 1)}
            className={page < products.length / 10 ? "" : "pagination__disable"}
          >
            ▶
          </span>
        </div>
      )}
    </div>
  );
};

export default Products;
