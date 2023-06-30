import "./App.css";
import PlayerStats from "./component/PlayerStats";
import NavBar from "./component/NavBar";
import Home from "./component/Home";

import AddPlayerStat from "./component/AddPlayerStat";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  fetch("https://flatiron-phase2-project-backend.onrender.com/playerstats")
    .then((r) => r.json())
    .then((data) => console.table(data));
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
          </Switch>
        </Router>
      </main>
    </div>
  );
}

export default App;
