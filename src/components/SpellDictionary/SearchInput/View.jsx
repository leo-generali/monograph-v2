import { h } from "preact";
import style from "./style";

const View = ({ searchInput, handleChange }) => (
  <div>
    <input type="text" value={searchInput} onKeyUp={handleChange} />
  </div>
);

export default View;
