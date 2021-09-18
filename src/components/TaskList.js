import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDelete }) {
  const taskList = tasks.map((task) => {
    return (
      <Task
        key={task.text}
        category={task.category}
        text={task.text}
        liftOnDelete={onDelete}
      />
    );
  });

  return <div className="tasks">{taskList}</div>;
}

export default TaskList;
