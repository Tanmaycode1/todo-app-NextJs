import AddTodo from "@/components/addtodo";
import Navbar1 from "@/components/navbar1";
import Todos from "@/components/todos";
import { RiTodoLine } from "react-icons/ri";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-full mt-10">
      <h1 className="flex items-center text-3xl mb-6 font-sans font-semibold">
        <RiTodoLine className="text-[#68B984] pr-3 text-6xl" />
        iTodo pracTice
        <RiTodoLine className="text-[#68B984] pl-3 text-6xl" />
      </h1>
      <Navbar1/>
      <div className="pb-5"></div>
      <AddTodo />
      <Todos />
    </div>
  );
};

export default Home;
