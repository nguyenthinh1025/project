import React, { useEffect, useState } from "react";
import { arrayProducts } from "../../../Component/Array";
import { useDispatch, useSelector } from "react-redux";
export default function ListProduct(props) {
  const dispatch = useDispatch();
  const { gioHang } = useSelector((root) => root.gioHangReducer);
  const { handleSideBar, handleDitail, handleCart } = props;
  const [startIndex, setStartIndex] = useState(0);
  const [selectedProductId, setSelectedProductId] = useState(null);

  const moveToNext = () => {
    setStartIndex(startIndex + 6);
  };

  const moveToPrevious = () => {
    setStartIndex(startIndex - 6);
  };

  const handleClick = (id) => {
    setSelectedProductId(id);
  };

  const visibleItems = arrayProducts.slice(startIndex, startIndex + 6);

  useEffect(() => {
    if (selectedProductId !== null) {
      setTimeout(() => setSelectedProductId(null), 1000); // Sau 1 giây, reset selectedProductId
    }
  }, [selectedProductId]);
  return (
    <section className="our-products l-section-padding" id="products">
      <div className="row">
        <div className="columns large-12">
          <h2 className="l-section-title">
            <span className="title-text">We make you awesome</span>
          </h2>
        </div>
      </div>
      <div className="row">
        <div className="column-large-12">
          <div className="hidden-container">
            <div className="row">
              <div className="columns large-12 medium-12">
                <div className="added-products">
                  <p className="l-inline-block" />
                  <div className="shopping-cart l-inline-block">
                  <i class="fa-solid fa-cart-plus"  onClick={() => {
                        handleSideBar();
                      }}></i>

                    <span
                      className="products-number"
                      onClick={() => {
                        handleCart();
                      }}
                    >
                      <span className="js-product-count">{gioHang.length}</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="columns large-12 medium-12 small-12">
                <div className="product-presentation-wrapper">
                  <div className="product-presentation-content js-products-container">
                    <div className="category-list">
                      <dl className="select" style={{paddingTop:'10px'}}>
                        <dt>
                          <a href="#">
                            <i class="fa-solid fa-bars"></i>
                          </a>
                        </dt>
                        <dd />
                      </dl>
                    </div>
                    <div className="slider-preloader">
                      <div id="preloader-container">
                        <div className="preloader-center">
                          <div className="preloader-view">
                            <div />
                            <div />
                            <div />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="products-slider js-products-slider"
                      data-target="c1"
                    >
                      <ul className="slides owl-carousel owl-theme owl-loaded owl-text-select-on">
                        <div className="owl-stage-outer">
                          <div
                            className="owl-stage"
                            style={{
                              transform: "translate3d(0px, 0px, 0px)",
                              transition: "all 0s ease 0s",
                              width: "900px",
                              margin: "0 auto",
                            }}
                          >
                            {visibleItems.map((item, index) => {
                              return (
                                <div
                                  className="owl-item active"
                                  style={{
                                    width: "270px",
                                    marginRight: "30px",
                                  }}
                                >
                                  <li>
                                    <div className="prod-item l-mb-40">
                                      <div className="image-block">
                                        <div className="thumbnail">
                                          <img src={item.img} alt />
                                        </div>
                                        <div className="prod-hover-view">
                                          <ul
                                            className="hover-controls"
                                            style={{ position: "relative" }}
                                          >
                                            <li
                                              className="view-product-gallery js-view-product"
                                              data-target="c13"
                                              onClick={() => {
                                                handleDitail();
                                              }}
                                            >
                                              <i class="fa-solid fa-magnifying-glass" style={{paddingTop:'14px'}}></i>
                                             
                                            </li>
                                            <li
                                              className="add-product-code"
                                              data-target="c13"
                                              onClick={() => {
                                                handleClick(item.id);

                                                const action = {
                                                  type: "ADD_TO_CART",
                                                  sanPhamClick: item,
                                                };
                                                dispatch(action);
                                              }}
                                            >
                                              <i class="fa-solid fa-plus" style={{paddingTop:'14px'}}></i>
                                            </li>
                                            <div
                                              className={
                                                selectedProductId === item.id
                                                  ? "moved"
                                                  : ""
                                              }
                                              style={{
                                                position: "absolute",
                                                top: "-50px",
                                                right: "80px",
                                                display:
                                                  selectedProductId === item.id
                                                    ? "block"
                                                    : "none",
                                              }}
                                            >
                                              <span>+1</span>
                                            </div>
                                          </ul>
                                        </div>
                                      </div>
                                      <div className="gen-product-info">
                                        <p className="prod-price is-new-price">
                                          {item.price.old === 0 ? (
                                            <div></div>
                                          ) : (
                                            <span className="old-price">
                                              <span className="currency">
                                                $
                                              </span>
                                              <span className="value">
                                                48.00
                                              </span>
                                            </span>
                                          )}
                                          <span className="current-price">
                                            <span className="currency">$</span>
                                            <span className="value">
                                              {item.price.current}
                                            </span>
                                          </span>
                                        </p>
                                        <p className="prod-name">{item.name}</p>
                                      </div>
                                    </div>
                                  </li>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                        <div className="owl-controls">
                          <div className="owl-nav">
                            <div
                              className="owl-prev"
                              onClick={moveToPrevious}
                              disabled={startIndex === 0}
                            />
                            <div
                              className="owl-next"
                              onClick={moveToNext}
                              disabled={startIndex + 6 >= arrayProducts.length}
                            />
                          </div>
                          <div
                            className="owl-dots"
                            style={{ display: "none" }}
                          />
                        </div>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
