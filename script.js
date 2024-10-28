document.addEventListener('DOMContentLoaded', () => {
    const addTaskButton = document.getElementById('addTaskButton');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
document.body.style.back
    // Function to add a task
    function addTask() {
        const taskValue = taskInput.value.trim();
        if (taskValue === '') return; // Avoid adding empty tasks
        const li = document.createElement('li');
        li.textContent = taskValue;
        // Create a delete button

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        const deleteButton = document.createElement('button');

        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete';
        // eaditButton.textContent='Eadit';
        // eaditButton.className='eadit';
        deleteButton.onclick = function()
        // 
        {
            taskList.removeChild(li);
        };
        checkbox.addEventListener('change', function() {
            if (checkbox.checked) {
                li.style.textDecoration = 'line-through';
            } else {
                li.style.textDecoration = 'none';
            }
        });
        
        li.appendChild(checkbox);
        li.appendChild(deleteButton);
        taskList.appendChild(li);
        taskInput.value = ''; // Clear input field
    }
    // Add task on button click
    addTaskButton.addEventListener('click', addTask);
    // Add task on Enter key press
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});