import React from "react";

function PlayerStats(props) {
 
  return (
    <>
      <table className="table table-success table-striped">
        <thead>
          <tr>
            <th scope="col">Player Name</th>
            <th scope="col">Age</th>
            <th scope="col">Games</th>
            <th scope="col">Games Started</th>
            <th scope="col">Minutes Played</th>
            <th scope="col">Field Goals</th>
            <th scope="col">Field Attempts</th>
            <th scope="col">Field Percent</th>
            <th scope="col">Three fg</th>
            <th scope="col">Three Attempts</th>
            <th scope="col">Three Percent</th>
            <th scope="col">Two fg</th>
            <th scope="col">Two Attempts</th>
            <th scope="col">Two Percent</th>
            <th scope="col">Effect Fg Percent</th>
            <th scope="col">Ft</th>
            <th scope="col">Fta</th>
            <th scope="col">Ft Percent</th>
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
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default PlayerStats;
