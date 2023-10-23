import React, { Fragment } from "react";
export default function Detail(props) {
  const { detail, handleDitail } = props;
  return (
    <Fragment>
      {detail ? (
        <div
          className="product-details-modal"
          style={{ transform: "translateX(0px)", overflowY: "scroll" }}
        >
          <div className="details-container">
            <div className="row">
              <div className="close-details" onClick={()=>{
                handleDitail()
              }} />
              <div className="column large-6 medium-6 custom-column">
                <div className="gallery-container js-product-gallery">
                  <div
                    className="details-preloader"
                    style={{ display: "none" }}
                  >
                    <svg
                      id="Layer_1"
                      x="0px"
                      y="0px"
                      width="600px"
                      height="690px"
                      viewBox="0 0 600 690"
                      enableBackground="new 0 0 600 690"
                      xmlSpace="preserve"
                    >
                      <polygon
                        fill="#f1f1f1"
                        className="polygon"
                        stroke="#A7A9AC"
                        strokeWidth={8}
                        strokeMiterlimit={10}
                        points="54.558,557.559 300,132.441 545.441,557.559 "
                      />
                      <polygon
                        fill="#8856A3"
                        className="inner"
                        points="96.037,535.115 300,168.885 503.963,535.115 "
                      />
                    </svg>
                  </div>
                  <div className="images-list owl-carousel owl-theme owl-loaded">
                    <div className="owl-stage-outer">
                      <div
                        className="owl-stage"
                        style={{
                          transform: "translate3d(0px, 0px, 0px)",
                          transition: "all 0s ease 0s",
                          width: 1410,
                        }}
                      >
                        <div
                          className="owl-item active"
                          style={{ width: 470, marginRight: 0 }}
                        >
                          <img src="http://placehold.it/460x590" alt />
                        </div>
                        <div
                          className="owl-item"
                          style={{ width: 470, marginRight: 0 }}
                        >
                          <img src="http://placehold.it/460x590" alt />
                        </div>
                        <div
                          className="owl-item"
                          style={{ width: 470, marginRight: 0 }}
                        >
                          <img src="http://placehold.it/460x590" alt />
                        </div>
                      </div>
                    </div>
                    <div className="owl-controls">
                      <div className="owl-nav">
                        <div className="owl-prev" style={{}} />
                        <div className="owl-next" style={{}} />
                      </div>
                      <div className="owl-dots" style={{ display: "none" }} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="column large-6 medium-6 custom-column">
                <div className="product-details">
                  <div className="price">
                    <p className="curent-price new">
                      <span className="value">16.50</span>
                      <span className="currency">$</span>
                    </p>
                    <p className="old-price">
                      <span className="value">48.00</span>
                      <span className="currency">$</span>
                    </p>
                  </div>
                  <div className="title">
                    <h4>Mi-Pac Floral Tapestry Backpack</h4>
                  </div>
                  <div className="description">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                  </div>
                  <div className="add-to-cart-btn">
                    <span className="theme-bg-c button" data-target="c17">
                      Add to cart
                      <span className="added">
                        <svg
                          className="ok-sign"
                          enableBackground="new 0 0 24 24"
                          version={1.0}
                          viewBox="0 0 24 24"
                          xmlSpace="preserve"
                        >
                          <polyline
                            points="20,6 9,17 4,12"
                            className="check-mark"
                          />
                        </svg>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </Fragment>
  );
}
