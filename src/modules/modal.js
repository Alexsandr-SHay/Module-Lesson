const modal = () => {
  const modal = document.querySelector(".popup");
  const buttons = document.querySelectorAll(".popup-btn");
  const closeBtn = modal.querySelector(".popup-close");
  const inputElement = document.querySelector(".popup-content");

  let screenWidth = document.documentElement.clientWidth;
  let screenHeight = document.documentElement.clientHeight;
  let requestId;
  let valueElement = 0;

  console.log(inputElement);
  console.dir(inputElement);

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      animatuonElement();
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  const animation = () => {
    if (parseFloat(inputElement.style.left) < screenWidth / 2 - 200) {
      requestId = requestAnimationFrame(() => {
        valueElement = parseFloat(valueElement) + 8 + "px";
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

    inputElement.style.left = "0px";
    inputElement.style.top = screenHeight / 2 - 191 + "px";
    if (screenWidth >= 768) {
      modal.style.display = "block";
      animation();
    } else {
      modal.style.display = "block";
    }
  };
};
export default modal;
