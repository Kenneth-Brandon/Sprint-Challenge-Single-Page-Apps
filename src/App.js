import React from "react";
import { Route } from "react-router-dom";

import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import EpisodeList from "./components/EpisodeList";
import LocationList from "./components/LocationsList";
import WelcomePage from "./components/WelcomePage";

function App() {
  return (
    <main>
      <Header />
      <Route exact path="/" component={WelcomePage} />
      <Route path="/characters" component={CharacterList} />
      <Route path="/locations" component={LocationList} />
      <Route path="/episodes" component={EpisodeList} />
    </main>
  );
}

export default App;
