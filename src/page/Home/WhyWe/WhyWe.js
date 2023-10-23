import React from "react";

export default function WhyWe() {
  return (
    <section className="why-we" id="why-us">
      <div className="row">
        <div className="columns large-12">
          <h2 className="l-section-title l-white">
            <span className="title-text">Why people choose Triablo?</span>
          </h2>
        </div>
      </div>
      <div className="row">
        <div className="columns large-12 medium-12 small-12">
          <div className="why-facts-list">
            <div className="why-eleme-block l-dis-ib left-info-block">
              <div className="why-us-item">
                <div className="item-desc-block">
                  <h4 className="item-title">Preorder system</h4>
                  <p className="item-description">
                    Donec fermentum vulputate nisl non sollicitudin.Vivamus
                    sagittis fermentum dolor, porta adipiscing magna.
                  </p>
                </div>
                <div className="item-icon-block">
                <i class="fa-brands fa-windows" style={{fontSize:'50px'}}></i>
                </div>
              </div>
              <div className="why-us-item">
                <div className="item-desc-block">
                  <h4 className="item-title">Retina ready</h4>
                  <p className="item-description">
                    Donec fermentum vulputate nisl non sollicitudin.Vivamus
                    sagittis fermentum dolor, porta adipiscing magna.
                  </p>
                </div>
                <div className="item-icon-block">
                <i class="fa-solid fa-diamond" style={{fontSize:'50px'}}></i>
                </div>
              </div>
            </div>
            <div className="why-eleme-block l-dis-ib right-info-block">
              <div className="why-us-item">
                <div className="item-desc-block">
                  <h4 className="item-title">Responsive layout</h4>
                  <p className="item-description">
                    Donec fermentum vulputate nisl non sollicitudin.Vivamus
                    sagittis fermentum dolor, porta adipiscing magna.
                  </p>
                </div>
                <div className="item-icon-block">
                <i class="fa-solid fa-mobile-screen-button" style={{fontSize:'50px'}}></i>
                </div>
              </div>
              <div className="why-us-item">
                <div className="item-desc-block">
                  <h4 className="item-title">Material design</h4>
                  <p className="item-description">
                    Donec fermentum vulputate nisl non sollicitudin.Vivamus
                    sagittis fermentum dolor, porta adipiscing magna.
                  </p>
                </div>
                <div className="item-icon-block">
                <i class="fa-solid fa-layer-group" style={{fontSize:'50px'}}></i>
                </div>
              </div>
            </div>
            <div className="why-us-image">
              <div
                className="left-image"
                style={{
                  backgroundImage: "url(http://placehold.it/335x586)",
                }}
              />
              <img src="http://placehold.it/335x584" alt />
              <div
                className="right-image"
                style={{
                  backgroundImage: "url(http://placehold.it/335x585)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
