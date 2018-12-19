import React, {Component} from 'react';
import TaskForm from './components/TaskForm/TaskForm';
import Task from './components/Task/Task';

class App extends Component {
    render() {
        return (
            <div className="container py-4">
                <TaskForm />
                <Task />
                <Task />
                <Task />
            </div>
        );
    }
}

export default App;
