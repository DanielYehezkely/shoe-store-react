import React from "react";

import ICONS from "../../../models/icons";

import './PanelButton.css'

const PanelButton = ({ handleClick, label, booleanState }) => {
  return (
    <button className="panel-button" role="button" onClick={handleClick}>
      {booleanState ? `Close ${label} Table` : `Show ${label} Table`} {booleanState ? <ICONS.Minus /> : <ICONS.Plus />}
    </button>
  );
};

export default PanelButton;
