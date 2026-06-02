const nav = document.getElementById("mainNav");
const stickyStart = 80;

function handleNavScroll() {
  if (!nav) return;

  if (window.scrollY > stickyStart) {
    nav.classList.add("nav-sticky");
    document.body.classList.add("nav-offset");
  } else {
    nav.classList.remove("nav-sticky");
    document.body.classList.remove("nav-offset");
  }
}

window.addEventListener("scroll", handleNavScroll, { passive: true });
handleNavScroll();
