import { useEffect } from "react";
import useStore from "../services/UseStore";

const DisplayTodo = () => {
  const { todos, deleteTodo, toggleTodo } = useStore((state) => {
    return {
      todos: state.todos,
      deleteTodo: state.deleteTodo,
      toggleTodo: state.toggleTodo,
    };
  });

  useEffect(() => {
    console.log(todos);
  }, []);

  return (
    <div className="px-[30px] rounded-md grid grid-cols-4 gap-[5px] w-full">
      {todos.length > 0
        ? todos.map((todo) => (
            <li
              key={todo.id}
              onClick={() => toggleTodo(todo.id)}
              className="h-[250px] w-[250px] rounded-xl list-none border bg-blue-200 flex flex-col items-center justify-center gap-[10px] px-[10px] py-[12px]"
            >
              <p
                className={`w-full h-2/3 flex flex-col items-center justify-center${
                  todo.completed ? `line-through` : ""
                }`}
              >
                {todo.text}
              </p>{" "}
              <button
                className="bg-black text-white rounded-xl px-[10px] py-[7px]"
                onClick={() => deleteTodo(todo.id)}
              >
                Delete
              </button>
            </li>
          ))
        : undefined}
    </div>
  );
};

export default DisplayTodo;
