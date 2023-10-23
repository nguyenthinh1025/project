import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { SendEmailCart } from "../../../utils/utils";
export default function Cart(props) {
  const dispatch = useDispatch();
  const { handleCart, cart } = props;
  const { gioHang } = useSelector((root) => root.gioHangReducer);
  const total = gioHang.reduce((totalPrice, item) => {
    return totalPrice + item.price.current * item.soLuong;
  }, 0);
  const formik = useFormik({
    initialValues: {
      subject:"List Ordered Products",
      name: "",
      to: "",
      phone: "",
      text: [],
    },
    onSubmit: (value) => {
      console.log(value);
      dispatch(SendEmailCart(value));
    },
  });
  useEffect(()=>{
formik.setFieldValue('text',gioHang)
  },[gioHang])
  return (
    <div className={`products-form ${cart ? "active" : ""}`}>
      <div className="form-container">
        <div className="main-form-block">
          <div className="row">
            <div className="columns large-12">
              <div
                className="form-block-header custom-reveal"
                onClick={() => {
                  handleCart();
                }}
              >
                <div className="form-close-btn" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="columns large-7 medium-7">
              <div className="order-list-block custom-reveal">
                <div className="order-list-container js-order-container mCustomScrollbar _mCS_1 mCS_no_scrollbar">
                  <div
                    id="mCSB_1"
                    className="mCustomScrollBox mCS-light mCSB_vertical mCSB_inside"
                    tabIndex={0}
                  >
                    <div
                      id="mCSB_1_container"
                      className="mCSB_container mCS_y_hidden mCS_no_scrollbar_y"
                      style={{ position: "relative", top: 0, left: 0 }}
                      dir="ltr"
                    >
                      <ul className="order-list js-order-list">
                        {gioHang.map((item, index) => {
                          return (
                            <li className="order-item js-order-item">
                              <span className="order-name">
                                {item.name}
                                <div
                                  style={{
                                    paddingTop: "10px",
                                    fontSize: "12px",
                                  }}
                                >
                                  Quantity: 1
                                </div>
                              </span>
                              <span className="order-price js-order-price">
                                <span className="currency">$</span>
                                <span className="value">
                                  {item.price.current}
                                </span>
                              </span>
                              <span
                                className="remove-item-btn fa fa-trash js-remove-prod"
                                data-selfid="c38"
                                onClick={() => {
                                  const action = {
                                    type: "REMOVE_PRODUCT",
                                    maSanPhamClick: item.id,
                                  };
                                  dispatch(action);
                                }}
                              />
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                    <div
                      id="mCSB_1_scrollbar_vertical"
                      className="mCSB_scrollTools mCSB_1_scrollbar mCS-light mCSB_scrollTools_vertical"
                      style={{ display: "none" }}
                    >
                      <div className="mCSB_draggerContainer">
                        <div
                          id="mCSB_1_dragger_vertical"
                          className="mCSB_dragger"
                          style={{
                            position: "absolute",
                            minHeight: 30,
                            top: 0,
                            height: 0,
                          }}
                          oncontextmenu="return false;"
                        >
                          <div
                            className="mCSB_dragger_bar"
                            style={{ lineHeight: 30 }}
                          />
                        </div>
                        <div className="mCSB_draggerRail" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="order-total-block">
                  <p className="total l-dis-ib">Total:</p>
                  <p className="total-price l-dis-ib js-total-price">
                    <span className="currency">$</span>
                    <span className="value">{total.toLocaleString()}.00</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="columns large-5 medium-5">
              <div className="form-fields products-form-block">
                <form onSubmit={formik.handleSubmit}>
                  <input
                    type="text"
                    name="name"
                    onChange={formik.handleChange}
                    placeholder="Name"
                    id="name_field"
                    className="fillable-field required custom-reveal"
                  />
                  <span className="mail-field l-pos-r">
                    <input
                      type="text"
                      placeholder="E-mail"
                      name="to"
                      onChange={formik.handleChange}
                      id="mail_field"
                      className="fillable-field required custom-reveal"
                    />
                  </span>
                  <input
                    type="text"
                    placeholder="Phone number"
                    name="phone"
                    onChange={formik.handleChange}
                    id="phone_field"
                    className="fillable-field required custom-reveal"
                  />
                  <input
                    type="text"
                    name="prCode_field"
                    id="prCode_field"
                    className="fillable-field l-hidden required custom-reveal products-code-list"
                  />
                  <button
                    type="submit"                   
                   className="button submit-btn checkout custom-reveal preorder-btn"
                  >Send</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
