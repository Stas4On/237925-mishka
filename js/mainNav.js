var siteList = document.querySelector('.site-list');
var navToggle = document.querySelector('.site-list__toggle');

siteList.classList.remove('site-list--nojs');

navToggle.addEventListener('click', function() {
  if (siteList.classList.contains('site-list--closed')) {
    siteList.classList.remove('site-list--closed');
    siteList.classList.add('site-list--opened');
    navToggle.classList.add('site-list__toggle--opened')
  } else {
    siteList.classList.add('site-list--closed');
    siteList.classList.remove('site-list--opened');
    navToggle.classList.remove('site-list__toggle--opened')
  }
});
