const dataEntryForm = () => {
  const calcItem = document.querySelectorAll(".calc-item");
  const formName = document.querySelectorAll(".form-name");
  const formEmail = document.querySelectorAll(".form-email");
  const formPhone = document.querySelectorAll(".form-phone");

  for (let i = 1; i < calcItem.length; i++) {
    calcItem[i].addEventListener("input", (event) => {
      event.target.value = event.target.value.replace(/\D+/, "");
    });
  }

  formName.forEach((e) => {
    e.addEventListener("input", (event) => {
      event.target.value = event.target.value.replace(/[^А-Яа-я- ]/, "");
    });

    e.addEventListener("blur", (event) => {
      event.target.value = editingLine(event.target.value);
      event.target.value = event.target.value
        .toLowerCase()
        .replace(/(?<!\p{Lowercase})\p{Lowercase}/gu, (ch) => ch.toUpperCase());
    });
  });

  formEmail.forEach((e) => {
    e.addEventListener("input", (event) => {
      event.target.value = event.target.value.replace(/[^A-Za-z@_.!~*'-]/, "");
    });

    e.addEventListener("blur", (event) => {
      event.target.value = editingLine(event.target.value);
    });
  });

  formPhone.forEach((e) => {
    e.addEventListener("input", (event) => {
      event.target.value = event.target.value.replace(/[^0-9()+-]/, "");
    });

    e.addEventListener("blur", (event) => {
      event.target.value = editingLine(event.target.value);
    });
  });

  const editingLine = (value) => {
    value = value.replace(/^[\s\-]+/g, "");
    value = value.replace(/[\s\-]+$/g, "");
    value = value.replace(/\s{2,}/g, " ");
    value = value.replace(/\-{2,}/g, "-");
    return value;
  };
};

export default dataEntryForm;
