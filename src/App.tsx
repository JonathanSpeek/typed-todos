import React, { useState } from 'react';
import TodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';

const initialTodos: Todo[] = [
  {
    text: 'learn TypeScript 👨‍💻',
    complete: false,
  },
  {
    text: 'go for a run 🏃‍♂️',
    complete: true,
  },
];

function App() {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const addTodo: AddTodo = (text: string) => {
    const newTodo = { text, complete: false };
    setTodos([...todos, newTodo]);
  };

  return (
    <main className="App">
      <div className="max-w-md mx-auto flex justify-center p-6 bg-gray-100 mt-10 rounded-lg shadow-xl">
        <div className="ml-6 pt-1">
          <h1 className="font-sans text-4xl font-black text-black text-center mb-8">
            Get Shit Done
        </h1>
          <TodoList todos={todos} toggleTodo={toggleTodo} />
          <TodoForm addTodo={addTodo} />
        </div>
      </div>
    </main>
  );
}

export default App;
