const menu = () => {
  const menuBtn = document.querySelector(".menu");
  const menu = document.querySelector("menu");
  const closeBtn = menu.querySelector(".close-btn");
  const menuItems = menu.querySelectorAll("ul>li>a");

  const handleMenu = () => {
    menu.classList.toggle("active-menu");
  };

  menuBtn.addEventListener("click", handleMenu);

  // closeBtn.addEventListener("click", handleMenu);

  // menuItems.forEach((menuItem) =>
  //   menuItem.addEventListener("click", handleMenu)
  // );

  menu.addEventListener("click", (e) => {
    if (e.target.closest("ul>li>a") || e.target.closest(".close-btn")) {
      handleMenu();
    }
  });

  // document.addEventListener("click", (e) => {
  //   if (e.target.closest(".menu")) {
  //     handleMenu();
  //   }

  //   if (e.target.matches("menu>ul>li>a") || e.target.closest(".close-btn")) {
  //     handleMenu();
  //   }

  //   if (
  //     !e.target.closest("menu") &&
  //     !e.target.closest(".menu") &&
  //     menu.classList.contains("active-menu")
  //   ) {
  //     console.log("Я молодец");
  //     handleMenu();
  //   }
  // });
};

export default menu;
