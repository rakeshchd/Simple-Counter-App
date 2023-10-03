import React, { useState } from 'react';

function App() {
  // Define a state variable 'count' and a function 'setCount' to update it.
  const [count, setCount] = useState(0);

  // Function to increment the count when the '+' button is clicked.
  const increment = () => {
    // Check if the current count is less than 10 before incrementing.
    if (count < 10) {
      // Update the 'count' state by adding 1.
      setCount(count + 1);
    }
  };

  // Function to decrement the count when the '-' button is clicked.
  const decrement = () => {
    // Check if the current count is greater than 0 before decrementing.
    if (count > 0) {
      // Update the 'count' state by subtracting 1.
      setCount(count - 1);
    }
  };

  // Function to reset the count to 0 when the 'Reset' button is clicked.
  const reset = () => {
    // Set the 'count' state to 0 to reset the counter.
    setCount(0);
  };

  return (
    <div className="container my-5">
      <div className="card text-center my-5">
        <div className="card-body">
          <h1>Simple Counter App</h1>
          <div className="my-5">
            {/* Display the current count */}
            <h2 className='my-5'>{count}</h2>
            {/* Button to increment the count */}
            <button className='btn btn-success mx-3' onClick={increment} disabled={count === 10}> + </button>
            {/* Button to decrement the count */}
            <button className='btn btn-danger mx-3' onClick={decrement} disabled={count === 0}> - </button>
            {/* Button to reset the count */}
            <button className='btn btn-secondary mx-3' onClick={reset} disabled={count === 0}> Reset </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Export the 'App' component as the default export.
export default App;

