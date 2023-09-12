import { useState, useEffect } from "react";
import AppBar from "./AppBar";
import Card from "@mui/material/Card";
import "./App.css";

function useToDo() {
  const [toDo, setToDo] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const Fetch = await fetch("http://localhost:3000/todos");
      const data = await Fetch.json();

      setToDo(data);
    }

    const cls = setInterval(() => {
      fetchData();
    }, 1000);

    return () => clearInterval(cls);
  }, []);
  return toDo;
}

function App() {
  const toDo = useToDo();
  return (
    <center>
      <AppBar />
      <h1>To-Do List</h1>
      {toDo.length
        ? <div style={{ display: "flex", flexWrap: "wrap", margin: "10px" }}>
            {toDo.map(e =>
              <Card
                sx={{ p: 5, m: 5 }}
                style={{ width: "300px" }}
                variant="outlined"
                key={e.id}
              >
                <h1>
                  {e.title}
                </h1>
                <p>
                  {e.description}
                </p>
                <br />
                <button
                  type="Submit"
                  onClick={async event => {
                    const Fetch = await fetch(
                      "http://localhost:3000/todos/" + e.id,
                      {
                        method: "Delete"
                      }
                    );
                    const data = await Fetch.json();
                    console.log(data);
                    console.log(e.id);
                    console.log(event);
                  }}
                >
                  Delete
                </button>
              </Card>
            )}
          </div>
        : ""}
    </center>
  );
}

export default App;
