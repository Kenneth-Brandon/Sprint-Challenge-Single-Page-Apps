import React from "react";
import { Route } from "react-router-dom";

import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import LocationList from "./components/LocationsList";
import WelcomePage from "./components/WelcomePage";

function App() {
  return (
    <main>
      <Header />
      <Route exact path="/" component={WelcomePage} />
      <Route path="/characters">
        <CharacterList />
      </Route>
      <Route path="/locations">
        <LocationList />
      </Route>
    </main>
  );
}

export default App;
