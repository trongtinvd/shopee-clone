
const htmlRenderer = {

  htmlOfBannerNavigationButton: function (index) {
    return `<button data-banner-navigation-index="${index}" class="banner-navigation-button ${index === 0 ? "active-banner-navigation-button" : ""}"></button>`;
  },

  htmlOfSubBanner: function (data, index) {
    return `<a href="${data.link}" target="_blank"><div class="banner"><img src="${data.image}" alt="sub banner #${index}"></div></a>`;
  },

  htmlOfMainBanner: function (data, index) {
    return `<a href="${data.link}" target="_blank"><img data-banner-index="${index}" class="${index === 0 ? "active-main-banner" : ""}" src="${data.image}" alt="main banner #${index}"></a>`;
  },

  renderBanner: function (data) {
    const { mainBanners: mainBannerData, subBanners: subBannerData } = data;

    const mainBanners = document.querySelector(".main-banners");
    for (let i = 0; i < mainBannerData.length; i++) {
      mainBanners.insertAdjacentHTML("beforeend", this.htmlOfMainBanner(mainBannerData[i], i));
    }

    mainBanners.insertAdjacentHTML("afterend", this.htmlOfSubBanner(subBannerData[1], 1));
    mainBanners.insertAdjacentHTML("afterend", this.htmlOfSubBanner(subBannerData[0], 0));

    const bannerNavigation = document.querySelector(".banner-navigation");
    for (let i = 0; i < mainBannerData.length; i++) {
      bannerNavigation.insertAdjacentHTML("beforeend", this.htmlOfBannerNavigationButton(i));
    }
  },

  changeActiveBanner: function (newIndex) {
    const mainBanner = document.querySelector(".main-banners");
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
  },

  htmlOfUserName: function (username) {
    return `<span> ${username}</span>`;
  },

  htmlOfProfilePicture: function (profilePicture) {
    return `<img src="${profilePicture}" alt="profile picture" >`;
  },

  renderUser: function (data) {
    const avatar = document.querySelector(".avatar");
    avatar.insertAdjacentHTML("afterbegin", this.htmlOfUserName(data.displayName));
    avatar.insertAdjacentHTML("afterbegin", this.htmlOfProfilePicture(data.profilePicture));
  },

  htmlOfSuggestSearchItem: function (data) {
    return `<a href="${[data.link]}" target="_blank">${data.suggest}</a>`;
  },

  renderSuggestSearch: function (data) {
    const suggestSearch = document.querySelector(".suggest-searchs");
    for (let i = 0; i < data.length; i++) {
      suggestSearch.insertAdjacentHTML("afterbegin", this.htmlOfSuggestSearchItem(data[i]));
    }
  },

  htmlOfNotificationItem: function (data) {
    return `<a href="${data.link}" target="_blank" rel="noopener noreferrer" class="notification-link">
              <img src="${data.image}" alt="" class="notification-image">
              <p class="notification-title">${data.name}</p>
              <p class="notification-content">${data.description}</p>
            </a>`;
  },

  renderNotification: function (data) {
    const notification = document.querySelector(".notification-popup-body");
    for (let i = 0; i < data.length; i++) {
      notification.insertAdjacentHTML("beforeend", this.htmlOfNotificationItem(data[i]));
    }
  },

  renderSearchHistory: function (data) {
    const searchHistory = document.querySelector(".search-history-popup");
    for (let i = 0; i < data.length; i++) {
      searchHistory.insertAdjacentHTML("beforeend", `<a href="${data[i]["link"]}" target="_blank"  rel="noopener noreferrer">${data[i]["name"]}</a>`)
    }
  },

  htmlOfEmptyCart: function () {
    return `<div class="empty-cart"><span>Chưa có sản phẩm<span></div>`;
  },

  htmlOfCart: function (numberOfItem) {
    return `<div class="cart-content-header">Sằn phẩm mới xem</div>
            <div class="cart-content-body"></div>
            <div class="cart-content-show-all">
              <span>${numberOfItem} hàng trong giỏ</span>
              <a href="#" target="_blank" rel="noopener noreferrer">Xem giỏ hàng</a>
            </div> `;
  },

  htmlOfCartItem: function (data) {
    return `<a href="${data.link}" target="_blank" rel="noopener noreferrer" class="cart-content-item">
              <img src="${data.image}" alt="">
              <span class="cart-item-name">${data.name}</span>
              <span class="cart-item-price">${Intl.NumberFormat('en-US', { style: 'decimal' }).format(data.price)}</span>
            </a>`;
  },

  renderCart: function (data) {
    const cart = document.querySelector(".cart-popup");
    if (data.length === 0) {
      cart.innerHTML = this.htmlOfEmptyCart();
      return;
    }
    cart.innerHTML = this.htmlOfCart(data.length);

    const cartBody = document.querySelector(".cart-content-body");
    for (let i = 0; i < data.length; i++) {
      cartBody.insertAdjacentHTML("afterbegin", this.htmlOfCartItem(data[i]));
    }

    const cartIcon = document.querySelector(".cart-icon");
    cartIcon.insertAdjacentHTML("beforeend", `<span class="cart-item-count">${data.length}</span>`);
  },

  scrollLeft: function (element, position) {
    element.scrollLeft = position;
  },

  showElement: function (element) {
    element.style.visibility = "visible";
  },

  hideElement: function (element) {
    element.style.visibility = "hidden";
  },

  renderFlashSale: function (data) {
    this.renderFlashSaleClock(data.start, data.end);
    this.renderFlashSaleItems(data.items);
    this.updateInlineCss(".flash-sale-tiles", `--number-of-items: ${data.items.length}`);
  },

  updateInlineCss: function (element, styles) {
    document.querySelector(element).style.cssText = styles;
  },

  renderFlashSaleClock: function (start, end) {
    const timeStart = new Date(start).getTime();
    const timeEnd = new Date(end).getTime();

    const hourElement = document.querySelector(".clock-item .hour");
    const minuteElement = document.querySelector(".clock-item .minute");
    const secondElement = document.querySelector(".clock-item .second");

    setInterval(() => {
      let timeNow = new Date().getTime();
      if (timeNow > timeStart) {
        let timeLeft = Math.floor((timeEnd - timeNow) / 1000);

        const hourLeft = Math.floor((timeLeft % 86400) / 3600);
        const minuteLeft = Math.floor((timeLeft % 3600) / 60);
        const secondLeft = timeLeft % 60;

        hourElement.innerHTML = String(hourLeft).padStart(2, "0");
        minuteElement.innerHTML = String(minuteLeft).padStart(2, "0");
        secondElement.innerHTML = String(secondLeft).padStart(2, "0");
      }
    }, 1000);
  },

  flashSaleStamps: {
    'Yêu thích': 'img/flash-sale/liked.png',
    'Yêu thích+': 'img/flash-sale/liked+.png',
    'Mall': 'img/flash-sale/mall.png',
    'Choice': 'img/flash-sale/choice.png'
  },

  htmlOfFlashSaleItem: function (data) {
    return `<a href="${data.link}" target="_blank" rel="noopener noreferrer" class="flash-sale-tile" title="${data.name}">
              <img class="sale-item" src="${data.image}" alt="">
              <img class="sale-overlay" src="img/flash-sale/sale-overlay.png" alt="">
              <img class="sale-stamp" src="${this.flashSaleStamps[data.stamp]}" alt="">
              <span class="sale-percent"><i class="fa-solid fa-bolt-lightning"></i>-${data.discount}%</span>
              <div class="sale-price">${Intl.NumberFormat('en-US', { style: 'decimal' }).format(data.price)}</div>
              <div class="sale-remain">
                <p>ĐANG BÁN CHẠY</p>
                <div style="width:${Math.floor(100 * data.remain / data.total)}%" class="sale-remain-percent"></div>
              </div>
            </a>`;
  },

  renderFlashSaleItems: function (data) {
    const flashSaleGrid = document.querySelector(".flash-sale-tiles");
    for (const item of data) {
      flashSaleGrid.insertAdjacentHTML("beforeend", this.htmlOfFlashSaleItem(item));
    }
  },

  htmlOfVoucherBanner: function (image, name) {
    return `<img src="${image}" alt="${name}">`;
  },

  htmlOfVoucherLink: function (link) {
    return `<a href="${link}" target="_blank" rel="noopener noreferrer"></a>`;
  },

  renderVoucherBanners: function (data) {
    const voucherBanner = document.querySelector(".voucher-banner");
    const voucherLinks = document.querySelector(".voucher-links");
    voucherBanner.insertAdjacentHTML("afterbegin", this.htmlOfVoucherBanner(data.image, data.name));
    voucherLinks.insertAdjacentHTML("beforeend", this.htmlOfVoucherLink(data.link1));
    voucherLinks.insertAdjacentHTML("beforeend", this.htmlOfVoucherLink(data.link2));
    voucherLinks.insertAdjacentHTML("beforeend", this.htmlOfVoucherLink(data.link3));
  },

  htmlOfShopeeBanner: function (ad) {
    return `<a href="${ad.link}" target="_blank" rel="noopener noreferrer">
              <img src="${ad.image}" alt="${ad.name}">
            </a>`;
  },

  htmlOfShopeeTile: function (item) {
    return `<a href="${item.link}" target="_blank" rel="noopener noreferrer" class="mall-promotions-tile">
              <img src="${item.image}" alt="${item.name}">
              <p>${item.slogan}</p>
            </a>`;
  },

  renderMallBanners: function (data) {
    const shopeeMallAd = document.querySelector(".mall-promotions-banner");
    shopeeMallAd.insertAdjacentHTML("afterbegin", this.htmlOfShopeeBanner(data));
  },

  renderMallPromotions: function (data) {
    const mallPromotionTiles = document.querySelector(".mall-promotions-tiles");
    mallPromotionTiles.style.cssText = `--number-of-items: ${Math.ceil(data.length / 2)};`;
    for (const item of data) {
      mallPromotionTiles.insertAdjacentHTML("beforeend", this.htmlOfShopeeTile(item));
    }
  },

  htmlOfTopSearchesTile: function (item) {
    return `<a href="${item.link}" target="_blank" rel="noopener noreferrer" class="top-searches-tile">
              <img class="top-searches-item" src="${item.image}" alt="${item.name}">
              <img class="top-searches-overlay" src="img/top-searches/top-searches-overlay.png" alt="">
              <p class="sale-rate">Bán ${item.sold > 1000 ? `${Math.floor(item.sold / 1000)}k` : item.sold}+/tháng</p>
              <p class="product-name">${item.name}</p>
            </a>`;
  },

  renderTopSearches: function (data) {
    const topSearchesTiles = document.querySelector(".top-searches-tiles");
    topSearchesTiles.style.cssText = `--number-of-items: ${data.length};`;
    for (const item of data) {
      topSearchesTiles.insertAdjacentHTML("beforeend", this.htmlOfTopSearchesTile(item));
    }
  },

  htmlOfTodaySuggestedItem: function (item) {
    return `<div class="today-suggestion-item">
            <a href="${item.link}" class="today-suggestion-item-body">
              <img src="${item.image}" alt="" class="product-img">
              ${item.overlays.image ? `<img src="${item.overlays.image}" alt="" class="sale-overlay">` : ``}
              ${item.overlays.discount ? `<span class="discount-overlay">${item.overlays.discount}</span>` : ``}              
              ${item.overlays.video ? `<span class="video-overlay"><i class="fa-solid fa-circle-play"></i></span>` : ``}
              <p class="item-name">
                ${item.labels.map(label => `<span class="${label.style}">${label.text}</span>`).join("")}                
                ${item.name}
              </p>
              <div class="item-tags">
                ${item.tags.map(tag => `<span class="${tag.style}">${tag.text}</span>`).join(" ")}
              </div>
              <div class="price-and-sold">
                <p class="item-price">${item.price}</p>
                <p class="item-sold">Đã bán ${item.sold}+</p>
              </div>
            </a>
            <a href="${item.similarItems}" class="more-like-this-link">Tìm sản phẩm tương tự</a>
          </div>`;
  },

  renderTodaySuggestions: function (data) {
    const suggestionBody = document.querySelector(".today-suggestions-body");
    for (const item of data) {
      suggestionBody.insertAdjacentHTML("beforeend", this.htmlOfTodaySuggestedItem(item));
    }
  },

  htmlOfProductTypeTile: function (data) {
    return `<a href="${data.link}" target="_blank" rel="noopener noreferrer" class="product-type-tile">
              <img src="${data.image}" alt="${data.name}">
              <p>${data.name}</p>
            </a>`
  },

  renderProductTypes: function (data) {
    const productTypesBody = document.querySelector(".product-type-tiles");
    productTypesBody.style.cssText = `--number-of-items: ${Math.ceil(data.length / 2)};`;
    for (const item of data) {
      productTypesBody.insertAdjacentHTML("beforeend", this.htmlOfProductTypeTile(item));
    }
  }
}

export default htmlRenderer;