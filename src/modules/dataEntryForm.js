const dataEntryForm = () => {
  const calcItem = document.querySelectorAll(".calc-item");
  const formName = document.querySelectorAll(".form-name");
  const formEmail = document.querySelectorAll(".form-email");
  const formPhone = document.querySelectorAll(".form-phone");

  console.log(formName);
  console.log(formEmail);
  console.log(formPhone);

  for (let i = 1; i < calcItem.length; i++) {
    calcItem[i].addEventListener("input", (event) => {
      event.target.value = event.target.value.replace(/\D+/, "");
    });
  }

  formName.forEach((e) => {
    e.addEventListener("input", (event) => {
      event.target.value = event.target.value.replace(/[^А-Яа-я- ]/, "");
    });
  });

  formEmail.forEach((e) => {
    e.addEventListener("input", (event) => {
      event.target.value = event.target.value.replace(/[^A-Za-z@_.!~*'-]/, "");
    });
  });

  formPhone.forEach((e) => {
    e.addEventListener("input", (event) => {
      event.target.value = event.target.value.replace(/[^0-9()+-]/, "");
    });
  });

  // buttons.forEach((btn) => {
  //   btn.addEventListener("click", () => {
  //     animatuonElement();
  //   });
  // });
};

export default dataEntryForm;
