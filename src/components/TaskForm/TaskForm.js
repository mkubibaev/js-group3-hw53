import React from 'react';

const TaskForm = props => (
    <div className="task-form">
        <input onChange={props.onInputTask}
               value={props.currentTaskText}
               type="text"
               placeholder="Add new task"
        />
        <input onClick={props.onAddTask}
               type="button"
               value="Add"
               className="btn btn-success"
        />
    </div>
);

export default TaskForm;