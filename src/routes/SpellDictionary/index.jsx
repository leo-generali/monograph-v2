import { h } from "preact";
import style from "./style";

const SpellDictionary = ({ spell }) => (
  <div class={style.home}>
    <h1>Spell</h1>
    <p>This is the Spell component.</p>
  </div>
);

export default SpellDictionary;