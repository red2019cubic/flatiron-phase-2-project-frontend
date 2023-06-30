import React from "react";
import { useState } from "react";
function AddPlayerStat() {
  const [loading, setLoading] = useState(false);
  const[data, setData]=useState({
    player_name :""  ,
        age :"",
        games : "",
        games_started :"" ,
        minutes_played : "",
        field_goals : "",
        field_attempts: "",
        field_percent : "",
        three_fg : "",
        three_attempts : "",
        three_percent : "",
        two_fg : "",
        two_attempts : "",
        two_percent : "",
        effect_fg_percent : "",
        ft : "",
        fta : "",
        ft_percent : "",
        ORB : "",
        DRB : "",
        TRB : "",
        AST : "",
        STL : "",
        BLK : "",
        TOV : "",
        PF : "",
        PTS : "",
        team : "",
        season: ""
  })
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const newdata = {...data};
    newdata[e.target.id] = e.taget.value;
    setData(newdata)

    fetch("https://flatiron-phase2-project-backend.onrender.com/playerstats", {
      method: "POST",
      header: {
        "Content-type": "application/json"
        
      },
      body: JSON.stringify(newdata)
    }).then(r => r.json()).then(setLoading(false));
  };
  return (
    <div className="addplayer">
      <div className="form">
        <form className="formdata">
          <h3>Add Player stats</h3>
          <input type="text" placeholder="Player Name" />
          <input type="text" placeholder="Player Age" />
          <br />
          <br />
          <input type="text" placeholder="Player Games" />
          <input type="text" placeholder="Player Games Started" />
          <br />
          <br />
          <input type="text" placeholder="Player Minutes Played" />
          <input type="text" placeholder="Player Field Goals" />
          <br />
          <br />
          <input type="text" placeholder="Player Field Attempts" />
          <input type="text" placeholder="Player Field percent" />
          <br />
          <br />
          <input type="text" placeholder="Player Three fg" />
          <input type="text" placeholder="Player Three Attempts" />
          <br />
          <br />
          <input type="text" placeholder="Player Two Percent" />
          <input type="text" placeholder="Player Three percent" />
          <br />
          <br />
          <input type="text" placeholder="Player Two fg" />
          <input type="text" placeholder="Player Two Attempts" />
          <br />
          <br />
          <input type="text" placeholder="Player PF" />
          <input type="text" placeholder="Player Effect fg Percent" />
          <br />
          <br />
          <input type="text" placeholder="Player ft" />
          <input type="text" placeholder="Player fta" />
          <br />
          <br />
          <input type="text" placeholder="Player ft percent" />
          <input type="text" placeholder="Player ORB" />
          <br />
          <br />
          <input type="text" placeholder="Player DRB" />
          <input type="text" placeholder="Player TRB" />
          <br />
          <br />
          <input type="text" placeholder="Player AST" />
          <input type="text" placeholder="Player STL" />
          <br />
          <br />
          <input type="text" placeholder="Player BLK" />
          <input type="text" placeholder="Player TOV" />

          <br />
          <br />
          <input type="text" placeholder="Player PTS" />
          <input type="text" placeholder="Player Team" />
          <br />
          <br />
          <input type="text" placeholder="Player Season" />
          <br />
          <br />
          <button id="submitbtn" onSubmit={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddPlayerStat;
