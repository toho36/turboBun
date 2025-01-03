import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex flex-col">
        <button
          className="bg-blue-500"
          onClick={() => setCount((count) => count + 1)}
        >
          Up
        </button>
        <button
          className="bg-red-100"
          onClick={() => setCount((count) => count - 1)}
        >
          Downs
        </button>
        <div className="text-center">{count}</div>
      </div>
    </>
  );
}

export default App;
