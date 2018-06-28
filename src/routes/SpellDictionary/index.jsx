import { h, Component } from "preact";
import View from "./View";

// Loading Data
import { database } from "../../components/Firebase";

export default class extends Component {
  constructor() {
    super();

    this.state = {
      spells: [],
      loading: true
    };
  }

  loadData(collection) {
    const spellsRef = database.collection(collection);
    spellsRef.get().then(snapshot => {
      const spells = snapshot.docs.map(spellRef => spellRef.data());
      this.setState({ loading: false, spells });
    });
  }

  componentDidMount() {
    this.loadData("spells");
  }

  render() {
    return <View {...this.state} />;
  }
}
