const liquidMenu = document.getElementById("liquidMenu");
const menuButton = document.getElementById("menuButton");
const closeButton = document.getElementById("closeButton");
const navItems = document.querySelectorAll(".nav-item");

let menuOpen = false;
let pointerFrame = null;

function setMenu(open) {
  menuOpen = open;
  liquidMenu.classList.toggle("open", open);

  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute(
    "aria-label",
    open ? "Menu is open" : "Open menu"
  );

  if (open) {
    liquidMenu.style.transform = "translate3d(0, 0, 0)";
  }
}

menuButton.addEventListener("click", (event) => {
  event.stopPropagation();
  setMenu(true);
});

closeButton.addEventListener("click", (event) => {
  event.stopPropagation();
  setMenu(false);
});

/* Closed-state liquid pull toward the normal mouse pointer. */
liquidMenu.addEventListener("pointermove", (event) => {
  if (menuOpen || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  const rect = liquidMenu.getBoundingClientRect();
  const x = event.clientX - (rect.left + rect.width / 2);
  const y = event.clientY - (rect.top + rect.height / 2);
  const distance = Math.hypot(x, y);

  if (distance > 150) return;

  const strength = 0.055;

  cancelAnimationFrame(pointerFrame);
  pointerFrame = requestAnimationFrame(() => {
    liquidMenu.style.transform =
      `translate3d(${x * strength}px, ${y * strength}px, 0)`;
  });
});

liquidMenu.addEventListener("pointerleave", () => {
  cancelAnimationFrame(pointerFrame);
  liquidMenu.style.transform = "translate3d(0, 0, 0)";
});

/* Navigation is interactive now: hover + click state. */
navItems.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    if (!menuOpen) return;

    item.animate(
      [
        { transform: "translateX(0)" },
        { transform: "translateX(5px)" },
        { transform: "translateX(0)" }
      ],
      {
        duration: 360,
        easing: "cubic-bezier(.16,1,.3,1)"
      }
    );
  });

  item.addEventListener("click", (event) => {
    event.preventDefault();

    navItems.forEach((nav) => nav.classList.remove("active"));
    item.classList.add("active");

    item.animate(
      [
        { transform: "translateX(0)" },
        { transform: "translateX(6px)" },
        { transform: "translateX(0)" }
      ],
      {
        duration: 330,
        easing: "cubic-bezier(.16,1,.3,1)"
      }
    );
  });
});

document.addEventListener("click", (event) => {
  if (menuOpen && !liquidMenu.contains(event.target)) {
    setMenu(false);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuOpen) {
    setMenu(false);
  }
});
