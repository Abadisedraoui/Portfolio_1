(() => {
  window.__thumbs = true;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');

  const restart = (thumb) => {
    thumb.classList.remove('is-playing', 'is-armed');
    void thumb.offsetWidth;
    thumb.classList.add('is-playing');
  };

  document.querySelectorAll('.thumb').forEach((thumb) => {
    // Reduced motion: keep the finished frame, never animate.
    if (reduce.matches) { thumb.classList.add('is-static'); return; }

    // Armed = animations are loaded but paused on their first frame until the card is on screen.
    thumb.classList.add('is-playing', 'is-armed');
    const host = thumb.closest('a') || thumb;

    const seen = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        thumb.classList.remove('is-armed');
        seen.disconnect();
      }
    }, { threshold: 0.6 });
    seen.observe(thumb);

    const replay = () => { if (!thumb.classList.contains('is-armed')) restart(thumb); };
    host.addEventListener('mouseenter', replay);
    host.addEventListener('focusin', replay);
  });
})();
