import React from 'react';

const TaskForm = props => (
    <div className="row mb-4">
        <div className="col-10">
            <input onChange={props.onInputTask}
                   value={props.currentTaskText}
                   type="text"
                   className="form-control"
                   placeholder="Add new task"
            />
        </div>
        <div className="col-2">
            <input onClick={props.onAddTask} type="button" className="form-control btn btn-primary" value="Add"/>
        </div>
    </div>
);

export default TaskForm;