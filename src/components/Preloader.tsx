import React from "react";

export default function Preloader() {
  return (
    <>
      <div className="mxd-page-transition" aria-hidden="true" />
      <div className="mxd-loader" role="progressbar" aria-label="Loading portfolio assets">
        <div className="mxd-loader__top" />
        <div className="mxd-loader__images">
          <img src="/img/arnav_loader_color.jpg" alt="Arnav Singh portrait color" />
          <img src="/img/arnav_loader_bw.jpg" alt="Arnav Singh portrait monochrome" />
        </div>
        <div className="mxd-loader__bottom">
          <div className="mxd-loader__count">
            <span className="count__text">0</span>
            <span className="count__percent">%</span>
          </div>
          <span className="mxd-loader__caption">Loading</span>
        </div>
      </div>
    </>
  );
}
