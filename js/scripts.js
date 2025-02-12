/*!
* Start Bootstrap - Heroic Features v5.0.2 (https://startbootstrap.com/template/heroic-features)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-heroic-features/blob/master/LICENSE)
*/
let shuffledQuestions = [];
let currentIndex = 0;

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function loadQuestions() {
    fetch('questions.json')
        .then(response => response.json())
        .then(questions => {
            shuffledQuestions = [...questions]; // Copy the array
            shuffleArray(shuffledQuestions); // Shuffle the questions
            currentIndex = 0; // Reset index
            showNextQuestion(); // Show the first question
        })
        .catch(error => console.error('Error loading questions:', error));
}

function showNextQuestion() {
    if (shuffledQuestions.length === 0) {
        console.warn("No questions available. Make sure to call loadQuestions first.");
        return;
    }

    if (currentIndex >= shuffledQuestions.length) {
        console.log("All questions have been shown. Restarting.");
        currentIndex = 0; // Reset to start again if needed
        shuffleArray(shuffledQuestions); // Shuffle again if you want fresh order
    }

    document.getElementById('question').innerText = shuffledQuestions[currentIndex];
    currentIndex++;
}

// Load the questions on page load
window.onload = loadQuestions;
