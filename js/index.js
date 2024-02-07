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

const changeMoodButton = document.querySelector(".changeMoodButton__icon");
const features = document.querySelectorAll(".features .feature");
const storyContent = document.querySelector(".story__content");
const homes = document.querySelectorAll(".homes .home");
const gallery = document.querySelector(".gallery");

changeMoodButton.addEventListener("click", () => {
  document.body.classList.toggle("darkMode");
  changeMoodButton.classList.toggle("dark");
  sidebar.classList.toggle("dark");
  storyContent.classList.toggle("dark");
  gallery.classList.toggle("dark");
  features.forEach((feature) => {
    feature.classList.toggle("dark");
  });
  homes.forEach((home) => {
    home.classList.toggle("dark");
  });
});
