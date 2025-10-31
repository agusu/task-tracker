class TaskService {
    async getTasks() {
        let tasks;
        await fetch("/api/tasks", { method: "GET" })
            .then((res) => res.json())
            .then((data) => {
                tasks = data.tasks;
            });
        return tasks;
    }

    async addTask(task) {
        const response = await fetch("/api/task", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(task),
        });
        return response.json();
    }

    async updateTask(task, newState) {
        const response = await fetch(`/api/task/${task.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ state: newState }),
        });
        return response.json();
    }

    async deleteTask(task) {
        const response = await fetch(`/api/task/${task.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });
        return response;
    }
}

export default new TaskService();
