import { h } from "preact";

// Routes
import { Link } from "preact-router/match";
import { ROUTES } from "../../shared/routes";

import style from "./style";

const Header = () => (
  <header class={style.header}>
    <nav class={style.nav}>
      <Link
        class={style.logo}
        activeClassName={style.active}
        href={ROUTES.HOME}
      >
        Monograph
      </Link>
      <div class={style.navGroup}>
        <Link
          class={style.navItem}
          activeClassName={style.active}
          href={ROUTES.TOME}
        >
          Tome
        </Link>
      </div>
    </nav>
  </header>
);

export default Header;
