var siteList = document.querySelector('.site-list');
var navToggle = document.querySelector('.site-list__toggle');
var toggleIconOpen = document.querySelector('.site-list__open');
var toggleIconClose = document.querySelector('.site-list__close');

siteList.classList.remove('site-list--nojs');

navToggle.addEventListener('click', function() {
  if (siteList.classList.contains('site-list--closed')) {
    siteList.classList.remove('site-list--closed');
    siteList.classList.add('site-list--opened');
    navToggle.classList.add('site-list__toggle--opened');
    toggleIconOpen.classList.add('site-list__open--hidden');
    toggleIconClose.classList.remove('site-list__close--hidden')
  } else {
    siteList.classList.add('site-list--closed');
    siteList.classList.remove('site-list--opened');
    navToggle.classList.remove('site-list__toggle--opened')
    toggleIconOpen.classList.remove('site-list__open--hidden');
    toggleIconClose.classList.add('site-list__close--hidden');
  }
});
