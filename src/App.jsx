import { useState } from "react";
import "./App.css";
import MyComponent from "./components/MyComponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-3xl font-bold underline">app directory!</h1>
      <MyComponent />
    </>
  );
}

export default App;
