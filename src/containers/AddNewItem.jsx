import { connect } from 'react-redux';
import { addTodo } from '../actions';
import React from 'react';

let AddNewItem = ( { dispatch } ) => {
    let input;
    return (
        <form onSubmit={e => {
            e.preventDefault();
            if (!input.value.trim()) {
                return
            }
            dispatch(addTodo(input.value));
            input.value='';
            input.focus();
        }}>
            <div className="form-group">
                <input type="text"
                    className="form-control mb-3"
                    placeholder="Type a task"
                    ref={node => {
                        input = node
                    }}
                />
                <button className="btn btn-primary" 
                        type="submit">Add</button>
            </div>
        </form>
    )
}

AddNewItem = connect()(AddNewItem);

export default AddNewItem;