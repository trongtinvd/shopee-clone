import htmlRenderer from "./htmlRenderer.js";
import { clamp } from "./utils.js";

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

  addSectionNavigationButtonListener: function (scrollType, nextButton, previousButton, itemWrapper, itemWidth) {
    if (scrollType === "x") {
      const itemPerView = Math.floor(itemWrapper.clientWidth / itemWidth);
      const itemPerScroll = itemPerView - 1;
      const scrollMin = 0;
      const scrollMax = itemWrapper.scrollWidth - (itemWidth * itemPerView);
      const distanceEachScroll = itemWidth * itemPerScroll;
      let currentScroll = 0;

      nextButton.addEventListener("click", e => {
        currentScroll = clamp(scrollMin, itemWrapper.scrollLeft + distanceEachScroll, scrollMax);
        htmlRenderer.scrollLeft(itemWrapper, currentScroll);
      });

      previousButton.addEventListener("click", e => {
        currentScroll = Math.min(Math.max(scrollMin, itemWrapper.scrollLeft - distanceEachScroll), scrollMax);
        htmlRenderer.scrollLeft(itemWrapper, currentScroll);
      });

      itemWrapper.addEventListener("scroll", e => {
        itemWrapper.scrollLeft + itemWidth / 2 >= scrollMax ? htmlRenderer.hideElement(nextButton) : htmlRenderer.showElement(nextButton);
        itemWrapper.scrollLeft - itemWidth / 2 <= scrollMin ? htmlRenderer.hideElement(previousButton) : htmlRenderer.showElement(previousButton);
      });
    }
  },

  addSelectionSectionEventListener: function () {
    const nextButton = document.querySelector(".selection .next-button");
    const previousButton = document.querySelector(".selection .previous-button");
    const gridWrapper = document.querySelector(".selection-tiles .grid-wrapper");
    const tileWidth = document.querySelector(".selection-tile").clientWidth;
    this.addSectionNavigationButtonListener("x", nextButton, previousButton, gridWrapper, tileWidth);
  },

  addFlashSaleSectionListener: function () {
    const nextButton = document.querySelector(".flash-sale-body .next-button");
    const previousButton = document.querySelector(".flash-sale-body .previous-button");
    const gridWrapper = document.querySelector(".flash-sale-tiles");
    const tileWidth = document.querySelector(".flash-sale-tile").clientWidth;
    this.addSectionNavigationButtonListener("x", nextButton, previousButton, gridWrapper, tileWidth);
  },

  addMallPromotionsSectionListener: function () {
    const nextButton = document.querySelector(".mall-promotions-body .next-button");
    const previousButton = document.querySelector(".mall-promotions-body .previous-button");
    const gridWrapper = document.querySelector(".mall-promotions-tiles");
    const tileWidth = document.querySelector(".mall-promotions-tile").clientWidth;
    this.addSectionNavigationButtonListener("x", nextButton, previousButton, gridWrapper, tileWidth);
  },

  addTopSearchedSectionListener: function () {
    const nextButton = document.querySelector(".top-searched-body .next-button");
    const previousButton = document.querySelector(".top-searched-body .previous-button");
    const gridWrapper = document.querySelector(".top-searched-tiles");
    const tileWidth = document.querySelector(".top-searched-tile").clientWidth;
    this.addSectionNavigationButtonListener("x", nextButton, previousButton, gridWrapper, tileWidth);
  }
}

export default eventManager;