// JavaScript for smooth scrolling and active link highlighting

document.addEventListener("DOMContentLoaded", function () {
        var navLinks = document.querySelectorAll(".navBtn");

        navLinks.forEach(function (link) {
          link.addEventListener("click", function (e) {
            navLinks.forEach(function (nav) {
              nav.classList.remove("active");
            });

            this.classList.add("active");

            var targetId = this.getAttribute("href").substring(1);
            var targetSection = document.getElementById(targetId);

            window.scrollTo({
              top: targetSection.offsetTop - 60,
              behavior: "smooth",
            });
          });
        });
      });

// JavaScript for lightbox functionality
const images = document.querySelectorAll(
  ".edu-gallery img, .row img, .proj-photo img"
);

images.forEach(img => {
  img.title = "Click to enlarge";
  img.addEventListener("click", () => {
    const instance = basicLightbox.create(`
      <img src="${img.src}" style="max-width:90vw; max-height:90vh;">
    `);

    instance.show();
  });
});