import "./App.css";
import DisplayTodo from "./components/DisplayTodo";
import TodoControl from "./components/TodoControl";

function App() {
  return (
    <div className="w-screen h-screen flex items-center justify-center p-[35px] flex-row">
      <div className="w-1/4 h-full pt-[40px]">
        <TodoControl></TodoControl>
      </div>
      <div className="w-3/4 h-full pt-[40px]">
        <DisplayTodo></DisplayTodo>
      </div>
    </div>
  );
}

export default App;
