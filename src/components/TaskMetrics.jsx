import { Box } from "@mui/system";
import React, { useEffect } from "react";

const INITIAL_COUNT_STATE = {
    planned: 0,
    completed: 0,
    "in-progress": 0,
};

export default function TaskMetrics({ tasks }) {
    const [count, setCount] = React.useState(INITIAL_COUNT_STATE);

    useEffect(() => {
        const newCount = { ...INITIAL_COUNT_STATE };
        tasks.forEach((task) => {
            newCount[task.state] += task.estimate;
        });
        setCount({ ...newCount });
    }, [tasks]);

    return (
        <>
            <Box sx={{ mx: "auto", width: "30vw" }} textAlign="center">
                <div>Planned: {count.planned} h.</div>
                <div>In Progress: {count["in-progress"]} h.</div>
                <div>Completed: {count.completed} h.</div>
            </Box>
        </>
    );
}
