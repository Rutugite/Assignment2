// Function to display the modal with car details
function showDetails(name, price, details) {
    document.getElementById('carName').innerText = name;
    document.getElementById('carPrice').innerText = `Price: ${price}`;
    document.getElementById('carDetails').innerText = details;
    document.getElementById('carModal').style.display = 'flex';
}

// Function to close the modal
function closeModal() {
    document.getElementById('carModal').style.display = 'none';
}

// Close the modal if the user clicks outside the modal content
window.onclick = function(event) {
    const modal = document.getElementById('carModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};
