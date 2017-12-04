import React, {Component} from 'react'
import {Link,IndexLink} from 'react-router'
/*
Header组件
 */
export class Header extends Component{
    render(){
        let {nav,title} = this.props;
        //nav
        if(nav){
            nav = (
                <div className="head_menu">
                    <ul className="head_listname">
                        <li>
                            <IndexLink to="/">
                                <span>销售录入</span>
                                <span className="head_arrow"></span>
                            </IndexLink>
                        </li>
                    </ul>
                </div>
            )
        }
        return (
            <header className="head-list">
                {nav}
                {title && <span className='head_title'>{title}</span>}
            </header>
        )
    }
}