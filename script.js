document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('addButton').addEventListener('click', function() {
        let todoInput = document.getElementById('todoInput');
        let todoText = todoInput.value.trim();
        
        if (todoText !== '') {
            let todoList = document.getElementById('todoList');

            let li = document.createElement('li');

            let bulletCheckbox = document.createElement('div');
            bulletCheckbox.classList.add('bullet-checkbox');
            bulletCheckbox.addEventListener('click', function() {
                if (bulletCheckbox.classList.contains('checked')) {
                    bulletCheckbox.classList.remove('checked');
                    span.classList.remove('strikethrough');
                } else {
                    bulletCheckbox.classList.add('checked');
                    span.classList.add('strikethrough');
                }
            });

            let span = document.createElement('span');
            span.textContent = todoText;

            let deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', function() {
                todoList.removeChild(li);
            });

            li.appendChild(bulletCheckbox);
            li.appendChild(span);
            li.appendChild(deleteButton);

            todoList.appendChild(li);
            
            todoInput.value = ''; // Clear the input field
        }
    });
});
