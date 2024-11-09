//carousel home
const slides = document.querySelectorAll("#carousel > div");
const indicators = document.querySelectorAll(".indicator");
let currentIndex = 0;
let interval;

// Function to show the current slide
slides[currentIndex].classList.add("active");
slides[currentIndex].style.opacity = 1; // Show the first slide
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
      slide.style.opacity = 1; // Fade in
    } else {
      slide.style.opacity = 0; // Fade out
    }
  });
  updateIndicators(index);
  currentIndex = index;

  // Reset the interval when the slide changes
  resetInterval();
}

// Function to update indicators
indicators[currentIndex].classList.add("opacity-100");
function updateIndicators(index) {
  indicators.forEach((indicator, i) => {
    if (i === index) {
      indicator.classList.add("opacity-100");
    } else {
      indicator.classList.remove("opacity-100");
    }
  });
}

// Function to go to the next slide
function nextSlide() {
  let newIndex = (currentIndex + 1) % slides.length;
  showSlide(newIndex);
}

// Function to go to the previous slide
function prevSlide() {
  let newIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(newIndex);
}

// Function to reset the interval
function resetInterval() {
  clearInterval(interval);
  interval = setInterval(nextSlide, 8000);
}

// Event listeners for next and previous buttons
document.getElementById("next").addEventListener("click", nextSlide);
document.getElementById("prev").addEventListener("click", prevSlide);

// Set auto slide every 5 seconds
resetInterval(); // Initialize the interval

// Pause auto slide on hover
document.getElementById("carousel").addEventListener("mouseenter", () => {
  clearInterval(interval);
});

document.getElementById("carousel").addEventListener("mouseleave", () => {
  resetInterval(); // Restart the interval on mouse leave
});

// Indicator click event
indicators.forEach((indicator, i) => {
  indicator.addEventListener("click", () => {
    showSlide(i);
  });
});
