(() => {
  const KEY = 'za-analytics-consent';
  const TAG = 'https://t.contentsquare.net/uxa/a67c74590d182.js';

  const read = () => { try { return localStorage.getItem(KEY); } catch (_) { return null; } };
  const write = (value) => { try { localStorage.setItem(KEY, value); } catch (_) {} };
  const clear = () => { try { localStorage.removeItem(KEY); } catch (_) {} };
  const tagLoaded = () => !!document.querySelector(`script[src="${TAG}"]`);

  const loadAnalytics = () => {
    if (tagLoaded()) return;
    const script = document.createElement('script');
    script.async = true;
    script.src = TAG;
    document.head.appendChild(script);
  };

  const closeBanner = (returnFocus) => {
    const banner = document.querySelector('.consent-banner');
    if (!banner) return;
    const hadFocus = banner.contains(document.activeElement);
    banner.remove();
    if (hadFocus && returnFocus && returnFocus.isConnected) returnFocus.focus({ preventScroll: true });
  };

  const showBanner = (opener) => {
    if (document.querySelector('.consent-banner')) return;
    const banner = document.createElement('section');
    banner.className = 'consent-banner';
    banner.setAttribute('aria-labelledby', 'consent-title');
    banner.innerHTML = `
      <h2 id="consent-title">Can I count visits?</h2>
      <p>I use Contentsquare to see which pages people open and where they click, so I can improve this portfolio. It only loads if you accept. <a href="privacy.html">Privacy</a></p>
      <div class="consent-actions">
        <button type="button" class="button button-secondary" data-consent="declined">Decline</button>
        <button type="button" class="button button-secondary" data-consent="accepted">Accept</button>
      </div>`;
    document.body.appendChild(banner);

    banner.addEventListener('click', (event) => {
      const choice = event.target.closest('[data-consent]')?.dataset.consent;
      if (!choice) return;
      write(choice);
      closeBanner(opener);
      if (choice === 'accepted') loadAnalytics();
      else if (tagLoaded()) window.location.reload();
    });
  };

  document.addEventListener('DOMContentLoaded', () => {
    const choice = read();
    if (choice === 'accepted') loadAnalytics();
    else if (choice !== 'declined') showBanner(null);

    document.querySelectorAll('[data-cookie-settings]').forEach((button) => {
      button.addEventListener('click', () => {
        clear();
        showBanner(button);
        document.querySelector('.consent-banner button')?.focus({ preventScroll: true });
      });
    });
  });
})();
