import { h } from "preact";
import style from "./style";

import SpellList from "./SpellList";

const View = ({ spells }) => (
  <div>
    <SpellList spells={spells} />
  </div>
);

export default View;
