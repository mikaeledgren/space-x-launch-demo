import './App.css';

import { observer, Provider } from 'mobx-react';
import React, { Component } from 'react';

import l from '../logic/Logger';
import * as stores from '../stores';
import Menu from './components/Menu/Menu';
import routerStore from './navigation/Router.store';
import logoDark from './assets/spacex_logo_dark.png';
import logoWhite from './assets/spacex_logo_white.png';

@observer
class App extends Component {
  render() {
    l.debug('app');
    const invert = routerStore.route.name === 'previous';

    invert
      ? document.body.classList.add('inverted')
      : document.body.classList.remove('inverted');

    const spacexLogo = invert ? logoWhite : logoDark;

    if (routerStore.isStarted) {
      return (
        <div className="App">
          <Provider routerStore>
            <header className="header">
              <div className="spacex-logo">
                <img src={spacexLogo} alt="SpaceX" />
              </div>
              <Menu />
            </header>
          </Provider>
          <Provider {...stores}>
            <main className="main-container">
              {React.createElement(routerStore.currentComponent, {})}
            </main>
          </Provider>
        </div>
      );
    } else {
      l.debug(`For some reason we don't have a router yey. Patience...`);
      return null;
    }
  }
}

export default App;
