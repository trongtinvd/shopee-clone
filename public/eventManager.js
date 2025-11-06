import htmlRenderer from "./htmlRenderer.js";

const eventManager = {

  addBannerEventListeners: function () {
    this.addNextBannerButtonListener();
    this.addPreviousBannerButtonListener();
    this.addBannerNvigationButtonListener();
  },

  addNextBannerButtonListener: function () {
    document.querySelector(".next-banner-button").addEventListener("click", event => {
      const currentBanner = document.querySelector(".active-main-banner");
      const currentIndex = currentBanner.dataset.bannerIndex;
      htmlRenderer.changeActiveBanner(Number(currentIndex) + 1);
    });
  },

  addPreviousBannerButtonListener: function () {
    document.querySelector(".previous-banner-button").addEventListener("click", event => {
      const currentBanner = document.querySelector(".active-main-banner");
      const currentIndex = currentBanner.dataset.bannerIndex;
      htmlRenderer.changeActiveBanner(Number(currentIndex) - 1);
    });
  },

  addBannerNvigationButtonListener: function () {
    document.querySelectorAll(".banner-navigation-button").forEach(button => {
      button.addEventListener("click", event => {
        const nextIndex = button.dataset.bannerNavigationIndex;
        htmlRenderer.changeActiveBanner(nextIndex);
      })
    });
  }
}

export default eventManager;