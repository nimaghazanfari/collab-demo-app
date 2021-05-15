import React, { useState } from "react";
import Form from "./components/Form";
import { nanoid } from "nanoid";
import TaskItem from "./components/TaskItem";

const App = ({ tasks }) => {
  const [totalTasks, setTasks] = useState(tasks);

  const addTask = (name) => {
    const newTask = { id: "todo-" + nanoid(), name: name, completed: false };
    setTasks([...totalTasks, newTask]);
  }

  const toggleComplete = (id) => {

    const idx = totalTasks.findIndex(task => task.id === id);
    if (idx > -1) totalTasks[idx].completed = !totalTasks[idx].completed;

    setTasks([...totalTasks]);

  }

  const removeHandler = (id) => {
    setTasks(totalTasks.filter(item => item.id !== id));
  }

  return (
    <div className="stack-large todoapp" >

      <Form addTask={addTask} />

      <div>
        {totalTasks.length ?
          <div>
            {totalTasks.map((task, i) =>
              <TaskItem key={i} item={task}
                toggleTask={toggleComplete}
                removeTask={removeHandler} />
            )}
          </div> : 'Add some items...'}
      </div>

    </div>
  )
}

export default App;