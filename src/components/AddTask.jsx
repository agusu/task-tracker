import { Button, Grid, Input, InputAdornment, TextField } from "@mui/material";
import { AddCircle } from "@mui/icons-material";
import React from "react";

export default function AddTask({ handleAddTask }) {
    const [task, setTask] = React.useState("");
    const [estimate, setEstimate] = React.useState(0);
    const [description, setDescription] = React.useState("");

    const handleChangeTask = (event) => {
        setTask(event.target.value);
    };

    const handleChangeEstimate = (event) => {
        setEstimate(event.target.value);
    };

    const handleChangeDescription = (event) => {
        setDescription(event.target.value);
    };

    const onClickAddTask = () => {
        /*
      handleAddTask({
            task: task,
            description: description,
            estimate: estimate,
            state: "planned",
        });*/
        clearState();
    };

    const clearState = () => {
        setTask("");
        setEstimate(0);
        setDescription("");
    };

    return (
        <div className="mx-auto min-w-sm max-w-sm p-5 my-5 rounded-xl shadow-lg">
            <Grid container spacing={1} columns={3}>
                <Grid item>
                    <TextField placeholder="Walk the dog" label="Task Title" value={task} onChange={handleChangeTask} />
                </Grid>

                <Grid item alignSelf="center" sx={{ ml: 2 }}>
                    <Button variant="contained" startIcon={<AddCircle />} onClick={onClickAddTask}>
                        Add
                    </Button>
                </Grid>

                {task.length > 0 && (
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

                {task.length > 0 && (
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
        </div>
    );
}
