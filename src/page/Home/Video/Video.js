import React from "react";

export default function Video() {
  return (
    <section className="video-section">
      <span className="js-play-btn video-play-btn">
        <span className="play-icon-container">
          <i className="fa fa-play play-icon" />
        </span>
      </span>
      <video
        preload="auto"
        loop
        className="video-block js-page-video"
        poster="http://placehold.it/1280x720"
      >
        <source src="video/MOTO-HD.mp4" type="video/mp4" />
        <source src="video/MOTO-HD.webm" type="video/webm" />
        <source src="video/MOTO-HD.ogv" type="video/ogg" />
      </video>
    </section>
  );
}
