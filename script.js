// script.js

// Smooth scroll to sections
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const target = document.querySelector(targetId);
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Simple scroll reveal animation
const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.transform = 'translateY(0)';
      entry.target.style.opacity = '1';
    }
  });
}, {
  threshold: 0.1
});

cards.forEach(card => {
  card.style.transform = 'translateY(50px)';
  card.style.opacity = '0';
  card.style.transition = 'all 0.6s ease-out';
  observer.observe(card);
});

// Subscribe button alert
const subscribeButton = document.querySelector('.subscribe button');
subscribeButton.addEventListener('click', () => {
  alert('تم الاشتراك بنجاح!');
});
document.querySelector(".subscribe button").addEventListener("click", function () {
  const email = document.querySelector(".subscribe input").value;

  fetch("backend/subscribe.php", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: "email=" + encodeURIComponent(email),
  })
    .then((res) => res.text())
    .then((data) => alert(data));
});
