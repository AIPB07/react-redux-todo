import { ADD_TODO, TOGGLE_COMPLETE, CLEAR_LIST } from './actions';

const INITIAL_STATE = {
    todos: []
};

const rootReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_TODO:
            return Object.assign({}, state, {
                todos: state.todos.concat({
                    id: action.id,
                    text: action.text,
                    completed: false
                })
            });
        case TOGGLE_COMPLETE:
            return Object.assign({}, state, {
                todos: state.todos.map((todo, index) => {
                    if (index === action.index) {
                        return Object.assign({}, todo, {
                            completed: !todo.completed
                        });
                    };
                    return todo;
                })
            });
        case CLEAR_LIST:
            return INITIAL_STATE;
        default:
            return state;
    }
}

export default rootReducer;