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

  addProductTypesSectionEventListener: function () {
    const nextButton = document.querySelector(".product-type .next-button");
    const previousButton = document.querySelector(".product-type .previous-button");
    const gridWrapper = document.querySelector(".product-type-tiles");
    const tileWidth = document.querySelector(".product-type-tile").clientWidth;
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

  addTopSearchesSectionListener: function () {
    const nextButton = document.querySelector(".top-searches-body .next-button");
    const previousButton = document.querySelector(".top-searches-body .previous-button");
    const gridWrapper = document.querySelector(".top-searches-tiles");
    const tileWidth = document.querySelector(".top-searches-tile").clientWidth;
    this.addSectionNavigationButtonListener("x", nextButton, previousButton, gridWrapper, tileWidth);
  },

  addLogoutEvent: function () {
    const logout = document.getElementById('logout-button');
    logout.addEventListener('click', e => {
      fetch('/api/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: "include",
        body: JSON.stringify({ sessionCode: Cookies.get('sessionCode') })
      })
        .then(response => response.json())
        .then(response => {
          const { status, title, message, data, error } = response;
          if (status === 200) {
            Cookies.remove("sessionCode");
            window.location.href = '/';
          }
          else {
            throw new Error(response);
          }
        })
        .catch(error => {
          console.log(`lopgout error: ${JSON.stringify(error)}`);
        })
    })
  },

  addSearchingEvent: function () {
    const searchBar = document.getElementById('search-bar');
    const searchButton = document.getElementById('search-button');

    searchButton.addEventListener('click', e => {
      e.preventDefault();
      window.location.href = `/search?keyword=${searchBar.value}`;
    });
  },

  addProductEvents: function (data) {
    const scrollingImages = document.querySelectorAll('.image-scroller img');
    for (const image of scrollingImages) {
      image.addEventListener('click', e => {
        document.querySelector('.big-image img').src = image.src;
      });
    }

    const amountInput = document.getElementById('amount');
    document.getElementById('decrease-amount').addEventListener('click', e => {
      e.preventDefault();
      const newValue = Math.max(0, new Number(amountInput.value) - 1);
      amountInput.value = newValue;
    });
    document.getElementById('increase-amount').addEventListener('click', e => {
      e.preventDefault();
      const newValue = new Number(amountInput.value) + 1;
      amountInput.value = newValue;
    });

    const variationNames = [data.variation1, data.variation2, data.variation3]
    let chosenValues = [null, null, null];
    const buyingForm = document.getElementById('buying-form');
    buyingForm.addEventListener('change', e => {
      const variationIndex = variationNames.findIndex(item => item === e.target.name)
      if (e.target.type === 'radio') {
        chosenValues[variationIndex] = e.target.value;
        const selectedVariation = data.variations.find(item => item.value1 === chosenValues[0] && item.value2 === chosenValues[1] && item.value3 === chosenValues[2]);
        document.querySelector('.true-price').innerHTML = htmlRenderer.textOfPrice(selectedVariation.price);
      }
    })
  }
}

export default eventManager;