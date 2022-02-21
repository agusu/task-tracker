import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import React from "react";

export default function AddTask({ handleAddTask }) {
  const [task, setTask] = React.useState("");

  const handleChangeTask = (event) => {
    setTask(event.target.value);
  };

  return (
    <div className="mx-auto min-w-sm max-w-sm p-5 my-5 rounded-xl shadow-lg">
      <form>
        <div className="grid grid-gap-2 grid-cols-4 items-center">
          <input
            type="text"
            name="newTask"
            id="newTask"
            className="col-span-3 mt-1 py-1 px-2 self-center focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            onChange={handleChangeTask}
          />
          <button
            className={""}
            onClick={(event) => {
              handleAddTask({
                task: task,
                description: "",
                estimate: 1,
                state: "planned",
              });
            }}
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
