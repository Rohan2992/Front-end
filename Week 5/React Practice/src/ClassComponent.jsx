/* eslint-disable react/prop-types */
import { Component } from "react";
import "./App.css";

class ButtonsComponent extends Component {
  render() {
    const { name, count, setCount } = this.props;

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
}

class DisplayCounter extends Component {
  render() {
    const { count } = this.props;

    return <>{count}</>;
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  setCount = (newCount) => {
    this.setState({ count: newCount });
  };

  render() {
    const { count } = this.state;

    return (
      <div style={{ padding: "2rem" }}>
        <h1>Welcome to the Counter</h1>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <ButtonsComponent
            name="Decrease Counter"
            count={count}
            setCount={this.setCount}
          />
          <ButtonsComponent
            name="Increase Counter"
            count={count}
            setCount={this.setCount}
          />
        </div>
        <p style={{ textAlign: "center" }}>
          <DisplayCounter count={count} />
        </p>
      </div>
    );
  }
}

export default App
