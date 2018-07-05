import { h } from "preact";
import style from "./style";

import SpellList from "./SpellList";
import SearchInput from "../../components/SpellDictionary/SearchInput";

const View = ({ spells, searchInput, handleChange }) => (
  <div>
    <SearchInput searchInput={searchInput} handleChange={handleChange} />
    <SpellList spells={spells} searchInput={searchInput} />
  </div>
);

export default View;
