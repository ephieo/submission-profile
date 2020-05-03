
function runSlideshowTwo (){

const slideContainer = document.querySelector('.container');
const slide =document.querySelector('.slides');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const interval = 900;

let slides = document.querySelectorAll('.slide');
// create a variable index 
let index = 1;
let slideId;

// cloning the first and last slide elements 
// true means it gives everything in the slide 
// queryselectorall gives all nodelist what is a node list ?
const firstClone = slides[0].cloneNode(true);
// because we need the last img 
const lastClone = slides[ slides.length -1].cloneNode(true);
// what is clone node ?

firstClone.id = 'first-clone'
lastClone.id = 'last-clone'
// append the first clone at the end of the slideshow 
slide.append(firstClone);
// wants the last clone at the beggining of the slide 
slide.prepend(lastClone);
// clientwidth will give the width of a single slide 
const slideWidth = slides[index].clientWidth;

slide.style.transform =`translateX(${-slideWidth * index}px)`;

// to make it slide automatically 
const startSlide = ( ) => {
    slideId = setInterval (()=>{
        moveToNext();
    }, interval);
}
slide.addEventListener('transitionend', () => {
    slides = document.querySelectorAll('.slide');
    if (slides[index].id === firstClone.id){
        slide.style.transition = 'none';
        index = 1;
        slide.style.transform =`translateX(${-slideWidth * index}px)`;
    }
    if (slides[index].id === lastClone.id){
        slide.style.transition = 'none';
        index = slides.length-2;
        slide.style.transform =`translateX(${-slideWidth * index}px)`;
    }
})

const moveToNext = () => {
    slides = document.querySelectorAll('.slide');
    if(index >= slides.length -1) return;
index++;
slide.style.transform =`translateX(${-slideWidth * index}px)`;
slide.style.transition = '0.7s';

}
const moveToPrev = () => {
    if(index <= 0) return;
index--;
slide.style.transform =`translateX(${-slideWidth * index}px)`;
slide.style.transition = '0.7s';
}

slideContainer.addEventListener('mouseenter', () =>{
    clearInterval(slideId);
});

slideContainer.addEventListener('mouseleave', startSlide);

nextBtn.addEventListener('click',moveToNext);

prevBtn.addEventListener('click', moveToPrev);


startSlide();
}

// window.onload = (slide) => {
//    startSlide();
//   };