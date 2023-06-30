
import './App.css';
import PlayerStats from './component/PlayerStats';
import NavBar from './component/NavBar';

function App() {
  fetch("https://flatiron-phase2-project-backend.onrender.com/playerstats").then(r => r.json()).then(data => console.table(data))
  return (
    <div className="App">
      <header className="App-header">
        <h1>NBA Player Statistics</h1>
        <NavBar />
      </header>
      <main>
      <PlayerStats/>
      </main>
    </div>
  );
}

export default App;
