import React from 'react';

const DEFAULT_STATE = {
    todo: [
        {text: 'Do dishes', completed: true},
        {text: 'Walk dog', completed: false}
    ],
    inputText: ''
}

class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = DEFAULT_STATE;
    }

    handleClick = index => {
        this.setState({
            todo: this.state.todo.map((item, i) => {
                if (index === i) {
                    return Object.assign({}, item, {
                        completed: !item.completed
                    })
                }
                return item;
            })
        })
    }

    handleInputChange = e => {
        this.setState({
            inputText: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        let text = this.state.inputText;
        this.setState({
            todo: this.state.todo.concat({
                text: text,
                completed: false
            })
        })
    }

    render() {
        return (
            <div>
                <h1>To-do App</h1>
                <TodoList todo={this.state.todo}
                          handleClick={this.handleClick}
                />
                <AddNewItem handleSubmit={this.handleSubmit}
                            handleInputChange={this.handleInputChange}
                            inputText={this.state.inputText}
                />
            </div>
        )
    }
}

const TodoList = (props) => {
    return (
        <ul>
            {props.todo.map((item, index) => {
                return (
                <TodoItem key={index}
                          index={index}
                          {...item}
                          handleClick={props.handleClick}
                />
                )
            })}
        </ul>
    )
}

const TodoItem = (props) => {
    return (
        <li index={props.index}
            style={{
            textDecoration: props.completed ? 'line-through' : 'none' 
        }}
            onClick={props.handleClick.bind(this, props.index)}
        >
            {props.text}
        </li>
    )
}

const AddNewItem = (props) => {
    
    return (
        <form onSubmit={props.handleSubmit}>
            <input type="text" placeholder="Type a task" onChange={props.handleInputChange} value={props.textInput}></input>
            <input type="submit" value="Add"></input>
        </form>
    )
}

export default TodoApp;