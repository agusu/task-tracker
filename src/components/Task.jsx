import { Delete } from "@mui/icons-material";
import { Card, CardContent, Typography, CardActions, IconButton, Stack, Divider } from "@mui/material";
import React from "react";

export default function Task({ task, handleChangeState, handleDeleteTask }) {
    const bgColor = (task) => {
        const colors = {
            completed: "rgb(198, 246, 213)",
            "in-progress": "rgb(254 240 138)",
            planned: "#fff",
        };
        return colors[task.state];
    };

    return (
        <Card
            key={task.name}
            elevation={3}
            sx={{
                mb: 3,
                width: { xs: "90%", sm: "60%" },
                minWidth: "250px",
                mx: "auto",
                borderRadius: "0 0 0.6em 0.6em",
                background: bgColor(task),
                textDecoration: task.state === "completed" ? "line-through" : "none",
            }}
        >
            <CardContent>
                <Typography variant="h6">{task.name}</Typography>
                <Stack direction="row" spacing={1}>
                    <Stack direction="column" spacing={0} textAlign="center">
                        <Typography variant="h4">{task.estimate}</Typography>
                        <Typography variant="body2">hour{task.estimate > 1 && "s"}</Typography>
                    </Stack>
                    <Divider orientation="vertical" variant="middle" flexItem />
                    <Typography variant="body1">{task.description}</Typography>
                </Stack>
            </CardContent>

            <CardActions>
                <IconButton onClick={() => handleDeleteTask(task)}>
                    <Delete />
                </IconButton>
                <select
                    className="rounded-lg bg-gray-100 px-1 border border-blue-200 text-slate-500 hover:rounded-lg max-h-8 text-center"
                    value={task.state}
                    onChange={(event) => {
                        handleChangeState(task, event.target.value);
                    }}
                >
                    <option value="planned">Planned</option>
                    <option value="in-progress">In progress</option>
                    <option value="completed">Completed</option>
                </select>
            </CardActions>
        </Card>
    );
}
