import React,{Component} from 'react'
import {Header} from './common/mixin'
class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
            product : []//销售商品
        }
    }
    render(){
        let products = this.state.products;
        return (
            <div className="component_container index_modules">
                {/*nav  == nav = {true}*/}
                <Header nav applyRecord title="销售录入"/>
                <div className="index_tip">
                    <span className="tip_text">请输入你的销售记录</span>
                </div>
                <form className="form_style">
                    <div className="input_container">
                        <span className="input_descript">销售金额：</span>
                        <input type="text" placeholder="请输入订单金额"/>
                    </div>
                </form>
            </div>

        )
    }
}
export default Main