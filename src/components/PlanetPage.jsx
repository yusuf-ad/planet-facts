import Header from "./Header/Header";

import Logo from "./Logo/Logo";
import Main from "./Main/Main";
import PlanetDetails from "./PlanetDetails/PlanetDetails";
import PlanetInfo from "./PlanetInfo/PlanetInfo";
import PlanetNav from "./PlanetNav/PlanetNav";
import Spinner from "./Spinner/Spinner";

function PlanetPage({ planets, planet, isLoading }) {
  const { name } = planet;

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div>
          <Header>
            <Logo />
            <PlanetNav planets={planets} planetName={name} />
          </Header>
          <Main>
            <PlanetDetails key={planet.name} planet={planet} />
            <PlanetInfo planet={planet} />
          </Main>
        </div>
      )}
    </>
  );
}

export default PlanetPage;
