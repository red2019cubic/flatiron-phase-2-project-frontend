import React from "react";
import { useState } from "react";
import NavBar from "./NavBar";

function AddPlayerStat({ handleSubmit }) {
 
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [game, setGame] = useState("");
  const [gamestarted, setGameStarted] = useState("");
  const [minutesplayed, setMinutesPlayed] = useState("");
  const [fieldgoals, setFieldGoals] = useState("");
  const [fieldattempts, setFieldAttempts] = useState("");
  const [fieldpercent, setFieldPercent] = useState("");
  const [threefg, setThreeFg] = useState("");
  const [threeattempts, setThreeAttempts] = useState("");
  const [threepercent, setThreePercent] = useState("");
  const [twofg, setTwoFg] = useState("");
  const [twoattempts, setTwoAttempts] = useState("");
  const [twopercent, setTwoPercent] = useState("");
  const [effectfgpercent, setEffectfgPercent] = useState("");
  const [ft, setFt] = useState("");
  const [fta, setFta] = useState("");
  const [ftpercent, setFtPercent] = useState("");
  const [ORB, setORB] = useState("");
  const [DRB, setDRB] = useState("");
  const [TRB, setTRB] = useState("");
  const [AST, setAST] = useState("");
  const [STL, setSTL] = useState("");
  const [BLK, setBLK] = useState("");
  const [TOV, setTOV] = useState("");
  const [PF, setPF] = useState("");
  const [PTS, setPTS] = useState("");
  const [team, setTeam] = useState("");
  const [season, setSeason] = useState("");
 

  
  return (
    <div className="addplayer">
      <NavBar />
      <div className="form">
        <form className="formdata" onSubmit={handleSubmit}>
          <h3>Add Player stats</h3>
          <input
            type="text"
            name="name"
            placeholder="Player Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            name="age"
            placeholder="Player Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <br />
          <br />
          <input
            type="text"
            name="game"
            placeholder="Player Games"
            value={game}
            onChange={(e) => setGame(e.target.value)}
          />
          <input
            type="text"
            name="gamestarted"
            placeholder="Player Games Started"
            value={gamestarted}
            onChange={(e) => setGameStarted(e.target.value)}
          />
          <br />
          <br />
          <input
            type="text"
            name="minutesplayed"
            placeholder="Player Minutes Played"
            value={minutesplayed}
            onChange={(e) => setMinutesPlayed(e.target.value)}
          />
          <input
            type="text"
            name="fieldgoals"
            placeholder="Player Field Goals"
            value={fieldgoals}
            onChange={(e) => setFieldGoals(e.target.value)}
          />
          <br />
          <br />
          <input
            type="text"
            name="fieldattempts"
            placeholder="Player Field Attempts"
            value={fieldattempts}
            onChange={(e) => setFieldAttempts(e.target.value)}
          />
          <input
            type="text"
            name="fieldpercent"
            placeholder="Player Field percent"
            value={fieldpercent}
            onChange={(e) => setFieldPercent(e.target.value)}
          />
          <br />
          <br />
          <input
            type="text"
            name="threefg"
            placeholder="Player Three fg"
            value={threefg}
            onChange={(e) => setThreeFg(e.target.value)}
          />
          <input
            type="text"
            name="threeattempts"
            placeholder="Player Three Attempts"
            value={threeattempts}
            onChange={(e) => setThreeAttempts(e.target.value)}
          />
          <br />
          <br />
          <input
            type="text"
            name="twopercent"
            placeholder="Player Two Percent"
            value={twopercent}
            onChange={(e) => setTwoPercent(e.target.value)}
          />
          <input
            type="text"
            name="threepercent"
            placeholder="Player Three percent"
            value={threepercent}
            onChange={(e) => setThreePercent(e.target.value)}
          />
          <br />
          <br />
          <input
            type="text"
            name="twofg"
            placeholder="Player Two fg"
            value={twofg}
            onChange={(e) => setTwoFg(e.target.value)}
          />
          <input
            type="text"
            name="twoattempts"
            placeholder="Player Two Attempts"
            value={twoattempts}
            onChange={(e) => setTwoAttempts(e.target.value)}
          />
          <br />
          <br />
          <input
            type="text"
            name="PF"
            placeholder="Player PF"
            value={PF}
            onChange={(e) => setPF(e.target.value)}
          />
          <input
            type="text"
            name="effectfgpercent"
            placeholder="Player Effect fg Percent"
            value={effectfgpercent}
            onChange={(e) => setEffectfgPercent(e.target.value)}
          />
          <br />
          <br />
          <input
            type="text"
            name="ft"
            placeholder="Player ft"
            value={ft}
            onChange={(e) => setFt(e.target.value)}
          />
          <input type="text" name="fta" placeholder="Player fta" 
           value={fta}
           onChange={(e) => setFta(e.target.value)}/>
          <br />
          <br />
          <input
            type="text"
            name="ftpercent"
            placeholder="Player ft percent"
            value={ftpercent}
            onChange={(e) => setFtPercent(e.target.value)}
          />
          <input
            type="text"
            name="ORB"
            placeholder="Player ORB"
            value={ORB}
            onChange={(e) => setORB(e.target.value)}
          />
          <br />
          <br />
          <input
            type="text"
            name="DRB"
            placeholder="Player DRB"
            value={DRB}
            onChange={(e) => setDRB(e.target.value)}
          />
          <input
            type="text"
            name="TRB"
            placeholder="Player TRB"
            value={TRB}
            onChange={(e) => setTRB(e.target.value)}
          />
          <br />
          <br />
          <input
            type="text"
            name="AST"
            placeholder="Player AST"
            value={AST}
            onChange={(e) => setAST(e.target.value)}
          />
          <input
            type="text"
            name="STL"
            placeholder="Player STL"
            value={STL}
            onChange={(e) => setSTL(e.target.value)}
          />
          <br />
          <br />
          <input
            type="text"
            name="BLK"
            placeholder="Player BLK"
            value={BLK}
            onChange={(e) => setBLK(e.target.value)}
          />
          <input
            type="text"
            name="TOV"
            placeholder="Player TOV"
            value={TOV}
            onChange={(e) => setTOV(e.target.value)}
          />

          <br />
          <br />
          <input
            type="text"
            name="PTS"
            placeholder="Player PTS"
            value={PTS}
            onChange={(e) => setPTS(e.target.value)}
          />
          <input
            type="text"
            name="team"
            placeholder="Player Team"
            value={team}
            onChange={(e) => setTeam(e.target.value)}
          />
          <br />
          <br />
          <input
            type="text"
            name="season"
            placeholder="Player Season"
            value={season}
            onChange={(e) => setSeason(e.target.value)}
          />
          <br />
          <br />
          <button type="submit" id="submitbtn">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default AddPlayerStat;
