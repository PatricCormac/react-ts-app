import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import TodoList from './pages/TodoList';
import TodoForm from './pages/TodoForm';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTask: {
        title: '',
        descr: '',
        complete: false,
        priority: 'success',
      },
      tasks: [
        {
          id: 0,
          title: 'First task',
          descr: 'Description First task',
          complete: false,
          priority: 'danger',
        },
        {
          id: 1,
          title: 'Second task',
          descr: 'Description Second task',
          complete: false,
          priority: 'success',
        },
        {
          id: 2,
          title: 'Third task',
          descr: 'Description Third task',
          complete: false,
          priority: 'warning',
        },
      ],
    };
  }

  toggleHandler = (id) => {
    this.setState({
      tasks: this.state.tasks.map((task) => ({
        ...task,
        complete: task.id === id ? !task.complete : task.complete,
      })),
    });
  };

  removeHandler = (id) => {
    this.setState({
      tasks: this.state.tasks.filter((task) => task.id !== id),
    });
  };

  addHandler = () => {
    console.log('Update');
  };

  changeTitleHandler = (value) => {
    this.setState({
      newTask: {
        ...this.state.newTask,
        title: value,
      },
    });
  };

  changeDescrHandler = (value) => {
    this.setState({
      newTask: {
        ...this.state.newTask,
        descr: value,
      },
    });
  };

  changePriorityHandler = (value) => {
    this.setState({
      newTask: {
        ...this.state.newTask,
        priority: value,
      },
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row d-flex justify-content-center h-100">
          <h5 className="display-4 col-12 text-center">Todo List</h5>
          <Switch>
            <Route
              path="/react-ts-app"
              render={() => (
                <TodoList
                  toggleCheckTask={this.toggleHandler}
                  removeTask={this.removeHandler}
                  tasks={this.state.tasks}
                />
              )}
              exact
            />
            <Route
              path="/todo-form"
              render={() => (
                <TodoForm
                  task={this.state.newTask}
                  changeTitle={this.changeTitleHandler}
                  changeDescr={this.changeDescrHandler}
                  changePriority={this.changePriorityHandler}
                  addTask={this.addHandler}
                />
              )}
              exact
            />
          </Switch>
        </div>
      </div>
    );
  }
}
