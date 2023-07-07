import "./App.css";
import PlayerStats from "./component/Home";
import Home from "./component/Home";
import About from "./component/About";
import AddPlayerStat from "./component/AddPlayerStat";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(false);
  const [newPlayerStat, setNewPlayerStat] = useState([]);
  const history = useHistory();
  const handleDelete = (id) => {
    fetch(
      `https://flatiron-phase2-project-backend.onrender.com/playerstats/${id}`,
      { method: "DELETE" }
    ).then((res) => {
      alert(`${res.player_name} Record Deleted Successfully`);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    console.log(formData)
    setLoading(true);
    axios
      .post(
        "https://flatiron-phase2-project-backend.onrender.com/playerstats",
        formData
      )
      .then((res) => {
        alert("Data added successfully!");
        history.push("/");
      })

      .catch((error) => (<lable>Loading...</lable>));
  };
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
              <AddPlayerStat
                handleSubmit={handleSubmit}
                setLoading={setLoading}
                setNewPlayerStat={setNewPlayerStat}
              />
            </Route>
            <Route path="/home">
              <Home handleDelete={handleDelete} />
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
