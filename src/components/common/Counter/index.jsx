import { useState } from "react";
import Button from "../Button";

const Counter = () => {
  const [num, setNum] = useState(0);
  const sumar = () => {
    setNum(num + 1);
  };

  const restar = () => {
    if (num > 0) setNum(num - 1);
  };

  return (
    <div>
      <Button text="-" callback={restar} />
      <input type="text" value={num} />
      <button style={{ backgroundColor: "gray" }} onClick={sumar}>
        +
      </button>
    </div>
  );
};

export default Counter;
