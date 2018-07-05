import { h } from "preact";
import style from "./style";

const View = ({ name, range }) => (
  <div>
    <p>{`Name: ${name}`}</p>
    <p>{`Range: ${range}`}</p>
  </div>
);

export default View;
