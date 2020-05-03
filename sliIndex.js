
const bslideContainer = document.querySelector('.final-container');
const bslide =document.querySelector('.bslides');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const interval = 900;

let bslides = document.querySelectorAll('.bslide');
// create a variable index 
let index = 1;
let bslideId;

// cloning the first and last slide elements 
// true means it gives everything in the slide 
// queryselectorall gives all nodelist what is a node list ?
const firstClone = bslides[0].cloneNode(true);
// because we need the last img 
const lastClone = bslides[ slides.length -1].cloneNode(true);
// what is clone node ?

firstClone.id = 'first-clone'
lastClone.id = 'last-clone'
// append the first clone at the end of the slideshow 
bslide.append(firstClone);
// wants the last clone at the beggining of the slide 
bslide.prepend(lastClone);
// clientwidth will give the width of a single slide 
const bslideWidth = bslides[index].clientWidth;

bslide.style.transform =`translateX(${-bslideWidth * index}px)`;

// to make it bslide automatically 
const startbSlide = ( ) => {
    bslideId = setInterval (()=>{
        moveToNext();
    }, interval);
}
bslide.addEventListener('transitionend', () => {
    bslides = document.querySelectorAll('.bslide');
    if (bslides[index].id === firstClone.id){
        bslide.style.transition = 'none';
        index = 1;
        bslide.style.transform =`translateX(${-bslideWidth * index}px)`;
    }
    if (bslides[index].id === lastClone.id){
        bslide.style.transition = 'none';
        index = bslides.length - 2;
        bslide.style.transform =`translateX(${-bslideWidth * index}px)`;
    }
})

const moveToNext = () => {
    bslides = document.querySelectorAll('.bslide');
    if(index >= bslides.length -1) return;
index++;
bslide.style.transform =`translateX(${-bslideWidth * index}px)`;
bslide.style.transition = '0.7s';

}
const moveToPrev = () => {
    if(index <= 0) return;
index--;
bslide.style.transform =`translateX(${-bslideWidth * index}px)`;
bslide.style.transition = '0.7s';
}

bslideContainer.addEventListener('mouseenter', () =>{
    clearInterval(bslideId);
});

bslideContainer.addEventListener('mouseleave', startbSlide);

nextBtn.addEventListener('click',moveToNext);

prevBtn.addEventListener('click', moveToPrev);


startbSlide();
