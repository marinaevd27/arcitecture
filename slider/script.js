"use strict"

const slider = document.querySelector(".slider");
const prevBtn = document.querySelector(".previous");
const nextBtn = document.querySelector(".next");
const sliderWrapper = document.querySelector(".slider__container");


const sliderCount = document.querySelectorAll("li").length;
let curentPosition = 0;


// configuration

const width = 600; // ширина однієї картинки
const count = 1; // кількість одночасних зобажень


slider.style.width = width * sliderCount + "px";
sliderWrapper.style.width = width * count + "px";


prevBtn.addEventListener("click", clickHandler);
nextBtn.addEventListener("click", clickHandler);
function clickHandler(event)  {
const btnName = event.target.className;
if (btnName == "previous") {
    curentPosition += width * count;
    curentPosition = Math.min(curentPosition, 0);

} else {
    curentPosition -= width;
    curentPosition = Math.max(curentPosition, -width * (sliderCount - count))
}
console.log(curentPosition);
slider.style.left = curentPosition + "px";
}