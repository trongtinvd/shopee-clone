
const htmlRenderer = {

  renderBanner: function (data) {
    const mainBannerData = data["main-banners"];
    const subBannerData = data["sub-banners"];

    const mainBanner = document.querySelector(".main-banner");
    for (let i = 0; i < mainBannerData.length; i++) {
      mainBanner.insertAdjacentHTML("beforeend", `<a href="${mainBannerData[i].link}" target="_blank"><img data-banner-index="${i}" class="${i === 0 ? "active-main-banner" : ""}" src="${mainBannerData[i].img}" alt="main banner #${i}"></a>`);
    }
    mainBanner.insertAdjacentHTML("afterend", `<a href="${subBannerData[1].link}" target="_blank"><div class="banner"><img src="${subBannerData[1].img}" alt="sub banner #${1}"></div></a>`);
    mainBanner.insertAdjacentHTML("afterend", `<a href="${subBannerData[0].link}" target="_blank"><div class="banner"><img src="${subBannerData[0].img}" alt="sub banner #${0}"></div></a>`);

    const bannerNavigation = document.querySelector(".banner-navigation");
    for (let i = 0; i < mainBannerData.length; i++) {
      bannerNavigation.insertAdjacentHTML("beforeend", `<button data-banner-navigation-index="${i}" class="banner-navigation-button ${i === 0 ? "active-banner-navigation-button" : ""}"></button>`);
    }
  },

  changeActiveBanner: function (newIndex) {
    const mainBanner = document.querySelector(".main-banner");
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
}

export default htmlRenderer;