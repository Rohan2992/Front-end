import { useState } from "react";
import AppBar from "./AppBar";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";

const ToDoListPost = () => {
  const [body, setBody] = useState({ title: "", description: "" });

  return (
    <center>
      <AppBar />
      <h1 style={{ padding: 30 }}>To-Do List</h1>
      <Card sx={{ p: 5 }} variant="outlined">
        <TextField
          style={{ margin: 10 }}
          fullWidth
          value={body.title}
          id="outlined-basic"
          label="Title"
          variant="outlined"
          onChange={e => setBody({ ...body, title: e.target.value })}
        />
        <TextField
          style={{ margin: 10 }}
          fullWidth
          value={body.description}
          id="outlined-basic"
          label="Description"
          variant="outlined"
          onChange={e => setBody({ ...body, description: e.target.value })}
        />
        <Button
          variant="outlined"
          onClick={async () => {
            await fetch("http://localhost:3000/todos", {
              method: "post",
              body: JSON.stringify(body),
              headers: {
                "Content-Type": "application/json"
              }
            });
            setBody({ title: "", description: "" });
          }}
        >
          Submit
        </Button>
      </Card>
    </center>
  );
};

export default ToDoListPost;
