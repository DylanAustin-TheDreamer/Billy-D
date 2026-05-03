// Create an Intersection Observer to fade in images as they come into view
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        // Check if the element is visible in the viewport
        if (entry.isIntersecting) {
            // Add the 'visible' class to trigger the fade-in animation
            entry.target.classList.add('visible');
            // Stop observing this element (optional - remove if you want repeated animations)
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.5,     // Trigger when 25% of the element is visible
    rootMargin: '0px',   // Extra space around the viewport (like CSS margin)
    root: null           // null = use the window viewport
});

// Get all elements with the class 'image'
const images = document.querySelectorAll('.image');
const fades = document.querySelectorAll('.fade');

// Start observing each image
images.forEach(image => {
    observer.observe(image);
});
fades.forEach(fade => {
    observer.observe(fade);
});
