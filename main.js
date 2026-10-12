document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".desktop-nav");

  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const isOpen = nav.style.display === "flex";
    nav.style.display = isOpen ? "none" : "flex";
    nav.style.position = "absolute";
    nav.style.top = "100%";
    nav.style.left = "1rem";
    nav.style.right = "1rem";
    nav.style.background = "#f4f3ee";
    nav.style.border = "1px solid rgba(23,27,25,0.08)";
    nav.style.borderRadius = "1rem";
    nav.style.padding = "1rem";
    nav.style.flexDirection = "column";
    nav.style.alignItems = "flex-start";
    toggle.setAttribute("aria-expanded", String(!isOpen));
  });
});
