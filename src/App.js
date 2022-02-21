import React, { useEffect, useState } from "react";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";
import TaskService from "services/TaskService";

export default function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = () => {
    TaskService.getTasks()
      .then(setTasks)
      .catch((err) => console.error(err));
  };

  const handleChangeState = (task, newState) => {
    tasks.find((t) => t.name === task.name).state = newState;
    setTasks([...tasks]);
  };

  const handleAddTask = (task) => {
    // TaskService.add(task).then(setTasks).catch((err) => console.error(err));
    setTasks([...tasks, task]);
    debugger;
  };

  return (
    <>
      <AddTask handleAddTask={handleAddTask} />
      <TaskList tasks={tasks} handleChangeState={handleChangeState} />
    </>
  );
}
