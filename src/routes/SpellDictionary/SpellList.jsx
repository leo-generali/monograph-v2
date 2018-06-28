import { h, Component } from "preact";
import style from "./style";

const SpellList = ({ spells }) => (
  <div>
    {spells.map(spell => {
      return <p>{spell["name"]}</p>;
    })}
  </div>
);

export default SpellList;
