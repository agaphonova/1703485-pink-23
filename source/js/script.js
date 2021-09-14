var navColor = document.querySelector('.page-header__line-menu');
var Toggle = document.querySelector('.menu-btn');

Toggle.addEventListener('click', function() {
  if (navColor.classList.contains('page-header__line-menu--closed')) {
    navColor.classList.remove('page-header__line-menu--closed');
    navColor.classList.add('page-header__line-menu--opened');
  } else {
    navColor.classList.add('page-header__line-menu--closed');
    navColor.classList.remove('page-header__line-menu--opened');
  }
});

// //slider
// let slideIndex = 1;

// showSlides(slideIndex);

// function nextSlide() {
//     showSlides(slideIndex += 1);
// }

// function previousSlide() {
//     showSlides(slideIndex -= 1);
// }

// function currentSlide(n) {
//     showSlides(slideIndex = n);
//   }

// function showSlides(n) {
//     let slides = document.getElementsByClassName("item");
//     let dots = document.getElementsByClassName("current-slide");

//     if (n > slides.length) {
//         slideIndex = 1
//     }
//     if (n < 1) {
//         slideIndex = slides.length
//     }

//     for (let slide of slides) {
//         slide.style.display = "none";
//     }

//     for (i =0; i < dots.length; i ++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }

//     slides[slideIndex - 1].style.display = "block";
//     dots[slideIndex - 1].className += " active";
// }

// var navMain = document.querySelector('.main-nav');
// var navToggle = document.querySelector('.main-nav__toggle');

// navMain.classList.remove('main-nav--nojs');

// navToggle.addEventListener('click', function() {
//   if (navMain.classList.contains('main-nav--closed')) {
//     navMain.classList.remove('main-nav--closed');
//     navMain.classList.add('main-nav--opened');
//   } else {
//     navMain.classList.add('main-nav--closed');
//     navMain.classList.remove('main-nav--opened');
//   }
// });




//modal
// const contactLink = document.querySelector(".modal");
// const contactPopup = document.querySelector(".modal-success");
// const contactClose = contactPopup.querySelector(".modal__form-button");

// contactLink.addEventListener("click", function (evt) {
//   evt.preventDefault();
//   contactPopup.classList.add("modal-show");
//   contactName.focus();
// });

// contactClose.addEventListener("click", function () {
//   contactPopup.classList.remove("modal-show");
// });
