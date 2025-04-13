import React, { useState, useCallback } from "react";
import MyComponent from "./components/MyComponent";

const App = () => {
  const [count, setCount] = useState(0);

  console.log("👱‍♂️ Parent rendered");

  // const handleClick = useCallback(() => {
  //   console.log("🧠 useCallback function ran");
  // }, []);

  const handleClick = () => {
    console.log("🧠 useCallback with usecallback function ran");
  };

  return (
    <div className="p-5 min-h-screen">
      <h1 className="text-3xl font-bold mb-4 text-center">Welcome to My App</h1>
      <p className="text-center mb-6">
        ----------------------------------------
      </p>
      <div className="border-2 border-white h-[70vh] w-full rounded-lg">
        {/* Child component will be placed here */}
        <p> _Parent btn</p>
        {/* if any re-render caused by parent button the child component not rerendred */}
        <button onClick={() => setCount(count + 1)}>
          count click: {count}
        </button>
        <MyComponent handleClick={handleClick} />
      </div>
    </div>
  );
};

export default App;
