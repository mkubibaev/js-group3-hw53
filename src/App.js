import React, {Component} from 'react';
import TaskForm from './components/TaskForm/TaskForm';
import Task from './components/Task/Task';

class App extends Component {
    state= {
        currentTaskText: '',
        tasks: [
            {text: 'Buy milk', id: '2018-12-19T12:39:06.260Z'},
            {text: 'Do homework', id: '2018-12-19T12:39:27.549Z'}
        ]
    };

    inputTask = (event) => {
        this.setState({
            currentTaskText: event.target.value
        });
    };

    addTask = () => {
        if (this.state.currentTaskText) {
            const date = new Date();
            const tasks = [...this.state.tasks];
            const task = {text: this.state.currentTaskText, id: date.toISOString()};

            tasks.push(task);
            this.setState({
                currentTaskText: '',
                tasks
            });
        } else {
            alert('Enter task!');
        }

    };


    render() {
        return (
            <div className="container py-4">
                <TaskForm
                    currentTaskText={this.state.currentTaskText}
                    onAddTask={() =>this.addTask()}
                    onInputTask={(event) => this.inputTask(event)}
                />
                {this.state.tasks.map((task) => (
                    <Task
                        text={task.text}
                        key={task.id}
                    />
                ))}
            </div>
        );
    }
}

export default App;
