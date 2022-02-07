import React from "react";

const GamePlayer = ({ label, player, setPlayer }) => (
  <div className="row">
    <label htmlFor={label}>{label}</label>
    <input type="text" id={label} onChange={setPlayer} />
  </div>
);

export default GamePlayer;
