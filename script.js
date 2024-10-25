"use strict";

const mobileBtn = document.querySelector(".header__burger"); 
const menu = document.querySelector(".header__menu"); 
mobileBtn.onclick = function() {
    const icon = this.querySelector('i');
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-xmark");
    menu.classList.toggle("nav--opened");
};

// slider about



document.addEventListener('DOMContentLoaded', function() {
   
    var splide1 = new Splide( '#splide1', {
      perPage: 1,
      arrows: false, 
      pagination: true,
    });
  
    splide1.mount();
  
 
    const nextArr1 = document.querySelector(".about__nav-arrow--right");
    const prevArr1 = document.querySelector(".about__nav-arrow--left");
  
  
    nextArr1.addEventListener("click", function() {
      splide1.go('>');
    });
  
    prevArr1.addEventListener("click", function() {
      splide1.go('<');
    });
  });
  
// var splide1 = new Splide( '#splide1', {
//     perPage: 1,
//     arrows: false,
//   } );
  
//   splide1.mount();

//   const nextArr1 = document.querySelector(".about__nav-arrow--right");
// const prevArr1 = document.querySelector(".about__nav-arrow--left");

// nextArr1.addEventListener("click", clickNext) 
// prevArr1.addEventListener("click", clickPrev) 

// function clickNext() {
//     splide1.go( '>' );
// }
// function clickPrev() {
//     splide1.go( '<' );
// }



// slider



var splide = new Splide( '#splide2', {
    perPage: 1,
    arrows: false,
    pagination: true,
    type   : 'loop',
    padding: '5rem',
  } );
  
  splide.mount();

const nextArr = document.querySelector(".splide__nav-arrow--right");
const prevArr = document.querySelector(".splide__nav-arrow--left");

nextArr.addEventListener("click", clickNext) 
prevArr.addEventListener("click", clickPrev) 

function clickNext() {
    splide.go( '>' );
}
function clickPrev() {
    splide.go( '<' );
}