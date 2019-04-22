import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './ui/App';
import appService from './ui/App.service';
import l from './logic/Logger';

appService.init();

ReactDOM.render(<App />, document.getElementById('root'));
