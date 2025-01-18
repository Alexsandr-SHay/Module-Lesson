const modal = () => {
  const modal = document.querySelector(".popup");
  const buttons = document.querySelectorAll(".popup-btn");
  const inputElement = document.querySelector(".popup-content");

  let screenWidth = document.documentElement.clientWidth;
  let screenHeight = document.documentElement.clientHeight;
  let requestId;
  let valueElement = 0;

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      animatuonElement();
    });
  });

  const animation = () => {
    if (parseFloat(inputElement.style.left) < screenWidth / 2 - 200) {
      requestId = requestAnimationFrame(() => {
        valueElement = parseFloat(valueElement) + 25 + "px";
        inputElement.style.left = valueElement;
        animation();
      });
    } else {
      cancelAnimationFrame(requestId);
      valueElement = 0;
    }
  };

  const animatuonElement = () => {
    screenWidth = document.documentElement.clientWidth;
    screenHeight = document.documentElement.clientHeight;

    if (screenWidth >= 768) {
      inputElement.style.left = "0px";
      inputElement.style.top = screenHeight / 2 - 191 + "px";
      modal.style.display = "block";
      animation();
    } else {
      modal.style.display = "block";
      inputElement.style.top = screenHeight / 2 - 191 + "px";
    }
  };

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
