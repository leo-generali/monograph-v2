import { h, Component } from "preact";
import styles from "./styles";

// Routes
import { Router } from "preact-router";
import { ROUTES } from "../shared/routes";

import Header from "./Header/index";
import HomePage from "../routes/HomePage/index";
import SpellPage from "../routes/SpellPage/index.jsx";
import SpellDictionary from "../routes/SpellDictionary/index.jsx";

export default class App extends Component {
  /** Gets fired when the route changes.
   *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
   *	@param {string} event.url	The newly routed URL
   */
  handleRoute = e => {
    this.currentUrl = e.url;
  };

  render() {
    return (
      <div id="app">
        <Header />
        <div class={styles.app}>
          <Router onChange={this.handleRoute}>
            <HomePage path={ROUTES.HOME} />
            <SpellDictionary path={ROUTES.TOME} />
            <SpellPage path={ROUTES.SPELL_PAGE} />
          </Router>
        </div>
      </div>
    );
  }
}
