import htmlRenderer from "./htmlRenderer.js";
import { clamp } from "./utils.js";
import Cookies from "https://cdn.jsdelivr.net/npm/js-cookie@3.0.5/dist/js.cookie.mjs";

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

  '/product': {
    submitData: {
      amount: 0,
      variation: null
    },

    spinnerButtonsOnClick() {
      const amountInput = document.getElementById('amount');
      document.getElementById('decrease-amount').addEventListener('click', e => {
        e.preventDefault();
        const newValue = Math.max(0, new Number(amountInput.value) - 1);
        amountInput.value = newValue;
        this.submitData.amount = newValue;
        this.updateProductFormButtonAvailability();
      });
      document.getElementById('increase-amount').addEventListener('click', e => {
        e.preventDefault();
        const newValue = new Number(amountInput.value) + 1;
        amountInput.value = newValue;
        this.submitData.amount = newValue;
        this.updateProductFormButtonAvailability();
      });
    },

    updateBigImageOnClick() {
      const scrollingImages = document.querySelectorAll('.image-scroller img');
      for (const image of scrollingImages) {
        image.addEventListener('click', e => {
          document.querySelector('.big-image img').src = image.src;
        });
      }
    },

    updatePriceOnChange(data) {
      let chosenValues = [null, null, null];
      document.getElementById('buying-form').addEventListener('change', e => {
        if (e.target.type === 'radio') {
          const i = data.catergories.findIndex(item => item === e.target.name)
          chosenValues[i] = e.target.value;
          this.submitData.variation = data.variations.find(item => item.value1 === chosenValues[0] && item.value2 === chosenValues[1] && item.value3 === chosenValues[2]);
          if (this.submitData.variation)
            document.querySelector('.true-price').innerHTML = htmlRenderer.textOfPrice(this.submitData.variation.price);
          this.updateProductFormButtonAvailability();
        }
      });
    },

    addToCartOnClick(data) {
      document.getElementById('add-to-cart-button').addEventListener('click', e => {
        e.preventDefault();
        const formData = new FormData(document.getElementById('buying-form'));
        this.submitData.amount = formData.get('amount');
        this.submitData.variation = data.variations.find(item => item.value1 === formData.get(data.catergories[0]) && item.value2 === formData.get(data.catergories[1]) && item.value3 === formData.get(data.catergories[2]));

        fetch('/api/addToCart', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          credentials: "include",
          body: JSON.stringify({
            sessionCode: Cookies.get('sessionCode'),
            item: this.submitData
          })
        })
          .then(response => response.json())
          .then(response => {
            console.log(response);
          })
          .catch(error => {
            console.log('error at /api/cart', error);
          });
      });
    },

    updateProductFormButtonAvailability() {
      const decreaseButton = document.getElementById('decrease-amount');
      const addToCartButton = document.getElementById('add-to-cart-button');
      const buyNowButton = document.getElementById('buy-now-button');
      const amountInput = document.getElementById('amount');
      if (amountInput.value > 0 && this.submitData.variation) {
        decreaseButton.disabled = false;
        addToCartButton.disabled = false;
        buyNowButton.disabled = false;
      }
      else {
        decreaseButton.disabled = true;
        addToCartButton.disabled = true;
        buyNowButton.disabled = true;
      }
    },

    addProductEvents(data) {
      if (data.variations.length === 1)
        this.submitData.variation = data.variations[0];

      this.updateBigImageOnClick();
      this.spinnerButtonsOnClick();
      this.updatePriceOnChange(data);
      this.updateProductFormButtonAvailability();
      this.addToCartOnClick(data);
    }
  },
}

export default eventManager;