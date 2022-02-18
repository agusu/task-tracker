import { useState } from "react";

export default function Task({ task, handleChangeState }) {
  const [state, setState] = useState(task.state);

  return (
    <li key={task.name}>
      <select
        value={state}
        onChange={(event) => {
          handleChangeState(task, event.target.value);
        }}
      >
        <option value="completed">Completed</option>
        <option value="in-progress">In progress</option>
        <option value="planned">Planned</option>
      </select>
      {task.name}
    </li>
  );
}
