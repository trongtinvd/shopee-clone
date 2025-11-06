import htmlRenderer from "./htmlRenderer.js";

const eventManager = {

  addBannerEventListeners: function () {
    this.addNextBannerButtonListener();
    this.addPreviousBannerButtonListener();
    this.addBannerNavigationButtonListener();
  },

  addNextBannerButtonListener: function () {
    document.querySelector(".next-banner-button").addEventListener("click", event => {
      const mainBanners = document.querySelector(".main-banners");
      const currentBanner = document.querySelector(".active-main-banner");
      const currentIndex = Number(currentBanner.dataset.bannerIndex);
      const nextIndex = currentIndex === (mainBanners.childElementCount - 1) ? 0 : currentIndex + 1
      htmlRenderer.changeActiveBanner(nextIndex);
    });
  },

  addPreviousBannerButtonListener: function () {
    document.querySelector(".previous-banner-button").addEventListener("click", event => {
      const mainBanners = document.querySelector(".main-banners");
      const currentBanner = document.querySelector(".active-main-banner");
      const currentIndex = Number(currentBanner.dataset.bannerIndex);
      const nextIndex = currentIndex === 0 ? mainBanners.childElementCount - 1 : currentIndex - 1;
      htmlRenderer.changeActiveBanner(nextIndex);
    });
  },

  addBannerNavigationButtonListener: function () {
    document.querySelectorAll(".banner-navigation-button").forEach(button => {
      button.addEventListener("click", event => {
        const nextIndex = button.dataset.bannerNavigationIndex;
        htmlRenderer.changeActiveBanner(nextIndex);
      })
    });
  }
}

export default eventManager;