import React from 'react';

const Task = props => {
    const taskClasses = ['card', 'mb-3'];

    if (props.isDone) {
        taskClasses.push('bg-light')
    } else {
        taskClasses.push('text-white bg-info')
    }

    return (
        <div className={taskClasses.join(' ')}>
            <div className="card-body d-flex justify-content-between align-items-center">
                <div>
                    <span className="text-muted">Status: {props.isDone ? 'Done' : 'in Process'}</span>
                    <p className="mb-0">{props.text}</p>
                </div>
                <div>
                    <label>
                        <input type="checkbox"
                               checked={props.isDone}
                               onChange={props.onChangeStatus}
                        />
                         {props.isDone ? 'Open' : 'Close'}
                    </label>
                    <button onClick={props.onRemoveTask}
                            className="btn btn-sm btn-outline-danger"
                    >Delete</button>
                </div>
            </div>
        </div>
    );
};

export default Task;