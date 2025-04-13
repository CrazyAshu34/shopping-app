import React, { useMemo } from "react";
const MyComponent = ({ handleClick }) => {
  console.log("👶 Child rendered");
  return (
    <div>
      <br />
      <p>_Child btn</p>
      <button onClick={handleClick}>i am clicking in it</button>
    </div>
  );
};

// export default MyComponent;
export default React.memo(MyComponent);
