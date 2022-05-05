import * as taskService from '../services/taskService.js';

/**
 *
 * @param {*} req
 * @param {*} res
 */
export const addTask = async (req, res) => {
    try {
        console.log(req.body);
        const task = await taskService.addTask(req.body);
        res.send(task);
    } catch (error) {
        res.status(500).send({ message: `${error.message}` });
    }
};

/**
 *
 * @param {*} req
 * @param {*} res
 */
export const getTasksList = async (req, res) => {
    try {
        const tasks = await taskService.getTasksList();
        res.send(tasks);
    } catch (error) {
        res.status(500).send({ message: `${error.message}` });
    }
};
