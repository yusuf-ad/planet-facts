import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PlanetPage from "./components/PlanetPage";

const BASE_URL = "http://localhost:9000";

function App() {
  const [planets, setPlanets] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchPlanets = async function () {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/planets`);
        const data = await res.json();

        console.log(data);
        setPlanets(data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPlanets();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<h1>homepage</h1>} />
        {planets.map((planet, index) => (
          <Route
            key={index}
            path={`/${planet.name}`}
            element={<PlanetPage planets={planets} planet={planet} />}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
