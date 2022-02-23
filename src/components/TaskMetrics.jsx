import { Container, Divider, Stack, styled, Typography } from "@mui/material";
import React, { useEffect } from "react";

const INITIAL_COUNT_STATE = {
    planned: 0,
    completed: 0,
    "in-progress": 0,
};

const CountDisplay = styled("div")(({ theme }) => ({
    textAlign: "center",
}));

const CountTime = styled(Typography)(({ theme }) => ({
    fontSize: "2rem",
    fontWeight: "bold",
}));

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
            <Container maxWidth="md" sx={{ minWidth: "20rem" }}>
                <Stack
                    direction="row"
                    spacing={1}
                    alignItems="center"
                    justifyContent="space-around"
                    divider={<Divider orientation="vertical" variant="middle" flexItem />}
                >
                    <CountDisplay>
                        <CountTime>🗒️ {count.planned} h.</CountTime>
                        Planned
                    </CountDisplay>
                    <CountDisplay>
                        <CountTime sx={{ color: "orange" }}>⏳ {count["in-progress"]} h.</CountTime>
                        In Progress
                    </CountDisplay>
                    <CountDisplay>
                        <CountTime sx={{ color: "green" }}>🎉 {count.completed} h.</CountTime>
                        Completed
                    </CountDisplay>
                </Stack>
            </Container>
        </>
    );
}
