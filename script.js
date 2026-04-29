const rows = document.querySelectorAll(".work-section a");

rows.forEach((row) => {
  row.addEventListener("mouseenter", () => {
    document.documentElement.style.setProperty("--accent", "#c7d0d3");
  });

  row.addEventListener("mouseleave", () => {
    document.documentElement.style.setProperty("--accent", "#9fb7c8");
  });
});

const projectToggles = document.querySelectorAll(".project-toggle");

projectToggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const targetId = toggle.getAttribute("aria-controls");
    const target = document.getElementById(targetId);

    if (!target) return;

    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isOpen));
    toggle.textContent = isOpen ? "View project" : "Hide project";
    target.hidden = isOpen;
  });
});
