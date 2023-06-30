import "./App.css";
import PlayerStats from "./component/PlayerStats";
import NavBar from "./component/NavBar";

import AddPlayerStat from "./component/AddPlayerStat";

function App() {
  fetch("https://flatiron-phase2-project-backend.onrender.com/playerstats")
    .then((r) => r.json())
    .then((data) => console.table(data));
  return (
    <div className="App">
      <header className="header">
          <h1><strong>NBA Player Stats</strong></h1>
          
      </header>
      
      <main>
        <PlayerStats />
        <NavBar/>
      </main>
    </div>
  );
}

export default App;
