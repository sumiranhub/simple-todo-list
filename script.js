$(document).ready(function () {

    // Load tasks from localStorage or empty array if none
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    // Function to render tasks
    function renderTasks() {
        $("#taskList").empty(); // Clear current list

        tasks.forEach((task, index) => {
            $("#taskList").append(`
                <li>
                    ${task}
                    <button class="delete" data-index="${index}">X</button>
                </li>
            `);
        });

        // Save tasks in localStorage
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    // Add task button click
    $("#addTask").click(function () {
        let task = $("#taskInput").val().trim();
        if (task !== "") {
            tasks.push(task);       // Add to array
            $("#taskInput").val(""); // Clear input
            renderTasks();          // Re-render list
        }
    });

    // Delete task using event delegation
    $("#taskList").on("click", ".delete", function () {
        let index = $(this).data("index");
        tasks.splice(index, 1);  // Remove task from array
        renderTasks();            // Re-render list
    });

    // Render initially
    renderTasks();
});