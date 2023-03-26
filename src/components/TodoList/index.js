import React from 'react';
import { MdDelete } from 'react-icons/md';
import PropTypes from 'prop-types';
import './styles.css';

function TodoList({ todos, onToggle, onRemove }) {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <div className="hoverinho">
          <li key={todo.id.toString()}>
            <span
              // ele insere a primeira classe todo, cnfirma se o todo é checked. o joim erve para inserir um espaço entra as classNames 'todo checked'
              className={['todo', todo.checked ? 'checked' : ''].join(' ')}
              onClick={() => onToggle && onToggle(todo)}
            >
              {todo.title}
            </span>
            <button
              className="remove"
              type="button"
              onClick={() => onRemove && onRemove(todo)}
            >
              <MdDelete size={28} />
            </button>
          </li>
        </div>
      ))}
    </ul>
  );
}

TodoList.prototype = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      checked: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onToggle: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};
export default TodoList;
