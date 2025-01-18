import timer from "./modules/timer";
import menu from "./modules/menu";
import modal from "./modules/modal";
import dataEntryForm from "./modules/dataEntryForm";
import tabs from "./modules/tabs";
import slider from "./modules/slider";
import sliderCarousel from "./modules/sliderCarousel";

timer("27 january 2025");
menu();
modal();
dataEntryForm();
tabs();
slider();
sliderCarousel(
  //".portfolio-cont",
  ".portfolio-item",
  ".portfolio-dots",
  "portfolio-item-active",
  "dot-active",
  ".dot, .portfolio-btn"
);
// sliderCarousel(
//     ".portfolio-content",
//     ".portfolio-item",
//     ".portfolio-dots",
//     "portfolio-item-active",
//     "dot-active",
//     ".dot, .portfolio-btn"
//   );
