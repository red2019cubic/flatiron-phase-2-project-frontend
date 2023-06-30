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
          <div className="container">
          {/* <img src="https://img.freepik.com/free-vector/gradient-halftone-basketball-twitch-banner_23-2149355453.jpg?w=826&t=st=1688253420~exp=1688254020~hmac=f2299422388b7adfdac71f535e73bcf4a10805f4eb125894f152c3241e9450fd" alt="nbaphoto" /> */}
          <div class="centered"><h1>NBA Player Stats</h1></div>
          </div>
      </header>
      
      <main>
        <PlayerStats />
      </main>
    </div>
  );
}

export default App;
