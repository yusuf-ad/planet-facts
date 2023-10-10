import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import PlanetPage from "./components/PlanetPage";
import PageNotFound from "./PageNotFound/PageNotFound";

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

        console.log(data[0]);
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
        <Route index element={<Navigate to="/mercury" />} />
        {planets.map((planet, index) => (
          <>
            <Route
              key={index}
              path={`/${planet.name}`}
              element={
                <PlanetPage
                  planets={planets}
                  planet={planet}
                  isLoading={isLoading}
                />
              }
            />
            <Route
              key={index}
              path={`/${planet.name}/:content`}
              element={
                <PlanetPage
                  planets={planets}
                  planet={planet}
                  isLoading={isLoading}
                />
              }
            />
          </>
        ))}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
