import { animate } from "./helpers";

const modal = () => {
  const modal = document.querySelector(".popup");
  const buttons = document.querySelectorAll(".popup-btn");
  const inputElement = document.querySelector(".popup-content");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      modal.style.display = "block";
      animate({
        duration: 1000,
        timing(timeFraction) {
          return timeFraction;
        },
        draw(progress) {
          inputElement.style.left = 50 * progress + "%";
          inputElement.style.opacity = progress;
        },
      });
    });
  });

  modal.addEventListener("click", (e) => {
    if (
      !e.target.closest(".popup-content") ||
      e.target.classList.contains("popup-close")
    ) {
      modal.style.display = "none";
    }
  });
};
export default modal;
