"use client";

import { createContext, useContext, useState, useEffect } from "react";

export type Todo = {
  id: string;
  task: string;
  completed: boolean;
  createAt: Date;
};

export type TodosContext = {
  todos: Todo[];
  handleAddTodo: (task: string) => void; // call signature
  toggleTodoAsCompleted: (id: string) => void;
  handleTodoDelete: (id: string) => void;
};

export const TodosContext = createContext<TodosContext | null>(null);

export const TodosProvider = ({ children }: { children: React.ReactNode }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  const handleAddTodo = (task: string) => {
    setTodos((prevTodos) => {
      const newTodos: Todo[] = [
        {
          id: Math.random().toString(),
          task,
          completed: false,
          createAt: new Date(),
        },
        ...prevTodos,
      ];
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return newTodos;
    });
  };

  // if the task is completed
  const toggleTodoAsCompleted = (id: string) => {
    setTodos((pre) => {
      const newTodos = pre.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      });

      localStorage.setItem("todos", JSON.stringify(newTodos));
      return newTodos;
    });
  };

  // if the task is Deleted
  const handleTodoDelete = (id: string) => {
    setTodos((preVal) => {
      const newTodos = preVal.filter((task) => task.id !== id);
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return newTodos;
    });
  };

  return (
    <TodosContext.Provider
      value={{ todos, handleAddTodo, toggleTodoAsCompleted, handleTodoDelete }}
    >
      {children}
    </TodosContext.Provider>
  );
};

// Usage of the TodosContext in other components remains the same as you've shown
export function useTodos() {
  const TodosContextValue = useContext(TodosContext);
  if (!TodosContextValue) {
    throw new Error("useTodos used outside of TodosProvider");
  }
  return TodosContextValue;
}
