class TaskService {
    getTasks() {
        return Promise.resolve([
            {
                name: "Wipe floors",
                description: "Kitchen, living room, bedroom.",
                state: "completed",
                estimate: 2,
            },
            {
                name: "Wash dishes",
                description: "Don't leave the tap running.",
                state: "planned",
                estimate: 1,
            },
        ]);
    }
}

export default new TaskService();
