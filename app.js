const icon = document.querySelector("header .container .links");
const list = document.querySelector("header .container .links ul");
const listSpan = document.querySelector("header .icon .second");

icon.addEventListener("click", function () {
  list.classList.toggle("visibleul");
  listSpan.classList.toggle("second");
  listSpan.classList.toggle("full");
});
