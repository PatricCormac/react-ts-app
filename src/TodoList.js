import React, { Component } from 'react';

export default class TodoList extends Component {
  render() {
    return (
      <div className="row d-flex justify-content-center h-100">
        <h5 className="display-4 col-12 text-center">Todo List</h5>
        <ul className="list-group w-100 col-10">
          <li className="list-group-item d-flex justify-content-between align-items-center active">
            <label className="form-check-label">
              <input
                className="form-check-input"
                type="checkbox"></input>
              checkbox
            </label>
            <div className="descr">Description</div>
            <i className="fas fa-trash"></i>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <label className="form-check-label">
              <input
                className="form-check-input"
                type="checkbox"></input>
              checkbox
            </label>
            <div className="descr">Description</div>
            <i className="fas fa-trash"></i>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <label className="form-check-label">
              <input
                className="form-check-input"
                type="checkbox"></input>
              checkbox
            </label>
            <div className="descr">Description</div>
            <i className="fas fa-trash"></i>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <label className="form-check-label">
              <input
                className="form-check-input"
                type="checkbox"></input>
              checkbox
            </label>
            <div className="descr">Description</div>
            <i className="fas fa-trash"></i>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <label className="form-check-label">
              <input
                className="form-check-input"
                type="checkbox"></input>
              checkbox
            </label>
            <div className="descr">Description</div>
            <i className="fas fa-trash"></i>
          </li>
        </ul>
      </div>
    );
  }
}
