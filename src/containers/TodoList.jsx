import TodoItem from '../components/TodoItem';
import { toggleComplete } from '../actions';
import React from 'react';
import { connect } from 'react-redux';

let TodoList = ( { todos, dispatch } ) => (
    <ul className="list-group pb-3">
        {todos.map((item, index) => (
            <TodoItem key={index}
                      {...item}
                      onClick={() => dispatch(toggleComplete(index))}
            />
        ))}
    </ul>
)

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

TodoList = connect(mapStateToProps)(TodoList)

export default TodoList;