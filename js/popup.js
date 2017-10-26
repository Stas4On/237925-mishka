var cartOne = document.querySelector(".product__cart--js1");
var cartTwo = document.querySelector(".product__cart--js2");
var cartThree = document.querySelector(".product__cart--js3");
var popupSize = document.querySelector(".modal");
var popupSizeIndex = document.querySelector(".modal--index");
var modalCover = document.querySelector(".modal__cover");
var topWeeksBtn = document.querySelector(".top-weeks__button");

if(cartOne) {
  cartOne.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupSize.classList.add("modal--show");
  });
}

if(cartTwo) {
  cartTwo.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupSize.classList.add("modal--show");
  });
}

if(cartThree) {
  cartThree.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupSize.classList.add("modal--show");
  });
}

if(topWeeksBtn) {
  topWeeksBtn.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupSizeIndex.classList.add("modal--show");
  });
}

modalCover.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupSize.classList.remove("modal--show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popupSize.classList.contains("modal--show")) {
      popupSize.classList.remove("modal--show");
    }
  }
});
