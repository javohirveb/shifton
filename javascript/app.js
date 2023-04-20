// bars
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
   if (!menuOpen) {
      menuBtn.classList.add('open');
      menuOpen = true;
   } else {
      menuBtn.classList.remove('open');
      menuOpen = false;
   }
});

// nav list
const navbarList = document.querySelector(".navbar__list")

menuBtn.addEventListener("click", () => {
   menuBtn.classList.toggle("left-90")
   navbarList.classList.toggle("left-0")
})