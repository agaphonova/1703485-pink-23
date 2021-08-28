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
