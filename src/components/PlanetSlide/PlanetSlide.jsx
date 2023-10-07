import { useState } from "react";
import styles from "./PlanetSlide.module.css";

function PlanetSlide({
  planet,
  content = "overview",
  contentImage = "planet",
  slideNo,
  activeSlide,
  setActiveSlide,
}) {
  return (
    <div
      style={{ transform: `translateX(${(slideNo - activeSlide) * 100}%)` }}
      className={styles.planetSlide}
    >
      <div className={styles.planetImg}>
        <img src={planet.images[contentImage]} alt="planet " />
      </div>
      <div className={styles.planetDetails}>
        <h1>{planet.name}</h1>
        <p>{planet[content].content} </p>
        <p className={styles.source}>
          Source:
          <a href="https://www.wikipedia.org/">Wikipedia</a>
        </p>
        <div
          onClick={(e) => {
            const slide = e.target.closest(`.${styles.planetInfoBox}`);

            if (!slide) return;

            console.log(slide.classList[0]);
            setActiveSlide(slide.classList[0]);
          }}
          className={styles.planetInfo}
        >
          <div
            className={`1 ${styles.planetInfoBox}`}
            style={{
              backgroundColor:
                1 === +activeSlide ? `var(--${planet.name})` : "",
            }}
          >
            <p>
              <span>01</span> Overview
            </p>
          </div>
          <div
            className={`2 ${styles.planetInfoBox}`}
            style={{
              backgroundColor:
                2 === +activeSlide ? `var(--${planet.name})` : "",
            }}
          >
            <p>
              <span>02</span> Internal Structure
            </p>
          </div>
          <div
            className={`3 ${styles.planetInfoBox}`}
            style={{
              backgroundColor:
                3 === +activeSlide ? `var(--${planet.name})` : "",
            }}
          >
            <p>
              <span>03</span> Surface Geology
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlanetSlide;
