/*!
* Start Bootstrap - Heroic Features v5.0.2 (https://startbootstrap.com/template/heroic-features)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-heroic-features/blob/master/LICENSE)
*/
function showRandomQuestion() {
    fetch('questions.json')
        .then(response => response.json())
        .then(questions => {
            const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
            document.getElementById('question').innerText = randomQuestion;
        })
        .catch(error => console.error('Error loading questions:', error));
}
