import "./style.css";
import { initDots } from "./plots/dots";
import { PlotType } from "./types";
import p5 from "p5";
import { initPixels } from "./plots/grayscale";
import { initTerrain } from "./plots/terrain";

let typeSelect = document.getElementById("type-select") as HTMLSelectElement;
let selectedType: PlotType = typeSelect.value as PlotType;

document
  .getElementById("type-select")
  ?.addEventListener("change", (e: Event) => {
    selectedType = (e.target as HTMLSelectElement).value as PlotType;
    updateType();
  });

let currentSketch: p5 | undefined;

const updateType = () => {
  if (currentSketch) {
    currentSketch.remove();
  }
  switch (selectedType) {
    case "dots":
      currentSketch = initDots();
      break;
    case "grayscale":
      currentSketch = initPixels();
      break;
    case "terrain":
      currentSketch = initTerrain();
      break;
  }
};

updateType();
