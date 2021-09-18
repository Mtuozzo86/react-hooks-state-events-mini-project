import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [categoryName, setCategoryName] = useState("All");

  function handleDelete(text) {
    setTasks(tasks.filter((task) => task.text !== text));
  }

  const filteredTasks = tasks.filter((task) => {
    if (categoryName === task.category) {
      return tasks;
    } else if (categoryName === "All") {
      return true;
    }
  });

  function onTaskFormSubmit(data) {
    setTasks([...tasks, data]);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        setCategoryName={setCategoryName}
        categoryName={categoryName}
      />
      <NewTaskForm
        categories={CATEGORIES.filter((cat) => cat !== "All")}
        onTaskFormSubmit={onTaskFormSubmit}
      />
      <TaskList tasks={filteredTasks} onDelete={handleDelete} />
    </div>
  );
}

export default App;
