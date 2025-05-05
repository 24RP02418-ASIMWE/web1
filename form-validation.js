// Newsletter Form Validation
document.getElementById('newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const emailInput = this.querySelector('input[type="email"]');
    
    if (!emailInput.value) {
        alert('Please enter your email address');
        emailInput.focus();
        return;
    }
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
        alert('Please enter a valid email address');
        emailInput.focus();
        return;
    }
    
    // In a real app, you would send this to your server
    alert('Thank you for subscribing to our newsletter!');
    this.reset();
});

// Contact Form Validation (for contact.html)
if (document.getElementById('contact-form')) {
    document.getElementById('contact-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const name = this.querySelector('#name').value.trim();
        const email = this.querySelector('#email').value.trim();
        const message = this.querySelector('#message').value.trim();
        let isValid = true;
        
        // Name validation
        if (!name) {
            document.getElementById('name-error').textContent = 'Name is required';
            isValid = false;
        } else {
            document.getElementById('name-error').textContent = '';
        }
        
        // Email validation
        if (!email) {
            document.getElementById('email-error').textContent = 'Email is required';
            isValid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            document.getElementById('email-error').textContent = 'Invalid email format';
            isValid = false;
        } else {
            document.getElementById('email-error').textContent = '';
        }
        
        // Message validation
        if (!message) {
            document.getElementById('message-error').textContent = 'Message is required';
            isValid = false;
        } else if (message.length < 10) {
            document.getElementById('message-error').textContent = 'Message should be at least 10 characters';
            isValid = false;
        } else {
            document.getElementById('message-error').textContent = '';
        }
        
        if (isValid) {
            // In a real app, you would send this to your server
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        }
    });
}