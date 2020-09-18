import React from 'react';
import ReactDOM from 'react-dom';
import './tailwind.output.css';
import TodoListItem from './components/TodoListItem';

const todos: Todo[] = [
  {
    text: 'learn TypeScript 👨‍💻',
    complete: false,
  },
  {
    text: 'go for a run 🏃‍♂️',
    complete: true,
  },
];

ReactDOM.render(
  <React.StrictMode>
    <main>
      <div className="max-w-md mx-auto flex justify-center p-6 bg-gray-100 mt-10 rounded-lg shadow-xl">
        <div className="ml-6 pt-1">
          <h1 className="font-sans text-4xl font-black text-black text-center">
            Get Shit Done
        </h1>
          <ul>
            {todos.map(todo => <TodoListItem todo={todo} />)}
          </ul>
        </div>
      </div>
    </main>
  </React.StrictMode>,
  document.getElementById('root')
);
