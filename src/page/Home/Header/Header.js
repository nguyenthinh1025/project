import React from "react";

export default function Header() {
  return (
    <header className="header">
      <div className="menu-wrapper">
        <div className="row">
          <div className="column large-2">
            <div className="logo-wrapper">
              <img src="images/logo.png" alt className="logo-image" />
            </div>
          </div>
          <div className="column large-10">
            <nav className="js-navs-list">
              <ul className="menu-page">
                <li className="menu-item">
                  <a href="#products">Products</a>
                </li>
                <li className="menu-item">
                  <a href="#companies">Brands</a>
                </li>
                <li className="menu-item">
                  <a href="#why-us">Why Triablo</a>
                </li>
                <li className="menu-item">
                  <a href="#team-members">Team</a>
                </li>
                <li className="menu-item">
                  <a href="#reviews">Reviews</a>
                </li>
                <li className="menu-item">
                  <a href="#about">About us</a>
                </li>
                <li className="menu-item">
                  <a href="#news">News</a>
                </li>
                <li className="menu-item">
                  <a href="#contacts">Contacts</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className="header-container">
        <div className="header-wrapper">
          <div className="header-content">
            <div className="row">
              <div className="columns large-12 medium-12 small-12">
                <div className="page-quote-block">
                  <h2 className="page-quote js-slidedown-reveal">
                    The Style for today
                  </h2>
                  <h4 className="quote-comment js-slidedown-reveal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing. Vel
                    pellentesque consequat.
                  </h4>
                  <span className="theme-bg-c js-procede-btn button js-slidedown-reveal">
                    Check It
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel-wrapper" id="main-carousel">
        <div className="carousel-block">
          <div className="owl-header">
            <ul className="slides header-carousel">
              <li>
                <img src="http://placehold.it/1900x1267" alt />
              </li>
              <li>
                <img src="http://placehold.it/1900x1267" alt />
              </li>
              <li>
                <img src="http://placehold.it/1900x1267" alt />
              </li>
              <li>
                <img src="http://placehold.it/1900x1267" alt />
              </li>
            </ul>
            <div className="shadow-bg" />
          </div>
        </div>
      </div>
      <div className="mobile-menu-wrapper">
        <div className="toggle-btn-block js-toggle-menu">
          <div className="toggle-btn" />
        </div>
        <div className="mobile-nav-list js-mobile-container"></div>
      </div>
    </header>
  );
}
