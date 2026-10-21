/* Small enhancements; navigation and page content also work without JavaScript. */
(() => {
  const feedback = document.getElementById("copy-feedback");
  for (const button of document.querySelectorAll("[data-copy-email]")) {
    let timer;
    button.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(button.dataset.copyEmail);
        button.setAttribute("aria-label", "Email address copied");
        if (feedback) feedback.textContent = "Email address copied.";
        clearTimeout(timer);
        timer = setTimeout(() => {
          button.setAttribute("aria-label", "Copy email address");
          if (feedback) feedback.textContent = "";
        }, 2000);
      } catch {
        if (feedback) feedback.textContent = "Select the email address to copy it.";
      }
    });
  }
})();
