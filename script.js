document.addEventListener('DOMContentLoaded', () => {
  // Get the container
  const genreList = document.querySelector('.genre-list');

  // Generate genre cards and apply invisible class
  genres.forEach((genre) => {
    const card = document.createElement('div');
    card.className = 'genre-card invisible'; // Add invisible for animation
    card.innerHTML = `
      <img src="${genre.image}" alt="${genre.title}">
      <h3>${genre.title}</h3>
      <p>${genre.description}</p>
    `;
    genreList.appendChild(card);
  });

  // Scroll animation using IntersectionObserver
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // Stop observing once visible
        }
      });
    },
    {
      threshold: 0.2 // Trigger when 20% of the card is visible
    }
  );

  // Observe all cards
  document.querySelectorAll('.genre-card').forEach(card => {
    observer.observe(card);
  });
});

