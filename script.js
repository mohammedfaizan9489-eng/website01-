document.querySelectorAll('.order-btn').forEach((button) => {
  button.addEventListener('click', () => {
    const originalText = button.textContent;

    button.textContent = 'thankyou';
    button.classList.add('ordered');
    button.disabled = true;

    setTimeout(() => {
      button.textContent = 'Thank you!';
    }, 800);

    setTimeout(() => {
      button.textContent = originalText;
      button.classList.remove('ordered');
      button.disabled = false;
    }, 2000);
  });
});

const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    formMessage.textContent = 'Please fill in all fields before sending your message.';
    formMessage.className = 'form-message error';
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    formMessage.textContent = 'Please enter a valid email address.';
    formMessage.className = 'form-message error';
    return;
  }

  formMessage.textContent = 'Thank you! Your message has been sent successfully.';
  formMessage.className = 'form-message success';
  contactForm.reset();
});
