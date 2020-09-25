import React from 'react';
import TodoListItem from './TodoListItem';

interface Props {
  todos: Todo[];
  toggleTodo: ToggleTodo;
  removeTodo: RemoveTodo;
}

const groupBy = <T, K extends keyof any>(list: T[], getKey: (item: T) => K) =>
  list.reduce((previous, currentItem) => {
    const group = getKey(currentItem);
    if (!previous[group]) previous[group] = [];
    previous[group].push(currentItem);
    return previous;
  }, {} as Record<K, T[]>);

const TodoList: React.FC<Props> = ({ removeTodo, todos, toggleTodo }) => {
  const todosByDate = groupBy(todos, i => i.createdAt);

  const items = [];

  for (const [key, values] of Object.entries(todosByDate)) {
    const li = (
      <li key={key} className="text-lg font-bold pt-8">
        {key}
        <ul>
          {values.map(todo => (
            <TodoListItem key={`${todo.text}${Math.random() + 1}`} removeTodo={removeTodo} todo={todo} toggleTodo={toggleTodo} />
          ))}
        </ul>
      </li>
    );
    items.push(li);
  }

  return (
    <ul>
      {items}
    </ul>
  );
};

export default TodoList;
