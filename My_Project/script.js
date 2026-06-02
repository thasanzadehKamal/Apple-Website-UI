const slides = document.querySelector(".slide");
const dots = document.querySelectorAll(".dot");
const slideCount = dots.length;

let index = 0;

function updateSlider() {
  slides.style.transform = `translateX(-${index * 100}%)`;

  dots.forEach(dot => dot.classList.remove("active"));
  dots[index].classList.add("active");
}

dots.forEach(dot => {
  dot.addEventListener("click", () => {
    index = Number(dot.dataset.index);
    updateSlider();
  });
});

// AUTO SLIDE
setInterval(() => {
  index++;
  if (index >= slideCount) index = 0;
  updateSlider();
}, 3000);
