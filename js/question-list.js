document.addEventListener('DOMContentLoaded', function() {
    fetch('questions.json') // Adjust the path as necessary
        .then(response => response.json())
        .then(questions => {
            const listElement = document.getElementById('questions-list');
            questions.forEach(question => {
                const listItem = document.createElement('li');
                listItem.className = "list-group-item"
                listItem.textContent = question;
                listElement.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error loading questions:', error));
});