let btn2 = document.getElementById("btn2");
let btn1 = document.getElementById("btn1");

btn2.addEventListener('click', function() {
	window.location.href = 'register.html';
});
btn1.addEventListener('click', function() {
	window.location.href = 'about.html';
});

let currentIndex = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.slide');
  const slider = document.querySelector('.slider');

  if (index >= slides.length) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = slides.length - 1;
  }

  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
  currentIndex++;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex--;
  showSlide(currentIndex);
}

// Automatic slide transition every 3 seconds
setInterval(() => {
  nextSlide();
}, 3000);

// Initialize the first slide
showSlide(currentIndex);
