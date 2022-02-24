import { createServer, Model } from "miragejs";

export function makeServer() {
    return createServer({
        models: {
            task: Model,
        },
        seeds(server) {
            server.create("task", {
                // @ts-ignore
                id: 1,
                name: "Wipe floors",
                description: "Kitchen, living room, bedroom.",
                state: "completed",
                estimate: 2,
            });
            server.create("task", {
                // @ts-ignore
                id: 2,
                name: "Wash dishes",
                description: "Don't leave the tap running.",
                state: "planned",
                estimate: 1,
            });
        },
        routes() {
            this.namespace = "api";
            this.get("/tasks", (schema, request) => {
                return schema.tasks.all();
            });
            this.post("/task", (schema, request) => {
                let newTask = JSON.parse(request.requestBody);
                return schema.tasks.create(newTask);
            });
            this.patch("/task/:id", (schema, request) => {
                let newAttrs = JSON.parse(request.requestBody);
                let id = request.params.id;
                let task = schema.tasks.find(id);

                return task.update(newAttrs);
            });
            this.delete("/task/:id", (schema, request) => {
                let id = request.params.id;
                return schema.tasks.find(id).destroy();
            });
        },
    });
}
