import Header from "./Header/Header";

import Logo from "./Logo/Logo";
import PlanetNav from "./PlanetNav/PlanetNav";

function PlanetPage({ planets, planet }) {
  const { name } = planet;

  return (
    <>
      <Header>
        <Logo />
        <PlanetNav planets={planets} planetName={name} />
      </Header>
      <h1>{planet.name}</h1>
    </>
  );
}

export default PlanetPage;
