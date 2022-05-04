import Task from '../models/taskModel.js';

/**
 *
 * @param {*} task
 * @returns
 */
export const addTask = async task => {
    const newTask = await Task.create(task);
    return newTask;
};

/**
 *
 * @returns
 */
export const getTasksList = async () => {
    const tasks = await Task.find({});
    return tasks;
};
