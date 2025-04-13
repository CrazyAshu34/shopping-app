import { useEffect, useMemo, useRef, useState } from "react";

// 🔥 Heavy calculation (slow)
const slowFunction = (num) => {
  // console.log("Calculating...");
  let result = 0;
  for (let i = 0; i < 100000000; i++) {
    result += i;
  }
  return result + num; // 100000000 + 1 = 100000001 demo
};

const MyComponent = () => {
  const [count, setCount] = useState(0);
  const [load, setLoad] = useState(false);
  const myRef = useRef(null);
  console.log("1st", typeof myRef);
  // debounce
  const handleCount = () => {
    if (myRef.current) clearTimeout(myRef.current);

    myRef.current = setTimeout(() => {
      setCount((prev) => prev + 1);
    }, 500);
  };

  useEffect(() => {
    if (load) return;
    setLoad(true);
    const id = setTimeout(() => setLoad(false), 500);
    return () => clearTimeout(id);
  }, [count]);

  const expensiveValue = useMemo(() => slowFunction(count), [count]); // use memo

  return (
    <div style={{ padding: "20px" }}>
      <h2>useMemo Example</h2>
      {!load ? <p>Count: {count}</p> : <p>Loading...</p>}
      {/* <p>Count: {count}</p> */}
      <p>Expensive Calculation Result: {expensiveValue}</p>
      <button disabled={load} onClick={handleCount}>
        {load ? "Processing..." : "Increment ++"}
      </button>
      <h2>useMemo Example</h2>
    </div>
  );
};

export default MyComponent;
