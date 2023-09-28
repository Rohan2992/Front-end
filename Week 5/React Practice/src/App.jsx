/* eslint-disable react/prop-types */
import { useState, useContext, createContext } from "react";
import "./App.css";

const counterContext = createContext();

function ButtonsComponent({ name }) {
  const { count, setCount } = useContext(counterContext);
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

function DisplayCounter() {
  const { count } = useContext(counterContext);

  return (
    <>
      {count}
    </>
  );
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <counterContext.Provider value={{ count, setCount }}>
      <div style={{ padding: "2rem" }}>
        <h1>Welcome to the Counter game</h1>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <ButtonsComponent name="Increase Counter" />
          <ButtonsComponent name="Decrease Counter" />
        </div>
        <p style={{ textAlign: "center" }}>
          <DisplayCounter />
        </p>
      </div>
    </counterContext.Provider>
  );
}

export default App;
