import Header from "./Header/Header";

import Logo from "./Logo/Logo";
import Main from "./Main/Main";
import PlanetDetails from "./PlanetDetails/PlanetDetails";
import PlanetInfo from "./PlanetInfo/PlanetInfo";
import PlanetNav from "./PlanetNav/PlanetNav";

function PlanetPage({ planets, planet }) {
  const { name } = planet;

  return (
    <>
      <Header>
        <Logo />
        <PlanetNav planets={planets} planetName={name} />
      </Header>
      <Main>
        <PlanetDetails key={planet.name} planet={planet} />
        <PlanetInfo planet={planet} />
      </Main>
    </>
  );
}

export default PlanetPage;
