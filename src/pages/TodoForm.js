import React from 'react';
import { Link } from 'react-router-dom';

export default function TodoForm({
  task,
  changeTitle,
  changeDescr,
  changePriority,
  addTask,
}) {
  return (
    <div className="w-100 col-10">
      <div className="form-group">
        <label htmlFor="titleTask">Title Task</label>
        <input
          className="form-control"
          id="titleTask"
          type="text"
          value={task.title}
          onChange={(event) => changeTitle(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="descrTask">Description Task</label>
        <textarea
          className="form-control"
          id="descrTask"
          type="text"
          value={task.descr}
          onChange={(event) => changeDescr(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label className="mr-3" htmlFor="priorityTask">
          Приоритет:
        </label>
        <select
          id="priorityTask"
          value={task.priority}
          onChange={(event) => changePriority(event.target.value)}>
          <option value="danger">Высокий</option>
          <option value="warning">Средний</option>
          <option value="success">Низкий</option>
        </select>
      </div>
      <div className="d-flex justify-content-between">
        <button>
          <Link to="/react-ts-app">To list</Link>
        </button>
        <button onClick={addTask}>Add</button>
      </div>
    </div>
  );
}
