const ADD_TODO = "ADD_TODO";
const TOGGLE_COMPLETE = "TOGGLE_COMPLETE";
const CLEAR_LIST = "CLEAR_LIST";

let nextTodo = 0;
const addTodo = (text) => {
    return {
        type: ADD_TODO,
        id: nextTodo++,
        text
    };
};

const toggleComplete = (index) => {
    return {
        type: TOGGLE_COMPLETE,
        index
    };
};

const clearList = () => {
    return {
        type: CLEAR_LIST
    }
}

export {ADD_TODO, TOGGLE_COMPLETE, CLEAR_LIST, addTodo, toggleComplete, clearList};