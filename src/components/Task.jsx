import React from "react";
import { useState } from "react";

export default function Task({ task, handleChangeState }) {
  return (
    <li key={task.name}>
      <select
        value={task.state}
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
