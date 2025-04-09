import { useState } from "react";

const MyComponent = () => {
  const state = useState(0);
  console.log(state, "expected outpout [0, ƒ]");
  const [count, setCount] = state;

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>increment</button>
    </div>
  );
};

export default MyComponent;
