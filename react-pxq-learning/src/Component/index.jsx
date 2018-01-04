import React,{Component} from 'react'
import {Header} from './common/mixin'
class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
            product : [],//销售商品
            saleMoney : '',
            saleOldvalue : '',//上一次输入的 金额
            name : '',
            phone : ''
        }
        this.changeValue = (type,event) => {
            //输入类型处理
            switch (type){
                case 'money':
                    let value = event.target.value;
                    if((/^\d*?\.?\d{0,2}$/gi).test(value)){//输入数字类型（整数或小数）
                        if((/^0+[1-9]+/).test(value)){//0121或者000121，则处理为121
                            value = value.replace(/^0+/,'');
                        }
                        if((/^0+0\./).test(value)){//000. 处理为0.
                            value = value.replace(/^0+/,'0');
                        }
                        value = value.replace(/^\./gi,'0.');//以.1212 处理为0.121
                        this.state.saleOldvalue = value;
                    }else{//输入非数字类型,则将值置为上次输入的值
                        value = this.state.saleOldvalue;
                    }
                    this.setState({
                        saleMoney:value
                    })
                    break;
                case 'name':
                    this.setState({
                        name : event.target.value
                    })
                    break;
                case 'phone':
                    let value1 = event.target.value.replace(/\D/gi,'');//去除非数字项(let不能重复申明同一变量名if中可以)
                    this.setState({
                        phone : value1
                    })
                    break;
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
                            <span className="input_descript" >销售金额：</span>
                        </div>
                        <div className="react-value">
                            <input type="text"  value = {this.state.saleMoney} onChange={this.changeValue.bind(this,'money')} placeholder="请输入订单金额"/>
                        </div>
                    </div>

                    <div className="input_container react-cell">
                        <div className="react-title">
                            <span className="input_descript">客户姓名：</span>
                        </div>
                        <div className="react-value">
                            <input type="text" value={this.state.name} onChange = {this.changeValue.bind(this,'name')} placeholder="请输入客户姓名"/>
                        </div>
                    </div>
                    <div className="input_container react-cell">
                        <div className="react-title">
                            <span className="input_descript">客户电话：</span>
                        </div>
                        <div className="react-value">
                            <input type="text" value={this.state.phone} maxLength="11" onChange={this.changeValue.bind(this,'phone')} placeholder="请输入客户电话"/>
                        </div>
                    </div>
                </form>
                <div className="index_tip">
                    <span className="tip_text">请选择销售的产品</span>
                </div>
            </div>

        )
    }
}
export default Main