import React, { useState } from "react";
const App = () => {
  const [spin, setSpin] = useState(false);
  return (
    <div>
      <div className="p-5 min-h-screen">
        <h1 className="text-3xl font-bold mb-4 text-center">
          Welcome to My App
        </h1>
        <p className="text-center mb-6">
          ----------------------------------------
        </p>
        <div className="border-2 border-white h-[70vh] w-full rounded-lg p-10">
          {/* ----------- */}

          <div className="flex justify-center items-center">
            <button
              className="text-4xl h-12 w-32"
              onClick={() => setSpin(!spin)}
            >
              {!spin ? <span className="spinner"></span> : <span>click</span>}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
