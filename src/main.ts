import "./style.css";
import { initDots } from "./plots/dots";
import { PlotType } from "./types";

let selectedType: PlotType = "dots";

document
  .getElementById("type-select")
  ?.addEventListener("change", (e: Event) => {
    selectedType = (e.target as HTMLSelectElement).value as PlotType;
    updateType();
  });

const updateType = () => {
  switch (selectedType) {
    case "dots":
      initDots();
  }
};

updateType();
