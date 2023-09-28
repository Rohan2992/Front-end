/* eslint-disable react/prop-types */
import "./App.css";
import {RecoilRoot, atom, useRecoilValue,useSetRecoilState} from "recoil";

const counterState = atom({key: "counter", default: 0});

function ButtonsComponent({ name }) {
  const setCount = useSetRecoilState(counterState);
  return (
    <button
      style={{ padding: "2rem" }}
      onClick={() => {
        name === "Increase Counter"
          ? setCount((c) => c + 1)
          : setCount((c) => c - 1);
      }}
    >
      {name}
    </button>
  );
}

function DisplayCounter() {
  const count = useRecoilValue(counterState);
  return <>{count}</>;
}

function App() {
  return (
    <RecoilRoot>
      <div style={{ padding: "2rem" }}>
        <h1>Welcome to the Counter game</h1>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <ButtonsComponent name="Decrease Counter" />
          <ButtonsComponent name="Increase Counter" />
        </div>
        <p style={{ textAlign: "center" }}>
          <DisplayCounter />
        </p>
      </div>
    </RecoilRoot>
  );
}

export default App;
