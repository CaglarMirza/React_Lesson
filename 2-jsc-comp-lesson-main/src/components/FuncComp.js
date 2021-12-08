import { useState } from "react";

function FuncComp() {
  const [counter, setCounter] = useState(4);
  const [color, colorSet] = useState("red");

  const incCounter = () => {
    setCounter(counter + 1);
  };
  const decCounter = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <h1>Welcome to ReactJS from FC</h1>
      {/* <p>Age: {old}</p>
      <p>Color: {color.toUpperCase()}</p> */}
      <p>Counter: {counter}</p>
      <button onClick={incCounter}>Increase</button>
      <button onClick={decCounter}>Decrease</button>
    </div>
  );
}

export default FuncComp;
