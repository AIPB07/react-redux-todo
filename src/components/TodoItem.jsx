import PropTypes from 'prop-types';
import React from 'react';

const TodoItem = ({ onClick, completed, text}) => {
    return (
        <li className="list-group-item"
            style={{
            textDecoration: completed ? 'line-through' : 'none' 
        }}
            onClick={onClick}
        >
            {text}
        </li>
    )
}

TodoItem.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default TodoItem;