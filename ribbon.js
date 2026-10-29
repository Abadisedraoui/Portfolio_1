(() => {
  const ribbon = document.querySelector('.ribbon');
  const button = document.querySelector('.ribbon-toggle');
  if (!ribbon || !button) return;
  const label = button.querySelector('.ribbon-toggle-text');
  button.addEventListener('click', () => {
    const paused = ribbon.classList.toggle('is-paused');
    button.classList.toggle('is-paused', paused);
    label.textContent = paused ? 'Play logos' : 'Pause logos';
  });
})();
