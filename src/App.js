import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import TodoList from './pages/TodoList';
import TodoForm from './pages/TodoForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        {
          id: 0,
          title: 'First task',
          descr: 'Description First task',
          complete: false,
          color: 'danger',
        },
        {
          id: 1,
          title: 'Second task',
          descr: 'Description Second task',
          complete: false,
          color: 'success',
        },
        {
          id: 2,
          title: 'Third task',
          descr: 'Description Third task',
          complete: false,
          color: 'warning',
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

  render() {
    return (
      <div className="container">
        <div className="row d-flex justify-content-center h-100">
          <h5 className="display-4 col-12 text-center">Todo List</h5>
          <Switch>
            <Route
              path="/todo-react"
              render={() => (
                <TodoList
                  toggleCheckTask={this.toggleHandler}
                  removeTask={this.removeHandler}
                  tasks={this.state.tasks}
                />
              )}
              exact
            />
            <Route path="/todo-form" component={TodoForm} exact />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
