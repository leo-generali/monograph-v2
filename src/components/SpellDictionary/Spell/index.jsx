import { h, Component } from "preact";
import View from "./View";

export default class extends Component {
  render() {
    return <View {...this.props.spell} />;
  }
}
