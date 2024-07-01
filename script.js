const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");
const modal = document.querySelector(".modal-enter-task");

// To add task
const addTask = () => {
  if (taskInput.value !== "") {
    const task = createTaskElement(
      taskInput.value,
      taskList.children.length + 1
    );
    taskList.appendChild(task);
  } else {
    modal.classList.remove("hidden");
    setTimeout(() => {
      modal.classList.add("hidden");
    }, 2000);
  }
};

// update the task index
const updateTaskIndex = () => {
  const tasks = Array.from(taskList.getElementsByTagName("li"));
  for (const [index, item] of tasks.entries()) {
    item.firstChild.textContent = `${index + 1}. ${
      item.firstChild.textContent.split(". ")[1]
    }`;
  }
};

// Create task;
const createTaskElement = (taskName, index) => {
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";

  const task = document.createElement("li");
  task.textContent = `${index}. ${taskName}`;
  task.appendChild(removeBtn);

  taskInput.value = "";

  // Remove task.
  removeBtn.addEventListener("click", () => {
    taskList.removeChild(task);
    updateTaskIndex();
  });
  return task;
};

addTaskBtn.addEventListener("click", addTask);

// To check whether the taskinput has placeholder text. If yes, it removes the text else not
if (taskInput) {
  const updatePlaceHolder = text => {
    taskInput.placeholder = text;
  };

  taskInput.addEventListener("focus", () => {
    updatePlaceHolder("");
  });

  taskInput.addEventListener("blur", () => {
    updatePlaceHolder("New Task");
  });
}

// For adding task by pressing Enter
document.querySelector("body").addEventListener("keydown", e => {
  if (e.key === "Enter") {
    addTask();
  }
});
