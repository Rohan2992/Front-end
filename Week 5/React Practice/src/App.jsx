/* eslint-disable react/prop-types */
import "./App.css";
import { useState } from "react";

function ButtonsComponent({ name, count, setCount }) {
  return (
    <button
      style={{ padding: "2rem" }}
      onClick={() => {
        name === "Increase Counter" ? setCount(count + 1) : setCount(count - 1);
      }}
    >
      {name}
    </button>
  );
}

function DisplayCounter({ count }) {
  return <>{count}</>;
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Welcome to the Counter game</h1>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <ButtonsComponent
          name="Decrease Counter"
          count={count}
          setCount={setCount}
        />
        <ButtonsComponent
          name="Increase Counter"
          count={count}
          setCount={setCount}
        />
      </div>
      <p style={{ textAlign: "center" }}>
        <DisplayCounter count={count} />
      </p>
    </div>
  );
}

export default App;
