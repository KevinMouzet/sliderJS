# Slider JavaScript

This is a slide show with controls and autoplay using only JavaScript & CSS. 
Tested in IE11, Firefox 64, Edge 44 and Chrome 71.


# HTML

    <div class="slider">
    
		<!-- put your images here with de "slide" class -->
	    <img src="./img/img1.jpg" alt="img 1" class="slide">
	    
	    <img src="./img/img2.jpg" alt="img 2" class="slide">
	    
	    <img src="./img/img3.jpg" alt="img 3" class="slide">
	    
	    <img src="./img/img4.jpg" alt="img 4" class="slide">
	    <!-- end of your images -->


	    <img src="./img/left.svg" alt="precedent" title="Precedent" class="arrow left" id="slider_prec">
	    
	    <img src="./img/right.svg" alt="following" title="following" class="arrow right" id="slider_follow">
	    
    </div>

To use this slider with your own images, just put them in the "div.slider" with the "slide" class.

## CSS

    /* slider */
    .slider {
      width: 60%;
      height: 40vw;
      background-color: grey;
      position: relative;
      text-align: center;
      overflow: hidden;
    }
    
    /* slides */
    .slider .slide {
      position: absolute;
      height: 100%;
      right: 0;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      transition: opacity 0.8s;
    }
    
    /* controls */
    .slider img.arrow {
      width: 50px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background-color: rgba(20, 20, 20, 0.5);
      padding: 1%;
      cursor: pointer;
    }
    
    .slider img.left {
      left: 0;
    }
    
    .slider img.right {
      right: 0;
    }
To adapt the size of the slider, change the height and width properties of ".slider".

## JavaScript

   

      // slider ------------------------------------------------------------------------------------------------------------
    
    (function() {
    
    
      // get the slides
      const slides = document.querySelectorAll(".slide");
      // the active slide is the last of the tab
      var slideActive = slides.length - 1;
    
      // the duration of each slide in ms
      const slideDuration = 4000;
    
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
    
      var lancementSlider = setInterval(sliderTempo, slideDuration);
    
    
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
        lancementSlider = setInterval(sliderTempo, slideDuration);
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
        lancementSlider = setInterval(sliderTempo, slideDuration);
      }
    
      sliderPrec.addEventListener("click", slidePrec);
      sliderFollow.addEventListener("click", slideFollow);
    
    })();
    


This script use CSS transition on the opacity's property of the slides to switch them. 


### AutoPlay

To change the duration of the autoplay, just change the value of "const slideDuration". This value must be a number in millisecond.



## Compatibility

Tested in IE11, Firefox 64, Edge 44 and Chrome 71.
