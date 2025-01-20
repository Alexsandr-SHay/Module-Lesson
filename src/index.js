import timer from "./modules/timer";
import menu from "./modules/menu";
import modal from "./modules/modal";
import dataEntryForm from "./modules/dataEntryForm";
import tabs from "./modules/tabs";
import slider from "./modules/slider";
import sliderCarousel from "./modules/sliderCarousel";
import calc from "./modules/calc";

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
calc();
