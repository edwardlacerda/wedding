document.querySelectorAll("#mobileMenu .nav-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    const offcanvasEl = document.getElementById("mobileMenu");
    const bsOffcanvas = bootstrap.Offcanvas.getOrCreateInstance(offcanvasEl);

    if (href.startsWith("#")) {
      e.preventDefault();
      bsOffcanvas.hide();
      const targetEl = document.querySelector(href);
      if (targetEl) {
        setTimeout(() => {
          targetEl.scrollIntoView({ behavior: "smooth" });
        }, 300);
      }
    } else {
      bsOffcanvas.hide();
    }
  });
});
