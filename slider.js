// slider ------------------------------------------------------------------------------------------------------------

(function() {


  // rget the slides
  const slides = document.querySelectorAll(".slide");
  // the active slide is the last of the tab
  var slideActive = slides.length - 1;


  // turn the opacity of the slide to zero to reveal the slide under. Start from the last. If the active slide is the last, turn all the slide's opacity to 1 and restart

  function sliderTempo() {
    if (slideActive >= 0) {
      slides[slideActive].style.opacity = "0";
      slideActive--;
    }
    if (slideActive < 0) {
      slideActive = slides.length - 1;
      slides.forEach(function(slide) {
        slide.style.opacity = "1";
      });
    }
  }

  var lancementSlider = setInterval(sliderTempo, 4000);


  // Slider's controls

  const sliderPrec = document.getElementById("slider_prec");
  const sliderFollow = document.getElementById("slider_follow");

  function slidePrec() {
    // stop interval
    clearInterval(lancementSlider);
    // If the active slide is not the last, display the precedent slide, ++ the slideActive and restart the interval
    if (slideActive !== slides.length - 1) {
      slides[slideActive + 1].style.opacity = "1";
      slideActive++;
    }
    // If the active slide is the first, display the last
    else {
      for (let i = 1; i < slides.length; i++) {
        slides[i].style.opacity = "0";
      }
      slideActive = 0;
    }
    // restart the interval
    lancementSlider = setInterval(sliderTempo, 4000);
  }

  function slideFollow() {
    // stop interval
    clearInterval(lancementSlider);
    // If the active slide is not the fist, display the precedent slide, ++ the slideActive and restart the interval
    if (slideActive !== 0) {
      slides[slideActive].style.opacity = "0";
      slideActive--;
    }
    // If the active slide is the first, display the last
    else {
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.opacity = "1";
      }
      slideActive = slides.length - 1;
    }
    // restart interval
    lancementSlider = setInterval(sliderTempo, 4000);
  }

  sliderPrec.addEventListener("click", slidePrec);
  sliderFollow.addEventListener("click", slideFollow);

})();