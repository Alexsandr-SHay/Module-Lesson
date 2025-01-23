import timer from "./modules/timer";
import menu from "./modules/menu";
import modal from "./modules/modal";
import dataEntryForm from "./modules/dataEntryForm";
import tabs from "./modules/tabs";
import slider from "./modules/slider";
import sliderCarousel from "./modules/sliderCarousel";
import calc from "./modules/calc";
import sendForm from "./modules/sendForm";

timer("27 january 2025");
menu();
modal();
dataEntryForm();
tabs();
slider(
  ".portfolio-content",
  ".portfolio-item",
  ".portfolio-dots",
  "portfolio-item-active",
  "dot-active",
  ".dot, .portfolio-btn"
);
sliderCarousel();
calc(100);
sendForm({
  formId: "form1",
  someElem: [
    {
      type: "block",
      id: "total",
    },
  ],
});

sendForm({
  formId: "form2",
  someElem: [
    {
      type: "block",
      id: "total",
    },
  ],
});

sendForm({
  formId: "form3",
  someElem: [
    {
      type: "block",
      id: "total",
    },
  ],
});
