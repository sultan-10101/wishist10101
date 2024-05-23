const taskCheckboxes = document.querySelectorAll('.task-checkbox');

taskCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', toggleTaskCompletion);
});

function toggleTaskCompletion(event) {
    const checkbox = event.target;
    const taskText = checkbox.nextElementSibling;
  
    if (checkbox.checked) {
      taskText.classList.add('completed');
      alert("Task Completed :)");
    } else {
      taskText.classList.remove('completed');
      alert("Task Pending :(");
    }
  }