import { useState } from "react";
import styles from "./PlanetDetails.module.css";
import PlanetSlide from "../PlanetSlide/PlanetSlide";

function PlanetDetails({ planet }) {
  const [activeSlide, setActiveSlide] = useState(1);

  return (
    <section className={`${styles.sectionDetails} container`}>
      <div className={styles.planetSlides}>
        <PlanetSlide
          planet={planet}
          slideNo={1}
          activeSlide={activeSlide}
          setActiveSlide={setActiveSlide}
        />
        <PlanetSlide
          planet={planet}
          content="structure"
          contentImage="internal"
          slideNo={2}
          activeSlide={activeSlide}
          setActiveSlide={setActiveSlide}
        />
        <PlanetSlide
          slideNo={3}
          planet={planet}
          content="geology"
          contentImage="geology"
          activeSlide={activeSlide}
          setActiveSlide={setActiveSlide}
        />
      </div>
    </section>
  );
}

export default PlanetDetails;
