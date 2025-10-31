console.log("start");


const mainBanner = document.querySelector(".main-banner");

function changeBanner(newIndex) {
  const oldBanner = document.querySelector(".active-main-banner");
  const oldIndex = oldBanner.dataset.bannerIndex;
  const oldButton = document.querySelector(`[data-banner-navigation-index='${oldIndex}']`);
  const newBanner = document.querySelector(`[data-banner-index='${newIndex}']`);
  const newButton = document.querySelector(`[data-banner-navigation-index='${newIndex}']`);
  if (newBanner) {
    mainBanner.scrollLeft = oldBanner.clientWidth * newIndex;

    oldBanner.classList.remove("active-main-banner");
    newBanner.classList.add("active-main-banner");

    oldButton.classList.remove("active-banner-navigation-button");
    newButton.classList.add("active-banner-navigation-button");
  }
}

document.querySelector(".next-banner-button").addEventListener("click", event => {
  const currentBanner = document.querySelector(".active-main-banner");
  const currentIndex = currentBanner.dataset.bannerIndex;
  changeBanner(Number(currentIndex) + 1);
});

document.querySelector(".previous-banner-button").addEventListener("click", event => {
  const currentBanner = document.querySelector(".active-main-banner");
  const currentIndex = currentBanner.dataset.bannerIndex;
  changeBanner(Number(currentIndex) - 1);
});

document.querySelectorAll(".banner-navigation-button").forEach(button => {
  button.addEventListener("click", event => {
    const nextIndex = button.dataset.bannerNavigationIndex;
    changeBanner(nextIndex);
  })
});