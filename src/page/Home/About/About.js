import React from "react";

export default function About() {
  return (
    <section className="about-us l-section-padding" id="about">
      <div className="row">
        <div className="columns large-12 medium-12 small-12">
          <div className="stats-in-number custom-column">
            <ul>
              <li className="stats-item large-3 medium-3 small-12">
                <div className="important-facts-wrapper">
                  <div className="important-facts">
                    <div className="fact-icon">
                    <i class="fa-solid fa-arrow-up-right-dots"></i>
                    </div>
                    <span className="animated-text">
                      <span id="hours" className="animated-fact">
                        24
                      </span>
                      <span>h</span>
                    </span>
                  </div>
                  <p className="facts-info">Avarage delivery time</p>
                </div>
              </li>
              <li className="stats-item large-3 medium-3 small-12">
                <div className="important-facts-wrapper">
                  <div className="important-facts">
                    <div className="fact-icon">
                    <i class="fa-solid fa-bag-shopping"></i>
                    </div>
                    <span className="animated-text">
                      <span id="sold" className="animated-fact">
                        2443
                      </span>
                    </span>
                  </div>
                  <p className="facts-info">Products sold</p>
                </div>
              </li>
              <li className="stats-item large-3 medium-3 small-12">
                <div className="important-facts-wrapper">
                  <div className="important-facts">
                    <div className="fact-icon">
                    <i class="fa-regular fa-thumbs-up"></i>
                    </div>
                    <span className="animated-text">
                      <span id="happy" className="animated-fact">
                        98
                      </span>
                      <span>%</span>
                    </span>
                  </div>
                  <p className="facts-info">Happy clients</p>
                </div>
              </li>
              <li className="stats-item large-3 medium-3 small-12">
                <div className="important-facts-wrapper">
                  <div className="important-facts">
                    <div className="fact-icon">
                    <i class="fa-solid fa-medal"></i>
                    </div>
                    <span className="animated-text">
                      <span id="experience" className="animated-fact">
                        20
                      </span>
                    </span>
                  </div>
                  <p className="facts-info">Years of experience</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
