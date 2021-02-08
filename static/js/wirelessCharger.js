// window.onscroll = function() {scrollIndicator()};

window.addEventListener('scroll', scrollIndicator)

function scrollIndicator() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.querySelector("#progressBar").style.width = scrolled + "%";
}