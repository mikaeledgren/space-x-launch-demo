import './Menu.css';

import React from 'react';

import { routerStore } from '../../../stores';
import Link from '../Link/Link';

class Menu extends React.Component {
  render() {
    const previousActive: boolean = routerStore.route.name === 'previous';
    const upcomingActive: boolean = routerStore.route.name === 'upcoming';

    return (
      <div className="menu-container">
        <Link className="menu-item" to="previous" active={previousActive}>
          Previous
        </Link>
        <Link className="menu-item" to="upcoming" active={upcomingActive}>
          Upcoming
        </Link>
      </div>
    );
  }
}

export default Menu;
