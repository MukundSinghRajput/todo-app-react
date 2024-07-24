import "./App.css";
import { Input } from "./components/Input";

const App = () => {
  const todos = JSON.parse(localStorage.getItem("todo") || "[]");

  if (todos.length === 0) {
    return (
    <>
    <p>No todo items found.</p>
    <Input />
    </>
  )
}

  return (
    <>
      <Input />
      <ol>
        {todos.map((todo: string, index: number) => {
          if (todo !== "") {
            return <li key={index}>{todo}</li>;
          }
          return null;
        })}
      </ol>
    </>
  );
};

export default App;
