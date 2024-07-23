"use client";

import { useTodos } from "@/store/todos";
import { useSearchParams } from "next/navigation";

const Todos = () => {
  const { todos, toggleTodoAsCompleted, handleTodoDelete } = useTodos();
  const searchParams = useSearchParams();
  const  todoFilter = searchParams.get("todos")
  let filterTodos = todos;


  if(todoFilter === "active"){
    filterTodos = filterTodos.filter((todo)=>!todo.completed)
  }else if(todoFilter === "completed"){
    filterTodos = filterTodos.filter((todo)=> todo.completed)
  }

  return (
    <div>
      <ul>
        {filterTodos.map((todo) => {
          return (
            <li className="grid grid-cols-3 items-center w-[30rem] min-h-8 border-b-2 
             border-b-[#ccc] pt-1 pb-2 first-line:border-t-[#ccc] hover:bg-[#d2eedb] " 
            key={todo.id}>
              <input

                type="checkbox"
                id={`todo-${todo.id}`}
                checked={todo.completed}
                onChange={() => toggleTodoAsCompleted(todo.id)}
              />
              <label
              className={`text-lg text-[#3A3845] ${
                todo.completed ? "line-through text-[#D14D72] font-mono" : ""
              }`}
              htmlFor={`todo-${todo.id}`}
            >
              {todo.task}
            </label>

              {todo.completed && (
                <button className=" py-1 w-28 bg-[#D14D72] text-[#FFF9F9] 
                border-none inline-block cursor-pointer justify-self-center tracking-widest"
                 onClick={() => handleTodoDelete(todo.id)}>
                  Delete
                </button>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Todos;
