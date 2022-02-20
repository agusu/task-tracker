class TaskService {
  getTasks() {
    return Promise.resolve([
      {
        name: "Wipe floors",
        description: "Kitchen, living room, bedroom.",
        state: "completed",
        estimate: "1h.",
      },
      {
        name: "Wash dishes",
        description: "Don't leave the tap running.",
        state: "planned",
        estimate: "1h.",
      },
    ]);
  }
}

export default new TaskService();
