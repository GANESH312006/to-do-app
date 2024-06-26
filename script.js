const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');
const modal = document.querySelector('.modal-enter-task');


const createTaskElement = taskName => {
  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove';

  const task = document.createElement('li');
  task.textContent = taskName;
  task.appendChild(removeBtn);

  taskInput.value = '';

  // Remove task.
  removeBtn.addEventListener('click', () => {
    taskList.removeChild(task);
  });

  return task;
};

addTaskBtn.addEventListener('click', () => {
  if (taskInput.value !== '') {
    const task = createTaskElement(taskInput.value);
    taskList.appendChild(task);
  } else {
    modal.classList.remove('hidden');
    setTimeout(() => {
      modal.classList.add('hidden');
    }, 2000);
  }
});

// To check whether the taskinput has placeholder text. If yes, it removes the text else not
if (taskInput) {
  const updatePlaceHolder = text => {
    taskInput.placeholder = text;
  };

  taskInput.addEventListener('focus', () => {
    updatePlaceHolder('');
  });

  taskInput.addEventListener('blur', () => {
    updatePlaceHolder('New Task');
  });
}
