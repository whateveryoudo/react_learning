import React,{Component} from 'react'
import {Router,Route,IndexRoute,browserHistory,hashHistory} from 'react-router'
// import index from '../Component/index';//销售录入
import App from '../Component/App';//redux学习
class Roots extends Component{
    render(){
        return(
            <div>
                {this.props.children}
                {/*<Route path="index" component={index}/>4.0*/}
            </div>
        )
    }
}
const history = process.env.NODE_ENV !== 'production' ? browserHistory : hashHistory;
//react router 4.0以上版本有改动(先学习低版本，有文档。。。)
// const RouterConfig = (
//     <BrowserRouter>
//         <Route path="/" component={Roots}>
//             {/*<IndexRoute component={index}/>//首页*/}
//
//         </Route>
//     </BrowserRouter>
// )
const RouterConfig = (
    <Router history={history}>
        <Route path="/" component={Roots}>
            {/*<IndexRoute component={index}/>*/}
            <IndexRoute component={App}/>
            {/*<Route path="index" component={index} />*/}
        </Route>
    </Router>
)

export default RouterConfig