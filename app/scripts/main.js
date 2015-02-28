(function(){
  $(document).ready(function() {
    var select = $('.select');
    var selectMenu = $('.select__menu');
    var btnReadMore  = $('.content__discripton-btn');
    var list = $('.content__discripton-list')

    select.click(function() {
      $(this).find(selectMenu).fadeToggle();
      return false;
    })
    btnReadMore.click(function() {
      $(this).hide();
      list.fadeIn();
      return false;
    })
    initSlider();

    function initSlider() {
      var slideSpeed = 1000;

      var slider = $('.slider');
      var slides = $('.slider__img-wrap');
      var btnPrev = $('.slider__btn-prev');
      var btnNext = $('.slider__btn-next');

      var slideNumber = 0;
      var slidesCount = slides.length;

      btnNext.click(function() {
        nextSlide();
        return false;
      });

      btnPrev.click(function() {
        prevSlide();
        return false;
      });

      function nextSlide() {
        var prevSlideNumber = slideNumber;
        if (slideNumber === slidesCount - 1) {
          slideNumber = 0;
        } else {
          slideNumber = slideNumber + 1;
        }

        changeSlide(prevSlideNumber, slideNumber);
      }

      function prevSlide() {
        var prevSlideNumber = slideNumber;
        if (slideNumber == 0) {
          slideNumber = slidesCount - 1;
        } else {
          slideNumber = slideNumber - 1;
        }
        changeSlide(prevSlideNumber, slideNumber);
      }


      function changeSlide(prevSlideNumber, currentSlideNumber){
        slides.stop(true, true);
        slides.eq(prevSlideNumber).removeClass('current');
        slides.eq(currentSlideNumber).addClass('current');
      }

    }
  })

})()
