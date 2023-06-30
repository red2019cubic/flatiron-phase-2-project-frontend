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
        <aside>
          <img
            src="https://img.freepik.com/free-vector/colored-vintage-basketball-logotype-template_1284-39319.jpg?w=740&t=st=1688242320~exp=1688242920~hmac=1a1bd5a4d7d09341d78344ad1f46b826ccc8ea7fcaa7192c516700469f312893"
            width="80"
            height="80"
          />
        </aside>
        
        <h1 >NBA Player's Stats</h1>
        
        </div>
      </header>
      <NavBar />
      <main>
        <PlayerStats />
      </main>
    </div>
  );
}

export default App;
