import { useState } from "react";
import useStore from "../services/UseStore";
const TodoControl = () => {
  const addTodo = useStore((state) => state.addTodo);
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    addTodo(text);
    setText("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="h-full flex flex-col items-center gap-[10px]"
    >
      <input
        className="border-2 border-solid border-black rounded-xl px-2 py-1"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit" className="bg-blue-300 rounded-full w-[150px]">
        Add
      </button>
    </form>
  );
};

export default TodoControl;
