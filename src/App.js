import React, {Component} from 'react';
import TaskForm from './components/TaskForm/TaskForm';


class App extends Component {
    render() {
        return (
            <div className="container py-4">
                <TaskForm />
            </div>
        );
    }
}

export default App;
