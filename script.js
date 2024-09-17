// script.js
document.addEventListener('DOMContentLoaded', () => {
    const addTaskButton = document.getElementById('addTask');
    const taskInput = document.getElementById('taskInput');
    const taskDate = document.getElementById('taskDate');
    const taskList = document.getElementById('taskList');

    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        const taskDateValue = taskDate.value;

        if (taskText !== '') {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <span class="task-text">${taskText} ${taskDateValue ? `- ${new Date(taskDateValue).toLocaleString()}` : ''}</span>
                <button class="edit">Edit</button>
                <button class="complete">Complete</button>
                <button class="delete">Delete</button>
            `;

            taskList.appendChild(listItem);
            taskInput.value = '';
            taskDate.value = '';

            listItem.querySelector('.complete').addEventListener('click', () => {
                listItem.classList.toggle('completed');
            });

            listItem.querySelector('.edit').addEventListener('click', () => {
                const taskTextElement = listItem.querySelector('.task-text');
                const newTaskText = prompt('Edit task:', taskTextElement.textContent);
                if (newTaskText) {
                    taskTextElement.textContent = newTaskText;
                }
            });

            listItem.querySelector('.delete').addEventListener('click', () => {
                listItem.remove();
            });
        }
    });
});