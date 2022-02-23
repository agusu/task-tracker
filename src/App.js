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
        tasks.find((t) => t.name === task.name).state = newState;
        setTasks([...tasks]);
    };

    const handleDeleteTask = (task) => {
        const newTasks = tasks.filter((t) => t.name !== task.name);
        setTasks(newTasks);
    };

    const handleAddTask = (task) => {
        // TaskService.add(task).then(setTasks).catch((err) => {setError(err.message); console.error(err)});
        if (tasks.find((t) => t.name === task.name)) {
            setError("Task already exists!");
            throw new Error("Task already exists!");
        } else {
            setTasks([...tasks, task]);
        }
    };

    return (
        <>
            <AddTask handleAddTask={handleAddTask} />
            <Snackbar open={error !== ""} autoHideDuration={6000} onClose={() => setError("")}>
                <Alert severity="error" sx={{ width: "100%" }}>
                    {error}
                </Alert>
            </Snackbar>
            <TaskMetrics tasks={tasks} />
            <TaskList tasks={tasks} handleChangeState={handleChangeState} handleDeleteTask={handleDeleteTask} />
        </>
    );
}

/*
    useEffect(() => {
        console.log(tasks);
    }, [tasks]);

    */
