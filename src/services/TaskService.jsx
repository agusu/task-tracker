class TaskService {
  getTasks() {
    return Promise.resolve([
      {
        name: "Wipe floors",
        description: "Kitchen, living room, bedroom.",
        state: "completed",
        estimate: 1,
      },
      {
        name: "Wash dishes",
        description: "Don't leave the tap running.",
        state: "planned",
        estimate: 0.5,
      },
    ]);
  }
}

export default new TaskService();
