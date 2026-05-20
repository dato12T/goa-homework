const task = document.getElementById("input");
const button = document.getElementById("add");
const tasks = document.getElementById("tasks");

function addTask() {
    const newTask = task.value;

    if (newTask === "") return;

    const newTaskElement = document.createElement("li")
    
    newTaskElement.innerHTML = `
        ${newTask}
        <button onclick="this.parentElement.remove()">Delete</button>
    `;

    tasks.appendChild(newTaskElement);

    task.value = "";
}