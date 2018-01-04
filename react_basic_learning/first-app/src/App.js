//redux学习
import React, { Component } from 'react';
import AddTodo from './pages/components/AddTodo'
import TodoList from './pages/components/TodoList'
import Footer from './pages/components/Footer'
class App extends Component{
    render(){
        return (
            <div>
                <AddTodo onAddClick={text => console.log('add todo',text)}/>
                <TodoList todos={
                    [
                        {text : '语句1',completed : true},
                        {text : '语句2',completed : false},
                        {text : '语句3',completed : true}
                    ]
                } onTodoClick={(todo => console.log('todo Clicked',todo))}/>
                <Footer/>
            </div>
        )
    }
}

export default App;
