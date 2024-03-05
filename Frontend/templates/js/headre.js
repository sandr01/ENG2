document.addEventListener('DOMContentLoaded', function() {
  const params = new URLSearchParams(window.location.search);
  const activeMenuIndex = params.get('menu');

  const list = document.querySelectorAll('.list');
  list.forEach((item, index) => {
      if (index + 1 == activeMenuIndex) {
          item.classList.add('active');
          updateIndicator(index);
      } else {
          item.classList.remove('active');
      }
  });
});

function updateIndicator(index) {
  const indicator = document.querySelector('.indicator');
  indicator.style.transform = `translatex(calc(70px * ${index}))`;
}

document.getElementById('logoutButton').addEventListener('click', function() {
  window.location.href = '../../index.html';
});

let toggleBtn = document.getElementById("cad");
let menuItems = document.querySelectorAll(".cad_menu a");
let menuActive = false;
toggleBtn.addEventListener("click", () => {
  if (!menuActive) {
    menuItems[0].style.transform = "translate(0px,65px)";
    menuItems[1].style.transform = "translate(0px,130px)";
    menuItems[2].style.transform = "translate(0px,195px)";
    menuItems[3].style.transform = "translate(0px,0px)";
    menuActive = true;
    toggleBtn.classList.add("active");
  } else {
    menuItems.forEach((menuItem) => {
      menuItem.style.transform = "translate(0,0)";
    });
    menuActive = false;
    toggleBtn.classList.remove("active");
  }
});
