function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();
    if (taskText === "") return;

    let li = document.createElement("li");
    let taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;
    
    let completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";
    completeBtn.className = "complete";
    completeBtn.onclick = function() {
        taskSpan.classList.toggle("completed");
    };
    
    let removeBtn = document.createElement("button");
    removeBtn.textContent = "X";
    removeBtn.className = "remove";
    removeBtn.onclick = function() {
        li.remove();
    };
    
    li.appendChild(taskSpan);
    li.appendChild(completeBtn);
    li.appendChild(removeBtn);
    
    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";
}
