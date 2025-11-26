import htmlRenderer from "./htmlRenderer.js";
import eventManager from "./eventManager.js";
import Cookies from "https://cdn.jsdelivr.net/npm/js-cookie@3.0.5/dist/js.cookie.mjs";

console.log("start");

function renderBanner() {
  fetch("/api/banners")
    .then(data => data.json())
    .then(data => {
      htmlRenderer['/'].renderBanner(data);
      eventManager['/'].addBannerEventListeners();
    });
}

function renderUser(sessionCode) {
  if (sessionCode) {
    fetch("/api/user/", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      credentials: "include",
      body: JSON.stringify({ sessionCode })
    })
      .then(response => response.json())
      .then(response => {
        const { status, title, message, data, error } = response;
        if (status === 200) {
          htmlRenderer['/'].renderUser(data);
          eventManager['/'].addLogoutEvent();
        }
        else if (status === 401 || status === 404) {
          htmlRenderer['/'].renderAnonymousUser();
        }
      })
      .catch(error => {
        console.log(`renderUser: ${error}`);
      });
  }
  else {
    htmlRenderer['/'].renderAnonymousUser();
  }
}

function renderSuggestSearch() {
  fetch("/api/suggest-search/", {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({})
  })
    .then(response => response.json())
    .then(response => {
      const { status, title, message, data, error } = response;
      if (status === 200) {
        htmlRenderer['/'].renderSuggestSearch(data);
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
        htmlRenderer['/'].renderNotification(data);
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
      htmlRenderer['/'].renderSearchHistory(response.data);
    })
    .catch(error => {
      console.log(`error when getting search histories: ${JSON.stringify(error)}`)
    });
}

function renderSearchAd() {
  fetch('/api/searchAd')
    .then(response => response.json())
    .then(response => {
      htmlRenderer['/'].renderSearchAd(response.data);
    })
    .catch(error => {
      console.log(`error when getting search histories: ${JSON.stringify(error)}`)
    });
}

function renderSearch(sessionCode) {
  eventManager['/'].addSearchingEvent();
  renderSuggestSearch();
  renderSearchAd();
  renderSearchHistory(sessionCode);
}

async function renderCart(sessionCode) {
  try {
    const dataStream = await fetch("/api/myCart-simple", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ sessionCode })
    })
    const { status, title, message, data, error } = await dataStream.json();
    htmlRenderer['/'].renderCart(data);
  }
  catch (error) {
    console.log(`error at /cart: ${error}`);
  }
}

function renderProductTypes() {
  fetch(`./api/productTypes`)
    .then(data => data.json())
    .then(data => {
      htmlRenderer['/'].renderProductTypes(data);
      eventManager['/'].addProductTypesSectionEventListener();
    })
}

function renderFlashSale() {
  fetch(`/api/flashsale`)
    .then(data => data.json())
    .then(data => {
      htmlRenderer['/'].renderFlashSale(data);
      eventManager['/'].addFlashSaleSectionListener();
    })
}

function renderVoucherBanner() {
  fetch(`./api/voucherBanners`)
    .then(data => data.json())
    .then(data => {
      htmlRenderer['/'].renderVoucherBanners(data);
    })
}

function renderMallBanners() {
  fetch(`./api/mallBanners`)
    .then(data => data.json())
    .then(data => {
      htmlRenderer['/'].renderMallBanners(data);
    })
}

function renderMallPromotions() {
  fetch(`./api/mallPromotions`)
    .then(data => data.json())
    .then(data => {
      htmlRenderer['/'].renderMallPromotions(data);
      eventManager['/'].addMallPromotionsSectionListener();
    })
}

function renderTopSearches() {
  fetch(`./api/topSearches`)
    .then(data => data.json())
    .then(data => {
      htmlRenderer['/'].renderTopSearches(data);
      eventManager['/'].addTopSearchesSectionListener();
    })
}

function renderTodaySuggestions() {
  fetch(`./api/todaySuggestions`)
    .then(data => data.json())
    .then(data => {
      htmlRenderer['/'].renderTodaySuggestions(data);
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

