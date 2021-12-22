import React from "react";

export const ClickCounter = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}> Count {count}</button>
    </div>
  );
};
