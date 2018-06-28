import {
  database
} from "../../components/Firebase";

const loadData = () => {
  const spellsRef = database.collection("spells");
  spellsRef.get().then(snapshot => {
    const spells = snapshot.docs.map(spellRef => spellRef.data());
    this.setState({
      spells,
      loading: false
    });
  });
};

export default loadData;