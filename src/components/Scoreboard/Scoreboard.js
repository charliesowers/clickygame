import React from "react";
import "./Scoreboard.css";

const Scoreboard = props => (
  <ul className="list-group">
  <li className="list-group-item">Score: {props.score}</li>
  <li className="list-group-item">High Score: {props.high}</li>
</ul>
);



export default Scoreboard;
