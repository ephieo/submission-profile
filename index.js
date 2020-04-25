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
   //calling on the moveSlide function and making the targetSlide = prevSlide. 
  moveSlide(carousel,currentSlide,nextSlide);
  hideButton(nextSlide,slides);
  });

//adding an event listener to the nextButton.
prevButton.addEventListener("click",function(){
  // need to select the current active slide 
  const currentSlide = carousel.querySelector(".active")
  // need to select the prevslide 
const prevSlide = currentSlide.previousElementSibling;
  
  //calling on the moveSlide function and making the targetSlide = prevSlide.
moveSlide(carousel,currentSlide,prevSlide);
   hideButton(prevSlide,slides);
  });

// creating a moveSlide function to contain the info for moving the slide 
function moveSlide (carousel,currentSlide,targetSlide) {
  // first we need to find the position of the slide 
  const position = targetSlide.style.left;
  //then we use translate X to shift the slide 
    //need to move the slide to the left using translate X along the x-axis
  carousel.style.transform = `translateX(-${position})`;
  currentSlide.classList.remove("active");
  targetSlide.classList.remove("active");
};

function toggleActive (current,target){
current.classlist.remove("active");
target.classlist.remove("active");
};

//we then need a function to hide the next and previous buttons at the beggining and end of the image carousel. 
function hideButton (targetSlide,slides){
  //if the target slide is the first slide in the carousel at index[0] then hide the prevButton and show the nextButton
if(targetSlide === slides[0]){
prevButton.classList.add("hide");
nextButton.classList.remove("hide");
  // if its the last slide in the carousel then hide the nextButton and show the prevButton.
}else if (targetSlide === slides[slides.length - 1]){
nextButton.classList.add("hide");
prevButton.classList.remove("hide");
  // if the images are neithe the first nor last slide then show both buttons 
}else{
nextButton.classList.remove("hide");
prevButton.classList.remove("hide");
}
};
