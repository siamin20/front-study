import { useState } from 'react';
import CountNumber from './CountNumber.js';
import Button from './Button.js'; 

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }
  function tenincrement() {
    setCount(count + 10);
  }

  function decrement() {
    setCount(count - 1);
  }
  function tendecrement() {
    setCount(count - 10);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div className="counter-container">
      <CountNumber count={count} />
      <div>
        <div>
          <Button onClick={tendecrement} action="-10" className="blueBtn" />
          <Button onClick={decrement} action="-1" className="blueBtn" />
          <Button onClick={increment} action="+1" className="redBtn" />
          <Button onClick={tenincrement} action="+10" className="redBtn" />
        </div>
        <Button onClick={reset} action="RESET" className="reset" />
      </div>
    </div>
  );
}

export default Counter;
