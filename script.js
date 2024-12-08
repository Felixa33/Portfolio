// Open the Popup
function openPopup(image, title, desc, customClass = '') {
    const popup = document.getElementById('popup');
    popup.classList.remove('hidden'); // Show popup
    document.getElementById('popup-image').src = image;         // Set image
    document.getElementById('popup-title').textContent = title; // Set title
    document.getElementById('popup-desc').textContent = desc;   // Set description

    // Apply custom class if provided
    if (customClass) {
        popup.classList.add(customClass);
    }
}

// Close the Popup
function closePopup() {
    const popup = document.getElementById('popup');
    popup.classList.add('hidden'); // Hide popup

    // Remove any custom classes
    popup.className = 'popup hidden'; // Reset to default classes
}
