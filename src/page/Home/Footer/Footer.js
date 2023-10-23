import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { SendEmailContact } from "../../../utils/utils";
export default function Footer() {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: "",
      to: "",
      subject: "",
      text: "",
      phone:""
    },
    onSubmit: (value) => {
      console.log(value);
      const data = {
        to: value.to,
        subject: value.subject,
        text: value.text,
        name: value.name,
        phone:value.phone,
      };
      console.log(data);
    
      // Dispatch the action creator
      dispatch(SendEmailContact(data));
    },
  });
  return (
    <footer>
      <section className="get-in-touch l-section-padding bg-img" id="contacts">
        <div className="title-block">
          <div className="row">
            <div className="columns large-12">
              <h2 className="l-section-title">
                <span className="title-text">
                  contact or find us on <span className="">the map</span>
                </span>
              </h2>
            </div>
          </div>
        </div>
        <div className="fields-view">
          <form onSubmit={formik.handleSubmit}>
            <div className="row">
              <div className="columns large-6 medium-6">
                <div className="align-center-small">
                  <div className="centered-block">
                    <label htmlFor="name" className="contact-label">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="contact-field required"
                      name="name"
                      onChange={formik.handleChange}
                    />
                  </div>
                  <div className="centered-block">
                    <label htmlFor="mail" className="contact-label">
                      E-mail
                    </label>
                    <input
                      type="text"
                      id="mail"
                      className="contact-field required"
                      name="to"
                      onChange={formik.handleChange}
                    />
                  </div>
                  <div className="centered-block">
                    <label htmlFor="mail" className="contact-label">
                      Phone
                    </label>
                    <input
                      type="text"
                      id="mail"
                      className="contact-field required"
                      name="phone"
                      onChange={formik.handleChange}
                    />
                  </div>
                  <div className="centered-block">
                    <label htmlFor="subject" className="contact-label">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="contact-field required"
                      name="subject"
                      onChange={formik.handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="columns large-6 medium-6">
                <div className="align-center-small">
                  <div className="centered-block">
                    <label htmlFor="message" className="contact-label">
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="contact-field textarea-contact required"
                      name="text"
                      onChange={formik.handleChange}
                    />
                    <span className="checkout">
                      <button
                        type="submit"
                        style={{ background: "none", marginTop: "30px" }}
                      >
                        <span style={{ paddingBottom: "10px" }}>Send</span>
                        <i className="fa fa-envelope-o" />
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <div className="socials-list">
            <ul className="social-icons">
              <li>
                <a href="#">
                  <i class="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li style={{ padding: "0 10px" }}>
                <a href="#">
                  <i class="fa-brands fa-twitter"></i>
                </a>
              </li>
              <li style={{ padding: "0 10px" }}>
                <a href="#">
                  <i class="fa-brands fa-facebook"></i>
                </a>
              </li>
              <li style={{ padding: "0 10px" }}>
                <a href="#">
                  <i class="fa-brands fa-dribbble"></i>
                </a>
              </li>
              <li style={{ padding: "0 10px" }}>
                <a href="#">
                  <i class="fa-brands fa-tumblr"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <div className="footer-wrapper l-section-padding">
        <div className="row">
          <div className="columns large-12">
            <div className="footer-container">
              <div className="footer-item">
                <address>
                  <p className="address-item">
                    <span className="heightlight">e-mail:</span>{" "}
                    clothes_shop@triablo.com
                  </p>
                  <p className="address-item">
                    <span className="heightlight">address:</span> New York,
                    Saint Nicholas Avenue 13/1
                  </p>
                  <p className="address-item">
                    <span className="heightlight">fax:</span> +1 0123-4567-8900
                  </p>
                </address>
              </div>
              <div className="footer-item">
                <div className="logo-wrapper">
                  <div className="logo-block">
                    <a href="#main-carousel">
                      <img
                        src="images/footer-logo.png"
                        alt
                        className="footer-logo"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="footer-item">
                <div className="copy-right">
                  <p>© Triablo 2014. All Rights Reserved</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
