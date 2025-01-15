const menu = () => {
  const menu = document.querySelector("menu");

  const handleMenu = () => {
    menu.classList.toggle("active-menu");
  };

  document.addEventListener("click", (e) => {
    if (e.target.closest(".menu")) {
      handleMenu();
    }

    if (e.target.matches("menu>ul>li>a") || e.target.closest(".close-btn")) {
      handleMenu();
    }

    if (
      !e.target.closest("menu") &&
      !e.target.closest(".menu") &&
      menu.classList.contains("active-menu")
    ) {
      handleMenu();
    }
  });
};

export default menu;
