import React, { useEffect } from "react";

export default function TaskMetrics({ tasks }) {
    const [totalPlanned, setTotalPlanned] = React.useState(0);
    const [totalInProgress, setTotalInProgress] = React.useState(0);
    const [totalCompleted, setTotalCompleted] = React.useState(0);

    useEffect(() => {
        debugger;
        tasks.forEach((task) => {
            switch (task.state) {
                case "completed":
                    setTotalCompleted(totalCompleted + task.estimate);
                    break;
                case "in-progress":
                    setTotalInProgress(totalInProgress + task.estimate);
                    break;
                default:
                    setTotalPlanned(totalPlanned + task.estimate);
                    break;
            }
        });
    }, [tasks]);

    return (
        <>
            Planned: {totalPlanned}. In Progress: {totalInProgress}. Completed: {totalCompleted}
        </>
    );
}
