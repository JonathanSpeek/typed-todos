import React from "react";

interface Props {
  todo: Todo;
  toggleTodo: ToggleTodo;
}

const TodoListItem: React.FC<Props> = ({ todo, toggleTodo }) => {
  return (
    <li>
      <label className="md:w-2/3 block text-gray-500 font-bold">
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
    </li>
  );
};

export default TodoListItem;
