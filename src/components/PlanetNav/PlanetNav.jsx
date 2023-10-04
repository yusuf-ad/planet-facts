import { NavLink } from "react-router-dom";
import styles from "./PlanetNav.module.css";

function PlanetNav({ planets }) {
  const planetNames = planets.map((planet) => planet.name);

  return (
    <nav className={styles.nav}>
      <ul>
        {planetNames.map((planet, index) => (
          <li key={index}>
            <NavLink to={`/${planet}`}>
              {planet}
              <span
                className={styles.beforeElement}
                style={{ backgroundColor: `var(--${planet})` }}
              ></span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default PlanetNav;
