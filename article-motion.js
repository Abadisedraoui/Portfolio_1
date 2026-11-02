(() => {
  const section = document.querySelector('.articles-section');
  const button = document.querySelector('.motion-toggle');
  if (!section || !button) return;
  const label = button.querySelector('.ribbon-toggle-text');

  // WCAG 2.2.2: the loops can be paused. Paused shows the finished frame of every thumbnail.
  button.addEventListener('click', () => {
    const paused = section.dataset.motion !== 'paused';
    section.dataset.motion = paused ? 'paused' : 'playing';
    button.classList.toggle('is-paused', paused);
    label.textContent = paused ? 'Play animations' : 'Pause animations';
  });

  // Loops only run while the card is on screen.
  if ('IntersectionObserver' in window) {
    const away = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.target.classList.toggle('is-away', !entry.isIntersecting));
    });
    section.querySelectorAll('.thumb').forEach((thumb) => {
      if (thumb.querySelector('.at-a, .at-travel')) away.observe(thumb);
    });
  }
})();
