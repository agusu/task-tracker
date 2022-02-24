import { Grid, Container } from "@mui/material";
import React from "react";
import Task from "./Task";

export default function TaskList({ tasks, handleChangeState, handleDeleteTask }) {
  return (
    <Container maxWidth="lg">
      <Grid
        container
        justifyContent="center"
        justifyItems={"center"}
        columns={{ xs: 1, md: 3 }}
        spacing={2}
        sx={{ pt: 3 }}
      >
        <Grid item xs={1}>
          {tasks
            .filter((task) => task.state === "planned")
            .map((task, index) => (
              <Task
                key={task.name}
                task={task}
                handleChangeState={handleChangeState}
                handleDeleteTask={handleDeleteTask}
              />
            ))}
        </Grid>
        <Grid item xs={1}>
          {tasks
            .filter((task) => task.state === "in-progress")
            .map((task, index) => (
              <Task
                key={task.name}
                task={task}
                handleChangeState={handleChangeState}
                handleDeleteTask={handleDeleteTask}
              />
            ))}
        </Grid>
        <Grid item xs={1}>
          {tasks
            .filter((task) => task.state === "completed")
            .map((task, index) => (
              <Task
                key={task.name}
                task={task}
                handleChangeState={handleChangeState}
                handleDeleteTask={handleDeleteTask}
              />
            ))}
        </Grid>
      </Grid>
    </Container>
  );
}
