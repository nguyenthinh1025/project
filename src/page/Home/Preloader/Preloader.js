import React from 'react'

export default function Preloader() {
  return (
    <div className="preloader-block">
        <div className="preloader-container">
          <svg
            id="Layer_1"
            x="0px"
            y="0px"
            width="150px"
            height="150px"
            viewBox="0 0 600 690"
            enableBackground="new 0 0 600 690"
            xmlSpace="preserve"
          >
            <polygon
              fill="#FFFFFF"
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
  )
}
