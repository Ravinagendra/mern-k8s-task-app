import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { addTask, getTasksList } from '../../redux/actions/taskAction';

const AddTask = () => {
    const dispatch = useDispatch();
    const { loading, error, success } = useSelector(state => state.addTask);

    useEffect(() => {
        if (success) {
            dispatch(getTasksList());
        }
    }, [dispatch, success]);

    const handleOnSubimit = values => {
        console.log(values);
        dispatch(addTask(values));
        formik.resetForm();
    };

    const formik = useFormik({
        initialValues: {
            title: '',
            completed: false
        },
        onSubmit: handleOnSubimit
    });

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <h3>Add Task</h3>
                {loading && `Loading...`}
                {error && error}
                <input
                    type="text"
                    placehloder="title"
                    name="title"
                    value={formik.values.title}
                    onChange={formik.handleChange}
                />
                <button type="submit">Add</button>
            </form>
        </div>
    );
};

export default AddTask;
