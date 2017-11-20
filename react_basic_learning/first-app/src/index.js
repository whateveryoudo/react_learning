import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import element from './pages/jsx/learning_jsx'
// import domRender from './pages/domRender/domRender'//定时渲染
import Welcome from './pages/components/welcome'//组件（Welcome）
import Comment from './pages/components/Comment'//组件（Comment）
import registerServiceWorker from './registerServiceWorker';
const comment = {//测试数据
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
        name: 'Hello Kitty',
        avatarUrl: 'http://placekitten.com/g/64/64'
    }
}
ReactDOM.render(<Comment author={comment.author} date={comment.date} text={comment.text}/>, document.getElementById('root'));
registerServiceWorker();
