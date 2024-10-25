
    var splide1 = new Splide( '#splide1' );
    splide1.mount();
 
const splide2 = new Splide( '#splide2',{
    perPage: 2,
    arrows: false,
    // pagination: true,
    breakpoints: {
		640: {
			perPage: 1,
		},
  }
}).mount();

const nextArr = document.querySelector(".fa-arrow-right");
const prevArr = document.querySelector(".fa-arrow-left");

nextArr.addEventListener("click", clickNext) 
prevArr.addEventListener("click", clickPrev) 

function clickNext() {
    splide2.go( '>' );
}
function clickPrev() {
    splide2.go( '<' );
}