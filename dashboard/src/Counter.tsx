import React, { useState, useEffect } from 'react';

interface CounterProps {
  counter: number;
  onIncrease: () => void;
}

const buttonStyle = {
  border: '1px solid blue',
  borderRadius: '4px',
  display: 'inline-block',
  padding: '0.5rem',
};

const Counter = (props: CounterProps) => {
  const { counter, onIncrease } = props;

  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount(counter);
  }, []);

  const handleIncrease = () => {
    setCount(count + 1);
    onIncrease();
  };

  const handleDecrease = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <div id='value'>Parent value: {counter}</div>
      <div id='value'>Local value: {count}</div>
      <button style={buttonStyle} onClick={handleIncrease}>
        Increase
      </button>
      <button style={buttonStyle} onClick={handleDecrease}>
        Local decrease
      </button>
    </div>
  );
};

export default Counter;
