import { h, Component } from "preact";
import style from "./style";

import Spell from "../../components/SpellDictionary/Spell";

const SpellList = ({ spells, searchInput }) => {
  const filteredList = spells.filter(function(spell) {
    const lowerCaseSpellName = spell.name.toLowerCase();
    const lowerCaseSearchInput = searchInput.toLowerCase();
    const pos = lowerCaseSpellName.indexOf(lowerCaseSearchInput);
    return pos >= 0;
  });

  return (
    <div>
      {filteredList.map(spell => {
        return <Spell spell={spell} />;
      })}
    </div>
  );
};

export default SpellList;
