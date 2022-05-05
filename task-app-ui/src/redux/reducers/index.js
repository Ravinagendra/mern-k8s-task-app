import { combineReducers } from 'redux';
import { addTaskReducer, getTasksListReducer } from './taskReducer';

const appReducer = combineReducers({
    addTask: addTaskReducer,
    getTaskList: getTasksListReducer
});

// reset the state of a redux store
const rootReducer = (state, action) => {
    // if (action.type === RESET_STORE) {
    //     const { userLogin } = state;
    //     state = { userLogin };
    // }
    return appReducer(state, action);
};

export default rootReducer;
