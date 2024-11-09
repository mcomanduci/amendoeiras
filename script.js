const header = document.querySelector("#header");
const headerInner = document.querySelector("#header-inner");

document.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.classList.add("shadow-md");
    headerInner.classList.remove("py-6");
    headerInner.classList.add("py-2");
  } else {
    header.classList.remove("shadow-md");
    headerInner.classList.remove("py-2");
    headerInner.classList.add("py-6");
  }
});

// carousel
const carousel = document.getElementById("carousel-lazer");
const carouselImages = document.querySelectorAll("#carousel-lazer > div");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const indicatorContainer = document.querySelector(".indicator-lazer-container");
const indicatorHTML =
  '<span class="indicator-lazer w-10 h-1.5 bg-gray-400 cursor-pointer"></span>';

let currentSlide = 0;

// Create indicators only once
carouselImages.forEach(() => {
  indicatorContainer.insertAdjacentHTML("beforeend", indicatorHTML);
});
let indicators2 = document.querySelectorAll(".indicator-lazer");

function updateCarousel() {
  const slideWidth = carousel.clientWidth;
  const offset = -currentSlide * slideWidth;
  carousel.style.transform = `translateX(${offset}px)`;

  // Update indicators' styles based on the current slide
  indicators2.forEach((indicator, index) => {
    indicator.classList.remove("bg-black");
    indicator.classList.add("bg-gray-400");
    if (index === currentSlide) {
      indicator.classList.remove("bg-gray-400");
      indicator.classList.add("bg-black");
    }
  });
}

// Event listeners for Next and Prev buttons
nextButton.addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % carousel.children.length; // Loop to the first slide
  updateCarousel();
});

prevButton.addEventListener("click", () => {
  currentSlide =
    (currentSlide - 1 + carousel.children.length) % carousel.children.length; // Loop to the last slide
  updateCarousel();
});

// Make indicators interactive
indicators2.forEach((indicator, index) => {
  indicator.addEventListener("click", () => {
    currentSlide = index; // Jump to the clicked indicator's slide
    updateCarousel();
  });
});

// Initialize carousel on page load
updateCarousel();

window.addEventListener("resize", updateCarousel);
