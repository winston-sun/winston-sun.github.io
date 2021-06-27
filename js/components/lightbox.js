function openModal(id) {
    document.getElementById(id).style.display = "block";
}
  
function closeModal() {
    //document.getElementById('flappy_bird').style.display = "none";
    //document.getElementById('CNN_model').style.display='none';
    
    var list = document.getElementsByClassName('modal');
    for (var i=0; i<list.length; i++) {
        list[i].style.display = 'none';
    }

    document.getElementById('player1').pause();
    document.getElementById('player2').pause();
}

  
  //var slideIndex = 1;
  //showSlides(slideIndex);



var slideshow1 = document.getElementById("slideshow1");
slideshow1.currentSlideIndex = 1;
showSlides(slideshow1.currentSlideIndex, slideshow1);

var slideshow2 = document.getElementById("slideshow2");
slideshow2.currentSlideIndex = 1;
showSlides(slideshow2.currentSlideIndex, slideshow2);

var slideshow3 = document.getElementById("slideshow3");
slideshow3.currentSlideIndex = 1;
showSlides(slideshow3.currentSlideIndex, slideshow3);

var slideshow4 = document.getElementById("slideshow4");
slideshow4.currentSlideIndex = 1;
showSlides(slideshow4.currentSlideIndex, slideshow4);

function plusSlides(n, slideshow) {
    document.getElementById('player1').pause();
    document.getElementById('player2').pause();
    showSlides(slideshow.currentSlideIndex += n, slideshow);
}

function currentSlide(n, slideshow) {
    document.getElementById('player1').pause();
    document.getElementById('player2').pause();
    showSlides(slideshow.currentSlideIndex = n, slideshow);
}

function showSlides(n, slideshow) {
    var i;
    var slides = slideshow.getElementsByClassName("mySlides");
    var dots = slideshow.getElementsByClassName("dot");
    if (n > slides.length) {slideshow.currentSlideIndex = 1}    
    if (n < 1) {slideshow.currentSlideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideshow.currentSlideIndex-1].style.display = "block";  
    dots[slideshow.currentSlideIndex-1].className += " active";
}

var slideshow0 = document.getElementById("slideshow0");
//slideshow0.currentSlideIndex = 1;
//showSlides(slideshow0.currentSlideIndex, slideshow0);
var slideIndex = 0;
showSlides_auto();

function showSlides_auto() {
  var i;
  var slides = slideshow0.getElementsByClassName("mySlides");
  var dots = slideshow0.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides_auto, 2600); // Change image every 2.6 seconds
}