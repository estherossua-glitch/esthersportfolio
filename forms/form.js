// First, include this in your HTML <head>: 
// <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>

(function() {
    // This connects the script to your account
    emailjs.init("YOUR_PUBLIC_KEY"); 
})();

const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // These parameters match the variables in your EmailJS template
    const templateParams = {
        from_name: document.getElementById('user_name').value,
        user_email: "estherossua@gmail.com", // Your destination email
        reply_to: document.getElementById('user_email').value,
        message: document.getElementById('message').value
    };

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
        .then(function(response) {
           alert('SUCCESS! Message sent to Esther.');
           contactForm.reset();
        }, function(error) {
           alert('FAILED... check console for error');
           console.log('FAILED...', error);
        });
});