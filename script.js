"use strict";

document.addEventListener("DOMContentLoaded", init);

let selectedColor;

async function init() {
    let response = await fetch("batman.svg");
    let mySvgData = await response.text();
    document.querySelector("section").innerHTML = mySvgData;

    startManipulatingSvg();
}

function startManipulatingSvg() {
    document.querySelector("#shapes").addEventListener("click", clickedArea);
    document.querySelector("#colors").addEventListener("click", clickedColor);
}

function clickedArea(area) {
    let areaChoice = area.target;
    console.log(areaChoice)
    console.log(areaChoice.classList)
    console.log(selectedColor)
    areaChoice.classList.value = selectedColor;
}

function clickedColor(color) {
    let colorChoice = color.target;
    console.log(colorChoice)
    selectedColor = colorChoice.classList;
    console.log(selectedColor)
}