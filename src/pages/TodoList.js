import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export default function TodoList({
  tasks,
  toggleCheckTask,
  removeTask,
}) {
  return (
    <div className="w-100 col-10">
      <ul className="list-group">
        {tasks.length === 0 ? (
          <p>Список пуст</p>
        ) : (
          tasks.map((task) => {
            let classOfList = `list-group-item d-flex justify-content-between align-items-center bg-${task.priority} mb-2`;
            return (
              <li key={task.id} className={classOfList}>
                <label className="form-check-label d-flex justify-content-between col-10">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    checked={task.complete}
                    onChange={() => toggleCheckTask(task.id)}
                  />
                  {task.title}
                  <div className="descr">{task.descr}</div>
                </label>
                <button onClick={() => removeTask(task.id)}>
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </li>
            );
          })
        )}
      </ul>
      <button>
        <Link to="/todo-form">To form</Link>
      </button>
    </div>
  );
}
