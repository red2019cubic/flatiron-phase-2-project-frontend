import "./App.css";
import PlayerStats from "./component/PlayerStats";
import NavBar from "./component/NavBar";

function App() {
  fetch("https://flatiron-phase2-project-backend.onrender.com/playerstats")
    .then((r) => r.json())
    .then((data) => console.table(data));
  return (
    <div className="App">
      <header className="header">
        <div className="navlist">
          <h1>NBA Player's Stats</h1>
        </div>
      </header>
      
      <main>
        <PlayerStats />
      </main>
    </div>
  );
}

export default App;
