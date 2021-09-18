import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [details, setDetails] = useState("");
  const [cat, setCat] = useState("Code");

  const optionElements = categories.map((category) => {
    return <option key={category}>{category}</option>;
  });

  function onHandleSubmit(e) {
    e.preventDefault();
    const taskData = { text: details, category: cat };
    onTaskFormSubmit(taskData);
  }

  return (
    <form onSubmit={onHandleSubmit} className="new-task-form">
      <label>
        Details
        <input
          type="text"
          name="text"
          onChange={(e) => setDetails(e.target.value)}
        />
      </label>
      <label>
        Category
        <select name="category" onChange={(e) => setCat(e.target.value)}>
          {optionElements}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
