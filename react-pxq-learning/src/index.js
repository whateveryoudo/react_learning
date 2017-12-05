import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import route from './Router/Route'
//默认点击 与单位配置
import './Config/Config.js'
import registerServiceWorker from './registerServiceWorker';


import './Style/common/common.scss'
import './Style/head.scss'

ReactDOM.render(route, document.getElementById('root'));
registerServiceWorker();
