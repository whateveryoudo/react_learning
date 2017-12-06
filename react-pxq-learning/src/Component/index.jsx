import React,{Component} from 'react'
import {Header} from './common/mixin'
class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
            product : [],//销售商品
            saleMoney : '',
        }
        this.changeValue = (type,event) => {
            //输入类型处理
            switch (type){
                case 'money':
                    let value = event.target.value;
                    if()
            }
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
                    <div className="input_container react-cell">
                        <div className="react-title">
                            <span className="input_descript"  value = {this.state.saleMoney} onChange={this.changeValue.bind(this,'money')}>销售金额：</span>
                        </div>
                        <div className="react-value">
                            <input type="text" placeholder="请输入订单金额"/>
                        </div>
                    </div>

                    <div className="input_container react-cell">
                        <div className="react-title">
                            <span className="input_descript">客户姓名：</span>
                        </div>
                        <div className="react-value">
                            <input type="text" placeholder="请输入客户姓名"/>
                        </div>
                    </div>
                </form>
            </div>

        )
    }
}
export default Main