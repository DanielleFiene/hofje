let currentIndex = 0;
const images = document.querySelectorAll('.gallery__item img');

// Open the modal with the selected image
function openModal(index) {
    currentIndex = index;
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    modalImage.src = images[currentIndex].src;
    modal.style.display = 'block';
}

// Close the modal when the close button is clicked
function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';
}

// Change image in the modal based on direction (-1 for previous, 1 for next)
function changeImage(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = images.length - 1; // Go to last image if we are at the beginning
    } else if (currentIndex >= images.length) {
        currentIndex = 0; // Go to the first image if we are at the end
    }
    const modalImage = document.getElementById('modalImage');
    modalImage.src = images[currentIndex].src;
}

// Add event listeners to the previous and next buttons
document.getElementById('prevBtn').addEventListener('click', function() {
    changeImage(-1);  // Go to the previous image
});

document.getElementById('nextBtn').addEventListener('click', function() {
    changeImage(1);   // Go to the next image
});
