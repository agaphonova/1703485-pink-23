var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});



var navColor = document.querySelector('.page-header__line-menu');
var Toggle = document.querySelector('.main-nav__toggle');

Toggle.addEventListener('click', function() {
  if (navColor.classList.contains('page-header__line-menu--closed')) {
    navColor.classList.remove('page-header__line-menu--closed');
    navColor.classList.add('page-header__line-menu--opened');
  } else {
    navColor.classList.add('page-header__line-menu--closed');
    navColor.classList.remove('page-header__line-menu--opened');
  }
});

//slider reviews

let slideIndex = 1;

showSlides(slideIndex);

function nextSlide() {
    showSlides(slideIndex += 1);
}

function previousSlide() {
    showSlides(slideIndex -= 1);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
  }

function showSlides(n) {
    let slides = document.getElementsByClassName("slider__item");
    let dots = document.getElementsByClassName("reviews__toggle");

    if (n > slides.length) {
        slideIndex = 1
    }

    if (n < 1) {
        slideIndex = slides.length
    }

    for (let slide of slides) {
        slide.style.display = "none";
    }

    for (i =0; i < dots.length; i ++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


//slider tafiffs

let slideTabIndex = 1;

tableSlides(slideTabIndex);

function nextTableSlide() {
    tableSlides(slideTabIndex += 1);
}

function previousTableSlide() {
    tableSlides(slideTabIndex -= 1);
}

function currentTableSlide(n) {
    tableSlides(slideTabIndex = n);
  }

function tableSlides(n) {
  let slides = document.getElementsByClassName("tariffs__list-slider");
  let dots = document.getElementsByClassName("option-toggle__btn");

  if (n > slides.length) {
    slideTabIndex = 1
  }

  if (n < 1) {
    slideTabIndex = slides.length
  }

  for (let slide of slides) {
    slide.style.display = "none";
  }

  for (i =0; i < dots.length; i ++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideTabIndex - 1].style.display = "block";
  dots[slideTabIndex - 1].className += " active";
}
