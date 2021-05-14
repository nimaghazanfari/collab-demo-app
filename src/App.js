import React, { useState } from "react";
import Form from "./components/Form";
import { nanoid } from "nanoid";

const App = ({ tasks }) => {
  const [task, setTasks] = useState(tasks);

  function addTask(name) {
    const newTask = { id: "todo-" + nanoid(), name: name, completed: false };
    setTasks([...task, newTask]);
  }

  return (
    <div className="stack-large todoapp" >
      <Form addTask={addTask} />
    </div>
  )
}

export default App;