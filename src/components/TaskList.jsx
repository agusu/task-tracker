import React from "react";
/*
enum TaskState {
  COMPLETED = "Completed",
  IN_PROGRESS = "In progress",
  PLANNED = "Planned"
}
*/

export default function TaskList({ tasks, handleChangeState }) {
    const mapBgColor = (task) => {
        switch (task.state) {
            case "completed":
                return "bg-green-200";
            case "in-progress":
                return "bg-yellow-200";
            default:
                return "bg-white";
        }
    };

    return (
        <ul className="">
            {tasks &&
                tasks.map((task, index) => (
                    <li
                        key={task.name + index}
                        className={`mx-auto space-x-5 flex items-center min-w-sm max-w-sm p-5 my-5 rounded-xl shadow-lg  ${mapBgColor(
                            task
                        )}`}
                    >
                        <div className="flex flex-col-reverse gap-y-1">
                            <select
                                className="rounded-lg bg-gray-100 px-1 border border-blue-200 text-slate-500 hover:rounded-lg max-h-8 text-sm text-center"
                                value={task.state}
                                onChange={(event) => {
                                    handleChangeState(task, event.target.value);
                                }}
                            >
                                <option value="completed">Completed</option>
                                <option value="in-progress">In progress</option>
                                <option value="planned">Planned</option>
                            </select>
                            <div className={`grow-0 pt-1 text-xs text-center leading-none `}>
                                <span className="text-2xl font-semibold">{task.estimate}</span> h.
                            </div>
                        </div>
                        <div className="w-md min-h-full space-y-1 place-self-start">
                            <h3 className="text-slate-900 font-semibold text-lg">{task.name}</h3>
                            <div className="max-w-sm">
                                <p className="text-slate-500 text-sm">{task.description}</p>
                            </div>
                        </div>
                    </li>
                ))}
        </ul>
    );
}

/*
CIRCULO
              <div
                className={`grow-0 h-16 w-16 mx-auto pt-1 bg-gray-200 rounded-full border border-blue-500 text-xs text-center leading-none items-center`}
              >
                <span className="text-2xl font-semibold">{task.estimate}</span>
                <br />
                min
              </div>
  return (
    <ul>
      {tasks &&
        tasks.map((task) => <Task key={task.name} task={task}/>)}
    </ul>
  );
}
*/
