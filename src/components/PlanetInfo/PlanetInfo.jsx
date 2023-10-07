import styles from "./PlanetInfo.module.css";

function PlanetInfo({ planet }) {
  return (
    <section className={`container ${styles.planetInfo}`}>
      <div className={styles.informationList}>
        <div className={styles.informationBox}>
          <h3>Rotation Time</h3>
          <p>{planet.rotation}</p>
        </div>
        <div className={styles.informationBox}>
          <h3>Revolution Time</h3>
          <p>{planet.revolution}</p>
        </div>
        <div className={styles.informationBox}>
          <h3>Radius</h3>
          <p>{planet.radius}</p>
        </div>
        <div className={styles.informationBox}>
          <h3>Average Temp.</h3>
          <p>{planet.temperature}</p>
        </div>
      </div>
    </section>
  );
}

export default PlanetInfo;
