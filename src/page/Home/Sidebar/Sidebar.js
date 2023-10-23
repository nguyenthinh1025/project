import React from 'react'

export default function Sidebar(props) {
    const {sidebar,handleSideBar} = props
  return (
    <div className={`products-category-list ${sidebar ? "active" :""}`}>
    <div className="category-container">
      <div className="category-block category-list">
        <div className="row">
          <div className="columns large-12 medium-12">
            <dl className="select">
              <dt />
              <dd>
                <div className="options-list">
                  <div className="close-btn" />
                  <div className="options-wrapper">
                    <div className="options-container js-category-list">
                      <ul>
                        <li
                          className="category-item js-category-item"
                          data-target="c1"
                          style={{
                            opacity: 1,
                            display: "list-item",
                            transform: "translateX(0px)",
                          }}
                        >
                          <span className="category-text">Bags</span>
                        </li>
                        <li
                          className="category-item js-category-item"
                          data-target="c2"
                          style={{
                            opacity: 1,
                            display: "list-item",
                            transform: "translateX(0px)",
                          }}
                        >
                          <span className="category-text">Jeans</span>
                        </li>
                        <li
                          className="category-item js-category-item"
                          data-target="c3"
                          style={{
                            opacity: 1,
                            display: "list-item",
                            transform: "translateX(0px)",
                          }}
                        >
                          <span className="category-text">Shirts</span>
                        </li>
                        <li
                          className="category-item js-category-item"
                          data-target="c4"
                          style={{
                            opacity: 1,
                            display: "list-item",
                            transform: "translateX(0px)",
                          }}
                        >
                          <span className="category-text">Shoes</span>
                        </li>
                        <li
                          className="category-item js-category-item"
                          data-target="c5"
                          style={{
                            opacity: 1,
                            display: "list-item",
                            transform: "translateX(0px)",
                          }}
                        >
                          <span className="category-text">Shorts</span>
                        </li>
                        <li
                          className="category-item js-category-item"
                          data-target="c6"
                          style={{
                            opacity: 1,
                            display: "list-item",
                            transform: "translateX(0px)",
                          }}
                        >
                          <span className="category-text">T-shirts</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="loader">
                  <div className="loader-container">
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
                        points="54.558,557.559 300,132.441 
                    545.441,557.559 "
                      />
                      <polygon
                        fill="#8856A3"
                        className="inner"
                        points="96.037,535.115 300,168.885 503.963,535.115 "
                      />
                    </svg>
                  </div>
                </div>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
