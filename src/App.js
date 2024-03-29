import React, { useEffect, useState } from "react";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";
import TaskService from "services/TaskService";
import TaskMetrics from "components/TaskMetrics";
import { Alert, Snackbar } from "@mui/material";

export default function App() {
    const [tasks, setTasks] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = () => {
        TaskService.getTasks()
            .then(setTasks)
            .catch((err) => console.error(err));
    };

    const handleChangeState = (task, newState) => {
        TaskService.updateTask(task, newState)
            .then(() => {
                tasks.find((t) => t.name === task.name).state = newState;
                setTasks([...tasks]);
            })
            .catch((err) => setError(err.message));
    };

    const handleDeleteTask = (task) => {
        TaskService.deleteTask(task)
            .then(() => {
                const newTasks = tasks.filter((t) => t.name !== task.name);
                setTasks(newTasks);
            })
            .catch((err) => setError(err.message));
    };

    const handleAddTask = (task) => {
        if (tasks.find((t) => t.name === task.name)) {
            setError("Task already exists!");
            throw new Error("Task already exists!");
        }
        TaskService.addTask(task)
            .then((data) => setTasks([...tasks, data.task]))
            .catch((err) => {
                setError(err.message);
                console.error(err);
            });
    };

    return (
        <>
            <AddTask handleAddTask={handleAddTask} />
            <Snackbar
                open={error !== ""}
                autoHideDuration={6000}
                onClose={() => setError("")}
                anchorOrigin={{ horizontal: "center", vertical: "top" }}
            >
                <Alert severity="error" sx={{ width: "100%" }}>
                    {error}
                </Alert>
            </Snackbar>
            <TaskMetrics tasks={tasks} />
            <TaskList tasks={tasks} handleChangeState={handleChangeState} handleDeleteTask={handleDeleteTask} />
        </>
    );
}
