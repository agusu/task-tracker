import TaskService from "../services/TaskService";
/*
enum TaskState {
  COMPLETED = "Completed",
  IN_PROGRESS = "In progress",
  PLANNED = "Planned"
}
*/
import { useState, useEffect } from "react";

export default function TaskList() {
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

  const mapBgColor = (task) => {
    switch (task.state) {
      case "completed":
        return "bg-green-200";
      case "in-progress":
        return "bg-yellow-200";
      default:
        return "bg-white";
    }
  };

  return (
    <ul className="">
      {tasks &&
        tasks.map((task) => (
          <li
            key={task.name}
            className={`mx-auto max-w-xs p-5 my-5 rounded-lg shadow-lg ${mapBgColor(
              task
            )}`}
          >
            <div className="flex items-center justify-start space-x-auto min-w-full">
              <h3 className="text-slate-900 font-semibold basis-2/3">{task.name}</h3>
              <select
                className="rounded-lg bg-gray-100 px-1 border border-blue-200 text-slate-500 hover:rounded-lg"
                value={task.state}
                onChange={(event) => {
                  handleChangeState(task, event.target.value);
                }}
              >
                <option value="completed">Completed</option>
                <option value="in-progress">In progress</option>
                <option value="planned">Planned</option>
              </select>
            </div>
            <p className="text-slate-500 text-sm">{task.description}</p>
          </li>
        ))}
    </ul>
  );
}

/*

  return (
    <ul>
      {tasks &&
        tasks.map((task) => <Task key={task.name} task={task}/>)}
    </ul>
  );
}
*/
