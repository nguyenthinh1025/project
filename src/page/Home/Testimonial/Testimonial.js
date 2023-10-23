import React from 'react'

export default function Testimonial() {
  return (
    <section
    className="testimonial-slider parallax-section l-section-padding"
    id="reviews"
    style={{background: "url(../images/reviews-bg.jpg) no-repeat center"}}
  >
    <div className="testimonials-list-container">
      <ul className="testimonials-list">
        <li className="testimonial-item">
          <div className="testimonial-container">
            <div className="testimonial-auth">
              <div className="testim-auth-photo">
                <img src="http://placehold.it/140x140" alt />
              </div>
              <p className="short-info">
                John McKenzey,
                <span className="auth-country"> California</span>
              </p>
            </div>
            <p className="main-testimonial">
              Thank you so much. I really didn’t expect such a quick and
              positive response! Often when something goes wrong with a
              product it seems the consumer is the one that gets the
              “raw end of the deal.
            </p>
          </div>
        </li>
        <li className="testimonial-item">
          <div className="testimonial-container">
            <div className="testimonial-auth">
              <div className="testim-auth-photo">
                <img src="http://placehold.it/140x140" alt />
              </div>
              <p className="short-info">
                John McKenzey,
                <span className="auth-country"> California</span>
              </p>
            </div>
            <p className="main-testimonial">
              Thank you so much. I really didn’t expect such a quick and
              positive response! Often when something goes wrong with a
              product it seems the consumer is the one that gets the
              “raw end of the deal it seems the consumer is the one that
              gets the “raw end of the deal.
            </p>
          </div>
        </li>
        <li className="testimonial-item">
          <div className="testimonial-container">
            <div className="testimonial-auth">
              <div className="testim-auth-photo">
                <img src="http://placehold.it/140x140" alt />
              </div>
              <p className="short-info">
                John McKenzey,
                <span className="auth-country"> California</span>
              </p>
            </div>
            <p className="main-testimonial">
              Thank you so much. I really didn’t expect such a quick and
              positive response! Often when something goes wrong with a
              product it seems the consumer is the one that gets the
              “raw end of the deal it seems the consumer is the one that
              gets the “raw end of the deal.
            </p>
          </div>
        </li>
      </ul>
    </div>
  </section>
  )
}
