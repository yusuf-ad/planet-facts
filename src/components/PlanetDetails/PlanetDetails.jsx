import { useEffect, useRef, useState } from "react";
import styles from "./PlanetDetails.module.css";

function PlanetDetails({ planet }) {
  const [activeSlide, setActiveSlide] = useState(1);

  function handleActiveSlide(e) {
    const slide = e.target.closest(`.${styles.planetSlide}`);

    setActiveSlide(slide.classList[0]);
  }

  return (
    <section className={`${styles.sectionDetails} container`}>
      <div className={styles.planetImg}>
        <img src={planet.images.planet} alt="planet " />
      </div>
      <div className={styles.planetDetails}>
        <h1>{planet.name}</h1>
        <p>{planet.overview.content} </p>
        <p className={styles.source}>
          Source: <a href="https://www.wikipedia.org/">Wikipedia</a>
        </p>

        <div className={styles.planetSlides}>
          <div
            onClick={(e) => handleActiveSlide(e)}
            style={
              +activeSlide === 1
                ? { backgroundColor: `var(--${planet.name})` }
                : {}
            }
            className={`1 ${styles.planetSlide}`}
          >
            <p>
              <span>01</span> Overview
            </p>
          </div>
          <div
            onClick={(e) => handleActiveSlide(e)}
            style={
              +activeSlide === 2
                ? { backgroundColor: `var(--${planet.name})` }
                : {}
            }
            className={`2 ${styles.planetSlide}`}
          >
            <p>
              <span>02</span> Internal Structure
            </p>
          </div>
          <div
            onClick={(e) => handleActiveSlide(e)}
            style={
              +activeSlide === 3
                ? { backgroundColor: `var(--${planet.name})` }
                : {}
            }
            className={`3 ${styles.planetSlide}`}
          >
            <p>
              <span>03</span> Surface Geology
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PlanetDetails;
