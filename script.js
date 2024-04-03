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

    let currentPhotoIndex = 0;
    const photos = document.querySelectorAll('.photoFrame');

    function showPhoto(index) {
        if (index < 0) {
            index = photos.length - 1;
        } else if (index >= photos.length) {
            index = 0;
        }
        currentPhotoIndex = index;

        photos.forEach(photo => photo.style.display = 'none');
        photos[index].style.display = 'block';
    }

    function nextPhoto() {
        showPhoto(currentPhotoIndex + 1);
    }

    function prevPhoto() {
        showPhoto(currentPhotoIndex - 1);
    }

    showPhoto(currentPhotoIndex);

    // Auto-scrolling functionality
    const intervalTime = 10000; // 10 seconds

    function autoScroll() {
        setInterval(nextPhoto, intervalTime);
    }

    autoScroll();

    // Arrow button functionality
    const nextButton = document.getElementById('nextButton');
    const prevButton = document.getElementById('prevButton');

    nextButton.addEventListener('click', nextPhoto);
    prevButton.addEventListener('click', prevPhoto);
});
