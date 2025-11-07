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
  },

  addSelectionSectionEventListener: function () {
    const nextButton = document.querySelector(".selection .next-button");
    const previousButton = document.querySelector(".selection .previous-button");
    const gridWrapper = document.querySelector(".selection-tiles .grid-wrapper");
    const tileWidth = document.querySelector(".selection-tile").clientWidth;

    const scrollMin = 0;
    const scrollMax = gridWrapper.scrollWidth - (tileWidth * 10);
    let currentScroll = 0;

    nextButton.addEventListener("click", e => {
      currentScroll = Math.min(Math.max(scrollMin, gridWrapper.scrollLeft + (tileWidth * 9)), scrollMax);
      htmlRenderer.scrollLeft(gridWrapper, currentScroll);
    });

    previousButton.addEventListener("click", e => {
      currentScroll = Math.min(Math.max(scrollMin, gridWrapper.scrollLeft - (tileWidth * 9)), scrollMax);
      htmlRenderer.scrollLeft(gridWrapper, currentScroll);
    });

    gridWrapper.addEventListener("scroll", e => {
      currentScroll >= scrollMax ? htmlRenderer.hideElement(nextButton) : htmlRenderer.showElement(nextButton);
      currentScroll <= scrollMin ? htmlRenderer.hideElement(previousButton) : htmlRenderer.showElement(previousButton);
    });
  }
}

export default eventManager;