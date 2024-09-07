// Function to update styles and highlight the active button
function updateNavStyles(activeSectionId) {
    const navButtons = document.querySelectorAll('.nav-btn');

    navButtons.forEach(button => {
        const sectionId = button.closest('a').getAttribute('href').substring(1);

        // Determine which buttons should have white-active or blue-active classes
        if (activeSectionId === 'home' || activeSectionId === 'experience' || activeSectionId === 'projects') {
            button.classList.remove('blue-active');
            button.classList.add('white-active');
        } else {
            button.classList.remove('white-active');
            button.classList.add('blue-active');
        }

        // Highlight the active button
        if (sectionId === activeSectionId) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

// IntersectionObserver callback
function handleIntersection(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute('id');
            updateNavStyles(sectionId);
        }
    });
}

// Create an IntersectionObserver
const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.9 // Trigger when 50% of the section is in view
});

// Observe each section
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Add click event listeners to buttons
document.querySelectorAll('.nav-btn').forEach(button => {
    button.addEventListener('click', function() {
        const sectionId = this.closest('a').getAttribute('href').substring(1);

        // Scroll to the section
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });

        // Update the styles based on the clicked button
        updateNavStyles(sectionId);
    });
});
