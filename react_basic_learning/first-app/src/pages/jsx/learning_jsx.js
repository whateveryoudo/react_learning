import React from 'react';//必须加这句话
function formate(user){
    if(user){

        return user.firstName + ' ' + user.lastName;
    }
    return <h1>Hello Stranger</h1>;
}
const user = {
    firstName : 'zhang',
    lastName : 'san'
}

const element = (
    <div className = 'greeting'>
        Hello,{formate(user)}!
    </div>
)
//换种写法
// const element = React.createElement(
//     'h1',
//     {className : 'greeting'},
//     'Hello  World'
// );

export default element;