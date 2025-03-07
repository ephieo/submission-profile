// getting the class name so we can work with the children of this list.
const carousel = document.querySelector(".carousel");
// getting the right btn class 
const nextButton = document.querySelector(".right-btn");
//selecting prev button 
const prevButton = document.querySelector(".left-btn");
// need to select the nav class using querySelector. 
const nav = document.querySelector(".nav");
// turn nav into an array called dots.
const dots = [...nav.children];
//turning the children of carousel into an array.
const slides = [...carousel.children];
// then using a for loop to loop through all the slides from index/i[0] onwards to the end of it's length. 
// I needed to calculate the slideWidth so that the images will be lined horizontally seperated by the image width.
let slideWidth = slides[0].getBoundingClientRect().width;
// once I have the width I can calculate the distance between slides. 

function positionSlides(slides){
for (let index=0; index<slides.length;index++){
slides[index].style.left=slideWidth * index +"px";
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
  moveToDot(nextSlide,slides,nav,dots);
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
  moveToDot (prevSlide,slides,nav,dots);
  });



nav.addEventListener("click",function(e){
  // add an if statement so that it only runs when you click on a dot.
  if(e.target === nav)return;
  // to select the clicked dot.
  const targetDot = e.target;
  // need to select the current dot 
  const currentDot = nav.querySelector(".active");
  //need to select the targetSlide/currentSlide
  const currentSlide = carousel.querySelector(".active");
  // creating a variable with the function findIndex.
let targetDotIndex = findIndex(targetDot,dots);
  // making the slide index the targetSlide. 
  const targetSlide = slides[targetDotIndex];
  // using moveSlide to sellect currentSlide 
  moveSlide(carousel, currentSlide, targetSlide);
  toggleActive(currentDot,targetDot);
  hideButton(targetSlide,slides);
});


//create a function to move the dots as you navigate with the buttons
function moveToDot (targetSlide,slides,nav,dots){
  let slideIndex = findIndex(targetSlide,slides);
const currentDot = nav.querySelector(".active");
  const targetDot = dots[slideIndex];
  console.log(slideIndex);
  toggleActive(currentDot,targetDot);
  
}


// creating a moveSlide function to contain the info for moving the slide.
function moveSlide (carousel,currentSlide,targetSlide) {
  // first we need to find the position of the slide 
  const position = targetSlide.style.left;
  //then we use translate X to shift the slide 
    //need to move the slide to the left using translate X along the x-axis
 carousel.style.transform = `translateX(-${position})`;
 toggleActive (currentSlide,targetSlide);
};


function toggleActive (current,target){
current.classList.remove("active");
target.classList.add("active");
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
prevButton.classList.remove("hide");
nextButton.classList.remove("hide");
}
};
//need a function to find the index of each slide to match the dots
function findIndex (item,items){
for (let index=0;index<items.length;index++){
if(item === items[index]){
   return index;}
}  
}