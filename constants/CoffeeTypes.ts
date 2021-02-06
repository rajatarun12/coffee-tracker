export const POUR_OVER = "Pour over";
export const FRENCH_PRESS = "French press";
export const CHEMEX = "Chemex";

export const Images:any = {};
Images[POUR_OVER] = require("../assets/icons/pourover.png");
Images[FRENCH_PRESS] = require("../assets/icons/frenchpress.png")
Images[CHEMEX] = require("../assets/icons/chemex.png");
const coffeeGrind: any = {};
  coffeeGrind[FRENCH_PRESS] = {
    icon: "frenchpress",
    grind: "Coarse / Very Chunky",
    temp: "195°F/90.5°C",
  };
  coffeeGrind[CHEMEX] = {
    icon: "chemex",
    grind: "Medium Coarse / Less Chunky",
    temp: "195°F-205°F/90.5°C-96°C",
  };
  coffeeGrind[POUR_OVER] = {
    icon: "pourover",
    grind: "Medium / Like Kosher Salt",
    temp: "195°F-205°F/90.5°C-96°C",
  };

export default coffeeGrind;
