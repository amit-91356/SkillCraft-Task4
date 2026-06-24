function addTask(){

    let taskInput = document.getElementById("taskInput");
    let taskDate = document.getElementById("taskDate");
    let taskList = document.getElementById("taskList");

    if(taskInput.value === ""){
        alert("Enter Task");
        return;
    }

    let li = document.createElement("li");

    li.innerHTML = `
        <span>${taskInput.value} (${taskDate.value})</span>
        <div>
            <button onclick="completeTask(this)">✓</button>
            <button onclick="deleteTask(this)">🗑</button>
        </div>
    `;

    taskList.appendChild(li);

    taskInput.value = "";
    taskDate.value = "";
}

function completeTask(button){
    button.parentElement.parentElement.classList.toggle("completed");
}

function deleteTask(button){
    button.parentElement.parentElement.remove();
}
