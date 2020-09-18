import React from "react";

interface Props {
  todo: Todo;
}

const TodoListItem: React.FC<Props> = ({ todo }) => {
  return (
    <li>
      <label className="md:w-2/3 block text-gray-500 font-bold">
        <input className="mr-2 leading-tight" type="checkbox" checked={todo.complete} />
        <span className="text-sm">
          {todo.text}
        </span>
      </label>
    </li>
  );
};

export default TodoListItem;
