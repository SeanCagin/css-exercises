const dropdownContainer = document.querySelector(".dropdown-container");
const menuTitle = document.querySelector(".menu-title");
const dropdownMenu = document.querySelector(".dropdown-menu");

let state = 1;

menuTitle.addEventListener("click", (e) => {
  if (state == 0) return;
  if (e.target === e.currentTarget) {
    state = 0;
    if (dropdownMenu.classList.contains("visible")) {
      dropdownMenu.classList.toggle("visible");
      dropdownMenu.classList.add("int");
      setTimeout(() => {
        dropdownMenu.classList.remove("int");
        state = 1;
      }, 1000);
    } else {
      dropdownMenu.classList.toggle("visible");
      setTimeout(() => {
        state = 1;
      }, 1000);
    }
  }
});

window.addEventListener("click", (e) => {
  if (state == 0) return;
  if (
    !dropdownContainer.contains(e.target) &&
    dropdownMenu.classList.contains("visible")
  ) {
    state = 0;
    dropdownMenu.classList.remove("visible");
    dropdownMenu.classList.add("int");
    setTimeout(() => {
      dropdownMenu.classList.remove("int");
      state = 1;
    }, 1000);
  }
});
