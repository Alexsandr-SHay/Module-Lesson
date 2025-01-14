const menu = () => {
  const menuBtn = document.querySelector(".menu");
  const menu = document.querySelector("menu");
  const closeBtn = menu.querySelector(".close-btn");
  const menuItems = menu.querySelectorAll("ul>li>a");

  const handleMenu = () => {
    menu.classList.toggle("active-menu");
  };

  //ПРостое задание.
  // menuBtn.addEventListener("click", handleMenu);

  //   menu.addEventListener("click", (e) => {
  //   if (e.target.closest("ul>li>a") || e.target.closest(".close-btn")) {
  //     handleMenu();
  //   }
  // });

  //Сложное задание
  document.addEventListener("click", (e) => {
    console.log(!e.target.closest("menu"));

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
