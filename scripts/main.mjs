import { init as initDots } from "./dots.mjs";

document
  .getElementById("dots-button")
  .addEventListener("click", () => initDots());
