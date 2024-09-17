import React, { useState } from "react";
function Counter(props) {
  const [count, setCount] = useState(props.initialValue);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Tambah</button>
    </div>
  );
}

function StateProps() {
  return <Counter initialValue={10} />;
}

export default StateProps;
