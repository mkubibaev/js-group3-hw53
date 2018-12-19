import React from 'react';

const Task = props => (
    <div className="card mb-3">
        <div className="card-body d-flex justify-content-between align-items-center">
            <p className="mb-0">This is some text within a card body.</p>
            <div>
                <button className="btn btn-sm btn-outline-danger">Delete</button>
            </div>
        </div>
    </div>
);

export default Task;