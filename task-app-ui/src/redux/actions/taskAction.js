import axios from 'axios';
import * as types from '../constants/taskConstants';

export const addTask = task => async dispatch => {
    try {
        dispatch({ type: types.TASK_ADD_REQUEST });
        const { data } = await axios.post(`/api/tasks`, task);
        console.log(data);
        dispatch({ type: types.TASK_ADD_SUCCESS, payload: true });
    } catch (error) {
        dispatch({ type: types.TASK_ADD_FAIL, payload: error });
    }
};

export const getTasksList = () => async dispatch => {
    try {
        dispatch({ type: types.TASK_LIST_REQUEST });
        const { data } = await axios.get(`/api/tasks`);
        console.log(data);
        dispatch({ type: types.TASK_LIST_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: types.TASK_LIST_FAIL, payload: error });
    }
};
