import { NavLink } from "react-router-dom";
import styles from "./PlanetNav.module.css";

function PlanetNav({ planets, planetName }) {
  const planetNames = planets.map((planet) => planet.name);

  return (
    <nav className={styles.nav}>
      <ul>
        {planetNames.map((planet) => (
          <li>
            <NavLink to={`/${planet}`}>{planet}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default PlanetNav;
