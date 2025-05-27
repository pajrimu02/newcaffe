// Jalankan setelah DOM selesai dimuat
document.addEventListener("DOMContentLoaded", function () {
  // Feather icons
  feather.replace();

  // Toggle class active
  const navbarNav = document.querySelector(".navbar-nav");
  const hamburger = document.querySelector("#hamburger-menu");

  hamburger.addEventListener("click", function (e) {
    e.stopPropagation();
    navbarNav.classList.toggle("active");
  });

  document.addEventListener("click", function (e) {
    if (!navbarNav.contains(e.target) && !hamburger.contains(e.target)) {
      navbarNav.classList.remove("active");
    }
  });
});
