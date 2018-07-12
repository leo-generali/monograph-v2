import { h, Component } from "preact";
import View from "./View";

// Loading Data
import { database } from "../../components/Firebase";

export default class extends Component {
  constructor() {
    super();

    this.state = {
      spells: [],
      loading: true,
      searchInput: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  loadData(collection) {
    const spellsRef = database.collection(collection);
    spellsRef.get().then(snapshot => {
      const spells = snapshot.docs.map(spellRef => spellRef.data());
      this.setState({ loading: false, spells });
    });
  }

  handleChange(event) {
    this.setState({ searchInput: event.target.value });
  }

  componentDidMount() {
    this.loadData("spells");
  }

  render() {
    return <View {...this.state} handleChange={this.handleChange} />;
  }
}
