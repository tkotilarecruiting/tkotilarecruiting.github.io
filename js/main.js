// Nav scroll behavior
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
});

// Mobile nav toggle
const toggle = document.getElementById('navToggle');
const links = document.getElementById('navLinks');
toggle.addEventListener('click', () => {
  links.classList.toggle('open');
});

// Close mobile nav on link click
links.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => links.classList.remove('open'));
});

// Booking form submit
const form = document.getElementById('bookingForm');
const formWrap = document.getElementById('formWrap');
const successMsg = document.getElementById('formSuccess');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const btn = form.querySelector('.form-submit');
  btn.textContent = 'Sending...';
  btn.disabled = true;

  try {
    const data = new FormData(form);
    const res = await fetch(form.action, {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' }
    });

    if (res.ok) {
      formWrap.style.display = 'none';
      successMsg.style.display = 'block';
    } else {
      throw new Error('Server error');
    }
  } catch {
    btn.textContent = 'Book My Session';
    btn.disabled = false;
    alert('Something went wrong. Please email tkotila717@gmail.com directly to book your session.');
  }
});
