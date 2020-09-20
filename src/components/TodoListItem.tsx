import React from "react";

interface Props {
  todo: Todo;
  toggleTodo: ToggleTodo;
  removeTodo: RemoveTodo;
}

const TodoListItem: React.FC<Props> = ({ removeTodo, todo, toggleTodo }) => {
  return (
    <li>
      <label className="md:w-2/3 block text-gray-500 font-bold contents">
        <input
          className="mr-2 leading-10"
          type="checkbox"
          checked={todo.complete}
          onChange={() => toggleTodo(todo)}
        />
        <span className="text-base font-medium text-gray-700">
          {todo.text}
        </span>
      </label>
      <button className="cursor-pointer ml-4" onClick={() => removeTodo(todo)}><span role="img" aria-label="remove todo">🗑️</span></button>
    </li>
  );
};

export default TodoListItem;
