import "./App.css";
import PlayerStats from "./component/Home";
import Home from "./component/Home";
import About from "./component/About";

import AddPlayerStat from "./component/AddPlayerStat";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>
          <strong>NBA Player Stats</strong>
        </h1>
      </header>

      <main>
        <Router>
          <Switch>
            <Route exact path="/">
              <PlayerStats />
            </Route>
            <Route path="/addplayerstat">
              <AddPlayerStat />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </Router>
      </main>
    </div>
  );
}

export default App;
