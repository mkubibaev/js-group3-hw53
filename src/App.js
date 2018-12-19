import React, {Component} from 'react';
import TaskForm from './components/TaskForm/TaskForm';
import Task from './components/Task/Task';

class App extends Component {
    state= {
        currentTaskText: '',
        tasks: [
            {id: '2018-12-19T12:39:06.260Z', text: 'Buy milk', isDone: false},
            {id: '2018-12-19T12:39:27.549Z', text: 'Do homework', isDone: false}
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
            const task = {
                id: date.toISOString(),
                text: this.state.currentTaskText,
                isDone: false
            };
            tasks.push(task);

            this.setState({
                currentTaskText: '',
                tasks
            });

        } else {
            alert('Enter task!');
        }

    };

    removeTask = id => {
        const taskIndex = this.state.tasks.findIndex(task => task.id === id);
        const tasks = [...this.state.tasks];
        tasks.splice(taskIndex, 1);

        this.setState({tasks});
    };

    changeTaskStatus = id => {
        const taskIndex = this.state.tasks.findIndex(task => task.id === id);
        const tasks = [...this.state.tasks];
        const task = {...this.state.tasks[taskIndex]};

        task.isDone = !task.isDone;
        tasks[taskIndex] = task;

        this.setState({
            tasks
        });
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
                        key={task.id}
                        text={task.text}
                        isDone={task.isDone}
                        onRemoveTask={() => this.removeTask(task.id)}
                        onChangeStatus={() => this.changeTaskStatus(task.id)}
                    />
                ))}
            </div>
        );
    }
}

export default App;
