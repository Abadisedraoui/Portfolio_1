(() => {
  const ENDPOINT = 'https://formspree.io/f/mgaoewzl';
  const EMAIL = 'zainab.abadi.s@gmail.com';
  let dialog;

  const build = () => {
    dialog = document.createElement('dialog');
    dialog.className = 'contact-dialog';
    dialog.setAttribute('aria-labelledby', 'contact-title');
    dialog.innerHTML = `
      <div class="contact-panel">
        <div class="contact-head">
          <h2 id="contact-title">Let's chat</h2>
          <button type="button" class="contact-close" aria-label="Close contact form">&times;</button>
        </div>
        <form class="contact-form" action="${ENDPOINT}" method="POST">
          <p class="contact-note">Tell me a bit about the role or project. I'll reply by email. All fields are required.</p>
          <label for="contact-name">Your name</label>
          <input id="contact-name" name="name" type="text" autocomplete="name" required autofocus>
          <label for="contact-email">Your email</label>
          <input id="contact-email" name="email" type="email" autocomplete="email" required>
          <label for="contact-message">Message</label>
          <textarea id="contact-message" name="message" rows="5" required></textarea>
          <input type="text" name="_gotcha" tabindex="-1" autocomplete="off" class="contact-trap" aria-hidden="true">
          <div class="contact-actions"><button type="submit" class="button">Send</button></div>
          <p class="contact-status" role="status" aria-live="polite"></p>
          <p class="contact-fine">Sent through Formspree. <a href="privacy.html">Privacy</a>. Prefer plain email? <a href="mailto:${EMAIL}">${EMAIL}</a></p>
        </form>
        <div class="contact-done" hidden tabindex="-1">
          <h2>Message sent</h2>
          <p>Thanks. I'll get back to you soon.</p>
          <button type="button" class="button button-secondary contact-close-done">Close</button>
        </div>
      </div>`;
    document.body.appendChild(dialog);

    const close = () => dialog.close();
    dialog.querySelector('.contact-close').addEventListener('click', close);
    dialog.querySelector('.contact-close-done').addEventListener('click', close);
    dialog.addEventListener('click', (event) => { if (event.target === dialog) close(); });
    dialog.querySelector('form').addEventListener('submit', submit);
  };

  const submit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const status = form.querySelector('.contact-status');
    const send = form.querySelector('[type="submit"]');
    status.textContent = '';
    if (!form.checkValidity()) { form.reportValidity(); return; }
    send.disabled = true;
    send.textContent = 'Sending...';
    try {
      const response = await fetch(ENDPOINT, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
      if (!response.ok) throw new Error('failed');
      form.reset();
      form.hidden = true;
      const done = dialog.querySelector('.contact-done');
      done.hidden = false;
      done.focus();
    } catch (_) {
      status.textContent = `That didn't send. Please try again or email ${EMAIL}.`;
    } finally {
      send.disabled = false;
      send.textContent = 'Send';
    }
  };

  const open = (event) => {
    if (!window.HTMLDialogElement) return;
    event.preventDefault();
    if (!dialog) build();
    dialog.querySelector('form').hidden = false;
    dialog.querySelector('.contact-done').hidden = true;
    dialog.querySelector('.contact-status').textContent = '';
    dialog.showModal();
  };

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-contact]').forEach((link) => link.addEventListener('click', open));
  });
})();
