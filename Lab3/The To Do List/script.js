document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("todo-form");
    const input = document.getElementById("todo-input");
    const list = document.getElementById("todo-list");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        addTask(input.value.trim());
        input.value = "";
    });

    function addTask(taskText) {
        if (taskText === "") return;

        let li = document.createElement("li");
        let taskDiv = createTaskElement(taskText, li);
        
        li.appendChild(taskDiv);
        li.appendChild(createDeleteButton(li));
        
        list.appendChild(li);
    }

    function createTaskElement(taskText, li) {
        let taskDiv = document.createElement("div");
        taskDiv.classList.add("task");

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.onchange = function () {
            toggleComplete(taskSpan);
        };

        let taskSpan = document.createElement("span");
        taskSpan.textContent = taskText;

        taskDiv.appendChild(checkbox);
        taskDiv.appendChild(taskSpan);

        return taskDiv;
    }

    function createDeleteButton(li) {
        let deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete-btn");
        deleteBtn.innerHTML = '<i class="bi bi-trash3" style="color: red;"></i>';
        deleteBtn.onclick = function () {
            deleteTask(li);
        };
        return deleteBtn;
    }

    function deleteTask(taskItem) {
        list.removeChild(taskItem);
    }

    function toggleComplete(taskSpan) {
        taskSpan.classList.toggle("completed");
    }
});



