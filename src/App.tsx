import React, { useEffect, useState } from 'react';
import TodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';

const TODAY = new Date();

function formatDate(date: Date): string {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();
  return `${month}.${day}.${year}`
}

const initialTodos: Todo[] = [
  {
    text: 'learn TypeScript 👨‍💻',
    complete: false,
    createdAt: formatDate(TODAY)
  },
  {
    text: 'go for a run 🏃‍♂️',
    complete: true,
    createdAt: formatDate(TODAY)
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

  const removeTodo = (selectedTodo: Todo) => {
    const newTodos = todos.filter(todo => todo !== selectedTodo);
    setTodos(newTodos);
  }

  useEffect(() => {
    const data = window.localStorage.getItem("todos");
    if (data) {
      setTodos(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  });

  const addTodo: AddTodo = (text: string) => {
    const newTodo = { text, complete: false, createdAt: formatDate(TODAY) };
    setTodos([...todos, newTodo]);
  };

  return (
    <main className="App">
      <div className="max-w-md mx-auto flex justify-center p-6 bg-gray-100 mt-10 rounded-lg shadow-xl">
        <div className="ml-6 pt-1">
          <h1 className="font-sans text-4xl font-black text-black text-center mb-8">
            Get Shit Done
        </h1>
          <TodoList removeTodo={removeTodo} todos={todos} toggleTodo={toggleTodo} />
          <TodoForm addTodo={addTodo} />
        </div>
      </div>
    </main>
  );
}

export default App;
