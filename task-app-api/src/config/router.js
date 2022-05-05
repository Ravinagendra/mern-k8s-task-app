import express from 'express';
import * as taskController from '../controllers/taskCotroller.js';

const router = express.Router();

router.post('/tasks', taskController.addTask);
router.get('/tasks', taskController.getTasksList);

export default router;
