import { Container, Divider, Stack, styled, Typography, useMediaQuery, useTheme } from "@mui/material";
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
    fontSize: "1.8rem",
    fontWeight: "bold",
    [theme.breakpoints.down("sm")]: {
        fontSize: "1.3rem",
    },
}));

export default function TaskMetrics({ tasks }) {
    const [count, setCount] = React.useState(INITIAL_COUNT_STATE);
    const theme = useTheme();
    const smallViewport = useMediaQuery(theme.breakpoints.down("sm"));

    useEffect(() => {
        const newCount = { ...INITIAL_COUNT_STATE };
        tasks.forEach((task) => {
            newCount[task.state] += task.estimate;
        });
        setCount({ ...newCount });
    }, [tasks]);

    const formatHours = (hours) => {
        // if hours > 24, then format as days + hours.
        return hours > 24 ? Math.round(hours / 24) + " d., " + Math.round(hours % 24) + " h." : hours + " h.";
    };

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
                        <CountTime>
                            🗒️ {smallViewport && <br />}
                            {formatHours(count.planned)}
                        </CountTime>
                        Planned
                    </CountDisplay>
                    <CountDisplay>
                        <CountTime sx={{ color: "orange" }}>
                            ⏳{smallViewport && <br />} {formatHours(count["in-progress"])}{" "}
                        </CountTime>
                        In Progress
                    </CountDisplay>
                    <CountDisplay>
                        <CountTime sx={{ color: "green" }}>
                            🎉{smallViewport && <br />} {formatHours(count.completed)}{" "}
                        </CountTime>
                        Completed
                    </CountDisplay>
                </Stack>
            </Container>
        </>
    );
}
