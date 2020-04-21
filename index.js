<script>
  const carousel = document.querySelector(".carousel");
const slides = [...carousel.children];
function positionSlides(slides,slideWidth){
for (let i=0; i<slides.length;i++){
slides[i].style.left=slideWidth * i +"px";
}
}
</script>
