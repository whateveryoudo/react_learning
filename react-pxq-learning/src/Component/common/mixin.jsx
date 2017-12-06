import React, {Component} from 'react'
import {Link,IndexLink} from 'react-router'
/*
Header组件
 */
export class Header extends Component{
    constructor(props){
        super(props);
        this.state = {showHide : 'none'}//右侧菜单,默认隐藏
        this.showNav = () => {//菜单列表显示切换
            this.state.showHide == 'none' ? (
                this.setState({showHide : 'block'})
                ) : (
                    this.setState({showHide : 'none'})
                )
        }
    }
    render(){
        let {nav,title,applyRecord} = this.props,
            navState = this.state.showHide,
            indexNavStyle = {};
        //nav
        if(nav){
            nav = (
                <div className="head_menu" onClick={this.showNav}>
                    <ul className="head_listname react-cell" style={{display : navState}}>
                        <li className="react-cell-wrapper cell-arrow-right">
                            <IndexLink to="/">
                                <span className="react-cell-title">销售录入</span>
                            </IndexLink>
                        </li>
                        <li className="react-cell-wrapper cell-arrow-right">
                            <Link to="/allDeposit">
                                <span className="react-cell-title">提现</span>
                            </Link>
                        </li>
                        <li className="react-cell-wrapper cell-arrow-right">
                            <Link to="/helpCenter">
                                <span className="react-cell-title">帮助中心</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            )
        }
        if(title && title == '销售录入'){
            indexNavStyle = {position : 'absolute'}
        }
        return (
            <header className="head-list" style={indexNavStyle}>
                {nav}
                {title && <span className='head_title'>{title}</span>}
                {applyRecord && <Link to="/applyRecord" className ='head_icon_right head_applyrecord_right'></Link>}
            </header>
        )
    }
}