import { useState } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(prev => prev + 1)} type='button'>
        Increment
      </button>
    </div>
  );
}

export default Example;
