/*
 action 类型
 */
export  const ADD_TODO = 'ADD_TODO';
export  const TOGGLE_TODO = 'TOGGLE_TODO';
export  const SET_VISIBILITY_FILTER = 'SET_VISIBLITY_FILTER';


/*
其他常量
 */
export const VisiblityFilters = {
    SHOW_ALL : 'SHOW_All',
    SHOW_COMPLETED : 'SHOW_COMPLETED',
    SHOW_ACTIVE : 'SHOW_ACTIVE'
}

/*
 action创建函数
 */
export function  addTodo(text){
    return {
        type : ADD_TODO,
        text
    }
}

export function toggleTodo(index){
    return {
        type : TOGGLE_TODO,
        index
    }
}

export function setVisiblityFilter(filter){
    return {
        type : SET_VISIBILITY_FILTER,
        filter
    }
}