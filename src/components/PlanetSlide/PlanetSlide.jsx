import { useEffect } from "react";
import styles from "./PlanetSlide.module.css";
import { useNavigate, useParams } from "react-router-dom";

function PlanetSlide({
  planet,
  content = "overview",
  contentImage = "planet",
  slideNo,
  activeSlide,
  setActiveSlide,
}) {
  const navigate = useNavigate();

  const { content: contentParam } = useParams();

  useEffect(() => {
    switch (contentParam) {
      case "overview":
        setActiveSlide(1);
        break;
      case "structure":
        setActiveSlide(2);
        break;
      case "geology":
        setActiveSlide(3);
        break;
      default:
        return;
    }
  }, [contentParam, setActiveSlide]);

  return (
    <div
      style={{ transform: `translateX(${(slideNo - activeSlide) * 100}%)` }}
      className={styles.planetSlide}
    >
      <div className={styles.planetImg}>
        <img
          onMouseEnter={(e) => console.log(e.target)}
          src={planet.images[contentImage]}
          alt="planet "
        />
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

            setActiveSlide(slide.classList[0]);
          }}
          className={styles.planetInfo}
        >
          <div
            onClick={() => navigate(`/${planet.name.toLowerCase()}/overview`)}
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
            onClick={() => navigate(`/${planet.name.toLowerCase()}/structure`)}
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
            onClick={() => navigate(`/${planet.name.toLowerCase()}/geology`)}
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
