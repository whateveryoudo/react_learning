import React,{Component} from 'react'
import {connect} from 'react-redux'
import {addTodo,toggleTodo,setVisiblityFilter,VisiblityFilters} from '../Redux/actions/index'
import AddTodo from './AddTodo'
//为什么需要./
class App extends Component{
    render(){
       const {dispatch,visibleTodos,visiblityFilter} = this.props
        return(
            <div>

                <AddTodo onAddClick = {text => dispatch(addTodo(text))}/>
                {/*列表(还没使用组件写)*/}
                <ul>
                    {
                        visibleTodos.map((todo,index) => {
                            return (
                                <li>{todo.text}</li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

function selectTodos(todos,filter){
    switch (filter){
        case VisiblityFilters.SHOW_ALL:
            return todos;
        case VisiblityFilters.SHOW_COMPLETED:
            return todos.filter(todo => {
                return todo.completed
            })
        case VisiblityFilters.SHOW_ACTIVE:
            return todos.filter(todo => {
                return !todo.completed;
            })
    }
}
function select(state){
    return {
        visibleTodos : selectTodos(state.todos,state.visiblityFilter),
        visiblityFilter : state.visiblityFilter
    }
}
export default connect(select)(App)