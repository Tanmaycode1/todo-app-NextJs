"use client";
import { useTodos } from "@/store/todos";
import React, { useState, FormEvent } from "react";

const AddTodo = () => {
  const [todo, setTodo] = useState("");
  const { handleAddTodo } = useTodos();

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAddTodo(todo);
    setTodo("");
  };

  return (
    <form action="" onSubmit={handleFormSubmit}>
      <input className="border-[2px] p-1 px-2 focus:border-gray-400 mt-4 mb-6 w-[25rem] text-[1rem] 
      tracking-[0.06rem] font-[600] border-[#ccc]  focus:outline-none"
        type="text"
        placeholder="Write Something Here"
        onChange={(e: any) => setTodo(e.target.value)}
        value={todo}
      />
      <button type="submit" className="pt-[0.40rem] pb-[0.40rem] px-8 
      font-bold cursor-pointer ml-4 bg-[#68B984] text-white">
        Add
      </button>
    </form>
  );
};

export default AddTodo;
