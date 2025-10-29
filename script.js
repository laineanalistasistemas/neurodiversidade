const form = document.getElementById("taskForm");
const taskList = document.getElementById("taskList");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("taskName").value;
  const time = document.getElementById("taskTime").value;
  const icon = document.getElementById("taskIcon").value;
  const color = document.getElementById("taskColor").value;

  const task = document.createElement("div");
  task.className = "task";
  task.style.backgroundColor = color;
  task.innerHTML = `${icon} ${time} - ${name}`;

  taskList.appendChild(task);
  form.reset();
});
