/**
 * Created by Administrator on 2017/11/26.
 */
import React,{Component} from 'react'
class GetObjE extends Component{
    constructor(){
        super();
        this.state = {title : '我是标题额...'}
    }
    preventPop(title,e){
        e.preventDefault();
        alert(title);
    }
    render(){
        return (
            //onClick={this.preventPop.bind(this,this.state.title)}
            //箭头函数

            <a href="http://www.baidu.com" onClick={(e) => this.preventPop(this.state.title,e)}>点击弹出标题</a>
            )
    }
}

export default GetObjE