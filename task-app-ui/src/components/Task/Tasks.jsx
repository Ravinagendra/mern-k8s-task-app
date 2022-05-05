import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTasksList } from '../../redux/actions/taskAction';
import AddTask from './AddTask';
import TaskItem from './TaskItem';

const Tasks = () => {
    const dispatch = useDispatch();
    const { loading, error, tasks } = useSelector(state => state.getTaskList);

    useEffect(() => {
        dispatch(getTasksList());
    }, [dispatch]);

    return (
        <div>
            <AddTask />
            <h3>Tasks</h3>
            {loading && `Loading...`}
            {error && error}
            {tasks &&
                tasks.map(task => <TaskItem key={task._id} task={task} />)}
        </div>
    );
};

export default Tasks;
