import htmlRenderer from "./htmlRenderer.js";
import eventManager from "./eventManager.js";
import dataManager from "./dataManager.js";
import { devData } from "./utils.js";

console.log("start");

function renderBanner() {
  fetch("/api/banners")
    .then(data => data.json())
    .then(data => {
      htmlRenderer.renderBanner(data);
      eventManager.addBannerEventListeners();
    });
}

function renderUser(sessionCode) {
  if (sessionCode) {
    fetch("/api/user/", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      credentials: "include",
      body: JSON.stringify({ ...devData.user.loginData, sessionCode })
    })
      .then(response => response.json())
      .then(response => {
        const { status, title, message, data, error } = response;
        if (status === 200) {
          htmlRenderer.renderUser(data);
          eventManager.addLogoutEvent();
        }
        else if (status === 401) {
          htmlRenderer.renderAnonymousUser();
        }
      })
      .catch(error => {
        console.log(`renderUser: ${error}`);
      });
  }
  else {
    htmlRenderer.renderAnonymousUser();
  }
}

function renderSuggestSearch() {
  fetch("/api/suggest-search/", {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(devData.user.loginData)
  })
    .then(response => response.json())
    .then(response => {
      const { status, title, message, data, error } = response;
      if (status === 200) {
        htmlRenderer.renderSuggestSearch(data);
      }
      else {
        throw new Error(response);
      }
    })
    .catch(error => {
      console.log(`renderSuggestSearch: ${error}`);
    });
}

function renderNotifications() {
  fetch("/api/notifications/", {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ sessionCode: Cookies.get("sessionCode") })
  })
    .then(response => response.json())
    .then(response => {
      const { status, title, message, data, error } = response;
      if (status === 200) {
        htmlRenderer.renderNotification(data);
      }
      else {
        throw new Error(response);
      }
    })
    .catch(error => {
      console.log(`renderNotifications: ${error}`);
    });
}

function renderSearchHistory(sessionCode) {
  fetch('/api/search-histories', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({ sessionCode })
  })
    .then(response => response.json())
    .then(response => {
      htmlRenderer.renderSearchHistory(response.data);
    })
    .catch(error => {
      console.log(`error when getting search histories: ${JSON.stringify(error)}`)
    });
}

function renderSearchAd() {
  fetch('/api/searchAd')
    .then(response => response.json())
    .then(response => {
      htmlRenderer.renderSearchAd(response.data);
    })
    .catch(error => {
      console.log(`error when getting search histories: ${JSON.stringify(error)}`)
    });
}

function renderSearch(sessionCode) {
  eventManager.addSearchingEvent();
  renderSuggestSearch();
  renderSearchAd();
  renderSearchHistory(sessionCode);
}

function renderCart() {
  fetch("/api/cart", { method: "POST", headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(devData.user.loginData) })
    .then(data => data.json())
    .then(data => htmlRenderer.renderCart(data))
    .catch(error => htmlRenderer.renderEmptyCart());
}

function renderProductTypes() {
  fetch(`./api/productTypes`)
    .then(data => data.json())
    .then(data => {
      htmlRenderer.renderProductTypes(data);
      eventManager.addProductTypesSectionEventListener();
    })
}

function renderFlashSale() {
  fetch(`/api/flashsale`)
    .then(data => data.json())
    .then(data => {
      htmlRenderer.renderFlashSale(data);
      eventManager.addFlashSaleSectionListener();
    })
}

function renderVoucherBanner() {
  fetch(`./api/voucherBanners`)
    .then(data => data.json())
    .then(data => {
      htmlRenderer.renderVoucherBanners(data);
    })
}

function renderMallBanners() {
  fetch(`./api/mallBanners`)
    .then(data => data.json())
    .then(data => {
      htmlRenderer.renderMallBanners(data);
    })
}

function renderMallPromotions() {
  fetch(`./api/mallPromotions`)
    .then(data => data.json())
    .then(data => {
      htmlRenderer.renderMallPromotions(data);
      eventManager.addMallPromotionsSectionListener();
    })
}

function renderTopSearches() {
  fetch(`./api/topSearches`)
    .then(data => data.json())
    .then(data => {
      htmlRenderer.renderTopSearches(data);
      eventManager.addTopSearchesSectionListener();
    })
}

function renderTodaySuggestions() {
  fetch(`./api/todaySuggestions`)
    .then(data => data.json())
    .then(data => {
      htmlRenderer.renderTodaySuggestions(data);
    })
}

const sessionCode = Cookies.get('sessionCode');

renderUser(sessionCode);
renderSearch(sessionCode)
renderBanner();
renderNotifications(sessionCode);
renderCart(sessionCode);
renderProductTypes();
renderFlashSale();
renderVoucherBanner();
renderMallBanners();
renderMallPromotions();
renderTopSearches();
renderTodaySuggestions(sessionCode);

