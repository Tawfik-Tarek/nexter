const likeButtonsForHomes = document.querySelectorAll(".home__like");
likeButtonsForHomes.forEach((likeButton) => {
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("active");
  });
});

const sidebar = document.querySelector(".sidebar");
const sidebarButton = document.querySelector(".sidebar__btn");
sidebarButton.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});