// getting the class name so we can work with the children of this list.
const carousel = document.querySelector(".carousel");
// getting the right btn class 
const nextButton = document.querySelector(".right-btn");
//selecting prev button 
const prevButton = document.querySelector(".left-btn");
//turning the children of carousel into an array.
const slides = [...carousel.children];
// then using a for loop to loop through all the slides from index/i[0] onwards to the end of it's length. 
// I needed to calculate the slideWidth so that the images will be lined horizontally seperated by the image width.
let slideWidth = slides[0].getBoundingClientRect().width;
// once I have the width I can calculate the distance between slides. 
function positionSlides(slides){
for (let i=0; i<slides.length;i++){
slides[i].style.left=slideWidth * i +"px";
}
}
positionSlides(slides);

//adding an event listener to the nextButton.
nextButton.addEventListener("click",function(){
  // need to select the current active slide 
  const currentSlide = carousel.querySelector(".active")
  // need to select the next slide 
const nextSlide = currentSlide.nextElementSibling;
  //need to move the slide to the left using translate X along the x-axis
const position = nextSlide.style.left;
  carousel.style.transform = `translateX(-${position})`;
  currentSlide.classList.remove("active");
  nextSlide.classList.add("active");
  });

//adding an event listener to the nextButton.
prevButton.addEventListener("click",function(){
  // need to select the current active slide 
  const currentSlide = carousel.querySelector(".active")
  // need to select the prevslide 
const prevSlide = currentSlide.previousElementSibling;
  //need to move the slide to the left using translate X along the x-axis
const position = prevSlide.style.left;
  carousel.style.transform = `translateX(-${position})`;
  currentSlide.classList.add("active");
  prevSlide.classList.remove("active");
  });
