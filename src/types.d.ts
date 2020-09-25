interface Todo {
  text: string;
  complete: boolean;
  createdAt: string;
}

type ToggleTodo = (selectedTodo: Todo) => void;

type RemoveTodo = (selectedTodo: Todo) => void;

type AddTodo = (text: string) => void;
