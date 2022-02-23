import { Button, Container, Grid, InputAdornment, Paper, TextField, Typography } from "@mui/material";
import { AddCircle } from "@mui/icons-material";
import React from "react";

const TASK_TEMPLATE = { name: "", estimate: "", description: "", state: "planned" };

export default function AddTask({ handleAddTask }) {
    const [task, setTask] = React.useState(TASK_TEMPLATE);
    const [fieldError, setFieldError] = React.useState({ name: false, estimate: false });

    const handleChangeTask = (event) => {
        if (event.target.value === "") {
            setFieldError({ ...fieldError, name: true });
        } else {
            setFieldError({ ...fieldError, name: false });
        }
        setTask({ ...task, name: event.target.value });
    };

    const handleChangeEstimate = (event) => {
        if (isNaN(event.target.value) || Number(event.target.value) < 0 || Number(event.target.value) > 99) {
            setFieldError({ ...fieldError, estimate: true });
        } else {
            setFieldError({ ...fieldError, estimate: false });
        }
        setTask({ ...task, estimate: event.target.value });
    };

    const handleChangeDescription = (event) => {
        setTask({ ...task, description: event.target.value });
    };

    const onSubmit = () => {
        try {
            handleAddTask({ ...task, estimate: Number(task.estimate) });
            clearState();
        } catch (error) {
            console.error(error);
        }
    };

    const clearState = () => {
        setTask(TASK_TEMPLATE);
    };

    return (
        <Container maxWidth="xs">
            <Typography textAlign="center" variant="h4" sx={{ my: 3, fontWeight: "bold" }}>
                Task Tracker
            </Typography>
            <Paper sx={{ p: 3, my: 3 }}>
                <Grid container spacing={2} columns={1}>
                    <Grid item sx={{ width: { xs: "100%" } }}>
                        <TextField
                            placeholder="Walk the dog"
                            label="New Task"
                            value={task.name}
                            onChange={handleChangeTask}
                            error={fieldError.name}
                            inputProps={{
                                autoComplete: "off",
                            }}
                            sx={{ width: "100%" }}
                        />
                    </Grid>

                    {task.name.length > 0 && (
                        <Grid item>
                            <TextField
                                label="Estimated time"
                                type="number"
                                onChange={handleChangeEstimate}
                                InputProps={{
                                    inputProps: { min: 0, max: 24 },
                                    autoComplete: "off",
                                    endAdornment: <InputAdornment position="end">h</InputAdornment>,
                                }}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                error={fieldError.estimate}
                                sx={{ width: { xs: "100%", sm: "7em" } }}
                            />
                        </Grid>
                    )}

                    {task.name.length > 0 && (
                        <Grid item sx={{ width: "100%" }}>
                            <TextField
                                label="Description"
                                placeholder="Don't forget the plastic bags"
                                multiline={true}
                                onChange={handleChangeDescription}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                sx={{ width: "100%" }}
                            />
                        </Grid>
                    )}

                    <Grid item alignSelf="center" sx={{ mx: "auto" }}>
                        <Button
                            variant="contained"
                            startIcon={<AddCircle />}
                            onClick={onSubmit}
                            sx={{ width: "100%" }}
                            disabled={fieldError.name || fieldError.estimate || task.estimate === ""}
                        >
                            Add
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
}
