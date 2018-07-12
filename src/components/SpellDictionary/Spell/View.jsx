import { h } from "preact";

// Styles
import style from "./style";

const View = ({ name, range }) => (
  <div class={style.card}>
    <p class={style.name}>{name}</p>
    <p>{`Range: ${range}ft`}</p>
  </div>
);

export default View;
