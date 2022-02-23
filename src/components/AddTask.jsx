import { Button, Container, Grid, InputAdornment, Paper, TextField } from "@mui/material";
import { AddCircle } from "@mui/icons-material";
import React from "react";

const TASK_TEMPLATE = { name: "", estimate: "", description: "", state: "planned" };

export default function AddTask({ handleAddTask }) {
    const [task, setTask] = React.useState(TASK_TEMPLATE);

    const handleChangeTask = (event) => {
        setTask({ ...task, name: event.target.value });
    };

    const handleChangeEstimate = (event) => {
        setTask({ ...task, estimate: event.target.value });
    };

    const handleChangeDescription = (event) => {
        setTask({ ...task, description: event.target.value });
    };

    const onClickAddTask = () => {
        handleAddTask(task);
        clearState();
    };

    const clearState = () => {
        setTask(TASK_TEMPLATE);
    };

    return (
        <Container maxWidth="xs">
            <Paper sx={{ py: 3, px: 3, my: 3 }}>
                <Grid container spacing={1} columns={3}>
                    <Grid item>
                        <TextField
                            placeholder="Walk the dog"
                            label="Task Title"
                            value={task.name}
                            onChange={handleChangeTask}
                        />
                    </Grid>

                    <Grid item alignSelf="center" sx={{ ml: 2 }}>
                        <Button variant="contained" startIcon={<AddCircle />} onClick={onClickAddTask}>
                            Add
                        </Button>
                    </Grid>

                    {task.name.length > 0 && (
                        <Grid item>
                            <TextField
                                label="Description"
                                placeholder="Don't forget the plastic bags"
                                multiline={true}
                                onChange={handleChangeDescription}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Grid>
                    )}

                    {task.name.length > 0 && (
                        <Grid item alignItems="center" xs={1}>
                            <TextField
                                label="Estimate"
                                type="number"
                                onChange={handleChangeEstimate}
                                InputProps={{
                                    inputProps: { min: 0, step: 0.5 },
                                    endAdornment: <InputAdornment position="end">h</InputAdornment>,
                                }}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Grid>
                    )}
                </Grid>
            </Paper>
        </Container>
    );
}
