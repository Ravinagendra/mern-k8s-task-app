import * as types from '../constants/taskConstants';

export const addTaskReducer = (state = {}, action) => {
    switch (action.type) {
        case types.TASK_ADD_REQUEST:
            return { loading: true };
        case types.TASK_ADD_SUCCESS:
            return { loading: false, success: action.payload };
        case types.TASK_ADD_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const getTasksListReducer = (state = { tasks: [] }, action) => {
    switch (action.type) {
        case types.TASK_LIST_REQUEST:
            return { ...state, loading: true };
        case types.TASK_LIST_SUCCESS:
            return { ...state, loading: false, tasks: action.payload };
        case types.TASK_LIST_FAIL:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};
