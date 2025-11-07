
const htmlRenderer = {

  renderBanner: function (data) {

    const { "main-banners": mainBannerData, "sub-banners": subBannerData } = data;

    const mainBanners = document.querySelector(".main-banners");
    for (let i = 0; i < mainBannerData.length; i++) {
      mainBanners.insertAdjacentHTML("beforeend", `<a href="${mainBannerData[i].link}" target="_blank"><img data-banner-index="${i}" class="${i === 0 ? "active-main-banner" : ""}" src="${mainBannerData[i].img}" alt="main banner #${i}"></a>`);
    }
    mainBanners.insertAdjacentHTML("afterend", `<a href="${subBannerData[1].link}" target="_blank"><div class="banner"><img src="${subBannerData[1].img}" alt="sub banner #${1}"></div></a>`);
    mainBanners.insertAdjacentHTML("afterend", `<a href="${subBannerData[0].link}" target="_blank"><div class="banner"><img src="${subBannerData[0].img}" alt="sub banner #${0}"></div></a>`);

    const bannerNavigation = document.querySelector(".banner-navigation");
    for (let i = 0; i < mainBannerData.length; i++) {
      bannerNavigation.insertAdjacentHTML("beforeend", `<button data-banner-navigation-index="${i}" class="banner-navigation-button ${i === 0 ? "active-banner-navigation-button" : ""}"></button>`);
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

  renderUser: function (data) {
    const username = data["username"];
    const profilePicture = data["profile-picture"];

    const avatar = document.querySelector(".avatar");
    avatar.insertAdjacentHTML("afterbegin", `<span> ${username}</span>`);
    avatar.insertAdjacentHTML("afterbegin", `<img src="${profilePicture}" alt="profile picture" >`);
  },

  renderSuggestSearch: function (data) {
    const suggestSearch = document.querySelector(".suggest-searchs");
    for (let i = 0; i < data.length; i++) {
      suggestSearch.insertAdjacentHTML("afterbegin", `<a href="${data[i]["link"]}" target="_blank">${data[i]["suggest"]}</a>`)
    }
  },

  renderNotification: function (data) {
    const notification = document.querySelector(".notification-popup-body");
    for (let i = 0; i < data.length; i++) {
      notification.insertAdjacentHTML("beforeend", ` <a href="${data[i]["link"]}" target="_blank" rel="noopener noreferrer" class="notification-link">
                                                        <img src="${data[i]["img"]}" alt="" class="notification-image">
                                                        <p class="notification-title">${data[i]["name"]}</p>
                                                        <p class="notification-content">${data[i]["description"]}</p>
                                                      </a> `)
    }
  },

  renderSearchHistory: function (data) {
    const searchHistory = document.querySelector(".search-history-popup");
    for (let i = 0; i < data.length; i++) {
      searchHistory.insertAdjacentHTML("beforeend", `<a href="${data[i]["link"]}" target="_blank"  rel="noopener noreferrer">${data[i]["name"]}</a>`)
    }
  },

  renderEmptyCart: function () {
    cart.innerHTML = `<div class="empty-cart"><span>Chưa có sản phẩm<span></div>`;
  },

  renderCart: function (data) {
    const cart = document.querySelector(".cart-popup");
    if (data.length === 0) {
      this.renderEmptyCart();
      return;
    }

    cart.innerHTML = `  
                    <div class="cart-content-header">Sằn phẩm mới xem</div>
                    <div class="cart-content-body"></div>
                    <div class="cart-content-show-all">
                      <span>${data.length} hàng trong giỏ</span>
                      <a href="#" target="_blank" rel="noopener noreferrer">Xem giỏ hàng</a>
                    </div> `

    const cartBody = document.querySelector(".cart-content-body");
    for (let i = 0; i < data.length; i++) {
      cartBody.insertAdjacentHTML("afterbegin", ` <a href="${data[i]["link"]}" target="_blank" rel="noopener noreferrer" class="cart-content-item">
                                                    <img src="${data[i]["image"]}" alt="">
                                                    <span class="cart-item-name">${data[i]["name"]}</span>
                                                    <span class="cart-item-price">${data[i]["price"]}</span>
                                                  </a>
                                                  `);
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
  }
}

export default htmlRenderer;