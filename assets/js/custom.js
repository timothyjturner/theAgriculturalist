(function () {
    document.addEventListener("DOMContentLoaded", function () {
      const toggleButton = document.querySelector(".navbar-toggler");
      const body = document.querySelector("body");
      const bar = document.querySelector(".bar");
      const mobileNavbar = document.querySelector(".mobile-navbar");
      const navLinks = document.querySelectorAll(".nav-list .nav-item");
  
      // Function to close the menu
      function closeMenu() {
        mobileNavbar.classList.remove("active");
        bar.classList.remove("animate");
        body.classList.remove("overflow-hidden");
      }
  
      // Toggle menu on button click
      toggleButton.addEventListener("click", function (event) {
        event.stopPropagation(); // Prevents click from bubbling to document
        bar.classList.toggle("animate");
        mobileNavbar.classList.toggle("active");
        body.classList.toggle("overflow-hidden");
      });
  
      // Close menu when a navigation link is clicked
      navLinks.forEach((link) => {
        link.addEventListener("click", closeMenu);
      });
  
      // Close menu if clicking outside of the menu
      document.addEventListener("click", function (event) {
        if (
          !mobileNavbar.contains(event.target) && // Click is outside mobile menu
          !toggleButton.contains(event.target) // Click is not on the toggle button
        ) {
          closeMenu();
        }
      });
    });
  })();
  