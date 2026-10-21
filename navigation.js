/* Shared navigation for the independent portfolio. */
(() => {
  const items = [
    ["Projects", "projects.html", "projects"],
    ["Articles", "articles.html", "articles"],
    ["About", "about.html", "about"],
    ["Experiments", "experiments.html", "experiments"]
  ];
  const page = location.pathname.split("/").pop() || "index.html";
  const current = page === "project.html" || page === "projects.html" || page === "index.html" ? "projects" : page.replace(".html","");
  const navLinks = items.map(([label, href, id]) =>
    '<a class="dock-link' + (current === id ? ' is-current' : '') + '" href="' + href + '"' + (current === id ? ' aria-current="page"' : '') + '>' + label + '</a>'
  ).join("");
  const header = document.querySelector(".topbar");
  if (!header) return;
  header.innerHTML = '<div class="nav-shell"><a class="brand" href="index.html" aria-label="Zainab Abadi — Home"><img src="assets/logo.png" alt="ZA"><span class="brand-name">Zainab Abadi</span></a>' +
    '<nav class="dock-links" aria-label="Primary navigation">' + navLinks + '</nav>' +
    '<div class="dock-actions"><a class="dock-resume" href="assets/robot-cv.pdf" target="_blank" rel="noopener noreferrer" aria-label="Open CV PDF">CV <span aria-hidden="true">↗</span></a><a class="dock-chat" href="mailto:zainab.abadi.s@gmail.com">Let’s chat <span aria-hidden="true">↗</span></a></div>' +
    '<button class="dock-menu-button" type="button" aria-controls="mobile-navigation" aria-expanded="false" aria-label="Open navigation"><span></span><span></span><span></span></button></div>' +
    '<nav class="mobile-navigation" id="mobile-navigation" aria-label="Mobile navigation" hidden>' + navLinks +
    '<div class="mobile-actions"><a href="assets/robot-cv.pdf" target="_blank" rel="noopener noreferrer">CV ↗</a><a href="mailto:zainab.abadi.s@gmail.com">Let’s chat ↗</a></div></nav>';
  const toggle = header.querySelector(".dock-menu-button");
  const menu = header.querySelector("#mobile-navigation");
  const setOpen = on => {
    toggle.setAttribute("aria-expanded", String(on));
    toggle.setAttribute("aria-label", on ? "Close navigation" : "Open navigation");
    menu.hidden = !on;
  };
  toggle.addEventListener("click", () => setOpen(menu.hidden));
  menu.querySelectorAll("a").forEach(link => link.addEventListener("click", () => setOpen(false)));
  document.addEventListener("keydown", e => { if(e.key === "Escape") setOpen(false); });
  document.addEventListener("click", e => { if (!header.contains(e.target)) setOpen(false); });
  window.addEventListener("resize", () => { if(window.innerWidth > 850) setOpen(false); });
})();