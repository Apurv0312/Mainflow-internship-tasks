document.addEventListener('DOMContentLoaded', function() {
    // Menu interaction
    const menuItems = document.querySelectorAll('nav ul li a');
    const contentArea = document.getElementById('content');

    menuItems.forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            loadContent(event.target.id);
        });
    });

    function loadContent(page) {
        let content = '';
        switch(page) {
            case 'home':
                content = '<h2>Home</h2><p>Welcome to the home page!</p>';
                break;
            case 'about':
                content = '<h2>About</h2><p>This is an interactive webpage.</p>';
                break;
            case 'contact':
                content = '<h2>Contact</h2><p>Fill out the form below to contact us.</p>';
                break;
            default:
                content = '<p>Click on the menu items to load content dynamically.</p>';
        }
        contentArea.innerHTML = content;
    }

    // Form validation and submission
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Basic client-side validation
        const name = sanitizeInput(document.getElementById('name').value);
        const email = sanitizeInput(document.getElementById('email').value);
        const message = sanitizeInput(document.getElementById('message').value);

        if (name && email && message) {
            alert('Form submitted successfully!');
            // Process the form data securely here
        } else {
            alert('Please fill in all fields.');
        }
    });

    function sanitizeInput(input) {
        // Prevent XSS by escaping special characters
        return input.replace(/&/g, '&amp;')
                    .replace(/</g, '&lt;')
                    .replace(/>/g, '&gt;')
                    .replace(/"/g, '&quot;')
                    .replace(/'/g, '&#x27;')
                    .replace(/\//g, '&#x2F;');
    }
});