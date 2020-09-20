import React from 'react';
import TodoListItem from './TodoListItem';

interface Props {
  todos: Todo[];
  toggleTodo: ToggleTodo;
  removeTodo: RemoveTodo;
}

const TodoList: React.FC<Props> = ({ removeTodo, todos, toggleTodo }) => {
  return (
    <ul>
      {todos.map(todo => (
        <TodoListItem key={`${todo.text}${Math.random() + 1}`} removeTodo={removeTodo} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </ul>
  );
};

export default TodoList;
