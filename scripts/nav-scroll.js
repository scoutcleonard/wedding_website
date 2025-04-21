let lastScrollTop = 0;
const navbar = document.querySelector('header.navbar');

window.addEventListener('scroll', function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scrolling down
    navbar.style.top = "-100px";
  } else {
    // Scrolling up
    navbar.style.top = "0";
  }

  lastScrollTop = scrollTop;
});
