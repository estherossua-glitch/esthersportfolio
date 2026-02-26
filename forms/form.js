const form = document.getElementById('contact-form');
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const loading = document.getElementById('form-loading');
    const error = document.getElementById('form-error');
    const sent = document.getElementById('form-sent');
    const btn = document.getElementById('submit-btn');

    loading.style.display = 'block';
    error.style.display = 'none';
    sent.style.display = 'none';

    const data = new FormData(form);
    
    fetch(form.action, {
      method: 'POST',
      body: data,
      headers: { 'Accept': 'application/json' }
    }).then(response => {
      loading.style.display = 'none';
      if (response.ok) {
        sent.style.display = 'block';
        form.reset();
      } else {
        // This will tell us exactly what Formspree is complaining about
        response.json().then(data => {
          error.innerHTML = "Error: " + data.error;
          error.style.display = 'block';
        });
      }
    }).catch(err => {
      loading.style.display = 'none';
      error.innerHTML = "Network Error. Please upload to a live server to test.";
      error.style.display = 'block';
    });
  });