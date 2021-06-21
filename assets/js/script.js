let mainColor = getComputedStyle(document.documentElement).getPropertyValue("--main");
let svgBrandColor = document.getElementById("brand-color").attributes[1].value;

svgBrandColor = mainColor;