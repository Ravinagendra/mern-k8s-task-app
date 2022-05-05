import * as taskRepo from '../repos/taskRepo.js';

/**
 *
 * @param {*} payload
 * @returns
 */
export const addTask = async payload => {
    const task = await taskRepo.addTask(payload);
    return task;
};

/**
 *
 * @returns
 */
export const getTasksList = async () => {
    const tasks = await taskRepo.getTasksList();
    return tasks;
};
