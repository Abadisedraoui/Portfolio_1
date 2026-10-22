(() => {
  const carousels = document.querySelectorAll('[data-about-carousel]');

  carousels.forEach((carousel) => {
    const slides = Array.from(carousel.querySelectorAll('.about-carousel-slide'));
    const dots = Array.from(carousel.querySelectorAll('.about-carousel-dots button'));
    const caption = carousel.querySelector('[data-about-carousel-caption]');
    const prev = carousel.querySelector('.about-carousel-prev');
    const next = carousel.querySelector('.about-carousel-next');
    let current = 0;

    const show = (index) => {
      current = (index + slides.length) % slides.length;
      slides.forEach((slide, i) => {
        const active = i === current;
        slide.classList.toggle('is-active', active);
        slide.setAttribute('aria-hidden', active ? 'false' : 'true');
      });
      dots.forEach((dot, i) => {
        const active = i === current;
        dot.classList.toggle('is-active', active);
        if (active) dot.setAttribute('aria-current', 'true');
        else dot.removeAttribute('aria-current');
      });
      if (caption) caption.textContent = slides[current].dataset.caption || '';
    };

    prev?.addEventListener('click', () => show(current - 1));
    next?.addEventListener('click', () => show(current + 1));
    dots.forEach((dot, index) => dot.addEventListener('click', () => show(index)));

    carousel.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        show(current - 1);
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        show(current + 1);
      }
    });

    show(0);
  });
})();
