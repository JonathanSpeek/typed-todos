import React, { useState } from 'react';

interface Props {
  addTodo: AddTodo;
}

const AddTodoForm: React.FC<Props> = ({ addTodo }) => {
  const [text, setText] = useState('');

  return (
    <form className="mt-6">
      <label className="sr-only" htmlFor="new-todo">
        Add Todo
      </label>
      <input
        type="text"
        id="new-todo"
        value={text}
        onChange={e => {
          setText(e.target.value);
        }}
        placeholder="grab some coffee..."
        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-800 leading-tight focus:outline-none focus:bg-white focus:border-gray-700"
      />
      <button
        type="submit"
        onClick={e => {
          e.preventDefault();
          addTodo(text);
          setText('');
        }}
        className="mt-4 w-full bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded"
      >
        Add Todo
      </button>
    </form>
  );
};

export default AddTodoForm;
