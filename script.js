document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const questions = document.querySelectorAll('.question');
    questions.forEach(function(question) {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const arrow = this.querySelector('.arrow');
            answer.classList.toggle('opened'); // Toggle the "opened" class
            arrow.classList.toggle('opened'); // Toggle the "opened" class for the arrow
        });
    });
});


