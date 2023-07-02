import React from "react";
import { useState, useEffect } from "react";
import NavBar from "./NavBar";


function Home() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  useEffect(() => {
    setLoading(true);
    fetch("https://flatiron-phase2-project-backend.onrender.com/playerstats")
      .then((response) => response.json())
      .then((json) => setUsers(json))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleDelete = (id)=>{
    fetch(`https://flatiron-phase2-project-backend.onrender.com/playerstats/${id}`,{ method: 'DELETE' }).then(res => {
      alert("Record Deleted Successfully")
    })
       
  }

  return (
    <div className="table-responsive-sm">
        <NavBar />

      <div class="form-outline mb-4">
          <input type="search" class="form-control" id="datatable-search-input"     placeholder="Search Player"
          aria-label="Search"
          
          onChange={(e) => setSearch(e.target.value)}/>
         
      </div>
     
      <table className="table">
        <thead>
          <tr>
          
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Games</th>
            <th scope="col">Games Started</th>
            <th scope="col">Minutes Played</th>
            <th scope="col">Field Goals</th>
            <th scope="col">Field Attempts</th>
            <th scope="col">Field %</th>
            <th scope="col">3 fg</th>
            <th scope="col">3 Attempts</th>
            <th scope="col">3 %</th>
            <th scope="col">2 fg</th>
            <th scope="col">2 Attempts</th>
            <th scope="col">Two %</th>
            <th scope="col">Effect Fg %</th>
            <th scope="col">Ft</th>
            <th scope="col">Fta</th>
            <th scope="col">Ft %</th>
            <th scope="col">ORB</th>
            <th scope="col">DRB</th>
            <th scope="col">TRB</th>
            <th scope="col">AST</th>
            <th scope="col">STL</th>
            <th scope="col">BLK</th>
            <th scope="col">TOV</th>
            <th scope="col">PF</th>
            <th scope="col">PTS</th>
            <th scope="col">Team</th>
            <th scope="col">Season</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {users
            .filter(user => {
              return (search?.toLowerCase() === "") ? user : user.player_name?.toLowerCase().includes(search);
            })
            .map((user) => (
              <tr key={user.id}>
                <td>
                {user.id}
                </td>
                <td>{user.player_name}</td>
                <td>{user.age}</td>
                <td>{user.games}</td>
                <td>{user.games_started}</td>
                <td>{user.minutes_played}</td>
                <td>{user.field_goals}</td>
                <td>{user.field_attempts}</td>
                <td>{user.field_percent}</td>
                <td>{user.three_fg}</td>
                <td>{user.three_attempts}</td>
                <td>{user.three_percent}</td>
                <td>{user.two_fg}</td>
                <td>{user.two_attempts}</td>
                <td>{user.two_percent}</td>
                <td>{user.effect_fg_percent}</td>
                <td>{user.ft}</td>
                <td>{user.fta}</td>
                <td>{user.ft_percent}</td>

                <td>{user.ORB}</td>
                <td>{user.DRB}</td>
                <td>{user.TRB}</td>
                <td>{user.AST}</td>
                <td>{user.STL}</td>
                <td>{user.BLK}</td>
                <td>{user.TOV}</td>
                <td>{user.PF}</td>
                <td>{user.PTS}</td>
                <td>{user.team}</td>
                <td>{user.season}</td>
                <button content="center" onClick={()=>handleDelete(users.id)}>Delete</button>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
export default Home;
