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
                <Header nav title="销售录入"/>
            </div>

        )
    }
}
export default Main