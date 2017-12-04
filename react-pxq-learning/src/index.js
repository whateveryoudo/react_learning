import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import route from './Router/Route'
import registerServiceWorker from './registerServiceWorker';


import './Style/common/common.css'
import './Style/head.scss'

ReactDOM.render(route, document.getElementById('root'));
registerServiceWorker();
