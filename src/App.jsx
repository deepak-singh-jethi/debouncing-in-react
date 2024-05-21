import React, { useState, useRef } from "react";

const App = () => {
  const [value, setValue] = useState("");

  const [debouncedValue, setDebouncedValue] = useState("");

  const timerIdDebouncing = useRef();

  const handleChange = (event) => {
    // take value from input
    const currentValue = event.target.value;

    // clear timer from callback queue if exist
    if (timerIdDebouncing.current) clearTimeout(timerIdDebouncing.current);

    // save input value
    setValue(currentValue);

    // set  a new timer for callback
    timerIdDebouncing.current = setTimeout(() => {
      // after  time delay clear ref of timer
      timerIdDebouncing.current = null;

      // take whole value after time period
      setDebouncedValue(currentValue);
    }, 1000);
  };

  return (
    <div className="w-full flex flex-col justify-center items-center my-10">
      <input
        type="text"
        value={value}
        onChange={handleChange}
        className="border-2 border-black w-fit"
      />
      <div className="bg-gray-300 my-10 p-5">
        <p className="mb-4">
          <strong>Original Value:</strong> {value}
        </p>
        <p>
          <strong>Debounced Value: </strong>
          {debouncedValue}
        </p>
        {/* <p>
          <strong>Throtteled Value: </strong>
          {throttledValue}
        </p> */}
      </div>
    </div>
  );
};

export default App;
