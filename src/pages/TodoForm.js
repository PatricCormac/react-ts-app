import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class TodoForm extends Component {
  render() {
    return (
      <form className="w-100 col-10">
        <div className="form-group">
          <label htmlFor="titleTask">Title Task</label>
          <input class="form-control" id="titleTask" type="text" />
        </div>
        <div className="form-group">
          <label htmlFor="descrTask">Description Task</label>
          <input class="form-control" id="descrTask" type="text" />
        </div>
        <div className="form-group">
          <label className="mr-3" htmlFor="priorityTask">
            Приоритет:
          </label>
          <select id="priorityTask">
            <option value="danger">Высокий</option>
            <option value="warning">Средний</option>
            <option value="success">Низкий</option>
          </select>
        </div>
        <button>
          <Link to="/todo-react">To list</Link>
        </button>
      </form>
    );
  }
}
