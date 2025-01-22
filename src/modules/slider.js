//<ul class="portfolio-dots">
//<li class="dot-active"></li>

const slider = (
  portfolioContent = ".portfolio-content",
  portfolioItem = ".portfolio-item",
  portfolioDots = ".portfolio-dots",
  portfolioItemActive = "portfolio-item-active",
  dotActive = "dot-active",
  dot = ".dot, .portfolio-btn"
) => {
  if (
    document.querySelector(portfolioContent) === null ||
    document.querySelectorAll(portfolioItem) === null ||
    document.querySelector(portfolioDots) === null
  ) {
    return;
  } else {
    const sliderBlock = document.querySelector(portfolioContent); //".portfolio-content"
    const slides = document.querySelectorAll(portfolioItem); //".portfolio-item"
    const dotsList = document.querySelector(portfolioDots);
    const timeInterval = 2000;

    let currentSlide = 0;
    let interval;
    let dots;

    const liCreateElement = () => {
      dotsList
        .appendChild(document.createElement("li"))
        .classList.add("dot", "dot-active");
      for (let i = 1; i < slides.length; i++) {
        dotsList.appendChild(document.createElement("li")).classList.add("dot");
      }
      dots = dotsList.querySelectorAll("li");
    };

    liCreateElement();

    const prevSlide = (elems, index, strClass) => {
      elems[index].classList.remove(strClass);
    };

    const nextSlide = (elems, index, strClass) => {
      elems[index].classList.add(strClass);
    };

    const autoSlide = () => {
      prevSlide(slides, currentSlide, portfolioItemActive); //"portfolio-item-active"
      prevSlide(dots, currentSlide, dotActive); //"dot-active"
      currentSlide++;
      if (currentSlide >= slides.length) {
        currentSlide = 0;
      }
      nextSlide(slides, currentSlide, portfolioItemActive); //"portfolio-item-active"
      nextSlide(dots, currentSlide, dotActive); // "dot-active"
    };

    const startSlide = (timer = 1500) => {
      interval = setInterval(autoSlide, timer);
    };

    const stopSlide = () => {
      clearInterval(interval);
    };

    //dotsCreateClass("dot");

    sliderBlock.addEventListener("click", (e) => {
      e.preventDefault();
      if (!e.target.matches(dot)) {
        //".dot, .portfolio-btn"
        return;
      }

      prevSlide(slides, currentSlide, portfolioItemActive); //"portfolio-item-active"
      prevSlide(dots, currentSlide, dotActive); //"dot-active"

      if (e.target.matches("#arrow-right")) {
        currentSlide++;
      } else if (e.target.matches("#arrow-left")) {
        currentSlide--;
      } else if (e.target.classList.contains("dot")) {
        dots.forEach((dot, index) => {
          if (e.target === dot) {
            currentSlide = index;
          }
        });
      }
      if (currentSlide >= slides.length) {
        currentSlide = 0;
      }

      if (currentSlide < 0) {
        currentSlide = slides.length - 1;
      }

      nextSlide(slides, currentSlide, portfolioItemActive); //"portfolio-item-active"
      nextSlide(dots, currentSlide, dotActive); //"dot-active"
    });

    sliderBlock.addEventListener(
      "mouseenter",
      (e) => {
        if (e.target.matches(dot)) {
          //".dot, .portfolio-btn"
          stopSlide();
        }
      },
      true
    );

    sliderBlock.addEventListener(
      "mouseleave",
      (e) => {
        if (e.target.matches(dot)) {
          //".dot, .portfolio-btn"
          startSlide(timeInterval);
        }
      },
      true
    );

    startSlide(timeInterval);
  }
};

export default slider;
